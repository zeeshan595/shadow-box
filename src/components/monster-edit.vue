<script setup lang="ts">
import TextField from "./text-field.vue";
import Button from "./button.vue";
import type { Monster } from "@/data/monsters/type";
import type { WithUUID } from "@/services/db";
import { cloneMonster } from "@/data";
import { computed } from "vue";

const props = defineProps<{
  modelValue: WithUUID<Monster>;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: WithUUID<Monster>): void;
}>();
const value = computed({
  get() {
    return props.modelValue;
  },
  set(value) {
    emits("update:modelValue", {
      ...value,
      stats: {
        ...value.stats,
      },
      specials: [...value.specials.map((s) => ({ ...s }))],
    });
  },
});

function updateSpecial(index: number, name: string, text: string) {
  const monster = cloneMonster(props.modelValue);
  monster.specials[index] = { name, text };
  emits("update:modelValue", monster);
}
function addSpecial() {
  const monster = cloneMonster(props.modelValue);
  monster.specials.push({ name: "something cool", text: "Do a backflip" });
  emits("update:modelValue", monster);
}
function removeSpecial(index: number) {
  const monster = cloneMonster(props.modelValue);
  monster.specials.splice(index, 1);
  emits("update:modelValue", monster);
}
</script>

<template>
  <TextField label="name" v-model="value.name" />
  <TextField large label="flavour text" v-model="value.flavourText" />
  <TextField label="attacks" v-model="value.attacks" />
  <TextField label="movement" v-model="value.stats.mv" />
  <TextField label="AC" v-model="value.stats.ac" />
  <div class="flex-row gap10 flex-wrap">
    <TextField small stat label="level" v-model="value.level" />
    <TextField small stat label="HP" v-model="value.stats.hp" />
    <TextField small stat label="alignment" v-model="value.alignment" />
  </div>
  <div class="flex-row gap10 flex-wrap">
    <TextField small stat label="STR" v-model="value.stats.str" />
    <TextField small stat label="DEX" v-model="value.stats.dex" />
    <TextField small stat label="CON" v-model="value.stats.con" />
    <TextField small stat label="INT" v-model="value.stats.int" />
    <TextField small stat label="WIS" v-model="value.stats.wis" />
    <TextField small stat label="CHA" v-model="value.stats.cha" />
  </div>
  <div class="font-small bold uppercase">specials</div>
  <div
    class="flex-row gap10"
    v-for="(special, index) in props.modelValue.specials"
  >
    <div class="gap10">
      <TextField
        label="special name"
        :model-value="special.name"
        @update:model-value="(val) => updateSpecial(index, val, special.text)"
      />
      <TextField
        label="special description"
        large
        :model-value="special.text"
        @update:model-value="(val) => updateSpecial(index, special.name, val)"
      />
    </div>
    <span
      class="material-symbols-outlined pointer"
      @click="() => removeSpecial(index)"
    >
      close
    </span>
  </div>
  <Button @click="addSpecial">
    <span class="material-symbols-outlined pointer text-align-center">
      add
    </span>
  </Button>
</template>
