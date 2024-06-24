# CSS variables

UI component library is using [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_custom_properties) to define colors, typography, spacing, 
and other design tokens according used theme.

## Syntax

--acv-_\<**category**\>_-_\<**name**\>_

- _\<**category**\>_ - category of the token (base, color, font, spacing, component name etc.)
- _\<**name**\>_ - name of the token, usually describes the CSS property or the purpose of the token (border, display, color, etc.)

::: tip
[List of CSS variables](#list-of-basic-variables) is available at the bottom of this page.
:::

## List of basic variables

Basic variables are used to define the basic design tokens like colors, typography, spacing, etc.

```css
:root {
    /* border */
    --acv-base-border-width-00: 0px;
    --acv-base-border-width-01: 1px;
    --acv-base-border-width-02: 2px;
    --acv-base-border-width-03: 3px;
    
    /* font */
    --acv-base-font-family-inter: Inter, sans-serif;
    --acv-base-font-family-open-sans: Open Sans, sans-serif;
    --acv-base-font-line-height-16: 16px;
    --acv-base-font-line-height-20: 20px;
    --acv-base-font-line-height-24: 24px;
    --acv-base-font-line-height-32: 32px;
    --acv-base-font-line-height-40: 40px;
    --acv-base-font-line-height-48: 48px;
    --acv-base-font-line-height-56: 56px;
    --acv-base-font-line-height-64: 64px;
    --acv-base-font-size-10: 10px;
    --acv-base-font-size-11: 11px;
    --acv-base-font-size-12: 12px;
    --acv-base-font-size-14: 14px;
    --acv-base-font-size-16: 16px;
    --acv-base-font-size-18: 18px;
    --acv-base-font-size-24: 24px;
    --acv-base-font-size-32: 32px;
    --acv-base-font-size-40: 40px;
    --acv-base-font-size-48: 48px;
    --acv-base-font-size-56: 56px;
    --acv-base-font-weight-100: 100;
    --acv-base-font-weight-300: 300;
    --acv-base-font-weight-400: 400;
    --acv-base-font-weight-500: 500;
    --acv-base-font-weight-600: 600;
    --acv-base-font-weight-700: 700;
    --acv-base-font-weight-900: 900;
    
    /* height */
    --acv-base-height-16: 16px;
    --acv-base-height-24: 24px;
    --acv-base-height-32: 32px;
    --acv-base-height-40: 40px;
    --acv-base-height-48: 48px;
    
    /* radius */
    --acv-base-radius-00: 0px;
    --acv-base-radius-01: 1px;
    --acv-base-radius-02: 2px;
    --acv-base-radius-03: 3px;
    --acv-base-radius-04: 4px;
    --acv-base-radius-06: 6px;
    --acv-base-radius-08: 8px;
    --acv-base-radius-16: 16px;
    --acv-base-radius-circle: 999px;
    
    /* shadow */
    --acv-base-shadow-blur-08: 4px;
    --acv-base-shadow-blur-20: 20px;
    --acv-base-shadow-position-y-00: 0px;
    --acv-base-shadow-position-y-04: 4px;
    --acv-base-shadow-position-y-08: 8px;
    
    /* spacing */
    --acv-base-spacing-00: 0px;
    --acv-base-spacing-02: 2px;
    --acv-base-spacing-04: 4px;
    --acv-base-spacing-08: 8px;
    --acv-base-spacing-12: 12px;
    --acv-base-spacing-16: 16px;
    --acv-base-spacing-24: 24px;
    --acv-base-spacing-32: 32px;
    --acv-base-spacing-40: 40px;
    --acv-base-spacing-48: 48px;
    --acv-base-spacing-56: 56px;
}
```


## List of theme variables

Theme variables are used to define the theme-specific design tokens like colors, spacing, components, etc.

```css
:root {
    --acv-color-brand-primary: hsl(215deg, 68%, 46%);
    --acv-color-brand-secondary: hsl(218deg, 57%, 97%);
    --acv-color-brand-tertiary: hsl(218deg, 57%, 97%);
    
    /* button */
    --acv-color-button-active-danger: hsl(0deg, 81%, 45%);
    --acv-color-button-active-inversed: hsl(0deg, 0%, 100%, 0.05);
    --acv-color-button-active-primary: hsl(215deg, 68%, 38%);
    --acv-color-button-active-secondary: hsl(215deg, 56%, 89%);
    --acv-color-button-danger: hsl(0deg, 81%, 57%);
    --acv-color-button-disabled: hsl(215deg, 68%, 46%, 0.3);
    --acv-color-button-disabled-danger: hsl(0deg, 81%, 57%, 0.3);
    --acv-color-button-disabled-inversed: hsl(0deg, 0%, 100%, 0.1);
    --acv-color-button-focus: hsl(214deg, 81%, 84%);
    --acv-color-button-hover-danger: hsl(0deg, 65%, 51%);
    --acv-color-button-hover-inversed: hsl(0deg, 0%, 100%, 0.1);
    --acv-color-button-hover-primary: hsl(215deg, 68%, 38%);
    --acv-color-button-hover-secondary: hsl(214deg, 57%, 95%);
    --acv-color-button-inversed: hsl(0deg, 0%, 100%, 0.2);
    --acv-color-button-primary: hsl(215deg, 68%, 46%);
    --acv-color-button-secondary: hsl(215deg, 68%, 46%);
    
    /* divider */
    --acv-color-divider-inversed-primary: hsl(0deg, 0%, 100%);
    --acv-color-divider-inversed-secondary: hsl(0deg, 0%, 100%);
    --acv-color-divider-primary: hsl(215deg, 68%, 46%);
    --acv-color-divider-secondary: hsl(215deg, 60%, 92%);

    /* shadows */
    --acv-color-effect-shadow-primary: hsl(215deg, 30%, 20%, 0.2);

    /* form */
    --acv-color-form-active: hsl(215deg, 68%, 46%);
    --acv-color-form-disabled-primary: hsl(215deg, 68%, 46%, 0.1);
    --acv-color-form-disabled-secondary: hsl(215deg, 68%, 46%, 0.1);
    --acv-color-form-disabled-tertiary: hsl(215deg, 59%, 84%);
    --acv-color-form-error: hsl(0deg, 81%, 57%);
    --acv-color-form-focus: hsl(214deg, 81%, 84%);
    --acv-color-form-hover: hsl(215deg, 68%, 38%);
    --acv-color-form-primary: hsl(0deg, 0%, 100%);
    --acv-color-form-secondary: hsl(215deg, 59%, 84%);

    /* icon */
    --acv-color-icon-disabled: hsl(215deg, 68%, 46%, 0.3);
    --acv-color-icon-disabled-inversed: hsl(0deg, 0%, 100%, 0.7);
    --acv-color-icon-inversed: hsl(0deg, 0%, 100%);
    --acv-color-icon-primary: hsl(215deg, 68%, 46%);
    --acv-color-icon-status-critical: hsl(11deg, 73%, 41%);
    --acv-color-icon-status-danger: hsl(0deg, 72%, 45%);
    --acv-color-icon-status-info: hsl(215deg, 68%, 38%);
    --acv-color-icon-status-neutral: hsl(0deg, 0%, 4%);
    --acv-color-icon-status-success: hsl(88deg, 85%, 24%);
    --acv-color-icon-status-warning: hsl(30deg, 50%, 37%);
    
    /* link */
    --acv-color-link-disabled: hsl(215deg, 68%, 46%, 0.3);
    --acv-color-link-disabled-inversed: hsl(0deg, 0%, 100%, 0.7);
    --acv-color-link-inversed-primary: hsl(0deg, 0%, 100%);
    --acv-color-link-inversed-secondary: hsl(0deg, 0%, 100%);
    --acv-color-link-primary: hsl(215deg, 68%, 46%);
    --acv-color-link-secondary: hsl(0deg, 0%, 100%);
    
    /* nav */
    --acv-color-nav-active-primary: hsl(213deg, 100%, 45%);
    --acv-color-nav-active-secondary: hsl(215deg, 56%, 89%);
    --acv-color-nav-focus-primary: hsl(213deg, 100%, 45%);
    --acv-color-nav-focus-secondary: hsl(215deg, 56%, 89%);
    --acv-color-nav-hover-primary: hsl(0deg, 0%, 100%, 0.4);
    --acv-color-nav-hover-secondary: hsl(214deg, 57%, 95%);
    --acv-color-nav-primary: hsl(215deg, 100%, 15%);
    --acv-color-nav-secondary: hsl(0deg, 0%, 100%);
    
    /* status */
    --acv-color-status-critical-primary: hsl(32deg, 95%, 92%);
    --acv-color-status-critical-secondary: hsl(29deg, 100%, 53%);
    --acv-color-status-danger-primary: hsl(0deg, 100%, 96%);
    --acv-color-status-danger-secondary: hsl(0deg, 81%, 57%);
    --acv-color-status-info-primary: hsl(215deg, 81%, 96%);
    --acv-color-status-info-secondary: hsl(214deg, 80%, 58%);
    --acv-color-status-neutral-primary: hsl(220deg, 7%, 92%);
    --acv-color-status-neutral-secondary: hsl(216deg, 8%, 61%);
    --acv-color-status-success-primary: hsl(75deg, 57%, 95%);
    --acv-color-status-success-secondary: hsl(75deg, 68%, 45%);
    --acv-color-status-warning-primary: hsl(46deg, 100%, 95%);
    --acv-color-status-warning-secondary: hsl(45deg, 100%, 51%);
    
    /* surface */
    --acv-color-surface-fixed-primary: hsl(215deg, 30%, 20%, 0.9);
    --acv-color-surface-fixed-secondary: hsl(0deg, 0%, 100%);
    --acv-color-surface-inversed-primary: hsl(0deg, 0%, 100%);
    --acv-color-surface-inversed-secondary: hsl(0deg, 0%, 100%, 0.95);
    --acv-color-surface-primary: hsl(218deg, 57%, 97%);
    --acv-color-surface-secondary: hsl(214deg, 57%, 95%);
    
    /* text */
    --acv-color-text-disabled: hsl(215deg, 30%, 20%, 0.4);
    --acv-color-text-error: hsl(0deg, 81%, 57%);
    --acv-color-text-highlight-result: hsl(52deg, 100%, 50%);
    --acv-color-text-inversed-primary: hsl(0deg, 0%, 100%);
    --acv-color-text-inversed-secondary: hsl(0deg, 0%, 100%, 0.7);
    --acv-color-text-primary: hsl(215deg, 30%, 20%);
    --acv-color-text-secondary: hsl(215deg, 30%, 20%, 0.7);
    --acv-color-text-status-critical: hsl(11deg, 73%, 41%);
    --acv-color-text-status-danger: hsl(0deg, 72%, 45%);
    --acv-color-text-status-info: hsl(215deg, 68%, 38%);
    --acv-color-text-status-neutral: hsl(215deg, 30%, 20%);
    --acv-color-text-status-success: hsl(88deg, 85%, 24%);
    --acv-color-text-status-warning: hsl(30deg, 50%, 37%);

    /* border */
    --acv-border-regular: var(--acv-border-width-01, 1px);
    --acv-border-large: var(--acv-border-width-02, 2px);
    --acv-border-x-large: var(--acv-border-width-03, 3px);

    /* font */
    --acv-font-family-default: var(--acv-font-family-inter), sans-serif;
    --acv-font-line-height-x-small: var(--acv-font-line-height-16, 16px);
    --acv-font-line-height-small: var(--acv-font-line-height-20, 20px);
    --acv-font-line-height-regular: var(--acv-font-line-height-24, 24px);
    --acv-font-line-height-medium: var(--acv-font-line-height-32, 32px);
    --acv-font-line-height-large: var(--acv-font-line-height-40, 40px);
    --acv-font-line-height-x-large: var(--acv-font-line-height-48, 48px);
    --acv-font-size-fineprint: var(--acv-font-size-10, 10px);
    --acv-font-size-note: var(--acv-font-size-11, 11px);
    --acv-font-size-caption: var(--acv-font-size-12, 12px);
    --acv-font-size-body: var(--acv-font-size-14, 14px);
    --acv-font-size-accent: var(--acv-font-size-16, 16px);
    --acv-font-size-lead: var(--acv-font-size-18, 18px);
    --acv-font-size-title: var(--acv-font-size-24, 24px);
    --acv-font-size-display: var(--acv-font-size-32, 32px);
    --acv-font-weight-regular: var(--acv-font-weight-400, 400);
    --acv-font-weight-accent: var(--acv-font-weight-500, 500);
    --acv-font-weight-strong: var(--acv-font-weight-600, 600);

    /* height */
    --acv-height-x-small: var(--acv-height-16, 16px);
    --acv-height-small: var(--acv-height-24, 24px);
    --acv-height-regular: var(--acv-height-32, 32px);
    --acv-height-large: var(--acv-height-40, 40px);
    --acv-height-x-large: var(--acv-height-48, 48px);

    /* radius */
    --acv-radius-zero: var(--acv-radius-00, 0px);
    --acv-radius-small: var(--acv-radius-02, 2px);
    --acv-radius-regular: var(--acv-radius-04, 4px);
    --acv-radius-medium: var(--acv-radius-06, 6px);
    --acv-radius-large: var(--acv-radius-08, 8px);
    --acv-radius-circle: var(--acv-radius-circle, 999px);

    /* shadow */
    --acv-shadow-blur-small: var(--acv-shadow-blur-08, 4px);
    --acv-shadow-blur-regular: var(--acv-shadow-blur-20, 20px);
    --acv-shadow-position-y-small: var(--acv-shadow-position-y-04, 4px);
    --acv-shadow-position-y-regular: var(--acv-shadow-position-y-08, 8px);

    /* spacing */
    --acv-spacing-zero: var(--acv-spacing-00, 0px);
    --acv-spacing-xx-small: var(--acv-spacing-02, 2px);
    --acv-spacing-x-small: var(--acv-spacing-04, 4px);
    --acv-spacing-small: var(--acv-spacing-08, 8px);
    --acv-spacing-regular: var(--acv-spacing-16, 16px);
    --acv-spacing-large: var(--acv-spacing-24, 24px);
    --acv-spacing-x-large: var(--acv-spacing-32, 32px);
}
```

