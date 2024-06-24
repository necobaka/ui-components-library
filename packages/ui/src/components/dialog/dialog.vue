<script setup lang="ts">
  import type { AcvDialogEvents, AcvDialogProps, AcvDialogSlots } from './dialog.ts';
  import './dialog.css';

  const { title, description } = defineProps<AcvDialogProps>();

  defineEmits<AcvDialogEvents>();
  defineSlots<AcvDialogSlots>();
</script>

<template>
  <div class="acv-dialog">
    <slot>{{ title }}</slot>
    <!--
      @slot description - The description slot content
      @binding {string} description - The description prop value
    -->
    <slot
      name="description"
      :description="description"
    >
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-dialog {
    z-index: var(--acv-dialog-z-index);

    .acv-dialog--inner {
      position: absolute;
      overflow: hidden;
    }

    .acv-dialog__transform {
      position: absolute;
      inset: 0;
      pointer-events: none;
    }

    .acv-dialog__wrapper {
      position: absolute;
      top: 100px;
      display: flex;
      flex-direction: column;
      max-width: calc(100vw - 28px);
      pointer-events: auto;
      background-color: var(--acv-dialog-bg-color);
      border: 0;
      border-radius: var(--acv-dialog-radius);
      box-shadow: var(--acv-dialog-shadow);
      transform: translateZ(0);

      .acv-dialog--dragging,
      .acv-dialog--resizing {
        user-select: none;
      }

      .acv-dialog--dragging {
        will-change: top, left;
      }
    }

    .acv-dialog--inner .acv-dialog__wrapper {
      position: absolute;
    }

    .acv-dialog__header {
      position: relative;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      padding: var(--acv-dialog-header-v-padding) var(--acv-dialog-header-h-padding);
      border-bottom: var(--acv-border-shape) var(--acv-dialog-d-color);
    }

    .acv-dialog--draggable .acv-dialog__header {
      cursor: move;
      user-select: none;
    }

    .acv-dialog--undivided .acv-dialog__header {
      border-bottom: 0;
    }

    .acv-dialog__title {
      flex: 1 0 0;
      font-size: var(--acv-dialog-title-font-size);
      font-weight: var(--acv-dialog-title-weight);
      color: var(--acv-dialog-title-color);
    }

    .acv-dialog__content {
      position: relative;
      flex: auto;
      min-width: 0;
      min-height: 0;
      padding: var(--acv-dialog-body-v-padding) var(--acv-dialog-body-h-padding);
      line-height: var(--acv-dialog-body-line-height);
    }

    .acv-dialog__footer {
      position: relative;
      display: flex;
      flex-shrink: 0;
      align-items: center;
      justify-content: flex-end;
      padding: var(--acv-dialog-footer-v-padding) var(--acv-dialog-footer-h-padding);
      border-top: var(--acv-border-style-solid) var(--acv-dialog-border-color);
    }

    .acv-dialog--undivided .acv-dialog__footer {
      border-top: 0;
    }

    .acv-dialog__close {
      display: flex;
      align-items: center;
      height: 24px;
      padding: 0;
      margin-inline-start: 6px;
      color: var(--acv-dialog-close-color);
      cursor: pointer;
      background-color: transparent;
      border: 0;
      outline: 0;
      transition: var(--acv-transition-color);

      &:hover,
      &:focus {
        color: var(--acv-dialog-close-color-hover);
      }
    }

    .acv-dialog__resizer {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 10px;
      height: 10px;
      cursor: nw-resize;
      background-image: linear-gradient(
          -45deg,
          transparent calc(30% - 1px),
          var(--acv-dialog-resizer-color) 30%,
          transparent calc(30% + 1px),
          transparent calc(50% - 1px),
          var(--acv-dialog-resizer-color) 50%,
          transparent calc(50% + 1px)
      );
      border-radius: 0 0 var(--acv-dialog-radius) 0;
    }
  }
</style>
