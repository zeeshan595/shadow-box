<script setup lang="ts">
import type { Item } from "@/data/items/type";
import type { WithUUID } from "@/services/db";
import { computed, onMounted, ref, watch } from "vue";
import { randomRange } from "@/services/helpers";
import { ItemsCollection } from "@/services/db/collections";
import { v4 } from "uuid";
import { createItem, items as CoreItems, cloneItem } from "@/data";
import { importItems } from "@/services/importer";
import * as Owlbear from "@/services/owlbear";
import TopBar from "@/components/top-bar.vue";
import Button from "@/components/button.vue";
import Modal from "@/components/modal.vue";
import ItemComponent from "@/components/item/item.vue";
import ItemEditComponent from "@/components/item/item-edit.vue";
import ImportModal from "@/components/import-modal.vue";
import EntryActions from "@/components/entry-actions.vue";
import EntryContainer from "@/components/entry-container.vue";
import Entry from "@/components/entry.vue";
import { performSearch } from "@/services/search";

const search = ref<string>("");
const items = ref<WithUUID<Item>[]>([]);
const filteredItems = computed<WithUUID<Item>[]>(() => {
  if (search.value.trim() == "") {
    return items.value.sort((a, b) => a.name.localeCompare(b.name));
  }

  return performSearch(
    search.value,
    items.value.sort((a, b) => a.name.localeCompare(b.name))
  );
});
const isRandomModalShown = ref(false);
const randomMagicItem = ref<Item>();
function selectRandomMagicItem() {
  const randomMagicItemIndex = randomRange(0, items.value.length - 1);
  randomMagicItem.value = items.value[randomMagicItemIndex];
  isRandomModalShown.value = true;
}
function cleanupItem(item: WithUUID<Item>): WithUUID<Item> {
  item.name = item.name.trim();
  if (newMagicItem.value.benefit?.trim() === "") {
    delete newMagicItem.value.benefit;
  }
  if (newMagicItem.value.bonus?.trim() === "") {
    delete newMagicItem.value.bonus;
  }
  if (newMagicItem.value.curse?.trim() === "") {
    delete newMagicItem.value.curse;
  }
  if (newMagicItem.value.personality?.trim() === "") {
    delete newMagicItem.value.personality;
  }
  return item;
}
const isCreateModalShown = ref(false);
const newMagicItem = ref<WithUUID<Item>>({ ...createItem(), uuid: v4() });
function createMagicItem() {
  if (newMagicItem.value.name.trim() === "") {
    return alert("No item name provided");
  }
  // setup magic item
  const item = cleanupItem(newMagicItem.value);

  // update database, list and filter
  ItemsCollection.set(item.uuid, cloneItem(item));
  items.value.push(item);

  // reset modal
  newMagicItem.value = { ...createItem(), uuid: v4() };
  return (isCreateModalShown.value = false);
}
const isEditModalShown = ref(false);
const editingMagicItem = ref<WithUUID<Item>>();
function startEditingMagicItem(item: WithUUID<Item>) {
  if (!item.uuid) return;
  editingMagicItem.value = {
    ...createItem(),
    ...item,
  };
  isEditModalShown.value = true;
}
async function updateMagicItem() {
  if (!editingMagicItem.value) {
    return alert("trying to edit a null item");
  }

  const item = {
    ...editingMagicItem.value,
    ...cleanupItem(editingMagicItem.value),
  };

  await ItemsCollection.set(item.uuid, cloneItem(item));
  const itemIndex = items.value.findIndex((i) => i.uuid === item.uuid);
  const temp = [...items.value];
  temp[itemIndex] = item;
  items.value = temp;

  isEditModalShown.value = false;
  editingMagicItem.value = undefined;
}
async function deleteItem(item: WithUUID<Item>) {
  if (!item.uuid) return;
  const CONFIRM_TEXT = `Are you sure you want to delete ${item.name}?`;
  if (confirm(CONFIRM_TEXT)) {
    // update database, list and filter
    await ItemsCollection.delete(item.uuid);
    items.value = items.value.filter((i) => i.uuid !== item.uuid);
  }
}
async function resetItems() {
  const RESET_TEXT =
    "Are you sure you want to reset magic items to default items from core shadow dark book?";
  if (confirm(RESET_TEXT)) {
    await ItemsCollection.clear();
    await ItemsCollection.setMany(CoreItems.magic);
    ItemsCollection.getAll().then((i) => (items.value = i));
  }
}
onMounted(() => {
  ItemsCollection.getAll().then((i) => (items.value = i));
});
async function uploadData(data: any[] | null) {
  if (!data) return;
  await ItemsCollection.setMany(data);
  ItemsCollection.getAll().then((i) => (items.value = i));
}

const importerText = ref("");
const showImporter = ref(false);
const importerReplacesExistingContent = ref(false);
async function onImport() {
  await importItems(importerText.value, importerReplacesExistingContent.value);
  ItemsCollection.getAll().then((i) => (items.value = i));
  showImporter.value = false;
}

async function sendItemToPlayers(item: WithUUID<Item>) {
  await Owlbear.sendToPlayers(Owlbear.DataType.Item, cloneItem(item));
}
watch(Owlbear.lastUpdatedAt, () => {
  ItemsCollection.getAll().then((i) => (items.value = i));
});
</script>

<template>
  <ImportModal
    title="Import items"
    v-model="importerText"
    v-model:show-modal="showImporter"
    v-model:replace-content="importerReplacesExistingContent"
    @import="onImport"
    :placeholder="'item'"
  />
  <TopBar
    v-model="search"
    @random="selectRandomMagicItem"
    @add="isCreateModalShown = true"
    @reset="resetItems"
    @upload="uploadData"
    @import="showImporter = true"
    :download-data="items"
    :show-add="true"
    :show-random="true"
    :show-reset="true"
    :show-import="true"
    :show-upload="true"
    :show-download="true"
  />
  <Modal v-model="isCreateModalShown" title="Create Magic Item">
    <ItemEditComponent v-model="newMagicItem" />
    <Button @click="createMagicItem">Create magic Item</Button>
  </Modal>
  <Modal v-model="isEditModalShown" title="Edit Magic Item">
    <ItemEditComponent v-if="editingMagicItem" v-model="editingMagicItem" />
    <Button @click="updateMagicItem">Update Item</Button>
  </Modal>
  <Modal v-model="isRandomModalShown" title="random magic item">
    <ItemComponent v-if="randomMagicItem" :value="randomMagicItem" />
  </Modal>
  <EntryContainer :title="`magic items (${items.length})`">
    <Entry v-for="item in filteredItems">
      <EntryActions
        @edit="() => startEditingMagicItem(item)"
        @delete="() => () => deleteItem(item)"
        @share="() => () => sendItemToPlayers(item)"
      />
      <ItemComponent :value="item" />
    </Entry>
  </EntryContainer>
</template>
