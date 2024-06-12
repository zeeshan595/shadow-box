<script setup lang="ts">
import router from "@/router";
import Button from "@/components/button.vue";
import { uploadDocument } from "@/services/helpers";
import { importShadowdarkBook } from "@/services/pdf";

async function importPdf() {
  const { type, data } = await uploadDocument(".pdf");
  if (!data) return;
  if (type !== "pdf") {
    return alert("please upload a PDF document!");
  }
  await importShadowdarkBook(data[0]);
}
</script>

<template>
  <div class="gap10 p20 flex-row flex-wrap">
    <Button @click="() => router.push('/items')">Magic Items</Button>
    <Button @click="() => router.push('/monsters')">Monsters</Button>
    <Button @click="() => router.push('/spells')">Spells</Button>
  </div>
  <div class="gap10 p20 flex-row flex-wrap">
    <Button @click="importPdf">Import PDFs</Button>
  </div>
</template>
