import type { WithUUID } from "@/services/db";
import type { Weapon } from "./type";
import { v4 } from "uuid";

export const weapons: WithUUID<Weapon>[] = [
  {
    "name": "Bastard sword",
    "cost": "10gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d8/1d10",
    "properties": "Versatile, 2 gear slots",
    "uuid": "e756379b-1179-4b18-98e6-d0fc2f5f813f"
  },
  {
    "name": "Club",
    "cost": "5cp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d4",
    "properties": "",
    "uuid": "d20131ab-a354-47f6-8aeb-243ffd25d138"
  },
  {
    "name": "Crossbow",
    "cost": "8gp",
    "type": "Range",
    "range": "Far",
    "damage": "1d6",
    "properties": "2 handed, Loading",
    "uuid": "c0281d67-d83b-4666-8876-515f71761309"
  },
  {
    "name": "Dagger",
    "cost": "1gp",
    "type": "M/R",
    "range": "Close / Near",
    "damage": "1d4",
    "properties": "Finesse, Thrown",
    "uuid": "7df8414b-1fba-4c54-a0ca-eec91da79123"
  },
  {
    "name": "Greataxe",
    "cost": "10gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d8/1d10",
    "properties": "Versatile, 2 gear slots",
    "uuid": "feee81d8-2a50-4646-afb0-22f86cabdfbd"
  },
  {
    "name": "Greatsword",
    "cost": "12gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d12",
    "properties": "2 handed, 2 gear slots",
    "uuid": "ab4b365d-ccd0-41c9-b4aa-7f0fd7948de8"
  },
  {
    "name": "Javelin",
    "cost": "5sp",
    "type": "M/R",
    "range": "C/F",
    "damage": "1d4",
    "properties": "Thrown",
    "uuid": "05ae074a-17ee-425c-acd5-8e4dc0eace1a"
  },
  {
    "name": "Longbow",
    "cost": "8gp",
    "type": "Range",
    "range": "Far",
    "damage": "1d8",
    "properties": "2 handed",
    "uuid": "46ea05e8-762a-46e0-a978-b9ef12df5b1f"
  },
  {
    "name": "Longsword",
    "cost": "9gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d8",
    "properties": "",
    "uuid": "7bb20328-6096-4dc7-83dc-bdd395ee90aa"
  },
  {
    "name": "Mace",
    "cost": "5gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d6",
    "properties": "",
    "uuid": "ffe29851-39d8-48a2-a3cb-ba257542385b"
  },
  {
    "name": "Shortbow",
    "cost": "6gp",
    "type": "Range",
    "range": "Far",
    "damage": "1d4",
    "properties": "2 handed",
    "uuid": "bff24129-0016-4fda-bdd1-072f4087d953"
  },
  {
    "name": "Shortsword",
    "cost": "7gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d6",
    "properties": "Thrown",
    "uuid": "1d8d0f2f-d177-49e0-9111-2c04e314ded4"
  },
  {
    "name": "Spear",
    "cost": "5sp",
    "type": "M/R",
    "range": "Close / Near",
    "damage": "1d6",
    "properties": "Thrown",
    "uuid": "7f72ab9a-c0f3-4504-9fb3-481f504c2eba"
  },
  {
    "name": "Staff",
    "cost": "5sp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d4",
    "properties": "2 handed",
    "uuid": "6992ca12-f3d5-43ef-bd74-19aeee50e139"
  },
  {
    "name": "Warhammer",
    "cost": "10gp",
    "type": "Melee",
    "range": "Close",
    "damage": "1d10",
    "properties": "2 handed",
    "uuid": "d56b3122-d398-4960-9ad3-c2219aa44899"
  }
];

export function createWeapon(): WithUUID<Weapon> {
  return {
    uuid: v4(),
    name: '',
    cost: '',
    type: '',
    range: '',
    damage: '',
    properties: ''
  }
}

export function cloneWeapon(weapon: WithUUID<Weapon>): WithUUID<Weapon> {
  return {
    ...weapon
  };
}