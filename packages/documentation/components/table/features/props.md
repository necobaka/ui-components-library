## Table Props

| Attribute                     | Description                                                                                                                                                                                                                                                                                                                                                                                    | Type                               | Accepted Values                                                                      | Default                                                                                                                              |
|-------------------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|------------------------------------|--------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------|
| allow-disabled-selection      | depends on `is-selectable` and `selected-ids`. useful when require disabled rows with selection                                                                                                                                                                                                                                                                                                | boolean                            | —                                                                                    | false                                                                                                                                |
| background-color              | whether Table has background color, which also used as background in fixed columns                                                                                                                                                                                                                                                                                                             | string                             | solid-brand-lightest / fixed-white                                                   | fixed-white                                                                                                                          |
| border-bottom                 | whether Table has bottom border                                                                                                                                                                                                                                                                                                                                                                | boolean                            | —                                                                                    | false                                                                                                                                |
| border-horizontal             | whether Table has horizontal border                                                                                                                                                                                                                                                                                                                                                            | boolean                            | —                                                                                    | true                                                                                                                                 |
| border-top                    | whether Table has top border                                                                                                                                                                                                                                                                                                                                                                   | boolean                            | —                                                                                    | false                                                                                                                                |
| border-vertical               | whether Table has vertical border                                                                                                                                                                                                                                                                                                                                                              | boolean                            | —                                                                                    | false                                                                                                                                |
| cell-class-name               | function that returns custom class names for a cell, or a string assigning class names for every cell                                                                                                                                                                                                                                                                                          | Function({row, rowIndex})/String   | —                                                                                    | —                                                                                                                                    |
| cell-style                    | function that returns custom style for a cell, or an object assigning custom style for every cell                                                                                                                                                                                                                                                                                              | Function({row, rowIndex})/Object   | —                                                                                    | —                                                                                                                                    |
| cols                          | Table columns config                                                                                                                                                                                                                                                                                                                                                                           | array                              | same as Table column component properties                                            | false                                                                                                                                |
| col-reorderable               | Whether table columns can be rearranged via drag and drop. Works only with Tables with no column groups.                                                                                                                                                                                                                                                                                       | Boolean                            | —                                                                                    | false                                                                                                                                |
| current-row-key               | key of current row, a set only prop                                                                                                                                                                                                                                                                                                                                                            | string,number                      | —                                                                                    | —                                                                                                                                    |
| custom-icons                  | set icons to customize their using in different parts of a table                                                                                                                                                                                                                                                                                                                               | Object                             | `ascSort`: string <br>`descSort`: string <br>`expand`: string <br>`collapse`: string | `ascSort`: i-arrow-sort-up--16<br>`descSort`: i-arrow-sort-up--16<br>`expand`: i-minus-rounded--16<br>`collapse`: i-plus-rounded--16 |
| data                          | Table data                                                                                                                                                                                                                                                                                                                                                                                     | array                              | —                                                                                    | —                                                                                                                                    |
| default-sort                  | set the default sort column and order. property `prop` is used to set default sort column, property `order` is used to set default sort order                                                                                                                                                                                                                                                  | Object                             | `order`: ascending, descending                                                       | if `prop` is set, and `order` is not set, then `order` is default to ascending                                                       |
| empty-text                    | Displayed text when data is empty. You can customize this area with `slot="empty"`                                                                                                                                                                                                                                                                                                             | String                             | —                                                                                    | No Data                                                                                                                              |
| fit                           | whether width of column automatically fits its container                                                                                                                                                                                                                                                                                                                                       | boolean                            | —                                                                                    | true                                                                                                                                 |
| header-cell-class-name        | function that returns custom class names for a cell in table header, or a string assigning class names for every cell in table header                                                                                                                                                                                                                                                          | Function({row, rowIndex})/String   | —                                                                                    | —                                                                                                                                    |
| header-cell-style             | function that returns custom style for a cell in table header, or an object assigning custom style for every cell in table header                                                                                                                                                                                                                                                              | Function({row, rowIndex})/Object   | —                                                                                    | —                                                                                                                                    |
| header-row-class-name         | function that returns custom class names for a row in table header, or a string assigning class names for every row in table header                                                                                                                                                                                                                                                            | Function({row, rowIndex})/String   | —                                                                                    | —                                                                                                                                    |
| header-row-style              | function that returns custom style for a row in table header, or an object assigning custom style for every row in table header                                                                                                                                                                                                                                                                | Function({row, rowIndex})/Object   | —                                                                                    | —                                                                                                                                    |
| height                        | Table's height. <br>- By default the height is affected by external styles. <br>- If its value is a number, the height is measured in pixels; <br>- If the value is `fit-scrollable`, table height will automatically fit into scrollable ancestor element. <br>- If the value is `fit-viewport`, table height will automatically fit into remaining space of the viewport from the table top. | string/number                      | —                                                                                    | —                                                                                                                                    |
| highlight-current-row         | whether current row is highlighted                                                                                                                                                                                                                                                                                                                                                             | boolean                            | —                                                                                    | false                                                                                                                                |
| is-selectable                 | Apply selection logic to the table, refer to the selection section for details                                                                                                                                                                                                                                                                                                                 | boolean, Function({row, rowIndex}) | —                                                                                    | false                                                                                                                                |
| max-height                    | Table's max-height. <br>The height of the table starts from `height` until it reaches the maxHeight limit. The `maxHeight` accepts pixels number and `fit-scrollable`/`fit-viewport`                                                                                                                                                                                                           | string/number                      | —                                                                                    | —                                                                                                                                    |
| multi-selection-mode          | Set the multi-selection mode as the default, works when `is-selectable` is set                                                                                                                                                                                                                                                                                                                 | boolean                            | —                                                                                    | false                                                                                                                                |
| row-class-name                | function that returns custom class names for a row, or a string assigning class names for every row                                                                                                                                                                                                                                                                                            | Function({row, rowIndex})/String   | —                                                                                    | —                                                                                                                                    |
| row-key                       | key of row data, used for optimizing rendering. Required if `reserve-selection`. When its type is String, multi-level access is supported, e.g. `user.info.id`, but `user.info[0].id` is not supported, in which case `Function` should be used.                                                                                                                                               | Function(row)/String               | —                                                                                    | —                                                                                                                                    |
| row-style                     | function that returns custom style for a row, or an object assigning custom style for every row                                                                                                                                                                                                                                                                                                | Function({row, rowIndex})/Object   | —                                                                                    | —                                                                                                                                    |
| row-tooltip-text              | function that returns tooltip text for disabled table rows                                                                                                                                                                                                                                                                                                                                     | Function({row, rowIndex})/String   | —                                                                                    | —                                                                                                                                    |
| select-by-row                 | whether selection with click by row is available                                                                                                                                                                                                                                                                                                                                               | boolean                            | —                                                                                    | false                                                                                                                                |
| selected-ids                  | array of ids that will be selected by rowKey                                                                                                                                                                                                                                                                                                                                                   | array                              | —                                                                                    | —                                                                                                                                    |
| show-header                   | whether Table header is visible                                                                                                                                                                                                                                                                                                                                                                | boolean                            | —                                                                                    | true                                                                                                                                 |
| size                          | size of Table                                                                                                                                                                                                                                                                                                                                                                                  | string                             | default / compact / medium                                                           | default                                                                                                                              |
| skeleton                      | enables skeleton screen                                                                                                                                                                                                                                                                                                                                                                        | boolean                            | —                                                                                    | false                                                                                                                                |
| stripe                        | whether Table is striped                                                                                                                                                                                                                                                                                                                                                                       | boolean                            | —                                                                                    | false                                                                                                                                |
| trigger-rerender              | when the value is updated, the table is re-rendered.                                                                                                                                                                                                                                                                                                                                           | string, number, boolean, function  | —                                                                                    | false                                                                                                                                |
| virtual-render-limit          | The rows limit to enable virtual rendering                                                                                                                                                                                                                                                                                                                                                     | number                             | —                                                                                    | 100                                                                                                                                  |
| virtual-scroll                | whether virtual rendering is enabled                                                                                                                                                                                                                                                                                                                                                           | boolean                            | —                                                                                    | true                                                                                                                                 |
| virtual-scroll-render-timeout | timeout before rendering cell content in virtual scroll items                                                                                                                                                                                                                                                                                                                                  | boolean, number                    | —                                                                                    | 100                                                                                                                                  |
