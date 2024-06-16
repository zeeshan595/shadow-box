import { ref } from "vue";
import { init } from "./migrations/init";

export type WithUUID<T> = T & { uuid: string };

export const ITEMS_STORE = "items";
export const MONSTERS_STORE = "monsters";
export const SPELLS_STORE = "spells";
export const WEAPONS_STORE = "weapons";
export const ARMOR_STORE = "armors";
export const ROLL_TABLES_STORE = "roll_tables";

export const isReady = ref<boolean>(false);
export const db = ref<IDBDatabase | null>(null);
const request = indexedDB.open("shadow-box.online", 1);
request.onerror = console.error;
request.onupgradeneeded = function (event) {
  const db = request.result;
  switch (event.oldVersion) {
    case 0:
      init(db);
      break;
  }
};
request.onsuccess = function () {
  db.value = request.result;
  isReady.value = true;
};

export function getDb(): Promise<IDBDatabase> {
  let timeout = 5000;
  return new Promise((resolve) => {
    const interval = setInterval(() => {
      if (isReady.value) {
        resolve(request.result);
        clearInterval(interval);
      }
      if (timeout <= 0) {
        throw new Error("timed out when getting database");
      } else {
        timeout -= 100;
      }
    }, 100);
  });
}

export class Collection<T> {
  constructor(private readonly collectionName: string) { }

  private async getObjectStore(mode: IDBTransactionMode) {
    const db = await getDb();
    const transaction = db.transaction(this.collectionName, mode);
    const store = transaction.objectStore(this.collectionName);
    return { db, transaction, store };
  }
  public async getAll(): Promise<WithUUID<T>[]> {
    const { transaction, store } = await this.getObjectStore('readonly');
    const result = store.getAll();
    transaction.commit();
    return new Promise((resolve) => {
      result.onsuccess = () => {
        resolve(result.result);
      }
      result.onerror = console.error;
    });
  }
  public async get(uuid: string): Promise<WithUUID<T>> {
    const { transaction, store } = await this.getObjectStore('readonly');
    const result = store.get(uuid);
    transaction.commit();
    return new Promise(resolve => {
      result.onsuccess = () => resolve(result.result);
      result.onerror = console.error;
    });
  }
  public async set(uuid: string, data: T): Promise<WithUUID<T>> {
    const { transaction, store } = await this.getObjectStore('readwrite');
    const result = store.put({ ...data, uuid }, uuid);
    transaction.commit();
    return new Promise(resolve => {
      result.onsuccess = () => resolve({ uuid, ...data });
      result.onerror = () => console.error;
    });
  }
  public async setMany(data: WithUUID<T>[]): Promise<WithUUID<T>[]> {
    return new Promise(async (resolve) => {
      if (data.length === 0) return resolve([]);
      const { transaction, store } = await this.getObjectStore('readwrite');
      const results: IDBRequest[] = [];
      for (const entry of data) {
        results.push(store.put(entry, entry.uuid));
      }
      transaction.commit();
      let finishedCounter = 0;
      for (const entry of results) {
        if (entry.readyState === 'done') {
          finishedCounter++;
          continue;
        }
        function updateProgress() {
          finishedCounter++;
          if (finishedCounter >= results.length) {
            resolve(data);
          }
        }
        entry.onsuccess = updateProgress;
        entry.onerror = updateProgress;
      }
    });
  }
  public async delete(uuid: string): Promise<void> {
    const { transaction, store } = await this.getObjectStore('readwrite');
    const result = store.delete(uuid);
    transaction.commit();
    return new Promise(resolve => {
      result.onsuccess = () => resolve();
      result.onerror = console.error;
    });
  }
  public async clear(): Promise<void> {
    const { transaction, store } = await this.getObjectStore('readwrite');
    const result = store.clear();
    transaction.commit();
    return new Promise(resolve => {
      result.onsuccess = () => resolve();
      result.onerror = console.error;
    });
  }
}