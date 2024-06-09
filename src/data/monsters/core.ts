import type { WithUUID } from "@/services/db";
import type { Monster } from "./type";

export const monsters: WithUUID<Monster>[] = [
  {
    "uuid": "00182005-7416-4426-8f06-1cc2e612d8b0",
    "name": "GIANT, CLOUD",
    "flavourText": "Pale, angular giants with blue-gray hair, light eyes, and silk robes. They do not allow outsiders into their enclaves.",
    "alignment": "N",
    "level": "10",
    "attacks": "3 morningstar +9 (2d10)",
    "stats": {
      "ac": "15 (leather)",
      "hp": "48",
      "mv": "double near",
      "str": "+5",
      "dex": "+4",
      "con": "+3",
      "int": "+3",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Alert",
        "text": "ADV on checks to detect sneaking or hiding creatures."
      }
    ]
  },
  {
    "uuid": "012ca6cd-21c1-4717-8299-e1556451e3de",
    "name": "FROG, GIANT",
    "flavourText": "Human-sized frogs with warty skin and long, sticky tongues.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 tongue and 1 bite +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "10",
      "mv": "near (swim)",
      "str": "+2",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Tongue",
        "text": "1 creature in near DC 12 DEX or pulled to close range."
      }
    ]
  },
  {
    "uuid": "01b0d602-2e46-4374-bb57-e6cda2e0ee35",
    "name": "ANGEL, DOMINI",
    "flavourText": "Winged, flawless humans glowing with bronze sunlight.",
    "alignment": "L",
    "level": "9",
    "attacks": "3 bastard sword +7 (1d8) or 1 horn",
    "stats": {
      "ac": "17 (plate mail + shield)",
      "hp": "42",
      "mv": "near (fly)",
      "str": "+4",
      "dex": "+1",
      "con": "+2",
      "int": "+3",
      "wis": "+4",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Horn",
        "text": "All enemies in near DC 15 CHA or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "0364141b-9de1-4ad5-afa3-a0aa82341f3f",
    "name": "SAHUAGIN",
    "flavourText": "Humanoids with sea-green skin, webbed limbs, and shark teeth. Vicious hunters.",
    "alignment": "C",
    "level": "2",
    "attacks": "2 trident (near) +1 (1d6)",
    "stats": {
      "ac": "14 (leather + shield)",
      "hp": "9",
      "mv": "near (swim)",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Half-Amphibious",
        "text": "Must be submerged in water every 4 hours or suffocates."
      }
    ]
  },
  {
    "uuid": "03f97028-05a1-4c4c-a720-2f265b83eb29",
    "name": "RHINOCEROS",
    "flavourText": "Gray-skinned bulls with single nose horns. Dwell in grasslands.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 horn +4 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "25",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+3",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Charge",
        "text": "Move up to double near in straight line and make 1 horn attack. If hit, x3 damage."
      }
    ]
  },
  {
    "uuid": "08b07489-d824-4a2a-9b5c-9b1816993e50",
    "name": "WYVERN",
    "flavourText": "Dragon-cousins with a large tail stinger, mottled lizard skin, and leathery wings.",
    "alignment": "N",
    "level": "8",
    "attacks": "2 rend +6 (1d8) and 1 stinger +6 (1d6 + poison)",
    "stats": {
      "ac": "15",
      "hp": "37",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or take 2d10 damage."
      }
    ]
  },
  {
    "uuid": "0a1bd20a-8ae9-454f-9a25-0866b288a3c8",
    "name": "ASSASSIN",
    "flavourText": "A black-cloaked, skulking killer.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 poisoned dagger (close/near) +6 (2d4)",
    "stats": {
      "ac": "15 (leather)",
      "hp": "38",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+4",
      "con": "+2",
      "int": "+2",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Execute",
        "text": "Deals x3 damage against surprised targets."
      }
    ]
  },
  {
    "uuid": "0a6f6c4d-77af-469c-a897-69420b1f96c4",
    "name": "MAMMOTH",
    "flavourText": "Massive, shaggy elephants with tusks that reach the ground.",
    "alignment": "N",
    "level": "9",
    "attacks": "2 tusks +7 (1d12)",
    "stats": {
      "ac": "15",
      "hp": "44",
      "mv": "near",
      "str": "+5",
      "dex": "+0",
      "con": "+4",
      "int": "-2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Thick Fur",
        "text": "Cold immune."
      },
      {
        "name": "Charge",
        "text": "Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage."
      }
    ]
  },
  {
    "uuid": "0c2ad7df-1c6a-4d3b-a2b6-0491ff2771ad",
    "name": "MUSHROOMFOLK",
    "flavourText": "Lumbering humanoids with spongy, elongated bodies and toadstools on their heads.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 slam +2 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "15",
      "mv": "near",
      "str": "+2",
      "dex": "-1",
      "con": "+2",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Sunblind",
        "text": "Blinded in bright light. Telepathic. Speak mentally with creatures within double near."
      }
    ]
  },
  {
    "uuid": "0c6ad458-1051-45eb-84a6-a143477c0760",
    "name": "SNAKE, SWARM",
    "flavourText": "A roiling wave of snakes darting and flowing across the ground.",
    "alignment": "N",
    "level": "4",
    "attacks": "3 bite +2 (1d4 + poison)",
    "stats": {
      "ac": "12",
      "hp": "19",
      "mv": "near",
      "str": "-3",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or go to 0 HP in 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "1054e600-0ef5-47f1-9d5f-db03eefc607f",
    "name": "Poison. DC 12 CON or go to 0 HP. SHADOW",
    "flavourText": "Flitting, sentient shadows in the vague shape of a human.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 touch +2 (1d4 + drain)",
    "stats": {
      "ac": "12",
      "hp": "15",
      "mv": "near (fly)",
      "str": "-4",
      "dex": "+2",
      "con": "+2",
      "int": "-2",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Drain",
        "text": "Target takes 1 STR damage. At 0 STR, target dies and becomes a shadow."
      }
    ]
  },
  {
    "uuid": "138ebe32-9ece-4845-9bdb-80fb1a211ed9",
    "name": "GOLEM, STONE",
    "flavourText": "A wide-limbed, lumbering statue that shakes the ground.",
    "alignment": "N",
    "level": "8",
    "attacks": "3 slam +6 (1d10) and 1 slow",
    "stats": {
      "ac": "18",
      "hp": "40",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+4",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Golem",
        "text": "Immune to damage from fire, cold, electricity, or non-magical sources."
      },
      {
        "name": "Slow",
        "text": "Far range, one target. DC 15 CON or speed halved 1d4 rds."
      }
    ]
  },
  {
    "uuid": "139cbc2c-dc7f-44a3-a6e5-9a9b72ac8478",
    "name": "GRAY OOZE",
    "flavourText": "Slick puddles the color of stone.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 tentacle +2 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "9",
      "mv": "near (climb)",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to damage from acid, cold, or fire."
      },
      {
        "name": "Corrosive",
        "text": "Nonmagical metal that touches the ooze dissolves on a d6 roll of 1-3."
      }
    ]
  },
  {
    "uuid": "142c6e78-334b-4a87-baf3-476b95a5444f",
    "name": "GRIMLOW",
    "flavourText": "A tall, oval-shaped mammal. A giant, half-moon maw hides on its belly beneath its gray fur.",
    "alignment": "N",
    "level": "9",
    "attacks": "1 grab and 3 bite +6 (2d8)",
    "stats": {
      "ac": "12",
      "hp": "43",
      "mv": "near",
      "str": "+4",
      "dex": "+2",
      "con": "+3",
      "int": "-3",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "One target in near DC 15 STR or wrapped in grimlow's tongue and pulled into its mouth. Bite attacks automatically hit the target. Can only grab 1 target at a time. DC 15 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "17ac084c-82ed-47a2-b0e1-5eeca63d5cd0",
    "name": "MANTICORE",
    "flavourText": "Human-faced lions with bat wings and cruelly spiked tails. They speak halting Thanian and love devouring human flesh.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 rend +6 (2d6) or 2 tail spike (far) +4 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "29",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+2",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Spikes",
        "text": "Manticores have 4d6 tail spikes. They regrow each day."
      }
    ]
  },
  {
    "uuid": "18caab50-c404-473c-83c5-6afb36d13761",
    "name": "CYCLOPS",
    "flavourText": "Reclusive, one-eyed giants towering 20' high. They live simply on remote farmlands.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 greatclub +7 (2d8) or 1 rock (far) +5 (1d12)",
    "stats": {
      "ac": "11 (leather)",
      "hp": "38",
      "mv": "double near",
      "str": "+5",
      "dex": "+0",
      "con": "+2",
      "int": "-1",
      "wis": "-2",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "1acc6c77-aaf8-4fa1-8fbc-e3a2709b98d8",
    "name": "THIEF",
    "flavourText": "A cat burglar in a black cloak.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 dagger (close/near) +2 (1d4) or 1 shortsword +0 (1d6)",
    "stats": {
      "ac": "13 (leather)",
      "hp": "13",
      "mv": "near",
      "str": "+0",
      "dex": "+2",
      "con": "+0",
      "int": "+0",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Stealthy",
        "text": "ADV on DEX checks to sneak and hide."
      },
      {
        "name": "Backstab",
        "text": "Deal x2 damage against surprised creatures."
      }
    ]
  },
  {
    "uuid": "1be1eaa7-d436-4328-ba8a-785f4af53556",
    "name": "GIANT, HILL",
    "flavourText": "Fleshy hulks with leathery skin and broad, sloping foreheads. Cruel, boorish, and dim-witted.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 greatclub +6 (2d8) or 1 boulder (far) +6 (2d10)",
    "stats": {
      "ac": "11 (leather)",
      "hp": "34",
      "mv": "double near",
      "str": "+4",
      "dex": "+0",
      "con": "+3",
      "int": "-2",
      "wis": "-2",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "1bff521a-d510-4d4f-9baf-d2eb91898e53",
    "name": "BRACHIOSAURUS",
    "flavourText": "Colossal, long-necked tree grazers. Slow and peaceful.",
    "alignment": "N",
    "level": "12",
    "attacks": "3 stomp +7 (2d10)",
    "stats": {
      "ac": "13",
      "hp": "57",
      "mv": "double near",
      "str": "+6",
      "dex": "-1",
      "con": "+3",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "200563a9-01f6-4119-be86-6c0447ab6e11",
    "name": "WOLF, WINTER",
    "flavourText": "Sinister, white-pelted wolves with piercing blue eyes. From the fey realms of eternal winter.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 bite +4 (1d6) or 1 frost breath",
    "stats": {
      "ac": "12",
      "hp": "23",
      "mv": "double near",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Cold immune."
      },
      {
        "name": "Frost Breath",
        "text": "Fills a near-sized cube extending from winter wolf. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "22a0e9d4-fb56-465e-9e0b-0cce37d91cd3",
    "name": "BEAR, POLAR",
    "flavourText": "A mighty, white bear that thrives in arctic environments.",
    "alignment": "N",
    "level": "7",
    "attacks": "2 claw +6 (2d6)",
    "stats": {
      "ac": "13",
      "hp": "34",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Crush",
        "text": "Deals an extra die of damage if it hits the same target with both claws."
      }
    ]
  },
  {
    "uuid": "23a77c3a-86e4-479c-aabf-10aa8a6177b5",
    "name": "VULTURE",
    "flavourText": "Scavenger birds with black feathers, hunched backs, and bald heads.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 tear +1 (1d4)",
    "stats": {
      "ac": "10",
      "hp": "5",
      "mv": "near (fly)",
      "str": "+1",
      "dex": "+0",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Carrion Tracker",
        "text": "Can track dead flesh unerringly within a mile."
      }
    ]
  },
  {
    "uuid": "23fa5b50-31be-4f49-a921-2fc94b1c1411",
    "name": "ELEMENTAL, EARTH",
    "flavourText": "A thundering pillar of earth.",
    "alignment": "N",
    "level": "6/9",
    "attacks": "3 slam +7 (2d8/3d8) or 1 avalanche",
    "stats": {
      "ac": "17",
      "hp": "31/44",
      "mv": "near (burrow)",
      "str": "+5",
      "dex": "+0",
      "con": "+4",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources."
      },
      {
        "name": "Avalanche",
        "text": "All within close DC 15 STR or entombed for 1d4 rounds under mounds of earth."
      }
    ]
  },
  {
    "uuid": "248c8bf5-1892-4333-a419-8245dc93afe7",
    "name": "Thick Fur. Cold immune. BEASTMAN",
    "flavourText": "A cave hominid with scraggly fur and a stone-tipped spear.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 spear (close/near) +2 (1d6 + 1)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "5",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Brutal",
        "text": "+1 damage with melee weapons (included)."
      }
    ]
  },
  {
    "uuid": "26cbd284-f6ea-4f17-9cf9-6f8aafb5e9ab",
    "name": "AZER",
    "flavourText": "Dwarves with bronze, metallic skin and flames in place of hair. Gifted blacksmiths.",
    "alignment": "L",
    "level": "3",
    "attacks": "2 flaming warhammer +3 (1d10, ignites flammables) or 1 crossbow (far) +0 (1d6)",
    "stats": {
      "ac": "15",
      "hp": "15",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+2",
      "int": "+0",
      "wis": "+0",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune."
      }
    ]
  },
  {
    "uuid": "2704e84c-393c-42e5-b8d6-365c34f14123",
    "name": "MANTA, RAY GIANT",
    "flavourText": "Swooping manta rays as large as longboats. Gentle and intelligent enough to be trained.",
    "alignment": "N",
    "level": "8",
    "attacks": "2 sting +5 (1d12 + poison)",
    "stats": {
      "ac": "13",
      "hp": "37",
      "mv": "double near (swim)",
      "str": "+3",
      "dex": "+3",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or drop to 0 hit points in 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "285aa1d6-b9ed-46ed-80ad-0002061a4d9c",
    "name": "GNOLL",
    "flavourText": "Barbaric, opportunistic hyena- folk who range in large packs.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 spear (close/near) +1 (1d6) or 1 longbow (far) +1 (1d8)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "10",
      "mv": "near",
      "str": "+1",
      "dex": "+1",
      "con": "+1",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Rage",
        "text": "1/day, immune to morale checks, +1d4 damage (3 rounds)."
      }
    ]
  },
  {
    "uuid": "2888dcb3-a68d-4b7c-8373-1cb5c70472c6",
    "name": "ORC",
    "flavourText": "A tusked, tall humanoid with gray skin and pointed ears.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 greataxe +2 (1d8)",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "4",
      "mv": "near",
      "str": "+2",
      "dex": "+0",
      "con": "+0",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Rage",
        "text": "1/day, immune to morale checks, +1d4 damage (3 rounds)."
      }
    ]
  },
  {
    "uuid": "2b469bf7-3159-453e-ad98-656b8fc22cd3",
    "name": "CENTAUR",
    "flavourText": "Herd-dwelling beings with the upper body of a human and lower body of a horse.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 spear (close/near) +2 (1d6) or 1 longbow (far) +1 (1d8)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "14",
      "mv": "double near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "+0",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": []
  },
  {
    "uuid": "2c3febc9-aa37-4a91-8038-e059581f693f",
    "name": "JELLYFISH",
    "flavourText": "Hand-sized, purple sea jellies with stinging tentacles.",
    "alignment": "N",
    "level": "0",
    "attacks": "1 sting +1 (1 + toxin)",
    "stats": {
      "ac": "11",
      "hp": "1",
      "mv": "close (swim)",
      "str": "-4",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "+1",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Toxin",
        "text": "DC 9 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "2d635f00-f195-40fe-8ab6-5c00c0593e2c",
    "name": "ROC",
    "flavourText": "Dragon-sized hawks that nest in remote mountains.",
    "alignment": "N",
    "level": "15",
    "attacks": "4 rend +9 (2d10 + grab)",
    "stats": {
      "ac": "15",
      "hp": "69",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+3",
      "con": "+2",
      "int": "-2",
      "wis": "+2",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "DC 18 STR or target held. DC 18 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "2d754825-1fdf-4fb5-baf9-f97b6ec47f82",
    "name": "SHAMBLING MOUND",
    "flavourText": "Fetid piles of slimy vegetation animated to life by lightning.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 slam +3 (1d6 + engulf)",
    "stats": {
      "ac": "14",
      "hp": "20",
      "mv": "near",
      "str": "+3",
      "dex": "-2",
      "con": "+2",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune. Healed by electricity."
      },
      {
        "name": "Engulf",
        "text": "If a target is hit by both slams in same round, it is pulled into shambling mound's body and suffocates in 2d4 rounds. DC 15 STR on turn to escape."
      }
    ]
  },
  {
    "uuid": "2dbcded9-704d-49c0-b645-4bc9f936e71f",
    "name": "BAT, GIANT",
    "flavourText": "Leathery, eagle-sized mammal with a taste for flesh.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "9",
      "mv": "near (fly)",
      "str": "-1",
      "dex": "+2",
      "con": "+0",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "2ed7998b-d4fa-45e8-ba9a-6cc88502979c",
    "name": "RUST MONSTER",
    "flavourText": "A mud-brown insect as big as a wolf with two feathery antennae. Consumes metal.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 claw +3 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "19",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+3",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Corrosive",
        "text": "Metal that touches the rust monster is destroyed on a d6 roll of 1-3."
      }
    ]
  },
  {
    "uuid": "2f1d5130-ee78-49e8-9253-2da12fdcb00d",
    "name": "BULETTE",
    "flavourText": "A hulking, shark-sized lizard with a steely, arrow-shaped carapace and a massive gullet.",
    "alignment": "N",
    "level": "8",
    "attacks": "3 bite +5 (2d6) or 1 leap",
    "stats": {
      "ac": "17",
      "hp": "40",
      "mv": "near (burrow)",
      "str": "+5",
      "dex": "+1",
      "con": "+4",
      "int": "-3",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Leap",
        "text": "Jump up to near in height and double near in distance, then make 2 bite attacks."
      }
    ]
  },
  {
    "uuid": "2fdc5f38-5dd2-47c5-bfa8-920d4dc20632",
    "name": "BANDIT",
    "flavourText": "Hard-bitten rogue in tattered leathers and a hooded cloak.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 club +1 (1d4) or 1 shortbow (far) +0 (1d4)",
    "stats": {
      "ac": "13 (leather + shield)",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+0",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Ambush",
        "text": "Deal an extra die of damage when undetected."
      }
    ]
  },
  {
    "uuid": "3089fe62-6663-49f5-bb14-1fb91ecf7849",
    "name": "GUARD",
    "flavourText": "A sentry equipped with sturdy weapons and armor.",
    "alignment": "L",
    "level": "1",
    "attacks": "1 spear (close/near) +1 (1d6) or 1 longsword +1 (1d8)",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+0",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "3107421a-5b9e-4830-9071-95bbab46bd7b",
    "name": "ANIMATED ARMOR",
    "flavourText": "An old suit of armor magically animated by a vengeful spirit.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 longsword +3 (1d8)",
    "stats": {
      "ac": "15",
      "hp": "11",
      "mv": "near",
      "str": "+3",
      "dex": "-1",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Statue",
        "text": "When standing still, looks exactly like a suit of armor."
      }
    ]
  },
  {
    "uuid": "354739d8-9ebd-4246-8f8a-64528ecf5493",
    "name": "ELEPHANT",
    "flavourText": "Mighty mammals with tough hide, flappy ears, and a trunk.",
    "alignment": "N",
    "level": "7",
    "attacks": "2 tusks +6 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "34",
      "mv": "near",
      "str": "+5",
      "dex": "+0",
      "con": "+3",
      "int": "-2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Charge",
        "text": "Move up to double near in straight line and make 1 tusks attack. If hit, x3 damage."
      }
    ]
  },
  {
    "uuid": "35b3a812-c3a7-490d-926d-b42a7ada05d4",
    "name": "GORGON",
    "flavourText": "A snorting bull made entirely of iron plating. A cloud of green fog billows from its nostrils.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 gore +6 (2d8) or 1 charge or 1 petrifying breath",
    "stats": {
      "ac": "18",
      "hp": "33",
      "mv": "double near",
      "str": "+4",
      "dex": "+0",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Charge",
        "text": "Move up to double near in straight line and make 1 gore attack. If hit, x3 damage."
      },
      {
        "name": "Petrifying Breath",
        "text": "Fills a near- sized cube extending from gorgon. DC 15 CON or petrified (gorgons immune)."
      }
    ]
  },
  {
    "uuid": "362b5582-637a-46b0-9db0-94e99358f31f",
    "name": "HOBGOBLIN",
    "flavourText": "A sturdy, tall goblin with russet skin. Militant and strategic.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 longsword +3 (1d8) or 1 longbow (far) +0 (1d8)",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "10",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "+2",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Phalanx",
        "text": "+1 to attacks and AC when in close range of an allied hobgoblin."
      }
    ]
  },
  {
    "uuid": "3673d2db-e783-49d7-8f02-53cc5b0028cd",
    "name": "RIME WALKER",
    "flavourText": "Human-shaped beings formed from black space ice. Their eyes are two flickering, white lights.",
    "alignment": "C",
    "level": "9",
    "attacks": "4 claw +8 (1d12)",
    "stats": {
      "ac": "16",
      "hp": "43",
      "mv": "near (fly)",
      "str": "+4",
      "dex": "+4",
      "con": "+3",
      "int": "+2",
      "wis": "+2",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to cold."
      },
      {
        "name": "Ice Aura",
        "text": "Enemies within near of rime walker DC 12 CON at start of turn or lose action."
      }
    ]
  },
  {
    "uuid": "36741e12-92e8-4ae5-92fe-5bed07a55936",
    "name": "DEVIL, ERINYES",
    "flavourText": "Raven-winged, resplendent beings in polished, black armor and helms with curved horns.",
    "alignment": "C",
    "level": "9",
    "attacks": "3 greatsword +8 (1d12) or 2 longbow (far) +8 (1d8 + poison)",
    "stats": {
      "ac": "17 (+1 plate mail)",
      "hp": "43",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+4",
      "con": "+3",
      "int": "+4",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or target's eyes go jet black and it turns on its allies for 1d4 rounds. DC 15 WIS on turn to end effect."
      }
    ]
  },
  {
    "uuid": "3782d7a2-f553-4157-99d3-dbcf0b9d8cfd",
    "name": "ABOLETH",
    "flavourText": "Enormous, antediluvian catfish covered in slime and tentacles. They hate all intelligent beings.",
    "attacks": "2 tentacle (near) +5 (1d8 + curse) or 1 tail +5 (3d6)",
    "stats": {
      "ac": "16",
      "hp": "39",
      "mv": "near (swim)",
      "str": "+4",
      "dex": "-1",
      "con": "+3",
      "int": "+4",
      "wis": "+2",
      "cha": "+2"
    },
    "alignment": "C",
    "level": "8",
    "specials": [
      {
        "name": "Curse",
        "text": "DC 15 CON or target gains a magical curse, turning into a deep one over 2d10 days."
      },
      {
        "name": "Enslave",
        "text": "In place of attacks, one creature within far DC 15 WIS or aboleth controls for 1d4 rounds."
      },
      {
        "name": "Telepathic",
        "text": "Read the thoughts of all creatures within far."
      }
    ]
  },
  {
    "uuid": "3789ac3b-47bf-48cf-ac31-6d0c41ad8b06",
    "name": "Keen Senses. Can't be surprised. GOBLIN, BOSS",
    "flavourText": "A scarred goblin with knotted muscles and a crown of iron.",
    "alignment": "C",
    "level": "4",
    "attacks": "1 spear (close/near) +3 (1d6)",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "20",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+2",
      "int": "-1",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Keen Senses",
        "text": "Can't be surprised."
      }
    ]
  },
  {
    "uuid": "38183fc6-5827-4848-9522-9254e42eb2b0",
    "name": "VIOLET FUNGUS",
    "flavourText": "Child-sized, creeping fungi with neon purple caps. Their whiplike roots decompose living flesh.",
    "alignment": "N",
    "level": "2 ",
    "attacks": "2 tendril (near) +0 (1d4)",
    "stats": {
      "ac": "7",
      "hp": "9",
      "mv": "close",
      "str": "-3",
      "dex": "-2",
      "con": "+0",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": []
  },
  {
    "uuid": "385f4690-cb8f-40c8-96ac-523d88afd147",
    "name": "RAT, SWARM",
    "flavourText": "A screeching tidal wave of clawing and biting rats.",
    "alignment": "N",
    "level": "6",
    "attacks": "4 bite +0 (1 + disease)",
    "stats": {
      "ac": "10",
      "hp": "28",
      "mv": "near",
      "str": "-3",
      "dex": "+0",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Disease",
        "text": "DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
      }
    ]
  },
  {
    "uuid": "38c37831-c1d5-4033-a02a-faebb075eeed",
    "name": "ETTERCAP",
    "flavourText": "Bipedal, eight-eyed spiderfolk with spindly legs and purple fur.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 bite +2 (1d6) or 1 poison web (near) +2",
    "stats": {
      "ac": "12",
      "hp": "14",
      "mv": "near (climb)",
      "str": "+0",
      "dex": "+2",
      "con": "+1",
      "int": "+0",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Poison Web",
        "text": "One target stuck in place and 1d4 damage/round. DC 12 DEX on turn to escape."
      }
    ]
  },
  {
    "uuid": "39155897-c82c-4649-a93e-7a90ec73c177",
    "name": "DEEP ONE",
    "flavourText": "Cultish, amphibious fish-people with bulbous eyes. They lurk in deep water and sunless caverns.",
    "alignment": "C",
    "level": "2",
    "attacks": "2 spear (close/ near) +2 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "10",
      "mv": "near (swim)",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Sunblind",
        "text": "Blinded in bright light."
      }
    ]
  },
  {
    "uuid": "3a5a909c-c3f2-4b15-a358-7320c0c062f9",
    "name": "BLACK PUDDING",
    "flavourText": "A black, ice-cold mass of sludge.",
    "alignment": "N",
    "level": "6",
    "attacks": "3 tentacle +4 (2d6)",
    "stats": {
      "ac": "9",
      "hp": "30",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "-1",
      "con": "+3",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by fire."
      },
      {
        "name": "Corrosive",
        "text": "Wood or metal that touches the ooze dissolves on a d6 roll of 1-3."
      }
    ]
  },
  {
    "uuid": "3a62d9ea-cdec-4045-9fe9-5c7f0474d1e4",
    "name": "SOLDIER",
    "flavourText": "An armed footsoldier trained in the ways of battlefield combat.",
    "alignment": "L",
    "level": "2",
    "attacks": "1 longsword +2 (1d8) or 1 crossbow (far) +1 (1d6)",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "10",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+1",
      "int": "+0",
      "wis": "+0",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "3b473989-fb93-4c3f-acf5-bc0264109d34",
    "name": "LIZARDFOLK",
    "flavourText": "Crocodilian humanoids with scaly faces, claws, and tails. They dwell in swamps and rivers.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 spear (close/near) +2 (1d6)",
    "stats": {
      "ac": "14 (leather + shield)",
      "hp": "11",
      "mv": "near (swim)",
      "str": "+1",
      "dex": "+1",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "3c09503e-c9ef-4d2b-aab2-52bf2db27d36",
    "name": "ARCHDEVIL",
    "flavourText": "A stunningly beautiful, horned human with burning, red eyes and a halo of seven black stars. Two stitched-up gashes weep blood from its shoulder blades.",
    "alignment": "C",
    "level": "16",
    "attacks": "4 iron scepter +10 (3d10) or 1 soulbind",
    "stats": {
      "ac": "19",
      "hp": "76",
      "mv": "far (teleport)",
      "str": "+5",
      "dex": "+4",
      "con": "+4",
      "int": "+5",
      "wis": "+4",
      "cha": "+7"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune. Only damaged by magical sources."
      },
      {
        "name": "Crown of Darkness",
        "text": "All hostile spells are reflected at caster with a spellcasting check less than 20."
      },
      {
        "name": "Soulbind",
        "text": "All targets within near DC 20 CHA or fall under control of archdevil for 1d4 rounds. DC 20 CHA on turn to end the effect."
      }
    ]
  },
  {
    "uuid": "3d447f5b-93fc-49a9-ac74-fbba04779499",
    "name": "STINGBAT",
    "flavourText": "Darting, orange insect-bat with four wings and needlelike beak.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 beak +2 (1d4 + blood drain)",
    "stats": {
      "ac": "12",
      "hp": "4",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+2",
      "con": "+0",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Blood Drain",
        "text": "Attach to bitten target; auto-hit the next round. DC 9 STR on turn to remove."
      }
    ]
  },
  {
    "uuid": "3e372ccd-0407-4c0e-aeea-15b520ce26f9",
    "name": "GOBLIN",
    "flavourText": "A short, hairless humanoid with green skin and pointy ears.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 club +0 (1d4) or 1 shortbow (far) +1 (1d4)",
    "stats": {
      "ac": "11",
      "hp": "5",
      "mv": "near",
      "str": "+0",
      "dex": "+1",
      "con": "+1",
      "int": "-1",
      "wis": "-1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "3e5256a0-c7a2-4624-8d62-12712115401a",
    "name": "DRYAD",
    "flavourText": "A coy, emerald-skinned fey covered in leaves. It bonds with and protects a tree.",
    "alignment": "N",
    "level": "4",
    "attacks": "1 staff -1 (1d4) or 1 charm",
    "stats": {
      "ac": "13",
      "hp": "19",
      "mv": "near",
      "str": "-1",
      "dex": "+2",
      "con": "+1",
      "int": "+1",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Charm",
        "text": "Near, one creature, DC 14 CHA or friendship for 1d8 days."
      },
      {
        "name": "Meld",
        "text": "Step inside bonded tree."
      }
    ]
  },
  {
    "uuid": "3ecfffee-c3b8-431f-91ed-3f8842364460",
    "name": "GRIFFON",
    "flavourText": "Winged hunters with the head of an eagle and body of a lion. Their favored food is horses.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 rend +4 (1d10)",
    "stats": {
      "ac": "12",
      "hp": "19",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": []
  },
  {
    "uuid": "3f3240dd-9df9-49f3-937f-978929c03cb3",
    "name": "VIPERIAN, WIZARD",
    "flavourText": "Thin viperians with scales tinged in black. They wear silk robes and silver, serpentine jewelry.",
    "alignment": "C",
    "level": "8",
    "attacks": "1 dagger (close/ near) +2 (1d4) or 2 spell +5",
    "stats": {
      "ac": "13",
      "hp": "37",
      "mv": "near",
      "str": "+0",
      "dex": "+1",
      "con": "+0",
      "int": "+3",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Hiss (INT Spell)",
        "text": "DC 12. End one spell within far."
      },
      {
        "name": "Summon Cobra (INT Spell)",
        "text": "DC 13. Summon 1d4 loyal cobras that appear within near. They leave in 1d4 rounds."
      },
      {
        "name": "Venom (INT Spell)",
        "text": "DC 12. One target in far takes 2d8 damage."
      },
      {
        "name": "Whispers (INT Spell)",
        "text": "DC 14. Focus. All enemies within near of viperian wizard have DISADV on spellcasting checks for the duration."
      }
    ]
  },
  {
    "uuid": "40842738-c745-4759-a4f8-11d8cd3fdfea",
    "name": "CLOAKER",
    "flavourText": "A midnight blue manta ray with a bony tail and crescent-shaped maw above its belly. It swoops through deep, lightless caverns.",
    "alignment": "C",
    "level": "6",
    "attacks": "3 lash +4 (1d8) or 1 screech",
    "stats": {
      "ac": "13",
      "hp": "28",
      "mv": "near (fly)",
      "str": "+2",
      "dex": "+3",
      "con": "+1",
      "int": "+1",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Phantoms",
        "text": "1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits cloaker or illusions."
      },
      {
        "name": "Screech",
        "text": "Enemies within double near DC 15 WIS or DISADV on attacks and checks 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "43c65846-871f-435e-9eee-5d0c95b15c9c",
    "name": "DOPPELGANGER",
    "flavourText": "Gray, featureless humanoids that delight in sowing chaos.",
    "alignment": "C",
    "level": "4",
    "attacks": "1 dagger (close/near) +2 (1d4)",
    "stats": {
      "ac": "12",
      "hp": "20",
      "mv": "near",
      "str": "+1",
      "dex": "+2",
      "con": "+2",
      "int": "+1",
      "wis": "+0",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Change Shape",
        "text": "In place of attacks, transform into any similarly-sized humanoid."
      },
      {
        "name": "Telepathy",
        "text": "Can secretly hear the surface thoughts of all humanoids within near."
      }
    ]
  },
  {
    "uuid": "43cd7cc3-fef1-4260-8854-051c519d88bd",
    "name": "ELEMENTAL, FIRE",
    "flavourText": "A roaring column of flames.",
    "alignment": "N",
    "level": "6/9",
    "attacks": "3 slam +6 (2d10/3d10) or 1 inferno",
    "stats": {
      "ac": "15",
      "hp": "30/43",
      "mv": "near (fly)",
      "str": "+4",
      "dex": "+3",
      "con": "+3",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources. Fire immune."
      },
      {
        "name": "Inferno",
        "text": "All within near DC 15 DEX or 3d8 damage."
      }
    ]
  },
  {
    "uuid": "43d8f4be-4c73-4040-b8de-f36b83c871b1",
    "name": "GOLEM, FLESH",
    "flavourText": "A ghastly monstrosity made of sewn-together corpses.",
    "alignment": "N",
    "level": "7",
    "attacks": "3 slam +6 (1d8)",
    "stats": {
      "ac": "9",
      "hp": "35",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+4",
      "int": "-1",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Golem",
        "text": "Immune to damage from fire, cold, or non-magical sources. Healed by electricity."
      },
      {
        "name": "Berserk",
        "text": "When at or below 20 HP, +1 slam attack and slams deal double damage."
      }
    ]
  },
  {
    "uuid": "444561af-49c6-410b-bc5d-6b0d970a1d0b",
    "name": "HELL HOUND",
    "flavourText": "Black wolfhounds with red eyes and jaws dripping with flames.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 bite +4 (1d8) or 1 fire breath",
    "stats": {
      "ac": "13",
      "hp": "19",
      "mv": "double near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune."
      },
      {
        "name": "Fire Breath",
        "text": "Fills a near-sized cube extending from hell hound. DC 15 DEX or 3d8 damage. Cannot use again for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "46922d66-838c-4a44-93e8-555aee0ca21d",
    "name": "DRAGON, FROST",
    "flavourText": "Prismatic ice lines the horns, spines, and wings of this pearly dragon. Clouds of steam hiss from its ice-rimed jaws.",
    "alignment": "N",
    "level": "14",
    "attacks": "4 rend +9 (2d10) or 1 ice breath",
    "stats": {
      "ac": "17",
      "hp": "68",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+3",
      "con": "+5",
      "int": "+3",
      "wis": "+4",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Frostblood",
        "text": "Cold immune."
      },
      {
        "name": "Ice Breath",
        "text": "Fills a double near- sized cube extending from dragon. DC 15 DEX or 4d8 damage and frozen for 1 round."
      }
    ]
  },
  {
    "uuid": "46b87b10-1be3-4121-9023-6166a00b7633",
    "name": "EFREETI",
    "flavourText": "Blood-red, towering humanoids formed of lava and ash. Short, black horns and snarling grins.",
    "alignment": "C",
    "level": "9",
    "attacks": "3 scimitar +8 (2d10) or 2 fire bolt (far) +5 (2d6)",
    "stats": {
      "ac": "15",
      "hp": "43",
      "mv": "near (fly)",
      "str": "+5",
      "dex": "+2",
      "con": "+3",
      "int": "+3",
      "wis": "+2",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources. Fire immune."
      },
      {
        "name": "Wall of Flame",
        "text": "1/day, 20' high curtain of fire, double near length. Touching it deals 4d8 damage. Lasts 2d4 rounds."
      },
      {
        "name": "Wish",
        "text": "Cast wish once a week for a mortal, no spellcasting check."
      }
    ]
  },
  {
    "uuid": "46e9609b-c8a4-43ba-8a19-f8805d6a8a3c",
    "name": "BASILISK",
    "flavourText": "Massive, muscled lizards with six legs and gray, tough hide.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 bite +4 (2d6 + petrify)",
    "stats": {
      "ac": "14",
      "hp": "25",
      "mv": "near",
      "str": "+3",
      "dex": "+1",
      "con": "+3",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Petrify",
        "text": "Any creature that touches the basilisk or meets its gaze, DC 15 CON or petrified."
      }
    ]
  },
  {
    "uuid": "47693fb3-7d18-4f6e-ba16-830adff1b602",
    "name": "VOID SPAWN",
    "flavourText": "Scythe-like limbs jut from a purple bulb as big as an ogre. Its lower half is a nest of tentacles.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 scythe +6 (1d10) and 1 tentacles +6 (1d12 + toxin)",
    "stats": {
      "ac": "13",
      "hp": "34",
      "mv": "near (fly)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "+0",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to cold. Toxin. DC 12 CON or paralyzed for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "49a84915-7e16-49ec-bb6d-e3a6ecba9e49",
    "name": "GHAST",
    "flavourText": "Greater ghouls who retain the intelligence they had in life.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 claw +4 (1d8 + paralyze)",
    "stats": {
      "ac": "11",
      "hp": "20",
      "mv": "near",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "+0",
      "wis": "+0",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Undead",
        "text": "Immune to morale checks."
      },
      {
        "name": "Carrion Stench",
        "text": "Living creatures DC 12 CON the first time within near or DISADV on attacks and spellcasting for 5 rounds."
      },
      {
        "name": "Paralyze",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "49e43b60-c42f-4cc1-af7c-7378e7cd5ee8",
    "name": "APPRENTICE",
    "flavourText": "A cloaked magician with a thin, freshly bound spellbook.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 dagger (close/ near) +1 (1d4) or 1 spell +2",
    "stats": {
      "ac": "11",
      "hp": "3",
      "mv": "near",
      "str": "-1",
      "dex": "+1",
      "con": "-1",
      "int": "+2",
      "wis": "+0",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Beguile (INT Spell)",
        "text": "DC 11. Focus. One target in near of LV 2 or less is stupefied for the duration."
      },
      {
        "name": "Magic Bolt (INT Spell)",
        "text": "DC 11. 1d4 damage to one target within far."
      }
    ]
  },
  {
    "uuid": "4dcc34dd-83e5-40e3-a4b3-95e3d7c2afde",
    "name": "SMILODON",
    "flavourText": "Prehistoric tigers with long canine fangs. They hunt in grasslands and ice fields.",
    "alignment": "N",
    "level": "3 ",
    "attacks": "2 bite +3 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "14",
      "mv": "near",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "4ea521b6-2535-4bfd-bb8e-282110fad59c",
    "name": "ARCHMAGE",
    "flavourText": "A wizened magic-user crackling with arcane power.",
    "alignment": "L",
    "level": "10",
    "attacks": "2 spell +7",
    "stats": {
      "ac": "12",
      "hp": "44",
      "mv": "near",
      "str": "-1",
      "dex": "+2",
      "con": "-1",
      "int": "+4",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Death Bolt (INT Spell)",
        "text": "DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP."
      },
      {
        "name": "Enervate (INT Spell)",
        "text": "DC 14. Focus. One target within near is stupefied for the duration."
      },
      {
        "name": "Fireblast (INT Spell)",
        "text": "DC 14. 4d6 damage to all within a near- sized cube within far.,"
      },
      {
        "name": "Float (INT Spell)",
        "text": "Self. DC 14. Fly double near for 5 rounds.,"
      },
      {
        "name": "Mithralskin (INT Spell)",
        "text": "Self. DC 14. AC becomes 18 for 5 rounds.,"
      },
      {
        "name": "Void Step (INT Spell)",
        "text": "Self and up to 4 willing targets. DC 15. Teleport up to 100 miles."
      }
    ]
  },
  {
    "uuid": "4f4cb374-0327-4d53-b261-6b5a571c5496",
    "name": "WOLF, DIRE",
    "flavourText": "A massive wolf with spines of black bone along its brow ridge and back.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 bite +4 (1d8)",
    "stats": {
      "ac": "12",
      "hp": "19",
      "mv": "double near",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "-1",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Pack Hunter",
        "text": "Deals +1 damage while an ally is close."
      }
    ]
  },
  {
    "uuid": "4f5d2914-162d-4dc0-8203-455595e359bb",
    "name": "HAG, SEA",
    "flavourText": "A green, sunken-faced woman. Seaweed hair and oozing flesh.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 claw +4 (1d8)",
    "stats": {
      "ac": "15",
      "hp": "28",
      "mv": "near (swim)",
      "str": "+2",
      "dex": "+3",
      "con": "+1",
      "int": "+1",
      "wis": "+2",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Shapechange",
        "text": "Instantly change to look like any other humanoid."
      },
      {
        "name": "Terrify",
        "text": "A creature who first sees her true form DC 15 CHA or DISADV on attacks 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "4f8324fc-07b7-454c-8470-4d4d7d45f8b4",
    "name": "ROT FLOWER",
    "flavourText": "Carnivorous flowers as large as a human. They reek of carrion.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +1 (1d4 + toxin)",
    "stats": {
      "ac": "9",
      "hp": "10",
      "mv": "none",
      "str": "+1",
      "dex": "-3",
      "con": "+1",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Toxin",
        "text": "DC 12 CON or unconscious for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "500c50e2-1f66-4a86-8a31-3f27643428d7",
    "name": "SPIDER",
    "flavourText": "Silent, web-weaving arachnids with a flesh-dissolving venom.",
    "alignment": "N",
    "level": "0",
    "attacks": "2 bite +1 (1 + poison)",
    "stats": {
      "ac": "11",
      "hp": "1",
      "mv": "near (climb)",
      "str": "-4",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "+0",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 9 CON or take 1d4 damage."
      }
    ]
  },
  {
    "uuid": "50bd6a24-c90b-4056-948c-3b75e43bd47d",
    "name": "HORSE",
    "flavourText": "Powerful, swift herd animals that roam open plains.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 hooves +3 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "11",
      "mv": "double near",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "51bfb192-8d05-41a7-bcc0-15beb669b1d1",
    "name": "BOAR",
    "flavourText": "Ornery wild pig with bristly, russet hair and yellowed tusks.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 tusk +3 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "14",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Gore",
        "text": "Deals an extra die of damage if it hits the same target with both tusks."
      }
    ]
  },
  {
    "uuid": "522b2df6-65fd-4e63-93f8-bfa3fbb32e48",
    "name": "SPIDER, GIANT",
    "flavourText": "Bulbous abdomen and eight, spindly legs. Dwells high in trees or caves and ambushes prey, capturing them to eat later.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 bite +3 (1d4 + poison)",
    "stats": {
      "ac": "13",
      "hp": "13",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+3",
      "con": "+0",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or paralyzed 1d4 hours."
      }
    ]
  },
  {
    "uuid": "5307d6e5-3a54-48d6-a121-1172ce314bd9",
    "name": "ACOLYTE",
    "flavourText": "A religious trainee who knows basic rites and rituals.",
    "alignment": "L",
    "level": "1",
    "attacks": "1 mace +1 (1d6) or 1 spell +2",
    "stats": {
      "ac": "12",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "-1",
      "con": "+0",
      "int": "-1",
      "wis": "+2",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Healing Touch (WIS Spell)",
        "text": "DC 11. Heal one creature within close for 1d4 HP."
      }
    ]
  },
  {
    "uuid": "541183fe-3d6e-42d0-8936-52d7239a6ed7",
    "name": "CAMEL",
    "flavourText": "Ornery, tan-furred desert beasts.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 hoof +3 (1d6) or 1 spit (near) +0 (1d4)",
    "stats": {
      "ac": "10",
      "hp": "12",
      "mv": "double near",
      "str": "+3",
      "dex": "+0",
      "con": "+3",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "54a2ac80-d406-40ea-9ac1-0282a3b43004",
    "name": "ONI",
    "flavourText": "Cunning and sorcerous ogre- demons with shaggy white hair, blue skin, and yellow eyes.",
    "alignment": "C",
    "level": "7",
    "attacks": "1 glaive (near) +6 (1d10) or 1 spell +5",
    "stats": {
      "ac": "11",
      "hp": "33",
      "mv": "near",
      "str": "+5",
      "dex": "+1",
      "con": "+2",
      "int": "+2",
      "wis": "+1",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Shapeshift",
        "text": "In place of attacks, turn into any humanoid or back into original form."
      },
      {
        "name": "Fade (CHA Spell)",
        "text": "DC 13. Self. Become invisible for 1d4 rounds."
      },
      {
        "name": "Hellfrost (CHA Spell)",
        "text": "DC 13. All within near-sized cube extending from oni 3d6 damage."
      },
      {
        "name": "Mist (CHA Spell)",
        "text": "DC 13. Self. Turn into mist that can fly double near. Lasts 2d4 rounds."
      }
    ]
  },
  {
    "uuid": "559e87d6-fb93-4ca2-a773-bf7ba21b8b5c",
    "name": "SNAKE, GIANT",
    "flavourText": "An enormous, mottled serpent that can swallow a cow whole.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 bite +4 (1d6) and 1 constrict (near)",
    "stats": {
      "ac": "12",
      "hp": "23",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Constrict",
        "text": "Contested STR to hold target immobile for one round."
      }
    ]
  },
  {
    "uuid": "56d98f71-251a-4084-afc3-59c251ed8822",
    "name": "GIBBERING MOUTHER",
    "flavourText": "Crawling masses of slime with dozens of screeching, lipless mouths and wet eyeballs.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 bite +3 (1d8 + latch)",
    "stats": {
      "ac": "8",
      "hp": "21",
      "mv": "near (climb, swim)",
      "str": "+2",
      "dex": "-2",
      "con": "+3",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Gibbering",
        "text": "Creatures within near DC 12 WIS on turn or take a random action (d8): 1-3. do nothing, 4-5. move in random direction, 6-7. attack nearest creature, 8. flee."
      },
      {
        "name": "Latch",
        "text": "Attach to bitten target; bites auto-hit next round. DC 12 STR on turn to tear off."
      }
    ]
  },
  {
    "uuid": "5786c6bf-d964-4233-9f58-751a2ad5bd52",
    "name": "BEAR, BROWN",
    "flavourText": "A hulking, swaying brute with claws as long as a finger.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 claw +4 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "25",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Crush",
        "text": "Deals an extra die of damage if it hits the same target with both claws."
      }
    ]
  },
  {
    "uuid": "580212bc-325f-4df8-9556-87af28bce9a3",
    "name": "INVISIBLE STALKER",
    "flavourText": "Intelligent creatures made of flowing air. Often bound to the bidding of evil sorcerers for their peerless tracking ability.",
    "alignment": "N",
    "level": "6",
    "attacks": "3 pummel +4 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "29",
      "mv": "near (fly)",
      "str": "+2",
      "dex": "+3",
      "con": "+2",
      "int": "+2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Bound",
        "text": "A secret, mundane contingency (such as the touch of a feather) ends the invisible stalker's magical servitude."
      },
      {
        "name": "Invisible",
        "text": "Naturally invisible. Tracking. Can always sense the direction of its chosen quarry."
      }
    ]
  },
  {
    "uuid": "58f47885-3217-4b0c-aa57-2af51adef25a",
    "name": "DRAGON, FIRE",
    "flavourText": "Blood-red scales cover the hide of this mighty, volcanic wyrm. Leaping flames glow at the back of its throat.",
    "alignment": "C",
    "level": "17",
    "attacks": "4 rend +11 (2d12) or 1 fire breath",
    "stats": {
      "ac": "18",
      "hp": "80",
      "mv": "double near (fly)",
      "str": "+6",
      "dex": "+5",
      "con": "+4",
      "int": "+4",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Fireblood",
        "text": "Fire immune."
      },
      {
        "name": "Fire Breath",
        "text": "Fills a double near- sized cube extending from dragon. DC 15 DEX or 6d10 damage."
      }
    ]
  },
  {
    "uuid": "591e246d-3ab3-4eb7-9d59-78a467823438",
    "name": "RAT, DIRE",
    "flavourText": "Child-sized, savage rats bristling with bony face and spine ridges.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +2 (1d6 + disease)",
    "stats": {
      "ac": "12",
      "hp": "10",
      "mv": "near",
      "str": "+1",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Disease",
        "text": "DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
      }
    ]
  },
  {
    "uuid": "59afc5f9-2e5d-4052-8572-a0def361e40c",
    "name": "WASP, GIANT",
    "flavourText": "Man-sized wasps with glossy, yellow-striped abdomens.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 sting +3 (1d6 + venom)",
    "stats": {
      "ac": "13",
      "hp": "9",
      "mv": "near (fly)",
      "str": "+1",
      "dex": "+3",
      "con": "+0",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "5a34269f-ca9a-428c-870e-46230fbd9f4c",
    "name": "SHARK",
    "flavourText": "Bloodthirsty apex predators of the sea. Gray, torpedo-like body.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 bite +3 (1d10)",
    "stats": {
      "ac": "11",
      "hp": "15",
      "mv": "near (swim)",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "5c018303-1711-4ccc-bdc0-075fe265ea08",
    "name": "APE, SNOW",
    "flavourText": "White-haired, carnivorous gorillas that stalk the high mountains and live in caves.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 fist +4 (1d6) or 1 rock (far) +4 (2d6)",
    "stats": {
      "ac": "13",
      "hp": "19",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Thick Fur",
        "text": "Cold immune."
      }
    ]
  },
  {
    "uuid": "5d1d7383-5abc-4b63-b62f-534c77c70a6a",
    "name": "UNICORN",
    "flavourText": "A silvery horse with a flowing mane and a single spiral horn.",
    "alignment": "L",
    "level": "4",
    "attacks": "1 hooves +3 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "20",
      "mv": "double near",
      "str": "+3",
      "dex": "+2",
      "con": "+2",
      "int": "+1",
      "wis": "+2",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Healing Horn",
        "text": "A touch heals 2d6 HP or ends one curse or disease."
      }
    ]
  },
  {
    "uuid": "6092b606-bb9b-4984-b651-9267018ffbc3",
    "name": "MUMMY",
    "flavourText": "A desiccated, linen-wrapped zombie. It was created with an intricate embalming ritual used only upon the most worthy warriors or rulers.",
    "alignment": "C",
    "level": "10",
    "attacks": "3 rot touch +8 (1d10 + necrosis)",
    "stats": {
      "ac": "13",
      "hp": "47",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+2",
      "int": "+3",
      "wis": "+2",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Supreme Undead",
        "text": "Immune to morale checks. Only damaged by magical sources."
      },
      {
        "name": "Desiccated",
        "text": "Can be damaged by fire. Takes x2 damage from it."
      },
      {
        "name": "Necrosis",
        "text": "DC 15 CON or drop to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect."
      }
    ]
  },
  {
    "uuid": "60c9da73-1456-46ee-afe4-5a7090c6f24a",
    "name": "REMORHAZ",
    "flavourText": "Massive, blue centipedes with neck hoods and red-hot spine spikes. Dwell in arctic climates.",
    "alignment": "N",
    "level": "10",
    "attacks": "3 bite +7 (2d6 + swallow)",
    "stats": {
      "ac": "16",
      "hp": "47",
      "mv": "near (burrow)",
      "str": "+5",
      "dex": "+1",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to cold and fire."
      },
      {
        "name": "Melt",
        "text": "Non-magical metal objects that touch the remorhaz melt on a d6 roll of 1-3."
      },
      {
        "name": "Swallow",
        "text": "On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Remorhaz regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet. "
      }
    ]
  },
  {
    "uuid": "616353da-c1e8-4efb-ade5-5ed8920b707f",
    "name": "PEASANT",
    "flavourText": "A commoner in worn clothes.",
    "alignment": "L",
    "level": "1",
    "attacks": "1 club +0 (1d4)",
    "stats": {
      "ac": "10",
      "hp": "4",
      "mv": "near",
      "str": "+0",
      "dex": "+0",
      "con": "+0",
      "int": "+0",
      "wis": "+0",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "616f4624-b350-4740-9a56-9aafebe6ddcf",
    "name": "GOLEM, IRON",
    "flavourText": "A bulky iron suit that squeals and sparks with each step.",
    "alignment": "N",
    "level": "10",
    "attacks": "3 slam +8 (2d8) or 1 poison breath",
    "stats": {
      "ac": "19",
      "hp": "49",
      "mv": "near",
      "str": "+5",
      "dex": "-1",
      "con": "+4",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Golem",
        "text": "Immune to damage from cold or non-magical sources. Healed by fire."
      },
      {
        "name": "Poison Breath",
        "text": "All within near, DC 15 CON or 8d6 damage."
      }
    ]
  },
  {
    "uuid": "643345ed-94aa-4411-99f8-21edd0aebc74",
    "name": "GOBLIN, SHAMAN",
    "flavourText": "A swaying, chanting goblin wearing necklaces of teeth and a robe of musty rat pelts.",
    "alignment": "C",
    "level": "4",
    "attacks": "1 staff +0 (1d4) or 1 spell +3",
    "stats": {
      "ac": "12 (leather)",
      "hp": "19",
      "mv": "near",
      "str": "+0",
      "dex": "+1",
      "con": "+1",
      "int": "+0",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Keen Senses",
        "text": "Can't be surprised."
      },
      {
        "name": "Bug Brain (WIS Spell)",
        "text": "DC 13. Near range, one target. Target's INT drops to 1 for 1d4 rounds."
      },
      {
        "name": "Skitter (WIS Spell)",
        "text": "DC 12. Self. Climb like a spider for 5 rounds."
      },
      {
        "name": "Stink Bomb (WIS Spell)",
        "text": "DC 12. One target within far 2d4 damage and DC 12 CON or DISADV on next check/attack."
      }
    ]
  },
  {
    "uuid": "647fc79e-ae04-4702-8603-c2448c2fbc01",
    "name": "GOLEM, CLAY",
    "flavourText": "A towering, faceless humanoid shaped from glistening clay.",
    "alignment": "N",
    "level": "8",
    "attacks": "3 slam +6 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "40",
      "mv": "near",
      "str": "+4",
      "dex": "+0",
      "con": "+4",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Golem",
        "text": "Immune to damage from fire, cold, electricity, or non-magical sources. Healed by acid."
      },
      {
        "name": "Curse",
        "text": "Slam damage can only be healed by level 5+ priest."
      }
    ]
  },
  {
    "uuid": "66689ba8-6f59-4d47-8eb4-0ce0c3de6f2c",
    "name": "SCORPION",
    "flavourText": "Desert-dwelling arachnids with pincers and curved tail stingers.",
    "alignment": "N",
    "level": "0",
    "attacks": "1 sting +1 (1 + poison)",
    "stats": {
      "ac": "11",
      "hp": "1",
      "mv": "near (climb)",
      "str": "-4",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "+0",
      "cha": "-4"
    },
    "specials": []
  },
  {
    "uuid": "6b192569-9560-4373-bebc-2928fe74d7b4",
    "name": "DEMON, DRETCH",
    "flavourText": "Green, pig-faced demons with thick claws and an oily stench.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 claw +2 (1d6) or 1 gas",
    "stats": {
      "ac": "12",
      "hp": "11",
      "mv": "near",
      "str": "+2",
      "dex": "+0",
      "con": "+2",
      "int": "-2",
      "wis": "-1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Gas",
        "text": "All in near DC 12 CON or blinded for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "6c57e878-9220-4515-bbef-2f747a5b2988",
    "name": "DEVIL, IMP",
    "flavourText": "Cat-sized, red devils with oversized wings and tail, tiny horns, and cowardly demeanors.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 stinger +3 (1d4 + poison)",
    "stats": {
      "ac": "13",
      "hp": "9",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+3",
      "con": "+0",
      "int": "+1",
      "wis": "+0",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune."
      },
      {
        "name": "Contract",
        "text": "Can grant mighty boons and patronage on behalf of an archdevil in exchange for a sworn soul. ADV on related Charisma checks."
      },
      {
        "name": "Poison",
        "text": "DC 12 CON or fitful sleep for 1d4 hours."
      }
    ]
  },
  {
    "uuid": "6d04f059-b1e6-4fc4-a7db-527dc0c1f59b",
    "name": "WOLF",
    "flavourText": "A giant canine with a gray pelt, yellow eyes, and dripping jaws.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "10",
      "mv": "double near",
      "str": "+2",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Pack Hunter",
        "text": "Deals +1 damage while an ally is close."
      }
    ]
  },
  {
    "uuid": "6d5b5876-c383-4b08-bbe0-f568d34421f7",
    "name": "TROLL",
    "flavourText": "Green, lanky giants with warty skin and territorial rage. Lair in deep forests and swamps.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 claw +4 (1d6) and 1 bite +4 (1d10)",
    "stats": {
      "ac": "12",
      "hp": "24",
      "mv": "near",
      "str": "+3",
      "dex": "+2",
      "con": "+2",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Regenerate",
        "text": "Regains 2d6 HP on its turn unless its wounds are cauterized with fire or acid."
      }
    ]
  },
  {
    "uuid": "6f1f31aa-8f2a-4500-8962-7043fed52f56",
    "name": "GHOUL",
    "flavourText": "Gray-skinned, slavering undead with whipping tongues and flat, reptilian faces.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 claw +2 (1d6 + paralyze)",
    "stats": {
      "ac": "11",
      "hp": "11",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+2",
      "int": "-3",
      "wis": "-1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Undead",
        "text": "Immune to morale checks."
      },
      {
        "name": "Paralyze",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "6fead9ef-463a-42de-8b4d-9c52d19c08d9",
    "name": "BUGBEAR",
    "flavourText": "Brutish, bat-eared goblinoids covered in brown fur.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 spiked mace +3 (1d6)",
    "stats": {
      "ac": "13 (leather + shield)",
      "hp": "14",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "-1",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Stealthy",
        "text": "ADV on checks to sneak and hide."
      }
    ]
  },
  {
    "uuid": "70320a12-a894-4ca3-9581-31469af4bacb",
    "name": "CENTIPEDE, SWARM",
    "flavourText": "A crawling mass of weaving, sinuous centipedes.",
    "alignment": "N",
    "level": "4",
    "attacks": "3 bite +1 (1d4 + poison)",
    "stats": {
      "ac": "11",
      "hp": "18",
      "mv": "near (climb)",
      "str": "-3",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "712f10f6-5d3e-48de-898c-f9e6824f1019",
    "name": "DEMON, VROCK",
    "flavourText": "Wagon-sized, filthy vultures with four limbs, midnight-blue skin, and a rash of mangy feathers.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 talons +4 (1d8) or 1 screech",
    "stats": {
      "ac": "14",
      "hp": "24",
      "mv": "near (fly)",
      "str": "+2",
      "dex": "+2",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Carrion Mist",
        "text": "Each time vrock is hit, 3:6 chance of carrion mist in near-sized cube centered on vrock. All enemies DC 15 CON or violent vomiting 1d4 rounds."
      },
      {
        "name": "Screech",
        "text": "All enemies in double near DC 12 WIS or DISADV on checks and attacks for 1d4 rounds. "
      }
    ]
  },
  {
    "uuid": "731b2192-7018-4a5d-afd2-ad159d465efd",
    "name": "ARCHANGEL",
    "flavourText": "A radiant being with a crown of fire, snowy wings, golden armor, and a blazing greatsword.",
    "alignment": "L",
    "level": "16",
    "attacks": "3 flaming greatsword +10 (2d12)",
    "stats": {
      "ac": "18 (+3 plate mail)",
      "hp": "76",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+2",
      "con": "+4",
      "int": "+4",
      "wis": "+5",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Command",
        "text": "DC 18 CHA to resist an archangel's command."
      },
      {
        "name": "Crown of Fire",
        "text": "Hostile spells targeting the archangel are extreme (DC 18) to cast."
      }
    ]
  },
  {
    "uuid": "73490edf-b945-463d-9afc-3aaa5f5b4ce4",
    "name": "VIPERIAN",
    "flavourText": "Lithe, snake-headed people with cobra hoods and emerald green scales covering their bodies.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 scimitar +2 (1d6) or 1 javelin (close/far) +2 (1d4)",
    "stats": {
      "ac": "13",
      "hp": "13",
      "mv": "near",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "75576b24-6073-4548-88fa-ff0a9dc0e46e",
    "name": "PRIMORDIAL SLIME",
    "flavourText": "A mass of clear ooze strobing with sick pulses of violet light.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 tentacle +4 (1d10 + dissolve)",
    "stats": {
      "ac": "9",
      "hp": "30",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+2",
      "con": "+3",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only harmed by fire."
      },
      {
        "name": "Dissolve",
        "text": "One random piece of non-magical gear the target carries is destroyed."
      }
    ]
  },
  {
    "uuid": "763c8104-cdcc-4d1c-8110-ce9877e52235",
    "name": "HIPPOGRIFF",
    "flavourText": "Fierce, winged creatures with the lower body of a horse and upper body of a giant eagle.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 rend +3 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "14",
      "mv": "double near (fly)",
      "str": "+3",
      "dex": "+3",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "76681348-f60e-494f-bb65-8fdf6260e016",
    "name": "KOBOLD, SORCERER",
    "flavourText": "A scaly dog-lizard painted with colorful stripes and rattling a hefty leg bone strung with beads and feathers.",
    "alignment": "C",
    "level": "3",
    "attacks": "1 club +1 (1d4) or 1 spell +2",
    "stats": {
      "ac": "13 (leather)",
      "hp": "13",
      "mv": "near",
      "str": "-2",
      "dex": "+2",
      "con": "+0",
      "int": "-1",
      "wis": "+1",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Dodge",
        "text": "1/day, an attack that would hit misses instead."
      },
      {
        "name": "Scorpion Sting (CHA Spell)",
        "text": "DC 11. Near range, one target. 1d6 damage and target has DISADV on next attack roll or check."
      },
      {
        "name": "Spider Swarm (CHA Spell)",
        "text": "DC 12. A spider swarm appears within near. Stays 1d4 rounds. Follows sorcerer's commands."
      }
    ]
  },
  {
    "uuid": "7736c617-a33f-4369-93fa-168713ec30e2",
    "name": "Poison. DC 9 CON or go to 0 HP. SCORPION, GIANT",
    "flavourText": "Chitin-plated scorpions as big as camels.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 claw +2 (1d6 + grab) and 1 sting +2 (1d4 + poison)",
    "stats": {
      "ac": "14",
      "hp": "13",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+2",
      "con": "+0",
      "int": "-4",
      "wis": "+0",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "DC 12 STR or target held. DC 12 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "78cc75bc-a9e3-46d0-aa75-27d691eaf7c9",
    "name": "TRICERATOPS",
    "flavourText": "Plodding herbivores with a wide, bony skull frill and three horns.",
    "alignment": "N",
    "level": "7",
    "attacks": "2 horns +6 (1d10) or 1 charge",
    "stats": {
      "ac": "17",
      "hp": "35",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+4",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Charge",
        "text": "Move up to double near in straight line and make 1 horn attack. If hit, x3 damage."
      }
    ]
  },
  {
    "uuid": "79a8372b-9432-484a-99f4-4d15d11ced33",
    "name": "PTERODACTYL",
    "flavourText": "Long-beaked beasts with wide, triangular wings. Large enough to carry off a human.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 beak +4 (1d8 + grab)",
    "stats": {
      "ac": "14",
      "hp": "20",
      "mv": "double near (fly)",
      "str": "+2",
      "dex": "+4",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "DC 15 STR or held. DC 15 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "7b768e71-80ae-4578-9301-265c7ef988f8",
    "name": "RAT",
    "flavourText": "Rangy, plague-carrying rodents that infest underground places.",
    "alignment": "N",
    "level": "0",
    "attacks": "1 bite +0 (1 + disease)",
    "stats": {
      "ac": "10",
      "hp": "1",
      "mv": "near",
      "str": "-3",
      "dex": "+0",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Disease",
        "text": "DC 9 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
      }
    ]
  },
  {
    "uuid": "7db885cd-8d1b-4f3d-951e-99933b501fdf",
    "name": "DUERGAR",
    "flavourText": "Gray-skinned, greedy dwarves with bald pates and white beards. They dwell in somber castles deep within the earth filled with stolen treasures and enslaved prisoners.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 war pick +2 (1d6)",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "12",
      "mv": "near",
      "str": "+2",
      "dex": "+0",
      "con": "+3",
      "int": "+0",
      "wis": "-1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Enlarge",
        "text": "1/day, +1d6 damage on melee attacks and ADV on STR checks for 3 rounds."
      },
      {
        "name": "Invisibility",
        "text": "1/day, turn invisible for 3 rounds. Ends if duergar attacks."
      },
      {
        "name": "Sunblind",
        "text": "Blinded in bright light."
      }
    ]
  },
  {
    "uuid": "7fc770e4-652c-4b85-9da0-638bd54db63f",
    "name": "DRAGON, FOREST",
    "flavourText": "The smell of wet loam follows this dragon. Its jade scales bristle with barbed thorns.",
    "alignment": "N",
    "level": "12",
    "attacks": "3 rend +8 (2d8) or 1 poison breath",
    "stats": {
      "ac": "16",
      "hp": "58",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+3",
      "con": "+4",
      "int": "+3",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Animate Plants",
        "text": "1/day, in place of attacks. Vines grab at all enemies within double near of dragon. DC 15 DEX or unable to move 1d4 rounds."
      },
      {
        "name": "Poison Breath",
        "text": "Fills a near-sized cube extending from dragon. DC 15 CON or 3d8 damage."
      }
    ]
  },
  {
    "uuid": "7fe0fc84-f722-4e98-8d19-9447bd97aa53",
    "name": "ELF",
    "flavourText": "Ethereal, ageless fey-people infused with ancient magic.",
    "alignment": "L",
    "level": "2",
    "attacks": "1 longbow (far) +3 (1d8) or 1 longsword +1 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "9",
      "mv": "near",
      "str": "+0",
      "dex": "+3",
      "con": "+0",
      "int": "+1",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Feyblood",
        "text": "ADV on DEX checks while in the natural wilds."
      }
    ]
  },
  {
    "uuid": "8017d64a-1268-4ecd-b46f-82a844e5e966",
    "name": "GIANT, FIRE",
    "flavourText": "Bulky, muscled giants with coppery skin and red hair. Heavily armored in iron plate mail studded with bronze rivets.",
    "alignment": "C",
    "level": "9",
    "attacks": "3 greatsword +9 (2d12)",
    "stats": {
      "ac": "15 (plate mail)",
      "hp": "44",
      "mv": "double near",
      "str": "+6",
      "dex": "+0",
      "con": "+4",
      "int": "+1",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Fireblood",
        "text": "Fire immune."
      }
    ]
  },
  {
    "uuid": "80ef810f-5c5c-4143-820f-87a459d7435e",
    "name": "HIPPOPOTAMUS",
    "flavourText": "Ornery river-beasts as large as cows with round, purple bodies and bulbous snouts.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 bite +4 (1d10)",
    "stats": {
      "ac": "12",
      "hp": "24",
      "mv": "near (swim)",
      "str": "+4",
      "dex": "+0",
      "con": "+2",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Stumpy",
        "text": "ADV on STR checks to grab or drag other creatures."
      }
    ]
  },
  {
    "uuid": "8153b643-73af-480a-8896-ce505e8b94f1",
    "name": "BRAIN EATER",
    "flavourText": "Purple, gaunt humanoids with squidlike heads and four face tentacles. They live in complex, alien societies underground and eat humanoid brains.",
    "alignment": "C",
    "level": "8",
    "attacks": "4 tentacle +5 (1d8 + latch) or 1 mind blast or 1 mind control",
    "stats": {
      "ac": "14 (leather)",
      "hp": "36",
      "mv": "near",
      "str": "+2",
      "dex": "+3",
      "con": "+0",
      "int": "+4",
      "wis": "+2",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Hear Thoughts",
        "text": "Can hear the surface thoughts of all intelligent creatures within near."
      },
      {
        "name": "Latch",
        "text": "Tentacles attach to hit targets, automatically hitting the next round (DC 12 STR on turn to remove 1d4 tentacles). If all four remain latched onto the same humanoid target for 1 round, the target's brain is ripped out and devoured."
      },
      {
        "name": "Mind Blast",
        "text": "Fills a near-sized cube extending from brain eater. DC 15 INT or 3d6 damage and paralyzed 1d4 rounds."
      },
      {
        "name": "Mind Control",
        "text": "One target in near DC 15 CHA or brain eater controls for 1d4 rounds. "
      }
    ]
  },
  {
    "uuid": "81728369-c15c-45b6-99fb-cc5ffd55a05e",
    "name": "KRAKEN",
    "flavourText": "Primordial, tentacled leviathans the size of war galleons. They live in the lightless depths of the deep ocean.",
    "alignment": "C",
    "level": "17",
    "attacks": "4 tentacle (near) +9 (2d12) or 1 storm or 1d4 lightning bolt",
    "stats": {
      "ac": "18",
      "hp": "80",
      "mv": "double near (swim)",
      "str": "+6",
      "dex": "+3",
      "con": "+4",
      "int": "+4",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Electricity immune. Crush. Tentacle attacks deal double damage against objects."
      },
      {
        "name": "Lightning Bolt",
        "text": "Straight line (5' wide) extending far from kraken. DC 15 DEX or 6d6 damage."
      },
      {
        "name": "Storm",
        "text": "Seas become violently turbulent in 1 mile radius around kraken. Lasts 2d4 rounds. Seaborne vessels have a 1:6 chance of capsizing each round."
      }
    ]
  },
  {
    "uuid": "8176abce-f5fd-411b-973c-53741537c71a",
    "name": "MASTIFF",
    "flavourText": "Muscled guard dogs with fierce loyalty to their pack or owners.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 bite +1 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "8188afe8-d9ce-4439-816d-93a692b24b51",
    "name": "CHUUL",
    "flavourText": "Brown, horse-sized lobster bugs with tentacles and pincers.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 pincer +4 (1d8 + grab)",
    "stats": {
      "ac": "15",
      "hp": "25",
      "mv": "near (swim)",
      "str": "+3",
      "dex": "-1",
      "con": "+3",
      "int": "-1",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "DC 15 STR or held in pincer. DC 15 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "8355c6c1-395f-4e1b-8094-13c66f51c17d",
    "name": "PRIEST",
    "flavourText": "A respected member of a clergy who leads holy rituals and rites.",
    "alignment": "L",
    "level": "5",
    "attacks": "2 mace +3 (1d6) or 1 spell +3",
    "stats": {
      "ac": "15 (chainmail + shield)",
      "hp": "23",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+1",
      "int": "+0",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Anoint (WIS Spell)",
        "text": "DC 12. Close. One weapon or armor becomes a magic +2 version for 10 rounds."
      },
      {
        "name": "Healing Touch (WIS Spell)",
        "text": "DC 11. Heal one creature within close for 2d4 HP."
      },
      {
        "name": "Holy Flame (WIS Spell)",
        "text": "DC 13. Self. Weapons ignite in magic flames and deal an additional 1d6 damage for 5 rounds."
      },
      {
        "name": "Rebuke (WIS Spell)",
        "text": "DC 13. Focus. Chaotic creatures cannot attack priest or come within near range for duration. "
      }
    ]
  },
  {
    "uuid": "8564f038-2b6a-46c8-8d08-824e4a002fe0",
    "name": "KOBOLD",
    "flavourText": "Puny, scaled coyote-lizards that dwell underground.",
    "alignment": "C",
    "level": "0",
    "attacks": "1 spear (close/near) +0 (1d6)",
    "stats": {
      "ac": "13 (leather)",
      "hp": "1",
      "mv": "near",
      "str": "-2",
      "dex": "+2",
      "con": "+0",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Dodge",
        "text": "1/day, an attack that would hit misses instead."
      }
    ]
  },
  {
    "uuid": "86fb35cf-448f-4772-9fe9-cca07407592f",
    "name": "DARKMANTLE",
    "flavourText": "A floating, black octopus with rows of red eyes and a webbed skirt of tentacles.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 bite +3 (1d4) or 1 darkness",
    "stats": {
      "ac": "13",
      "hp": "4",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+3",
      "con": "+0",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Darkness",
        "text": "Extinguish all light sources in near."
      }
    ]
  },
  {
    "uuid": "88515a31-177a-404e-83a6-61b133c1bd17",
    "name": "WRAITH",
    "flavourText": "A shadowy spirit seething with anger and malice. Its presence is unsettling to animals.",
    "alignment": "C",
    "level": "8",
    "attacks": "3 death touch +6 (1d10 + life drain)",
    "stats": {
      "ac": "14",
      "hp": "36",
      "mv": "near (fly)",
      "str": "-4",
      "dex": "+4",
      "con": "+0",
      "int": "+0",
      "wis": "+0",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Greater Undead",
        "text": "Immune to morale checks. Only damaged by silver or magical sources."
      },
      {
        "name": "Incorporeal",
        "text": "In place of attacks, become corporeal or incorporeal."
      },
      {
        "name": "Life Drain",
        "text": "1d4 CON damage. Death if reduced to 0 CON."
      }
    ]
  },
  {
    "uuid": "8cbc2ca7-754d-4fb1-b676-8b9c2ac79bb1",
    "name": "GLADIATOR",
    "flavourText": "Veteran warriors seasoned in arena fights to the death.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 longsword +3 (1d8) or 1 spear (close/near) +3 (1d6)",
    "stats": {
      "ac": "16 (chainmail + shield)",
      "hp": "15",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+2",
      "int": "+0",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": []
  },
  {
    "uuid": "8fab0ac3-84eb-437c-aa12-5d1ac949ef14",
    "name": "SHARK, MEGALODON",
    "flavourText": "Primordial sharks the size of whales. Savage hunters.",
    "alignment": "N",
    "level": "8",
    "attacks": "3 bite +7 (2d8)",
    "stats": {
      "ac": "13",
      "hp": "38",
      "mv": "double near (swim)",
      "str": "+5",
      "dex": "+1",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Fearless",
        "text": "Immune to morale checks."
      }
    ]
  },
  {
    "uuid": "8fcec0eb-5faa-4506-80f3-349b2b3993bb",
    "name": "SIREN",
    "flavourText": "Baleful fey with dove wings and iridescent fish scales. Their singing entrances listeners.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 claw +2 (1d6) or 1 song",
    "stats": {
      "ac": "12",
      "hp": "18",
      "mv": "near (swim, fly)",
      "str": "+0",
      "dex": "+2",
      "con": "+0",
      "int": "+2",
      "wis": "+2",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Song",
        "text": "Enemies who can hear within double near DC 15 CHA or paralyzed 1d4 rounds. Immune for 1 day if passed check."
      }
    ]
  },
  {
    "uuid": "90d5c5c6-adba-4502-a325-bebd5a97b332",
    "name": "SALAMANDER",
    "flavourText": "Fire-colored lizardfolk with long tails. Flame-like frills run down their backs.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 flaming spear (close/near) +4 (1d6, ignites flammables) or 1 iron longbow (far) +2 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "24",
      "mv": "near",
      "str": "+2",
      "dex": "+0",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune."
      },
      {
        "name": "Heat Aura",
        "text": "Creatures in close DC12 CON on turn or 1d8 damage."
      }
    ]
  },
  {
    "uuid": "919bc895-bb23-4a6e-9317-792bac149a28",
    "name": "PANTHER",
    "flavourText": "Supple large cats with blue- black fur. Stealthy hunters.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 rend +3 (1d6)",
    "stats": {
      "ac": "14",
      "hp": "14",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+4",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "93b3116b-3d1f-472b-9542-832231cb3432",
    "name": "THE WANDERING MERCHANT",
    "flavourText": "A cheerful merchant who appears to be a hale, middle-aged human man with a handlebar mustache. He wears a white shirt, breeches, and leather apron, and he hauls a towering backpack bursting at the seams. Few know the merchant's true nature and origins, though some theorize he is an immortal being or a god (they are not entirely incorrect). The Wandering Merchant always has something useful, far-flung, or incredible to sell at a reasonable price, and there's no telling when or where he'll show up next...",
    "alignment": "L",
    "level": "15",
    "attacks": "4 +3 vorpal bastard sword +9 (1d10 + lop)",
    "stats": {
      "ac": "16 (mithral chainmail)",
      "hp": "71",
      "mv": "near",
      "str": "+3",
      "dex": "+3",
      "con": "+4",
      "int": "+3",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Legendary",
        "text": "Only damaged by magical sources. Hostile spells targeting The Wandering Merchant are DC 18 to cast."
      },
      {
        "name": "Amulet of Rahm-Hotep",
        "text": "In place of attacks, teleport to a random location in the multiverse."
      },
      {
        "name": "Bottomless Bag",
        "text": "Contains 200 gear slots in magical sub-pockets. Weighs as much as a normal backpack. The Wandering Merchant can summon it to himself from anywhere by snapping his fingers."
      },
      {
        "name": "Dice of Truth",
        "text": "A set of three six-sided dice whose rolls cannot be magically or mundanely altered in any way. Lop. On a natural attack roll of 18-20, behead the target."
      },
      {
        "name": "Reckoning",
        "text": "Any creature who steals from The Wandering Merchant develops a curse. Over the next 2d8 days, that creature turns into a cockatrice. This curse can only be lifted by a wish spell or by returning the stolen goods. Strange Lands. The Wandering Merchant does not suffer any ill effects from the natural environment he does not wish to suffer."
      }
    ]
  },
  {
    "uuid": "93bf4b27-386d-4b66-8ed0-f57844f852b4",
    "name": "DEMON, MARILITH",
    "flavourText": "Hissing, armored women with six limbs and the lower bodies of giant snakes. Six whirling blades flash in their hands.",
    "alignment": "C",
    "level": "9",
    "attacks": "6 longsword +7 (1d8)",
    "stats": {
      "ac": "17 (plate mail)",
      "hp": "43",
      "mv": "near (climb)",
      "str": "+5",
      "dex": "+4",
      "con": "+3",
      "int": "+3",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Parry",
        "text": "Trade 2 longsword attacks next round to deflect a melee attack that would hit."
      }
    ]
  },
  {
    "uuid": "93ed70fe-3430-4f4d-8514-e31fd88fc2c8",
    "name": "THE TARRASQUE",
    "flavourText": "A colossal, four-legged reptile with crocodilian jaws, amber scales, and a diamond-hard, spiked carapace. It towers overhead like a mountain, able to swallow entire villages in one gulp. The tarrasque hibernates deep in the earth or at the bottom of the sea for centuries, only awakening long enough to fill its vast belly in an indiscriminate rampage of terror and destruction. There is only one tarrasque, and it is the most dreaded creature to walk the earth.",
    "alignment": "N",
    "level": "30",
    "attacks": "4 thrash (near) +13 (3d10 + sever) and 1 bite (near) +13 (5d10 + sever + swallow)",
    "stats": {
      "ac": "22",
      "hp": "140",
      "mv": "triple near (burrow, swim)",
      "str": "+7",
      "dex": "+2",
      "con": "+5",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Legendary",
        "text": "Only damaged by magical sources. Hostile spells targeting the tarrasque are DC 18 to cast."
      },
      {
        "name": "Deep Dweller",
        "text": "Immune to harm from fire and cold. Amphibious. Permanent Death. Cannot be permanently killed unless a wish spell is cast on it while it is at 0 HP."
      },
      {
        "name": "Rampage",
        "text": "In place of attacks, move far in a straight line and make one bite attack. On a hit, triple damage."
      },
      {
        "name": "Reflective Carapace",
        "text": "Immune to rays, blasts, or bolts of energy. 1:6 chance these are reflected back at their originator."
      },
      {
        "name": "Regeneration",
        "text": "Regains 4d10 lost HP at the beginning of its turn. Sever. On a natural attack roll of 18+, the attack also severs a random limb. 1d6: 1. Head, 2-4. Arm, 5-6. Leg."
      },
      {
        "name": "Swallow",
        "text": "DC 18 STR or swallowed whole. Total darkness inside and 4d10 damage per round. Tarrasque regurgitates all swallowed if dealt at least 30 damage in one round to the inside of its gullet."
      }
    ]
  },
  {
    "uuid": "964a2c4d-8182-44b7-b71c-69710236fb39",
    "name": "GELATINOUS CUBE",
    "flavourText": "A translucent cube of slime that silently mows through tunnels.",
    "alignment": "N",
    "level": "5",
    "attacks": "1 touch +4 (1d8 + toxin + engulf)",
    "stats": {
      "ac": "11",
      "hp": "24",
      "mv": "near",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "-4",
      "wis": "+1",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Engulf",
        "text": "DC 12 STR or trapped inside cube. Touch attack auto- hits engulfed targets each round. DC 12 STR on turn to escape. Fail checks if paralyzed."
      },
      {
        "name": "Rubbery",
        "text": "Half damage from stabbing weapons."
      },
      {
        "name": "Toxin",
        "text": "DC 15 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "96da736f-9d75-41e4-8a83-5d291d0f6c69",
    "name": "RATHGAMNON",
    "flavourText": "A pearl-white lion with feathered wings that stands twenty feet tall. Rathgamnon is Madeera the Covenant's mightiest servant; his blank eyes see far into the depths of time and space. He spends all eternity watching the whirl of the stars from the highest mountain in the realm of mortals, waiting for the celestial alignments that prophesy epochs of weal and woe, titanic changes to the balance of power in the cosmos, or threats to the laws of reality itself.",
    "alignment": "L",
    "level": "19",
    "attacks": "2 rend (near) +9 (2d10) and 2 spell +8",
    "stats": {
      "ac": "17",
      "hp": "89",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+3",
      "con": "+4",
      "int": "+5",
      "wis": "+6",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Legendary",
        "text": "Only damaged by magical sources. Hostile spells targeting Rathgamnon are DC 18 to cast."
      },
      {
        "name": "Roar",
        "text": "In place of attacks, all creatures who can hear within far DC 18 CHA or be rendered blind and speechless for 1d4 days."
      },
      {
        "name": "Abjure (WIS Spell)",
        "text": "DC 13. Self. End any hostile magical effects affecting Rathgamnon."
      },
      {
        "name": "Abolish (WIS Spell)",
        "text": "DC 13. One target in far takes 5d8 damage."
      },
      {
        "name": "Anchor (WIS Spell)",
        "text": "DC 14. One target in far DC 18 STR or bound and anchored by chains of golden runes for 1d4 rounds."
      },
      {
        "name": "Gate (WIS Spell)",
        "text": "DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed."
      },
      {
        "name": "Portent (WIS Spell)",
        "text": "DC 14. Lasts 2d4 rounds. One target in near has advantage or disadvantage on all attack rolls and checks."
      },
      {
        "name": "Time Stop (WIS Spell)",
        "text": "DC 15. Self. Time freezes for everyone except Rathgamnon for 1d4 rounds. Everything that occurs during the time freeze happens simultaneously when the spell ends."
      }
    ]
  },
  {
    "uuid": "96e03d3d-6353-48f7-9c18-f8cd838eea74",
    "name": "ROPER",
    "flavourText": "Ravenous monstrosities that look like cave rocks when their single eye and maw are closed.",
    "alignment": "N",
    "level": "6",
    "attacks": "4 tendril (double near) +4 (1d6 + grab) and 1 bite +4 (2d8)",
    "stats": {
      "ac": "14",
      "hp": "31",
      "mv": "close (climb)",
      "str": "+3",
      "dex": "-2",
      "con": "+4",
      "int": "-1",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Can only be damaged by magical sources."
      },
      {
        "name": "Grab",
        "text": "DC 15 STR or target trapped in tendril. Tendril auto- hits target next round. DC 15 STR on turn to break free."
      },
      {
        "name": "Pull",
        "text": "In place of a tendril attack, pull a grabbed target a near distance."
      },
      {
        "name": "Tendrils",
        "text": "Four total. AC 18 each. 4+ damage to one severs it."
      }
    ]
  },
  {
    "uuid": "978c6156-47d1-4d8c-9bce-c7c308f29b69",
    "name": "ORC, CHIEFTAIN",
    "flavourText": "An imposing orc with scars crisscrossing its body.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 greataxe +4 (1d10)",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "19",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Rage",
        "text": "1/day, immune to morale checks, +1d4 damage (3 rounds)."
      }
    ]
  },
  {
    "uuid": "99271e41-8bd2-4182-b3e6-29d92510db73",
    "name": "NIGHTMARE",
    "flavourText": "Black warhorses with flaming manes, hooves, and eyes.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 hooves +5 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "29",
      "mv": "double near (fly)",
      "str": "+3",
      "dex": "+3",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Nightmare and its rider immune to fire."
      }
    ]
  },
  {
    "uuid": "9934e7df-35b3-41e1-add9-0b3e9977de34",
    "name": "VELOCIRAPTOR",
    "flavourText": "Fast, turkey-sized raptors with vicious toe claws. Pack hunters.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 claw +3 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "10",
      "mv": "double near",
      "str": "-1",
      "dex": "+3",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Clever",
        "text": "+1d4 damage when attacking with surprise."
      }
    ]
  },
  {
    "uuid": "9babeafe-1cbe-435c-9f02-bc14cd0fde1d",
    "name": "DROW, DRIDER",
    "flavourText": "A monstrosity with the body of a giant spider and torso of a drow.",
    "alignment": "C",
    "level": "6",
    "attacks": "3 longsword +3 (1d8) or 2 longbow (far) +3 (1d8 + poison)",
    "stats": {
      "ac": "16 (mithral chainmail)",
      "hp": "29",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+3",
      "con": "+2",
      "int": "+2",
      "wis": "+2",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or paralyzed 1d4 rounds."
      },
      {
        "name": "Sunblind",
        "text": "Blinded in bright light."
      }
    ]
  },
  {
    "uuid": "9bcf8d38-f02d-4153-b5c9-3c30192935d2",
    "name": "OBE-IXX OF AZARUMME",
    "flavourText": "A pale, angular woman in translucent plate mail fashioned from giant scorpion chitin. Obe-Ixx, daughter of Azarumme, rose up from the prehistoric barbarian tribes of Tal-Yool to conquer all in her path. One day, she stood at the steps of an obsidian ziggurat deep within the trackless jungle. Forty nights later, Obe-Ixx emerged as the ur-vampire, bloodlust made flesh. Her dynasty would rise and fall again and again over the coming millennia.",
    "alignment": "C",
    "level": "16",
    "attacks": "4 greatsword (near) +11 (1d12 + 2 + Moonbite properties) and 1 bite +9 (1d8 + blood drain) and 1 charm",
    "stats": {
      "ac": "18 (+3 plate mail)",
      "hp": "76",
      "mv": "near (climb, fly)",
      "str": "+5",
      "dex": "+3",
      "con": "+4",
      "int": "+3",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Legendary Undead",
        "text": "Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Obe-Ixx are DC 18 to cast."
      },
      {
        "name": "Blood Drain",
        "text": "Obe-Ixx heals 2d8 HP, target permanently loses 1d6 CON. At 0 CON, target dies and rises as a loyal vampire or vampire spawn (Obe-Ixx chooses)."
      },
      {
        "name": "Charm",
        "text": "One humanoid target who can see Obe-Ixx within near, DC 15 CHA or under Obe-Ixx's control for 1d4 days."
      },
      {
        "name": "Dire Shapechange",
        "text": "In place of attacks, turn into a giant bat, dire wolf, or back into regular form."
      },
      {
        "name": "Moonbite Properties",
        "text": "+2 greatsword, thrown weapon, returns after being thrown. Spells to heal damage it inflicts are DC 15 to cast."
      },
      {
        "name": "Ur-Vampire",
        "text": "Must sleep in sarcophagus at least once per moon cycle or loses 2d8 HP per day that cannot heal until sleeping"
      },
      {
        "name": "in sarcophagus",
        "text": "Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart while at 0 HP with a wooden stake carved from a tree from the Tal-Yool jungle."
      }
    ]
  },
  {
    "uuid": "9c909245-f511-4af7-a207-b6d6c750196e",
    "name": "VAMPIRE SPAWN",
    "flavourText": "Lesser, feral vampires born from the bite of their vampiric sires. Bloodthirsty and savage. They rarely leave a victim alive.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 bite +4 (1d8 + blood drain)",
    "stats": {
      "ac": "13 (leather)",
      "hp": "25",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+2",
      "con": "+3",
      "int": "-1",
      "wis": "+1",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Greater Undead",
        "text": "Immune to morale checks. Only damaged by silver or magical sources."
      },
      {
        "name": "Blood Drain",
        "text": "Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as a vampire spawn."
      },
      {
        "name": "Vampire",
        "text": "Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP."
      }
    ]
  },
  {
    "uuid": "9d8cbaea-4306-414b-b1f0-141589d8e90f",
    "name": "MEDUSA",
    "flavourText": "Immortal women with coiling snakes for hair and scaled skin.",
    "alignment": "C",
    "level": "8",
    "attacks": "1 snake bite +6 (1d6 + poison)",
    "stats": {
      "ac": "14",
      "hp": "38",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+2",
      "int": "+2",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Godborn",
        "text": "Hostile spells targeting the medusa are DC 15 to cast."
      },
      {
        "name": "Petrify",
        "text": "Any creature (including medusa) who looks directly at medusa, DC 15 CON or petrified."
      },
      {
        "name": "Poison",
        "text": "DC 15 CON or go to 0 HP."
      }
    ]
  },
  {
    "uuid": "9fd457db-4eae-46f8-b6d2-7c5bc9d51b0d",
    "name": "COCKATRICE",
    "flavourText": "A molting, lizard-chicken hybrid with a crimson, razorlike crest.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 bite +1 (1d4 + petrify)",
    "stats": {
      "ac": "11",
      "hp": "14",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+1",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Petrify",
        "text": "DC 12 CON or petrified."
      }
    ]
  },
  {
    "uuid": "a299f782-816d-4c23-ad78-d95ace7aec41",
    "name": "GORILLA",
    "flavourText": "Mighty, jungle-dwelling apes.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 rend +5 (2d6)",
    "stats": {
      "ac": "12",
      "hp": "20",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+2",
      "con": "+2",
      "int": "-1",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": []
  },
  {
    "uuid": "a2dc3581-6df3-4819-8241-1280ac586f93",
    "name": "TREANT",
    "flavourText": "Peaceful, slow-moving trees with merry eyes and tremulous voices. They protect the forest.",
    "alignment": "N",
    "level": "8",
    "attacks": "3 slam +8 (1d10) or 1 rock (far) +8 (2d12)",
    "stats": {
      "ac": "14",
      "hp": "38",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+2",
      "int": "+2",
      "wis": "+3",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Animate Tree",
        "text": "2/day. In place of attacks, one tree within near awakens as a treant ally without this ability. Reverts back in 1 day."
      }
    ]
  },
  {
    "uuid": "a369e0c7-e434-42ea-b24e-d5a289447d25",
    "name": "CRAB, GIANT",
    "flavourText": "A wagon-sized, armored crab with two crushing pincers.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 pincer +4 (1d8 + crush)",
    "stats": {
      "ac": "15",
      "hp": "24",
      "mv": "near (swim)",
      "str": "+3",
      "dex": "+0",
      "con": "+2",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Crush",
        "text": "DC 15 STR or target takes 1d8 damage."
      }
    ]
  },
  {
    "uuid": "a42ca01f-bff2-4467-9e6d-48c46eff2718",
    "name": "MAGE",
    "flavourText": "Trained wizards who are often members of a sorcerous order.",
    "alignment": "L",
    "level": "6",
    "attacks": "1 spell +5",
    "stats": {
      "ac": "11",
      "hp": "27",
      "mv": "near",
      "str": "-1",
      "dex": "+1",
      "con": "+0",
      "int": "+3",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Arcane Armor (INT Spell)",
        "text": "Self. DC 12. AC 16 for 2d4 rounds."
      },
      {
        "name": "Blast (INT Spell)",
        "text": "DC 12. Far, one target. 2d6 damage."
      },
      {
        "name": "Cancel (INT Spell)",
        "text": "DC 13. End one spell affecting a target within near."
      },
      {
        "name": "Levitate (INT Spell)",
        "text": "DC 12. Close. Focus. Hover near for duration, vertical movement only."
      },
      {
        "name": "Snare (INT Spell)",
        "text": "DC 13. Focus. One humanoid target within near paralyzed for duration."
      }
    ]
  },
  {
    "uuid": "a49e6b17-5b03-4525-b618-77a4a2dc212b",
    "name": "OTYUGH",
    "flavourText": "Stumpy, three-legged beasts with barbed tentacles and vast mouths. Drawn by rot and filth.",
    "alignment": "N",
    "level": "7",
    "attacks": "2 tentacle +5 (1d8) and 1 bite +5 (1d10 + disease)",
    "stats": {
      "ac": "13",
      "hp": "35",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+4",
      "int": "-2",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Disease",
        "text": "DC 15 CON or infected. DC 15 CON each day or lose 1d6 HP (can't heal). Ends on success."
      }
    ]
  },
  {
    "uuid": "a5acd687-86b7-4741-a8ad-af6f9f02b0d3",
    "name": "SPIDER, SWARM",
    "flavourText": "A scurrying carpet of spiders.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +3 (1d4 + poison)",
    "stats": {
      "ac": "13",
      "hp": "9",
      "mv": "near (climb)",
      "str": "-1",
      "dex": "+3",
      "con": "+0",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "a639246c-4f94-4d0b-bfef-b514f1710729",
    "name": "OCTOPUS, GIANT",
    "flavourText": "Octopi as large as sailing skiffs.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 tentacle (near) +4 (1d8 + grab)",
    "stats": {
      "ac": "13",
      "hp": "23",
      "mv": "near (swim)",
      "str": "+3",
      "dex": "+3",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Grab",
        "text": "DC 15 STR or immobilized. Tentacle auto-hits each round. DC 15 STR on turn to break free."
      },
      {
        "name": "Ink",
        "text": "In place of attacks, ink cloud blinds all in near for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "a748b727-c272-4788-b1b2-8a17247c05b4",
    "name": "GRICK",
    "flavourText": "A huge worm with four suckered tentacles and a snapping beak.",
    "alignment": "N",
    "level": "4",
    "attacks": "1 beak +3 (1d8) and 1 tentacle +3 (1d6 + grab)",
    "stats": {
      "ac": "14",
      "hp": "19",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Camouflage",
        "text": "Hard to see in cave terrain or rocks."
      },
      {
        "name": "Grab",
        "text": "Target is immobilized. DC 15 Strength check on turn to break free."
      }
    ]
  },
  {
    "uuid": "a7e40a78-efed-4322-aa27-c0458ccbb5d1",
    "name": "TROLL, FROST",
    "flavourText": "Rime-covered trolls with blue skin and flinty, black eyes. They stalk arctic lands and frozen boreal forests.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 claw +5 (1d8) and 1 bite +5 (1d12)",
    "stats": {
      "ac": "13",
      "hp": "34",
      "mv": "near",
      "str": "+3",
      "dex": "+2",
      "con": "+3",
      "int": "-1",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Cold and fire immune."
      },
      {
        "name": "Regenerate",
        "text": "Regains 2d6 HP on its turn unless its wounds are cauterized with acid."
      }
    ]
  },
  {
    "uuid": "a80ef810-52c8-4c14-b068-97fa16c07bbf",
    "name": "BERSERKER",
    "flavourText": "Howling, battleraging warriors.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 greataxe +2 (1d10) or 1 spear (close/near) +2 (1d6)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "10",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Rage",
        "text": "1/day, immune to morale checks, +1d4 damage (3 rounds)."
      }
    ]
  },
  {
    "uuid": "a9a9f54b-8954-482e-866b-cc0791dc4a7e",
    "name": "SPHINX",
    "flavourText": "A winged, leonine oracle who can see into time and space and often speaks in riddles. Lives in isolated mountains.",
    "alignment": "L",
    "level": "9",
    "attacks": "3 claw +7 (1d10) or 2 spell +5",
    "stats": {
      "ac": "16",
      "hp": "42",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+1",
      "con": "+2",
      "int": "+4",
      "wis": "+4",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Roar",
        "text": "In place of attacks, all creatures who can hear within far DC 18 CHA or paralyzed 1d4 rounds."
      },
      {
        "name": "Gate (WIS Spell)",
        "text": "DC 14. Open a portal at a point within near to another location on any plane. Lasts 1d6 rounds or until dismissed."
      },
      {
        "name": "Omens (WIS Spell)",
        "text": "DC 12. Self. ADV on all actions for 1d4 rounds."
      },
      {
        "name": "Riddle (WIS Spell)",
        "text": "DC 12. One target in far DC 15 INT or stupefied 1d4 rounds."
      },
      {
        "name": "Time Bend (WIS Spell)",
        "text": "DC 14. One target in near frozen in time for 1d4 rounds."
      },
      {
        "name": "Unmake (WIS Spell)",
        "text": "DC 13. One target in far takes 3d8 damage."
      }
    ]
  },
  {
    "uuid": "a9c0ff45-ce35-4bda-8f12-1768952cdb3b",
    "name": "DEVIL, HORNED",
    "flavourText": "Iron-scaled hellions as big as ogres with weighty ram horns, lashing tails, and leathery wings. They are opportunistic and craven in battle.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 burning trident (near) +7 (2d6) or 1 fire blast (far) +4 (2d8)",
    "stats": {
      "ac": "16",
      "hp": "35",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+2",
      "con": "+4",
      "int": "+2",
      "wis": "+1",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Iron Hide",
        "text": "Half damage from non-magical weapons."
      }
    ]
  },
  {
    "uuid": "ab6650ed-cd59-4873-ab86-79662af7bf98",
    "name": "ELEMENTAL, WATER",
    "flavourText": "A crashing vortex of water.",
    "alignment": "N",
    "level": "6/9",
    "attacks": "3 slam +6 (2d6/3d6) or 1 whirlpool",
    "stats": {
      "ac": "15",
      "hp": "29/42",
      "mv": "double near (swim)",
      "str": "+4",
      "dex": "+2",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources."
      },
      {
        "name": "Whirlpool",
        "text": "All within close DC 15 STR or immobilized inside water elemental (treat as underwater). DC 15 STR on turn to escape. "
      }
    ]
  },
  {
    "uuid": "ac115a69-4e33-45fd-846a-d331e5602394",
    "name": "SCARAB, SWARM",
    "flavourText": "A chittering cloud of iridescent, oval-shaped beetles.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 bite +3 (1d6)",
    "stats": {
      "ac": "13",
      "hp": "14",
      "mv": "near (fly)",
      "str": "-1",
      "dex": "+3",
      "con": "+1",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "ad5593e4-5321-4873-9f1d-6c83a4e6dcaa",
    "name": "MERFOLK",
    "flavourText": "Ocean dwellers with human upper bodies and long fish tails.",
    "alignment": "L",
    "level": "2",
    "attacks": "1 spear (close/ near) +2 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "9",
      "mv": "near (swim)",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "+0",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": []
  },
  {
    "uuid": "aeeb7323-7de8-41da-a87b-8ebffef6815d",
    "name": "ZOMBIE",
    "flavourText": "Lurching and decomposed undead that hunt in mobs.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 slam +2 (1d6)",
    "stats": {
      "ac": "8",
      "hp": "11",
      "mv": "near",
      "str": "+2",
      "dex": "-2",
      "con": "+2",
      "int": "-2",
      "wis": "-2",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Undead",
        "text": "Immune to morale checks."
      },
      {
        "name": "Relentless",
        "text": "If zombie reduced to 0 HP by a non-magical source, DC 15 CON to go to 1 HP instead."
      }
    ]
  },
  {
    "uuid": "af468ccb-6d1d-4fb7-91d8-10e4c654569f",
    "name": "WILL-O'-WISP",
    "flavourText": "A bobbing marsh light animated by an evil spirit. It tries to lead the living into danger.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 life drain +3",
    "stats": {
      "ac": "13",
      "hp": "10",
      "mv": "near (fly)",
      "str": "-3",
      "dex": "+3",
      "con": "+1",
      "int": "-1",
      "wis": "-1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Life Drain",
        "text": "1d4 CON damage. Death if reduced to 0 CON."
      }
    ]
  },
  {
    "uuid": "af580bb4-f1ec-4889-aafe-f504686ec2ce",
    "name": "REAVER",
    "flavourText": "A knight in blackened armor riddled with cruel barbs.",
    "alignment": "C",
    "level": "6",
    "attacks": "3 bastard sword +4 (1d8 + 2)",
    "stats": {
      "ac": "17 (plate mail + shield)",
      "hp": "28",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "+0",
      "wis": "+0",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Bloodlust",
        "text": "+2 damage with melee weapons (included)."
      }
    ]
  },
  {
    "uuid": "af721015-204f-4966-a87a-38607cbebf04",
    "name": "LEECH, GIANT",
    "flavourText": "A glossy black, blood-drinking slug as large as a cat.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 bite +1 (1d4 + attach)",
    "stats": {
      "ac": "9",
      "hp": "10",
      "mv": "near (swim)",
      "str": "+1",
      "dex": "-1",
      "con": "+1",
      "int": "-3",
      "wis": "-1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Attach",
        "text": "Attach to target; bite auto-hits next round. DC 12 STR on turn to tear off."
      }
    ]
  },
  {
    "uuid": "b5410ceb-22ff-4a1d-ba57-c82db0ff38c6",
    "name": "HYDRA",
    "flavourText": "A towering, amphibious reptile with a bouquet of snake heads writhing on long necks.",
    "alignment": "N",
    "level": "*",
    "attacks": "1 bite (near) +6 (1d8)",
    "stats": {
      "ac": "15",
      "hp": "*",
      "mv": "near (swim)",
      "str": "+5",
      "dex": "+1",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Heads",
        "text": "Choose how many heads the hydra has. Each is LV 2, AC 15, HP 11, and can make 1 bite attack. A killed head sprouts into two new heads at the start of the hydra's turn unless cauterized beforehand. The hydra's LV is all the heads combined."
      }
    ]
  },
  {
    "uuid": "b62d9038-8be0-4a23-b553-defc6ef0d41e",
    "name": "GNOME, DEEP",
    "flavourText": "Gray-skinned, white-haired fey the size of halflings. They hunt for gems and rare cave flora.",
    "alignment": "L",
    "level": "3",
    "attacks": "1 pick +3 (1d6) or 1 dart (near) +2 (1d4)",
    "stats": {
      "ac": "14 (leather + shield)",
      "hp": "14",
      "mv": "near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "+1",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Stone Meld",
        "text": "2/day, underground only. Turn invisible for 3 rounds."
      }
    ]
  },
  {
    "uuid": "b6e360db-b722-4317-b045-d2ba4973e0e5",
    "name": "Frostblood. Cold immune. GIANT, GOAT",
    "flavourText": "Highland-dwelling, barbaric giants with goatlike legs, horns, and horizontal pupils.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "39",
      "mv": "double near (climb)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "b80d58b9-322f-449a-826f-1d4200a4dbfa",
    "name": "ANGEL, PRINCIPI",
    "flavourText": "Serene humans sculpted from alabaster. Golden orbs for eyes.",
    "alignment": "L",
    "level": "11",
    "attacks": "3 silvered bastard sword +9 (1d10)",
    "stats": {
      "ac": "16 (+1 plate mail)",
      "hp": "53",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+2",
      "con": "+4",
      "int": "+4",
      "wis": "+4",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Moonlight Aura",
        "text": "Hostile spells targeting the principi are DC 15."
      },
      {
        "name": "Truesight",
        "text": "Can see all invisible creatures and objects."
      }
    ]
  },
  {
    "uuid": "b861011a-f6ec-4099-b829-e6bfd72bb57c",
    "name": "CHIMERA",
    "flavourText": "A monstrous beast with a half-goat, half-lion body, wide dragon wings, and the heads of a goat, lion, and dragon.",
    "alignment": "C",
    "level": "10",
    "attacks": "4 rend +7 (2d8) and 1 fire breath",
    "stats": {
      "ac": "16",
      "hp": "49",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+4",
      "con": "+4",
      "int": "-3",
      "wis": "+2",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Fire Breath",
        "text": "Fills a near-sized cube extending from chimera. DC 15 DEX or 4d6 damage."
      }
    ]
  },
  {
    "uuid": "b8ef21b6-b0bf-4733-98d6-4e3589f3ebd2",
    "name": "SNAKE, COBRA",
    "flavourText": "A weaving serpent with a neck hood and lethal venom.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 bite +2 (1 + poison)",
    "stats": {
      "ac": "12",
      "hp": "4",
      "mv": "near",
      "str": "-3",
      "dex": "+2",
      "con": "+0",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 18 CON or go to 0 HP with a death timer of 1."
      }
    ]
  },
  {
    "uuid": "b90619a0-d0e9-44c2-a475-e2aa9b535719",
    "name": "HAG, WEALD",
    "flavourText": "Eyes dark as moonless nights, skin made of rotting wood, hair of tangled roots and vines.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 claw +4 (1d8) or 1 drink pain",
    "stats": {
      "ac": "14",
      "hp": "28",
      "mv": "near",
      "str": "+3",
      "dex": "+2",
      "con": "+1",
      "int": "+1",
      "wis": "+2",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Drink Pain",
        "text": "Near range. DC 12 CHA to deal 2d4 damage to a creature; regain that many HP."
      },
      {
        "name": "Shapechange",
        "text": "Instantly change to look like any other humanoid. "
      }
    ]
  },
  {
    "uuid": "bb2e57e3-7eea-4604-9c3c-15ccece14f04",
    "name": "CAVE BRUTE",
    "flavourText": "A hulking, insectoid beast with long mandibles, four eyes, and thick arms covered in bristles.",
    "alignment": "N",
    "level": "6",
    "attacks": "2 claw +5 (1d8) and 1 mandible +5 (1d10)",
    "stats": {
      "ac": "14",
      "hp": "28",
      "mv": "near (burrow)",
      "str": "+4",
      "dex": "+1",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Bewilder",
        "text": "Creatures within near that see the cave brute's eyes, DC 12 CHA at start of their turn or dazed and no action."
      }
    ]
  },
  {
    "uuid": "bb773327-7961-42fc-9533-ef6077bec94c",
    "name": "Venom. DC 9 CON or go to 0 HP. WERERAT",
    "flavourText": "A slinking, rat-faced humanoid covered in mangy fur.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 bite +2 (1d6)",
    "stats": {
      "ac": "13 (leather)",
      "hp": "14",
      "mv": "near (climb)",
      "str": "+1",
      "dex": "+2",
      "con": "+1",
      "int": "-1",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by silver or magic sources."
      },
      {
        "name": "Lycanthropy",
        "text": "If 12 or more damage from the same wererat, contract lycanthropy."
      }
    ]
  },
  {
    "uuid": "bbfdc903-907d-4503-a0c9-e41f1870e140",
    "name": "DEMON, BALOR",
    "flavourText": "Colossal, horned bat-beasts wreathed in the flames of hell itself. Their mighty swords and cracking whips of fire can slice through stone.",
    "alignment": "C",
    "level": "16",
    "attacks": "3 greatsword +10 (2d12 + hellfire) and 1 fire whip (near) +10 (2d6 + grab)",
    "stats": {
      "ac": "19",
      "hp": "77",
      "mv": "double near (fly)",
      "str": "+6",
      "dex": "+2",
      "con": "+5",
      "int": "+4",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Fire immune. Only damaged by magical sources."
      },
      {
        "name": "Grab",
        "text": "DC 18 STR or target bound in whip. 2d6 damage per round held, DC 18 STR on turn to break free. In place of fire whip attack, balor can fling a grabbed target double near on its turn."
      },
      {
        "name": "Hellfire",
        "text": "DC 18 DEX or 2d8 damage per round until flames extinguished."
      }
    ]
  },
  {
    "uuid": "be336faa-3eee-44aa-87e9-fed6e5a28295",
    "name": "DRAGON, SEA",
    "flavourText": "A warm sea breeze blows around this amphibious, gold- scaled wyrm. A beard of tendrils covers its snout, and a blue mane billows along its neck.",
    "alignment": "L",
    "level": "16",
    "attacks": "4 rend +10 (2d10) or 1 steam breath or 1 water spout",
    "stats": {
      "ac": "17",
      "hp": "76",
      "mv": "double near (fly, swim)",
      "str": "+5",
      "dex": "+6",
      "con": "+4",
      "int": "+4",
      "wis": "+5",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Steam Breath",
        "text": "Fills a double near-sized cube extending from dragon. DC 15 DEX or 4d12 damage."
      },
      {
        "name": "Water Spout",
        "text": "Fills a near-sized cube within far. DC 15 STR or creatures inside flung 2d100 feet in a random direction."
      }
    ]
  },
  {
    "uuid": "beca3f59-38c6-4b8c-90be-a7415913480e",
    "name": "GHOST",
    "flavourText": "A wavering spirit with a face contorted in rage or sadness.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 death touch +5 (1d8 + life drain) or 1 possess",
    "stats": {
      "ac": "13",
      "hp": "27",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+3",
      "con": "+0",
      "int": "+0",
      "wis": "+0",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Greater Undead",
        "text": "Immune to morale checks. Only damaged by silver or magical sources."
      },
      {
        "name": "Incorporeal",
        "text": "In place of attacks, become corporeal or incorporeal."
      },
      {
        "name": "Life Drain",
        "text": "1d4 CON damage. Death if reduced to 0 CON."
      },
      {
        "name": "Possess",
        "text": "Must be corporeal. One target, close range. Contested CHA check. If ghost wins, it inhabits target's body and controls it for 2d4 rounds."
      }
    ]
  },
  {
    "uuid": "bfac7b18-c4fe-4251-a692-21057f19533b",
    "name": "ANGEL, SERAPH",
    "flavourText": "Beautiful, luminous humanoids with white-feathered wings.",
    "alignment": "L",
    "level": "3",
    "attacks": "2 longsword +3 (1d8)",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "14",
      "mv": "near (fly)",
      "str": "+3",
      "dex": "+1",
      "con": "+1",
      "int": "+2",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Bless",
        "text": "3/day, touch one target to give it a luck token."
      }
    ]
  },
  {
    "uuid": "c05920dd-eb3a-43b7-81bc-596a55cf0fc2",
    "name": "ELEMENTAL, AIR",
    "flavourText": "A howling tornado of wind.",
    "alignment": "N",
    "level": "6/9",
    "attacks": "3 slam +7 (2d6/3d6) or 1 whirlwind",
    "stats": {
      "ac": "16",
      "hp": "29/42",
      "mv": "double near (fly)",
      "str": "+3",
      "dex": "+5",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources."
      },
      {
        "name": "Whirlwind",
        "text": "All within close DC 15 DEX or flung 2d20 feet in random direction."
      }
    ]
  },
  {
    "uuid": "c0615e90-42b6-4bc5-b545-1b1d1dfefdc2",
    "name": "COUATL",
    "flavourText": "A human-sized snake with scales made of jewels and a corona of iridescent feathers.",
    "alignment": "L",
    "level": "9",
    "attacks": "3 bite +6 (2d6 + poison)",
    "stats": {
      "ac": "16",
      "hp": "42",
      "mv": "near (fly)",
      "str": "+2",
      "dex": "+3",
      "con": "+2",
      "int": "+4",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Change Shape",
        "text": "In place of attacks, transform into any similarly-sized creature."
      },
      {
        "name": "Poison",
        "text": "DC 15 CON or fall into natural, deep sleep for 1d8 hours."
      },
      {
        "name": "Restore",
        "text": "In place of attacks, touch one creature to remove a curse, affliction, or heal 3d8 HP."
      }
    ]
  },
  {
    "uuid": "c0f88777-546b-408f-bb2c-37175f26708d",
    "name": "THE TEN-EYED ORACLE",
    "flavourText": "A floating mass of rubbery skin crusted with barnacles. Its ten eyestalks writhe like snakes, and a deep, circular scar mars its central body, blinding what was once a large eye above a lipless maw. The Ten-Eyed Oracle stalks the Shadowdark, burbling mad prophesies and somehow moving freely between the lightless fathoms of the earth. The keepers of the deep lore suspect The Ten-Eyed Oracle was once a benevolent ally of mankind, but an unknown calamity drove it to insanity and reckless hatred.",
    "alignment": "C",
    "level": "18",
    "attacks": "2d4 eyestalk ray",
    "stats": {
      "ac": "17",
      "hp": "85",
      "mv": "near (fly)",
      "str": "+4",
      "dex": "+5",
      "con": "+4",
      "int": "+5",
      "wis": "+4",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Legendary",
        "text": "Only damaged by magical sources. Hostile spells targeting The Ten-Eyed Oracle are DC 18 to cast."
      },
      {
        "name": "Eyestalk Ray",
        "text": "Each ray can shoot once per round and target one creature or an object up to 1,000 pounds (up to four on same target).\n1. Charm. DC 15 CHA or become ally for 1d4 rounds.\n2. Hold. DC 15 STR or paralyzed 1d4 rounds.\n3. Sleep. DC 15 WIS or asleep 1d4 rounds.\n4. Polymorph. DC 15 INT or turned into vermin for 1d4 rounds.\n5. Cancel. DC 15 DEX or all magical effects on target end.\n6. Confusion. DC 15 WIS or attack a random ally within near.\n7. Telekinesis. DC 15 STR or hover target up to double near.\n8. Disintegrate. DC 15 DEX or 5d8 damage (object destroyed).\n9. Petrify. DC 15 CON or petrified.\n10. Death. DC 15 CON or drop to 0 HP with a death timer of 1."
      }
    ]
  },
  {
    "uuid": "c1a67e4d-9505-4745-b01b-e95682585c28",
    "name": "DEVIL, BARBED",
    "flavourText": "Lanky, green-mottled fiends bristling with hooked spines.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 spine (near) +3 (1d6 + barb) or 1 fire blast (far) +3 (1d8)",
    "stats": {
      "ac": "13",
      "hp": "14",
      "mv": "near",
      "str": "+2",
      "dex": "+3",
      "con": "+1",
      "int": "+1",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Barb",
        "text": "Each spine sticks, dealing 1d4 damage each round. DC 12 STR check on turn to remove."
      }
    ]
  },
  {
    "uuid": "c33e11a6-5105-4332-8135-ee3ecb7cd3e2",
    "name": "DUNG BEETLE, GIANT",
    "flavourText": "A trundling, barrel-sized beetle with a T-shaped horn.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 horn +1 (1d4 + knock)",
    "stats": {
      "ac": "13",
      "hp": "10",
      "mv": "near",
      "str": "+1",
      "dex": "-1",
      "con": "+1",
      "int": "-3",
      "wis": "-1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Knock",
        "text": "DC 9 STR or pushed a close distance and fall down."
      }
    ]
  },
  {
    "uuid": "c3633eec-a164-403c-965d-edb653d8498d",
    "name": "RAKSHASA",
    "flavourText": "Demonic illusionists whose true form is of a humanlike great cat with backwards hands.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 claw +6 (1d8)",
    "stats": {
      "ac": "16",
      "hp": "39",
      "mv": "near",
      "str": "+1",
      "dex": "+3",
      "con": "+3",
      "int": "+3",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources. Immune to hostile spells of 3rd tier or lower."
      },
      {
        "name": "Mesmerism",
        "text": "Can read the minds of all creatures within near. Can instantly take on the illusory appearance of any humanoid."
      },
      {
        "name": "Weakness",
        "text": "A crossbow bolt under the effects of the holy weapon spell kills the rakshasa."
      }
    ]
  },
  {
    "uuid": "c3bb2493-f229-4419-a62f-299bc6e8d3f7",
    "name": "MIMIC",
    "flavourText": "Beasts that look like objects.",
    "alignment": "N",
    "level": "5",
    "attacks": "2 bite +5 (1d8 + stick)",
    "stats": {
      "ac": "12",
      "hp": "23",
      "mv": "near",
      "str": "+2",
      "dex": "+0",
      "con": "+1",
      "int": "-2",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Stick",
        "text": "DC 15 STR or adhere to target; auto-hit with bite. DC 15 STR on turn to remove."
      }
    ]
  },
  {
    "uuid": "c64f7ec2-938d-4844-a89a-5535d93ff7d7",
    "name": "LEPRECHAUN",
    "flavourText": "Impish fey who favor green garb and love fooling \"tall folk\" with promises of gold.",
    "alignment": "N",
    "level": "4",
    "attacks": "1 spell +4",
    "stats": {
      "ac": "13",
      "hp": "19",
      "mv": "near",
      "str": "+1",
      "dex": "+3",
      "con": "+1",
      "int": "+2",
      "wis": "+1",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Alert",
        "text": "Cannot be surprised. Slippery. Hostile spells targeting the leprechaun are DC 15 to cast."
      },
      {
        "name": "Fool's Gold (CHA Spell)",
        "text": "DC 12. Close. One small object or small group of similar objects. Turn objects into silver or gold pieces. Lasts 1 day."
      },
      {
        "name": "Illusion (CHA Spell)",
        "text": "DC 11. Create a convincing visual and/ or auditory illusion within near. Lasts until dismissed."
      },
      {
        "name": "Invisibility (CHA Spell)",
        "text": "DC 12. Self. Become invisible for 2d4 rounds."
      }
    ]
  },
  {
    "uuid": "c65edece-6a99-43b0-bf58-e5ca3af41d9b",
    "name": "CENTIPEDE, GIANT",
    "flavourText": "Blood-red, feathery centipedes the size of a human arm. Their bite injects a burning poison that cramps muscles.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 bite +1 (1d4 + poison)",
    "stats": {
      "ac": "11",
      "hp": "4",
      "mv": "near (climb)",
      "str": "-3",
      "dex": "+1",
      "con": "+0",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "c6bd1a22-77b4-4542-99bd-4807a94bdabc",
    "name": "NAGA",
    "flavourText": "Magic-wielding cobras towering ten feet high. Once a dominant species, they are now rare and reclusive, bitter to the last.",
    "alignment": "C",
    "level": "9",
    "attacks": "2 bite +7 (2d6 + poison) and 1 spell +7",
    "stats": {
      "ac": "16",
      "hp": "43",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "+2",
      "wis": "+2",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or paralyzed 1d4 rounds."
      },
      {
        "name": "Agony (CHA Spell)",
        "text": "DC 14. One target in near takes 3d8 damage."
      },
      {
        "name": "Hypnotize (CHA Spell)",
        "text": "DC 13. Focus. One target in near range who can see naga is helplessly stupefied for duration."
      },
      {
        "name": "Whispers (CHA Spell)",
        "text": "DC 12. Hostile spells cast on one target in near are DC 9 for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "c7b03873-32e8-4ad0-9ce6-7f359c94be26",
    "name": "OWLBEAR",
    "flavourText": "Cantankerous bears with owl eyes, beaks, and feathers.",
    "alignment": "N",
    "level": "6",
    "attacks": "2 claw +5 (1d10)",
    "stats": {
      "ac": "13",
      "hp": "30",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "-2",
      "wis": "+2",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Crush",
        "text": "Deals an extra die of damage if it hits the same target with both claws."
      }
    ]
  },
  {
    "uuid": "c80dbed2-d5ca-4e7d-91ce-95fd911b0dae",
    "name": "DROW, PRIESTESS",
    "flavourText": "A statuesque female drow with a crown of metal spider webs and an imperious gaze.",
    "alignment": "C",
    "level": "6",
    "attacks": "3 snake whip (near) +4 (1d8 + poison) or 1 spell +4",
    "stats": {
      "ac": "16 (mithral chainmail)",
      "hp": "28",
      "mv": "near",
      "str": "+2",
      "dex": "+3",
      "con": "+1",
      "int": "+3",
      "wis": "+4",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or paralyzed 1d4 rounds."
      },
      {
        "name": "Sunblind",
        "text": "Blinded in bright light."
      },
      {
        "name": "Snuff (WIS Spell)",
        "text": "DC 12. Extinguish all light sources (even magical) within near."
      },
      {
        "name": "Summon Spiders (WIS Spell)",
        "text": "DC 14. Summon 2d4 loyal giant spiders that appear within near. They stay for 5 rounds."
      },
      {
        "name": "Web (WIS Spell)",
        "text": "DC 13. A near- sized cube of webs within far immobilizes all inside it for 5 rounds. DC 15 STR on turn to break free."
      }
    ]
  },
  {
    "uuid": "c8718b0c-d915-4f29-8216-b354c5178cdc",
    "name": "HARPY",
    "flavourText": "Horrific, winged women with vulture-like lower bodies. They keen a hypnotic song.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 claw +3 (1d6) or 1 song",
    "stats": {
      "ac": "13",
      "hp": "14",
      "mv": "near (fly)",
      "str": "+1",
      "dex": "+3",
      "con": "+1",
      "int": "+0",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Song",
        "text": "Enemies who can hear within double near DC 12 CHA or dazed and drawn to harpy for 1d4 rounds. Immune for 1 day if passed check."
      }
    ]
  },
  {
    "uuid": "c9d3c8f9-fc99-4747-80d1-6ce0ff698efe",
    "name": "LION",
    "flavourText": "Tawny great cats that hunt in open plains. Males have manes.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 rend +4 (1d8)",
    "stats": {
      "ac": "12",
      "hp": "15",
      "mv": "near",
      "str": "+4",
      "dex": "+2",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "cae0cb14-ecf9-449c-8535-a619e251a7f0",
    "name": "VOID SPIDER",
    "flavourText": "Pale, horse-sized arachnids that become ghostly and intangible.",
    "alignment": "C",
    "level": "5",
    "attacks": "2 bite +4 (1d8 + poison)",
    "stats": {
      "ac": "13",
      "hp": "23",
      "mv": "near (climb)",
      "str": "+3",
      "dex": "+3",
      "con": "+1",
      "int": "-1",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to cold. Phase. Once per round, become corporeal or incorporeal."
      },
      {
        "name": "Poison",
        "text": "DC 12 CON or drop to 0 HP in 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "cbefef9c-bd72-49e7-b722-0eb23822c7e8",
    "name": "GARGOYLE",
    "flavourText": "Leering, winged fiends that look like stone statues. They can hold perfectly still for long stretches of time.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 claw +3 (1d6)",
    "stats": {
      "ac": "16",
      "hp": "20",
      "mv": "near (fly)",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "+0",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources."
      }
    ]
  },
  {
    "uuid": "cbf31f0e-07e2-453c-8c38-63c56dfb2e23",
    "name": "MINOTAUR",
    "flavourText": "Ferocious bull-men with hooves and curved horns. They live in mazelike tunnels.",
    "alignment": "C",
    "level": "7",
    "attacks": "2 greataxe +6 (1d10) and 1 horns +6 (1d12)",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "34",
      "mv": "near",
      "str": "+4",
      "dex": "+1",
      "con": "+3",
      "int": "+1",
      "wis": "+2",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Charge",
        "text": "In place of attacks, move up to double near in a straight line and make 1 horn attack. If hit, x2 damage."
      }
    ]
  },
  {
    "uuid": "cc3f5a21-fe86-4156-bfc9-831768752424",
    "name": "HAG, NIGHT",
    "flavourText": "A purple-skinned, stooped woman with stringy, white hair and a mouth full of iron teeth.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 bite +6 (1d10) and 1 blind",
    "stats": {
      "ac": "14",
      "hp": "37",
      "mv": "near",
      "str": "+4",
      "dex": "+2",
      "con": "+1",
      "int": "+2",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Blind",
        "text": "One target within near DC 15 CHA or blinded for 1d4 days."
      },
      {
        "name": "Shapechange",
        "text": "Instantly change to look like any other humanoid."
      }
    ]
  },
  {
    "uuid": "cd153fd0-e54b-4fc3-bf3b-b14e102a6dc2",
    "name": "DRAGON, SWAMP",
    "flavourText": "This black, wingless beast slithers through dank swamps.",
    "alignment": "C",
    "level": "12",
    "attacks": "3 rend +8 (2d10) or 1 smog breath",
    "stats": {
      "ac": "16",
      "hp": "58",
      "mv": "double near (burrow, swim)",
      "str": "+5",
      "dex": "+3",
      "con": "+4",
      "int": "+4",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Smog Breath",
        "text": "Fills a near-sized cube extending from dragon. DC 15 CON or 2d10 damage and blinded for 1 round."
      }
    ]
  },
  {
    "uuid": "cdd990e0-7b78-4d4c-bd8e-3ac94dabf050",
    "name": "DEVIL, CUBI",
    "flavourText": "Entrancing humanoids with bat wings and devilish charm.",
    "alignment": "C",
    "level": "6",
    "attacks": "1 kiss +4 (1d6 + drain) or 1 charm",
    "stats": {
      "ac": "14",
      "hp": "29",
      "mv": "near (fly)",
      "str": "+2",
      "dex": "+4",
      "con": "+2",
      "int": "+3",
      "wis": "+2",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Change Shape",
        "text": "In place of attacks, transform into any similarly-sized humanoid."
      },
      {
        "name": "Charm",
        "text": "One humanoid in near DC 15 CHA or bewitched by cubi for 1d6 hours."
      },
      {
        "name": "Drain",
        "text": "The target takes 1d6 WIS damage. A target reduced to 0 WIS this way swears its soul to an archdevil."
      }
    ]
  },
  {
    "uuid": "cf226866-0063-40a9-b98b-9c29ce3f283e",
    "name": "VIPERIAN, OPHID",
    "flavourText": "A giant anaconda body merges into a humanoid torso with a large snake head. It wears golden torcs and strings of glittering moonstones.",
    "alignment": "C",
    "level": "6",
    "attacks": "3 falchion +5 (1d10) or 2 longbow (far) +3 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "28",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+2",
      "con": "+1",
      "int": "+1",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Can only be harmed by magical sources."
      }
    ]
  },
  {
    "uuid": "d0318be4-6cb4-4f06-9a77-5f1b3108255d",
    "name": "THUG",
    "flavourText": "A bruised and boorish ruffian.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 shortsword +1 (1d6)",
    "stats": {
      "ac": "13 (leather + shield)",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+0",
      "int": "-1",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": []
  },
  {
    "uuid": "d3d60a73-327e-45ca-9160-13b35f44a888",
    "name": "KNIGHT",
    "flavourText": "A warrior in shining plate mail and the surcoat of a knightly order.",
    "alignment": "L",
    "level": "3",
    "attacks": "2 bastard sword +3 (1d8)",
    "stats": {
      "ac": "17 (plate mail + shield)",
      "hp": "14",
      "mv": "near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "+0",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Oath",
        "text": "3/day, ADV on a roll made in service of knight's order."
      }
    ]
  },
  {
    "uuid": "d4a84de3-a756-40a3-b16b-b10446391b25",
    "name": "SKELETON",
    "flavourText": "A bleach-boned skeleton with red pinpoints of light in its eyes.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 shortsword +1 (1d6) or 1 shortbow (far) +0 (1d4)",
    "stats": {
      "ac": "13 (chainmail)",
      "hp": "11",
      "mv": "near",
      "str": "+1",
      "dex": "+0",
      "con": "+2",
      "int": "-2",
      "wis": "+0",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Undead",
        "text": "Immune to morale checks."
      }
    ]
  },
  {
    "uuid": "d51609ba-f27b-477e-9dc1-db3d01d43cae",
    "name": "DROW",
    "flavourText": "A graceful, shadowy elf that pounces like a spider.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 poison dart (near) +3 (1d4 + poison) or 1 longsword +1 (1d8)",
    "stats": {
      "ac": "16 (mithral chainmail)",
      "hp": "9",
      "mv": "near",
      "str": "+0",
      "dex": "+3",
      "con": "+0",
      "int": "+1",
      "wis": "+1",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or sleep. Sunblind. Blinded in bright light."
      }
    ]
  },
  {
    "uuid": "d6249477-5eec-41b9-9305-5dbd2fa18b68",
    "name": "FAIRY",
    "flavourText": "Miniature fey folk with fluttering moth or butterfly wings.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 needle +3 (1 + poison)",
    "stats": {
      "ac": "13",
      "hp": "4",
      "mv": "near (fly)",
      "str": "-2",
      "dex": "+3",
      "con": "+0",
      "int": "+1",
      "wis": "+0",
      "cha": "+1"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 12 CON or fall into deep sleep for 1d4 hours."
      }
    ]
  },
  {
    "uuid": "d6aa8138-05d7-44a5-8367-af9177e55c45",
    "name": "PHOENIX",
    "flavourText": "Huge, soaring eagles made of searing flames. Intelligent and imbued with immortal magic.",
    "alignment": "L",
    "level": "13",
    "attacks": "4 rend +8 (2d12)",
    "stats": {
      "ac": "16",
      "hp": "60",
      "mv": "double near (fly)",
      "str": "+3",
      "dex": "+4",
      "con": "+2",
      "int": "+3",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Immune to fire. Only damaged by magical sources."
      },
      {
        "name": "Explosion",
        "text": "Upon death, creatures within double near of phoenix DC 18 DEX or 10d6 damage."
      },
      {
        "name": "Heat Aura",
        "text": "Creatures within near of phoenix at start of turn DC 15 CON or 2d6 damage."
      },
      {
        "name": "Rebirth",
        "text": "A red-hot egg remains after death. Phoenix hatches from it in 1d4 days."
      }
    ]
  },
  {
    "uuid": "d8546b27-8bf1-4343-9b92-76763ddc68b0",
    "name": "PLESIOSAURUS",
    "flavourText": "Aquatic reptiles as big as elephants. Flat flippers and narrow, toothy maws on long necks.",
    "alignment": "N",
    "level": "6",
    "attacks": "2 bite +5 (2d8)",
    "stats": {
      "ac": "13",
      "hp": "30",
      "mv": "double near (swim)",
      "str": "+4",
      "dex": "+3",
      "con": "+3",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "d9b805da-1d95-4b75-b875-83e2d517deaa",
    "name": "NAGA, BONE",
    "flavourText": "Mindless, skeletal husks of nagas reanimated by sorcery.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 bite +5 (2d6)",
    "stats": {
      "ac": "13",
      "hp": "31",
      "mv": "near (burrow, climb)",
      "str": "+3",
      "dex": "+2",
      "con": "+4",
      "int": "-3",
      "wis": "+0",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Greater Undead",
        "text": "Immune to morale checks. Only damaged by silver or magical sources."
      }
    ]
  },
  {
    "uuid": "dab94401-dbb3-4b13-b712-3159b9b45465",
    "name": "ANKHEG",
    "flavourText": "Horse-sized, rust-brown insects. They burrow vast, underground warrens into the bedrock.",
    "alignment": "N",
    "level": "3",
    "attacks": "1 bite +4 (1d6) or 1 acid spray (near) +4 (2d6)",
    "stats": {
      "ac": "14",
      "hp": "14",
      "mv": "near (burrow)",
      "str": "+2",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "dacbaec7-9b94-417e-9811-db0be8a25bc8",
    "name": "OGRE",
    "flavourText": "A massive, dim-witted brute with tusks and a heavy frame. Often lords over goblins or orcs.",
    "alignment": "C",
    "level": "6",
    "attacks": "2 greatclub +6 (2d6)",
    "stats": {
      "ac": "9",
      "hp": "30",
      "mv": "near",
      "str": "+4",
      "dex": "-1",
      "con": "+3",
      "int": "-2",
      "wis": "-2",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "dbbb6d5c-a7be-4707-82ca-11545e9f5ba3",
    "name": "GIANT, STORM",
    "flavourText": "Regal titans with sea-green skin, flowing white hair, and thundering voices. They breathe water as easily as air.",
    "alignment": "L",
    "level": "12",
    "attacks": "3 greatsword +10 (2d12) or 1 lightning bolt",
    "stats": {
      "ac": "15 (mithral chainmail)",
      "hp": "58",
      "mv": "double near (swim)",
      "str": "+6",
      "dex": "+2",
      "con": "+4",
      "int": "+3",
      "wis": "+4",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Stormblood",
        "text": "Electricity immune."
      },
      {
        "name": "Lightning Bolt",
        "text": "3/day, 5' wide line extending far from giant. All creatures in line DC 15 DEX or 5d10 damage. DISADV on check if in water."
      }
    ]
  },
  {
    "uuid": "ddad2240-8cc1-43eb-add4-fae134a41d81",
    "name": "WIGHT",
    "flavourText": "A pale, armored undead warrior with sinister intelligence.",
    "alignment": "C",
    "level": "3",
    "attacks": "1 bastard sword +3 (1d10) and 1 life drain +3",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "15",
      "mv": "near",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "+1",
      "wis": "+0",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Greater Undead",
        "text": "Immune to morale checks. Only damaged by silver or magical sources."
      },
      {
        "name": "Life Drain",
        "text": "1d4 CON damage. Death if reduced to 0 CON."
      }
    ]
  },
  {
    "uuid": "df624511-0cb4-409f-b09c-5f842ce80331",
    "name": "DRUID",
    "flavourText": "A wizard of the wilds holding a knotted staff and wearing a mossy cloak of deep viridian.",
    "alignment": "N",
    "level": "7",
    "attacks": "1 staff +0 (1d4) or 2 spell +5",
    "stats": {
      "ac": "11",
      "hp": "31",
      "mv": "near",
      "str": "+0",
      "dex": "+1",
      "con": "+0",
      "int": "+4",
      "wis": "+3",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Barkskin (INT Spell)",
        "text": "Self. DC 13. AC becomes 15 for 5 rounds."
      },
      {
        "name": "Conjure Flames (INT Spell)",
        "text": "DC 12. One target in far takes 2d6 damage."
      },
      {
        "name": "Imbue (INT Spell)",
        "text": "Self. DC 13. Staff becomes a +3 magic weapon for 10 rounds."
      },
      {
        "name": "Summon Bear (INT Spell)",
        "text": "DC 14. Summon a loyal brown bear that appears within near. It stays for 5 rounds."
      },
      {
        "name": "Thunderclap (INT Spell)",
        "text": "DC 13. Fills a near-sized cube extending from druid. Creatures within are thrown 2d20 feet in a random direction."
      }
    ]
  },
  {
    "uuid": "df79b135-f420-4ec4-95cb-c214754a2eac",
    "name": "PIRATE",
    "flavourText": "Seafaring scoundrels who live to steal and hoard treasure.",
    "alignment": "C",
    "level": "1",
    "attacks": "1 cutlass +1 (1d6) or 1 dagger (close/ near) +1 (1d4)",
    "stats": {
      "ac": "12 (leather)",
      "hp": "4",
      "mv": "near",
      "str": "+1",
      "dex": "+1",
      "con": "+0",
      "int": "+0",
      "wis": "+0",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "e0869dd5-45e2-4065-b3c6-998689ff95bc",
    "name": "PEGASUS",
    "flavourText": "Winged horses with noble bearings and pearly white coats.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 hooves +3 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "15",
      "mv": "double near (fly)",
      "str": "+3",
      "dex": "+2",
      "con": "+2",
      "int": "-3",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "e0c9b5f5-bdf5-41c4-86b7-65563fdb3b2f",
    "name": "VAMPIRE",
    "flavourText": "Pale, blood-drinking undead of supreme power and wickedness. They loathe sunlight and protect their coffins at all costs.",
    "alignment": "C",
    "level": "11",
    "attacks": "3 bite +7 (1d8 + blood drain) or 1 charm",
    "stats": {
      "ac": "15",
      "hp": "52",
      "mv": "near (climb)",
      "str": "+4",
      "dex": "+3",
      "con": "+3",
      "int": "+1",
      "wis": "+3",
      "cha": "+4"
    },
    "specials": [
      {
        "name": "Supreme Undead",
        "text": "Immune to morale checks. Only damaged by magical sources."
      },
      {
        "name": "Blood Drain",
        "text": "Vampire heals 2d6 HP and target permanently loses 1d4 CON. At 0 CON, target dies and rises as vampire or vampire spawn (vampire chooses)."
      },
      {
        "name": "Charm",
        "text": "One humanoid target who can see vampire within near, DC 15 CHA or under vampire's control for 1d4 days."
      },
      {
        "name": "Shapechange",
        "text": "In place of attacks, turn into a bat, wolf, or back into regular form."
      },
      {
        "name": "Vampire",
        "text": "Must sleep in a coffin daily or loses 2d6 HP each day that can't be healed until resting in coffin. Takes 3d8 damage each round while in direct sunlight. Cannot be killed unless pierced through heart with a wooden stake while at 0 HP."
      }
    ]
  },
  {
    "uuid": "e27432dc-14cd-4e06-8a84-57fce0252a18",
    "name": "GIANT, FROST",
    "flavourText": "Blue-skinned warriors with broad shoulders and braided hair. They sound war horns during their frequent raids to pillage nearby settlements.",
    "alignment": "C",
    "level": "9",
    "attacks": "3 greataxe +8 (2d10)",
    "stats": {
      "ac": "14 (chainmail)",
      "hp": "44",
      "mv": "double near",
      "str": "+5",
      "dex": "+1",
      "con": "+4",
      "int": "+2",
      "wis": "+3",
      "cha": "+2"
    },
    "specials": []
  },
  {
    "uuid": "e3db73ed-67a7-4eb0-848c-89494b9bbd0d",
    "name": "WEREWOLF",
    "flavourText": "A bipedal, wolf-faced humanoid covered in brown fur.",
    "alignment": "C",
    "level": "4",
    "attacks": "2 rend +3 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "20",
      "mv": "double near",
      "str": "+3",
      "dex": "+2",
      "con": "+2",
      "int": "+0",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by silver or magic sources."
      },
      {
        "name": "Lycanthropy",
        "text": "If 12 or more damage from the same werewolf, contract lycanthropy."
      }
    ]
  },
  {
    "uuid": "e445fdc7-9474-4037-96b0-4dadf9dc0743",
    "name": "CROCODILE",
    "flavourText": "Fat, scaly reptiles with stumpy legs and long, thrashing tails.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 bite +3 (1d8)",
    "stats": {
      "ac": "14",
      "hp": "20",
      "mv": "near (swim)",
      "str": "+3",
      "dex": "+1",
      "con": "+2",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "e4b5be8f-e312-4cf9-a037-cacba004f5e4",
    "name": "GIANT, STONE",
    "flavourText": "Lean, sinewy giants with stony skin and deep-set eyes. They are quiet and poised, often sitting motionless for days at a time.",
    "alignment": "N",
    "level": "8",
    "attacks": "2 greatclub +7 (2d8) or 1 boulder (far) +7 (2d10)",
    "stats": {
      "ac": "17",
      "hp": "40",
      "mv": "double near",
      "str": "+4",
      "dex": "+2",
      "con": "+4",
      "int": "+1",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": [
      {
        "name": "Stone Hide",
        "text": "Half damage from stabbing and cutting weapons."
      }
    ]
  },
  {
    "uuid": "e5167a43-e493-423e-8225-df6c4683a25b",
    "name": "MOOSE",
    "flavourText": "A towering, brown-haired grazer with weighty, flat antlers.",
    "alignment": "N",
    "level": "4 ",
    "attacks": "2 antler +3 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "19",
      "mv": "double near",
      "str": "+3",
      "dex": "+0",
      "con": "+1",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": []
  },
  {
    "uuid": "e584c08d-05b1-45b5-9cd9-b674dc28d7ce",
    "name": "CULTIST",
    "flavourText": "A cloaked, wild-eyed zealot chanting the guttural prayers of a dark god.",
    "alignment": "C",
    "level": "2",
    "attacks": "1 longsword +1 (1d8) or 1 spell +2",
    "stats": {
      "ac": "14 (chainmail + shield)",
      "hp": "9",
      "mv": "near",
      "str": "+1",
      "dex": "-1",
      "con": "+0",
      "int": "-1",
      "wis": "+2",
      "cha": "+0"
    },
    "specials": [
      {
        "name": "Fearless",
        "text": "Immune to morale checks."
      },
      {
        "name": "Deathtouch (WIS Spell)",
        "text": "DC 12. 2d4 damage to one creature within close."
      }
    ]
  },
  {
    "uuid": "e66d7f71-18f4-4bdf-bb5a-aff80bb5c828",
    "name": "PIRANHA, SWARM",
    "flavourText": "A school of flat, silvery fish with vicious fangs.",
    "alignment": "N",
    "level": "3",
    "attacks": "2 bite +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "13",
      "mv": "near (swim)",
      "str": "-2",
      "dex": "+2",
      "con": "+0",
      "int": "-3",
      "wis": "+0",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Savage",
        "text": "ADV on attacks against creatures below half their HP."
      }
    ]
  },
  {
    "uuid": "e6cbccee-ceb6-4449-a694-9e286d773e07",
    "name": "DEMON, GLABREZU",
    "flavourText": "Horse-headed, fanged creatures who walk upright and have four arms; two shriveled, and two ending in hulking pincers.",
    "alignment": "C",
    "level": "8",
    "attacks": "2 pincer +7 (2d8 + crush)",
    "stats": {
      "ac": "15",
      "hp": "40",
      "mv": "near",
      "str": "+4",
      "dex": "+1",
      "con": "+4",
      "int": "+3",
      "wis": "+2",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Crush",
        "text": "DC 15 STR or target takes 2d8 damage."
      }
    ]
  },
  {
    "uuid": "e6fe51e5-644a-4622-ae1d-e73f10ea1c60",
    "name": "PURPLE WORM",
    "flavourText": "A massive worm as tall as a castle keep. Has a rotating maw and is covered in purple chitin.",
    "alignment": "N",
    "level": "12",
    "attacks": "2 bite +9 (2d12 + swallow) and 1 sting +9 (1d10 + poison)",
    "stats": {
      "ac": "18",
      "hp": "57",
      "mv": "double near (burrow)",
      "str": "+5",
      "dex": "+1",
      "con": "+3",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Poison",
        "text": "DC 15 CON or go to 0 HP."
      },
      {
        "name": "Swallow",
        "text": "On a natural attack roll of 18-20, target is swallowed. Total darkness inside and 2d10 damage per round. Worm regurgitates all swallowed if dealt at least 20 damage in one round to the inside of its gullet."
      }
    ]
  },
  {
    "uuid": "e83df41a-e6d5-4a5e-8191-6db7498a3e2f",
    "name": "BAT, SWARM",
    "flavourText": "A whirling cloud of screeching, bloodthirsty bats.",
    "alignment": "N",
    "level": "4",
    "attacks": "3 bite +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "18",
      "mv": "near (fly)",
      "str": "-3",
      "dex": "+2",
      "con": "+0",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "e8a3ae94-ddfd-406c-b09e-67b9c11f32b2",
    "name": "APE",
    "flavourText": "Hooting, omnivorous apes that live in trees.",
    "alignment": "N",
    "level": "2",
    "attacks": "1 fist +2 (1d6) or 1 rock (far) +2 (1d4)",
    "stats": {
      "ac": "12",
      "hp": "10",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "+0"
    },
    "specials": []
  },
  {
    "uuid": "ea0228ef-003d-4af9-8940-d4a4ba05c4b2",
    "name": "LICH",
    "flavourText": "A wizard who has completed a necromantic ritual to become a mighty, undead sorcerer. Its withered body is draped in moldering, silk robes, and red marshlights burn in its eyes.",
    "alignment": "C",
    "level": "13",
    "attacks": "2 touch +6 (2d8 + paralysis) and 2 spell +7",
    "stats": {
      "ac": "16",
      "hp": "62",
      "mv": "near",
      "str": "+3",
      "dex": "+1",
      "con": "+4",
      "int": "+4",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Supreme Undead",
        "text": "Immune to morale checks. Only damaged by magical sources."
      },
      {
        "name": "Phylactery",
        "text": "Can't be killed while spirit vessel (an object) is intact."
      },
      {
        "name": "Paralysis",
        "text": "DC 15 CON or paralyzed 1d4 rounds."
      },
      {
        "name": "Flight (INT Spell)",
        "text": "Self. DC 13. Fly double near for 5 rounds."
      },
      {
        "name": "Null (INT Spell)",
        "text": "Self. DC 14. Hostile spells targeting lich are DC 18 to cast. Lasts 1d4 rounds."
      },
      {
        "name": "Shadow Leap (INT Spell)",
        "text": "Self. DC 14. Teleport up to 100 miles."
      },
      {
        "name": "Sigil of Doom (INT Spell)",
        "text": "DC 15. One target of LV 9 or less within near DC 15 CON or go to 0 HP."
      },
      {
        "name": "Wither (INT Spell)",
        "text": "DC 14. 4d8 damage to enemies within a near-sized cube centered on lich."
      }
    ]
  },
  {
    "uuid": "eb7405d7-8c3e-4d28-b36f-f447cd2a10b5",
    "name": "TYRANNOSAURUS",
    "flavourText": "Towering, bipedal lizards with a massive head, jaws, and neck.",
    "alignment": "N",
    "level": "9",
    "attacks": "3 bite +8 (2d12)",
    "stats": {
      "ac": "13",
      "hp": "44",
      "mv": "double near",
      "str": "+5",
      "dex": "+1",
      "con": "+4",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": []
  },
  {
    "uuid": "f2d6e7ad-e474-46ee-8434-ca3508f9cbe2",
    "name": "STRANGLER",
    "flavourText": "A gray-skinned, gaunt creature with four ropy limbs tipped in sucker-lined claws.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 claws +2 (1d6)",
    "stats": {
      "ac": "12",
      "hp": "14",
      "mv": "near (climb)",
      "str": "-2",
      "dex": "+2",
      "con": "+1",
      "int": "-2",
      "wis": "+0",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Stealthy",
        "text": "ADV on DEX checks to sneak and hide."
      },
      {
        "name": "Strangle",
        "text": "Deals x2 damage against surprised creatures."
      }
    ]
  },
  {
    "uuid": "f31fb3ea-91e1-4809-82fe-f3423966521d",
    "name": "MORDANTICUS THE FLAYED",
    "flavourText": "A skinless mummy-lich wearing a crown set with nine bright gems. Once the head of the ancient, wizardly order of Gehemna, Mordanticus now lives in secret within the sanctum of Gehemna's reigning archmage. He has served as an advisor and historian for centuries, but an enduring enchantment prevents him from speaking of two topics: his origins, and The Ten-Eyed Oracle.",
    "alignment": "N",
    "level": "19",
    "attacks": "1 rot touch +8 (1d10 + necrosis) and 3 spell +8",
    "stats": {
      "ac": "17",
      "hp": "89",
      "mv": "near",
      "str": "+4",
      "dex": "+4",
      "con": "+4",
      "int": "+5",
      "wis": "+4",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Legendary Undead",
        "text": "Immune to morale checks. Only damaged by magical sources. Hostile spells targeting Mordanticus are DC 18 to cast."
      },
      {
        "name": "Crown of Gehemna",
        "text": "3/day, cause a spell being cast within far to fail. Necrosis. DC 15 CON or go to 0 HP. Healing spells are DC 15 to cast on target while at 0 HP due to this effect."
      },
      {
        "name": "Phylactery",
        "text": "Cannot be killed while spirit vessel (a diamond) is intact."
      },
      {
        "name": "Absorb (INT Spell)",
        "text": "DC 13. Near, one target. Target loses the ability to cast one random spell until completing a rest, and Mordanticus regains a lost spell of the same tier or less."
      },
      {
        "name": "Banish (INT Spell)",
        "text": "DC 14. All extradimensional creatures within near DC 15 CHA or sent back to their home planes."
      },
      {
        "name": "Bind (INT Spell)",
        "text": "DC 12. One humanoid in far paralyzed 1d4 rounds. Blast (INT Spell). DC 14. One creature in near takes 5d8 damage. Phase (INT Spell). DC 13. Self. Teleport up to one mile."
      },
      {
        "name": "True Name (INT Spell)",
        "text": "DC 15. Near. Learn the True Name of target."
      }
    ]
  },
  {
    "uuid": "f3a51025-64ac-4c63-ad71-51fa4fe5e2e5",
    "name": "DJINNI",
    "flavourText": "Azure-blue, jovial humanoids made of air and roiling wind. Infused with potent magic.",
    "alignment": "N",
    "level": "10",
    "attacks": "3 scimitar +7 (1d12) or 1 whirlwind",
    "stats": {
      "ac": "14",
      "hp": "48",
      "mv": "double near (fly)",
      "str": "+4",
      "dex": "+4",
      "con": "+3",
      "int": "+4",
      "wis": "+3",
      "cha": "+3"
    },
    "specials": [
      {
        "name": "Impervious",
        "text": "Only damaged by magical sources."
      },
      {
        "name": "Whirlwind",
        "text": "Transform into a lashing tornado. All enemies within near DC 18 DEX or thrown 2d100 feet in a random direction."
      },
      {
        "name": "Wish",
        "text": "Cast wish once a week for a mortal, no spellcasting check."
      }
    ]
  },
  {
    "uuid": "f751a766-ecf2-4246-8b39-eb24d3cb9980",
    "name": "WORG",
    "flavourText": "Bat-faced wolves that speak Goblin and often serve as war mounts for goblinkind.",
    "alignment": "C",
    "level": "3",
    "attacks": "1 bite +3 (1d6)",
    "stats": {
      "ac": "11",
      "hp": "14",
      "mv": "double near",
      "str": "+2",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-1"
    },
    "specials": []
  },
  {
    "uuid": "f769b701-5269-4584-9edc-35dc5470c4cc",
    "name": "BADGER",
    "flavourText": "Fierce, clawed burrowers with black-and-white face stripes.",
    "alignment": "N",
    "level": "1",
    "attacks": "2 claw +2 (1d4)",
    "stats": {
      "ac": "11",
      "hp": "5",
      "mv": "near (burrow)",
      "str": "+2",
      "dex": "+0",
      "con": "+1",
      "int": "-3",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Rage",
        "text": "1/day, immune to morale checks, +1d4 damage (3 rounds)."
      }
    ]
  },
  {
    "uuid": "fb616130-f280-4091-818c-57bcf6803311",
    "name": "SCARECROW",
    "flavourText": "Ragged clothes and a painted burlap head stuffed with straw. Possessed by a malicious spirit.",
    "alignment": "C",
    "level": "3",
    "attacks": "2 claws +2 (1d6) or 1 scream",
    "stats": {
      "ac": "12",
      "hp": "15",
      "mv": "near",
      "str": "+2",
      "dex": "+2",
      "con": "+2",
      "int": "+0",
      "wis": "+0",
      "cha": "+2"
    },
    "specials": [
      {
        "name": "Scream",
        "text": "Creatures who hear in double near DC 12 CHA or paralyzed for 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "fb9e9df4-fd4e-4d2c-85e1-ffe94ac7dc77",
    "name": "RAT, GIANT",
    "flavourText": "Cunning rats as large as cats. Mangy fur and wormlike tails.",
    "alignment": "N",
    "level": "1",
    "attacks": "1 bite +1 (1d4 + disease)",
    "stats": {
      "ac": "11",
      "hp": "5",
      "mv": "near",
      "str": "-2",
      "dex": "+1",
      "con": "+1",
      "int": "-2",
      "wis": "+1",
      "cha": "-2"
    },
    "specials": [
      {
        "name": "Disease",
        "text": "DC 12 CON or 1d4 CON damage (can't heal while ill). Repeat check once per day; ends on success. Die at 0 CON."
      }
    ]
  },
  {
    "uuid": "fc084203-4112-4ffb-91c5-340c849bd35b",
    "name": "DRAGON, DESERT",
    "flavourText": "The smell of ozone precedes this desert-dwelling dragon. Its dazzling scales of brass and lapis lazuli shimmer in the baking heat.",
    "alignment": "L",
    "level": "13",
    "attacks": "3 rend +9 (2d10) or 1 lightning breath",
    "stats": {
      "ac": "17",
      "hp": "61",
      "mv": "double near (fly)",
      "str": "+5",
      "dex": "+3",
      "con": "+3",
      "int": "+4",
      "wis": "+5",
      "cha": "+5"
    },
    "specials": [
      {
        "name": "Stormblood",
        "text": "Electricity immune."
      },
      {
        "name": "Lightning Breath",
        "text": "A straight line (5' wide) extending double near from dragon. DC 15 DEX or 4d8 damage (DISADV on check if wearing metal armor)."
      },
      {
        "name": "Mirage",
        "text": "1/day, in place of attacks. Create 3 illusory duplicates that disappear when hit. Determine randomly if an attack hits dragon or illusions."
      }
    ]
  },
  {
    "uuid": "fc8dec3c-3acd-4d93-892b-0f82c36e8234",
    "name": "CAVE CREEPER",
    "flavourText": "Chittering, green centipedes the size of horses. Their grasping tentacles are coated in a paralytic venom.",
    "alignment": "N",
    "level": "4",
    "attacks": "1 bite +3 (1d6) and 1 tentacles +3 (1d8 + toxin)",
    "stats": {
      "ac": "12",
      "hp": "18",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "+2",
      "con": "+0",
      "int": "-3",
      "wis": "+1",
      "cha": "-3"
    },
    "specials": [
      {
        "name": "Toxin",
        "text": "DC 12 CON or paralyzed 1d4 rounds."
      }
    ]
  },
  {
    "uuid": "ffb4580f-9708-4020-9dc2-9e4a873e7e82",
    "name": "OCHRE JELLY",
    "flavourText": "An orange puddle of quivering slime.",
    "alignment": "N",
    "level": "4",
    "attacks": "2 tentacle +3 (1d6)",
    "stats": {
      "ac": "9",
      "hp": "20",
      "mv": "near (climb)",
      "str": "+2",
      "dex": "-1",
      "con": "+2",
      "int": "-4",
      "wis": "-3",
      "cha": "-4"
    },
    "specials": [
      {
        "name": "Split",
        "text": "If cut or chopped, split into two smaller oozes (divide remaining HP between both). Can split up to four times."
      }
    ]
  }
]