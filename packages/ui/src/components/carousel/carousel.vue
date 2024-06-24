<script setup lang="ts">
  import type { CarouselEvents, CarouselProps, CarouselSlots } from './carousel.ts';
  import './carousel.css';

  const { title, description } = defineProps<CarouselProps>();

  defineEmits<CarouselEvents>();
  defineSlots<CarouselSlots>();
</script>

<template>
  <div class="acv-carousel">
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
  .acv-carousel {
    font-weight: var(--acv-font-weight-strong);
    color: var(--acv-carousel-color);
  }
</style>
