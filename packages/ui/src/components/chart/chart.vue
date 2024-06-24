<script setup lang="ts">
  import './chart.css';
  import type { ChartProps } from './chart.ts';

  const { title, description } = defineProps<ChartProps>();

  defineEmits<{
    /**
     * Triggered when the component is closed
     * @arg {string} payload - The first argument
     */
    close: []
  }>();
</script>

<template>
  <div class="acv-chart">
    <!-- @slot default - The default slot content -->
    <slot>{{ title }}</slot>
    <!-- @slot description - The description slot content -->
    <slot name="description">
      {{ description }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-chart {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-chart-color);
  }
</style>
