<script setup lang="ts">
import router from "@/router";
import Button from "./button.vue";
import Search from "./search.vue";
import { isMobileView } from "@/const";

const props = defineProps<{
  modelValue: string;
  downloadData?: any[];
  downloadFileName?: string;
}>();
const emits = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "random"): void;
  (e: "add"): void;
  (e: "reset"): void;
  (e: "upload", data: any[] | null, type: "pdf" | "json"): void;
}>();

function download() {
  const file = new File(
    [JSON.stringify(props.downloadData)],
    `${props.downloadFileName ?? "download"}.json`,
    {
      type: "text/json",
    }
  );
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

  emits("upload", data, type);
}
</script>

<template>
  <div
    class="top-bar flex-row gap20 bg-default p20"
    :class="{ 'mobile-view': isMobileView }"
  >
    <Button @click="() => router.push('/')">
      <span class="material-symbols-outlined"> arrow_back </span>
    </Button>
    <Button @click="() => emits('add')">
      <span class="material-symbols-outlined"> add </span>
    </Button>
    <Button @click="() => emits('random')">
      <span class="material-symbols-outlined"> casino </span>
    </Button>
    <Button @click="() => emits('reset')">
      <span class="material-symbols-outlined"> remove_selection </span>
    </Button>
    <Button @click="upload">
      <span class="material-symbols-outlined"> upload </span>
    </Button>
    <Button @click="download" v-if="props.downloadData">
      <span class="material-symbols-outlined"> download </span>
    </Button>
    <Search
      :modelValue="props.modelValue"
      @update:modelValue="(val) => emits('update:modelValue', val)"
    />
  </div>
</template>

<style scoped lang="scss">
.top-bar {
  position: sticky;
  top: 0;
  box-shadow: 0 2px 3px 1px rgba(0, 0, 0, 0.3);
  z-index: 100;
}
.mobile-view {
  position: relative;
  flex-wrap: wrap;
}
</style>
