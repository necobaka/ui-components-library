---
title: Ribbon component
lang: en-US
editLink: true
---

# Ribbon

Short description for Ribbon component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<RibbonBasic />

::: details Source code
<<< @/demos/ribbon/RibbonBasic.vue
:::

## Related components

- [Alert](/components/alert/alert.doc)

## Props

| Prop name | Description           | Type    | Values | Default |
| --------- | --------------------- | ------- | ------ | ------- |
| alerts    | List of alerts        | Array   | -      |         |
| hideClose | Hide the close button | boolean | -      |         |

## Events

| Event name | Properties                                                                                   | Description                        |
| ---------- | -------------------------------------------------------------------------------------------- | ---------------------------------- |
| close      | **eventName** `string` - The name of the event<br/>**alertIndex** `number` - The alert index | Triggered when the alert is closed |

## Slots

| Name    | Description              | Bindings |
| ------- | ------------------------ | -------- |
| default | The default slot content |          |
