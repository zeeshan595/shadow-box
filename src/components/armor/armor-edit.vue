<script setup lang="ts">
import TextField from "@/components/text-field.vue";
import type { Armor } from "@/data/armors/type";
import type { WithUUID } from "@/services/db";
import { computed } from "vue";

const props = defineProps<{
  modelValue: WithUUID<Armor>;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: WithUUID<Armor>): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", {
      ...value,
    });
  },
});
</script>

<template>
  <TextField label="name" v-model="value.name" />
  <TextField label="armor" v-model="value.armor" />
  <TextField label="gear slots" v-model="value.gearSlots" />
  <TextField label="cost" v-model="value.cost" />
  <TextField large label="properties" v-model="value.properties" />
</template>
