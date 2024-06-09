<script setup lang="ts">
import TextField from "@/components/text-field.vue";
import type { Item } from "@/data/items/type";
import type { WithUUID } from "@/services/db";
import { computed } from "vue";

const props = defineProps<{
  modelValue: WithUUID<Item>;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: WithUUID<Item>): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", value);
  },
});
</script>

<template>
  <TextField label="name" v-model="value.name" />
  <TextField large label="flavour text" v-model="value.flavourText" />
  <TextField large label="bonus" v-model="value.bonus" />
  <TextField large label="benefit" v-model="value.benefit" />
  <TextField large label="curse" v-model="value.curse" />
  <TextField large label="personality" v-model="value.personality" />
</template>
