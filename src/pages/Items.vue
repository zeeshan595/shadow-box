<script setup lang="ts">
import type { Item } from "@/data/items/type";
import type { WithUUID } from "@/services/db";
import { computed, onMounted, ref } from "vue";
import { randomRange } from "@/services/helpers";
import { ItemsCollection } from "@/services/db/collections";
import { v4 } from "uuid";
import { createItem, items as CoreItems } from "@/data";
import TopBar from "@/components/top-bar.vue";
import Button from "@/components/button.vue";
import TextField from "@/components/text-field.vue";
import Modal from "@/components/modal.vue";
import ItemComponent from "@/components/item.vue";

const search = ref<string>("");
const items = ref<WithUUID<Item>[]>([]);
const filteredItems = computed<WithUUID<Item>[]>(() => {
  if (search.value.trim() == "") {
    return items.value;
  }
  const searchText = search.value.toLowerCase();
  return items.value.filter((item) => {
    if (item.name.toLowerCase().includes(searchText)) {
      return true;
    }
    if (item.flavourText.toLowerCase().includes(searchText)) {
      return true;
    }
    if (item.bonus?.toLowerCase().includes(searchText)) {
      return true;
    }
    if (item.benefit?.toLowerCase().includes(searchText)) {
      return true;
    }
    if (item.curse?.toLowerCase().includes(searchText)) {
      return true;
    }
    if (item.personality?.toLowerCase().includes(searchText)) {
      return true;
    }
    return false;
  });
});
const isRandomModalShown = ref(false);
const randomMagicItem = ref<Item>();
function selectRandomMagicItem() {
  const randomMagicItemIndex = randomRange(0, items.value.length - 1);
  randomMagicItem.value = items.value[randomMagicItemIndex];
  isRandomModalShown.value = true;
}
function cleanupItem(item: Item): Item {
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
const newMagicItem = ref<Item>(createItem());
function createMagicItem() {
  if (newMagicItem.value.name.trim() === "") {
    return alert("No item name provided");
  }
  // setup magic item
  const item = cleanupItem(newMagicItem.value);
  const uuid = v4();

  // update database, list and filter
  ItemsCollection.set(uuid, item);
  items.value.push({ uuid, ...item });

  // reset modal
  newMagicItem.value = createItem();
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
    ...cleanupItem(editingMagicItem.value as Item),
  };

  await ItemsCollection.set(item.uuid, item);
  const itemIndex = items.value.findIndex((i) => i.uuid === item.uuid);
  const temp = [...items.value];
  temp[itemIndex] = item;
  items.value = temp;

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
    await ItemsCollection.setMany(
      CoreItems.magic.map((item) => ({ uuid: v4(), ...item }))
    );
    ItemsCollection.getAll().then((i) => {
      items.value = i.sort((a, b) => a.name.localeCompare(b.name));
    });
  }
}
onMounted(() => {
  ItemsCollection.getAll().then((i) => {
    items.value = i.sort((a, b) => a.name.localeCompare(b.name));
  });
});
</script>

<template>
  <TopBar
    v-model="search"
    @random="selectRandomMagicItem"
    @add="() => (isCreateModalShown = true)"
    @reset="resetItems"
  />
  <Modal v-model="isCreateModalShown" title="Create Magic Item">
    <TextField label="name" v-model="newMagicItem.name" />
    <TextField large label="flavour text" v-model="newMagicItem.flavourText" />
    <TextField large label="bonus" v-model="newMagicItem.bonus" />
    <TextField large label="benefit" v-model="newMagicItem.benefit" />
    <TextField large label="personality" v-model="newMagicItem.personality" />
    <TextField large label="curse" v-model="newMagicItem.curse" />
    <Button @click="createMagicItem">Create magic Item</Button>
  </Modal>
  <Modal
    v-if="editingMagicItem"
    v-model="isEditModalShown"
    title="Edit Magic Item"
  >
    <TextField label="name" v-model="editingMagicItem.name" />
    <TextField
      large
      label="flavour text"
      v-model="editingMagicItem.flavourText"
    />
    <TextField large label="bonus" v-model="editingMagicItem.bonus" />
    <TextField large label="benefit" v-model="editingMagicItem.benefit" />
    <TextField large label="curse" v-model="editingMagicItem.curse" />
    <TextField
      large
      label="personality"
      v-model="editingMagicItem.personality"
    />
    <Button @click="updateMagicItem">Update Item</Button>
  </Modal>
  <Modal
    v-if="randomMagicItem"
    v-model="isRandomModalShown"
    title="random magic item"
  >
    <ItemComponent :value="randomMagicItem" />
  </Modal>
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">magic items</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="item in filteredItems"
        class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        style="max-width: 320px"
      >
        <div class="flex-row gap20">
          <span
            class="material-symbols-outlined pointer"
            @click="() => startEditingMagicItem(item)"
          >
            edit</span
          >
          <span
            class="material-symbols-outlined pointer"
            @click="() => deleteItem(item)"
          >
            delete
          </span>
        </div>
        <ItemComponent :value="item" />
      </div>
    </div>
  </div>
</template>
