<script setup lang="ts">
import router from "@/router";
import Button from "@/components/button.vue";
import BasicGear from "@/components/basic-gear.vue";
</script>

<template>
  <div>
    <div class="gap10 p20 flex-row flex-wrap">
      <Button class="gap5" @click="() => router.push('/items')">
        <span class="material-symbols-outlined"> category </span>
        Magic Items
      </Button>
      <Button class="gap5" @click="() => router.push('/monsters')">
        <span class="material-symbols-outlined"> raven </span>
        Monsters
      </Button>
      <Button class="gap5" @click="() => router.push('/spells')">
        <span class="material-symbols-outlined"> neurology </span>
        Spells
      </Button>
    </div>
    <div class="gap10 flex-row flex-wrap">
      <Button class="gap5" @click="() => router.push('/weapons')">
        <span class="material-symbols-outlined"> swords </span>
        Weapons
      </Button>
      <Button class="gap5" @click="() => router.push('/armors')">
        <span class="material-symbols-outlined"> local_police </span>
        Armor
      </Button>
      <Button class="gap5" @click="() => router.push('/roll-tables')">
        <span class="material-symbols-outlined"> casino </span>
        roll tables
      </Button>
    </div>
    <BasicGear />
  </div>
</template>
