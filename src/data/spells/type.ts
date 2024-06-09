export type SpellClass = {
  wizard?: boolean;
  priest?: boolean;
  seer?: boolean;
  ovate?: boolean;
  shamanic?: boolean;
  graveWarden?: boolean;
  witch?: boolean;
};

export type Spell = {
  name: string;
  tier: number;
  class: SpellClass;
  duration: string;
  range: "Self" | "Close" | "Near" | "Far" | "Unlimited";
  text: string;
};
