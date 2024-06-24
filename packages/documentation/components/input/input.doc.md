---
title: Input component
lang: en-US
editLink: true
---

# Input

Short description for Input component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<InputBasic />

::: details Source code
<<< @/demos/input/InputBasic.vue
:::

## Variants

<InputVariants />

## Best practices

A Input should ...

## Related components

- A related component.
- Another related component.

## Props

| Prop name  | Description                               | Type   | Values | Default |
| ---------- | ----------------------------------------- | ------ | ------ | ------- |
| type       | Description of the Input                  | string | -      |         |
| trueValue  | Value of the Checkbox if it's checked     | union  | -      |         |
| falseValue | Value of the Checkbox if it's not checked | union  | -      |         |

## Events

| Event name | Properties                                | Description                            |
| ---------- | ----------------------------------------- | -------------------------------------- |
| close      | **payload** `string` - The first argument | Triggered when the component is closed |
