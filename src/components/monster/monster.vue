<script setup lang="ts">
import type { Monster } from "@/data/monsters/type";

const props = defineProps<{
  value: Monster;
}>();
</script>

<template>
  <span class="bold uppercase">{{ props.value.name }}</span>
  <span class="italic font-small">{{ props.value.flavourText }}</span>
  <span>
    <span class="bold uppercase">level</span> {{ props.value.level }},
    <span class="bold uppercase">ac</span> {{ props.value.stats.ac }},
    <span class="bold uppercase">hp</span> {{ props.value.stats.hp }}
  </span>
  <span>
    <span class="bold uppercase">attacks</span>
    {{ props.value.attacks }},
    <span class="bold uppercase">movement</span>
    {{ props.value.stats.mv }},
    <span class="bold uppercase">alignment</span>
    {{ props.value.alignment }}
  </span>
  <span>
    <span class="bold uppercase">str</span>
    {{ props.value.stats.str }},
    <span class="bold uppercase">dex</span>
    {{ props.value.stats.dex }},
    <span class="bold uppercase">con</span>
    {{ props.value.stats.con }},
    <span class="bold uppercase">int</span>
    {{ props.value.stats.int }},
    <span class="bold uppercase">wis</span>
    {{ props.value.stats.wis }},
    <span class="bold uppercase">cha</span>
    {{ props.value.stats.cha }},
  </span>
  <div class="gap10 justify-start">
    <div
      v-for="special in props.value.specials"
      class="flex-shrink flex-basis-0"
    >
      <span class="bold uppercase">{{ special.name }}</span>
      <span v-if="special.text" v-for="specialLine of special.text.split('\n')">
        {{ specialLine }}
      </span>
    </div>
  </div>
</template>
