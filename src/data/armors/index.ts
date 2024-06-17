import type { WithUUID } from "@/services/db";
import type { Armor } from "./type";
import { v4 } from "uuid";

export const armors: WithUUID<Armor>[] = [
  {
    "name": "Mithral Chainmail",
    "cost": "240gp",
    "gearSlots": "1",
    "armor": "13 + DEX",
    "properties": "",
    "uuid": "508d756c-cdec-4d1c-80ca-45a98772f364"
  },
  {
    "name": "Plate Mail",
    "cost": "130gp",
    "gearSlots": "3",
    "armor": "15",
    "properties": "Can't swim, Disadvantage on stealth",
    "uuid": "d0a34a14-c7e0-4629-9d90-058c09a02e92"
  },
  {
    "name": "Chainmail",
    "cost": "60gp",
    "gearSlots": "2",
    "armor": "13 + DEX",
    "properties": "Disadvantage on stealth and swimming",
    "uuid": "dc7ee0cd-222e-497a-8326-2ff69f896a80"
  },
  {
    "name": "Leather Armor",
    "cost": "10gp",
    "gearSlots": "1",
    "armor": "11 + DEX",
    "properties": "",
    "uuid": "1415649f-e7ac-4044-a7d8-2a5387eb8754"
  },
  {
    "name": "Mithral Plate Mail",
    "cost": "520gp",
    "gearSlots": "2",
    "armor": "15",
    "properties": "",
    "uuid": "e76bfdfa-0089-4de6-9a20-51224d18aec5"
  },
  {
    "name": "Shield",
    "cost": "10gp",
    "gearSlots": "1",
    "armor": "+2",
    "properties": "Occupies one hand",
    "uuid": "697d021c-6cc4-4d10-bdec-995c1274af09"
  }
];

export function createArmor(): WithUUID<Armor> {
  return {
    uuid: v4(),
    name: '',
    armor: '',
    gearSlots: '',
    cost: '',
    properties: ''
  }
}

export function cloneArmor(armor: WithUUID<Armor>): WithUUID<Armor> {
  return {
    ...armor
  }
}