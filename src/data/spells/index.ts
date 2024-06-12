import * as core from './core';
import type { Spell } from './type';

export const spells = {
  core: core.spells
};

export function createSpell(): Spell {
  return {
    name: "",
    class: {},
    duration: "Instant",
    range: "Near",
    tier: 1,
    text: ""
  }
}

export function cloneSpell<T extends Spell>(spell: T): T {
  return {
    ...spell,
    class: {
      ...spell.class
    }
  };
}