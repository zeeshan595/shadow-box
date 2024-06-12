import type { Spell } from "@/data/spells/type";
import { MonstersCollection, SpellsCollection } from "../db/collections";
import { v4 } from "uuid";
import type { Monster } from "@/data/monsters/type";

export async function importUnnaturalSelection(pages: string[]) {
  // spells
  const spells = importSpells(pages);
  const existingSpells = await SpellsCollection.getAll();
  const newSpells = spells.filter(spell => existingSpells.findIndex(s => s.name === spell.name) === -1);
  await SpellsCollection.setMany(newSpells.map(spell => ({ uuid: v4(), ...spell })));

  // monsters
  const monsters = importMonsters(pages);
  const existingMonsters = await MonstersCollection.getAll();
  const newMonsters = monsters.filter(monster => existingMonsters.findIndex(m => m.name === monster.name) === -1);
  await MonstersCollection.setMany(newMonsters.map(monster => ({ uuid: v4(), ...monster })));
}

function importSpells(pages: string[]): Spell[] {
  const spellPages = pages.slice(49, 76);
  const spells: Spell[] = [];
  function getRegex() {
    return /Tier +([0-9]{1}), +([a-z\,\ ]+) +(Duration +: +([a-zA-Z0-9\ ]+) +)*Range +: +([A-Za-z]+) +([a-zA-Z0-9\,\.\(\)\s\’\,\+\-\/\%\;\“\”]+)  ([A-Z\ \’]{3,})(  |$)/;
  }
  for (let page of spellPages) {
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
          shamanic: spellClass.includes('shaman'),
          graveWarden: spellClass.includes('grave warden'),
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

function importMonsters(pages: string[]): Monster[] {
  const monsterPages = pages.slice(97, 134).map(page =>
    page.replace('“ With the fel creatures vanquished, nourishing light shall forever shine. Remember, nature is our greatest ally, and its stewardship is our sacred duty.” -Arannis the Great', '')
      .replace('“You have heard that I deceive, but those are the deceits! I offer power, unadorned and true. Trust in that, and thy soul will shine with everlasting light.” -Dominus', '')
      .replace('“As boundaries fray, the world nears chaos. It is my duty to restore force to nature, and I will bear that burden, even if I must embrace shadow.” -Vaelthar, High Shaman', '')
  );

  // seperate each monster
  let monstersStr: string[] = [];
  for (let page of monsterPages) {
    const monsterRegex = () => /  (?! *ATK | *S | *D | *C( |,)| *I | *W | *AC | *HP | *MV | *AL | *N,| *L,| *LV[ \.]?)[A-Z\,\.\ ]+(  |$|\n)/g
    // remove flavour text that's not monsters
    page = (
      page
        .replace('TREANT, CURSED BY VAELTHAR', '  ')
        .replace('SKURRID UNDERGROUND', '  ')
        .replace('APES, FLYING', '  ')
        .replace('KREEVERS', '  ')
        .replace('SQUIRREL, GIANT FLYING', '%%fix-for-squirrel-giant-flying%%')
        .replace('TERMITE QUEEN, GIANT', '%%termite-queen-giant%%')
    );

    let matches = monsterRegex().exec(page);
    while (matches) {
      let endOfMonster = page.indexOf(matches[0]) + matches[0].length;
      let monster = page.slice(0, endOfMonster).trim()
      const fix1 = [
        ['DREAD HOOK  ETTIN', "  ETTIN"],
        ["FLY, GIANT  FELWRAACK", "  FELWRAACK"],
        ["TASMANIAN DEVIL  TASMANIAN DEVIL, GIANT", "  TASMANIAN DEVIL, GIANT"]
      ] as const;
      for (const fix of fix1) {
        if (monster.endsWith(fix[0])) {
          endOfMonster -= fix[1].length;
          monster = page.slice(0, endOfMonster).trim();
        }
      }

      page = page.slice(endOfMonster, page.length);
      monstersStr.push(monster);
      matches = monsterRegex().exec(page);
      if (!matches) {
        for (const fix of fix1) {
          const fixMonsterName = fix[1].trim();
          if (page.startsWith(fixMonsterName)) {
            page = page.slice(fixMonsterName.length, page.length) + `  ${fixMonsterName}`;
            matches = monsterRegex().exec(page);
          }
        }
      }
    }
  }
  // fix for special cases
  for (let i = 0; i < monstersStr.length; i++) {
    if (monstersStr[i].startsWith('%%fix-for-squirrel-giant-flying%%')) {
      const nextMonsterIndex = monstersStr[i].indexOf('Bull with long, wide horns that charges');
      monstersStr.push(monstersStr[i].slice('%%fix-for-squirrel-giant-flying%%'.length, nextMonsterIndex) + '  SQUIRREL, GIANT FLYING');
      monstersStr[i] = monstersStr[i].slice(nextMonsterIndex, monstersStr[i].length);
    } else if (monstersStr[i].startsWith('%%termite-queen-giant%%')) {
      const nextMonsterIndex = monstersStr[i].indexOf('Watermelon-sized insects with  armored,');
      monstersStr.push(monstersStr[i].slice('%%termite-queen-giant%%'.length, nextMonsterIndex) + '  TERMITE QUEEN, GIANT');
      monstersStr[i] = monstersStr[i].slice(nextMonsterIndex, monstersStr[i].length);
    }
  }
  // remove flavour text that does not belong to any monster
  monstersStr = monstersStr.filter(monster => (/[A-Z]+$/.exec(monster)));
  const monsters: (Monster | null)[] = monstersStr.map(monster => {
    if (monster.endsWith('OTTER, GIANT')) {
      monster = monster.replace('   HP 1 5', '   HP 15');
    }
    const nameMatch = /  [A-Z\,\.\ ]+$/g.exec(monster);
    if (!nameMatch) {
      console.error('could not match name for monster', monster);
      return null;
    }
    const name = nameMatch[0].trim();
    const statsRegex = /AC\s+([0-9a-z\*\ \(\)]+),\s+HP\s+([0-9\*]+),\s+ATK\s+([0-9a-zA-Z\ \+\-\(\)\,]+),\s+MV\s+([a-zA-Z\(\)\ \,]+),\s+S\s+([0-9\*\+\-]+),\s+D\s+([0-9\*\+\-]+),\s+C\s+([0-9\*\+\-]+),\s+I\s+([0-9\*\+\-]+),\s+W\s+([0-9\*\+\-]+),\s+Ch\s+([0-9\*\+\-]+),\s+AL\s+(C|N|L),\s+LV\s+([0-9\*\+\-]+)/g
    const statsMatch = statsRegex.exec(monster);
    if (!statsMatch) {
      console.error('could not match stats for monster', monster);
      return null;
    }
    const ac = statsMatch[1].trim();
    const hp = statsMatch[2].trim();
    const attacks = statsMatch[3].trim();
    const mv = statsMatch[4].trim();
    const str = statsMatch[5].trim();
    const dex = statsMatch[6].trim();
    const con = statsMatch[7].trim();
    const int = statsMatch[8].trim();
    const wis = statsMatch[9].trim();
    const cha = statsMatch[10].trim();
    const alignment = statsMatch[11].trim();
    const level = statsMatch[12].trim();

    const monsterSplit = monster.split(statsMatch[0]);
    if (monsterSplit.length !== 2) {
      console.error('failed to get monster flavour text and specials', monster);
      return null;
    }
    const flavourText = monsterSplit[0].replace(/^[0-9\ ]+/g, '');
    let rawSpecials = monsterSplit[1].replace(name, '').trim();
    let specials: { name: string; text: string }[] = [];
    if (rawSpecials !== '') {
      const specialRegex = () => /((?!STR|TR|DEX|EX|HP|ADV|DV|DC|LV|CON|ON|CHA|HA|Dominus.|INT|NT|DISADV|ISADV|SADV)([A-Z][A-Za-z\’]+)( [A-Z]?[a-zA-Z]{2,})?( [A-Z][a-zA-Z]+)?(\s+\(INT( [fF]ocus)? [sS]pell\))?)[. -]{2}[ A-Za-z0-9]{5}/
      let matches = specialRegex().exec(rawSpecials);
      while (matches) {
        let currentName = matches[1];
        rawSpecials = rawSpecials.replace(currentName, '');
        matches = specialRegex().exec(rawSpecials);
        if (matches) {
          const indexToNextSpecial = rawSpecials.indexOf(matches[1]);
          const text = rawSpecials.slice(0, indexToNextSpecial);
          specials.push({
            name: currentName,
            text
          });
          rawSpecials = rawSpecials.slice(indexToNextSpecial, rawSpecials.length);
        } else {
          specials.push({ name: currentName, text: rawSpecials });
        }
      }
    }

    // clean up text
    specials = specials.map(special => ({
      name: special.name.trim(),
      text: special.text.replace(/^[\.\- ]+/, '').trim()
    }))

    return {
      name,
      flavourText,
      alignment,
      attacks,
      level,
      stats: {
        hp,
        ac,
        mv,

        str,
        dex,
        con,
        int,
        wis,
        cha
      },
      specials,
    } as Monster;
  });

  return monsters.filter(m => m !== null).sort((a, b) => a!.name.localeCompare(b!.name)) as Monster[];
}