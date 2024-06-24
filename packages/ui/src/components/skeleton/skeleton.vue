<script setup lang="ts">
  import './skeleton.css';
  import type { SkeletonProps } from './skeleton.ts';

  const { title, description } = defineProps<SkeletonProps>();

  defineEmits<{
    /**
     * Triggered when the component is closed
     * @arg {string} payload - The first argument
     */
    close: []
  }>();
</script>

<template>
  <div class="acv-skeleton">
    <!-- @slot default - The default slot content -->
    <slot>{{ title }}</slot>
    <!-- @slot description - The description slot content -->
    <slot name="description">
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-skeleton {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-skeleton-color);
  }
</style>
