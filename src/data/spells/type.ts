export type Spell = {
  name: string;
  tier: number;
  class: string[];
  duration: string;
  range: "Self" | "Close" | "Near" | "Far" | "Unlimited";
  text: string;
};
