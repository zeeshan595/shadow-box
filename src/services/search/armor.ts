import type { Armor } from "@/data/armors/type";

export function scoreArmor(terms: string[], armor: Armor): number {
  const name = armor.name.toLowerCase();
  const cost = armor.cost.toLowerCase();
  const gearSlot = armor.gearSlots.toLowerCase();
  const ac = armor.armor.toLowerCase();
  const properties = armor.properties.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term)) {
      score += 5;
    }

    if (cost === term) {
      score += 5;
    }
    if (gearSlot === term) {
      score += 2;
    }
    if (ac === term) {
      score += 3;
    }
    if (properties.includes(term)) {
      score += 2;
    }

    if (name.includes(term)) {
      score += 1;
    } else if (properties.includes(term)) {
      score += 1;
    }
  }
  return score;
}