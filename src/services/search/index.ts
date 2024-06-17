import type { Armor } from "@/data/armors/type";
import type { Item } from "@/data/items/type";
import type { Monster } from "@/data/monsters/type";
import type { RollTable } from "@/data/roll-tables/type";
import type { Spell } from "@/data/spells/type";
import type { Weapon } from "@/data/weapons/type";
import { scoreSpell } from './spell';
import { scoreMonster } from './monster';
import { scoreItem } from './item';
import { scoreWeapon } from './weapon';
import { scoreArmor } from './armor';
import { scoreRollTable } from './rollTable';

function isSpell(entry: SearchTypes): entry is Spell {
  return (entry as Spell).tier !== undefined;
}

function isMonster(entry: SearchTypes): entry is Monster {
  return (entry as Monster).stats !== undefined;
}

function isItem(entry: SearchTypes): entry is Item {
  return (
    (entry as Item).benefit !== undefined ||
    (entry as Item).bonus !== undefined ||
    (entry as Item).curse !== undefined ||
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