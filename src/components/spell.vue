<script setup lang="ts">
import type { Spell, SpellClass } from "@/data/spells/type";
import type { WithUUID } from "@/services/db";
import { computed } from "vue";

const props = defineProps<{
  modelValue: WithUUID<Spell>;
}>();
const classes = computed(() => {
  return (Object.keys(props.modelValue.class) as (keyof SpellClass)[])
    .filter((c) => props.modelValue.class[c])
    .join(", ");
});
</script>

<template>
  <span class="bold uppercase">{{ props.modelValue.name }}</span>
  <span>
    <span class="bold uppercase">tier</span> {{ props.modelValue.tier }},
    <span class="bold uppercase">class</span>
    {{ classes }},
    <span class="bold uppercase">duration</span>
    {{ props.modelValue.duration }}, <span class="bold uppercase">range</span>
    {{ props.modelValue.range }}
  </span>
  <span>{{ props.modelValue.text }}</span>
</template>
