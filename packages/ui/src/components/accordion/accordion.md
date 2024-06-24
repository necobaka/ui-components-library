It is used when it is necessary to show the content in a dosed manner,
hiding additional information under the parent block.
The accordion has two basic vertical sizes: 48px and 64px.
If the content does not fit into any of the basic sizes, the vertical accordion item size becomes dependent on the amount of content.
Hidden content is displayed by clicking on the arrow or throughout the entire block.

:::info Figma mockups
https://www.figma.com/file/AOtI028uCFzAmnADVCz872/Documentation?node-id=2%3A6
:::

## Basic usage

<AccordionBasic />

::: details Source code
<<< @/demos/accordion/AccordionBasic.vue
:::

## Sizes

<AccordionSizes />

## Colors

<AccordionColors />

## Paddings

<AccordionPaddings />

## Expand all items

:::info
When `multiple` sets to true, you can use `expanded` props to set all accordion item to be expanded by default.
Otherwise, you can use `v-model` to control the individual Expand/Collapse state of each accordion item.
:::

<AccordionExpanded />

## Expand by v-model

<AccordionModel />

## Multiple/Single modes

<AccordionMultiple />

## Background colors

<AccordionBackground />

## Related components

- [AccordionPanel](/components/Accordion/AccordionPanel.doc)
