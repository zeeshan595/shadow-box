<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import type { WithUUID } from "@/services/db";
import type { RollTable } from "@/data/roll-tables/type";
import { RollTablesCollection } from "@/services/db/collections";
import { createRollTable } from "@/data/roll-tables";
import EntryContainer from "@/components/entry-container.vue";
import Entry from "@/components/entry.vue";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import Button from "@/components/button.vue";
import TextField from "@/components/text-field.vue";
import { v4 } from "uuid";
import EntryActions from "@/components/entry-actions.vue";

const ROLL_TABLES_PLACEHOLDER = `Appearance,Personality,Flaw
Beautiful,Faithful,Sloth
Childish,Funny,Bad Luck
Elderly,Suspicious,Recklessness
Pale,Greedy,Paranoia
`;

const search = ref<string>("");
const rollTables = ref<WithUUID<RollTable>[]>([]);
const filteredRollTables = computed(() => {
  return rollTables.value.sort((a, b) => a.name.localeCompare(b.name));
});
onMounted(() => {
  RollTablesCollection.getAll().then((r) => (rollTables.value = r));
});

async function onReset() {
  const RESET_TEXT = "Are you sure you want to delete all roll tables?";
  if (!confirm(RESET_TEXT)) return;
  await RollTablesCollection.clear();
  rollTables.value = [];
}
async function onUpload(data: any[] | null) {
  if (!data) return;
  await RollTablesCollection.setMany(data);
  rollTables.value = data;
}

const showCreateModal = ref(false);
const creatingRollTableName = ref("");
const creatingRollTable = ref("");
async function onCreate() {
  showCreateModal.value = true;
  creatingRollTable.value = "";
  creatingRollTableName.value = "";
}
async function onCreateFinish() {
  if (!creatingRollTable.value) return;
  const rows = creatingRollTable.value.split("\n");
  if (rows.length < 2) {
    return alert("you must have a heading and at least 1 entry");
  }
  const rollTable: WithUUID<RollTable> = {
    uuid: v4(),
    name: creatingRollTableName.value,
    table: [],
  };
  for (const row of rows) {
    const entries = row.split(",").map((r) => r.trim());
    rollTable.table.push(entries);
  }
  await RollTablesCollection.set(rollTable.uuid, rollTable);
  rollTables.value.push(rollTable);
  showCreateModal.value = false;
}
</script>

<template>
  <Modal full v-model="showCreateModal" title="Create Roll Table">
    <div class="flex-shrink flex-basis-0">
      <TextField v-model="creatingRollTableName" label="name" />
    </div>
    <TextField
      large
      v-model="creatingRollTable"
      :placeholder="ROLL_TABLES_PLACEHOLDER"
    />
    <Button @click="onCreateFinish">Create</Button>
  </Modal>
  <TopBar
    v-model="search"
    :download-data="rollTables"
    download-file-name="roll-tables"
    @add="onCreate"
    @reset="onReset"
    @upload="onUpload"
    :show-add="true"
    :show-reset="true"
    :show-upload="true"
    :show-download="true"
  />
  <EntryContainer title="Roll Tables">
    <span v-if="rollTables.length === 0">
      Roll tables are not part of the 3rd party license. Therefore, you will
      have to create your own roll tables.
    </span>
    <template v-else>
      <Entry max-width="640" v-for="rollTable in filteredRollTables">
        <EntryActions show-roll-action />
        <span class="roll-table-title uppercase bold">{{ rollTable.name }}</span>
        <div class="table gap10">
          <div
            class="table-row flex-row gap10"
            v-for="(rows, index) in rollTable.table"
          >
            <span>
              <template v-if="index > 0">
                {{ index }}.
              </template>
              <template v-else>
                &nbsp;
              </template>
            </span>
            <span class="table-cell" v-for="cell in rows">{{ cell }}</span>
          </div>
        </div>
      </Entry>
    </template>
  </EntryContainer>
</template>

<style scoped lang="scss">
.roll-table-title {
  padding-bottom: 10px;
}
.table {
  width: 100%;
  .table-row {
    width: 100%;
    border-bottom: 1px solid black;
    padding-bottom: 10px;
    &:nth-child(1) {
      .table-cell {
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
      }
    }

    .table-cell {
      width: 33%;
    }
  }
}
</style>
