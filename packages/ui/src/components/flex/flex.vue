<script setup lang="ts">
  import './flex.css';
  import type { FlexProps } from './flex.ts';

  const { title, description } = defineProps<FlexProps>();

  defineEmits<{
    /**
     * Triggered when the component is closed
     * @arg {string} payload - The first argument
     */
    close: []
  }>();
</script>

<template>
  <div class="acv-flex">
    <!-- @slot default - The default slot content -->
    <slot>{{ title }}</slot>
    <!-- @slot description - The description slot content -->
    <slot name="description">
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-flex {
    font-weight: var(--acv-font-weight-strong);
  }
</style>
