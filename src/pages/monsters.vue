<script setup lang="ts">
import type { Monster } from "@/data/monsters/type";
import type { WithUUID } from "@/services/db";
import { computed, onMounted, ref } from "vue";
import { randomRange } from "@/services/helpers";
import { MonstersCollection } from "@/services/db/collections";
import {
  monsters as CoreMonsters,
  createMonster as createMonsterFn,
} from "@/data/";
import { v4 } from "uuid";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import TextField from "@/components/text-field.vue";
import Button from "@/components/button.vue";
import MonsterComponent from "@/components/monster.vue";

const monsters = ref<WithUUID<Monster>[]>([]);
const search = ref<string>("");
const filteredMonsters = computed<WithUUID<Monster>[]>(() => {
  if (search.value == "") {
    return monsters.value;
  }

  return monsters.value.filter((monster) => {
    if (monster.name.includes(search.value)) {
      return true;
    }
    if (monster.flavourText.includes(search.value)) {
      return true;
    }
    if (monster.alignment.includes(search.value)) {
      return true;
    }
    if (monster.attacks.includes(search.value)) {
      return true;
    }
    if (monster.level.includes(search.value)) {
      return true;
    }
    if (monster.specials) {
      for (const specialKey of Object.keys(monster.specials)) {
        if (specialKey.includes(search.value)) {
          return true;
        }
        if ((monster.specials as any)[specialKey]?.includes(search.value)) {
          return true;
        }
      }
    }
    return false;
  });
});
onMounted(() => {
  MonstersCollection.getAll().then((m) => {
    monsters.value = m.sort((a, b) => a.name.localeCompare(b.name));
  });
});

const editMonsterModalShown = ref(false);
const randomMonsterPickerModalShown = ref(false);
const randomMonsterModalShown = ref(false);
const createMonsterModalShown = ref(false);
const randomMonsterPickerMinLevel = ref("0");
const randomMonsterPickerMaxLevel = ref("20");
const randomMonsterPicked = ref<Monster>();
const editMonster = ref<WithUUID<Monster>>();
const createMonster = ref<Monster>();
async function resetMonsters() {
  const RESET_TEXT =
    "Are you sure you want to reset monsters list to monsters from shadow dark's core rule book?";
  if (confirm(RESET_TEXT)) {
    await MonstersCollection.clear();
    await MonstersCollection.setMany(
      CoreMonsters.core.map((monster) => ({
        uuid: v4(),
        ...monster,
      }))
    );
    MonstersCollection.getAll().then((m) => {
      monsters.value = m.sort((a, b) => a.name.localeCompare(b.name));
    });
  }
}
async function deleteMonster(monster: WithUUID<Monster>) {
  const DELETE_TEXT = `Are you sure you want to delete ${monster.name}`;
  if (confirm(DELETE_TEXT)) {
    await MonstersCollection.delete(monster.uuid);
    monsters.value = monsters.value.filter((m) => m.uuid !== monster.uuid);
  }
}
async function pickRandomMonster() {
  const minLevel = Number.parseInt(randomMonsterPickerMinLevel.value);
  const maxLevel = Number.parseInt(randomMonsterPickerMinLevel.value);
  if (isNaN(minLevel) || isNaN(maxLevel)) {
    return alert("min level or max level is not a number");
  }

  const filteredMonsters = monsters.value.filter((monster) => {
    const level = Number.parseInt(monster.level);
    // this is for hydra
    if (isNaN(level)) {
      return minLevel >= 2;
    }
    return minLevel <= level && maxLevel >= level;
  });

  if (filteredMonsters.length === 0) {
    return alert("no monster found");
  }

  const randomMonsterIndex = randomRange(0, filteredMonsters.length - 1);
  randomMonsterPicked.value = filteredMonsters[randomMonsterIndex];
  randomMonsterPickerModalShown.value = false;
  randomMonsterModalShown.value = true;
}
async function showEditMonster(monster: WithUUID<Monster>) {
  editMonster.value = monster;
  editMonsterModalShown.value = true;
}
async function editMonsterFinish() {
  if (!editMonster.value) return;

  const clonedMonster = {
    ...editMonster.value,
    stats: {
      ...editMonster.value.stats,
    },
    specials: {
      ...editMonster.value.specials,
    },
  };
  await MonstersCollection.set(editMonster.value.uuid, clonedMonster);
  const monsterIndex = monsters.value.findIndex(
    (m) => m.uuid === editMonster.value!.uuid
  );
  if (monsterIndex < 0) return;
  monsters.value[monsterIndex] = editMonster.value;
  editMonsterModalShown.value = false;
  editMonster.value = undefined;
}
function editMonsterAddSpecial() {
  if (!editMonster.value?.specials) {
    return;
  }
  const temp = Object.assign({}, editMonster.value.specials);
  temp[Object.keys(temp).length] = "";
  editMonster.value.specials = temp;
}
function editMonsterRemoveSpecial(special: string) {
  if (!editMonster.value || !editMonster.value.specials) return;
  delete editMonster.value.specials[special];
}
function updateMonsterSpecialKey(index: number, key: string) {
  if (!editMonster.value?.specials) return;
  const keys = Object.keys(editMonster.value.specials);
  const newSpecials: Record<string, string> = {};
  for (let i = 0; i < keys.length; i++) {
    if (index !== i) {
      newSpecials[keys[i]] = editMonster.value.specials[keys[i]];
    } else {
      newSpecials[key] = editMonster.value.specials[keys[i]];
    }
  }
  editMonster.value.specials = newSpecials;
}
function updateMonsterSpecialValue(key: string, value: string) {
  if (!editMonster.value?.specials) return;
  const specials = { ...editMonster.value.specials };
  specials[key] = value;
  editMonster.value.specials = specials;
}
function createMonsterSpecialKey(index: number, key: string) {
  if (!createMonster.value?.specials) return;
  const keys = Object.keys(createMonster.value.specials);
  const newSpecials: Record<string, string> = {};
  for (let i = 0; i < keys.length; i++) {
    if (index !== i) {
      newSpecials[keys[i]] = createMonster.value.specials[keys[i]];
    } else {
      newSpecials[key] = createMonster.value.specials[keys[i]];
    }
  }
  createMonster.value.specials = newSpecials;
}
function createMonsterSpecialValue(key: string, value: string) {
  if (!createMonster.value?.specials) return;
  const specials = { ...createMonster.value.specials };
  specials[key] = value;
  createMonster.value.specials = specials;
}
function createMonsterAddSpecial() {
  if (!createMonster.value?.specials) {
    return;
  }
  const temp = Object.assign({}, createMonster.value.specials);
  temp[Object.keys(temp).length] = "";
  createMonster.value.specials = temp;
}
function createMonsterRemoveSpecial(special: string) {
  if (!createMonster.value || !createMonster.value.specials) return;
  delete createMonster.value.specials[special];
}
function createNewMonster() {
  createMonster.value = createMonsterFn();
  createMonsterModalShown.value = true;
}
function createMonsterFinish() {
  if (!createMonster.value) return;
  const uuid = v4();
  const clonedMonster = {
    ...createMonster.value!,
    stats: {
      ...createMonster.value!.stats,
    },
    specials: {
      ...createMonster.value!.specials,
    },
    uuid,
  };
  MonstersCollection.set(uuid, clonedMonster);
  createMonster.value = undefined;
  monsters.value.push(clonedMonster);
  monsters.value = monsters.value.sort((a, b) => a.name.localeCompare(b.name));
  createMonsterModalShown.value = false;
}
</script>

<template>
  <Modal
    v-if="editMonster"
    v-model="editMonsterModalShown"
    title="edit monster"
  >
    <TextField label="name" v-model="editMonster.name" />
    <TextField large label="flavour text" v-model="editMonster.flavourText" />
    <TextField label="attacks" v-model="editMonster.attacks" />
    <div class="flex-row gap10">
      <TextField small stat label="level" v-model="editMonster.level" />
      <TextField small stat label="AC" v-model="editMonster.stats.ac" />
      <TextField small stat label="HP" v-model="editMonster.stats.hp" />
      <TextField small stat label="movement" v-model="editMonster.stats.mv" />
      <TextField small stat label="alignment" v-model="editMonster.alignment" />
    </div>
    <div class="flex-row gap10">
      <TextField small stat label="STR" v-model="editMonster.stats.str" />
      <TextField small stat label="DEX" v-model="editMonster.stats.dex" />
      <TextField small stat label="CON" v-model="editMonster.stats.con" />
      <TextField small stat label="INT" v-model="editMonster.stats.int" />
      <TextField small stat label="WIS" v-model="editMonster.stats.wis" />
      <TextField small stat label="CHA" v-model="editMonster.stats.cha" />
    </div>
    <div class="font-small bold uppercase">specials</div>
    <div
      class="flex-row gap10"
      v-if="editMonster.specials"
      v-for="(special, index) in Object.keys(editMonster.specials)"
    >
      <div class="gap10">
        <TextField
          label="special name"
          :model-value="special"
          @update:model-value="(val) => updateMonsterSpecialKey(index, val)"
        />
        <TextField
          label="special description"
          large
          :model-value="editMonster.specials[special]"
          @update:model-value="(val) => updateMonsterSpecialValue(special, val)"
        />
      </div>
      <span
        class="material-symbols-outlined pointer"
        @click="() => editMonsterRemoveSpecial(special)"
      >
        close
      </span>
    </div>
    <Button @click="editMonsterAddSpecial">
      <span class="material-symbols-outlined pointer text-align-center">
        add
      </span>
    </Button>
    <Button @click="editMonsterFinish">Save Monster</Button>
  </Modal>
  <Modal
    v-if="createMonster"
    v-model="createMonsterModalShown"
    title="create monster"
  >
    <TextField label="name" v-model="createMonster.name" />
    <TextField large label="flavour text" v-model="createMonster.flavourText" />
    <TextField label="attacks" v-model="createMonster.attacks" />
    <div class="flex-row gap10">
      <TextField small stat label="level" v-model="createMonster.level" />
      <TextField small stat label="AC" v-model="createMonster.stats.ac" />
      <TextField small stat label="HP" v-model="createMonster.stats.hp" />
      <TextField small stat label="movement" v-model="createMonster.stats.mv" />
      <TextField
        small
        stat
        label="alignment"
        v-model="createMonster.alignment"
      />
    </div>
    <div class="flex-row gap10">
      <TextField small stat label="STR" v-model="createMonster.stats.str" />
      <TextField small stat label="DEX" v-model="createMonster.stats.dex" />
      <TextField small stat label="CON" v-model="createMonster.stats.con" />
      <TextField small stat label="INT" v-model="createMonster.stats.int" />
      <TextField small stat label="WIS" v-model="createMonster.stats.wis" />
      <TextField small stat label="CHA" v-model="createMonster.stats.cha" />
    </div>
    <div class="font-small bold uppercase">specials</div>
    <div
      class="flex-row gap10"
      v-if="createMonster.specials"
      v-for="(special, index) in Object.keys(createMonster.specials)"
    >
      <div class="gap10">
        <TextField
          label="special name"
          :model-value="special"
          @update:model-value="(val) => createMonsterSpecialKey(index, val)"
        />
        <TextField
          label="special description"
          large
          :model-value="createMonster.specials[special]"
          @update:model-value="(val) => createMonsterSpecialValue(special, val)"
        />
      </div>
      <span
        class="material-symbols-outlined pointer"
        @click="() => createMonsterRemoveSpecial(special)"
      >
        close
      </span>
    </div>
    <Button @click="createMonsterAddSpecial">
      <span class="material-symbols-outlined pointer text-align-center">
        add
      </span>
    </Button>
    <Button @click="createMonsterFinish">Create Monster</Button>
  </Modal>
  <Modal v-model="randomMonsterPickerModalShown" title="Random Monster Picker">
    <TextField label="min level" v-model="randomMonsterPickerMinLevel" />
    <TextField label="max level" v-model="randomMonsterPickerMaxLevel" />
    <Button @click="pickRandomMonster">Get Random Monster</Button>
  </Modal>
  <Modal
    v-if="randomMonsterPicked"
    v-model="randomMonsterModalShown"
    title="random monster"
  >
    <MonsterComponent :value="randomMonsterPicked" />
  </Modal>
  <TopBar
    v-model="search"
    @add="createNewMonster"
    @random="() => (randomMonsterPickerModalShown = true)"
    @reset="resetMonsters"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">monsters</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="monster in filteredMonsters"
        class="bg-paper p10 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        style="max-width: 340px"
      >
        <div class="flex-row gap20">
          <span
            class="material-symbols-outlined pointer"
            @click="() => showEditMonster(monster)"
          >
            edit</span
          >
          <span
            class="material-symbols-outlined pointer"
            @click="() => deleteMonster(monster)"
          >
            delete
          </span>
        </div>
        <MonsterComponent :value="monster" />
      </div>
    </div>
  </div>
</template>
