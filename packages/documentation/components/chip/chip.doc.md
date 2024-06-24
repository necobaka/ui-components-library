---
title: Chip component
lang: en-US
editLink: true
---

# Chip

Used to represent a list of selected items.

:::info Figma mockups
https://www.figma.com/file/26NmvTgYD5YdwULsTIgikp/Data-Loss-Prevention?node-id=5836%3A22129
:::

## Basic usage

<ChipBasic />

## Multiline

<ChipMultiline />

## Best practices

A Chip should ...

## Related components

- [Icon](/components/Icon/Icon.doc)
- [Button](/components/Button/Button.doc)

## Props

| Prop name | Description           | Type    | Values | Default |
| --------- | --------------------- | ------- | ------ | ------- |
| iconName  | Icon name of the Chip | string  | -      |         |
| showClose | Is close icon visible | boolean | -      | false   |

## Events

| Event name | Properties                     | Description                               |
| ---------- | ------------------------------ | ----------------------------------------- |
| close      | **event** `string` - The event | Emitted when the close button is clicked. |

## Slots

| Name    | Description  | Bindings |
| ------- | ------------ | -------- |
| default | Chip content |          |
