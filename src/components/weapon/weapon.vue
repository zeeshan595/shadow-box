<script setup lang="ts">
import type { Weapon } from "@/data/weapons/type";
import type { WithUUID } from "@/services/db";

const props = defineProps<{
  modelValue: WithUUID<Weapon>;
}>();
</script>
<template>
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
