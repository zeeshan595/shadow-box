import type { Item } from "@/data/items/type";
import { ItemsCollection } from "../db/collections";
import { updateCollection } from "./base";

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