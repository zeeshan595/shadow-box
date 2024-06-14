import { ref } from 'vue';
import OBR from '@owlbear-rodeo/sdk';
import type { Collection, WithUUID } from './db';
import type { Spell } from '@/data/spells/type';
import type { Monster } from '@/data/monsters/type';
import type { Item } from '@/data/items/type';
import { ItemsCollection, MonstersCollection, SpellsCollection } from './db/collections';

export const SYNC_CHANNEL_ID = 'owlbear.shadow-box.sync';

export type ALL_DATA_TYPES = WithUUID<Spell> | WithUUID<Monster> | WithUUID<Item>;
export enum DataType {
  Item,
  Monster,
  Spell
};
export type Payload<T extends ALL_DATA_TYPES> = {
  type: DataType;
  data: T;
};

export const isReady = ref(false);
export const lastUpdatedAt = ref(Date.now());
if (OBR.isAvailable) {
  OBR.onReady(() => {
    isReady.value = true;

    OBR.broadcast.onMessage(SYNC_CHANNEL_ID, async (event) => {
      const players = await OBR.party.getPlayers();
      const player = players.find(player => player.connectionId === event.connectionId);
      const payload = event.data as Payload<ALL_DATA_TYPES>;
      const itemType = DataType[payload.type].toString();

      let collection: Collection<Spell | Monster | Item> | null = null;
      switch (payload.type) {
        case DataType.Item:
          collection = ItemsCollection;
          break;
        case DataType.Monster:
          collection = MonstersCollection;
          break;
        case DataType.Spell:
          collection = SpellsCollection;
          break;
        default:
          console.warn('unrecognised item was sent');
          return;
      }

      const RECEIVE_ITEM_TEXT = `A new ${itemType} called "${payload.data.name}" is being sent by ${player?.name}. Do you want to add it to your library? \n\nIf the same ${itemType} exists it will be updated instead. Otherwise it will create a new ${itemType}.`
      if (!confirm(RECEIVE_ITEM_TEXT)) return;

      // if item matching uuid exists
      const existingItem = await collection.get(payload.data.uuid);
      if (existingItem) {
        await collection.set(payload.data.uuid, payload.data);
        lastUpdatedAt.value = Date.now();
        return;
      }

      // if item does not exist
      const allRecords = await collection.getAll();
      const findMatchingName = allRecords.find(r => r.name === payload.data.name);
      if (!findMatchingName) {
        await collection.set(payload.data.uuid, payload.data);
        lastUpdatedAt.value = Date.now();
        return;
      }

      // if item matching name exists
      await collection.set(payload.data.uuid, payload.data);
      lastUpdatedAt.value = Date.now();
    });
  });
}

export function sendToPlayers<T extends ALL_DATA_TYPES>(type: DataType, data: T) {
  void OBR.broadcast.sendMessage(
    SYNC_CHANNEL_ID,
    { type, data } as Payload<T>,
    { destination: "REMOTE" }
  );
  OBR.notification.show(`Sent ${DataType[type].toString()} to other players in the party`)
}