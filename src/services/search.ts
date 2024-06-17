import type { Armor } from "@/data/armors/type";
import type { Item } from "@/data/items/type";
import type { Monster } from "@/data/monsters/type";
import type { RollTable } from "@/data/roll-tables/type";
import { spellClassToString, type Spell, type SpellClass } from "@/data/spells/type";
import type { Weapon } from "@/data/weapons/type";

function scoreSpell(terms: string[], spell: Spell): number {
  const name = spell.name.toLowerCase();
  const tier = spell.tier;
  const classes = spell.class;
  const duration = spell.duration.toLowerCase();
  const range = spell.range.toLowerCase();
  const text = spell.text.toLowerCase();
  const classKeys = Object.keys(classes) as (keyof SpellClass)[];

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 5) {
      score += 10;
    } else if (name.includes(term) && term.length > 3) {
      score += 5;
    }

    for (const classKey of classKeys) {
      if (classes[classKey] && spellClassToString({ [classKey]: true }) === term) {
        score += 7;
      }
    }

    if (tier.toString() === term) {
      score += 5;
    }

    if (duration.startsWith(term) && term.length > 5) {
      score += 5;
    } else if (duration.includes(term) && term.length > 3) {
      score += 2;
    }

    if (range.startsWith(term) && term.length > 5) {
      score += 5;
    } else if (range.includes(term) && term.length > 3) {
      score += 2;
    }

    if (text.includes(term)) {
      if (term.length > 3) {
        score += 2;
      } else {
        score += 1;
      }
    }
  }
  return score;
}
function scoreMonster(terms: string[], monster: Monster): number {
  return 0;
}
function scoreItem(terms: string[], item: Item): number {
  return 0;
}
function scoreWeapon(terms: string[], weapon: Weapon): number {
  return 0;
}
function scoreArmor(terms: string[], armor: Armor): number {
  return 0;
}
function scoreRollTable(terms: string[], rollTable: RollTable): number {
  return 0;
}

function isSpell(entry: SearchTypes): entry is Spell {
  return (entry as Spell).range !== undefined;
}

function isMonster(entry: SearchTypes): entry is Monster {
  return (entry as Monster).stats !== undefined;
}

function isItem(entry: SearchTypes): entry is Item {
  return (
    (entry as Item).benefit !== undefined &&
    (entry as Item).bonus !== undefined &&
    (entry as Item).curse !== undefined &&
    (entry as Item).personality !== undefined
  );
}

function isWeapon(entry: SearchTypes): entry is Weapon {
  return (
    (entry as Weapon).damage !== undefined
  );
}

function isArmor(entry: SearchTypes): entry is Armor {
  return (
    (entry as Armor).armor !== undefined
  );
}

function isRollTable(entry: SearchTypes): entry is RollTable {
  return (
    (entry as RollTable).table !== undefined
  );
}

export type SearchTypes = Spell | Monster | Item | Weapon | Armor | RollTable;
export function performSearch<T extends SearchTypes>(searchText: string, resource: T[]) {
  const search = searchText.toLowerCase().split(',').map(term => term.trim());
  const scored = resource.map(entry => {
    let score = 0;
    if (isSpell(entry))
      score = scoreSpell(search, entry as Spell);
    else if (isMonster(entry))
      score = scoreMonster(search, entry as Monster);
    else if (isItem(entry)) {
      score = scoreItem(search, entry as Monster);
    } else if (isWeapon(entry)) {
      score = scoreWeapon(search, entry as Weapon);
    } else if (isArmor(entry)) {
      score = scoreArmor(search, entry as Armor);
    } else if (isRollTable(entry)) {
      score = scoreRollTable(search, entry as RollTable);
    } else {
      console.warn('cannot search for unknown type of data');
    }

    return {
      ...entry,
      score
    }
  });
  const sorted = scored.sort((a, b) => b.score - a.score);
  return sorted.filter(entry => entry.score > 0);
}