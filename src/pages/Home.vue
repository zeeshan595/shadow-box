<script setup lang="ts">
import router from "@/router";
import Button from "@/components/button.vue";
import BasicGear from "@/components/basic-gear.vue";
</script>

<template>
  <div>
    <div class="gap10 p20 flex-row flex-wrap">
      <Button @click="() => router.push('/items')">Magic Items</Button>
      <Button @click="() => router.push('/monsters')">Monsters</Button>
      <Button @click="() => router.push('/spells')">Spells</Button>
      <Button @click="() => router.push('/weapons')">Weapons</Button>
      <Button @click="() => router.push('/armors')">Armor</Button>
      <Button @click="() => router.push('/roll-tables')">roll tables</Button>
    </div>
    <BasicGear />
  </div>
</template>
