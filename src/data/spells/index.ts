import * as core from './core';
import type { Spell } from './type';

export const spells = {
  core: core.spells
};

export function createSpell(): Spell {
  return {
    name: "New Spell",
    class: {
      priest: true,
      wizard: true
    },
    duration: "Instant",
    range: "Near",
    tier: 1,
    text: "Nothing happens"
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