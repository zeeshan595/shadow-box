import type { WithUUID } from '@/services/db';
import * as core from './core';
import type { Monster } from './type';

export const monsters = {
  core: core.monsters
};

export function createMonster(): Monster {
  return {
    name: "New Monster",
    flavourText: "All you see is death",
    alignment: "N",
    attacks: "1 Punch (100)",
    level: "1",
    stats: {
      ac: "10",
      hp: "10",
      mv: "near",
      str: "+4",
      dex: "+0",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "-2"
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