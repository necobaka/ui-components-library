---
title: Carousel component
lang: en-US
editLink: true
---

# Carousel

Short description for Carousel component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<CarouselBasic />

::: details Source code
<<< @/demos/carousel/CarouselBasic.vue
:::

## Best practices

A Carousel should ...

## Related components

- [Button](/components/button/button.doc)

## Props

| Prop name   | Description                 | Type   | Values | Default |
| ----------- | --------------------------- | ------ | ------ | ------- |
| title       | Title of the Carousel       | string | -      |         |
| description | Description of the Carousel | string | -      |         |

## Events

| Event name | Properties                                                                                                      | Description                            |
| ---------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| close      | **eventName** `string` - The name of the event<br/>**visible** `string` - The visibility state of the component | Triggered when the component is closed |

## Slots

| Name        | Description                  | Bindings                                              |
| ----------- | ---------------------------- | ----------------------------------------------------- |
| default     | The default slot content     |                                                       |
| description | The description slot content | **description** `string` - The description prop value |
