<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { WithUUID } from "@/services/db";
import type { Armor } from "@/data/armors/type";
import { ArmorsCollection } from "@/services/db/collections";
import TopBar from "@/components/top-bar.vue";
import EntryContainer from "@/components/entry-container.vue";
import Entry from "@/components/entry.vue";

const search = ref("");
const armors = ref<WithUUID<Armor>[]>([]);
const filteredArmor = computed(() => {
  if (search.value === "") {
    return armors.value;
  }

  armors.value;
});
onMounted(() => {
  ArmorsCollection.getAll().then((a) => (armors.value = a));
});
</script>

<template>
  <TopBar
    v-model="search"
    :download-data="[]"
    @add=""
    @random=""
    @reset=""
    @upload=""
  />
  <EntryContainer>
    <Entry v-for="armor in filteredArmor">
      
    </Entry>
  </EntryContainer>
</template>
