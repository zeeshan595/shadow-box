import { spellClassToString, type Spell, type SpellClass } from "@/data/spells/type";

export function scoreSpell(terms: string[], spell: Spell): number {
  const name = spell.name.toLowerCase();
  const tier = spell.tier;
  const classes = spell.class;
  const duration = spell.duration.toLowerCase();
  const range = spell.range.toLowerCase();
  const text = spell.text.toLowerCase();
  const classKeys = Object.keys(classes) as (keyof SpellClass)[];

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term) && term.length > 3) {
      score += 5;
    }

    for (const classKey of classKeys) {
      if (classes[classKey] && spellClassToString({ [classKey]: true }) === term) {
        score += 5;
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

    if (name.includes(term)) {
      score += 1;
    } else if (text.includes(term)) {
      score += 1;
    }
  }
  return score;
}