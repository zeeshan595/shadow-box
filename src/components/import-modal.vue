<script setup lang="ts">
import Modal from "./modal.vue";
import Checkbox from "./checkbox.vue";
import TextField from "./text-field.vue";
import Button from "./button.vue";
import { computed } from "vue";

const props = defineProps<{
  title?: string;
  modelValue: string;
  showModal: boolean;
  replaceContent: boolean;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "update:showModal", value: boolean): void;
  (e: "update:replaceContent", value: boolean): void;
  (e: "import"): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value: string) {
    emits("update:modelValue", value);
  },
});
const showModal = computed({
  get() {
    return props.showModal;
  },
  set(value: boolean) {
    emits("update:showModal", value);
  },
});
const replaceContent = computed({
  get() {
    return props.replaceContent;
  },
  set(value: boolean) {
    emits("update:replaceContent", value);
  },
});
</script>

<template>
  <Modal full v-model="showModal" :title="props.title ?? 'Import new content'">
    <Checkbox
      label="Replace existing spells with the same names?"
      v-model="replaceContent"
    />
    <TextField
      large
      v-model="value"
      label="Add the text from PDF here in the correct format"
    />
    <Button @click="() => emits('import')">Import Content</Button>
  </Modal>
</template>
