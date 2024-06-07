import type { Monster } from "./type";
export const monsters: Monster[] = [
  {
    name: "ABOLETH",
    flavourText: "Enormous, antediluvian catfish covered in slime and tentacles. They hate all intelligent beings.",
    attacks: "2 tentacle (near) +5 (1d8 + curse) or 1 tail +5 (3d6)", stats: { ac: "16", hp: "39", mv: "near (swim)", str: "+4", dex: "-1", con: "+3", int: "+4", wis: "+2", cha: "+2" }, alignment: "C", level: "8",
    specials: {
      Curse: "DC 15 CON or target gains a magical curse, turning into a deep one over 2d10 days.",
      Enslave: "In place of attacks, one creature within far DC 15 WIS or aboleth controls for 1d4 rounds.",
      Telepathic: "Read the thoughts of all creatures within far."
    }
  },
  {
    name: "ACOLYTE",
    flavourText: "A religious trainee who knows basic rites and rituals.",
    alignment: "L",
    level: "1",
    attacks: "1 mace +1 (1d6) or 1 spell +2",
    stats: {
      ac: "12",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "-1",
      con: "+0",
      int: "-1",
      wis: "+2",
      cha: "+0"
    },
    specials: {
      'Healing Touch (WIS Spell)': "DC 11. Heal one creature within close for 1d4 HP."
    }
  },
  {
    name: "ARCHANGEL",
    flavourText: "A radiant being with a crown of fire, snowy wings, golden armor, and a blazing greatsword.",
    alignment: "L",
    level: "16",
    attacks: "3 flaming greatsword +10 (2d12)",
    stats: {
      ac: "18 (+3 plate mail)",
      hp: "76",
      mv: "double near (fly)",
      str: "+5",
      dex: "+2",
      con: "+4",
      int: "+4",
      wis: "+5",
      cha: "+5"
    },
    specials: {
      Command: "DC 18 CHA to resist an archangel's command.",
      "Crown of Fire": "Hostile spells targeting the archangel are extreme (DC 18) to cast."
    }
  },
  {
    name: "ANGEL, DOMINI",
    flavourText: "Winged, flawless humans glowing with bronze sunlight.",
    alignment: "L",
    level: "9",
    attacks: "3 bastard sword +7 (1d8) or 1 horn",
    stats: {
      ac: "17 (plate mail + shield)",
      hp: "42",
      mv: "near (fly)",
      str: "+4",
      dex: "+1",
      con: "+2",
      int: "+3",
      wis: "+4",
      cha: "+4"
    },
    specials: {
      Horn: "All enemies in near DC 15 CHA or paralyzed 1d4 rounds."
    }
  },
  {
    name: "ANGEL, PRINCIPI",
    flavourText: "Serene humans sculpted from alabaster. Golden orbs for eyes.",
    alignment: "L",
    level: "11",
    attacks: "3 silvered bastard sword +9 (1d10)",
    stats: {
      ac: "16 (+1 plate mail)",
      hp: "53",
      mv: "double near (fly)",
      str: "+4",
      dex: "+2",
      con: "+4",
      int: "+4",
      wis: "+4",
      cha: "+4"
    },
    specials: {
      "Moonlight Aura": "Hostile spells targeting the principi are DC 15.",
      "Truesight": "Can see all invisible creatures and objects."
    }
  },
  {
    name: "ANGEL, SERAPH",
    flavourText: "Beautiful, luminous humanoids with white-feathered wings.",
    alignment: "L",
    level: "3",
    attacks: "2 longsword +3 (1d8)",
    stats: {
      ac: "14 (chainmail)",
      hp: "14",
      mv: "near (fly)",
      str: "+3",
      dex: "+1",
      con: "+1",
      int: "+2",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Bless: "3/day, touch one target to give it a luck token."
    }
  },
  {
    name: "ANIMATED ARMOR",
    flavourText: "An old suit of armor magically animated by a vengeful spirit.",
    alignment: "C",
    level: "2",
    attacks: "1 longsword +3 (1d8)",
    stats: {
      ac: "15",
      hp: "11",
      mv: "near",
      str: "+3",
      dex: "-1",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Statue: "When standing still, looks exactly like a suit of armor."
    }
  },
  {
    name: "ANKHEG",
    flavourText: "Horse-sized, rust-brown insects. They burrow vast, underground warrens into the bedrock.",
    alignment: "N",
    level: "3",
    attacks: "1 bite +4 (1d6) or 1 acid spray (near) +4 (2d6)",
    stats: {
      ac: "14",
      hp: "14",
      mv: "near (burrow)",
      str: "+2",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "APE",
    flavourText: "Hooting, omnivorous apes that live in trees.",
    alignment: "N",
    level: "2",
    attacks: "1 fist +2 (1d6) or 1 rock (far) +2 (1d4)",
    stats: {
      ac: "12",
      hp: "10",
      mv: "near (climb)",
      str: "+2",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "+0"
    },
  },
  {
    name: "APE, SNOW",
    flavourText: "White-haired, carnivorous gorillas that stalk the high mountains and live in caves.",
    alignment: "N",
    level: "4",
    attacks: "2 fist +4 (1d6) or 1 rock (far) +4 (2d6)",
    stats: {
      ac: "13",
      hp: "19",
      mv: "near (climb)",
      str: "+3",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      "Thick Fur": "Cold immune.",
    }
  },
  {
    name: "APPRENTICE",
    flavourText: "A cloaked magician with a thin, freshly bound spellbook.",
    alignment: "N",
    level: "1",
    attacks: "1 dagger (close/ near) +1 (1d4) or 1 spell +2",
    stats: {
      ac: "11",
      hp: "3",
      mv: "near",
      str: "-1",
      dex: "+1",
      con: "-1",
      int: "+2",
      wis: "+0",
      cha: "+0"
    },
    specials: {
      "Beguile (INT Spell)": "DC 11. Focus. One target in near of LV 2 or less is stupefied for the duration.",
      "Magic Bolt (INT Spell)": "DC 11. 1d4 damage to one target within far."
    }
  },
  {
    name: "AZER",
    flavourText: "Dwarves with bronze, metallic skin and flames in place of hair. Gifted blacksmiths.",
    alignment: "L",
    level: "3",
    attacks: "2 flaming warhammer +3 (1d10, ignites flammables) or 1 crossbow (far) +0 (1d6)",
    stats: {
      ac: "15",
      hp: "15",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+2",
      int: "+0",
      wis: "+0",
      cha: "+0"
    },
    specials: {
      Impervious: "Fire immune."
    }
  },
  {
    name: "ARCHMAGE",
    flavourText: "A wizened magic-user crackling with arcane power.",
    alignment: "L",
    level: "10",
    attacks: "2 spell +7",
    stats: {
      ac: "12",
      hp: "44",
      mv: "near",
      str: "-1",
      dex: "+2",
      con: "-1",
      int: "+4",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      "Death Bolt (INT Spell)": "DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP.",
      "Enervate (INT Spell)": "DC 14. Focus. One target within near is stupefied for the duration.",
      "Fireblast (INT Spell)": "DC 14. 4d6 damage to all within a near- sized cube within far.,",
      "Float (INT Spell)": "Self. DC 14. Fly double near for 5 rounds.,",
      "Mithralskin (INT Spell)": "Self. DC 14. AC becomes 18 for 5 rounds.,",
      "Void Step (INT Spell)": "Self and up to 4 willing targets. DC 15. Teleport up to 100 miles.",
    }
  },
  {
    name: "ASSASSIN",
    flavourText: "A black-cloaked, skulking killer.",
    alignment: "C",
    level: "8",
    attacks: "2 poisoned dagger (close/near) +6 (2d4)",
    stats: {
      ac: "15 (leather)",
      hp: "38",
      mv: "near (climb)",
      str: "+2",
      dex: "+4",
      con: "+2",
      int: "+2",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Execute: "Deals x3 damage against surprised targets."
    }
  },
  {
    name: "BADGER",
    flavourText: "Fierce, clawed burrowers with black-and-white face stripes.",
    alignment: "N",
    level: "1",
    attacks: "2 claw +2 (1d4)",
    stats: {
      ac: "11",
      hp: "5",
      mv: "near (burrow)",
      str: "+2",
      dex: "+0",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Rage: "1/day, immune to morale checks, +1d4 damage (3 rounds)."
    }
  },
  {
    name: "BANDIT",
    flavourText: "Hard-bitten rogue in tattered leathers and a hooded cloak.",
    alignment: "C",
    level: "1",
    attacks: "1 club +1 (1d4) or 1 shortbow (far) +0 (1d4)",
    stats: {
      ac: "13 (leather + shield)",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+0",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Ambush: "Deal an extra die of damage when undetected."
    }
  },
  {
    name: "BASILISK",
    flavourText: "Massive, muscled lizards with six legs and gray, tough hide.",
    alignment: "N",
    level: "5",
    attacks: "2 bite +4 (2d6 + petrify)",
    stats: {
      ac: "14",
      hp: "25",
      mv: "near",
      str: "+3",
      dex: "+1",
      con: "+3",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Petrify: "Any creature that touches the basilisk or meets its gaze, DC 15 CON or petrified."
    }
  },
  {
    name: "BEAR, BROWN",
    flavourText: "A hulking, swaying brute with claws as long as a finger.",
    alignment: "N",
    level: "5",
    attacks: "2 claw +4 (1d8)",
    stats: {
      ac: "13",
      hp: "25",
      mv: "near (climb)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: { Crush: "Deals an extra die of damage if it hits the same target with both claws." }
  },
  {
    name: "BEAR, POLAR",
    flavourText: "A mighty, white bear that thrives in arctic environments.",
    alignment: "N",
    level: "7",
    attacks: "2 claw +6 (2d6)",
    stats: {
      ac: "13",
      hp: "34",
      mv: "near (climb)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: { Crush: "Deals an extra die of damage if it hits the same target with both claws." }
  },
  {
    name: "Thick Fur. Cold immune. BEASTMAN",
    flavourText: "A cave hominid with scraggly fur and a stone-tipped spear.",
    alignment: "C",
    level: "1",
    attacks: "1 spear (close/near) +2 (1d6 + 1)",
    stats: {
      ac: "12 (leather)",
      hp: "5",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-1"
    },
    specials: { Brutal: "+1 damage with melee weapons (included)." }
  },
  {
    name: "BAT, GIANT",
    flavourText: "Leathery, eagle-sized mammal with a taste for flesh.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +2 (1d6)",
    stats: {
      ac: "12",
      hp: "9",
      mv: "near (fly)",
      str: "-1",
      dex: "+2",
      con: "+0",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "BAT, SWARM",
    flavourText: "A whirling cloud of screeching, bloodthirsty bats.",
    alignment: "N",
    level: "4",
    attacks: "3 bite +2 (1d6)",
    stats: {
      ac: "12",
      hp: "18",
      mv: "near (fly)",
      str: "-3",
      dex: "+2",
      con: "+0",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "BERSERKER",
    flavourText: "Howling, battleraging warriors.",
    alignment: "N",
    level: "2",
    attacks: "1 greataxe +2 (1d10) or 1 spear (close/near) +2 (1d6)",
    stats: {
      ac: "12 (leather)",
      hp: "10",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
    specials: { Rage: "1/day, immune to morale checks, +1d4 damage (3 rounds)." }
  },
  {
    name: "BLACK PUDDING",
    flavourText: "A black, ice-cold mass of sludge.",
    alignment: "N",
    level: "6",
    attacks: "3 tentacle +4 (2d6)",
    stats: {
      ac: "9",
      hp: "30",
      mv: "near (climb)",
      str: "+2",
      dex: "-1",
      con: "+3",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Impervious: "Only damaged by fire.",
      Corrosive: "Wood or metal that touches the ooze dissolves on a d6 roll of 1-3."
    }
  },
  {
    name: "BOAR",
    flavourText: "Ornery wild pig with bristly, russet hair and yellowed tusks.",
    alignment: "N",
    level: "3",
    attacks: "2 tusk +3 (1d6)",
    stats: {
      ac: "12",
      hp: "14",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: { Gore: "Deals an extra die of damage if it hits the same target with both tusks." },
  },
  {
    name: "BRAIN EATER",
    flavourText: "Purple, gaunt humanoids with squidlike heads and four face tentacles. They live in complex, alien societies underground and eat humanoid brains.",
    alignment: "C",
    level: "8",
    attacks: "4 tentacle +5 (1d8 + latch) or 1 mind blast or 1 mind control",
    stats: {
      ac: "14 (leather)",
      hp: "36",
      mv: "near",
      str: "+2",
      dex: "+3",
      con: "+0",
      int: "+4",
      wis: "+2",
      cha: "+4"
    },
    specials: {
      "Hear Thoughts": "Can hear the surface thoughts of all intelligent creatures within near.",
      Latch: "Tentacles attach to hit targets, automatically hitting the next round (DC 12 STR on turn to remove 1d4 tentacles). If all four remain latched onto the same humanoid target for 1 round, the target's brain is ripped out and devoured.",
      "Mind Blast": "Fills a near-sized cube extending from brain eater. DC 15 INT or 3d6 damage and paralyzed 1d4 rounds.",
      "Mind Control": "One target in near DC 15 CHA or brain eater controls for 1d4 rounds. ",
    }
  },
  {
    name: "BUGBEAR",
    flavourText: "Brutish, bat-eared goblinoids covered in brown fur.",
    alignment: "C",
    level: "3",
    attacks: "2 spiked mace +3 (1d6)",
    stats: {
      ac: "13 (leather + shield)",
      hp: "14",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "-1",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Stealthy: "ADV on checks to sneak and hide."
    }
  },
  {
    name: "BULETTE",
    flavourText: "A hulking, shark-sized lizard with a steely, arrow-shaped carapace and a massive gullet.",
    alignment: "N",
    level: "8",
    attacks: "3 bite +5 (2d6) or 1 leap",
    stats: {
      ac: "17",
      hp: "40",
      mv: "near (burrow)",
      str: "+5",
      dex: "+1",
      con: "+4",
      int: "-3",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Leap: "Jump up to near in height and double near in distance, then make 2 bite attacks."
    }
  },
  {
    name: "CAMEL",
    flavourText: "Ornery, tan-furred desert beasts.",
    alignment: "N",
    level: "2",
    attacks: "1 hoof +3 (1d6) or 1 spit (near) +0 (1d4)",
    stats: {
      ac: "10",
      hp: "12",
      mv: "double near",
      str: "+3",
      dex: "+0",
      con: "+3",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "CAVE BRUTE",
    flavourText: "A hulking, insectoid beast with long mandibles, four eyes, and thick arms covered in bristles.",
    alignment: "N",
    level: "6",
    attacks: "2 claw +5 (1d8) and 1 mandible +5 (1d10)",
    stats: {
      ac: "14",
      hp: "28",
      mv: "near (burrow)",
      str: "+4",
      dex: "+1",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Bewilder: "Creatures within near that see the cave brute's eyes, DC 12 CHA at start of their turn or dazed and no action."
    }
  },
  {
    name: "CAVE CREEPER",
    flavourText: "Chittering, green centipedes the size of horses. Their grasping tentacles are coated in a paralytic venom.",
    alignment: "N",
    level: "4",
    attacks: "1 bite +3 (1d6) and 1 tentacles +3 (1d8 + toxin)",
    stats: {
      ac: "12",
      hp: "18",
      mv: "near (climb)",
      str: "+2",
      dex: "+2",
      con: "+0",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Toxin: "DC 12 CON or paralyzed 1d4 rounds."
    }
  },
  {
    name: "CENTAUR",
    flavourText: "Herd-dwelling beings with the upper body of a human and lower body of a horse.",
    alignment: "N",
    level: "3",
    attacks: "2 spear (close/near) +2 (1d6) or 1 longbow (far) +1 (1d8)",
    stats: {
      ac: "12 (leather)",
      hp: "14",
      mv: "double near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "+0",
      wis: "+2",
      cha: "+1"
    },
  },
  {
    name: "CENTIPEDE, GIANT",
    flavourText: "Blood-red, feathery centipedes the size of a human arm. Their bite injects a burning poison that cramps muscles.",
    alignment: "N",
    level: "1",
    attacks: "1 bite +1 (1d4 + poison)",
    stats: {
      ac: "11",
      hp: "4",
      mv: "near (climb)",
      str: "-3",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Poison: "DC 12 CON or paralyzed 1d4 rounds."
    }
  },
  {
    name: "CENTIPEDE, SWARM",
    flavourText: "A crawling mass of weaving, sinuous centipedes.",
    alignment: "N",
    level: "4",
    attacks: "3 bite +1 (1d4 + poison)",
    stats: {
      ac: "11",
      hp: "18",
      mv: "near (climb)",
      str: "-3",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Poison: "DC 12 CON or paralyzed 1d4 rounds."
    }
  },
  {
    name: "CHIMERA",
    flavourText: "A monstrous beast with a half-goat, half-lion body, wide dragon wings, and the heads of a goat, lion, and dragon.",
    alignment: "C",
    level: "10",
    attacks: "4 rend +7 (2d8) and 1 fire breath",
    stats: {
      ac: "16",
      hp: "49",
      mv: "double near (fly)",
      str: "+5",
      dex: "+4",
      con: "+4",
      int: "-3",
      wis: "+2",
      cha: "-1"
    },
    specials: {
      "Fire Breath": "Fills a near-sized cube extending from chimera. DC 15 DEX or 4d6 damage."
    }
  },
  {
    name: "CHUUL",
    flavourText: "Brown, horse-sized lobster bugs with tentacles and pincers.",
    alignment: "C",
    level: "5",
    attacks: "2 pincer +4 (1d8 + grab)",
    stats: {
      ac: "15",
      hp: "25",
      mv: "near (swim)",
      str: "+3",
      dex: "-1",
      con: "+3",
      int: "-1",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Grab: "DC 15 STR or held in pincer. DC 15 STR on turn to break free."
    }
  },
  {
    name: "CLOAKER",
    flavourText: "A midnight blue manta ray with a bony tail and crescent-shaped maw above its belly. It swoops through deep, lightless caverns.",
    alignment: "C",
    level: "6",
    attacks: "3 lash +4 (1d8) or 1 screech",
    stats: {
      ac: "13",
      hp: "28",
      mv: "near (fly)",
      str: "+2",
      dex: "+3",
      con: "+1",
      int: "+1",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Phantoms: "1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits cloaker or illusions.",
      Screech: "Enemies within double near DC 15 WIS or DISADV on attacks and checks 1d4 rounds."
    }
  },
  {
    name: "COCKATRICE",
    flavourText: "A molting, lizard-chicken hybrid with a crimson, razorlike crest.",
    alignment: "N",
    level: "3",
    attacks: "1 bite +1 (1d4 + petrify)",
    stats: {
      ac: "11",
      hp: "14",
      mv: "near (fly)",
      str: "-2",
      dex: "+1",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Petrify: "DC 12 CON or petrified."
    }
  },
  {
    name: "COUATL",
    flavourText: "A human-sized snake with scales made of jewels and a corona of iridescent feathers.",
    alignment: "L",
    level: "9",
    attacks: "3 bite +6 (2d6 + poison)",
    stats: {
      ac: "16",
      hp: "42",
      mv: "near (fly)",
      str: "+2",
      dex: "+3",
      con: "+2",
      int: "+4",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      "Change Shape": "In place of attacks, transform into any similarly-sized creature.",
      Poison: "DC 15 CON or fall into natural, deep sleep for 1d8 hours.",
      Restore: "In place of attacks, touch one creature to remove a curse, affliction, or heal 3d8 HP."
    }
  },
  {
    name: "CRAB, GIANT",
    flavourText: "A wagon-sized, armored crab with two crushing pincers.",
    alignment: "N",
    level: "5",
    attacks: "2 pincer +4 (1d8 + crush)",
    stats: {
      ac: "15",
      hp: "24",
      mv: "near (swim)",
      str: "+3",
      dex: "+0",
      con: "+2",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Crush: "DC 15 STR or target takes 1d8 damage."
    }
  },
  {
    name: "CROCODILE",
    flavourText: "Fat, scaly reptiles with stumpy legs and long, thrashing tails.",
    alignment: "N",
    level: "4",
    attacks: "2 bite +3 (1d8)",
    stats: {
      ac: "14",
      hp: "20",
      mv: "near (swim)",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "CULTIST",
    flavourText: "A cloaked, wild-eyed zealot chanting the guttural prayers of a dark god.",
    alignment: "C",
    level: "2",
    attacks: "1 longsword +1 (1d8) or 1 spell +2",
    stats: {
      ac: "14 (chainmail + shield)",
      hp: "9",
      mv: "near",
      str: "+1",
      dex: "-1",
      con: "+0",
      int: "-1",
      wis: "+2",
      cha: "+0"
    },
    specials: {
      Fearless: "Immune to morale checks.",
      "Deathtouch (WIS Spell)": "DC 12. 2d4 damage to one creature within close."
    }
  },
  {
    name: "CYCLOPS",
    flavourText: "Reclusive, one-eyed giants towering 20' high. They live simply on remote farmlands.",
    alignment: "C",
    level: "8",
    attacks: "2 greatclub +7 (2d8) or 1 rock (far) +5 (1d12)",
    stats: {
      ac: "11 (leather)",
      hp: "38",
      mv: "double near",
      str: "+5",
      dex: "+0",
      con: "+2",
      int: "-1",
      wis: "-2",
      cha: "+0"
    },
  },
  {
    name: "DARKMANTLE",
    flavourText: "A floating, black octopus with rows of red eyes and a webbed skirt of tentacles.",
    alignment: "N",
    level: "1",
    attacks: "1 bite +3 (1d4) or 1 darkness",
    stats: {
      ac: "13",
      hp: "4",
      mv: "near (fly)",
      str: "-2",
      dex: "+3",
      con: "+0",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Darkness: "Extinguish all light sources in near."
    }
  },
  {
    name: "DEEP ONE",
    flavourText: "Cultish, amphibious fish-people with bulbous eyes. They lurk in deep water and sunless caverns.",
    alignment: "C",
    level: "2",
    attacks: "2 spear (close/ near) +2 (1d6)",
    stats: {
      ac: "13",
      hp: "10",
      mv: "near (swim)",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Sunblind: "Blinded in bright light."
    }
  },
  {
    name: "DEMON, BALOR",
    flavourText: "Colossal, horned bat-beasts wreathed in the flames of hell itself. Their mighty swords and cracking whips of fire can slice through stone.",
    alignment: "C",
    level: "16",
    attacks: "3 greatsword +10 (2d12 + hellfire) and 1 fire whip (near) +10 (2d6 + grab)",
    stats: {
      ac: "19",
      hp: "77",
      mv: "double near (fly)",
      str: "+6",
      dex: "+2",
      con: "+5",
      int: "+4",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Impervious: "Fire immune. Only damaged by magical sources.",
      Grab: "DC 18 STR or target bound in whip. 2d6 damage per round held, DC 18 STR on turn to break free. In place of fire whip attack, balor can fling a grabbed target double near on its turn.",
      Hellfire: "DC 18 DEX or 2d8 damage per round until flames extinguished."
    }
  },
  {
    name: "DEMON, DRETCH",
    flavourText: "Green, pig-faced demons with thick claws and an oily stench.",
    alignment: "C",
    level: "2",
    attacks: "1 claw +2 (1d6) or 1 gas",
    stats: {
      ac: "12",
      hp: "11",
      mv: "near",
      str: "+2",
      dex: "+0",
      con: "+2",
      int: "-2",
      wis: "-1",
      cha: "-3"
    },
    specials: {
      Gas: "All in near DC 12 CON or blinded for 1d4 rounds."
    }
  },
  {
    name: "DEMON, GLABREZU",
    flavourText: "Horse-headed, fanged creatures who walk upright and have four arms; two shriveled, and two ending in hulking pincers.",
    alignment: "C",
    level: "8",
    attacks: "2 pincer +7 (2d8 + crush)",
    stats: {
      ac: "15",
      hp: "40",
      mv: "near",
      str: "+4",
      dex: "+1",
      con: "+4",
      int: "+3",
      wis: "+2",
      cha: "+2"
    },
    specials: { Crush: "DC 15 STR or target takes 2d8 damage." }
  },
  {
    name: "DEMON, MARILITH",
    flavourText: "Hissing, armored women with six limbs and the lower bodies of giant snakes. Six whirling blades flash in their hands.",
    alignment: "C",
    level: "9",
    attacks: "6 longsword +7 (1d8)",
    stats: {
      ac: "17 (plate mail)",
      hp: "43",
      mv: "near (climb)",
      str: "+5",
      dex: "+4",
      con: "+3",
      int: "+3",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Parry: "Trade 2 longsword attacks next round to deflect a melee attack that would hit."
    }
  },
  {
    name: "DEMON, VROCK",
    flavourText: "Wagon-sized, filthy vultures with four limbs, midnight-blue skin, and a rash of mangy feathers.",
    alignment: "C",
    level: "5",
    attacks: "2 talons +4 (1d8) or 1 screech",
    stats: {
      ac: "14",
      hp: "24",
      mv: "near (fly)",
      str: "+2",
      dex: "+2",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      "Carrion Mist": "Each time vrock is hit, 3:6 chance of carrion mist in near-sized cube centered on vrock. All enemies DC 15 CON or violent vomiting 1d4 rounds.",
      Screech: "All enemies in double near DC 12 WIS or DISADV on checks and attacks for 1d4 rounds. "
    }
  },
  {
    name: "ARCHDEVIL",
    flavourText: "A stunningly beautiful, horned human with burning, red eyes and a halo of seven black stars. Two stitched-up gashes weep blood from its shoulder blades.",
    alignment: "C",
    level: "16",
    attacks: "4 iron scepter +10 (3d10) or 1 soulbind",
    stats: {
      ac: "19",
      hp: "76",
      mv: "far (teleport)",
      str: "+5",
      dex: "+4",
      con: "+4",
      int: "+5",
      wis: "+4",
      cha: "+7"
    },
    specials: {
      Impervious: "Fire immune. Only damaged by magical sources.",
      "Crown of Darkness": "All hostile spells are reflected at caster with a spellcasting check less than 20.",
      Soulbind: "All targets within near DC 20 CHA or fall under control of archdevil for 1d4 rounds. DC 20 CHA on turn to end the effect."
    }
  },
  {
    name: "DEVIL, BARBED",
    flavourText: "Lanky, green-mottled fiends bristling with hooked spines.",
    alignment: "C",
    level: "3",
    attacks: "2 spine (near) +3 (1d6 + barb) or 1 fire blast (far) +3 (1d8)",
    stats: {
      ac: "13",
      hp: "14",
      mv: "near",
      str: "+2",
      dex: "+3",
      con: "+1",
      int: "+1",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      Barb: "Each spine sticks, dealing 1d4 damage each round. DC 12 STR check on turn to remove."
    }
  },
  {
    name: "DEVIL, CUBI",
    flavourText: "Entrancing humanoids with bat wings and devilish charm.",
    alignment: "C",
    level: "6",
    attacks: "1 kiss +4 (1d6 + drain) or 1 charm",
    stats: {
      ac: "14",
      hp: "29",
      mv: "near (fly)",
      str: "+2",
      dex: "+4",
      con: "+2",
      int: "+3",
      wis: "+2",
      cha: "+5"
    },
    specials: {
      "Change Shape": "In place of attacks, transform into any similarly-sized humanoid.",
      Charm: "One humanoid in near DC 15 CHA or bewitched by cubi for 1d6 hours.",
      Drain: "The target takes 1d6 WIS damage. A target reduced to 0 WIS this way swears its soul to an archdevil."
    }
  },
  {
    name: "DEVIL, ERINYES",
    flavourText: "Raven-winged, resplendent beings in polished, black armor and helms with curved horns.",
    alignment: "C",
    level: "9",
    attacks: "3 greatsword +8 (1d12) or 2 longbow (far) +8 (1d8 + poison)",
    stats: {
      ac: "17 (+1 plate mail)",
      hp: "43",
      mv: "double near (fly)",
      str: "+4",
      dex: "+4",
      con: "+3",
      int: "+4",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      Poison: "DC 15 CON or target's eyes go jet black and it turns on its allies for 1d4 rounds. DC 15 WIS on turn to end effect."
    }
  },
  {
    name: "DEVIL, HORNED",
    flavourText: "Iron-scaled hellions as big as ogres with weighty ram horns, lashing tails, and leathery wings. They are opportunistic and craven in battle.",
    alignment: "C",
    level: "7",
    attacks: "2 burning trident (near) +7 (2d6) or 1 fire blast (far) +4 (2d8)",
    stats: {
      ac: "16",
      hp: "35",
      mv: "double near (fly)",
      str: "+5",
      dex: "+2",
      con: "+4",
      int: "+2",
      wis: "+1",
      cha: "+2"
    },
    specials: {
      "Iron Hide": "Half damage from non-magical weapons."
    }
  },
  {
    name: "DEVIL, IMP",
    flavourText: "Cat-sized, red devils with oversized wings and tail, tiny horns, and cowardly demeanors.",
    alignment: "C",
    level: "2",
    attacks: "1 stinger +3 (1d4 + poison)",
    stats: {
      ac: "13",
      hp: "9",
      mv: "near (fly)",
      str: "-2",
      dex: "+3",
      con: "+0",
      int: "+1",
      wis: "+0",
      cha: "+2"
    },
    specials: {
      Impervious: "Fire immune.",
      Contract: "Can grant mighty boons and patronage on behalf of an archdevil in exchange for a sworn soul. ADV on related Charisma checks.",
      Poison: "DC 12 CON or fitful sleep for 1d4 hours."
    }
  },
  {
    name: "BRACHIOSAURUS",
    flavourText: "Colossal, long-necked tree grazers. Slow and peaceful.",
    alignment: "N",
    level: "12",
    attacks: "3 stomp +7 (2d10)",
    stats: {
      ac: "13",
      hp: "57",
      mv: "double near",
      str: "+6",
      dex: "-1",
      con: "+3",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "PLESIOSAURUS",
    flavourText: "Aquatic reptiles as big as elephants. Flat flippers and narrow, toothy maws on long necks.",
    alignment: "N",
    level: "6",
    attacks: "2 bite +5 (2d8)",
    stats: {
      ac: "13",
      hp: "30",
      mv: "double near (swim)",
      str: "+4",
      dex: "+3",
      con: "+3",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "PTERODACTYL",
    flavourText: "Long-beaked beasts with wide, triangular wings. Large enough to carry off a human.",
    alignment: "N",
    level: "4",
    attacks: "2 beak +4 (1d8 + grab)",
    stats: {
      ac: "14",
      hp: "20",
      mv: "double near (fly)",
      str: "+2",
      dex: "+4",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Grab: "DC 15 STR or held. DC 15 STR on turn to break free."
    }
  },
  {
    name: "TRICERATOPS",
    flavourText: "Plodding herbivores with a wide, bony skull frill and three horns.",
    alignment: "N",
    level: "7",
    attacks: "2 horns +6 (1d10) or 1 charge",
    stats: {
      ac: "17",
      hp: "35",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+4",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Charge: "Move up to double near in straight line and make 1 horn attack. If hit, x3 damage."
    }
  },
  {
    name: "TYRANNOSAURUS",
    flavourText: "Towering, bipedal lizards with a massive head, jaws, and neck.",
    alignment: "N",
    level: "9",
    attacks: "3 bite +8 (2d12)",
    stats: {
      ac: "13",
      hp: "44",
      mv: "double near",
      str: "+5",
      dex: "+1",
      con: "+4",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "VELOCIRAPTOR",
    flavourText: "Fast, turkey-sized raptors with vicious toe claws. Pack hunters.",
    alignment: "N",
    level: "2",
    attacks: "1 claw +3 (1d6)",
    stats: {
      ac: "13",
      hp: "10",
      mv: "double near",
      str: "-1",
      dex: "+3",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Clever: "+1d4 damage when attacking with surprise."
    }
  },
  {
    name: "DJINNI",
    flavourText: "Azure-blue, jovial humanoids made of air and roiling wind. Infused with potent magic.",
    alignment: "N",
    level: "10",
    attacks: "3 scimitar +7 (1d12) or 1 whirlwind",
    stats: {
      ac: "14",
      hp: "48",
      mv: "double near (fly)",
      str: "+4",
      dex: "+4",
      con: "+3",
      int: "+4",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Impervious: "Only damaged by magical sources.",
      Whirlwind: "Transform into a lashing tornado. All enemies within near DC 18 DEX or thrown 2d100 feet in a random direction.",
      Wish: "Cast wish once a week for a mortal, no spellcasting check.",
    }
  },
  {
    name: "DOPPELGANGER",
    flavourText: "Gray, featureless humanoids that delight in sowing chaos.",
    alignment: "C",
    level: "4",
    attacks: "1 dagger (close/near) +2 (1d4)",
    stats: {
      ac: "12",
      hp: "20",
      mv: "near",
      str: "+1",
      dex: "+2",
      con: "+2",
      int: "+1",
      wis: "+0",
      cha: "+4"
    },
    specials: {
      "Change Shape": "In place of attacks, transform into any similarly-sized humanoid.",
      Telepathy: "Can secretly hear the surface thoughts of all humanoids within near."
    }
  },
  {
    name: "DRAGON, DESERT",
    flavourText: "The smell of ozone precedes this desert-dwelling dragon. Its dazzling scales of brass and lapis lazuli shimmer in the baking heat.",
    alignment: "L",
    level: "13",
    attacks: "3 rend +9 (2d10) or 1 lightning breath",
    stats: {
      ac: "17",
      hp: "61",
      mv: "double near (fly)",
      str: "+5",
      dex: "+3",
      con: "+3",
      int: "+4",
      wis: "+5",
      cha: "+5"
    },
    specials: {
      Stormblood: "Electricity immune.",
      "Lightning Breath": "A straight line (5' wide) extending double near from dragon. DC 15 DEX or 4d8 damage (DISADV on check if wearing metal armor).",
      Mirage: "1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits dragon or illusions."
    }
  },
  {
    name: "DRAGON, FIRE",
    flavourText: "Blood-red scales cover the hide of this mighty, volcanic wyrm. Leaping flames glow at the back of its throat.",
    alignment: "C",
    level: "17",
    attacks: "4 rend +11 (2d12) or 1 fire breath",
    stats: {
      ac: "18",
      hp: "80",
      mv: "double near (fly)",
      str: "+6",
      dex: "+5",
      con: "+4",
      int: "+4",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      Fireblood: "Fire immune.",
      "Fire Breath": "Fills a double near- sized cube extending from dragon. DC 15 DEX or 6d10 damage."
    }
  },
  {
    name: "DRAGON, FOREST",
    flavourText: "The smell of wet loam follows this dragon. Its jade scales bristle with barbed thorns.",
    alignment: "N",
    level: "12",
    attacks: "3 rend +8 (2d8) or 1 poison breath",
    stats: {
      ac: "16",
      hp: "58",
      mv: "double near (fly)",
      str: "+4",
      dex: "+3",
      con: "+4",
      int: "+3",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      "Animate Plants": "1/day, in place of attacks. Vines grab at all enemies within double near of dragon. DC 15 DEX or unable to move 1d4 rounds.",
      "Poison Breath": "Fills a near-sized cube extending from dragon. DC 15 CON or 3d8 damage."
    }
  },
  {
    name: "DRAGON, FROST",
    flavourText: "Prismatic ice lines the horns, spines, and wings of this pearly dragon. Clouds of steam hiss from its ice-rimed jaws.",
    alignment: "N",
    level: "14",
    attacks: "4 rend +9 (2d10) or 1 ice breath",
    stats: {
      ac: "17",
      hp: "68",
      mv: "double near (fly)",
      str: "+4",
      dex: "+3",
      con: "+5",
      int: "+3",
      wis: "+4",
      cha: "+3"
    },
    specials: {
      Frostblood: "Cold immune.",
      "Ice Breath": "Fills a double near- sized cube extending from dragon. DC 15 DEX or 4d8 damage and frozen for 1 round."
    }
  },
  {
    name: "DRAGON, SEA",
    flavourText: "A warm sea breeze blows around this amphibious, gold- scaled wyrm. A beard of tendrils covers its snout, and a blue mane billows along its neck.",
    alignment: "L",
    level: "16",
    attacks: "4 rend +10 (2d10) or 1 steam breath or 1 water spout",
    stats: {
      ac: "17",
      hp: "76",
      mv: "double near (fly, swim)",
      str: "+5",
      dex: "+6",
      con: "+4",
      int: "+4",
      wis: "+5",
      cha: "+5"
    },
    specials: {
      "Steam Breath": "Fills a double near-sized cube extending from dragon. DC 15 DEX or 4d12 damage.",
      "Water Spout": "Fills a near-sized cube within far. DC 15 STR or creatures inside flung 2d100 feet in a random direction."
    }
  },
  {
    name: "DRAGON, SWAMP",
    flavourText: "This black, wingless beast slithers through dank swamps.",
    alignment: "C",
    level: "12",
    attacks: "3 rend +8 (2d10) or 1 smog breath",
    stats: {
      ac: "16",
      hp: "58",
      mv: "double near (burrow, swim)",
      str: "+5",
      dex: "+3",
      con: "+4",
      int: "+4",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      "Smog Breath": "Fills a near-sized cube extending from dragon. DC 15 CON or 2d10 damage and blinded for 1 round."
    }
  },
  {
    name: "DROW",
    flavourText: "A graceful, shadowy elf that pounces like a spider.",
    alignment: "C",
    level: "2",
    attacks: "1 poison dart (near) +3 (1d4 + poison) or 1 longsword +1 (1d8)",
    stats: {
      ac: "16 (mithral chainmail)",
      hp: "9",
      mv: "near",
      str: "+0",
      dex: "+3",
      con: "+0",
      int: "+1",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      Poison: "DC 15 CON or sleep. Sunblind. Blinded in bright light."
    }
  },
  {
    name: "DROW, DRIDER",
    flavourText: "A monstrosity with the body of a giant spider and torso of a drow.",
    alignment: "C",
    level: "6",
    attacks: "3 longsword +3 (1d8) or 2 longbow (far) +3 (1d8 + poison)",
    stats: {
      ac: "16 (mithral chainmail)",
      hp: "29",
      mv: "near (climb)",
      str: "+3",
      dex: "+3",
      con: "+2",
      int: "+2",
      wis: "+2",
      cha: "+0"
    },
    specials: {
      Poison: "DC 15 CON or paralyzed 1d4 rounds.",
      Sunblind: "Blinded in bright light."
    }
  },
  {
    name: "DROW, PRIESTESS",
    flavourText: "A statuesque female drow with a crown of metal spider webs and an imperious gaze.",
    alignment: "C",
    level: "6",
    attacks: "3 snake whip (near) +4 (1d8 + poison) or 1 spell +4",
    stats: {
      ac: "16 (mithral chainmail)",
      hp: "28",
      mv: "near",
      str: "+2",
      dex: "+3",
      con: "+1",
      int: "+3",
      wis: "+4",
      cha: "+3"
    },
    specials: {
      Poison: "DC 15 CON or paralyzed 1d4 rounds.",
      Sunblind: "Blinded in bright light.",
      "Snuff (WIS Spell)": "DC 12. Extinguish all light sources (even magical) within near.",
      "Summon Spiders (WIS Spell)": "DC 14. Summon 2d4 loyal giant spiders that appear within near. They stay for 5 rounds.",
      "Web (WIS Spell)": "DC 13. A near- sized cube of webs within far immobilizes all inside it for 5 rounds. DC 15 STR on turn to break free."
    }
  },
  {
    name: "DRUID",
    flavourText: "A wizard of the wilds holding a knotted staff and wearing a mossy cloak of deep viridian.",
    alignment: "N",
    level: "7",
    attacks: "1 staff +0 (1d4) or 2 spell +5",
    stats: {
      ac: "11",
      hp: "31",
      mv: "near",
      str: "+0",
      dex: "+1",
      con: "+0",
      int: "+4",
      wis: "+3",
      cha: "+0"
    },
    specials: {
      "Barkskin (INT Spell)": "Self. DC 13. AC becomes 15 for 5 rounds.",
      "Conjure Flames (INT Spell)": "DC 12. One target in far takes 2d6 damage.",
      "Imbue (INT Spell)": "Self. DC 13. Staff becomes a +3 magic weapon for 10 rounds.",
      "Summon Bear (INT Spell)": "DC 14. Summon a loyal brown bear that appears within near. It stays for 5 rounds.",
      "Thunderclap (INT Spell)": "DC 13. Fills a near-sized cube extending from druid. Creatures within are thrown 2d20 feet in a random direction.",
    }
  },
  {
    name: "DRYAD",
    flavourText: "A coy, emerald-skinned fey covered in leaves. It bonds with and protects a tree.",
    alignment: "N",
    level: "4",
    attacks: "1 staff -1 (1d4) or 1 charm",
    stats: {
      ac: "13",
      hp: "19",
      mv: "near",
      str: "-1",
      dex: "+2",
      con: "+1",
      int: "+1",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Charm: "Near, one creature, DC 14 CHA or friendship for 1d8 days.",
      Meld: "Step inside bonded tree."
    }
  },
  {
    name: "DUERGAR",
    flavourText: "Gray-skinned, greedy dwarves with bald pates and white beards. They dwell in somber castles deep within the earth filled with stolen treasures and enslaved prisoners.",
    alignment: "C",
    level: "2",
    attacks: "1 war pick +2 (1d6)",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "12",
      mv: "near",
      str: "+2",
      dex: "+0",
      con: "+3",
      int: "+0",
      wis: "-1",
      cha: "-1"
    },
    specials: {
      Enlarge: "1/day, +1d6 damage on melee attacks and ADV on STR checks for 3 rounds.",
      Invisibility: "1/day, turn invisible for 3 rounds. Ends if duergar attacks.",
      Sunblind: "Blinded in bright light."
    }
  },
  {
    name: "DUNG BEETLE, GIANT",
    flavourText: "A trundling, barrel-sized beetle with a T-shaped horn.",
    alignment: "N",
    level: "2",
    attacks: "1 horn +1 (1d4 + knock)",
    stats: {
      ac: "13",
      hp: "10",
      mv: "near",
      str: "+1",
      dex: "-1",
      con: "+1",
      int: "-3",
      wis: "-1",
      cha: "-3"
    },
    specials: {
      Knock: "DC 9 STR or pushed a close distance and fall down."
    }
  },
  {
    name: "EFREETI",
    flavourText: "Blood-red, towering humanoids formed of lava and ash. Short, black horns and snarling grins.",
    alignment: "C",
    level: "9",
    attacks: "3 scimitar +8 (2d10) or 2 fire bolt (far) +5 (2d6)",
    stats: {
      ac: "15",
      hp: "43",
      mv: "near (fly)",
      str: "+5",
      dex: "+2",
      con: "+3",
      int: "+3",
      wis: "+2",
      cha: "+3"
    },
    specials: {
      Impervious: "Only damaged by magical sources. Fire immune.",
      "Wall of Flame": "1/day, 20' high curtain of fire, double near length. Touching it deals 4d8 damage. Lasts 2d4 rounds.",
      Wish: "Cast wish once a week for a mortal, no spellcasting check."
    }
  },
  {
    name: "ELEMENTAL, AIR",
    flavourText: "A howling tornado of wind.",
    alignment: "N",
    level: "6/9",
    attacks: "3 slam +7 (2d6/3d6) or 1 whirlwind",
    stats: {
      ac: "16",
      hp: "29/42",
      mv: "double near (fly)",
      str: "+3",
      dex: "+5",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Only damaged by magical sources.",
      Whirlwind: "All within close DC 15 DEX or flung 2d20 feet in random direction.",
    }
  },
  {
    name: "ELEMENTAL, EARTH",
    flavourText: "A thundering pillar of earth.",
    alignment: "N",
    level: "6/9",
    attacks: "3 slam +7 (2d8/3d8) or 1 avalanche",
    stats: {
      ac: "17",
      hp: "31/44",
      mv: "near (burrow)",
      str: "+5",
      dex: "+0",
      con: "+4",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Only damaged by magical sources.",
      Avalanche: "All within close DC 15 STR or entombed for 1d4 rounds under mounds of earth.",
    }
  },
  {
    name: "ELEMENTAL, FIRE",
    flavourText: "A roaring column of flames.",
    alignment: "N",
    level: "6/9",
    attacks: "3 slam +6 (2d10/3d10) or 1 inferno",
    stats: {
      ac: "15",
      hp: "30/43",
      mv: "near (fly)",
      str: "+4",
      dex: "+3",
      con: "+3",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Only damaged by magical sources. Fire immune.",
      Inferno: "All within near DC 15 DEX or 3d8 damage."
    }
  },
  {
    name: "ELEMENTAL, WATER",
    flavourText: "A crashing vortex of water.",
    alignment: "N",
    level: "6/9",
    attacks: "3 slam +6 (2d6/3d6) or 1 whirlpool",
    stats: {
      ac: "15",
      hp: "29/42",
      mv: "double near (swim)",
      str: "+4",
      dex: "+2",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Only damaged by magical sources.",
      Whirlpool: "All within close DC 15 STR or immobilized inside water elemental (treat as underwater). DC 15 STR on turn to escape. ",
    }
  },
  {
    name: "ELEPHANT",
    flavourText: "Mighty mammals with tough hide, flappy ears, and a trunk.",
    alignment: "N",
    level: "7",
    attacks: "2 tusks +6 (1d8)",
    stats: {
      ac: "14",
      hp: "34",
      mv: "near",
      str: "+5",
      dex: "+0",
      con: "+3",
      int: "-2",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Charge: "Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage."
    }
  },
  {
    name: "ELF",
    flavourText: "Ethereal, ageless fey-people infused with ancient magic.",
    alignment: "L",
    level: "2",
    attacks: "1 longbow (far) +3 (1d8) or 1 longsword +1 (1d8)",
    stats: {
      ac: "13",
      hp: "9",
      mv: "near",
      str: "+0",
      dex: "+3",
      con: "+0",
      int: "+1",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      Feyblood: "ADV on DEX checks while in the natural wilds."
    }
  },
  {
    name: "ETTERCAP",
    flavourText: "Bipedal, eight-eyed spiderfolk with spindly legs and purple fur.",
    alignment: "C",
    level: "3",
    attacks: "2 bite +2 (1d6) or 1 poison web (near) +2",
    stats: {
      ac: "12",
      hp: "14",
      mv: "near (climb)",
      str: "+0",
      dex: "+2",
      con: "+1",
      int: "+0",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      "Poison Web": "One target stuck in place and 1d4 damage/round. DC 12 DEX on turn to escape."
    }
  },
  {
    name: "FAIRY",
    flavourText: "Miniature fey folk with fluttering moth or butterfly wings.",
    alignment: "N",
    level: "1",
    attacks: "1 needle +3 (1 + poison)",
    stats: {
      ac: "13",
      hp: "4",
      mv: "near (fly)",
      str: "-2",
      dex: "+3",
      con: "+0",
      int: "+1",
      wis: "+0",
      cha: "+1"
    },
    specials: {
      Poison: "DC 12 CON or fall into deep sleep for 1d4 hours."
    }
  },
  {
    name: "FROG, GIANT",
    flavourText: "Human-sized frogs with warty skin and long, sticky tongues.",
    alignment: "N",
    level: "2",
    attacks: "1 tongue and 1 bite +2 (1d6)",
    stats: {
      ac: "12",
      hp: "10",
      mv: "near (swim)",
      str: "+2",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Tongue: "1 creature in near DC 12 DEX or pulled to close range."
    }
  },
  {
    name: "GARGOYLE",
    flavourText: "Leering, winged fiends that look like stone statues. They can hold perfectly still for long stretches of time.",
    alignment: "C",
    level: "4",
    attacks: "2 claw +3 (1d6)",
    stats: {
      ac: "16",
      hp: "20",
      mv: "near (fly)",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "+0",
      wis: "+1",
      cha: "-1"
    },
    specials: {
      Impervious: "Only damaged by magical sources."
    }
  },
  {
    name: "GELATINOUS CUBE",
    flavourText: "A translucent cube of slime that silently mows through tunnels.",
    alignment: "N",
    level: "5",
    attacks: "1 touch +4 (1d8 + toxin + engulf)",
    stats: {
      ac: "11",
      hp: "24",
      mv: "near",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "-4",
      wis: "+1",
      cha: "-4"
    },
    specials: {
      Engulf: "DC 12 STR or trapped inside cube. Touch attack auto- hits engulfed targets each round. DC 12 STR on turn to escape. Fail checks if paralyzed.",
      Rubbery: "Half damage from stabbing weapons.",
      Toxin: "DC 15 CON or paralyzed 1d4 rounds.",
    }
  },
  {
    name: "GHAST",
    flavourText: "Greater ghouls who retain the intelligence they had in life.",
    alignment: "C",
    level: "4",
    attacks: "2 claw +4 (1d8 + paralyze)",
    stats: {
      ac: "11",
      hp: "20",
      mv: "near",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "+0",
      wis: "+0",
      cha: "+2"
    },
    specials: {
      Undead: "Immune to morale checks.",
      "Carrion Stench": "Living creatures DC 12 CON the first time within near or DISADV on attacks and spellcasting for 5 rounds.",
      Paralyze: "DC 12 CON or paralyzed 1d4 rounds."
    }
  },
  {
    name: "GHOST",
    flavourText: "A wavering spirit with a face contorted in rage or sadness.",
    alignment: "C",
    level: "6",
    attacks: "2 death touch +5 (1d8 + life drain) or 1 possess",
    stats: {
      ac: "13",
      hp: "27",
      mv: "near (fly)",
      str: "-2",
      dex: "+3",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+4"
    },
    specials: {
      "Greater Undead": "Immune to morale checks. Only damaged by silver or magical sources.",
      Incorporeal: "In place of attacks, become corporeal or incorporeal.",
      "Life Drain": "1d4 CON damage. Death if reduced to 0 CON.",
      Possess: "Must be corporeal. One target, close range. Contested CHA check. If ghost wins, it inhabits target's body and controls it for 2d4 rounds.",
    }
  },
  {
    name: "GHOUL",
    flavourText: "Gray-skinned, slavering undead with whipping tongues and flat, reptilian faces.",
    alignment: "C",
    level: "2",
    attacks: "1 claw +2 (1d6 + paralyze)",
    stats: {
      ac: "11",
      hp: "11",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+2",
      int: "-3",
      wis: "-1",
      cha: "+0"
    },
    specials: {
      Undead: "Immune to morale checks.",
      Paralyze: "DC 12 CON or paralyzed 1d4 rounds.",
    }
  },
  {
    name: "GIANT, CLOUD",
    flavourText: "Pale, angular giants with blue-gray hair, light eyes, and silk robes. They do not allow outsiders into their enclaves.",
    alignment: "N",
    level: "10",
    attacks: "3 morningstar +9 (2d10)",
    stats: {
      ac: "15 (leather)",
      hp: "48",
      mv: "double near",
      str: "+5",
      dex: "+4",
      con: "+3",
      int: "+3",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Alert: "ADV on checks to detect sneaking or hiding creatures."
    }
  },
  {
    name: "GIANT, FIRE",
    flavourText: "Bulky, muscled giants with coppery skin and red hair. Heavily armored in iron plate mail studded with bronze rivets.",
    alignment: "C",
    level: "9",
    attacks: "3 greatsword +9 (2d12)",
    stats: {
      ac: "15 (plate mail)",
      hp: "44",
      mv: "double near",
      str: "+6",
      dex: "+0",
      con: "+4",
      int: "+1",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      Fireblood: "Fire immune."
    }
  },
  {
    name: "GIANT, FROST",
    flavourText: "Blue-skinned warriors with broad shoulders and braided hair. They sound war horns during their frequent raids to pillage nearby settlements.",
    alignment: "C",
    level: "9",
    attacks: "3 greataxe +8 (2d10)",
    stats: {
      ac: "14 (chainmail)",
      hp: "44",
      mv: "double near",
      str: "+5",
      dex: "+1",
      con: "+4",
      int: "+2",
      wis: "+3",
      cha: "+2"
    },
  },
  {
    name: "Frostblood. Cold immune. GIANT, GOAT",
    flavourText: "Highland-dwelling, barbaric giants with goatlike legs, horns, and horizontal pupils.",
    alignment: "C",
    level: "8",
    attacks: "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
    stats: {
      ac: "12 (leather)",
      hp: "39",
      mv: "double near (climb)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
  },
  {
    name: "GIANT, HILL",
    flavourText: "Fleshy hulks with leathery skin and broad, sloping foreheads. Cruel, boorish, and dim-witted.",
    alignment: "C",
    level: "7",
    attacks: "2 greatclub +6 (2d8) or 1 boulder (far) +6 (2d10)",
    stats: {
      ac: "11 (leather)",
      hp: "34",
      mv: "double near",
      str: "+4",
      dex: "+0",
      con: "+3",
      int: "-2",
      wis: "-2",
      cha: "-2"
    },
  },
  {
    name: "GIANT, STONE",
    flavourText: "Lean, sinewy giants with stony skin and deep-set eyes. They are quiet and poised, often sitting motionless for days at a time.",
    alignment: "N",
    level: "8",
    attacks: "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
    stats: {
      ac: "17",
      hp: "40",
      mv: "double near",
      str: "+4",
      dex: "+2",
      con: "+4",
      int: "+1",
      wis: "+1",
      cha: "-1"
    },
    specials: {
      "Stone Hide": "Half damage from stabbing and cutting weapons."
    }
  },
  {
    name: "GIANT, STORM",
    flavourText: "Regal titans with sea-green skin, flowing white hair, and thundering voices. They breathe water as easily as air.",
    alignment: "L",
    level: "12",
    attacks: "3 greatsword +10 (2d12) or 1 lightning bolt",
    stats: {
      ac: "15 (mithral chainmail)",
      hp: "58",
      mv: "double near (swim)",
      str: "+6",
      dex: "+2",
      con: "+4",
      int: "+3",
      wis: "+4",
      cha: "+4"
    },
    specials: {
      Stormblood: "Electricity immune.",
      "Lightning Bolt": "3/day, 5' wide line extending far from giant. All creatures in line DC 15 DEX or 5d10 damage. DISADV on check if in water."
    }
  },
  {
    name: "GIBBERING MOUTHER",
    flavourText: "Crawling masses of slime with dozens of screeching, lipless mouths and wet eyeballs.",
    alignment: "N",
    level: "4",
    attacks: "2 bite +3 (1d8 + latch)",
    stats: {
      ac: "8",
      hp: "21",
      mv: "near (climb, swim)",
      str: "+2",
      dex: "-2",
      con: "+3",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Gibbering: "Creatures within near DC 12 WIS on turn or take a random action (d8): 1-3. do nothing, 4-5. move in random direction, 6-7. attack nearest creature, 8. flee.",
      Latch: "Attach to bitten target; bites auto-hit next round. DC 12 STR on turn to tear off."
    }
  },
  {
    name: "GLADIATOR",
    flavourText: "Veteran warriors seasoned in arena fights to the death.",
    alignment: "N",
    level: "3",
    attacks: "2 longsword +3 (1d8) or 1 spear (close/near) +3 (1d6)",
    stats: {
      ac: "16 (chainmail + shield)",
      hp: "15",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+2",
      int: "+0",
      wis: "+0",
      cha: "+1"
    },
  },
  {
    name: "GNOLL",
    flavourText: "Barbaric, opportunistic hyena- folk who range in large packs.",
    alignment: "C",
    level: "2",
    attacks: "1 spear (close/near) +1 (1d6) or 1 longbow (far) +1 (1d8)",
    stats: {
      ac: "12 (leather)",
      hp: "10",
      mv: "near",
      str: "+1",
      dex: "+1",
      con: "+1",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Rage: "1/day, immune to morale checks, +1d4 damage (3 rounds)."
    }
  },
  {
    name: "GNOME, DEEP",
    flavourText: "Gray-skinned, white-haired fey the size of halflings. They hunt for gems and rare cave flora.",
    alignment: "L",
    level: "3",
    attacks: "1 pick +3 (1d6) or 1 dart (near) +2 (1d4)",
    stats: {
      ac: "14 (leather + shield)",
      hp: "14",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "+1",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      "Stone Meld": "2/day, underground only. Turn invisible for 3 rounds."
    }
  },
  {
    name: "GOBLIN",
    flavourText: "A short, hairless humanoid with green skin and pointy ears.",
    alignment: "C",
    level: "1",
    attacks: "1 club +0 (1d4) or 1 shortbow (far) +1 (1d4)",
    stats: {
      ac: "11",
      hp: "5",
      mv: "near",
      str: "+0",
      dex: "+1",
      con: "+1",
      int: "-1",
      wis: "-1",
      cha: "-2"
    },
  },
  {
    name: "Keen Senses. Can't be surprised. GOBLIN, BOSS",
    flavourText: "A scarred goblin with knotted muscles and a crown of iron.",
    alignment: "C",
    level: "4",
    attacks: "1 spear (close/near) +3 (1d6)",
    stats: {
      ac: "14 (chainmail)",
      hp: "20",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+2",
      int: "-1",
      wis: "+0",
      cha: "+1"
    },
    specials: {
      "Keen Senses": "Can't be surprised."
    }
  },
  {
    name: "GOBLIN, SHAMAN",
    flavourText: "A swaying, chanting goblin wearing necklaces of teeth and a robe of musty rat pelts.",
    alignment: "C",
    level: "4",
    attacks: "1 staff +0 (1d4) or 1 spell +3",
    stats: {
      ac: "12 (leather)",
      hp: "19",
      mv: "near",
      str: "+0",
      dex: "+1",
      con: "+1",
      int: "+0",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      "Keen Senses": "Can't be surprised.",
      "Bug Brain (WIS Spell)": "DC 13. Near range, one target. Target's INT drops to 1 for 1d4 rounds.",
      "Skitter (WIS Spell)": "DC 12. Self. Climb like a spider for 5 rounds.",
      "Stink Bomb (WIS Spell)": "DC 12. One target within far 2d4 damage and DC 12 CON or DISADV on next check/attack."
    }
  },
  {
    name: "GOLEM, CLAY",
    flavourText: "A towering, faceless humanoid shaped from glistening clay.",
    alignment: "N",
    level: "8",
    attacks: "3 slam +6 (1d8)",
    stats: {
      ac: "14",
      hp: "40",
      mv: "near",
      str: "+4",
      dex: "+0",
      con: "+4",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Golem: "Immune to damage from fire, cold, electricity, or non-magical sources. Healed by acid.",
      Curse: "Slam damage can only be healed by level 5+ priest.",
    }
  },
  {
    name: "GOLEM, FLESH",
    flavourText: "A ghastly monstrosity made of sewn-together corpses.",
    alignment: "N",
    level: "7",
    attacks: "3 slam +6 (1d8)",
    stats: {
      ac: "9",
      hp: "35",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+4",
      int: "-1",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Golem: "Immune to damage from fire, cold, or non-magical sources. Healed by electricity.",
      Berserk: "When at or below 20 HP, +1 slam attack and slams deal double damage.",
    }
  },
  {
    name: "GOLEM, IRON",
    flavourText: "A bulky iron suit that squeals and sparks with each step.",
    alignment: "N",
    level: "10",
    attacks: "3 slam +8 (2d8) or 1 poison breath",
    stats: {
      ac: "19",
      hp: "49",
      mv: "near",
      str: "+5",
      dex: "-1",
      con: "+4",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Golem: "Immune to damage from cold or non-magical sources. Healed by fire.",
      "Poison Breath": "All within near, DC 15 CON or 8d6 damage."
    }
  },
  {
    name: "GOLEM, STONE",
    flavourText: "A wide-limbed, lumbering statue that shakes the ground.",
    alignment: "N",
    level: "8",
    attacks: "3 slam +6 (1d10) and 1 slow",
    stats: {
      ac: "18",
      hp: "40",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+4",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Golem: "Immune to damage from fire, cold, electricity, or non-magical sources.",
      Slow: "Far range, one target. DC 15 CON or speed halved 1d4 rds."
    }
  },
  {
    name: "GORGON",
    flavourText: "A snorting bull made entirely of iron plating. A cloud of green fog billows from its nostrils.",
    alignment: "C",
    level: "7",
    attacks: "2 gore +6 (2d8) or 1 charge or 1 petrifying breath",
    stats: {
      ac: "18",
      hp: "33",
      mv: "double near",
      str: "+4",
      dex: "+0",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Charge: "Move up to double near in straight line and make 1 gore attack. If hit, x3 damage.",
      "Petrifying Breath": "Fills a near- sized cube extending from gorgon. DC 15 CON or petrified (gorgons immune)."
    }
  },
  {
    name: "GORILLA",
    flavourText: "Mighty, jungle-dwelling apes.",
    alignment: "N",
    level: "4",
    attacks: "2 rend +5 (2d6)",
    stats: {
      ac: "12",
      hp: "20",
      mv: "near (climb)",
      str: "+4",
      dex: "+2",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "-1"
    },
  },
  {
    name: "GRAY OOZE",
    flavourText: "Slick puddles the color of stone.",
    alignment: "N",
    level: "2",
    attacks: "1 tentacle +2 (1d6)",
    stats: {
      ac: "11",
      hp: "9",
      mv: "near (climb)",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Impervious: "Immune to damage from acid, cold, or fire.",
      Corrosive: "Nonmagical metal that touches the ooze dissolves on a d6 roll of 1-3."
    }
  },
  {
    name: "GRICK",
    flavourText: "A huge worm with four suckered tentacles and a snapping beak.",
    alignment: "N",
    level: "4",
    attacks: "1 beak +3 (1d8) and 1 tentacle +3 (1d6 + grab)",
    stats: {
      ac: "14",
      hp: "19",
      mv: "near (climb)",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Camouflage: "Hard to see in cave terrain or rocks.",
      Grab: "Target is immobilized. DC 15 Strength check on turn to break free."
    }
  },
  {
    name: "GRIFFON",
    flavourText: "Winged hunters with the head of an eagle and body of a lion. Their favored food is horses.",
    alignment: "N",
    level: "4",
    attacks: "2 rend +4 (1d10)",
    stats: {
      ac: "12",
      hp: "19",
      mv: "double near (fly)",
      str: "+4",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-1"
    },
  },
  {
    name: "GRIMLOW",
    flavourText: "A tall, oval-shaped mammal. A giant, half-moon maw hides on its belly beneath its gray fur.",
    alignment: "N",
    level: "9",
    attacks: "1 grab and 3 bite +6 (2d8)",
    stats: {
      ac: "12",
      hp: "43",
      mv: "near",
      str: "+4",
      dex: "+2",
      con: "+3",
      int: "-3",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Grab: "One target in near DC 15 STR or wrapped in grimlow's tongue and pulled into its mouth. Bite attacks automatically hit the target. Can only grab 1 target at a time. DC 15 STR on turn to break free."
    }
  },
  {
    name: "GUARD",
    flavourText: "A sentry equipped with sturdy weapons and armor.",
    alignment: "L",
    level: "1",
    attacks: "1 spear (close/near) +1 (1d6) or 1 longsword +1 (1d8)",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+0",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
  },
  {
    name: "HAG, NIGHT",
    flavourText: "A purple-skinned, stooped woman with stringy, white hair and a mouth full of iron teeth.",
    alignment: "C",
    level: "8",
    attacks: "2 bite +6 (1d10) and 1 blind",
    stats: {
      ac: "14",
      hp: "37",
      mv: "near",
      str: "+4",
      dex: "+2",
      con: "+1",
      int: "+2",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Blind: "One target within near DC 15 CHA or blinded for 1d4 days.",
      Shapechange: "Instantly change to look like any other humanoid."
    }
  },
  {
    name: "HAG, SEA",
    flavourText: "A green, sunken-faced woman. Seaweed hair and oozing flesh.",
    alignment: "C",
    level: "6",
    attacks: "2 claw +4 (1d8)",
    stats: {
      ac: "15",
      hp: "28",
      mv: "near (swim)",
      str: "+2",
      dex: "+3",
      con: "+1",
      int: "+1",
      wis: "+2",
      cha: "+2"
    },
    specials: {
      Shapechange: "Instantly change to look like any other humanoid.",
      Terrify: "A creature who first sees her true form DC 15 CHA or DISADV on attacks 1d4 rounds."
    }
  },
  {
    name: "HAG, WEALD",
    flavourText: "Eyes dark as moonless nights, skin made of rotting wood, hair of tangled roots and vines.",
    alignment: "C",
    level: "6",
    attacks: "2 claw +4 (1d8) or 1 drink pain",
    stats: {
      ac: "14",
      hp: "28",
      mv: "near",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "+1",
      wis: "+2",
      cha: "+3"
    },
    specials: {
      "Drink Pain": "Near range. DC 12 CHA to deal 2d4 damage to a creature; regain that many HP.",
      Shapechange: "Instantly change to look like any other humanoid. "
    }
  },
  {
    name: "HARPY",
    flavourText: "Horrific, winged women with vulture-like lower bodies. They keen a hypnotic song.",
    alignment: "C",
    level: "3",
    attacks: "2 claw +3 (1d6) or 1 song",
    stats: {
      ac: "13",
      hp: "14",
      mv: "near (fly)",
      str: "+1",
      dex: "+3",
      con: "+1",
      int: "+0",
      wis: "+0",
      cha: "+1"
    },
    specials: {
      Song: "Enemies who can hear within double near DC 12 CHA or dazed and drawn to harpy for 1d4 rounds. Immune for 1 day if passed check."
    }
  },
  {
    name: "HELL HOUND",
    flavourText: "Black wolfhounds with red eyes and jaws dripping with flames.",
    alignment: "C",
    level: "4",
    attacks: "2 bite +4 (1d8) or 1 fire breath",
    stats: {
      ac: "13",
      hp: "19",
      mv: "double near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Impervious: "Fire immune.",
      "Fire Breath": "Fills a near-sized cube extending from hell hound. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds."
    }
  },
  {
    name: "HIPPOGRIFF",
    flavourText: "Fierce, winged creatures with the lower body of a horse and upper body of a giant eagle.",
    alignment: "N",
    level: "3",
    attacks: "2 rend +3 (1d8)",
    stats: {
      ac: "13",
      hp: "14",
      mv: "double near (fly)",
      str: "+3",
      dex: "+3",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "HIPPOPOTAMUS",
    flavourText: "Ornery river-beasts as large as cows with round, purple bodies and bulbous snouts.",
    alignment: "N",
    level: "5",
    attacks: "2 bite +4 (1d10)",
    stats: {
      ac: "12",
      hp: "24",
      mv: "near (swim)",
      str: "+4",
      dex: "+0",
      con: "+2",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Stumpy: "ADV on STR checks to grab or drag other creatures."
    }
  },
  {
    name: "HOBGOBLIN",
    flavourText: "A sturdy, tall goblin with russet skin. Militant and strategic.",
    alignment: "C",
    level: "2",
    attacks: "1 longsword +3 (1d8) or 1 longbow (far) +0 (1d8)",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "10",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "+2",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      Phalanx: "+1 to attacks and AC when in close range of an allied hobgoblin."
    }
  },
  {
    name: "HORSE",
    flavourText: "Powerful, swift herd animals that roam open plains.",
    alignment: "N",
    level: "2",
    attacks: "1 hooves +3 (1d6)",
    stats: {
      ac: "11",
      hp: "11",
      mv: "double near",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "HYDRA",
    flavourText: "A towering, amphibious reptile with a bouquet of snake heads writhing on long necks.",
    alignment: "N",
    level: "*",
    attacks: "1 bite (near) +6 (1d8)",
    stats: {
      ac: "15",
      hp: "*",
      mv: "near (swim)",
      str: "+5",
      dex: "+1",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Heads: "Choose how many heads the hydra has. Each is LV 2, AC 15, HP 11, and can make 1 bite attack. A killed head sprouts into two new heads at the start of the hydra's turn unless cauterized beforehand. The hydra's LV is all the heads combined."
    }
  },
  {
    name: "INVISIBLE STALKER",
    flavourText: "Intelligent creatures made of flowing air. Often bound to the bidding of evil sorcerers for their peerless tracking ability.",
    alignment: "N",
    level: "6",
    attacks: "3 pummel +4 (1d6)",
    stats: {
      ac: "13",
      hp: "29",
      mv: "near (fly)",
      str: "+2",
      dex: "+3",
      con: "+2",
      int: "+2",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Bound: "A secret, mundane contingency (such as the touch of a feather) ends the invisible stalker's magical servitude.",
      Invisible: "Naturally invisible. Tracking. Can always sense the direction of its chosen quarry."
    }
  },
  {
    name: "JELLYFISH",
    flavourText: "Hand-sized, purple sea jellies with stinging tentacles.",
    alignment: "N",
    level: "0",
    attacks: "1 sting +1 (1 + toxin)",
    stats: {
      ac: "11",
      hp: "1",
      mv: "close (swim)",
      str: "-4",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "+1",
      cha: "-4"
    },
    specials: {
      Toxin: "DC 9 CON or paralyzed 1d4 rounds."
    }
  },
  {
    name: "KNIGHT",
    flavourText: "A warrior in shining plate mail and the surcoat of a knightly order.",
    alignment: "L",
    level: "3",
    attacks: "2 bastard sword +3 (1d8)",
    stats: {
      ac: "17 (plate mail + shield)",
      hp: "14",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "+0",
      wis: "+0",
      cha: "+1"
    },
    specials: {
      Oath: "3/day, ADV on a roll made in service of knight's order."
    }
  },
  {
    name: "KOBOLD",
    flavourText: "Puny, scaled coyote-lizards that dwell underground.",
    alignment: "C",
    level: "0",
    attacks: "1 spear (close/near) +0 (1d6)",
    stats: {
      ac: "13 (leather)",
      hp: "1",
      mv: "near",
      str: "-2",
      dex: "+2",
      con: "+0",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: { Dodge: "1/day, an attack that would hit misses instead." }
  },
  {
    name: "KOBOLD, SORCERER",
    flavourText: "A scaly dog-lizard painted with colorful stripes and rattling a hefty leg bone strung with beads and feathers.",
    alignment: "C",
    level: "3",
    attacks: "1 club +1 (1d4) or 1 spell +2",
    stats: {
      ac: "13 (leather)",
      hp: "13",
      mv: "near",
      str: "-2",
      dex: "+2",
      con: "+0",
      int: "-1",
      wis: "+1",
      cha: "+2"
    },
    specials: {
      Dodge: "1/day, an attack that would hit misses instead.",
      "Scorpion Sting (CHA Spell)": "DC 11. Near range, one target. 1d6 damage and target has DISADV on next attack roll or check.",
      "Spider Swarm (CHA Spell)": "DC 12. A spider swarm appears within near. Stays 1d4 rounds. Follows sorcerer's commands.",
    }
  },
  {
    name: "KRAKEN",
    flavourText: "Primordial, tentacled leviathans the size of war galleons. They live in the lightless depths of the deep ocean.",
    alignment: "C",
    level: "17",
    attacks: "4 tentacle (near) +9 (2d12) or 1 storm or 1d4 lightning bolt",
    stats: {
      ac: "18",
      hp: "80",
      mv: "double near (swim)",
      str: "+6",
      dex: "+3",
      con: "+4",
      int: "+4",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Impervious: "Electricity immune. Crush. Tentacle attacks deal double damage against objects.",
      "Lightning Bolt": "Straight line (5' wide) extending far from kraken. DC 15 DEX or 6d6 damage.",
      Storm: "Seas become violently turbulent in 1 mile radius around kraken. Lasts 2d4 rounds. Seaborne vessels have a 1:6 chance of capsizing each round."
    }
  },
  {
    name: "LEECH, GIANT",
    flavourText: "A glossy black, blood-drinking slug as large as a cat.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +1 (1d4 + attach)",
    stats: {
      ac: "9",
      hp: "10",
      mv: "near (swim)",
      str: "+1",
      dex: "-1",
      con: "+1",
      int: "-3",
      wis: "-1",
      cha: "-3"
    },
    specials: {
      Attach: "Attach to target; bite auto-hits next round. DC 12 STR on turn to tear off."
    }
  },
  {
    name: "LEPRECHAUN",
    flavourText: "Impish fey who favor green garb and love fooling \"tall folk\" with promises of gold.",
    alignment: "N",
    level: "4",
    attacks: "1 spell +4",
    stats: {
      ac: "13",
      hp: "19",
      mv: "near",
      str: "+1",
      dex: "+3",
      con: "+1",
      int: "+2",
      wis: "+1",
      cha: "+3"
    },
    specials: {
      Alert: "Cannot be surprised. Slippery. Hostile spells targeting the leprechaun are DC 15 to cast.",
      "Fool's Gold (CHA Spell)": "DC 12. Close. One small object or small group of similar objects. Turn objects into silver or gold pieces. Lasts 1 day.",
      "Illusion (CHA Spell)": "DC 11. Create a convincing visual and/ or auditory illusion within near. Lasts until dismissed.",
      "Invisibility (CHA Spell)": "DC 12. Self. Become invisible for 2d4 rounds."
    }
  },
  {
    name: "LICH",
    flavourText: "A wizard who has completed a necromantic ritual to become a mighty, undead sorcerer. Its withered body is draped in moldering, silk robes, and red marshlights burn in its eyes.",
    alignment: "C",
    level: "13",
    attacks: "2 touch +6 (2d8 + paralysis) and 2 spell +7",
    stats: {
      ac: "16",
      hp: "62",
      mv: "near",
      str: "+3",
      dex: "+1",
      con: "+4",
      int: "+4",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      "Supreme Undead": "Immune to morale checks. Only damaged by magical sources.",
      Phylactery: "Can't be killed while spirit vessel (an object) is intact.",
      Paralysis: "DC 15 CON or paralyzed 1d4 rounds.",
      "Flight (INT Spell)": "Self. DC 13. Fly double near for 5 rounds.",
      "Null (INT Spell)": "Self. DC 14. Hostile spells targeting lich are DC 18 to cast. Lasts 1d4 rounds.",
      "Shadow Leap (INT Spell)": "Self. DC 14. Teleport up to 100 miles.",
      "Sigil of Doom (INT Spell)": "DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP.",
      "Wither (INT Spell)": "DC 14. 4d8 damage to enemies within a near-sized cube centered on lich."
    }
  },
  {
    name: "LION",
    flavourText: "Tawny great cats that hunt in open plains. Males have manes.",
    alignment: "N",
    level: "3",
    attacks: "2 rend +4 (1d8)",
    stats: {
      ac: "12",
      hp: "15",
      mv: "near",
      str: "+4",
      dex: "+2",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "LIZARDFOLK",
    flavourText: "Crocodilian humanoids with scaly faces, claws, and tails. They dwell in swamps and rivers.",
    alignment: "C",
    level: "2",
    attacks: "1 spear (close/near) +2 (1d6)",
    stats: {
      ac: "14 (leather + shield)",
      hp: "11",
      mv: "near (swim)",
      str: "+1",
      dex: "+1",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "MAGE",
    flavourText: "Trained wizards who are often members of a sorcerous order.",
    alignment: "L",
    level: "6",
    attacks: "1 spell +5",
    stats: {
      ac: "11",
      hp: "27",
      mv: "near",
      str: "-1",
      dex: "+1",
      con: "+0",
      int: "+3",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      "Arcane Armor (INT Spell)": "Self. DC 12. AC 16 for 2d4 rounds.",
      "Blast (INT Spell)": "DC 12. Far, one target. 2d6 damage.",
      "Cancel (INT Spell)": "DC 13. End one spell affecting a target within near.",
      "Levitate (INT Spell)": "DC 12. Close. Focus. Hover near for duration, vertical movement only.",
      "Snare (INT Spell)": "DC 13. Focus. One humanoid target within near paralyzed for duration.",
    },
  },
  {
    name: "MAMMOTH",
    flavourText: "Massive, shaggy elephants with tusks that reach the ground.",
    alignment: "N",
    level: "9",
    attacks: "2 tusks +7 (1d12)",
    stats: {
      ac: "15",
      hp: "44",
      mv: "near",
      str: "+5",
      dex: "+0",
      con: "+4",
      int: "-2",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      "Thick Fur": "Cold immune.",
      Charge: "Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage."
    }
  },
  {
    name: "MANTA, RAY GIANT",
    flavourText: "Swooping manta rays as large as longboats. Gentle and intelligent enough to be trained.",
    alignment: "N",
    level: "8",
    attacks: "2 sting +5 (1d12 + poison)",
    stats: {
      ac: "13",
      hp: "37",
      mv: "double near (swim)",
      str: "+3",
      dex: "+3",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Poison: "DC 15 CON or drop to 0 hit points in 1d4 rounds."
    }
  },
  {
    name: "MANTICORE",
    flavourText: "Human-faced lions with bat wings and cruelly spiked tails. They speak halting Thanian and love devouring human flesh.",
    alignment: "C",
    level: "6",
    attacks: "2 rend +6 (2d6) or 2 tail spike (far) +4 (1d8)",
    stats: {
      ac: "14",
      hp: "29",
      mv: "double near (fly)",
      str: "+4",
      dex: "+2",
      con: "+2",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Spikes: "Manticores have 4d6 tail spikes. They regrow each day."
    }
  },
  {
    name: "MASTIFF",
    flavourText: "Muscled guard dogs with fierce loyalty to their pack or owners.",
    alignment: "N",
    level: "1",
    attacks: "1 bite +1 (1d6)",
    stats: {
      ac: "11",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
  },
  {
    name: "MEDUSA",
    flavourText: "Immortal women with coiling snakes for hair and scaled skin.",
    alignment: "C",
    level: "8",
    attacks: "1 snake bite +6 (1d6 + poison)",
    stats: {
      ac: "14",
      hp: "38",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+2",
      int: "+2",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Godborn: "Hostile spells targeting the medusa are DC 15 to cast.",
      Petrify: "Any creature (including medusa) who looks directly at medusa, DC 15 CON or petrified.",
      Poison: "DC 15 CON or go to 0 HP."
    }
  },
  {
    name: "MERFOLK",
    flavourText: "Ocean dwellers with human upper bodies and long fish tails.",
    alignment: "L",
    level: "2",
    attacks: "1 spear (close/ near) +2 (1d6)",
    stats: {
      ac: "11",
      hp: "9",
      mv: "near (swim)",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "+0",
      wis: "+1",
      cha: "+1"
    },
  },
  {
    name: "MIMIC",
    flavourText: "Beasts that look like objects.",
    alignment: "N",
    level: "5",
    attacks: "2 bite +5 (1d8 + stick)",
    stats: {
      ac: "12",
      hp: "23",
      mv: "near",
      str: "+2",
      dex: "+0",
      con: "+1",
      int: "-2",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Stick: "DC 15 STR or adhere to target; auto-hit with bite. DC 15 STR on turn to remove."
    }
  },
  {
    name: "MINOTAUR",
    flavourText: "Ferocious bull-men with hooves and curved horns. They live in mazelike tunnels.",
    alignment: "C",
    level: "7",
    attacks: "2 greataxe +6 (1d10) and 1 horns +6 (1d12)",
    stats: {
      ac: "14 (chainmail)",
      hp: "34",
      mv: "near",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "+1",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      Charge: "In place of attacks, move up to double near in a straight line and make 1 horn attack. If hit, x2 damage."
    }
  },
  {
    name: "MOOSE",
    flavourText: "A towering, brown-haired grazer with weighty, flat antlers.",
    alignment: "N",
    level: "4 ",
    attacks: "2 antler +3 (1d6)",
    stats: {
      ac: "11",
      hp: "19",
      mv: "double near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
  },
  {
    name: "MORDANTICUS THE FLAYED",
    flavourText: "A skinless mummy-lich wearing a crown set with nine bright gems. Once the head of the ancient, wizardly order of Gehemna, Mordanticus now lives in secret within the sanctum of Gehemna's reigning archmage. He has served as an advisor and historian for centuries, but an enduring enchantment prevents him from speaking of two topics: his origins, and The Ten-Eyed Oracle.",
    alignment: "N",
    level: "19",
    attacks: "1 rot touch +8 (1d10 + necrosis) and 3 spell +8",
    stats: {
      ac: "17",
      hp: "89",
      mv: "near",
      str: "+4",
      dex: "+4",
      con: "+4",
      int: "+5",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      "Legendary Undead": "Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Mordanticus are DC 18 to cast.",
      "Crown of Gehemna": "3/day, cause a spell being cast within far to fail. Necrosis. DC 15 CON or go to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect.",
      Phylactery: "Cannot be killed while spirit vessel (a diamond) is intact.",
      "Absorb (INT Spell)": "DC 13. Near, one target. Target loses the ability to cast one random spell until completing a rest, and Mordanticus regains a lost spell of the same tier or less.",
      "Banish (INT Spell)": "DC 14. All extradimensional creatures within near DC 15 CHA or sent back to their home planes.",
      "Bind (INT Spell)": "DC 12. One humanoid in far paralyzed 1d4 rounds. Blast (INT Spell). DC 14. One creature in near takes 5d8 damage. Phase (INT Spell). DC 13. Self. Teleport up to one mile.",
      "True Name (INT Spell)": "DC 15. Near. Learn the True Name of target.",
    }
  },
  {
    name: "MUMMY",
    flavourText: "A desiccated, linen-wrapped zombie. It was created with an intricate embalming ritual used only upon the most worthy warriors or rulers.",
    alignment: "C",
    level: "10",
    attacks: "3 rot touch +8 (1d10 + necrosis)",
    stats: {
      ac: "13",
      hp: "47",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+2",
      int: "+3",
      wis: "+2",
      cha: "+3"
    },
    specials: {
      "Supreme Undead": "Immune to morale checks. Only damaged by magical sources.",
      Desiccated: "Can be damaged by fire. Takes x2 damage from it.",
      Necrosis: "DC 15 CON or drop to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect."
    }
  },
  {
    name: "MUSHROOMFOLK",
    flavourText: "Lumbering humanoids with spongy, elongated bodies and toadstools on their heads.",
    alignment: "N",
    level: "3",
    attacks: "2 slam +2 (1d6)",
    stats: {
      ac: "13",
      hp: "15",
      mv: "near",
      str: "+2",
      dex: "-1",
      con: "+2",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Sunblind: "Blinded in bright light. Telepathic. Speak mentally with creatures within double near."
    }
  },
  {
    name: "NAGA",
    flavourText: "Magic-wielding cobras towering ten feet high. Once a dominant species, they are now rare and reclusive, bitter to the last.",
    alignment: "C",
    level: "9",
    attacks: "2 bite +7 (2d6 + poison) and 1 spell +7",
    stats: {
      ac: "16",
      hp: "43",
      mv: "near (climb)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "+2",
      wis: "+2",
      cha: "+4"
    },
    specials: {
      Poison: "DC 15 CON or paralyzed 1d4 rounds.",
      "Agony (CHA Spell)": "DC 14. One target in near takes 3d8 damage.",
      "Hypnotize (CHA Spell)": "DC 13. Focus. One target in near range who can see naga is helplessly stupefied for duration.",
      "Whispers (CHA Spell)": "DC 12. Hostile spells cast on one target in near are DC 9 for 1d4 rounds.",
    }
  },
  {
    name: "NAGA, BONE",
    flavourText: "Mindless, skeletal husks of nagas reanimated by sorcery.",
    alignment: "C",
    level: "6",
    attacks: "2 bite +5 (2d6)",
    stats: {
      ac: "13",
      hp: "31",
      mv: "near (burrow, climb)",
      str: "+3",
      dex: "+2",
      con: "+4",
      int: "-3",
      wis: "+0",
      cha: "+4"
    },
    specials: {
      "Greater Undead": "Immune to morale checks. Only damaged by silver or magical sources."
    }
  },
  {
    name: "NIGHTMARE",
    flavourText: "Black warhorses with flaming manes, hooves, and eyes.",
    alignment: "C",
    level: "6",
    attacks: "2 hooves +5 (1d8)",
    stats: {
      ac: "13",
      hp: "29",
      mv: "double near (fly)",
      str: "+3",
      dex: "+3",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Nightmare and its rider immune to fire."
    }
  },
  {
    name: "OBE-IXX OF AZARUMME",
    flavourText: "A pale, angular woman in translucent plate mail fashioned from giant scorpion chitin. Obe-Ixx, daughter of Azarumme, rose up from the prehistoric barbarian tribes of Tal-Yool to conquer all in her path. One day, she stood at the steps of an obsidian ziggurat deep within the trackless jungle. Forty nights later, Obe-Ixx emerged as the ur-vampire, bloodlust made flesh. Her dynasty would rise and fall again and again over the coming millennia.",
    alignment: "C",
    level: "16",
    attacks: "4 greatsword (near) +11 (1d12 + 2 + Moonbite properties) and 1 bite +9 (1d8 + blood drain) and 1 charm",
    stats: {
      ac: "18 (+3 plate mail)",
      hp: "76",
      mv: "near (climb, fly)",
      str: "+5",
      dex: "+3",
      con: "+4",
      int: "+3",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      "Legendary Undead": "Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Obe-Ixx are DC 18 to cast.",
      "Blood Drain": "Obe-Ixx heals 2d8 HP, target permanently loses 1d6 CON. At 0 CON, target dies and rises as a loyal vampire or vampire spawn (Obe-Ixx chooses).",
      Charm: "One humanoid target who can see Obe-Ixx within near, DC 15 CHA or under Obe-Ixx's control for 1d4 days.",
      "Dire Shapechange": "In place of attacks, turn into a giant bat, dire wolf, or back into regular form.",
      "Moonbite Properties": "+2 greatsword, thrown weapon, returns after being thrown. Spells to heal damage it inflicts are DC 15 to cast.",
      "Ur-Vampire": "Must sleep in sarcophagus at least once per moon cycle or loses 2d8 HP per day that cannot heal until sleeping",
      "in sarcophagus": "Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart while at 0 HP with a wooden stake carved from a tree from the Tal-Yool jungle."
    }
  },
  {
    name: "OCHRE JELLY",
    flavourText: "An orange puddle of quivering slime.",
    alignment: "N",
    level: "4",
    attacks: "2 tentacle +3 (1d6)",
    stats: {
      ac: "9",
      hp: "20",
      mv: "near (climb)",
      str: "+2",
      dex: "-1",
      con: "+2",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Split: "If cut or chopped, split into two smaller oozes (divide remaining HP between both). Can split up to four times."
    }
  },
  {
    name: "OCTOPUS, GIANT",
    flavourText: "Octopi as large as sailing skiffs.",
    alignment: "N",
    level: "5",
    attacks: "2 tentacle (near) +4 (1d8 + grab)",
    stats: {
      ac: "13",
      hp: "23",
      mv: "near (swim)",
      str: "+3",
      dex: "+3",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Grab: "DC 15 STR or immobilized. Tentacle auto-hits each round. DC 15 STR on turn to break free.",
      Ink: "In place of attacks, ink cloud blinds all in near for 1d4 rounds.",
    }
  },
  {
    name: "OGRE",
    flavourText: "A massive, dim-witted brute with tusks and a heavy frame. Often lords over goblins or orcs.",
    alignment: "C",
    level: "6",
    attacks: "2 greatclub +6 (2d6)",
    stats: {
      ac: "9",
      hp: "30",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+3",
      int: "-2",
      wis: "-2",
      cha: "-2"
    },
  },
  {
    name: "ONI",
    flavourText: "Cunning and sorcerous ogre- demons with shaggy white hair, blue skin, and yellow eyes.",
    alignment: "C",
    level: "7",
    attacks: "1 glaive (near) +6 (1d10) or 1 spell +5",
    stats: {
      ac: "11",
      hp: "33",
      mv: "near",
      str: "+5",
      dex: "+1",
      con: "+2",
      int: "+2",
      wis: "+1",
      cha: "+3"
    },
    specials: {
      Shapeshift: "In place of attacks, turn into any humanoid or back into original form.",
      "Fade (CHA Spell)": "DC 13. Self. Become invisible for 1d4 rounds.",
      "Hellfrost (CHA Spell)": "DC 13. All within near-sized cube extending from oni 3d6 damage.",
      "Mist (CHA Spell)": "DC 13. Self. Turn into mist that can fly double near. Lasts 2d4 rounds.",
    }
  },
  {
    name: "ORC",
    flavourText: "A tusked, tall humanoid with gray skin and pointed ears.",
    alignment: "C",
    level: "1",
    attacks: "1 greataxe +2 (1d8)",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "4",
      mv: "near",
      str: "+2",
      dex: "+0",
      con: "+0",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: { Rage: "1/day, immune to morale checks, +1d4 damage (3 rounds)." }
  },
  {
    name: "ORC, CHIEFTAIN",
    flavourText: "An imposing orc with scars crisscrossing its body.",
    alignment: "C",
    level: "4",
    attacks: "2 greataxe +4 (1d10)",
    stats: {
      ac: "14 (chainmail)",
      hp: "19",
      mv: "near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: { Rage: "1/day, immune to morale checks, +1d4 damage (3 rounds)." }
  },
  {
    name: "OTYUGH",
    flavourText: "Stumpy, three-legged beasts with barbed tentacles and vast mouths. Drawn by rot and filth.",
    alignment: "N",
    level: "7",
    attacks: "2 tentacle +5 (1d8) and 1 bite +5 (1d10 + disease)",
    stats: {
      ac: "13",
      hp: "35",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+4",
      int: "-2",
      wis: "+0",
      cha: "-3"
    },
    specials: { Disease: "DC 15 CON or infected. DC 15 CON each day or lose 1d6 HP (can't heal). Ends on success." }
  },
  {
    name: "PRIMORDIAL SLIME",
    flavourText: "A mass of clear ooze strobing with sick pulses of violet light.",
    alignment: "C",
    level: "6",
    attacks: "2 tentacle +4 (1d10 + dissolve)",
    stats: {
      ac: "9",
      hp: "30",
      mv: "near (climb)",
      str: "+3",
      dex: "+2",
      con: "+3",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Impervious: "Only harmed by fire.",
      Dissolve: "One random piece of non-magical gear the target carries is destroyed."
    }
  },
  {
    name: "RIME WALKER",
    flavourText: "Human-shaped beings formed from black space ice. Their eyes are two flickering, white lights.",
    alignment: "C",
    level: "9",
    attacks: "4 claw +8 (1d12)",
    stats: {
      ac: "16",
      hp: "43",
      mv: "near (fly)",
      str: "+4",
      dex: "+4",
      con: "+3",
      int: "+2",
      wis: "+2",
      cha: "+2"
    },
    specials: {
      Impervious: "Immune to cold.",
      "Ice Aura": "Enemies within near of rime walker DC 12 CON at start of turn or lose action."
    }
  },
  {
    name: "VOID SPAWN",
    flavourText: "Scythe-like limbs jut from a purple bulb as big as an ogre. Its lower half is a nest of tentacles.",
    alignment: "C",
    level: "7",
    attacks: "2 scythe +6 (1d10) and 1 tentacles +6 (1d12 + toxin)",
    stats: {
      ac: "13",
      hp: "34",
      mv: "near (fly)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "+0",
      wis: "+1",
      cha: "-1"
    },
    specials: {
      Impervious: "Immune to cold. Toxin. DC 12 CON or paralyzed for 1d4 rounds."
    }
  },
  {
    name: "VOID SPIDER",
    flavourText: "Pale, horse-sized arachnids that become ghostly and intangible.",
    alignment: "C",
    level: "5",
    attacks: "2 bite +4 (1d8 + poison)",
    stats: {
      ac: "13",
      hp: "23",
      mv: "near (climb)",
      str: "+3",
      dex: "+3",
      con: "+1",
      int: "-1",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Impervious: "Immune to cold. Phase. Once per round, become corporeal or incorporeal.",
      Poison: "DC 12 CON or drop to 0 HP in 1d4 rounds."
    }
  },
  {
    name: "OWLBEAR",
    flavourText: "Cantankerous bears with owl eyes, beaks, and feathers.",
    alignment: "N",
    level: "6",
    attacks: "2 claw +5 (1d10)",
    stats: {
      ac: "13",
      hp: "30",
      mv: "near (climb)",
      str: "+4",
      dex: "+1",
      con: "+3",
      int: "-2",
      wis: "+2",
      cha: "-3"
    },
    specials: {
      Crush: "Deals an extra die of damage if it hits the same target with both claws."
    }
  },
  {
    name: "PANTHER",
    flavourText: "Supple large cats with blue- black fur. Stealthy hunters.",
    alignment: "N",
    level: "3",
    attacks: "2 rend +3 (1d6)",
    stats: {
      ac: "14",
      hp: "14",
      mv: "near (climb)",
      str: "+3",
      dex: "+4",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "PEASANT",
    flavourText: "A commoner in worn clothes.",
    alignment: "L",
    level: "1",
    attacks: "1 club +0 (1d4)",
    stats: {
      ac: "10",
      hp: "4",
      mv: "near",
      str: "+0",
      dex: "+0",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+0"
    },
  },
  {
    name: "PEGASUS",
    flavourText: "Winged horses with noble bearings and pearly white coats.",
    alignment: "N",
    level: "3",
    attacks: "2 hooves +3 (1d6)",
    stats: {
      ac: "12",
      hp: "15",
      mv: "double near (fly)",
      str: "+3",
      dex: "+2",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "+0"
    },
  },
  {
    name: "PHOENIX",
    flavourText: "Huge, soaring eagles made of searing flames. Intelligent and imbued with immortal magic.",
    alignment: "L",
    level: "13",
    attacks: "4 rend +8 (2d12)",
    stats: {
      ac: "16",
      hp: "60",
      mv: "double near (fly)",
      str: "+3",
      dex: "+4",
      con: "+2",
      int: "+3",
      wis: "+3",
      cha: "+3"
    },
    specials: {
      Impervious: "Immune to fire. Only damaged by magical sources.",
      Explosion: "Upon death, creatures within double near of phoenix DC 18 DEX or 10d6 damage.",
      "Heat Aura": "Creatures within near of phoenix at start of turn DC 15 CON or 2d6 damage.",
      Rebirth: "A red-hot egg remains after death. Phoenix hatches from it in 1d4 days.",
    }
  },
  {
    name: "PIRANHA, SWARM",
    flavourText: "A school of flat, silvery fish with vicious fangs.",
    alignment: "N",
    level: "3",
    attacks: "2 bite +2 (1d6)",
    stats: {
      ac: "12",
      hp: "13",
      mv: "near (swim)",
      str: "-2",
      dex: "+2",
      con: "+0",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Savage: "ADV on attacks against creatures below half their HP."
    }
  },
  {
    name: "PIRATE",
    flavourText: "Seafaring scoundrels who live to steal and hoard treasure.",
    alignment: "C",
    level: "1",
    attacks: "1 cutlass +1 (1d6) or 1 dagger (close/ near) +1 (1d4)",
    stats: {
      ac: "12 (leather)",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+0"
    },
  },
  {
    name: "PRIEST",
    flavourText: "A respected member of a clergy who leads holy rituals and rites.",
    alignment: "L",
    level: "5",
    attacks: "2 mace +3 (1d6) or 1 spell +3",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "23",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+1",
      int: "+0",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      "Anoint (WIS Spell)": "DC 12. Close. One weapon or armor becomes a magic +2 version for 10 rounds.",
      "Healing Touch (WIS Spell)": "DC 11. Heal one creature within close for 2d4 HP.",
      "Holy Flame (WIS Spell)": "DC 13. Self. Weapons ignite in magic flames and deal an additional 1d6 damage for 5 rounds.",
      "Rebuke (WIS Spell)": "DC 13. Focus. Chaotic creatures cannot attack priest or come within near range for duration. ",
    }
  },
  {
    name: "PURPLE WORM",
    flavourText: "A massive worm as tall as a castle keep. Has a rotating maw and is covered in purple chitin.",
    alignment: "N",
    level: "12",
    attacks: "2 bite +9 (2d12 + swallow) and 1 sting +9 (1d10 + poison)",
    stats: {
      ac: "18",
      hp: "57",
      mv: "double near (burrow)",
      str: "+5",
      dex: "+1",
      con: "+3",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Poison: "DC 15 CON or go to 0 HP.",
      Swallow: "On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Worm regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet.",
    }
  },
  {
    name: "RAKSHASA",
    flavourText: "Demonic illusionists whose true form is of a humanlike great cat with backwards hands.",
    alignment: "C",
    level: "8",
    attacks: "2 claw +6 (1d8)",
    stats: {
      ac: "16",
      hp: "39",
      mv: "near",
      str: "+1",
      dex: "+3",
      con: "+3",
      int: "+3",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      Impervious: "Only damaged by magical sources. Immune to hostile spells of 3rd tier or lower.",
      Mesmerism: "Can read the minds of all creatures within near. Can instantly take on the illusory appearance of any humanoid.",
      Weakness: "A crossbow bolt under the effects of the holy weapon spell kills the rakshasa.",
    }
  },
  {
    name: "RAT",
    flavourText: "Rangy, plague-carrying rodents that infest underground places.",
    alignment: "N",
    level: "0",
    attacks: "1 bite +0 (1 + disease)",
    stats: {
      ac: "10",
      hp: "1",
      mv: "near",
      str: "-3",
      dex: "+0",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Disease: "DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
    }
  },
  {
    name: "RAT, GIANT",
    flavourText: "Cunning rats as large as cats. Mangy fur and wormlike tails.",
    alignment: "N",
    level: "1",
    attacks: "1 bite +1 (1d4 + disease)",
    stats: {
      ac: "11",
      hp: "5",
      mv: "near",
      str: "-2",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: {
      Disease: "DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
    }
  },
  {
    name: "   RAT, DIRE",
    flavourText: "Child-sized, savage rats bristling with bony face and spine ridges.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +2 (1d6 + disease)",
    stats: {
      ac: "12",
      hp: "10",
      mv: "near",
      str: "+1",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: { Disease: "DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }
  },
  {
    name: "RAT, SWARM",
    flavourText: "A screeching tidal wave of clawing and biting rats.",
    alignment: "N",
    level: "6",
    attacks: "4 bite +0 (1 + disease)",
    stats: {
      ac: "10",
      hp: "28",
      mv: "near",
      str: "-3",
      dex: "+0",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: { Disease: "DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON." }
  },
  {
    name: "RATHGAMNON",
    flavourText: "A pearl-white lion with feathered wings that stands twenty feet tall. Rathgamnon is Madeera the Covenant's mightiest servant; his blank eyes see far into the depths of time and space. He spends all eternity watching the whirl of the stars from the highest mountain in the realm of mortals, waiting for the celestial alignments that prophesy epochs of weal and woe, titanic changes to the balance of power in the cosmos, or threats to the laws of reality itself.",
    alignment: "L",
    level: "19",
    attacks: "2 rend (near) +9 (2d10) and 2 spell +8",
    stats: {
      ac: "17",
      hp: "89",
      mv: "double near (fly)",
      str: "+5",
      dex: "+3",
      con: "+4",
      int: "+5",
      wis: "+6",
      cha: "+5"
    },
    specials: {
      Legendary: "Only damaged by magical sources. Hostile spells targeting Rathgamnon are DC 18 to cast.",
      Roar: "In place of attacks, all creatures who can hear within far DC 18 CHA or be rendered blind and speechless for 1d4 days.",
      "Abjure (WIS Spell)": "DC 13. Self. End any hostile magical effects affecting Rathgamnon.",
      "Abolish (WIS Spell)": "DC 13. One target in far takes 5d8 damage.",
      "Anchor (WIS Spell)": "DC 14. One target in far DC 18 STR or bound and anchored by chains of golden runes for 1d4 rounds.",
      "Gate (WIS Spell)": "DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed.",
      "Portent (WIS Spell)": "DC 14. Lasts 2d4 rounds. One target in near has advantage or disadvantage on all attack rolls and checks.",
      "Time Stop (WIS Spell)": "DC 15. Self. Time freezes for everyone except Rathgamnon for 1d4 rounds. Everything that occurs during the time freeze happens simultaneously when the spell ends.",
    }
  },
  {
    name: "REAVER",
    flavourText: "A knight in blackened armor riddled with cruel barbs.",
    alignment: "C",
    level: "6",
    attacks: "3 bastard sword +4 (1d8 + 2)",
    stats: {
      ac: "17 (plate mail + shield)",
      hp: "28",
      mv: "near",
      str: "+3",
      dex: "+0",
      con: "+1",
      int: "+0",
      wis: "+0",
      cha: "+2"
    },
    specials: { Bloodlust: "+2 damage with melee weapons (included)." }
  },
  {
    name: "REMORHAZ",
    flavourText: "Massive, blue centipedes with neck hoods and red-hot spine spikes. Dwell in arctic climates.",
    alignment: "N",
    level: "10",
    attacks: "3 bite +7 (2d6 + swallow)",
    stats: {
      ac: "16",
      hp: "47",
      mv: "near (burrow)",
      str: "+5",
      dex: "+1",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Impervious: "Immune to cold and fire.",
      Melt: "Non-magical metal objects that touch the remorhaz melt on a d6 roll of 1-3.",
      Swallow: "On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Remorhaz regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet. ",
    }
  },
  {
    name: "RHINOCEROS",
    flavourText: "Gray-skinned bulls with single nose horns. Dwell in grasslands.",
    alignment: "N",
    level: "5",
    attacks: "2 horn +4 (1d8)",
    stats: {
      ac: "14",
      hp: "25",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+3",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Charge: "Move up to double near in straight line and make 1 horn attack. If hit, x3 damage."
    }
  },
  {
    name: "ROC",
    flavourText: "Dragon-sized hawks that nest in remote mountains.",
    alignment: "N",
    level: "15",
    attacks: "4 rend +9 (2d10 + grab)",
    stats: {
      ac: "15",
      hp: "69",
      mv: "double near (fly)",
      str: "+5",
      dex: "+3",
      con: "+2",
      int: "-2",
      wis: "+2",
      cha: "-2"
    },
    specials: { Grab: "DC 18 STR or target held. DC 18 STR on turn to break free." }
  },
  {
    name: "ROPER",
    flavourText: "Ravenous monstrosities that look like cave rocks when their single eye and maw are closed.",
    alignment: "N",
    level: "6",
    attacks: "4 tendril (double near) +4 (1d6 + grab) and 1 bite +4 (2d8)",
    stats: {
      ac: "14",
      hp: "31",
      mv: "close (climb)",
      str: "+3",
      dex: "-2",
      con: "+4",
      int: "-1",
      wis: "+2",
      cha: "+1"
    },
    specials: {
      Impervious: "Can only be damaged by magical sources.",
      Grab: "DC 15 STR or target trapped in tendril. Tendril auto- hits target next round. DC 15 STR on turn to break free.",
      Pull: "In place of a tendril attack, pull a grabbed target a near distance.",
      Tendrils: "Four total. AC 18 each. 4+ damage to one severs it.",
    }
  },
  {
    name: "ROT FLOWER",
    flavourText: "Carnivorous flowers as large as a human. They reek of carrion.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +1 (1d4 + toxin)",
    stats: {
      ac: "9",
      hp: "10",
      mv: "none",
      str: "+1",
      dex: "-3",
      con: "+1",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
    specials: {
      Toxin: "DC 12 CON or unconscious for 1d4 rounds."
    }
  },
  {
    name: "RUST MONSTER",
    flavourText: "A mud-brown insect as big as a wolf with two feathery antennae. Consumes metal.",
    alignment: "N",
    level: "4",
    attacks: "2 claw +3 (1d6)",
    stats: {
      ac: "13",
      hp: "19",
      mv: "near (climb)",
      str: "+2",
      dex: "+3",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: { Corrosive: "Metal that touches the rust monster is destroyed on a d6 roll of 1-3." }
  },
  {
    name: "SAHUAGIN",
    flavourText: "Humanoids with sea-green skin, webbed limbs, and shark teeth. Vicious hunters.",
    alignment: "C",
    level: "2",
    attacks: "2 trident (near) +1 (1d6)",
    stats: {
      ac: "14 (leather + shield)",
      hp: "9",
      mv: "near (swim)",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      "Half-Amphibious": "Must be submerged in water every 4 hours or suffocates."
    }
  },
  {
    name: "SALAMANDER",
    flavourText: "Fire-colored lizardfolk with long tails. Flame-like frills run down their backs.",
    alignment: "C",
    level: "5",
    attacks: "2 flaming spear (close/near) +4 (1d6, ignites flammables) or 1 iron longbow (far) +2 (1d8)",
    stats: {
      ac: "13",
      hp: "24",
      mv: "near",
      str: "+2",
      dex: "+0",
      con: "+2",
      int: "-1",
      wis: "+1",
      cha: "-1"
    },
    specials: {
      Impervious: "Fire immune.",
      "Heat Aura": "Creatures in close DC12 CON on turn or 1d8 damage."
    }
  },
  {
    name: "SCARAB, SWARM",
    flavourText: "A chittering cloud of iridescent, oval-shaped beetles.",
    alignment: "N",
    level: "3",
    attacks: "2 bite +3 (1d6)",
    stats: {
      ac: "13",
      hp: "14",
      mv: "near (fly)",
      str: "-1",
      dex: "+3",
      con: "+1",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
  },
  {
    name: "SCARECROW",
    flavourText: "Ragged clothes and a painted burlap head stuffed with straw. Possessed by a malicious spirit.",
    alignment: "C",
    level: "3",
    attacks: "2 claws +2 (1d6) or 1 scream",
    stats: {
      ac: "12",
      hp: "15",
      mv: "near",
      str: "+2",
      dex: "+2",
      con: "+2",
      int: "+0",
      wis: "+0",
      cha: "+2"
    },
    specials: {
      Scream: "Creatures who hear in double near DC 12 CHA or paralyzed for 1d4 rounds."
    }
  },
  {
    name: "SCORPION",
    flavourText: "Desert-dwelling arachnids with pincers and curved tail stingers.",
    alignment: "N",
    level: "0",
    attacks: "1 sting +1 (1 + poison)",
    stats: {
      ac: "11",
      hp: "1",
      mv: "near (climb)",
      str: "-4",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "+0",
      cha: "-4"
    },
  },
  {
    name: "Poison. DC 9 CON or go to 0 HP. SCORPION, GIANT",
    flavourText: "Chitin-plated scorpions as big as camels.",
    alignment: "N",
    level: "3",
    attacks: "1 claw +2 (1d6 + grab) and 1 sting +2 (1d4 + poison)",
    stats: {
      ac: "14",
      hp: "13",
      mv: "near (climb)",
      str: "+2",
      dex: "+2",
      con: "+0",
      int: "-4",
      wis: "+0",
      cha: "-4"
    },
    specials: {
      Grab: "DC 12 STR or target held. DC 12 STR on turn to break free."
    }
  },
  {
    name: "Poison. DC 12 CON or go to 0 HP. SHADOW",
    flavourText: "Flitting, sentient shadows in the vague shape of a human.",
    alignment: "C",
    level: "3",
    attacks: "2 touch +2 (1d4 + drain)",
    stats: {
      ac: "12",
      hp: "15",
      mv: "near (fly)",
      str: "-4",
      dex: "+2",
      con: "+2",
      int: "-2",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Drain: "Target takes 1 STR damage. At 0 STR, target dies and becomes a shadow."
    }
  },
  {
    name: "SHAMBLING MOUND",
    flavourText: "Fetid piles of slimy vegetation animated to life by lightning.",
    alignment: "N",
    level: "4",
    attacks: "2 slam +3 (1d6 + engulf)",
    stats: {
      ac: "14",
      hp: "20",
      mv: "near",
      str: "+3",
      dex: "-2",
      con: "+2",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Impervious: "Fire immune. Healed by electricity.",
      Engulf: "If a target is hit by both slams in same round, it is pulled into shambling mound's body and suffocates in 2d4 rounds. DC 15 STR on turn to escape.",
    }
  },
  {
    name: "SHARK",
    flavourText: "Bloodthirsty apex predators of the sea. Gray, torpedo-like body.",
    alignment: "N",
    level: "3",
    attacks: "1 bite +3 (1d10)",
    stats: {
      ac: "11",
      hp: "15",
      mv: "near (swim)",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "SHARK, MEGALODON",
    flavourText: "Primordial sharks the size of whales. Savage hunters.",
    alignment: "N",
    level: "8",
    attacks: "3 bite +7 (2d8)",
    stats: {
      ac: "13",
      hp: "38",
      mv: "double near (swim)",
      str: "+5",
      dex: "+1",
      con: "+2",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Fearless: "Immune to morale checks."
    }
  },
  {
    name: "SIREN",
    flavourText: "Baleful fey with dove wings and iridescent fish scales. Their singing entrances listeners.",
    alignment: "C",
    level: "4",
    attacks: "2 claw +2 (1d6) or 1 song",
    stats: {
      ac: "12",
      hp: "18",
      mv: "near (swim, fly)",
      str: "+0",
      dex: "+2",
      con: "+0",
      int: "+2",
      wis: "+2",
      cha: "+4"
    },
    specials: {
      Song: "Enemies who can hear within double near DC 15 CHA or paralyzed 1d4 rounds. Immune for 1 day if passed check."
    }
  },
  {
    name: "SKELETON",
    flavourText: "A bleach-boned skeleton with red pinpoints of light in its eyes.",
    alignment: "C",
    level: "2",
    attacks: "1 shortsword +1 (1d6) or 1 shortbow (far) +0 (1d4)",
    stats: {
      ac: "13 (chainmail)",
      hp: "11",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+2",
      int: "-2",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Undead: "Immune to morale checks."
    }
  },
  {
    name: "SMILODON",
    flavourText: "Prehistoric tigers with long canine fangs. They hunt in grasslands and ice fields.",
    alignment: "N",
    level: "3 ",
    attacks: "2 bite +3 (1d6)",
    stats: {
      ac: "12",
      hp: "14",
      mv: "near",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
  },
  {
    name: "SNAKE, COBRA",
    flavourText: "A weaving serpent with a neck hood and lethal venom.",
    alignment: "N",
    level: "1",
    attacks: "1 bite +2 (1 + poison)",
    stats: {
      ac: "12",
      hp: "4",
      mv: "near",
      str: "-3",
      dex: "+2",
      con: "+0",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Poison: "DC 18 CON or go to 0 HP with a death timer of 1."
    }
  },
  {
    name: "SNAKE, GIANT",
    flavourText: "An enormous, mottled serpent that can swallow a cow whole.",
    alignment: "N",
    level: "5",
    attacks: "2 bite +4 (1d6) and 1 constrict (near)",
    stats: {
      ac: "12",
      hp: "23",
      mv: "near (climb)",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Constrict: "Contested STR to hold target immobile for one round."
    }
  },
  {
    name: "SNAKE, SWARM",
    flavourText: "A roiling wave of snakes darting and flowing across the ground.",
    alignment: "N",
    level: "4",
    attacks: "3 bite +2 (1d4 + poison)",
    stats: {
      ac: "12",
      hp: "19",
      mv: "near",
      str: "-3",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
    specials: {
      Poison: "DC 12 CON or go to 0 HP in 1d4 rounds."
    }
  },
  {
    name: "SOLDIER",
    flavourText: "An armed footsoldier trained in the ways of battlefield combat.",
    alignment: "L",
    level: "2",
    attacks: "1 longsword +2 (1d8) or 1 crossbow (far) +1 (1d6)",
    stats: {
      ac: "15 (chainmail + shield)",
      hp: "10",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+1",
      int: "+0",
      wis: "+0",
      cha: "+0"
    },
  },
  {
    name: "SPHINX",
    flavourText: "A winged, leonine oracle who can see into time and space and often speaks in riddles. Lives in isolated mountains.",
    alignment: "L",
    level: "9",
    attacks: "3 claw +7 (1d10) or 2 spell +5",
    stats: {
      ac: "16",
      hp: "42",
      mv: "double near (fly)",
      str: "+4",
      dex: "+1",
      con: "+2",
      int: "+4",
      wis: "+4",
      cha: "+3"
    },
    specials: {
      Roar: "In place of attacks, all creatures who can hear within far DC 18 CHA or paralyzed 1d4 rounds.",
      "Gate (WIS Spell)": "DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed.",
      "Omens (WIS Spell)": "DC 12. Self. ADV on all actions for 1d4 rounds.",
      "Riddle (WIS Spell)": "DC 12. One target in far DC 15 INT or stupefied 1d4 rounds.",
      "Time Bend (WIS Spell)": "DC 14. One target in near frozen in time for 1d4 rounds.",
      "Unmake (WIS Spell)": "DC 13. One target in far takes 3d8 damage.",
    }
  },
  {
    name: "SPIDER",
    flavourText: "Silent, web-weaving arachnids with a flesh-dissolving venom.",
    alignment: "N",
    level: "0",
    attacks: "2 bite +1 (1 + poison)",
    stats: {
      ac: "11",
      hp: "1",
      mv: "near (climb)",
      str: "-4",
      dex: "+1",
      con: "+0",
      int: "-4",
      wis: "+0",
      cha: "-4"
    },
    specials: {
      Poison: "DC 9 CON or take 1d4 damage."
    }
  },
  {
    name: "SPIDER, GIANT",
    flavourText: "Bulbous abdomen and eight, spindly legs. Dwells high in trees or caves and ambushes prey, capturing them to eat later.",
    alignment: "N",
    level: "3",
    attacks: "1 bite +3 (1d4 + poison)",
    stats: {
      ac: "13",
      hp: "13",
      mv: "near (climb)",
      str: "+2",
      dex: "+3",
      con: "+0",
      int: "-2",
      wis: "+1",
      cha: "-2"
    },
    specials: { Poison: "DC 12 CON or paralyzed 1d4 hours." }
  },
  {
    name: "SPIDER, SWARM",
    flavourText: "A scurrying carpet of spiders.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +3 (1d4 + poison)",
    stats: {
      ac: "13",
      hp: "9",
      mv: "near (climb)",
      str: "-1",
      dex: "+3",
      con: "+0",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: { Poison: "DC 12 CON or paralyzed 1d4 rounds." }
  },
  {
    name: "STINGBAT",
    flavourText: "Darting, orange insect-bat with four wings and needlelike beak.",
    alignment: "N",
    level: "1",
    attacks: "1 beak +2 (1d4 + blood drain)",
    stats: {
      ac: "12",
      hp: "4",
      mv: "near (fly)",
      str: "-2",
      dex: "+2",
      con: "+0",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      "Blood Drain": "Attach to bitten target; auto-hit the next round. DC 9 STR on turn to remove."
    }
  },
  {
    name: "STRANGLER",
    flavourText: "A gray-skinned, gaunt creature with four ropy limbs tipped in sucker-lined claws.",
    alignment: "C",
    level: "3",
    attacks: "2 claws +2 (1d6)",
    stats: {
      ac: "12",
      hp: "14",
      mv: "near (climb)",
      str: "-2",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+0",
      cha: "-2"
    },
    specials: {
      Stealthy: "ADV on DEX checks to sneak and hide.",
      Strangle: "Deals x2 damage against surprised creatures.",
    }
  },
  {
    name: "THE TEN-EYED ORACLE",
    flavourText: "A floating mass of rubbery skin crusted with barnacles. Its ten eyestalks writhe like snakes, and a deep, circular scar mars its central body, blinding what was once a large eye above a lipless maw. The Ten-Eyed Oracle stalks the Shadowdark, burbling mad prophesies and somehow moving freely between the lightless fathoms of the earth. The keepers of the deep lore suspect The Ten-Eyed Oracle was once a benevolent ally of mankind, but an unknown calamity drove it to insanity and reckless hatred.",
    alignment: "C",
    level: "18",
    attacks: "2d4 eyestalk ray",
    stats: {
      ac: "17",
      hp: "85",
      mv: "near (fly)",
      str: "+4",
      dex: "+5",
      con: "+4",
      int: "+5",
      wis: "+4",
      cha: "+4"
    },
    specials: {
      Legendary: "Only damaged by magical sources. Hostile spells targeting The Ten-Eyed Oracle are DC 18 to cast.",
      "Eyestalk Ray": `Each ray can shoot once per round and target one creature or an object up to 1,000 pounds (up to four on same target).
1. Charm. DC 15 CHA or become ally for 1d4 rounds.
2. Hold. DC 15 STR or paralyzed 1d4 rounds.
3. Sleep. DC 15 WIS or asleep 1d4 rounds.
4. Polymorph. DC 15 INT or turned into vermin for 1d4 rounds.
5. Cancel. DC 15 DEX or all magical effects on target end.
6. Confusion. DC 15 WIS or attack a random ally within near.
7. Telekinesis. DC 15 STR or hover target up to double near.
8. Disintegrate. DC 15 DEX or 5d8 damage (object destroyed).
9. Petrify. DC 15 CON or petrified.
10. Death. DC 15 CON or drop to 0 HP with a death timer of 1.`
    }
  },
  {
    name: "THE TARRASQUE",
    flavourText: "A colossal, four-legged reptile with crocodilian jaws, amber scales, and a diamond-hard, spiked carapace. It towers overhead like a mountain, able to swallow entire villages in one gulp. The tarrasque hibernates deep in the earth or at the bottom of the sea for centuries, only awakening long enough to fill its vast belly in an indiscriminate rampage of terror and destruction. There is only one tarrasque, and it is the most dreaded creature to walk the earth.",
    alignment: "N",
    level: "30",
    attacks: "4 thrash (near) +13 (3d10 + sever) and 1 bite (near) +13 (5d10 + sever + swallow)",
    stats: {
      ac: "22",
      hp: "140",
      mv: "triple near (burrow, swim)",
      str: "+7",
      dex: "+2",
      con: "+5",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      Legendary: "Only damaged by magical sources. Hostile spells targeting the tarrasque are DC 18 to cast.",
      "Deep Dweller": "Immune to harm from fire and cold. Amphibious. Permanent Death. Cannot be permanently killed unless a wish spell is cast on it while it is at 0 HP.",
      Rampage: "In place of attacks, move far in a straight line and make one bite attack. On a hit, triple damage.",
      "Reflective Carapace": "Immune to rays, blasts, or bolts of energy. 1:6 chance these are reflected back at their originator.",
      Regeneration: "Regains 4d10 lost HP at the beginning of its turn. Sever. On a natural attack roll of 18+, the attack also severs a random limb. 1d6: 1. Head, 2-4. Arm, 5-6. Leg.",
      Swallow: "DC 18 STR or swallowed whole. Total darkness inside and 4d10 damage per round. Tarrasque regurgitates all swallowed if dealt at least 30 damage in one round to the inside of its gullet."
    }
  },
  {
    name: "THE WANDERING MERCHANT",
    flavourText: "A cheerful merchant who appears to be a hale, middle-aged human man with a handlebar mustache. He wears a white shirt, breeches, and leather apron, and he hauls a towering backpack bursting at the seams. Few know the merchant's true nature and origins, though some theorize he is an immortal being or a god (they are not entirely incorrect). The Wandering Merchant always has something useful, far-flung, or incredible to sell at a reasonable price, and there's no telling when or where he'll show up next...",
    alignment: "L",
    level: "15",
    attacks: "4 +3 vorpal bastard sword +9 (1d10 + lop)",
    stats: {
      ac: "16 (mithral chainmail)",
      hp: "71",
      mv: "near",
      str: "+3",
      dex: "+3",
      con: "+4",
      int: "+3",
      wis: "+4",
      cha: "+5"
    },
    specials: {
      Legendary: "Only damaged by magical sources. Hostile spells targeting The Wandering Merchant are DC 18 to cast.",
      "Amulet of Rahm-Hotep": "In place of attacks, teleport to a random location in the multiverse.",
      "Bottomless Bag": "Contains 200 gear slots in magical sub-pockets. Weighs as much as a normal backpack. The Wandering Merchant can summon it to himself from anywhere by snapping his fingers.",
      "Dice of Truth": "A set of three six-sided dice whose rolls cannot be magically or mundanely altered in any way. Lop. On a natural attack roll of 18-20, behead the target.",
      Reckoning: "Any creature who steals from The Wandering Merchant develops a curse. Over the next 2d8 days, that creature turns into a cockatrice. This curse can only be lifted by a wish spell or by returning the stolen goods. Strange Lands. The Wandering Merchant does not suffer any ill effects from the natural environment he does not wish to suffer."
    }
  },
  {
    name: "THIEF",
    flavourText: "A cat burglar in a black cloak.",
    alignment: "N",
    level: "3",
    attacks: "1 dagger (close/near) +2 (1d4) or 1 shortsword +0 (1d6)",
    stats: {
      ac: "13 (leather)",
      hp: "13",
      mv: "near",
      str: "+0",
      dex: "+2",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+1"
    },
    specials: {
      Stealthy: "ADV on DEX checks to sneak and hide.",
      Backstab: "Deal x2 damage against surprised creatures.",
    }
  },
  {
    name: "THUG",
    flavourText: "A bruised and boorish ruffian.",
    alignment: "C",
    level: "1",
    attacks: "1 shortsword +1 (1d6)",
    stats: {
      ac: "13 (leather + shield)",
      hp: "4",
      mv: "near",
      str: "+1",
      dex: "+0",
      con: "+0",
      int: "-1",
      wis: "+1",
      cha: "-1"
    },
  },
  {
    name: "TREANT",
    flavourText: "Peaceful, slow-moving trees with merry eyes and tremulous voices. They protect the forest.",
    alignment: "N",
    level: "8",
    attacks: "3 slam +8 (1d10) or 1 rock (far) +8 (2d12)",
    stats: {
      ac: "14",
      hp: "38",
      mv: "near",
      str: "+4",
      dex: "-1",
      con: "+2",
      int: "+2",
      wis: "+3",
      cha: "+1"
    },
    specials: {
      "Animate Tree": "2/day. In place of attacks, one tree within near awakens as a treant ally without this ability. Reverts back in 1 day."
    }
  },
  {
    name: "TROLL",
    flavourText: "Green, lanky giants with warty skin and territorial rage. Lair in deep forests and swamps.",
    alignment: "C",
    level: "5",
    attacks: "2 claw +4 (1d6) and 1 bite +4 (1d10)",
    stats: {
      ac: "12",
      hp: "24",
      mv: "near",
      str: "+3",
      dex: "+2",
      con: "+2",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Regenerate: "Regains 2d6 HP on its turn unless its wounds are cauterized with fire or acid."
    }
  },
  {
    name: "TROLL, FROST",
    flavourText: "Rime-covered trolls with blue skin and flinty, black eyes. They stalk arctic lands and frozen boreal forests.",
    alignment: "C",
    level: "7",
    attacks: "2 claw +5 (1d8) and 1 bite +5 (1d12)",
    stats: {
      ac: "13",
      hp: "34",
      mv: "near",
      str: "+3",
      dex: "+2",
      con: "+3",
      int: "-1",
      wis: "+0",
      cha: "-1"
    },
    specials: {
      Impervious: "Cold and fire immune.",
      Regenerate: "Regains 2d6 HP on its turn unless its wounds are cauterized with acid.",
    }
  },
  {
    name: "UNICORN",
    flavourText: "A silvery horse with a flowing mane and a single spiral horn.",
    alignment: "L",
    level: "4",
    attacks: "1 hooves +3 (1d6)",
    stats: {
      ac: "12",
      hp: "20",
      mv: "double near",
      str: "+3",
      dex: "+2",
      con: "+2",
      int: "+1",
      wis: "+2",
      cha: "+3"
    },
    specials: {
      "Healing Horn": "A touch heals 2d6 HP or ends one curse or disease."
    }
  },
  {
    name: "VAMPIRE",
    flavourText: "Pale, blood-drinking undead of supreme power and wickedness. They loathe sunlight and protect their coffins at all costs.",
    alignment: "C",
    level: "11",
    attacks: "3 bite +7 (1d8 + blood drain) or 1 charm",
    stats: {
      ac: "15",
      hp: "52",
      mv: "near (climb)",
      str: "+4",
      dex: "+3",
      con: "+3",
      int: "+1",
      wis: "+3",
      cha: "+4"
    },
    specials: {
      "Supreme Undead": "Immune to morale checks. Only damaged by magical sources.",
      "Blood Drain": "Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as vampire or vampire spawn (vampire chooses).",
      "Charm": "One humanoid target who can see vampire within near, DC 15 CHA or under vampire's control for 1d4 days.",
      "Shapechange": "In place of attacks, turn into a bat, wolf, or back into regular form.",
      "Vampire": "Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP.",
    }
  },
  {
    name: "VAMPIRE SPAWN",
    flavourText: "Lesser, feral vampires born from the bite of their vampiric sires. Bloodthirsty and savage. They rarely leave a victim alive.",
    alignment: "C",
    level: "5",
    attacks: "2 bite +4 (1d8 + blood drain)",
    stats: {
      ac: "13 (leather)",
      hp: "25",
      mv: "near (climb)",
      str: "+3",
      dex: "+2",
      con: "+3",
      int: "-1",
      wis: "+1",
      cha: "+2"
    },
    specials: {
      "Greater Undead": "Immune to morale checks. Only damaged by silver or magical sources.",
      "Blood Drain": "Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as a vampire spawn.",
      Vampire: "Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP."
    }
  },
  {
    name: "VIOLET FUNGUS",
    flavourText: "Child-sized, creeping fungi with neon purple caps. Their whiplike roots decompose living flesh.",
    alignment: "N",
    level: "2 ",
    attacks: "2 tendril (near) +0 (1d4)",
    stats: {
      ac: "7",
      hp: "9",
      mv: "close",
      str: "-3",
      dex: "-2",
      con: "+0",
      int: "-4",
      wis: "-3",
      cha: "-4"
    },
  },
  {
    name: "VIPERIAN",
    flavourText: "Lithe, snake-headed people with cobra hoods and emerald green scales covering their bodies.",
    alignment: "C",
    level: "3",
    attacks: "2 scimitar +2 (1d6) or 1 javelin (close/far) +2 (1d4)",
    stats: {
      ac: "13",
      hp: "13",
      mv: "near",
      str: "+1",
      dex: "+1",
      con: "+0",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
  },
  {
    name: "VIPERIAN, OPHID",
    flavourText: "A giant anaconda body merges into a humanoid torso with a large snake head. It wears golden torcs and strings of glittering moonstones.",
    alignment: "C",
    level: "6",
    attacks: "3 falchion +5 (1d10) or 2 longbow (far) +3 (1d8)",
    stats: {
      ac: "14",
      hp: "28",
      mv: "near (climb)",
      str: "+4",
      dex: "+2",
      con: "+1",
      int: "+1",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      Impervious: "Can only be harmed by magical sources."
    }
  },
  {
    name: "VIPERIAN, WIZARD",
    flavourText: "Thin viperians with scales tinged in black. They wear silk robes and silver, serpentine jewelry.",
    alignment: "C",
    level: "8",
    attacks: "1 dagger (close/ near) +2 (1d4) or 2 spell +5",
    stats: {
      ac: "13",
      hp: "37",
      mv: "near",
      str: "+0",
      dex: "+1",
      con: "+0",
      int: "+3",
      wis: "+1",
      cha: "+1"
    },
    specials: {
      "Hiss (INT Spell)": "DC 12. End one spell within far.",
      "Summon Cobra (INT Spell)": "DC 13. Summon 1d4 loyal cobras that appear within near. They leave in 1d4 rounds.",
      "Venom (INT Spell)": "DC 12. One target in far takes 2d8 damage.",
      "Whispers (INT Spell)": "DC 14. Focus. All enemies within near of viperian wizard have DISADV on spellcasting checks for the duration.",
    }
  },
  {
    name: "VULTURE",
    flavourText: "Scavenger birds with black feathers, hunched backs, and bald heads.",
    alignment: "N",
    level: "1",
    attacks: "1 tear +1 (1d4)",
    stats: {
      ac: "10",
      hp: "5",
      mv: "near (fly)",
      str: "+1",
      dex: "+0",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: {
      "Carrion Tracker": "Can track dead flesh unerringly within a mile."
    }
  },
  {
    name: "WASP, GIANT",
    flavourText: "Man-sized wasps with glossy, yellow-striped abdomens.",
    alignment: "N",
    level: "2",
    attacks: "1 sting +3 (1d6 + venom)",
    stats: {
      ac: "13",
      hp: "9",
      mv: "near (fly)",
      str: "+1",
      dex: "+3",
      con: "+0",
      int: "-3",
      wis: "+0",
      cha: "-3"
    },
  },
  {
    name: "Venom. DC 9 CON or go to 0 HP. WERERAT",
    flavourText: "A slinking, rat-faced humanoid covered in mangy fur.",
    alignment: "C",
    level: "3",
    attacks: "2 bite +2 (1d6)",
    stats: {
      ac: "13 (leather)",
      hp: "14",
      mv: "near (climb)",
      str: "+1",
      dex: "+2",
      con: "+1",
      int: "-1",
      wis: "+1",
      cha: "-1"
    },
    specials: {
      Impervious: "Only damaged by silver or magic sources.",
      Lycanthropy: "If 12 or more damage from the same wererat, contract lycanthropy.",
    }
  },
  {
    name: "WEREWOLF",
    flavourText: "A bipedal, wolf-faced humanoid covered in brown fur.",
    alignment: "C",
    level: "4",
    attacks: "2 rend +3 (1d6)",
    stats: {
      ac: "12",
      hp: "20",
      mv: "double near",
      str: "+3",
      dex: "+2",
      con: "+2",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Impervious: "Only damaged by silver or magic sources.",
      Lycanthropy: "If 12 or more damage from the same werewolf, contract lycanthropy.",
    }
  },
  {
    name: "WIGHT",
    flavourText: "A pale, armored undead warrior with sinister intelligence.",
    alignment: "C",
    level: "3",
    attacks: "1 bastard sword +3 (1d10) and 1 life drain +3",
    stats: {
      ac: "14 (chainmail)",
      hp: "15",
      mv: "near",
      str: "+3",
      dex: "+1",
      con: "+2",
      int: "+1",
      wis: "+0",
      cha: "+3"
    },
    specials: {
      "Greater Undead": "Immune to morale checks. Only damaged by silver or magical sources.",
      "Life Drain": "1d4 CON damage. Death if reduced to 0 CON.",
    }
  },
  {
    name: "WILL-O'-WISP",
    flavourText: "A bobbing marsh light animated by an evil spirit. It tries to lead the living into danger.",
    alignment: "C",
    level: "2",
    attacks: "1 life drain +3",
    stats: {
      ac: "13",
      hp: "10",
      mv: "near (fly)",
      str: "-3",
      dex: "+3",
      con: "+1",
      int: "-1",
      wis: "-1",
      cha: "-2"
    },
    specials: {
      "Life Drain": "1d4 CON damage. Death if reduced to 0 CON."
    }
  },
  {
    name: "WOLF",
    flavourText: "A giant canine with a gray pelt, yellow eyes, and dripping jaws.",
    alignment: "N",
    level: "2",
    attacks: "1 bite +2 (1d6)",
    stats: {
      ac: "12",
      hp: "10",
      mv: "double near",
      str: "+2",
      dex: "+2",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "+0"
    },
    specials: { "Pack Hunter": "Deals +1 damage while an ally is close." }
  },
  {
    name: "WOLF, DIRE",
    flavourText: "A massive wolf with spines of black bone along its brow ridge and back.",
    alignment: "N",
    level: "4",
    attacks: "2 bite +4 (1d8)",
    stats: {
      ac: "12",
      hp: "19",
      mv: "double near",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "-1",
      wis: "+1",
      cha: "+0"
    },
    specials: { "Pack Hunter": "Deals +1 damage while an ally is close." }
  },
  {
    name: "WOLF, WINTER",
    flavourText: "Sinister, white-pelted wolves with piercing blue eyes. From the fey realms of eternal winter.",
    alignment: "C",
    level: "5",
    attacks: "2 bite +4 (1d6) or 1 frost breath",
    stats: {
      ac: "12",
      hp: "23",
      mv: "double near",
      str: "+3",
      dex: "+2",
      con: "+1",
      int: "+0",
      wis: "+1",
      cha: "+0"
    },
    specials: {
      Impervious: "Cold immune.",
      "Frost Breath": "Fills a near-sized cube extending from winter wolf. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds."
    }
  },
  {
    name: "WORG",
    flavourText: "Bat-faced wolves that speak Goblin and often serve as war mounts for goblinkind.",
    alignment: "C",
    level: "3",
    attacks: "1 bite +3 (1d6)",
    stats: {
      ac: "11",
      hp: "14",
      mv: "double near",
      str: "+2",
      dex: "+1",
      con: "+1",
      int: "-2",
      wis: "+1",
      cha: "-1"
    }
  },
  {
    name: "WRAITH",
    flavourText: "A shadowy spirit seething with anger and malice. Its presence is unsettling to animals.",
    alignment: "C",
    level: "8",
    attacks: "3 death touch +6 (1d10 + life drain)",
    stats: {
      ac: "14",
      hp: "36",
      mv: "near (fly)",
      str: "-4",
      dex: "+4",
      con: "+0",
      int: "+0",
      wis: "+0",
      cha: "+3"
    },
    specials: {
      "Greater Undead": "Immune to morale checks. Only damaged by silver or magical sources.",
      Incorporeal: "In place of attacks, become corporeal or incorporeal.",
      "Life Drain": "1d4 CON damage. Death if reduced to 0 CON."
    }
  },
  {
    name: "WYVERN",
    flavourText: "Dragon-cousins with a large tail stinger, mottled lizard skin, and leathery wings.",
    alignment: "N",
    level: "8",
    attacks: "2 rend +6 (1d8) and 1 stinger +6 (1d6 + poison)",
    stats: {
      ac: "15",
      hp: "37",
      mv: "double near (fly)",
      str: "+4",
      dex: "+2",
      con: "+1",
      int: "-3",
      wis: "+1",
      cha: "-3"
    },
    specials: { Poison: "DC 15 CON or take 2d10 damage." }
  },
  {
    name: "ZOMBIE",
    flavourText: "Lurching and decomposed undead that hunt in mobs.",
    alignment: "C",
    level: "2",
    attacks: "1 slam +2 (1d6)",
    stats: {
      ac: "8",
      hp: "11",
      mv: "near",
      str: "+2",
      dex: "-2",
      con: "+2",
      int: "-2",
      wis: "-2",
      cha: "-3"
    },
    specials: {
      Undead: "Immune to morale checks.",
      Relentless: "If zombie reduced to 0 HP by a non-magical source, DC 15 CON to go to 1 HP instead.",
    }
  }
]