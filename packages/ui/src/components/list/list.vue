<script setup lang="ts">
  import './list.css';
  import type { ListProps } from './list.ts';

  const { title, description } = defineProps<ListProps>();

  defineEmits<{
    /**
     * Triggered when the component is closed
     * @arg {string} payload - The first argument
     */
    close: []
  }>();
</script>

<template>
  <div class="acv-list">
    <!-- @slot default - The default slot content -->
    <slot>{{ title }}</slot>
    <!-- @slot description - The description slot content -->
    <slot name="description">
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-list {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-list-color);
  }
</style>
