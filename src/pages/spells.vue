<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import {
  spells as CoreSpells,
  cloneSpell,
  createSpell as createNewSpell,
} from "@/data";
import type { Spell, SpellClass } from "@/data/spells/type";
import type { WithUUID } from "@/services/db";
import { SpellsCollection } from "@/services/db/collections";
import { randomRange } from "@/services/helpers";
import { v4 } from "uuid";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import TextField from "@/components/text-field.vue";
import Button from "@/components/button.vue";
import SpellComponent from "@/components/spell.vue";
import SpellEditComponent from "@/components/spell-edit.vue";
import Checkbox from "@/components/checkbox.vue";

const search = ref<string>("");
const spells = ref<WithUUID<Spell>[]>([]);
const filteredSpells = computed(() => {
  if (search.value === "") {
    return spells.value.sort((a, b) => a.name.localeCompare(b.name));
  }
  const searchText = search.value.toLowerCase();
  return spells.value
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((spell) => {
      return spell.name.toLowerCase().includes(searchText);
    });
});
onMounted(() => {
  SpellsCollection.getAll().then((s) => (spells.value = s));
});

const isRandomSpellPickerShown = ref(false);
const randomSpellPicker = ref<{
  minTier: string;
  maxTier: string;
  classes: SpellClass;
}>({
  minTier: "1",
  maxTier: "5",
  classes: {
    priest: true,
    wizard: true,
    seer: true,
    ovate: true,
    shamanic: true,
    graveWarden: true,
    witch: true,
  },
});
const isRandomSpellShown = ref(false);
const randomSpell = ref<WithUUID<Spell>>();
function pickRandomSpell() {
  const minTier = Number.parseInt(randomSpellPicker.value.minTier);
  const maxTier = Number.parseInt(randomSpellPicker.value.maxTier);
  if (isNaN(minTier) || isNaN(maxTier)) {
    return alert("min or max tier is not a number");
  }
  const classes = randomSpellPicker.value.classes;
  console.log(classes);
  const filteredSpells = spells.value.filter((spell) => {
    for (const key of Object.keys(spell.class) as (keyof SpellClass)[]) {
      console.log(spell.class[key]);
      if (classes[key] && spell.class[key]) {
        return true;
      }
    }
    return false;
  });
  if (filteredSpells.length === 0) {
    return alert("no spell found");
  }
  randomSpell.value = filteredSpells[randomRange(0, filteredSpells.length - 1)];
  isRandomSpellShown.value = true;
  isRandomSpellPickerShown.value = false;
}
async function resetSpells() {
  const RESET_TEXT =
    "Are you sure you want to reset spells to the spells from shadow dark core rulebook?";
  if (confirm(RESET_TEXT)) {
    await SpellsCollection.clear();
    await SpellsCollection.setMany(CoreSpells.core);
    SpellsCollection.getAll().then((s) => (spells.value = s));
  }
}
async function deleteSpell(spell: WithUUID<Spell>) {
  const DELETE_TEXT = `Are you sure you want to delete ${spell.name}?`;
  if (confirm(DELETE_TEXT)) {
    await SpellsCollection.delete(spell.uuid);
    spells.value = spells.value.filter((s) => spell.uuid !== s.uuid);
  }
}

const isEditSpellShown = ref(false);
const editSpell = ref<WithUUID<Spell>>();
function pickSpellToEdit(spell: WithUUID<Spell>) {
  editSpell.value = spell;
  isEditSpellShown.value = true;
}
async function editSpellFinish() {
  if (!editSpell.value) return;
  await SpellsCollection.set(editSpell.value.uuid, cloneSpell(editSpell.value));
  const spellIndex = spells.value.findIndex(
    (s) => s.uuid === editSpell.value!.uuid
  );
  if (spellIndex < 0) return;
  spells.value[spellIndex] = editSpell.value;
  isEditSpellShown.value = false;
}

const isCreateSpellShown = ref(false);
const createSpell = ref<WithUUID<Spell>>();
function showCreateSpell() {
  createSpell.value = {
    uuid: v4(),
    ...createNewSpell(),
  };
  isCreateSpellShown.value = true;
}
async function createSpellFinish() {
  if (!createSpell.value) return;
  await SpellsCollection.set(
    createSpell.value.uuid,
    cloneSpell(createSpell.value)
  );
  spells.value.push(createSpell.value);
  isCreateSpellShown.value = false;
}
async function upload(data: any[] | null) {
  if (!data) return;
  await SpellsCollection.setMany(data);
  SpellsCollection.getAll().then((s) => (spells.value = s));
}
</script>

<template>
  <Modal v-model="isRandomSpellPickerShown" title="Random Spell Picker">
    <div class="flex-row align-center gap20">
      <TextField stat label="min tier" v-model="randomSpellPicker.minTier" />
      <TextField stat label="max tier" v-model="randomSpellPicker.maxTier" />
    </div>
    <div class="gap10" style="align-self: center">
      <div class="font-small uppercase bold">Classes</div>
      <div class="flex-row gap10">
        <Checkbox label="Priest" v-model="randomSpellPicker.classes.priest" />
        <Checkbox label="Wizard" v-model="randomSpellPicker.classes.wizard" />
      </div>
      <div class="flex-row gap10">
        <Checkbox label="Seer" v-model="randomSpellPicker.classes.seer" />
        <Checkbox label="Ovate" v-model="randomSpellPicker.classes.ovate" />
      </div>
      <div class="flex-row gap10">
        <Checkbox
          label="Shamanic"
          v-model="randomSpellPicker.classes.shamanic"
        />
        <Checkbox label="Witch" v-model="randomSpellPicker.classes.witch" />
      </div>
      <Checkbox
        label="Grave Warden"
        v-model="randomSpellPicker.classes.graveWarden"
      />
    </div>
    <Button @click="pickRandomSpell">Get Random Spell</Button>
  </Modal>
  <Modal v-model="isRandomSpellShown" title="Random Spell">
    <SpellComponent v-if="randomSpell" :model-value="randomSpell" />
  </Modal>
  <Modal v-model="isEditSpellShown" title="Edit Spell">
    <SpellEditComponent v-if="editSpell" v-model="editSpell" />
    <Button @click="editSpellFinish">Save Spell</Button>
  </Modal>
  <Modal v-model="isCreateSpellShown" title="Create Spell">
    <SpellEditComponent v-if="createSpell" v-model="createSpell" />
    <Button @click="createSpellFinish">Create Spell</Button>
  </Modal>
  <TopBar
    v-model="search"
    @random="() => (isRandomSpellPickerShown = true)"
    @reset="resetSpells"
    @add="showCreateSpell"
    @upload="upload"
    :download-data="spells"
    download-file-name="spells"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">spells</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="spell in filteredSpells"
        class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        style="max-width: 320px"
      >
        <div class="flex-row gap20">
          <span
            class="material-symbols-outlined pointer"
            @click="() => pickSpellToEdit(spell)"
          >
            edit</span
          >
          <span
            class="material-symbols-outlined pointer"
            @click="() => deleteSpell(spell)"
          >
            delete
          </span>
        </div>
        <SpellComponent :model-value="spell" />
      </div>
    </div>
  </div>
</template>
