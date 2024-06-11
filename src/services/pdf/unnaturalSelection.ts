import type { Spell } from "@/data/spells/type";
import { SpellsCollection } from "../db/collections";
import { v4 } from "uuid";

export function importUnnaturalSelection(pages: string[]) {
  const spells = importSpells(pages);
  SpellsCollection.setMany(spells.map(spell => ({ uuid: v4(), ...spell })));
}

function importSpells(pages: string[]): Spell[] {
  const spellPages = pages.slice(49, 76);
  const spells: Spell[] = [];
  for (let page of spellPages) {
    function getRegex() {
      return /Tier +([0-9]{1}), +([a-z\,\ ]+) +(Duration +: +([a-zA-Z0-9\ ]+) +)*Range +: +([A-Za-z]+) +([a-zA-Z0-9\,\.\(\)\s\’\,\+\-\/\%\;\“\”]+)  ([A-Z\ \’]{3,})(  |$)/;
    }
    let spellRegex = getRegex();
    let matches = spellRegex.exec(page);
    while (matches) {
      let [match, tier, spellClass, _, duration, range, text, name] = matches;
      const nameAtStartFixRegex = /([A-Z\ \’]{3,})$/g;
      const fixMatch = nameAtStartFixRegex.exec(text);
      if (fixMatch) {
        page += `  ${name}`;
        name = fixMatch[0].trim();
        text = text.replace(fixMatch[0], '').trim();
      }
      if (name === 'SACRED BOUNTY SHAMANIC PURGE') {
        name = 'SHAMANIC PURGE';
      }
      spells.push({
        name,
        tier: Number.parseInt(tier),
        class: {
          wizard: spellClass.includes('wizard'),
          priest: spellClass.includes('priest'),
          seer: spellClass.includes('seer'),
          witch: spellClass.includes('witch'),
          ovate: spellClass.includes('ovate'),
          shamanic: spellClass.includes('shamanic'),
          graveWarden: spellClass.includes('graveWarden'),
        },
        duration: duration ?? 'Instant',
        range: range as "Near" | "Far" | "Self" | "Close" | "Unlimited",
        text,
      });
      spellRegex = getRegex();
      page = page.replace(match, '');
      matches = spellRegex.exec(page);
      if (!matches) {
        const startingNameFix = /^^[0-9]{2}  ([A-Z\ \’]{3,})  /g;
        const matchesStartingNameFix = startingNameFix.exec(page);
        if (matchesStartingNameFix) {
          page = page.replace(matchesStartingNameFix[1], '') + matchesStartingNameFix[1];
          matches = spellRegex.exec(page);
        }
        if (page.startsWith('68')) {
          page += '  SACRED BOUNTY';
          matches = spellRegex.exec(page);
        }
      }
    }
  }
  return spells;
}