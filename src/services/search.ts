import type { Item } from "@/data/items/type";
import type { Monster } from "@/data/monsters/type";
import { spellClassToString, type Spell, type SpellClass } from "@/data/spells/type";

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

export type SearchTypes = Spell | Monster | Item;
export function performSearch<T extends SearchTypes>(searchText: string, resource: T[]) {
  if (searchText === '') return resource;

  const search = searchText.toLowerCase().split(',').map(term => term.trim());
  const scored = resource.map(entry => {
    return {
      ...entry,
      score: scoreSpell(search, entry as Spell)
    }
  });
  const sorted = scored.sort((a, b) => b.score - a.score);
  return sorted.filter(entry => entry.score > 0);
}