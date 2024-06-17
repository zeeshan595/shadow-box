<script setup lang="ts">
import { computed } from "vue";
import type { Weapon } from "@/data/weapons/type";
import type { WithUUID } from "@/services/db";
import TextField from "@/components/text-field.vue";

const props = defineProps<{
  modelValue: WithUUID<Weapon>;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: WithUUID<Weapon>): void;
}>();

const value = computed<WithUUID<Weapon>>({
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
  <TextField label="cost" v-model="value.cost" />
  <TextField label="type" v-model="value.type" />
  <TextField label="range" v-model="value.range" />
  <TextField label="damage" v-model="value.damage" />
  <TextField label="properties" v-model="value.properties" />
</template>
