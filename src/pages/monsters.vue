<script setup lang="ts">
import { ref, watch } from "vue";
import { monsters } from "@/data";
import type { Monster } from "@/data/monsters/type";
import TopBar from "@/components/top-bar.vue";
import Modal from "@/components/modal.vue";
import TextField from "@/components/text-field.vue";
import Button from "@/components/button.vue";
import { randomRange, stringToNum } from "@/services/helpers";

const search = ref<string>("");
const filteredMonsters = ref<Monster[]>(monsters.core);
watch(search, (search) => {
  if (search == "") {
    filteredMonsters.value = monsters.core;
    return;
  }
  filteredMonsters.value = monsters.core.filter((monster) => {
    if (monster.name.includes(search)) {
      return true;
    }
    if (monster.flavourText.includes(search)) {
      return true;
    }
    if (monster.alignment.includes(search)) {
      return true;
    }
    if (monster.attacks.includes(search)) {
      return true;
    }
    if (monster.level.includes(search)) {
      return true;
    }
    if (monster.specials) {
      for (const specialKey of Object.keys(monster.specials)) {
        if (specialKey.includes(search)) {
          return true;
        }
        if ((monster.specials as any)[specialKey]?.includes(search)) {
          return true;
        }
      }
    }
    return false;
  });
});
const randomMosterOptions = ref<{ min: string; max: string }>({
  min: "0",
  max: "20",
});
const isShowingRandomMonsterModal = ref(false);
function picRandomMoster() {
  const minLevel = stringToNum(randomMosterOptions.value.min);
  const maxLevel = stringToNum(randomMosterOptions.value.max);
  console.log(minLevel, maxLevel)
  isShowingRandomMonsterModal.value = false;
  const filteredMonsters = monsters.core.filter((m) => {
    const level = stringToNum(m.level);
    return minLevel <= level && maxLevel >= level;
  });
  if (filteredMonsters.length === 0) {
    alert("No monsters found with those parameters");
    return;
  }
  const randomMonsterIndex = randomRange(0, filteredMonsters.length - 1);
  search.value = filteredMonsters[randomMonsterIndex].name;
}
</script>

<template>
  <Modal v-model="isShowingRandomMonsterModal" title="Random Monster">
    <div class="gap20">
      <div class="flex-row align-center gap20">
        <TextField stat label="min level" v-model="randomMosterOptions.min" />
        <TextField stat label="max level" v-model="randomMosterOptions.max" />
      </div>
      <div>
        <Button @click="picRandomMoster">get random monster</Button>
      </div>
    </div>
  </Modal>
  <TopBar
    v-model="search"
    @random="() => (isShowingRandomMonsterModal = true)"
  />
  <div class="gap20 p20">
    <h2 class="text-align-center uppercase">monsters</h2>
    <div class="flex-row flex-wrap gap20">
      <div
        v-for="monster in filteredMonsters"
        class="bg-paper p10 rounded flex-shrink justify-start align-center text-align-center shadow gap10"
      >
        <span class="bold uppercase">{{ monster.name }}</span>
        <span class="italic font-small">{{ monster.flavourText }}</span>
        <span>
          <span class="bold uppercase">level</span> {{ monster.level }},
          <span class="bold uppercase">ac</span> {{ monster.stats.ac }},
          <span class="bold uppercase">hp</span> {{ monster.stats.hp }}
        </span>
        <span>
          <span class="bold uppercase">attacks</span> {{ monster.attacks }},
          <span class="bold uppercase">movement</span> {{ monster.stats.mv }},
          <span class="bold uppercase">alignment</span> {{ monster.alignment }}
        </span>
        <span>
          <span class="bold uppercase">str</span> {{ monster.stats.str }},
          <span class="bold uppercase">dex</span> {{ monster.stats.dex }},
          <span class="bold uppercase">con</span> {{ monster.stats.con }},
          <span class="bold uppercase">int</span> {{ monster.stats.int }},
          <span class="bold uppercase">wis</span> {{ monster.stats.wis }},
          <span class="bold uppercase">cha</span> {{ monster.stats.cha }},
        </span>
        <div v-if="monster.specials" class="gap10 justify-start">
          <div
            v-for="special in Object.keys(monster.specials)"
            class="flex-shrink flex-basis-0"
          >
            <span class="bold uppercase">{{ special }}</span>
            {{ monster.specials[special] }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
