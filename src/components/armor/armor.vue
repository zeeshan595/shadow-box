<script setup lang="ts">
import type { Armor } from "@/data/armors/type";
import type { WithUUID } from "@/services/db";

const props = defineProps<{
  modelValue: WithUUID<Armor>;
}>();
</script>
<template>
  <span>
    <span class="bold uppercase">{{ props.modelValue.name }}</span>
  </span>
  <span>
    <span class="bold uppercase">armor</span> {{ props.modelValue.armor }}
  </span>
  <span>
    <span class="bold uppercase">Gear Slots</span>
    {{ props.modelValue.gearSlots }}, <span class="bold uppercase">Cost</span>
    {{ props.modelValue.cost }},
  </span>
  <span v-if="props.modelValue.properties.length > 0">
    <span class="bold uppercase">properties</span>
    {{ props.modelValue.properties }}
  </span>
</template>
