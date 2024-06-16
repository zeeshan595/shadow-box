import {
  ARMOR_STORE,
  Collection,
  ITEMS_STORE,
  MONSTERS_STORE,
  ROLL_TABLES_STORE,
  SPELLS_STORE,
  WEAPONS_STORE
} from ".";
import type { Item } from "@/data/items/type";
import type { Monster } from "@/data/monsters/type";
import type { Spell } from "@/data/spells/type";
import type { Weapon } from "@/data/weapons/type";
import type { Armor } from "@/data/armors/type";
import type { RollTable } from "@/data/roll-tables/type";

class Items extends Collection<Item> { }
export const ItemsCollection = new Items(ITEMS_STORE);

class Monsters extends Collection<Monster> { }
export const MonstersCollection = new Monsters(MONSTERS_STORE);

class Spells extends Collection<Spell> { }
export const SpellsCollection = new Spells(SPELLS_STORE);

class Weapons extends Collection<Weapon> { }
export const WeaponsCollection = new Weapons(WEAPONS_STORE);

class Armors extends Collection<Armor> { }
export const ArmorsCollection = new Armors(ARMOR_STORE);

class RollTables extends Collection<RollTable> { }
export const RollTablesCollection = new Spells(ROLL_TABLES_STORE);

