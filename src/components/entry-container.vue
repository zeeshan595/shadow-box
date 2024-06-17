<script setup lang="ts">
const props = defineProps<{
  title?: string;
}>();
</script>

<template>
  <div class="gap20 p20">
    <h2 v-if="props.title" class="text-align-center uppercase">
      {{ props.title }}
    </h2>
    <div class="flex-row flex-wrap gap20">
      <slot></slot>
    </div>
  </div>
</template>
