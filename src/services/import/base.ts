import { v4 } from "uuid";
import type { Collection } from "../db";

export async function updateCollection<T extends { name: string }>(
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