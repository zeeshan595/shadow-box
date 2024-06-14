import { createMonster } from "@/data";
import { MonstersCollection } from "../db/collections";
import type { Monster } from "@/data/monsters/type";
import { updateCollection } from "./base";


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
      const matches1 = /^AC\s{0,}([0-9a-zA-Z\(\)\ \*\+]+),\s{0,}HP\s{0,}([0-9\*]+),\s{0,}ATK\s{0,}([a-zA-Z0-9\(\)\s+\*\ \/\,]+),\s{0,}MV\s{0,}([a-zA-Z0-9\-\(\)\ ]+),/.exec(line);
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
