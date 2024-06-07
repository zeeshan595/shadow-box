<script setup lang="ts">
import { ref, watch } from "vue";
import { spells } from "@/data";
import type { Spell } from "@/data/spells/type";
import { randomRange, stringToNum } from "@/services/helpers";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import TextField from "@/components/text-field.vue";
import Button from "@/components/button.vue";

const search = ref<string>("");
const filteredSpells = ref<Spell[]>(spells.core);
watch(search, (search) => {
  if (search == "") {
    filteredSpells.value = spells.core;
    return;
  }
  filteredSpells.value = spells.core
    .filter((spell) => {
      if (spell.name.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (spell.class.includes(search.toLowerCase())) {
        return true;
      }
      if (spell.tier.toString() === search.toLowerCase()) {
        return true;
      }
      if (search.length <= 2 && !isNaN(Number.parseInt(search))) {
        return false;
      }
      if (spell.range.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (spell.duration.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      if (spell.text.toLowerCase().includes(search.toLowerCase())) {
        return true;
      }
      return false;
    })
    .sort((a, b) => a.tier - b.tier);
});

const isShownRandomSpellModal = ref(false);
const randomSpellOptions = ref<{
  minTier: string;
  maxTier: string;
}>({
  minTier: "1",
  maxTier: "5",
});

function pickRandomSpell() {
  const minTier = stringToNum(randomSpellOptions.value.minTier);
  const maxTier = stringToNum(randomSpellOptions.value.maxTier);
  const filteredSpells = spells.core.filter((spell) => {
    return minTier <= spell.tier && maxTier >= spell.tier;
  });
  if (filteredSpells.length === 0) {
    alert("No spells found with those parameters");
    return;
  }
  const randomSpellIndex = randomRange(0, filteredSpells.length - 1);
  search.value = filteredSpells[randomSpellIndex].name.toLowerCase();
  isShownRandomSpellModal.value = false;
}
</script>

<template>
  <Modal v-model="isShownRandomSpellModal" title="Random Spell">
    <div class="flex-row align-center gap20">
      <TextField stat label="min tier" v-model="randomSpellOptions.minTier" />
      <TextField stat label="max tier" v-model="randomSpellOptions.maxTier" />
    </div>
    <Button @click="pickRandomSpell">Get Random Spell</Button>
  </Modal>
  <TopBar v-model="search" @random="() => (isShownRandomSpellModal = true)" />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">spells</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="spell in filteredSpells"
        class="bg-paper p10 rounded flex-shrink justify-start align-center text-align-center shadow gap10"
      >
        <span class="bold uppercase">{{ spell.name }}</span>
        <span>
          <span class="bold uppercase">tier</span> {{ spell.tier }},
          <span class="bold uppercase">class</span>
          {{ spell.class.join(", ") }},
          <span class="bold uppercase">duration</span> {{ spell.duration }},
          <span class="bold uppercase">range</span> {{ spell.range }}
        </span>
        <span>{{ spell.text }}</span>
      </div>
    </div>
  </div>
</template>
