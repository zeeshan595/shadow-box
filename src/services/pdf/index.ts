import type { Item } from "@/data/items/type";
import { ItemsCollection, SpellsCollection } from "../db/collections";
import { v4 } from "uuid";
import type { Spell } from "@/data/spells/type";
import type { WithUUID } from "../db";

export async function importItems(text: string, replaceExistingItems = false): Promise<WithUUID<Item>[]> {
  const lines = text.split('\n');
  let items: Item[] = [];
  let currentItem: Item = { name: '', flavourText: '' };
  for (const line of lines) {
    if (/^[A-Z\ \'\,\’]+$/.test(line)) {
      if (currentItem.name === '') {
        currentItem.name = line;
      } else {
        items.push(currentItem);
        currentItem = { name: '', flavourText: '' };
        currentItem.name = line;
      }
    } else if (/^Bonus[. -]+/.test(line)) {
      currentItem.bonus += '\n';
      currentItem.bonus = line.replace(/^Bonus[. -]/, '').trim();
    } else if (/^Benefit[. -]+/.test(line)) {
      currentItem.benefit += '\n';
      currentItem.benefit = line.replace(/^Benefit[. -]/, '').trim();
    } else if (/^Curse[. -]+/.test(line)) {
      currentItem.curse += '\n';
      currentItem.curse = line.replace(/^Curse[. -]/, '').trim();
    } else if (/^Personality[. -]+/.test(line)) {
      currentItem.personality += '\n';
      currentItem.personality += line.replace(/^Personality[. -]/, '').trim();
    } else {
      if (currentItem.flavourText !== '') {
        currentItem.flavourText == '\n';
      }
      currentItem.flavourText += line.trim();
    }
  }
  if (currentItem.name !== '') {
    items.push(currentItem);
  }

  if (!replaceExistingItems) {
    const existingItems = await ItemsCollection.getAll();
    items = items.filter(item => existingItems.findIndex(i => i.name === item.name) === -1);
  }
  const itemsWithUUID = items.map(item => ({ uuid: v4(), ...item }));
  await ItemsCollection.setMany(itemsWithUUID);
  return itemsWithUUID;
}

export async function importSpells(text: string, replaceExistingItems = false) {
  const lines = text.split('\n');
  let spells: Spell[] = [];
  let tierAdded = false;
  let durationAdded = false;
  let rangeAdded = false;
  let currentSpell: Spell = {
    name: '',
    class: {},
    duration: '',
    range: 'Self',
    text: '',
    tier: -1
  };
  for (const line of lines) {
    if (/^[A-Z\ \'\,\’]+$/.test(line)) {
      if (currentSpell.name === '') {
        currentSpell.name = line;
      } else {
        if (tierAdded && durationAdded && rangeAdded) {
          spells.push(currentSpell);
        } else {
          alert(`${currentSpell.name} is incorrectly formatted`);
        }

        currentSpell = {
          name: '',
          class: {},
          duration: '',
          range: 'Self',
          text: '',
          tier: -1
        };
        currentSpell.name = line;
        tierAdded = false;
        durationAdded = false;
        rangeAdded = false;
      }
    } else if (/^Tier [0-9]+, [a-z\ ]+$/.test(line)) {
      const matches = /^Tier ([0-9]+), ([a-z\ ]+)$/.exec(line);
      if (!matches) {
        throw new Error('test was successful but could not match tier or class');
      }
      const tier = Number.parseInt(matches[1]);
      const classes = matches[2];
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
      tierAdded = true;
    } else if (/^Duration: /.test(line)) {
      const matches = /^Duration: ([A-Za-z0-9\(\) ]+)(\s+Range: (Self|Close|Near|Far|Unlimited)|\s*$)/.exec(line);
      if (!matches) {
        throw new Error('test was successful but could not match duration or range');
      }
      const duration = matches[1];
      durationAdded = true;
      currentSpell.duration = duration.trim();
      const range = matches[3];
      if (range) {
        currentSpell.range = range as any;
        rangeAdded = true;
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
      rangeAdded = true;
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

  if (!replaceExistingItems) {
    const existingSpells = await SpellsCollection.getAll();
    spells = spells.filter(spell => existingSpells.findIndex(s => s.name === spell.name) === -1);
  }
  await SpellsCollection.setMany(spells.map(spell => ({ uuid: v4(), ...spell })));
}

export async function importMonsters(text: string, replaceExistingItems = false) {

}