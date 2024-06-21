import { ref } from 'vue';
import OBR, { type Player } from '@owlbear-rodeo/sdk';
import { ArmorsCollection, ItemsCollection, MonstersCollection, RollTablesCollection, SpellsCollection, WeaponsCollection } from './db/collections';
import type { Collection, WithUUID } from './db';
import type { Spell } from '@/data/spells/type';
import type { Monster } from '@/data/monsters/type';
import type { Item } from '@/data/items/type';
import type { Weapon } from '@/data/weapons/type';
import type { Armor } from '@/data/armors/type';
import type { RollTable } from '@/data/roll-tables/type';
import { cloneArmor } from '@/data/armors';
import { cloneItem, cloneMonster, cloneSpell } from '@/data';
import { cloneRollTable } from '@/data/roll-tables';
import { cloneWeapon } from '@/data/weapons';

export const SYNC_CHANNEL_ID = 'owlbear.shadow-box.sync';

export type ALL_DATA_TYPES = |
  WithUUID<Spell> |
  WithUUID<Monster> |
  WithUUID<Item> |
  WithUUID<Weapon> |
  WithUUID<Armor> |
  WithUUID<RollTable>;

export enum DataType {
  Item,
  Monster,
  Spell,
  Weapon,
  Armor,
  RollTable
};
export type Payload<T extends ALL_DATA_TYPES> = {
  playerIds: string[];
  type: DataType;
  data: T;
};

export const isReady = ref(false);
export const lastUpdatedAt = ref(Date.now());
export const shareTriggered = ref<Payload<ALL_DATA_TYPES> | null>(null);
export const players = ref<Player[]>([]);
if (OBR.isAvailable) {
  OBR.onReady(() => {
    isReady.value = true;

    OBR.broadcast.onMessage(SYNC_CHANNEL_ID, async (event) => {
      const allPlayers = await getPlayers();
      const sendingPlayer = allPlayers.find(p => p.connectionId === event.connectionId);
      const payload = event.data as Payload<ALL_DATA_TYPES>;
      const itemType = DataType[payload.type].toString();

      const currentPlayer = await OBR.player.getId();
      if (!payload.playerIds.includes(currentPlayer)) {
        return;
      }

      let collection: Collection<Spell | Monster | Item | Weapon | Armor | RollTable> | null = null;
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
        case DataType.Weapon:
          collection = WeaponsCollection;
          break;
        case DataType.Armor:
          collection = ArmorsCollection;
          break;
        case DataType.RollTable:
          collection = RollTablesCollection;
          break;
        default:
          console.warn('unrecognised item was sent');
          return;
      }

      const RECEIVE_ITEM_TEXT = `A new ${itemType} called "${payload.data.name}" is being sent by ${sendingPlayer?.name}. Do you want to add it to your library? \n\nIf the same ${itemType} exists it will be updated instead. Otherwise it will create a new ${itemType}.`
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

export async function sendToPlayersEnd<T extends ALL_DATA_TYPES>(playerIds: string[]) {
  let { type, data } = shareTriggered.value as Payload<T>;
  switch (type) {
    case DataType.Armor:
      data = cloneArmor(data as WithUUID<Armor>) as T;
      break;
    case DataType.Item:
      data = cloneItem(data as WithUUID<Item>) as T;
      break;
    case DataType.Monster:
      data = cloneMonster(data as WithUUID<Monster>) as T;
      break;
    case DataType.RollTable:
      data = cloneRollTable(data as WithUUID<RollTable>) as T;
      break;
    case DataType.Spell:
      data = cloneSpell(data as WithUUID<Spell>) as T;
      break;
    case DataType.Weapon:
      data = cloneWeapon(data as WithUUID<Weapon>) as T;
      break;
  }

  void OBR.broadcast.sendMessage(
    SYNC_CHANNEL_ID,
    { type, data: { ...data }, playerIds: [...playerIds] } as Payload<T>,
    { destination: "REMOTE" }
  );
  OBR.notification.show(`Sent ${DataType[type].toString()} to other players in the party`)
}

export async function sendToPlayers<T extends ALL_DATA_TYPES>(type: DataType, data: T) {
  players.value = await getPlayers();
  shareTriggered.value = {
    type, data, playerIds: []
  };
}

export async function getPlayers() {
  const players = await OBR.party.getPlayers();
  return players;
}