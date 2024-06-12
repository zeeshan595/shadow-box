<script setup lang="ts">
import router from "@/router";
import Button from "@/components/button.vue";
import Modal from "@/components/modal.vue";
import { ref } from "vue";
import TextField from "@/components/text-field.vue";

const showImportModal = ref(false);
const importText = ref("");

async function importPdf() {}
</script>

<template>
  <Modal full v-model="showImportModal" title="Import from PDFs">
    <TextField
      large
      v-model="importText"
      label="Add the text from PDF here in the correct format"
    />
  </Modal>
  <div class="gap10 p20 flex-row flex-wrap">
    <Button @click="() => router.push('/items')">Magic Items</Button>
    <Button @click="() => router.push('/monsters')">Monsters</Button>
    <Button @click="() => router.push('/spells')">Spells</Button>
  </div>
  <div class="gap10 p20 flex-row flex-wrap">
    <Button @click="() => (showImportModal = true)">Import from PDFs</Button>
  </div>
</template>
