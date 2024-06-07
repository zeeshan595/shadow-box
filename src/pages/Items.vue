<script setup lang="ts">
import { ref, watch } from "vue";
import { items } from "@/data";
import type { Item } from "@/data/items/type";
import { randomRange } from "@/services/helpers";
import TopBar from "@/components/top-bar.vue";
import Button from "@/components/button.vue";
import TextField from "@/components/text-field.vue";
import Modal from "@/components/modal.vue";

const search = ref<string>("");
const filteredItems = ref<Item[]>(items.magic);
watch(search, (search) => {
  if (search == "") {
    filteredItems.value = items.magic;
    return;
  }
  filteredItems.value = items.magic.filter((item) => {
    if (item.name.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (item.flavourText.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (item.bonus?.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (item.benefit?.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (item.curse?.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    if (item.personality?.toLowerCase().includes(search.toLowerCase())) {
      return true;
    }
    return false;
  });
});
function selectRandomMagicItem() {
  const randomMagicItemIndex = randomRange(0, items.magic.length - 1);
  search.value = items.magic[randomMagicItemIndex].name.toLowerCase();
}

const isCreateModalShown = ref(false);
const newMagicItem = ref<Item>({
  name: "",
  flavourText: "",
});
function createMagicItem() {
  //todo: create magic item
}
</script>

<template>
  <Modal v-model="isCreateModalShown" title="Create Magic Item">
    <TextField label="name" v-model="newMagicItem.name" />
    <TextField large label="flavour text" v-model="newMagicItem.flavourText" />
    <TextField large label="bonus" v-model="newMagicItem.bonus" />
    <TextField large label="benefit" v-model="newMagicItem.benefit" />
    <TextField large label="curse" v-model="newMagicItem.curse" />
    <TextField large label="personality" v-model="newMagicItem.personality" />
    <Button @click="createMagicItem">Create magic Item</Button>
  </Modal>
  <TopBar
    v-model="search"
    @random="selectRandomMagicItem"
    @add="() => (isCreateModalShown = true)"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">magic items</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="item in filteredItems"
        class="bg-paper p10 rounded flex-shrink justify-start align-center text-align-center shadow gap10"
      >
        <span class="bold uppercase">{{ item.name }}</span>
        <span class="italic font-small">{{ item.flavourText }}</span>
        <span v-if="item.bonus">
          <span class="font-small bold uppercase">bonus: </span>
          {{ item.bonus }}
        </span>
        <span v-if="item.benefit">
          <span class="font-small bold uppercase">benefit: </span>
          {{ item.benefit }}
        </span>
        <span v-if="item.curse">
          <span class="font-small bold uppercase">curse: </span>
          {{ item.curse }}
        </span>
        <span v-if="item.personality">
          <span class="font-small bold uppercase">personality: </span>
          {{ item.personality }}
        </span>
      </div>
    </div>
  </div>
</template>
