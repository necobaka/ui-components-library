---
title: Virtual Scroll component
lang: en-US
editLink: true
---

# Virtual Scroll

Short description for VirtualScroll component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<VirtualScrollBasic />

::: details Source code
<<< @/demos/virtual-scroll/VirtualScrollBasic.vue
:::

## Variants

<VirtualScrollVariants />

## Best practices

A VirtualScroll should ...

## Related components

- A related component.
- Another related component.

## Props

| Prop name   | Description                      | Type   | Values | Default |
| ----------- | -------------------------------- | ------ | ------ | ------- |
| title       | Title of the VirtualScroll       | string | -      |         |
| description | Description of the VirtualScroll | string | -      |         |

## Events

| Event name | Properties                                | Description                            |
| ---------- | ----------------------------------------- | -------------------------------------- |
| close      | **payload** `string` - The first argument | Triggered when the component is closed |

## Slots

| Name        | Description                  | Bindings |
| ----------- | ---------------------------- | -------- |
| default     | The default slot content     |          |
| description | The description slot content |          |
