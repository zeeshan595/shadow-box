<script setup lang="ts">
import { computed } from "vue";

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
  placeholder?: "spell" | "monster" | "item";
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

const SPELL_IMPORT_PLACEHOLDER = `TELEPORT
Tier 5, wizard Duration: Instant Range: Close
You and any willing creatures you choose within close range teleport to a location you specify on your same plane.
You can travel to a known teleportation sigil or to a location you've been before. Otherwise, you have a 50% chance of arriving off-target.
`;
const MONSTER_IMPORT_PLACEHOLDER = `DRYAD
A coy, emerald-skinned fey covered in leaves. It bonds with and protects a tree.
AC 13, HP 19, ATK 1 staff -1 (1d4) or 1 charm, MV near, S -1, D +2, C +1, I +1, W +3, Ch +4, AL N, LV 4
Charm. Near, one creature, DC 14 CHA or friendship for 1d8 days.
Meld. Step inside bonded tree. 
`;
const ITEM_IMPORT_PLACEHOLDER = `ARMOR OF THE ONI
Black plate mail of lacquered, ironwood panels. The helm's visor is the face of a snarling oni.
Bonus. +1 plate mail.
Benefit. You can speak and understand Diabolic. Your melee weapon attacks deal +1 damage.
Curse. You have disadvantage on attacks and spellcasting checks against demons.
`;

const placeholder = computed(() => {
  switch (props.placeholder) {
    case "item":
      return ITEM_IMPORT_PLACEHOLDER;
    case "monster":
      return MONSTER_IMPORT_PLACEHOLDER;
    case "spell":
      return SPELL_IMPORT_PLACEHOLDER;
  }
  return undefined;
});
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
      :placeholder="placeholder"
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
