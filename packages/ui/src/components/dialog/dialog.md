Informs users while preserving the current page state.

:::info Figma component anatomy
https://www.figma.com/file/AOtI028uCFzAmnADVCz872/Documentation?node-id=2%3A9
:::

## Basic usage

Dialog pops up a dialog box, and it's quite customizable.
Set the `visible` attribute with a `Boolean`, and Dialog shows when it is `true`.
Dialog has two parts: `body` and `footer`, and the latter requires a `slot` named `footer`.
The optional `title` attribute (empty by default) is for defining a title.
Based on design recommendation, the dialog should have minimal sizes: width 512px and height 184px.

<DialogBasic />

::: details Source code
<<< @/demos/dialog/DialogBasic.vue
:::

## Dialog Size

Dialog by default will use `width-size: 'small'` and `height-size: 'auto'`.
However, both Width and Height can be customized as per below:

### Height

Two types of height is accepted by `height-size` prop:
**fixed-auto**: The dialog height will auto adjusted based on the content of the dialog.
No scrollbar will be rendered in the dialog, when the dialog is larger than the viewport,
an outer scrollbar will display.
**fixed-medium**: Fix height of 640px will be used for dialog,
when the content of dialog is more than 640px, inner scrollbar will display.
When the dialog is larger than the viewport, an outer scrollbar will display.

### Width

Four fixed width size can be used for dialog through `width-size` prop:
small (512px) / medium (672px) / large (832px) / x-large (1184px)


## Dialog Content

The content of Dialog can be anything, even a table or a form.
This example shows how to use Acronis UI Kit Table and Form with Dialog.

## Fullscreen

Set `variant: 'fullscreen'`

## Clean dialog

Clean dialogs does not contain header and footer.
It is usually used with simple constructions from the text, icons, small lists, with one or a small numbers of possible actions.
Some example usages are: welcome screen, onboarding with pagination or stepper, summary of the properties of a device, etc.

### Size variants

Clean dialogs support all the size variants of basic dialog by using `width-size` and `height-size` props.

### Height:

### Width:

### Basic clean

Basic clean dialog is the same as clean dialog, but without the preset paddings and fade edges.


## Layout options

Use `aside` slot for rendering a side panel.
Use `body-header` slot for rendering elements above body scrollbar.

:::tip
If the variable bound to `visible` is managed in Vuex store, the `.sync` can not work properly. In this case, please remove the `.sync` modifier, listen to `open` and `close` events of Dialog, and commit Vuex mutations to update the value of that variable in the event handlers.
:::

## Before close

Dialog will require a confirm before close
This example demonstrates how `before-close` is used.


:::tip
`before-close` only works when user clicks the close icon or the backdrop.
If you have buttons that close the Dialog in the `footer` named slot,
you can add what you would do with `before-close` in the buttons' click event handler.
:::

## Nested Dialog

If a Dialog is nested in another Dialog, `append-to-body` is required.

:::tip
Normally we do not recommend using nested Dialog.
If you need multiple Dialogs rendered on the page,
you can simply flat them so that they're siblings to each other.
If you must nest a Dialog inside another Dialog, set `append-to-body` of the nested Dialog to true,
and it will append to body instead of its parent node, so both Dialogs can be correctly rendered.
:::

[//]: # (<DialogNestedExample />)


::: warning
width-size `x-large` has deprecated
:::

## Related components

- [Button](/components/button/button.doc)
