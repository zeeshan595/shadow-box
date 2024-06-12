import type { Item } from "@/data/items/type";
import { ItemsCollection, MonstersCollection, SpellsCollection } from "../db/collections";
import { v4 } from "uuid";
import type { Spell } from "@/data/spells/type";
import type { Monster } from "@/data/monsters/type";
import { createMonster, createSpell } from "@/data";
import type { Collection, WithUUID } from "../db";

async function updateCollection<T extends { name: string }>(
  collection: Collection<T>,
  newItems: T[],
  replaceExisting: boolean = false
) {
  const existingItems = await collection.getAll();

  // replace existing items
  if (replaceExisting) {
    const itemsToInsert = newItems.map(item => {
      const foundExisting = existingItems.find(i => i.name === item.name);
      if (foundExisting) {
        return {
          uuid: foundExisting.uuid,
          ...item
        };
      }
      return {
        uuid: v4(),
        ...item
      }
    });
    await collection.setMany(itemsToInsert);
  } else {
    // update all items that are not existing in the database
    const itemsToInsert = (
      newItems
        .filter(item => existingItems.findIndex(i => i.name === item.name) === -1)
        .map(i => ({ uuid: v4(), ...i }))
    );
    await collection.setMany(itemsToInsert);
  }
}

export async function importItems(text: string, replaceExistingItems = false) {
  const lines = text.split('\n');
  let items: Item[] = [];
  let currentItem: Item = { name: '', flavourText: '' };
  for (const line of lines) {
    if (/^[A-Z\ \'\,\’]+$/.test(line)) {
      if (currentItem.name === '') {
        currentItem.name = line;
      } else {
        items.push(currentItem);
        currentItem = { name: line, flavourText: '' };
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

  await updateCollection(ItemsCollection, items, replaceExistingItems);
}

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

export async function importMonsters(text: string, replaceExistingItems = false) {
  const lines = text.split('\n');
  let monsters: Monster[] = [];
  let currentMonster: Monster = {
    ...createMonster(),
    name: '',
  };
  for (const line of lines) {
    if (/^[A-Z\ \'\,\’]+$/.test(line)) {
      if (currentMonster.name === '') {
        currentMonster.name = line.trim();
      } else {
        monsters.push(currentMonster);
        currentMonster = {
          ...createMonster(),
          name: line
        };
      }
    } else if (/^AC\s+[0-9\*]+/.test(line)) {
      const matches1 = /^AC\s{0,}([0-9a-zA-Z\(\)\ \*]+),\s{0,}HP\s{0,}([0-9\*]+),\s{0,}ATK\s{0,}([a-zA-Z0-9\(\)\s+\*\ ]+),\s{0,}MV\s{0,}([a-zA-Z0-9\-\(\)\ ]+),/.exec(line);
      const matches2 = /,\s{0,}S\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}D\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}C\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}I\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}W\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}Ch\s{0,}([0-9\*\-\+]+)\s{0,},\s{0,}AL\s{0,}(C|N|L)\s{0,},\s{0,}LV\s{0,}([0-9\*\-\+]+)$/.exec(line);
      if (!matches1 || !matches2) {
        throw new Error('test was successful but could not match monster stats');
      }
      const ac = matches1[1];
      const hp = matches1[2];
      const attacks = matches1[3];
      const mv = matches1[4];
      const str = matches2[1];
      const dex = matches2[2];
      const con = matches2[3];
      const int = matches2[4];
      const wis = matches2[5];
      const cha = matches2[6];
      const alignment = matches2[7];
      const level = matches2[8];
      currentMonster = {
        ...currentMonster,
        attacks,
        alignment,
        level,
        stats: {
          ...currentMonster.stats,
          ac,
          hp,
          mv,

          str,
          dex,
          con,
          int,
          wis,
          cha
        }
      };
    } else if (/^[A-Za-z\ ]{3,20}\. /.test(line)) {
      const seperatorIndex = line.indexOf('.');
      const name = line.slice(0, seperatorIndex);
      const text = line.slice(seperatorIndex).replace(/^[. ]+/, '').trim();
      currentMonster.specials.push({
        name,
        text
      });
    } else {
      if (currentMonster.flavourText !== '') {
        currentMonster.flavourText += '\n';
      }
      currentMonster.flavourText += line.trim();
    }
  }
  if (currentMonster.name !== '') {
    monsters.push(currentMonster);
  }

  await updateCollection(MonstersCollection, monsters, replaceExistingItems);
}