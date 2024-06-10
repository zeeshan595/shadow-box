<script setup lang="ts">
import { computed, watch, onMounted } from "vue";

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
    document.body.style.overflowY = "hidden";
  } else {
    document.body.style.overflowY = "auto";
  }
});
onMounted(() => {
  if (props.modelValue) {
    document.body.style.overflowY = "hidden";
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
      <div class="flex-row" style="width: 100%">
        <div class="bold flex-basis-100 uppercase">
          {{ title }}
        </div>
        <div
          class="close-button pointer flex-shrink flex-basis-0"
          @click="onClose"
        >
          <span class="material-symbols-outlined"> close </span>
        </div>
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
  position: fixed;
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
    margin-top: 50px;
    max-width: 600px;
    min-height: 100px;
    max-height: calc(100% - 100px);
    overflow-x: hidden;
    overflow-y: auto;
  }
}
</style>
