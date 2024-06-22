import type { Monster } from "@/data/monsters/type";

export function scoreMonster(terms: string[], monster: Monster): number {
  console.log('test');
  const name = monster.name.toLowerCase();
  const flavourText = monster.flavourText.toLowerCase();
  const level = monster.level.toLowerCase();
  const ac = monster.stats.ac.toLowerCase();
  const hp = monster.stats.hp.toLowerCase();
  const attacks = monster.attacks.toLowerCase();
  const movement = monster.stats.mv.toLowerCase();
  const alignment = monster.alignment.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term)) {
      score += 5;
    }

    if (flavourText.includes(term) && term.length > 3) {
      score += 3;
    }
    if (level === term) {
      score += 3;
    }
    if (ac.startsWith(term) && term.length >= 2) {
      score += 3;
    }
    if (hp.startsWith(term) && term.length >= 2) {
      score += 3;
    }
    if (attacks.includes(term) && term.length > 2) {
      score += 2;
    }
    if (movement.startsWith(term) && term.length > 3) {
      score += 3;
    }
    if (alignment === term) {
      score += 2;
    }

    for (const special of monster.specials) {
      const specialName = special.name.toLowerCase();
      const specialText = special.text.toLowerCase();

      if (specialName.includes(term) && term.length > 2) {
        score += 5;
      }
      if (specialText.includes(term) && term.length > 3) {
        score += 2;
      }
    }

    if (name.includes(term)) {
      score += 1;
    } else if (flavourText.includes(term)) {
      score += 0.5;
    }
  }

  return score;
}