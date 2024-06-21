<script setup lang="ts">
import { computed, onMounted, ref, watch } from "vue";
import { RouterView } from "vue-router";
import { theme } from "./theme";
import "./services/db/index";
import { windowWidth } from "./const";
import Modal from "./components/modal.vue";
import Checkbox from "./components/checkbox.vue";
import { players, sendToPlayersEnd, shareTriggered } from "./services/owlbear";
import Button from "./components/button.vue";

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

const showSharingModal = computed({
  get() {
    return shareTriggered.value !== null;
  },
  set(value) {
    if (value) return;
    if (!value) shareTriggered.value = null;
  },
});
const playersBeingShared = ref<boolean[]>([]);
watch(players, (value) => {
  playersBeingShared.value = new Array(value.length).fill(false);
});

async function triggerSendToPlayers() {
  const playerIds = players.value
    .filter((_, index) => playersBeingShared.value[index])
    .map((player) => player.id);
  await sendToPlayersEnd(playerIds);
  shareTriggered.value = null;
}
</script>

<template>
  <div :style="styleVariables">
    <Modal v-model="showSharingModal" title="Sharing">
      <span v-if="players.length === 0">
        There is no one else in the party besides you. Invite other people to
        the room to share.
      </span>
      <template v-else>
        <Checkbox
          v-for="(player, index) in players"
          :model-value="playersBeingShared[index]"
          @update:model-value="(val) => (playersBeingShared[index] = val)"
          :label="player.name"
        />
        <Button @click="triggerSendToPlayers">Send</Button>
      </template>
    </Modal>
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
