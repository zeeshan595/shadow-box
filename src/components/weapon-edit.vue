<script setup lang="ts">
import { computed } from "vue";
import type { Weapon } from "@/data/weapons/type";
import type { WithUUID } from "@/services/db";

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
  <span>
    <span class="bold uppercase">{{ props.modelValue.name }}</span>
  </span>
  <span>
    <span class="bold uppercase">Damage</span> {{ props.modelValue.damage }},
    <span class="bold uppercase">Range</span> {{ props.modelValue.range }},
  </span>
  <span>
    <span class="bold uppercase">Type</span> {{ props.modelValue.type }},
    <span class="bold uppercase">Cost</span> {{ props.modelValue.cost }},
  </span>
  <span v-if="props.modelValue.properties.length > 0">
    <span class="bold uppercase">properties</span>
    {{ props.modelValue.properties }}
  </span>
</template>
