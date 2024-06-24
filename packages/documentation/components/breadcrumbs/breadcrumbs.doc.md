---
title: Breadcrumbs component
lang: en-US
editLink: true
---

# Breadcrumbs

Short description for Breadcrumbs component...

:::info Figma component anatomy
https://www.figma.com/file/
:::

## Basic usage

<BreadcrumbsBasic />

::: details Source code
<<< @/demos/breadcrumbs/BreadcrumbsBasic.vue
:::

## Related components

- [BreadcrumbLink](/components/BreadcrumbLink/BreadcrumbLink.doc)
- [Dropdown](/components/Dropdown/Dropdown.doc)

## Props

| Prop name     | Description                                          | Type    | Values | Default |
| ------------- | ---------------------------------------------------- | ------- | ------ | ------- |
| maxItems      | Maximum number of items to display                   | number  | -      |         |
| multiline     | Breadcrumb will be wrapped to multiple lines if true | boolean | -      |         |
| separatorIcon | Separator between breadcrumbs                        | string  | -      |         |
| size          | Size of the breadcrumbs                              | union   | -      | 'md'    |

## Events

| Event name | Properties                                                                                                      | Description                            |
| ---------- | --------------------------------------------------------------------------------------------------------------- | -------------------------------------- |
| close      | **eventName** `string` - The name of the event<br/>**visible** `string` - The visibility state of the component | Triggered when the component is closed |

## Slots

| Name      | Description            | Bindings |
| --------- | ---------------------- | -------- |
| default   | Default slot           |          |
| separator | Slot for the separator |          |
