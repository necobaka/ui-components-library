---
title: Stepper component
lang: en-US
editLink: true
---

# Stepper

Short description for stepper component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<stepperBasic />

::: details Source code
<<< @/demos/stepper/StepperBasic.vue
:::

## Variants

<stepperVariants />

## Best practices

A stepper should ...

## Related components

- A related component.
- Another related component.

## Props

| Prop name   | Description                | Type   | Values | Default |
| ----------- | -------------------------- | ------ | ------ | ------- |
| title       | Title of the stepper       | string | -      |         |
| description | Description of the stepper | string | -      |         |

## Events

| Event name | Properties                                | Description                            |
| ---------- | ----------------------------------------- | -------------------------------------- |
| close      | **payload** `string` - The first argument | Triggered when the component is closed |

## Slots

| Name        | Description                  | Bindings |
| ----------- | ---------------------------- | -------- |
| default     | The default slot content     |          |
| description | The description slot content |          |
