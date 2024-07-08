import { promises } from 'node:fs';
import path from 'node:path';
import { downloadIcons } from '@acronis-platform/figma-fetcher';
import { toPascalCase } from './utils/toPascalCase.ts';

async function run() {
  const names = new Set<string>();
  const icons = new Map<string, string[]>();
  await downloadIcons({ onBeforeDownloadIcon, onDownloadedIcon });

  function onBeforeDownloadIcon(name: string) {
    const regex = /^\w\w/;

    if (!regex.test(name)) {
      console.error('Wrong icon name! ->', name);
      return false;
    }
    if (names.has(name)) {
      console.error('Duplicate icon name -> ', name);
      return false;
    }
    names.add(name);

    return true;
  }

  /**
   * Create a Vue component for each downloaded icon
   */
  async function onDownloadedIcon({
    content,
    pathname,
  }: {
    content: string
    pathname: string
  }) {
    const fileContentDTs = `declare const _default: import("vue").DefineComponent<{}, {}, {}, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<{}>>, {}, {}>;
export default _default;`;
    const fileContent = `<template>${content}</template>`;
    const prefix = 'Icon';

    const idx = pathname.indexOf('-');
    const rootDirectory = path.join('vue', pathname.substring(0, idx));
    const fileName = `${prefix}${toPascalCase(pathname)}`;
    const file = path.resolve(rootDirectory, `${fileName}.vue`);
    const fileDTs = path.resolve(rootDirectory, `${fileName}.vue.d.ts`);
    const imagePath = path.join(rootDirectory, `${fileName}.svg`);

    await promises.mkdir(path.dirname(file), { recursive: true });
    await Promise.all([
      promises.writeFile(fileDTs, fileContentDTs),
      promises.writeFile(file, fileContent),
      promises.writeFile(imagePath, content, 'utf8'),
    ]);

    icons.set(rootDirectory, [...(icons.get(rootDirectory) || []), file]);
  }

  for (const directory of icons.keys()) {
    const barrel = path.join(path.dirname(directory), `${path.basename(directory)}.js`);
    const barrelDTs = path.join(path.dirname(directory), `${path.basename(directory)}.d.ts`);
    let fileContent = '';
    for (const icon of icons.get(directory)!) {
      const directoryName = path.dirname(icon);
      const parentFolder = path.basename(directoryName);
      const fileName = path.basename(icon);

      const result = path.join(parentFolder, fileName);
      fileContent = `${fileContent ? `${fileContent}\n` : ''}export { default as ${path.parse(icon).name} } from './${result}'`;
    }
    await Promise.all([
      promises.writeFile(barrel, fileContent),
      promises.writeFile(barrelDTs, fileContent),
    ]);
  }
}

run();