import { weapons } from "@/data/weapons";
import { ARMOR_STORE, ROLL_TABLES_STORE, WEAPONS_STORE } from "..";
import { armors } from "@/data/armors";

export function addNewTables(db: IDBDatabase) {
  const weaponStore = db.createObjectStore(WEAPONS_STORE);
  const armorStore = db.createObjectStore(ARMOR_STORE);
  db.createObjectStore(ROLL_TABLES_STORE);

  for (const weapon of weapons) {
    weaponStore.add(weapon, weapon.uuid);
  }
  for (const armor of armors) {
    armorStore.add(armor, armor.uuid);
  }
}