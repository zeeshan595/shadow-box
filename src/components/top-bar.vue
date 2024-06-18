<script setup lang="ts">
import router from "@/router";
import Button from "./button.vue";
import Search from "./search.vue";
import { isMobileView } from "@/const";

const props = defineProps<{
  modelValue: string;
  showAdd?: boolean;
  showRandom?: boolean;
  showReset?: boolean;
  showImport?: boolean;
  showUpload?: boolean;
  showDownload?: boolean;
  showDelete?: boolean;
  downloadData?: any[];
  searchPlaceholder?: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "random"): void;
  (e: "add"): void;
  (e: "reset"): void;
  (e: "upload", data: any[] | null): void;
  (e: "import"): void;
  (e: "delete"): void;
}>();

function download() {
  const file = new File([JSON.stringify(props.downloadData)], `backup.json`, {
    type: "text/json",
  });
  // Create a link and set the URL using `createObjectURL`
  const link = document.createElement("a");
  link.style.display = "none";
  link.href = URL.createObjectURL(file);
  link.download = file.name;

  // It needs to be added to the DOM so it can be clicked
  document.body.appendChild(link);
  link.click();

  // To make this work on Firefox we need to wait
  // a little while before removing it.
  setTimeout(() => {
    URL.revokeObjectURL(link.href);
    document.body.removeChild(link);
  }, 0);
}
async function upload() {
  const input = document.createElement("input");
  input.setAttribute("type", "file");
  input.setAttribute("accept", ".json,.pdf");
  input.style.display = "none";
  document.body.appendChild(input);

  let type: "json" | "pdf" = "json";
  const data = await new Promise<any[] | null>((resolve) => {
    input.onchange = function () {
      if (!input.files) return resolve(null);
      const file = input.files[0];
      if (file.type === "application/pdf") {
        type = "pdf";
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          function () {
            resolve([reader.result]);
          },
          false
        );
        reader.readAsDataURL(file);
      } else if (file.type === "application/json") {
        type = "json";
        file.text().then((data) => resolve(JSON.parse(data)));
      }
    };
    input.onabort = function () {
      document.body.removeChild(input);
      resolve(null);
    };
    input.oncancel = function () {
      document.body.removeChild(input);
      resolve(null);
    };
    input.click();
  });

  emits("upload", data);
}
</script>

<template>
  <div
    class="top-bar flex-row gap10 bg-default p20 justify-start"
    :class="{ 'mobile-view': isMobileView }"
  >
    <div class="tooltip button" @click="() => router.push('/')">
      <span class="material-symbols-outlined"> arrow_back </span>
      <span class="tooltiptext"> back </span>
    </div>
    <div class="tooltip button" @click="() => emits('add')" v-if="props.showAdd">
      <span class="material-symbols-outlined"> add </span>
      <span class="tooltiptext"> create new </span>
    </div>
    <div class="tooltip button" @click="() => emits('random')" v-if="props.showRandom">
      <span class="material-symbols-outlined"> casino </span>
      <span class="tooltiptext"> select random </span>
    </div>
    <div class="tooltip button" @click="() => emits('reset')" v-if="props.showReset">
      <span class="material-symbols-outlined"> delete_history </span>
      <span class="tooltiptext">reset to default</span>
    </div>
    <div class="tooltip button" @click="() => emits('delete')">
      <span class="material-symbols-outlined"> delete </span>
      <span class="tooltiptext">delete all entries</span>
    </div>
    <div class="tooltip button" @click="() => emits('import')" v-if="props.showImport">
      <span class="material-symbols-outlined"> picture_as_pdf </span>
      <span class="tooltiptext">import pdf</span>
    </div>
    <div class="tooltip button" @click="upload" v-if="props.showUpload">
      <span class="material-symbols-outlined"> upload </span>
      <span class="tooltiptext">upload json</span>
    </div>
    <div class="tooltip button" @click="download" v-if="props.showDownload">
      <span class="material-symbols-outlined"> download </span>
      <span class="tooltiptext">download json</span>
    </div>
    <Search
      :modelValue="props.modelValue"
      @update:modelValue="(val) => emits('update:modelValue', val)"
      :placeholder="props.searchPlaceholder"
    />
  </div>
</template>

<style scoped lang="scss">
.top-bar {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  z-index: 100;

  .button {
    flex-shrink: 1;
    flex-basis: 0;
    max-width: 40px;
    padding-left: 10px;
    padding-right: 10px;
    cursor: pointer;
    transition: 0.5s;
  }
}
.mobile-view {
  position: relative;
  flex-wrap: wrap;
}
</style>
