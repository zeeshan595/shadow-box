import { createSpell } from "@/data";
import { SpellsCollection } from "../db/collections";
import { updateCollection } from "./base";
import type { Spell } from "@/data/spells/type";

export async function importSpells(text: string, replaceExistingItems = false) {
  const lines = text.split('\n');
  let spells: Spell[] = [];
  let currentSpell: Spell = {
    ...createSpell(),
    name: '',
  };
  for (const line of lines) {
    if (/^[A-Z\ \'\,\’]+$/.test(line)) {
      if (currentSpell.name === '') {
        currentSpell.name = line;
      } else {
        spells.push(currentSpell);
        currentSpell = {
          ...createSpell(),
          name: line
        };
      }
    } else if (/^Tier [0-9]+, [a-z\ ]+/.test(line)) {
      const matches = /^Tier ([0-9]+), ([a-z\ \,]+)((Duration: ([a-zA-Z0-9\(\) ]+))?\s{0,}(Range: (Self|Close|Near|Far|Unlimited)))?$/.exec(line);
      if (!matches) {
        throw new Error('test was successful but could not match tier or class');
      }
      const tier = Number.parseInt(matches[1]);
      const classes = matches[2];
      const duration = matches[5];
      const range = matches[7];
      currentSpell.tier = tier;
      currentSpell.class = {
        graveWarden: classes.includes('grave warden'),
        ovate: classes.includes('ovate'),
        priest: classes.includes('priest'),
        seer: classes.includes('seer'),
        shamanic: classes.includes('shaman'),
        witch: classes.includes('witch'),
        wizard: classes.includes('wizard')
      };
      if (duration) {
        currentSpell.duration = duration.trim();
      }
      if (range) {
        if (range.includes('Self')) {
          currentSpell.range = 'Self';
        } else if (range.includes('Close')) {
          currentSpell.range = 'Close';
        } else if (range.includes('Near')) {
          currentSpell.range = 'Near';
        } else if (range.includes('Far')) {
          currentSpell.range = 'Far';
        } else if (range.includes('Unlimited')) {
          currentSpell.range = 'Unlimited';
        }
      }
    } else if (/^Duration: /.test(line)) {
      const matches = /^Duration: ([A-Za-z0-9\(\) ]+)(\s+Range: (Self|Close|Near|Far|Unlimited)|\s*$)/.exec(line);
      if (!matches) {
        throw new Error('test was successful but could not match duration or range');
      }
      const duration = matches[1];
      currentSpell.duration = duration.trim();
      const range = matches[3];
      if (range) {
        currentSpell.range = range as any;
      }
    } else if (/^Range: (Self|Close|Near|Far|Unlimited)$/.test(line)) {
      if (line.includes('Self')) {
        currentSpell.range = 'Self';
      } else if (line.includes('Close')) {
        currentSpell.range = 'Close';
      } else if (line.includes('Near')) {
        currentSpell.range = 'Near';
      } else if (line.includes('Far')) {
        currentSpell.range = 'Far';
      } else if (line.includes('Unlimited')) {
        currentSpell.range = 'Unlimited';
      }
    } else {
      if (currentSpell.text !== '') {
        currentSpell.text += '\n';
      }
      currentSpell.text += line.trim();
    }
  }
  if (currentSpell.name !== '') {
    spells.push(currentSpell);
  }

  await updateCollection(SpellsCollection, spells, replaceExistingItems);
}