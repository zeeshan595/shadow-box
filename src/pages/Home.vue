<script setup lang="ts">
import router from "@/router";
import Button from "@/components/button.vue";
</script>

<template>
  <div class="gap10 p20 flex-row flex-wrap">
    <Button @click="() => router.push('/items')">Magic Items</Button>
    <Button @click="() => router.push('/monsters')">Monsters</Button>
    <Button @click="() => router.push('/spells')">Spells</Button>
  </div>
</template>
