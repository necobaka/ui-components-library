export interface AcvDialogProps {
  /**
   * Locale object
   */
  locale?: object

  /**
   * Size of Dialog (flexible pixels and predefined widths) default to wrap content width
   */
  width?: number | 'small' | 'medium' | 'large' | 'x-large'

  /**
   * Size of Dialog (flexible pixels and predefined heights) default to wrap content height
   */
  height?: number | 'auto' | 'fit' | 'small' | 'medium'

  top?: number | string

  left?: number | string

  right?: number | string

  bottom?: number | string

  /**
   * Title of the Dialog
   */
  title?: string
  /**
   * Whether the Dialog is closable
   */
  closable?: boolean

  modalClass?: string

  /**
   * Whether the Dialog is draggable
   */
  draggable?: boolean

  resizable?: boolean

  loading?: boolean

  minWidth?: number

  minHeight?: number

  transitionName?: string

  /**
   * Type of the Dialog
   */
  type?: 'default' | 'clean' | 'basic' | 'fullscreen'

  /**
   * Whether modal mask is displayed
   */
  modal?: boolean

  /**
   * Whether scroll is locked
   */
  lockScroll?: boolean

  closeOnPressEscape?: boolean

  closeOnClick?: boolean

  /**
   * Description of the Dialog
   */
  description?: string
}

export interface AcvDialogEvents {
  /**
   * Triggered when the component is closed
   * @arg {string} eventName - The name of the event
   * @arg {string} visible - The visibility state of the component
   */
  (eventName: 'close', visible: boolean): void

  /**
   * Triggered when the component is opened
   * @arg {string} eventName - The name of the event
   * @arg {string} visible - The visibility state of the component
   */
  (eventName: 'open', visible: boolean): void
}

export interface AcvDialogSlots {
  /**
   * Content
   */
  default: void
  /**
   * Title
   * @binding {string} description - The description prop value
   */
  title: void
  aside: void
  footer: void
  footerAside: void
  header: void
  bodyFooter: void
}
