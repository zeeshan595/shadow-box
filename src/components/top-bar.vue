<script setup lang="ts">
import router from "@/router";
import Button from "./button.vue";
import Search from "./search.vue";

const props = defineProps<{
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "random"): void;
  (e: "add"): void;
  (e: "reset"): void;
}>();
</script>

<template>
  <div class="top-bar flex-row gap20 bg-default p20">
    <Button @click="() => router.push('/')">
      <span class="material-symbols-outlined"> arrow_back </span>
    </Button>
    <Button @click="() => emits('add')">
      <span class="material-symbols-outlined"> add </span>
    </Button>
    <Button @click="() => emits('random')">
      <span class="material-symbols-outlined"> casino </span>
    </Button>
    <Button @click="() => emits('reset')">
      <span class="material-symbols-outlined"> remove_selection </span>
    </Button>
    <Search
      :modelValue="props.modelValue"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </div>
</template>

<style scoped lang="scss">
.top-bar {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  z-index: 100;
}
</style>
