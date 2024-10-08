import { describe, expect, it } from 'vitest';
import { mount } from '@vue/test-utils';
import Breadcrumbs from './breadcrumbs.vue';
import type { AcvBreadcrumbsProps } from './breadcrumbs.ts';

describe('test Breadcrumbs component', () => {
  it('default props', () => {
    const wrapper = mount(Breadcrumbs);
    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "maxItems": undefined,
        "multiline": false,
        "separatorIcon": undefined,
        "size": "md",
        "to": undefined,
      }
    `);
  });

  it('pass props', () => {
    const wrapper = mount(Breadcrumbs, {
      props: {
        title: 'test',
      } as AcvBreadcrumbsProps,
    });

    expect(wrapper.props()).toMatchInlineSnapshot(`
      {
        "maxItems": undefined,
        "multiline": false,
        "separatorIcon": undefined,
        "size": "md",
        "to": undefined,
      }
    `);
  });

  it('renders', () => {
    const wrapper = mount(Breadcrumbs);
    expect(wrapper.html()).toMatchInlineSnapshot(`"<div data-v-22b64bca="" class="acv-breadcrumbs" aria-label="Breadcrumb" role="navigation"></div>"`);
  });
});
