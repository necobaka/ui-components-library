<script setup lang="ts">
  import './tree.css';
  import type { TreeProps } from './tree.ts';

  const { data, emptyText } = defineProps<TreeProps>();

  defineEmits<{
    /**
     * Triggered when the node is expanded
     * @arg {string} payload - node
     */
    'node-expand': []
  }>();
</script>

<template>
  <div class="acv-tree">
    <!-- @slot default - The default slot content -->
    <slot>{{ data }}</slot>
    <!-- @slot description - The description slot content -->
    <slot name="description">
      {{ emptyText }}
    </slot>
  </div>
</template>

<style scoped>
  .acv-tree {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-tree-color);
  }
</style>
