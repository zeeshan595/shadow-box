<script setup lang="ts">
import { ref } from "vue";
import TopBar from "@/components/top-bar.vue";
import type { WithUUID } from "@/services/db";
import type { RollTable } from "@/data/rollTables";

const search = ref<string>("");
const tables = ref<WithUUID<RollTable>[]>([]);
</script>

<template>
  <TopBar
    v-model="search"
    :download-data="[]"
    download-file-name="roll-tables"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">roll tables</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="table in tables"
        class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        style="max-width: 320px"
      ></div>
    </div>
  </div>
</template>
