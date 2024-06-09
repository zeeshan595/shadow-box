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
const value = computed({
  get() {
    return {
      ...props.modelValue,
      class: {
        wizard: false,
        priest: false,
        seer: false,
        ovate: false,
        shamanic: false,
        graveWarden: false,
        witch: false,
        ...props.modelValue.class,
      },
    };
  },
  set(value) {
    emits("update:modelValue", value);
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
  <TextField label="name" v-model="value.name" />
  <TextField label="tier" v-model="tierValue" />
  <TextField label="duration" v-model="value.duration" />
  <TextField label="range" v-model="value.range" />
  <TextField large label="description" v-model="value.text" />
  <div class="gap10" style="align-self: center">
    <div class="font-small uppercase bold">Classes</div>
    <div class="flex-row gap10">
      <Checkbox
        label="Priest"
        :model-value="value.class.priest"
        @update:model-value="(val) => updateClassList('priest', val)"
      />
      <Checkbox
        label="Wizard"
        :model-value="value.class.wizard"
        @update:model-value="(val) => updateClassList('wizard', val)"
      />
    </div>
    <div class="flex-row gap10">
      <Checkbox
        label="Seer"
        :model-value="value.class.seer"
        @update:model-value="(val) => updateClassList('seer', val)"
      />
      <Checkbox
        label="Ovate"
        :model-value="value.class.ovate"
        @update:model-value="(val) => updateClassList('ovate', val)"
      />
    </div>
    <div class="flex-row gap10">
      <Checkbox
        label="Shamanic"
        :model-value="value.class.shamanic"
        @update:model-value="(val) => updateClassList('shamanic', val)"
      />
      <Checkbox
        label="Witch"
        :model-value="value.class.witch"
        @update:model-value="(val) => updateClassList('witch', val)"
      />
    </div>
    <Checkbox
      label="Grave Warden"
      :model-value="value.class.graveWarden"
      @update:model-value="(val) => updateClassList('graveWarden', val)"
    />
  </div>
</template>
