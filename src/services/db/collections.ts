import type { Item } from "@/data/items/type";
import { Collection, ITEMS_STORE, MONSTERS_STORE, SPELLS_STORE } from ".";

class Items extends Collection<Item> { }
export const ItemsCollection = new Items(ITEMS_STORE);

class Monsters extends Collection<Monsters> { }
export const MonstersCollection = new Monsters(MONSTERS_STORE);

class Spells extends Collection<Spells> { }
export const SpellsCollection = new Spells(SPELLS_STORE);