import type { Item } from "@/data/items/type";
import { Collection, ITEMS_STORE, MONSTERS_STORE, SPELLS_STORE } from ".";
import type { Monster } from "@/data/monsters/type";
import type { Spell } from "@/data/spells/type";

class Items extends Collection<Item> { }
export const ItemsCollection = new Items(ITEMS_STORE);

class Monsters extends Collection<Monster> { }
export const MonstersCollection = new Monsters(MONSTERS_STORE);

class Spells extends Collection<Spell> { }
export const SpellsCollection = new Spells(SPELLS_STORE);