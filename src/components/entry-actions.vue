<script setup lang="ts">
import { computed } from "vue";
import * as Owlbear from "@/services/owlbear";

const isOwlbearReady = computed(() => Owlbear.isReady.value);
const emits = defineEmits<{
  (e: "edit"): void;
  (e: "delete"): void;
  (e: "share"): void;
}>();
</script>

<template>
  <div class="flex-row gap20">
    <div class="tooltip">
      <span
        class="material-symbols-outlined pointer"
        @click="() => emits('edit')"
      >
        edit
      </span>
      <span class="tooltiptext">Edit</span>
    </div>
    <div class="tooltip">
      <span
        class="material-symbols-outlined pointer"
        @click="() => emits('delete')"
      >
        delete
      </span>
      <span class="tooltiptext">Delete</span>
    </div>
    <div v-if="isOwlbearReady" class="tooltip">
      <span
        class="material-symbols-outlined pointer"
        @click="() => emits('share')"
      >
        send
      </span>
      <span class="tooltiptext">Share with others</span>
    </div>
  </div>
</template>
