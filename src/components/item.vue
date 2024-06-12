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
    <template v-for="line in props.value.bonus.split('\n')">
      <span>{{ line }}</span>
      <br />
    </template>
  </span>
  <span v-if="props.value.benefit">
    <span class="font-small bold uppercase">benefit: </span>
    <template v-for="line in props.value.benefit.split('\n')">
      <span>{{ line }}</span>
      <br />
    </template>
  </span>
  <span v-if="props.value.curse">
    <span class="font-small bold uppercase">curse: </span>
    <template v-for="line in props.value.curse.split('\n')">
      <span>{{ line }}</span>
      <br />
    </template>
  </span>
  <span v-if="props.value.personality">
    <span class="font-small bold uppercase">personality: </span>
    <template v-for="line in props.value.personality.split('\n')">
      <span>{{ line }}</span>
      <br />
    </template>
  </span>
</template>
