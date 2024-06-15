export type SpellClass = {
  wizard?: boolean;
  priest?: boolean;
  seer?: boolean;
  ovate?: boolean;
  shamanic?: boolean;
  graveWarden?: boolean;
  witch?: boolean;
};

export function spellClassToString(classes: SpellClass) {
  let list: string[] = [];
  if (classes.wizard
  ) {
    list.push('wizard');
  }
  if (classes.priest) {
    list.push('priest');
  }
  if (classes.seer) {
    list.push('seer');
  }
  if (classes.ovate) {
    list.push('ovate');
  }
  if (classes.shamanic) {
    list.push('shaman');
  }
  if (classes.graveWarden) {
    list.push('grave warden');
  }
  if (classes.witch) {
    list.push('witch');
  }
  return list.join(', ');
}

export type Spell = {
  name: string;
  tier: number;
  class: SpellClass;
  duration: string;
  range: "Self" | "Close" | "Near" | "Far" | "Unlimited";
  text: string;
};
