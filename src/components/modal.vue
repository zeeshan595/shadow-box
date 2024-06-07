<script setup lang="ts">
import { computed, watch } from "vue";

const props = defineProps<{
  modelValue: boolean;
  title: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

function onClose() {
  emits("update:modelValue", false);
}

const isShown = computed(() => props.modelValue);
watch(isShown, (newVal) => {
  if (newVal) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
</script>

<template>
  <div v-if="props.modelValue" class="modal-container">
    <div
      class="modal bg-paper shadow rounded justify-start align-start p10 gap10"
    >
      <div class="flex-shrink flex-basis-0 bold">{{ title }}</div>
      <div class="close-button pointer" @click="onClose">
        <span class="material-symbols-outlined"> close </span>
      </div>
      <div class="flex-grow justify-start gap10" style="width: 100%">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal-container {
  display: block;
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 200;

  .modal {
    display: flex;
    margin-left: auto;
    margin-right: auto;
    margin-top: 100px;
    width: 400px;
    min-height: 100px;

    .close-button {
      display: block;
      position: absolute;
      margin-left: 380px;
    }
  }
}
</style>
