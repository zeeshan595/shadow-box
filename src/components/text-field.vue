<script setup lang="ts">
const props = defineProps<{
  label?: string;
  subLabel?: string;
  modelValue: string;
  small?: boolean;
  stat?: boolean;
  large?: boolean;
  spaceBetween?: boolean;
  mobileView?: boolean;
  readonly?: boolean;
  clickable?: boolean;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "label-click"): void;
  (e: "click"): void;
  (e: "right-click"): void;
}>();

function onChange(payload: Event) {
  const target = payload.target as HTMLInputElement | HTMLTextAreaElement;
  if (!target) return;
  emits("update:modelValue", target.value);
}
function leftClick(e: MouseEvent) {
  e.preventDefault();
  emits("click");
}
</script>

<template>
  <div
    class="text-field justify-start text-primary"
    :class="{
      small: props.small,
      stat: props.stat,
      'justify-space-between': props.spaceBetween,
      pointer: props.clickable,
    }"
    @click="leftClick"
  >
    <div
      class="justify-start align-start flex-shrink flex-basis-0"
      @click="() => emits('label-click')"
    >
      <span v-if="props.label" class="label">{{ props.label }}</span>
      <span v-if="props.subLabel" class="sub-label primary-main">
        {{ subLabel }}
      </span>
    </div>
    <input
      v-if="!props.large"
      type="text"
      class="bg-paper shadow text-primary flex-shrink flex-basis-100"
      :class="{ 'no-input': props.readonly }"
      :value="modelValue"
      @change="onChange"
      @input="onChange"
      :maxlength="props.stat ? 2 : undefined"
      :readonly="props.readonly"
    />
    <textarea
      v-if="props.large"
      class="bg-paper shadow text-primary"
      :class="{ 'mobile-view': mobileView, 'no-input': props.readonly }"
      :value="modelValue"
      :readonly="props.readonly"
      @change="onChange"
    ></textarea>
  </div>
</template>

<style scoped lang="scss">
.text-field {
  .label {
    font-size: 12px;
    font-weight: bold;
    text-transform: uppercase;
  }
  .sub-label {
    font-size: 10px;
    font-weight: bold;
    text-transform: uppercase;
  }

  input[type="text"],
  textarea {
    font-size: 20px;
    padding: 5px 10px;
    border-radius: 7px;
    outline: 0;
    border: 0;
  }
  textarea {
    height: 100%;
    min-height: 100px;
    resize: none;
  }
  .mobile-view {
    min-height: 500px;
  }

  &.small {
    flex-basis: 100px;
  }

  &.stat {
    justify-content: center;
    align-items: center;
    flex-shrink: 1;
    flex-grow: 0;
    flex-basis: 0;
    min-width: auto;

    input[type="text"] {
      font-size: 34px;
      width: 45px;
      padding: 20px;
      text-align: center;
      flex-grow: 0;
    }

    &.small {
      input[type="text"] {
        padding: 10px;
        font-size: 24px;
      }
    }
  }
}
</style>
