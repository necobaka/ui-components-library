import type { UserConfig } from 'vitepress';
import { defineConfig } from 'vitepress';
import { nav, sidebar, vite } from './configuration';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'UI components library',
  description: 'UI Kit is a Vue.js components library built on a System Design',
  head: [['link', { rel: 'icon', href: '/ui-kit.svg' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config

    nav,

    sidebar,

    editLink: {
      pattern: 'https://github.com/acronis/ui-components-library/edit/main/packages/documentation/:path'
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/acronis/ui-components-library' }
    ],

    footer: {
      message: 'MIT Licensed',
      copyright:
          'Copyright © 2024-present UI-kit components library contributors',
    }
  },
  vite
} as UserConfig);
