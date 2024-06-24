<script setup lang="ts">
  import type {
    AcvCascaderEvents,
    AcvCascaderProps,
    AcvCascaderSlots
  } from './cascader.ts';
  import './cascader.css';

  const { title, description } = defineProps<AcvCascaderProps>();

  defineEmits<AcvCascaderEvents>();
  defineSlots<AcvCascaderSlots>();
</script>

<template>
  <div class="acv-cascader">
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
  .acv-cascader {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-cascader-color);
  }
</style>
