import type { RollTable } from "@/data/roll-tables/type";

export function scoreRollTable(terms: string[], rollTable: RollTable): number {
  const name = rollTable.name.toLowerCase();

  let score = 0;
  for (const term of terms) {
    if (name.startsWith(term) && term.length > 3) {
      score += term.length * 2;
    } else if (name.includes(term) && term.length > 3) {
      score += 5;
    }

    for (const row of rollTable.table) {
      for (const entry of row) {
        const entryLower = entry.toLowerCase();
        if (entryLower === term) {
          score += 5;
        } else if (entryLower.includes(term) && term.length > 2) {
          score += 2;
        }
      }
    }
  }
  return score;
}