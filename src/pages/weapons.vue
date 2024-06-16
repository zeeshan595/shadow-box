<script setup lang="ts">
import { ref } from "vue";
import TopBar from "@/components/top-bar.vue";
import Weapon from "@/components/weapon.vue";
import { weapons } from "@/data/weapons";

const search = ref("");
</script>

<template>
  <TopBar
    v-model="search"
    :download-data="[]"
    @add=""
    @random=""
    @reset=""
    @import=""
    :show-add="true"
    :show-random="true"
    :show-reset="true"
    :show-upload="true"
    :show-download="true"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">weapons ({{ weapons.length }})</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        class="bg-paper p20 rounded flex-shrink justify-start align-center text-align-center shadow gap10 align-self-start"
        v-for="weapon of weapons"
        style="max-width: 320px;"
      >
        <Weapon :model-value="{ uuid: '', ...weapon }" />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss"></style>
