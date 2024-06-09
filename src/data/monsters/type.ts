export type Monster = {
  name: string;
  flavourText: string;
  attacks: string;
  alignment: string;
  level: string;
  stats: {
    str: string;
    dex: string;
    con: string;
    int: string;
    wis: string;
    cha: string;
    hp: string;
    ac: string;
    mv: string;
  },
  specials: {
    name: string;
    text: string;
  }[]
};