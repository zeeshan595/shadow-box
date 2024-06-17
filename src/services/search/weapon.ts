import type { Weapon } from "@/data/weapons/type";

export function scoreWeapon(terms: string[], weapon: Weapon): number {
  const name = weapon.name.toLowerCase();
  const type = weapon.type.toLowerCase();
  const properties = weapon.properties.toLowerCase();
  const range = weapon.range.toLowerCase();
  const cost = weapon.cost.toLowerCase();
  const damage = weapon.damage.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term) && term.length > 3) {
      score += 5;
    }
    if (properties.includes(term) && term.length > 3) {
      score += 5;
    }
    if (type === term) {
      score += 2;
    }
    if (range === term) {
      score += 2;
    }
    if (cost === term) {
      score += 2;
    }
    if (damage === term) {
      score += 2;
    }
  }

  return score;
}