import type { Item } from "@/data/items/type";

export function scoreItem(terms: string[], item: Item): number {
  const name = item.name.toLowerCase();
  const flavourText = item.flavourText.toLowerCase();
  const bonus = item.bonus?.toLowerCase();
  const benefit = item.benefit?.toLowerCase();
  const curse = item.curse?.toLowerCase();
  const personality = item.personality?.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term) && term.length > 3) {
      score += 5;
    }

    if (flavourText.includes(term) && term.length > 3) {
      score += 2;
    }
    if (bonus && bonus.includes(term) && term.length > 3) {
      score += 3;
    }
    if (benefit && benefit.includes(term) && term.length > 3) {
      score += 3;
    }
    if (curse && curse.includes(term) && term.length > 3) {
      score += 3;
    }
    if (personality && personality.includes(term) && term.length > 3) {
      score += 3;
    }

    if (name.includes(term)) {
      score += 1;
    } else if (bonus?.includes(term)) {
      score += 1;
    } else if (benefit?.includes(term)) {
      score += 1;
    } else if (curse?.includes(term)) {
      score += 1;
    } else if (personality?.includes(term)) {
      score += 1;
    } else if (flavourText.includes(term)) {
      score += 0.5;
    }
  }
  return score;
}