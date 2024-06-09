import * as magicItems from "./magic";
import type { Item } from "./type";

export const items = {
  magic: magicItems.core,
};

export function createItem(): Item {
  return {
    name: "",
    flavourText: "",
    benefit: "",
    bonus: "",
    curse: "",
    personality: "",
  };
}

export function cloneItem<T extends Item>(item: T): T {
  return {
    ...item
  }
}