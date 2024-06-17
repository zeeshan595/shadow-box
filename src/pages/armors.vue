<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import type { WithUUID } from "@/services/db";
import type { Armor } from "@/data/armors/type";
import { ArmorsCollection } from "@/services/db/collections";
import TopBar from "@/components/top-bar.vue";
import EntryContainer from "@/components/entry-container.vue";
import Entry from "@/components/entry.vue";
import ArmorComponent from "@/components/armor/armor.vue";
import EntryActions from "@/components/entry-actions.vue";
import Modal from "@/components/modal.vue";
import ArmorEdit from "@/components/armor/armor-edit.vue";
import Button from "@/components/button.vue";
import { createArmor } from "@/data/armors";
import { DataType, sendToPlayers } from "@/services/owlbear";
import { randomRange } from "@/services/helpers";
import { armors as CoreArmors } from "@/data/armors/";
import { performSearch } from "@/services/search";
import * as Owlbear from "@/services/owlbear";

const search = ref("");
const armors = ref<WithUUID<Armor>[]>([]);
const filteredArmor = computed(() => {
  if (search.value === "") {
    return armors.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  return performSearch(
    search.value,
    armors.value.sort((a, b) => a.name.localeCompare(b.name))
  );
});
onMounted(() => {
  ArmorsCollection.getAll().then((a) => (armors.value = a));
});
watch(Owlbear.lastUpdatedAt, () => {
  ArmorsCollection.getAll().then((i) => (armors.value = i));
});

const showCreateArmor = ref(false);
const creatingArmor = ref<WithUUID<Armor> | null>(null);
function onCreate() {
  creatingArmor.value = createArmor();
  showCreateArmor.value = true;
}
function onCreateFinish() {
  if (!creatingArmor.value) return;
  ArmorsCollection.set(creatingArmor.value.uuid, creatingArmor.value);
  armors.value.push(creatingArmor.value);
  creatingArmor.value = createArmor();
  showCreateArmor.value = false;
}

function onDelete(armor: WithUUID<Armor>) {
  ArmorsCollection.delete(armor.uuid);
  armors.value = armors.value.filter((a) => a.uuid !== armor.uuid);
}
const showEditArmor = ref(false);
const editingArmor = ref<WithUUID<Armor> | null>(null);
function onEdit(armor: WithUUID<Armor>) {
  creatingArmor.value = armor;
  showCreateArmor.value = true;
}
function onEditFinish() {
  if (!creatingArmor.value) return;
  ArmorsCollection.set(creatingArmor.value.uuid, creatingArmor.value);
  armors.value.push(creatingArmor.value);
  creatingArmor.value = createArmor();
  showCreateArmor.value = false;
}

function onShare(armor: WithUUID<Armor>) {
  sendToPlayers(DataType.Armor, armor);
}

const showRandomArmor = ref(false);
const randomArmor = ref<WithUUID<Armor>>();
function onRandom() {
  showRandomArmor.value = true;
  randomArmor.value = armors.value[randomRange(0, armors.value.length - 1)];
}

async function onReset() {
  const RESET_TEXT = `Are you sure you want to reset armors to default armors from shadow dark?`;
  if (!confirm(RESET_TEXT)) return;
  await ArmorsCollection.clear();
  await ArmorsCollection.setMany(CoreArmors);
  armors.value = [...CoreArmors];
}
async function onUpload(data: any[] | null) {
  if (!data) return;
  await ArmorsCollection.clear();
  await ArmorsCollection.setMany(data);
  armors.value = data;
}
async function onDeleteAll() {
  const DELETE_TEXT = "Are you sure you want to delete ALL armors?";
  if (!confirm(DELETE_TEXT)) return;
  await ArmorsCollection.clear();
  armors.value = [];
}
</script>

<template>
  <Modal v-if="creatingArmor" v-model="showCreateArmor" title="Create Armor">
    <ArmorEdit v-model="creatingArmor" />
    <Button @click="onCreateFinish">Create Armor</Button>
  </Modal>
  <Modal v-if="editingArmor" v-model="showEditArmor" title="Edit Armor">
    <ArmorEdit v-model="editingArmor" />
    <Button @click="onEditFinish">Save Armor</Button>
  </Modal>
  <Modal v-if="randomArmor" v-model="showRandomArmor" title="Random Armor">
    <ArmorComponent :model-value="randomArmor" />
  </Modal>
  <TopBar
    v-model="search"
    :download-data="armors"
    @add="onCreate"
    @random="onRandom"
    @reset="onReset"
    @upload="onUpload"
    @delete="onDeleteAll"
    :show-add="true"
    :show-random="true"
    :show-reset="true"
    :show-upload="true"
    :show-download="true"
    :show-delete="true"
    search-placeholder="11 + DEX,+2"
  />
  <EntryContainer>
    <Entry v-for="armor in filteredArmor">
      <EntryActions
        @edit="() => onEdit(armor)"
        @delete="() => onDelete(armor)"
        @share="() => onShare(armor)"
      />
      <ArmorComponent :model-value="armor" />
    </Entry>
  </EntryContainer>
</template>
