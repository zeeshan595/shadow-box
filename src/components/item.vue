<script setup lang="ts">
import type { Item } from "@/data/items/type";

const props = defineProps<{
  value: Item;
}>();
</script>

<template>
  <span class="bold uppercase">{{ props.value.name }}</span>
  <span class="italic font-small">{{ props.value.flavourText }}</span>
  <span v-if="props.value.bonus">
    <span class="font-small bold uppercase">bonus: </span>
    {{ props.value.bonus }}
  </span>
  <span v-if="props.value.benefit">
    <span class="font-small bold uppercase">benefit: </span>
    {{ props.value.benefit }}
  </span>
  <span v-if="props.value.curse">
    <span class="font-small bold uppercase">curse: </span>
    {{ props.value.curse }}
  </span>
  <span v-if="props.value.personality">
    <span class="font-small bold uppercase">personality: </span>
    {{ props.value.personality }}
  </span>
</template>
