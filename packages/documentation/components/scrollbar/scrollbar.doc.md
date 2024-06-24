---
title: Scrollbar component
lang: en-US
editLink: true
---

# Scrollbar

Short description for scrollbar component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<scrollbarBasic />

::: details Source code
<<< @/demos/scrollbar/ScrollbarBasic.vue
:::

## Variants

<scrollbarVariants />

## Best practices

A scrollbar should ...

## Related components

- A related component.
- Another related component.

## Props

| Prop name   | Description                  | Type   | Values | Default |
| ----------- | ---------------------------- | ------ | ------ | ------- |
| title       | Title of the scrollbar       | string | -      |         |
| description | Description of the scrollbar | string | -      |         |

## Events

| Event name | Properties                                | Description                            |
| ---------- | ----------------------------------------- | -------------------------------------- |
| close      | **payload** `string` - The first argument | Triggered when the component is closed |

## Slots

| Name        | Description                  | Bindings |
| ----------- | ---------------------------- | -------- |
| default     | The default slot content     |          |
| description | The description slot content |          |
