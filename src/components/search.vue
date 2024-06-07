<script setup lang="ts">
import TextField from "./text-field.vue";

const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
}>();
</script>

<template>
  <TextField
    label="search"
    :model-value="props.modelValue"
    @update:model-value="(value) => emits('update:modelValue', value)"
  />
</template>
