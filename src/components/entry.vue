<script setup lang="ts">
import { computed } from "vue";

const props = defineProps<{
  maxWidth?: string;
}>();
const maxWidth = computed(() => {
  if (!props.maxWidth) {
    return "320px";
  }
  return props.maxWidth;
});
</script>

<template>
  <div
    class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
    :style="`max-width: ${maxWidth}`"
  >
    <slot></slot>
  </div>
</template>
