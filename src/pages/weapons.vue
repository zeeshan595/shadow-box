<script setup lang="ts">
import { ref, onMounted, computed, watch } from "vue";
import type { WithUUID } from "@/services/db";
import type { Weapon } from "@/data/weapons/type";
import { cloneWeapon, weapons as coreWeapons } from "@/data/weapons/";
import { WeaponsCollection } from "@/services/db/collections";
import { createWeapon } from "@/data/weapons";
import { randomRange } from "@/services/helpers";
import TopBar from "@/components/top-bar.vue";
import WeaponComponent from "@/components/weapon/weapon.vue";
import Modal from "@/components/modal.vue";
import WeaponEdit from "@/components/weapon/weapon-edit.vue";
import Button from "@/components/button.vue";
import EntryActions from "@/components/entry-actions.vue";
import { DataType, sendToPlayers } from "@/services/owlbear";
import EntryContainer from "@/components/entry-container.vue";
import Entry from "@/components/entry.vue";
import { performSearch } from "@/services/search";
import * as Owlbear from "@/services/owlbear";

const search = ref("");
const weapons = ref<WithUUID<Weapon>[]>([]);
const filteredWeapons = computed(() => {
  if (search.value === "") {
    return weapons.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  return performSearch(
    search.value,
    weapons.value.sort((a, b) => a.name.localeCompare(b.name))
  );
});
onMounted(() => {
  WeaponsCollection.getAll().then((w) => (weapons.value = w));
});
watch(Owlbear.lastUpdatedAt, () => {
  WeaponsCollection.getAll().then((s) => (weapons.value = s));
});

const showCreateModal = ref(false);
const creatingWeapon = ref<WithUUID<Weapon> | null>(null);
function onCreateWeapon() {
  if (!creatingWeapon.value) return;
  WeaponsCollection.set(creatingWeapon.value?.uuid, creatingWeapon.value);
  weapons.value.push(creatingWeapon.value);
  creatingWeapon.value = null;
  showCreateModal.value = false;
}
function showCreateWeapon() {
  showCreateModal.value = true;
  creatingWeapon.value = createWeapon();
}

const showEditModal = ref(false);
const editingWeapon = ref<WithUUID<Weapon> | null>(null);
function onEditWeapon() {
  if (!editingWeapon.value) return;
  WeaponsCollection.set(editingWeapon.value?.uuid, editingWeapon.value);
  weapons.value.push(editingWeapon.value);
  editingWeapon.value = null;
  showEditModal.value = false;
}
function showEditWeapon(weapon: WithUUID<Weapon>) {
  showEditModal.value = true;
  editingWeapon.value = weapon;
}

const showRandomModal = ref(false);
const randomWeapon = ref<WithUUID<Weapon> | null>(null);
function selectRandomWeapon() {
  randomWeapon.value = weapons.value[randomRange(0, weapons.value.length - 1)];
  showRandomModal.value = true;
}

async function resetWeapons() {
  const RESET_TEXT = `Are you sure you want to reset weapons to be default weapons from core shadow dark rulebook?`;
  if (!confirm(RESET_TEXT)) return;
  await WeaponsCollection.clear();
  await WeaponsCollection.setMany(coreWeapons);
  weapons.value = [...coreWeapons];
}
async function uploadWeapons(data: any[] | null) {
  if (!data) return;
  await WeaponsCollection.clear();
  await WeaponsCollection.setMany(data);
  weapons.value = data;
}

function onDeleteWeapon(weapon: WithUUID<Weapon>) {
  const DELETE_TEXT = `Are you sure you want to delete ${weapon.name}?`;
  if (!confirm(DELETE_TEXT)) return;
  WeaponsCollection.delete(weapon.uuid);
  weapons.value = weapons.value.filter((w) => weapon.uuid !== w.uuid);
}

function onShareWeapon(weapon: WithUUID<Weapon>) {
  sendToPlayers(DataType.Weapon, cloneWeapon(weapon));
}
async function onDeleteAll() {
  const DELETE_TEXT = "Are you sure you want to delete ALL weapons?";
  if (!confirm(DELETE_TEXT)) return;
  await WeaponsCollection.clear();
  weapons.value = [];
}
</script>

<template>
  <Modal v-model="showCreateModal" title="Create Weapon">
    <WeaponEdit v-model="creatingWeapon" />
    <Button @click="onCreateWeapon">Create Weapon</Button>
  </Modal>
  <Modal v-model="showEditModal" title="Edit Weapon">
    <WeaponEdit v-model="editingWeapon" />
    <Button @click="onEditWeapon">Save Weapon</Button>
  </Modal>
  <Modal v-model="showRandomModal" title="Random weapon">
    <WeaponComponent v-if="randomWeapon" :model-value="randomWeapon" />
  </Modal>
  <TopBar
    v-model="search"
    :download-data="weapons"
    @add="showCreateWeapon"
    @random="selectRandomWeapon"
    @reset="resetWeapons"
    @upload="uploadWeapons"
    @delete="onDeleteAll"
    :show-add="true"
    :show-random="true"
    :show-reset="true"
    :show-upload="true"
    :show-download="true"
    search-placeholder="club,1d4"
  />
  <EntryContainer :title="`weapons (${weapons.length})`">
    <Entry v-for="weapon in filteredWeapons">
      <EntryActions
        @edit="() => showEditWeapon(weapon)"
        @delete="() => onDeleteWeapon(weapon)"
        @share="() => onShareWeapon(weapon)"
      />
      <WeaponComponent :model-value="weapon" />
    </Entry>
  </EntryContainer>
</template>

<style scoped lang="scss"></style>
