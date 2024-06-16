import type { Weapon } from "./type";

export const weapons: Weapon[] = [
  {
    name: 'Bastard sword',
    cost: '10gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d8/1d10',
    properties: 'Versatile, 2 gear slots'
  },
  {
    name: 'Club',
    cost: '5cp',
    type: 'Melee',
    range: 'Close',
    damage: '1d4',
    properties: ''
  },
  {
    name: 'Crossbow',
    cost: '8gp',
    type: 'Range',
    range: 'Far',
    damage: '1d6',
    properties: '2 handed, Loading'
  },
  {
    name: 'Dagger',
    cost: '1gp',
    type: 'M/R',
    range: 'Close / Near',
    damage: '1d4',
    properties: 'Finesse, Thrown'
  },
  {
    name: 'Greataxe',
    cost: '10gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d8/1d10',
    properties: 'Versatile, 2 gear slots'
  },
  {
    name: 'Greatsword',
    cost: '12gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d12',
    properties: '2 handed, 2 gear slots'
  },
  {
    name: 'Javelin',
    cost: '5sp',
    type: 'M/R',
    range: 'C/F',
    damage: '1d4',
    properties: 'Thrown'
  },
  {
    name: 'Longbow',
    cost: '8gp',
    type: 'Range',
    range: 'Far',
    damage: '1d8',
    properties: '2 handed'
  },
  {
    name: 'Longsword',
    cost: '9gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d8',
    properties: ''
  },
  {
    name: 'Mace',
    cost: '5gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d6',
    properties: ''
  },
  {
    name: 'Shortbow',
    cost: '6gp',
    type: 'Range',
    range: 'Far',
    damage: '1d4',
    properties: '2 handed'
  },
  {
    name: 'Shortsword',
    cost: '7gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d6',
    properties: 'Thrown'
  },
  {
    name: 'Spear',
    cost: '5sp',
    type: 'M/R',
    range: 'Close / Near',
    damage: '1d6',
    properties: 'Thrown'
  },
  {
    name: 'Staff',
    cost: '5sp',
    type: 'Melee',
    range: 'Close',
    damage: '1d4',
    properties: '2 handed'
  },
  {
    name: 'Warhammer',
    cost: '10gp',
    type: 'Melee',
    range: 'Close',
    damage: '1d10',
    properties: '2 handed'
  },
];