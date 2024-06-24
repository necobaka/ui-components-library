---
title: Menu component
lang: en-US
editLink: true
---

# Menu

Short description for Menu component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<MenuBasic />

::: details Source code
<<< @/demos/menu/MenuBasic.vue
:::

## Variants

<MenuVariants />

## Best practices

A Menu should ...

## Related components

- A related component.
- Another related component.

## Props

| Prop name   | Description             | Type   | Values | Default |
| ----------- | ----------------------- | ------ | ------ | ------- |
| title       | Title of the Menu       | string | -      |         |
| description | Description of the Menu | string | -      |         |

## Events

| Event name | Properties                                | Description                            |
| ---------- | ----------------------------------------- | -------------------------------------- |
| close      | **payload** `string` - The first argument | Triggered when the component is closed |

## Slots

| Name        | Description                  | Bindings |
| ----------- | ---------------------------- | -------- |
| default     | The default slot content     |          |
| description | The description slot content |          |
