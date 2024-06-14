<script setup lang="ts">
import type { Monster } from "@/data/monsters/type";
import type { WithUUID } from "@/services/db";
import { computed, onMounted, ref, watch } from "vue";
import { randomRange } from "@/services/helpers";
import { MonstersCollection } from "@/services/db/collections";
import {
  monsters as CoreMonsters,
  cloneMonster,
  createMonster as createMonsterFn,
} from "@/data/";
import { v4 } from "uuid";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import TextField from "@/components/text-field.vue";
import Button from "@/components/button.vue";
import MonsterComponent from "@/components/monster.vue";
import MonsterEditComponent from "@/components/monster-edit.vue";
import ImportModal from "@/components/import-modal.vue";
import { importMonsters } from "@/services/importer";
import * as Owlbear from "@/services/owlbear";

const monsters = ref<WithUUID<Monster>[]>([]);
const search = ref<string>("");
const filteredMonsters = computed<WithUUID<Monster>[]>(() => {
  if (search.value == "") {
    return monsters.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  const lowerCaseSearch = search.value.toLowerCase();
  return monsters.value
    .sort((a, b) => a.name.localeCompare(b.name))
    .filter((monster) => {
      if (monster.name.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }
      if (monster.attacks.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }
      if (monster.level.toLowerCase().includes(lowerCaseSearch)) {
        return true;
      }
      for (const special of monster.specials) {
        if (special.name.toLowerCase().includes(lowerCaseSearch)) {
          return true;
        }
      }
      return false;
    });
});
onMounted(() => {
  MonstersCollection.getAll().then((m) => (monsters.value = m));
});

const editMonsterModalShown = ref(false);
const randomMonsterPickerModalShown = ref(false);
const randomMonsterModalShown = ref(false);
const createMonsterModalShown = ref(false);
const randomMonsterPicker = ref<{ min: string; max: string }>({
  min: "0",
  max: "20",
});
const randomMonsterPicked = ref<Monster>();
const editMonster = ref<WithUUID<Monster>>();
const createMonster = ref<WithUUID<Monster>>();
async function resetMonsters() {
  const RESET_TEXT =
    "Are you sure you want to reset monsters list to monsters from shadow dark's core rule book?";
  if (confirm(RESET_TEXT)) {
    await MonstersCollection.clear();
    await MonstersCollection.setMany(CoreMonsters.core);
    MonstersCollection.getAll().then((m) => (monsters.value = m));
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
  const minLevel = Number.parseInt(randomMonsterPicker.value.min);
  const maxLevel = Number.parseInt(randomMonsterPicker.value.max);
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

  await MonstersCollection.set(
    editMonster.value.uuid,
    cloneMonster(editMonster.value)
  );
  const monsterIndex = monsters.value.findIndex(
    (m) => m.uuid === editMonster.value!.uuid
  );
  if (monsterIndex < 0) return;
  monsters.value[monsterIndex] = editMonster.value;
  editMonsterModalShown.value = false;
  editMonster.value = undefined;
}
function createNewMonster() {
  createMonster.value = {
    uuid: v4(),
    ...createMonsterFn(),
  };
  createMonsterModalShown.value = true;
}
function createMonsterFinish() {
  if (!createMonster.value) return;
  const monster = cloneMonster(createMonster.value);
  MonstersCollection.set(monster.uuid, monster);
  createMonster.value = undefined;
  monsters.value.push(monster);
  createMonsterModalShown.value = false;
}
async function upload(data: any[] | null) {
  if (!data) return;
  await MonstersCollection.setMany(data);
  MonstersCollection.getAll().then((m) => (monsters.value = m));
}

const importerText = ref("");
const showImporter = ref(false);
const importerReplacesExistingContent = ref(false);
async function onImport() {
  await importMonsters(
    importerText.value,
    importerReplacesExistingContent.value
  );
  MonstersCollection.getAll().then((m) => (monsters.value = m));
  showImporter.value = false;
}

const isOwlbearReady = computed(() => Owlbear.isReady.value);
async function sendMonsterToPlayers(monster: WithUUID<Monster>) {
  await Owlbear.sendToPlayers(Owlbear.DataType.Monster, cloneMonster(monster));
}
watch(Owlbear.lastUpdatedAt, () => {
  MonstersCollection.getAll().then((m) => (monsters.value = m));
});
</script>

<template>
  <ImportModal
    title="Import monsters"
    v-model="importerText"
    v-model:show-modal="showImporter"
    v-model:replace-content="importerReplacesExistingContent"
    @import="onImport"
    :placeholder="'monster'"
  />
  <Modal v-model="editMonsterModalShown" title="edit monster">
    <MonsterEditComponent v-if="editMonster" v-model="editMonster" />
    <Button @click="editMonsterFinish">Save Monster</Button>
  </Modal>
  <Modal v-model="createMonsterModalShown" title="create monster">
    <MonsterEditComponent v-if="createMonster" v-model="createMonster" />
    <Button @click="createMonsterFinish">Create Monster</Button>
  </Modal>
  <Modal v-model="randomMonsterPickerModalShown" title="Random Monster Picker">
    <TextField label="min level" v-model="randomMonsterPicker.min" />
    <TextField label="max level" v-model="randomMonsterPicker.max" />
    <Button @click="pickRandomMonster">Get Random Monster</Button>
  </Modal>
  <Modal v-model="randomMonsterModalShown" title="random monster">
    <MonsterComponent v-if="randomMonsterPicked" :value="randomMonsterPicked" />
  </Modal>
  <TopBar
    v-model="search"
    @add="createNewMonster"
    @random="randomMonsterPickerModalShown = true"
    @reset="resetMonsters"
    @upload="upload"
    @import="showImporter = true"
    :download-data="monsters"
    download-file-name="monsters"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">
      monsters ({{ monsters.length }})
    </h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="monster in filteredMonsters"
        class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        style="max-width: 320px"
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
          <span
            v-if="isOwlbearReady"
            class="material-symbols-outlined pointer"
            @click="() => sendMonsterToPlayers(monster)"
          >
            send
          </span>
        </div>
        <MonsterComponent :value="monster" />
      </div>
    </div>
  </div>
</template>
