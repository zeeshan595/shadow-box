import { ITEMS_STORE, MONSTERS_STORE, SPELLS_STORE } from "..";
import { items, monsters, spells } from '@/data/index';
import { v4 } from 'uuid';

export async function init(db: IDBDatabase) {
  const itemsStore = db.createObjectStore(ITEMS_STORE);
  const monstersStore = db.createObjectStore(MONSTERS_STORE);
  const spellsStore = db.createObjectStore(SPELLS_STORE);

  for (const item of items.magic) {
    const uuid = v4();
    itemsStore.add({ uuid, ...item }, uuid);
  }
  for (const monster of monsters.core) {
    const uuid = v4();
    monstersStore.add({ uuid, ...monster }, uuid);
  }
  for (const spell of spells.core) {
    const uuid = v4();
    spellsStore.add({ uuid, ...spell }, uuid);
  }
}