import type { WithUUID } from '@/services/db';
import * as core from './core';
import type { Monster } from './type';

export const monsters = {
  core: core.monsters
};

export function createMonster(): Monster {
  return {
    name: "",
    flavourText: "",
    alignment: "N",
    attacks: "",
    level: "0",
    stats: {
      ac: "10",
      hp: "10",
      mv: "near",
      str: "+0",
      dex: "+0",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+0"
    },
    specials: []
  }
}

export function cloneMonster<T extends Monster>(monster: T): T {
  return {
    ...monster,
    stats: {
      ...monster.stats,
    },
    specials: [
      ...monster.specials.map(special => ({ ...special }))
    ]
  };
}