<script setup lang="ts">
import type { Spell, SpellClass } from "@/data/spells/type";
import type { WithUUID } from "@/services/db";
import { stringToNum } from "@/services/helpers";
import { computed } from "vue";
import TextField from "@/components/text-field.vue";
import Checkbox from "./checkbox.vue";
import { cloneSpell } from "@/data";

const props = defineProps<{
  modelValue: WithUUID<Spell>;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: WithUUID<Spell>): void;
}>();
const nameValue = computed({
  get() {
    return props.modelValue.name;
  },
  set(value: string) {
    const temp = { ...props.modelValue };
    temp.name = value;
    emits("update:modelValue", temp);
  },
});
const durationValue = computed({
  get() {
    return props.modelValue.duration;
  },
  set(value: string) {
    const temp = { ...props.modelValue };
    temp.duration = value;
    emits("update:modelValue", temp);
  },
});
const rangeValue = computed({
  get() {
    return props.modelValue.range;
  },
  set(value: string) {
    const temp = { ...props.modelValue };
    switch (value.trim().toLowerCase()) {
      case "self":
        temp.range = "Self";
        break;
      case "close":
        temp.range = "Close";
        break;
      case "near":
        temp.range = "Near";
        break;
      case "far":
        temp.range = "Far";
        break;
      case "unlimited":
        temp.range = "Unlimited";
        break;
      default:
        temp.range = "Self";
        break;
    }
    emits("update:modelValue", temp);
  },
});
const textValue = computed({
  get() {
    return props.modelValue.text;
  },
  set(value: string) {
    const temp = { ...props.modelValue };
    temp.text = value;
    emits("update:modelValue", temp);
  },
});
const tierValue = computed({
  get() {
    return props.modelValue.tier.toString();
  },
  set(value: string) {
    const temp = { ...props.modelValue };
    temp.tier = stringToNum(value);
    emits("update:modelValue", temp);
  },
});
function updateClassList(classValue: keyof SpellClass, value: boolean) {
  const spell = cloneSpell(props.modelValue);
  spell.class[classValue] = value;
  emits("update:modelValue", spell);
}
</script>

<template>
  <TextField label="name" v-model="nameValue" />
  <TextField label="tier" v-model="tierValue" />
  <TextField label="duration" v-model="durationValue" />
  <TextField label="range" v-model="rangeValue" />
  <TextField large label="description" v-model="textValue" />
  <div class="gap10" style="align-self: center">
    <div class="font-small uppercase bold">Classes</div>
    <div class="flex-row gap10 flex-wrap">
      <Checkbox
        label="Priest"
        :model-value="props.modelValue.class.priest ?? false"
        @update:model-value="(val) => updateClassList('priest', val)"
      />
      <Checkbox
        label="Wizard"
        :model-value="props.modelValue.class.wizard ?? false"
        @update:model-value="(val) => updateClassList('wizard', val)"
      />
      <Checkbox
        label="Seer"
        :model-value="props.modelValue.class.seer ?? false"
        @update:model-value="(val) => updateClassList('seer', val)"
      />
    </div>
    <div class="flex-row gap10 flex-wrap">
      <Checkbox
        label="Ovate"
        :model-value="props.modelValue.class.ovate ?? false"
        @update:model-value="(val) => updateClassList('ovate', val)"
      />
      <Checkbox
        label="Shamanic"
        :model-value="props.modelValue.class.shamanic ?? false"
        @update:model-value="(val) => updateClassList('shamanic', val)"
      />
      <Checkbox
        label="Witch"
        :model-value="props.modelValue.class.witch ?? false"
        @update:model-value="(val) => updateClassList('witch', val)"
      />
    </div>
    <Checkbox
      label="Grave Warden"
      :model-value="props.modelValue.class.graveWarden ?? false"
      @update:model-value="(val) => updateClassList('graveWarden', val)"
    />
  </div>
</template>
