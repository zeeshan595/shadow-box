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
import { DataType, sendToPlayers } from "@/services/owlbear";
import { randomRange } from "@/services/helpers";
import { performSearch } from "@/services/search";

const ROLL_TABLES_PLACEHOLDER = `Appearance,Personality,Flaw
Beautiful,Faithful,Sloth
Childish,Funny,Bad Luck
Elderly,Suspicious,Recklessness
Pale,Greedy,Paranoia
`;

const search = ref<string>("");
const rollTables = ref<WithUUID<RollTable>[]>([]);
const filteredRollTables = computed(() => {
  if (search.value === "") {
    rollTables.value.sort((a, b) => a.name.localeCompare(b.name));
  }
  return performSearch(
    search.value,
    rollTables.value.sort((a, b) => a.name.localeCompare(b.name))
  );
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

const showEditModal = ref(false);
const editingRollTableUuid = ref("");
const editingRollTableName = ref("");
const editingRollTable = ref("");
function onEdit(rollTable: WithUUID<RollTable>) {
  showEditModal.value = true;
  editingRollTableName.value = rollTable.name;
  editingRollTable.value = rollTable.table.map((r) => r.join(",")).join("\n");
  editingRollTableUuid.value = rollTable.uuid;
}
async function onEditFinish() {
  const rows = editingRollTable.value.split("\n");
  if (rows.length < 2) {
    return alert("you must have a heading and at least 1 entry");
  }
  const rollTable: WithUUID<RollTable> = {
    uuid: editingRollTableUuid.value,
    name: editingRollTableName.value,
    table: [],
  };
  for (const row of rows) {
    const entries = row.split(",").map((r) => r.trim());
    rollTable.table.push(entries);
  }
  await RollTablesCollection.set(rollTable.uuid, rollTable);
  rollTables.value = rollTables.value.filter((r) => r.uuid !== rollTable.uuid);
  rollTables.value.push(rollTable);
  showEditModal.value = false;
}
async function onDelete(rollTable: WithUUID<RollTable>) {
  const DELETE_TEXT = `Are you sure you want to delete the roll table named ${rollTable.name}`;
  if (!confirm(DELETE_TEXT)) return;
  await RollTablesCollection.delete(rollTable.uuid);
  rollTables.value = rollTables.value.filter((r) => r.uuid !== rollTable.uuid);
}
function onShare(rollTable: WithUUID<RollTable>) {
  sendToPlayers(DataType.RollTable, rollTable);
}

const showRandomRoll = ref(false);
const rollResults = ref<string[]>([]);
const rollResultsHeadings = ref<string[]>([]);
function onRandomRoll(rollTable: WithUUID<RollTable>) {
  const results: string[] = [];
  rollResultsHeadings.value = rollTable.table[0];
  for (let i = 0; i < rollTable.table[0].length; i++) {
    const roll = randomRange(1, rollTable.table.length - 1);
    results.push(rollTable.table[roll][i]);
  }
  rollResults.value = results;
  showRandomRoll.value = true;
}
</script>

<template>
  <Modal v-model="showRandomRoll" title="Roll Table Result">
    <div class="table gap10">
      <div class="table-row flex-row gap10">
        <span class="table-cell" v-for="cell in rollResultsHeadings">
          {{ cell }}
        </span>
      </div>
      <div class="table-row flex-row gap10">
        <span class="table-cell" v-for="cell in rollResults">
          {{ cell }}
        </span>
      </div>
    </div>
  </Modal>
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
  <Modal full v-model="showEditModal" title="Edit Roll Tables">
    <div class="flex-shrink flex-basis-0">
      <TextField v-model="editingRollTableName" label="name" />
    </div>
    <TextField
      large
      v-model="editingRollTable"
      :placeholder="ROLL_TABLES_PLACEHOLDER"
    />
    <Button @click="onEditFinish">Save</Button>
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
        <EntryActions
          show-roll-action
          @random="() => onRandomRoll(rollTable)"
          @edit="() => onEdit(rollTable)"
          @delete="() => onDelete(rollTable)"
          @share="() => onShare(rollTable)"
        />
        <span class="uppercase bold">
          {{ rollTable.name }}
        </span>
        <div class="table gap10">
          <div
            class="table-row flex-row gap10"
            v-for="(rows, index) in rollTable.table"
          >
            <span>
              <template v-if="index > 0"> {{ index }}. </template>
              <template v-else> &nbsp; </template>
            </span>
            <span class="table-cell" v-for="cell in rows">{{ cell }}</span>
          </div>
        </div>
      </Entry>
    </template>
  </EntryContainer>
</template>

<style scoped lang="scss">
.table {
  padding-top: 10px;
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
