<script setup lang="ts">
import { computed, onMounted } from "vue";
import { RouterView } from "vue-router";
import { theme } from "./theme";
import "./services/db/index";
import { windowWidth } from "./const";

onMounted(() => {
  // set window width size to current window width
  windowWidth.value = window.innerWidth;
  // if window size changes then update window width size
  window.addEventListener("resize", () => {
    windowWidth.value = window.innerWidth;
  });
});
const styleVariables = computed(() => ({
  "--bg-default": theme.value.background.default,
  "--bg-paper": theme.value.background.paper,
  "--text-parimart": theme.value.text.primary,
  "--shadow": theme.value.shadow,
  "--primary-main": theme.value.primary.main,
}));
</script>

<template>
  <div :style="styleVariables">
    <RouterView />
  </div>
</template>

<style lang="scss">
.bg-default {
  background-color: var(--bg-default);
}
.bg-paper {
  background-color: var(--bg-paper);
}
.text-primary {
  color: var(--text-primary);
}
.shadow {
  box-shadow: var(--shadow);
}
.primary-main {
  color: var(--primary-main);
}
</style>
