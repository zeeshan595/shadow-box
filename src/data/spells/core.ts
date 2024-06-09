import type { WithUUID } from "@/services/db";
import type { Spell } from "./type";

export const spells: WithUUID<Spell>[] = [
  {
    uuid: "00c769a4-06e5-4109-bad3-e5aad10064a8",
    name: "DIVINATION",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Self",
    text: "You throw the divining bones or peer into the blackness between the stars, seeking a portent.\n\nYou can ask the GM one yes or no question. The GM truthfully answers \"yes\" or \"no.\"\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    uuid: "024ea017-8bb0-4202-83f9-d32b5a4e86e2",
    name: "LAY TO REST",
    tier: 3,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Close",
    text: "You instantly send an undead creature you touch to its final afterlife, destroying it utterly.\n\nYou can target an undead creature of LV 9 or less."
  },
  {
    uuid: "12bf7f7b-bc87-43d1-9ab2-4d24808eb40b",
    name: "CONFUSION",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You mesmerize one creature you can see in range. The target can't take actions, and it moves in a random direction on its turn. If the target is LV 9+, it may make a WIS check vs. your last spellcasting check at the start of its turn to end the spell."
  },
  {
    uuid: "1340fc91-e4af-4cbe-beea-e49d3c43c682",
    name: "DOMINION",
    tier: 5,
    class: {
      priest: true
    },
    duration: "10 rounds",
    range: "Near",
    text: "Mighty beings come to your aid.\n\nThe beings must have a combined total of 16 levels or less. Chaotic PCs summon demons/devils, and lawful or neutral PCs summon angels.\n\nThe beings act of free will to aid you on your turn. After 10 rounds, they return to their realms.\n\nYou cannot cast this spell again until you complete penance."
  },
  {
    uuid: "16992883-4585-49d8-9c9b-9749355fa4d8",
    name: "PROTECTION FROM ENERGY",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Close",
    text: "One creature you touch becomes impervious to the wild fury of the elements.\n\nChoose fire, cold, or electricity. For the spell's duration, the target is immune to harm from energy of the chosen type."
  },
  {
    uuid: "16f7972d-a89d-4c55-8d56-09d016d98144",
    name: "MAGIC CIRCLE",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You conjure a circle of runes out to near-sized cube centered on yourself and name a type of creature (for example, demons).\n\nFor the spell’s duration, creatures of the chosen type cannot attack or cast a hostile spell on anyone inside the circle. The chosen creatures also can’t possess, compel, or beguile anyone inside the circle."
  },
  {
    uuid: "179f230a-2c1a-4897-bff3-c9dcc62f18d8",
    name: "SPEAK WITH DEAD",
    tier: 3,
    class: {
      priest: true,
      wizard: true
    },
    duration: "Instant",
    range: "Close",
    text: "A dead body you touch answers your questions in a distant, wheezing voice.\n\nYou can ask the dead body up to three yes or no questions(one at a time).The GM truthfully answers \"yes\" or \"no\" to each.\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    uuid: "1877ebd2-b382-40b6-8792-039e14f892f5",
    name: "CLEANSING WEAPON",
    tier: 2,
    class: {
      priest: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "One weapon you touch is wreathed in purifying flames. It deals an additional 1d4 damage (1d6 vs. undead) for the duration."
  },
  {
    uuid: "1c07e60a-15ca-4a49-b99f-35720b8f88c2",
    name: "FIREBALL",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Far",
    text: "You hurl a small flame that erupts into a fiery blast. All creatures in a near-sized cube around where the flame lands take 4d6 damage."
  },
  {
    uuid: "24f9ac4c-0a49-4277-ae3a-5d75ff06aebf",
    name: "POLYMORPH",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Close",
    text: "You transform a creature you touch into another natural creature you choose of equal or smaller size. Any gear the target carries melds into its new form.\n\nThe target gains the creature's physical stats and features, but it retains its non-physical stats and features.\n\nIf the target goes to 0 hit points, it reverts to its true form at half its prior hit points.\n\nYou can target any willing creature with this spell, or an unwilling creature whose level is less than or equal to half your level rounded down (min. 1)."
  },
  {
    uuid: "261e8f87-874c-484f-9676-0eacfcc6a8ec",
    name: "SCRYING",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Self",
    text: "You look into a crystal ball or reflecting pool, calling up images of a distant place.\n\nFor the spell's duration, you can see and hear a creature or location you choose that is on the same plane.\n\nThis spell is DC 18 to cast if you try to scry on a creature or location that is unfamiliar to you.\n\nEach round, creatures you view may make a Wisdom check vs. your last spellcasting check. On a success, they become aware of your magical observation."
  },
  {
    uuid: "298b1528-744b-46ca-ab04-f628f7c476db",
    name: "ALARM",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "1 day",
    range: "Close",
    text: "You touch one object, such as a door threshold, setting a magical alarm on it. If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head."
  },
  {
    uuid: "309ed43f-ab63-414e-bfa3-8b3f129f650e",
    name: "BURNING HANDS",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Close",
    text: "You spread your fingers with thumbs touching, unleashing a circle of flame that roars out to a close area around where you stand.\n\nCreatures within the area of effect take 1d6 damage, and flammable objects catch fire."
  },
  {
    uuid: "332cab25-8c3c-4a04-88b7-9417a8c7470b",
    name: "TELEPORT",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Close",
    text: "You and any willing creatures you choose within close range teleport to a location you specify on your same plane.\n\nYou can travel to a known teleportation sigil or to a location you've been before. Otherwise, you have a 50% chance of arriving off-target."
  },
  {
    uuid: "3651201d-7224-4a34-8346-1c9640439433",
    name: "SUMMON EXTRAPLANAR",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You reach into the outer planes, summoning forth a creature.\n\nYou summon an elemental or outsider of LV 7 or less.The creature is under your control and acts on your turn.\n\nIf you lose focus on this spell, you lose control of the creature and it becomes hostile toward you and your allies.\n\nYou must pass a spellcasting check on your turn to return the creature to the outer planes."
  },
  {
    uuid: "3663cb6e-0de4-4bb1-bdc1-bf4839948544",
    name: "DISPEL MAGIC",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Near",
    text: "End one spell that affects one target you can see in range."
  },
  {
    uuid: "3d189c60-5996-40e7-8464-3301340bc562",
    name: "MAGIC MISSILE",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Far",
    text: "You have advantage on your check to cast this spell.\n\nA glowing bolt of force streaks from your open hand, dealing 1d4 damage to one target."
  },
  {
    uuid: "41a9fa52-bf41-435d-9950-e04f71a74c85",
    name: "SMITE",
    tier: 2,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Near",
    text: "You call down punishing flames on a creature you can see within range. It takes 1d6 damage."
  },
  {
    uuid: "41b2bfed-5b75-4c63-ba9d-bbb4a2c21f45",
    name: "FLOATING DISK",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Near",
    text: "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can’t cross over drop- offs or pits taller than a human."
  },
  {
    uuid: "41d6c40e-daa1-4e3d-a463-03888f64b0be",
    name: "DETECT MAGIC",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You can sense the presence of magic within near range for the spell's duration. If you focus for two rounds, you discern its general properties. Full barriers block this spell."
  },
  {
    uuid: "422317af-0eb0-4240-acef-f800d9da507d",
    name: "PROTECTION FROM EVIL",
    tier: 1,
    class: {
      priest: true,
      wizard: true
    },
    duration: "Focus",
    range: "Close",
    text: "For the spell’s duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can’t possess, compel, or beguile it.\n\nWhen cast on an already- possessed target, the possessing entity makes a CHA check vs. the last spellcasting check. On a failure, the entity is expelled."
  },
  {
    uuid: "4301e8f5-8872-458d-953a-7d5f6b10433e",
    name: "REGENERATE",
    tier: 4,
    class: {
      priest: true
    },
    duration: "Focus",
    range: "Close",
    text: "A creature you touch regains 1d4 hit points on your turn for the duration. This spell also regrows lost body parts."
  },
  {
    uuid: "49c1c4ca-a914-4502-bb74-c2219ae19925",
    name: "TURN UNDEAD",
    tier: 1,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Near",
    text: "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell.\n\nUndead creatures within near of you must make a CHA check vs.your spellcasting check.If a creature fails by 10+ points and is equal to or less than your level, it is destroyed.Otherwise, on a fail, it flees from you for 5 rounds."
  },
  {
    uuid: "4bcb9f3d-4d14-49d2-887e-95ae6f0cfd6a",
    name: "LEVITATE",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Self",
    text: "You can float a near distance vertically per round on your turn. You can also push against solid objects to move horizontally."
  },
  {
    uuid: "4db53706-0cd2-4e9d-8cbb-59b48e444e55",
    name: "MIRROR IMAGE",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Self",
    text: "You create a number of illusory duplicates of yourself equal to half your level rounded down (minimum 1). The duplicates surround you and mimic you.\n\nEach time a creature attacks you, the attack misses and causes one of the duplicates to evaporate. If all of the illusions have disappeared, the spell ends."
  },
  {
    uuid: "4faec064-45ba-49cc-8dcd-a66251e761f2",
    name: "HOLD PERSON",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You magically paralyze one humanoid creature of LV 4 or less you can see within range."
  },
  {
    uuid: "506a39e4-fa93-4df5-b783-5e4b11537dba",
    name: "MASS CURE",
    tier: 3,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Near",
    text: "All allies within near range of you regain 2d6 hit points."
  },
  {
    uuid: "5272d63d-41e2-41db-b00d-a2c57fa78c1b",
    name: "FLAME STRIKE",
    tier: 4,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Far",
    text: "You call down a holy pillar of fire, immolating one creature you can see within range. The target takes 2d6 damage."
  },
  {
    uuid: "5508aa44-25b8-4412-aaa0-4115760cd358",
    name: "HEAL",
    tier: 5,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Close",
    text: "One creature you touch is healed to full hit points.\n\nYou cannot cast this spell again until you complete a rest."
  },
  {
    uuid: "56dab692-61f8-49e7-9aab-1ce25bf254eb",
    name: "ACID ARROW",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Far",
    text: "You conjure a corrosive bolt that hits one foe, dealing 1d6 damage a round. The bolt remains in the target for as long as you focus."
  },
  {
    uuid: "5a1a085c-4734-4f3d-88c4-97bd1307d44d",
    name: "KNOCK",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Near",
    text: "A door, window, gate, chest, or portal you can see within range instantly opens, defeating all mundane locks and barriers.\n\nThis spell creates a loud knock audible to all within earshot."
  },
  {
    uuid: "5b86adea-caf5-43be-bb10-7ba541a098d9",
    name: "MISTY STEP",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Self",
    text: "In a puff of smoke, you teleport a near distance to an area you can see."
  },
  {
    uuid: "603ba816-fd84-46fa-81c3-be5198a7b597",
    name: "HOLD MONSTER",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You paralyze one creature\n\nyou can see within range.\n\nIf the target is LV 9+, it may make a STR check vs. your last spellcasting check at the start of its turn to end the spell."
  },
  {
    uuid: "63746254-5aec-4226-8d01-0fd92e21f319",
    name: "TELEKINESIS",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Far",
    text: "You lift a creature or object with your mind. Choose a target that weighs 1,000 pounds or less. You can move it a near distance in any direction and hold it in place."
  },
  {
    uuid: "64f7e1d7-42e9-404c-96fc-54a0908433c9",
    name: "BLIND/DEAFEN",
    tier: 2,
    class: {
      priest: true
    },
    duration: "Focus",
    range: "Near",
    text: "You utter a divine censure, blinding or deafening one creature you can see in range.\n\nThe creature has disadvantage on tasks requiring the lost sense."
  },
  {
    uuid: "66f6555a-a2d0-4693-baf6-961d5042d130",
    name: "SHAPECHANGE",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Self",
    text: "You transform yourself and any gear you carry into another natural creature you've seen of level 10 or less. You assume the creature's physical stats and features, but you retain your non-physical stats and features (including INT, WIS, and CHA).\n\nIf you go to 0 HP while under the effects of this spell, you revert to your true form at 1 HP."
  },
  {
    uuid: "6adcf996-e780-441a-aa14-09e69f2bb98b",
    name: "INVISIBILITY",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Close",
    text: "A creature you touch becomes invisible for the spell’s duration.\n\nThe spell ends if the target attacks or casts a spell."
  },
  {
    uuid: "6bac5214-9c6c-4a8d-928f-f21bc4bcc184",
    name: "MAGE ARMOR",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Self",
    text: "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell’s duration."
  },
  {
    uuid: "6c80fdf5-ea1b-4bf4-b4ed-5b258c61fb1f",
    name: "REBUKE UNHOLY",
    tier: 3,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Near",
    text: "You rebuke creatures who oppose your alignment, forcing them to flee. You must present a holy symbol to cast this spell.\n\nIf you are lawful or neutral, this spell affects demons, devils, and outsiders. If you are chaotic, this spell affects angels and natural creatures of the wild.\n\nAffected creatures within near of you must make a CHA check vs. your spellcasting check. If a creature fails by 10+ points and is equal to or less than your level, it is destroyed. Otherwise, on a fail, it flees from you for 5 rounds."
  },
  {
    uuid: "78f131dd-d901-4b10-bac7-c646c7eba491",
    name: "DISINTEGRATE",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Far",
    text: "A green ray shoots from your finger and turns a creature or object into ash.\n\nA target creature of LV 5 or less instantly dies. If it is LV 6+, it takes 3d8 damage instead.\n\nA non-magical object up to the size of a large tree is destroyed."
  },
  {
    uuid: "7d4b3c63-4908-43d5-a818-2d1a0232588e",
    name: "CONTROL WATER",
    tier: 4,
    class: {
      priest: true,
      wizard: true
    },
    duration: "Focus",
    range: "Far",
    text: "You move and shape water.You can cause a section of water up to 100 feet in width and depth to change shape, defy gravity, or flow in a different direction."
  },
  {
    uuid: "809eb78d-0597-4b86-9f50-e98d9d67b211",
    name: "ANTIMAGIC SHELL",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Self",
    text: "An invisible, near-sized cube of null-magic appears centered on you.\n\nWithin the cube, no spells can be cast. Magic items and spells have no effect in the zone, and no magic can enter.\n\nThe cube moves with you. Spells such as dispel magic have no effect on it.\n\nAnother antimagic shell does not affect this one."
  },
  {
    uuid: "834c2fa4-6bd5-40a1-a61a-bb338fcdf654",
    name: "CURE WOUNDS",
    tier: 1,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Close",
    text: "Your touch restores ebbing life.\n\nRoll a number of d6s equal to 1 + half your level (rounded down). One target you touch regains that many hit points."
  },
  {
    uuid: "894028e0-44bf-4a5a-adbf-292010fa5651",
    name: "BLESS",
    tier: 2,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Close",
    text: "One creature you touch gains a luck token."
  },
  {
    uuid: "8a5296cc-9a73-4bdf-90b5-41eb0ccfed15",
    name: "WISH",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Self",
    text: "This mighty spell alters reality.\n\nMake a single wish, stating it as exactly as possible.Your wish occurs, as interpreted by the GM.\n\nTreat a failed spellcasting check for this spell as a critical failure, and roll the mishap with disadvantage."
  },
  {
    uuid: "8c472d43-8b1b-45a1-b476-8396b9028e87",
    name: "WEB",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Far",
    text: "You create a near-sized cube of sticky, dense spider web within the spell’s range. A creature stuck in the web can’t move and must succeed on a Strength check vs. your spellcasting check to free itself."
  },
  {
    uuid: "8dca6bbf-152c-4650-a776-da20dec36184",
    name: "SENDING",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Unlimited",
    text: "You send a brief, mental message to any creature with whom you are familiar who is on the same plane."
  },
  {
    uuid: "96b880bc-4f83-4da4-b3c2-6932efa11951",
    name: "POWER WORD KILL",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Near",
    text: "You utter the Word of Doom. One creature you target of LV 9 or less dies if it hears you.\n\nTreat a failed spellcasting check for this spell as a critical failure, and roll the mishap with disadvantage."
  },
  {
    uuid: "a26b4bbf-42cd-407e-a346-1bf2ff725835",
    name: "ALTER SELF",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Self",
    text: "You magically change your physical form, gaining one feature that modifies your existing anatomy.\n\nFor example, you can grow functional gills on your neck or bear claws on your fingers. This spell can’t grow wings or limbs."
  },
  {
    uuid: "a32b1376-974f-40f6-883b-2d47c378ddbd",
    name: "HOLD PORTAL",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Near",
    text: "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal. The knock spell ends this spell."
  },
  {
    uuid: "a3c58b95-7df0-4686-974b-cfc1e8bd1005",
    name: "COMMUNE",
    tier: 4,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Self",
    text: "You seek your god's counsel. Ask the GM up to three yes or no questions. The GM truthfully answers \"yes\" or \"no\" to each.\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    uuid: "a4899192-9ad5-49ee-9301-ecf46ce3991f",
    name: "SLEEP",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Near",
    text: "You weave a lulling spell that fills a near-sized cube extending from you. Living creatures in the area of effect fall into a deep sleep if they are LV 2 or less.\n\nVigorous shaking or being injured wakes them."
  },
  {
    uuid: "a59b9f49-d1e1-408f-b8a5-59f629f2577a",
    name: "ZONE OF TRUTH",
    tier: 2,
    class: {
      priest: true
    },
    duration: "Focus",
    range: "Near",
    text: "You compel a creature you can see to speak truth. It can’t utter a deliberate lie while within range."
  },
  {
    uuid: "a918f677-70aa-45e5-97b7-6ec831f2fafb",
    name: "WRATH",
    tier: 4,
    class: {
      priest: true
    },
    duration: "10 rounds",
    range: "Self",
    text: "Your weapons become magical +2 and deal an additional d8 damage for the spell's duration."
  },
  {
    uuid: "aa10a89e-5609-46ce-9b26-5587b3d5de2c",
    name: "PASSWALL",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "A tunnel of your height opens in a barrier you touch and lasts for the duration.\n\nThe passage can be up to near distance in length and must be in a straight line."
  },
  {
    uuid: "aae7be0b-9168-4626-9bed-392ce8451fb6",
    name: "FIXED OBJECT",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "An object you touch that weighs no more than 5 pounds becomes fixed in its current location. It can support up to 5,000 pounds of weight for the duration of the spell."
  },
  {
    uuid: "af37f87a-93df-490a-b119-638a9ff18679",
    name: "DETECT THOUGHTS",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You peer into the mind of one creature you can see within range. Each round, you learn the target’s immediate thoughts.\n\nOn its turn, the target makes\n\na Wisdom check vs. your last spellcasting check. If the target succeeds, it notices your presence in its mind and the spell ends."
  },
  {
    uuid: "b138d2f5-1c40-4466-bb98-3ac9f7d1bbfc",
    name: "SILENCE",
    tier: 2,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Far",
    text: "You magically mute sound in a near cube within the spell’s range.Creatures inside the area are deafened, and any sounds they create cannot be heard."
  },
  {
    uuid: "b2f51e2f-7319-4d7d-8fb4-050d8c4dbd45",
    name: "CLOUDKILL",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Far",
    text: "A putrid cloud of yellow poison fills a near-sized cube within range. It spreads around corners.\n\nCreatures inside the cloud are blinded and take 2d6 damage at the beginning of their turns.\n\nA creature of LV 9 or less that ends its turn fully inside the cloud dies."
  },
  {
    uuid: "b3afc68b-f4af-4e9c-9286-0934005b4e41",
    name: "HOLY WEAPON",
    tier: 1,
    class: {
      priest: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "One weapon you touch is imbued with a sacred blessing. The weapon becomes magical and has +1 to attack and damage rolls for the duration."
  },
  {
    uuid: "b788fcb0-71b3-4dbf-b0a9-cd69d5ca4162",
    name: "LIGHT",
    tier: 1,
    class: {
      wizard: true,
      priest: true
    },
    duration: "1 hour real time",
    range: "Close",
    text: "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time."
  },
  {
    uuid: "b8f38d2a-b115-4c3b-aca7-ed93542753ac",
    name: "PILLAR OF SALT",
    tier: 4,
    class: {
      priest: true
    },
    duration: "Focus",
    range: "Near",
    text: "A creature you target turns into a statue made of hardened salt.\n\nYou can target a creature you can see of LV 5 or less.\n\nIf you successfully focus on this spell for 3 rounds in a row, the transformation becomes permanent."
  },
  {
    uuid: "ba64b46d-99a0-4d75-af3c-6aef75b8d56c",
    name: "COMMAND",
    tier: 3,
    class: {
      priest: true
    },
    duration: "Focus",
    range: "Far",
    text: "You issue a verbal command to one creature in range who can understand you. The command must be one word, such as “kneel.” The target obeys the command for as long as you focus.\n\nIf your command is ever directly harmful to the creature, it may make a Charisma check vs. your last spellcasting check. On a success, the spell ends."
  },
  {
    uuid: "bd8a4b72-8119-4a76-9872-bfe0b48920c5",
    name: "CHARM PERSON",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "1d8 days",
    range: "Near",
    text: "You magically beguile one humanoid of level 2 or less within near range, who regards you as a friend for the duration.\n\nThe spell ends if you or your allies do anything to hurt it that it notices.\n\nThe target knows you magically enchanted it after the spell ends."
  },
  {
    uuid: "bd93e920-669d-4782-a449-cd3d89aad40c",
    name: "DIVINE VENGEANCE",
    tier: 5,
    class: {
      priest: true
    },
    duration: "10 rounds",
    range: "Self",
    text: "You become the divine avatar of your god's wrath, wreathed in holy flames or a black aura of smoldering corruption.\n\nFor the spell's duration, you\n\ncan fly a near distance, your weapons are magical, and you have a +4 bonus to your weapon attacks and damage."
  },
  {
    uuid: "c3816a0f-dfbe-464d-a588-6fb40eb56ea9",
    name: "ANIMATE DEAD",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "1 day",
    range: "Close",
    text: "You touch one humanoid’s remains, and it rises as a zombie or skeleton under your control. The remains must have at least three limbs and its head intact.\n\nThe undead creature acts on your turn. After 1 day, the creature collapses into grave dust."
  },
  {
    uuid: "c576a70b-5bcc-4662-a6a1-6ab28fd9e6b6",
    name: "JUDGMENT",
    tier: 5,
    class: {
      priest: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "You instantly banish a creature you touch, sending it and all possessions it carries to face the judgment of your god.\n\nYou can banish an intelligent creature of LV 10 or less.\n\nWhen the creature returns in 5 rounds, it has been healed to full hit points if its deeds pleased your god. It has been reduced to 1 hit point if its deeds angered your god. If your god can't judge its actions, it is unchanged."
  },
  {
    uuid: "c9db8508-8be6-4758-ba98-8b76dfcd2cbc",
    name: "LIGHTNING BOLT",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Far",
    text: "You shoot a blue-white ray of lightning from your hands, hitting all creatures in a straight line out to a far distance.\n\nCreatures struck by the lightning take 3d6 damage."
  },
  {
    uuid: "cbe84d99-7953-4723-9d8f-2a5844f5562d",
    name: "SHIELD OF FAITH",
    tier: 1,
    class: {
      priest: true
    },
    duration: "5 rounds",
    range: "Self",
    text: "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration."
  },
  {
    uuid: "cc14b4bb-8e1a-403c-afbf-95b27496d527",
    name: "DIMENSION DOOR",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Self",
    text: "You teleport yourself and up to one other willing creature within close to any point you can see."
  },
  {
    uuid: "d450bfea-b2b0-42bc-96c8-a9eb59374a68",
    name: "PROPHECY",
    tier: 5,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Self",
    text: "You commune directly with your god for guidance.\n\nAsk the GM one question.\n\nThe GM answers the question truthfully using the knowledge your god possesses. Deities are mighty, but not omniscient.\n\nYou cannot cast this spell again until you complete penance."
  },
  {
    uuid: "d6bd5208-e704-4ac1-9d34-b34658862fd4",
    name: "STONESKIN",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Self",
    text: "Your skin becomes like granite. For the spell's duration, your armor class becomes 17 (20 on a critical spellcasting check)."
  },
  {
    uuid: "d921fd79-73bb-49f2-b5c2-a9b3b3adf202",
    name: "RESTORATION",
    tier: 3,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Close",
    text: "With the touch of your hands, you expunge curses and illnesses. One curse, illness, or affliction of your choice affecting the target creature ends."
  },
  {
    uuid: "dae073c0-9a83-4f56-bc6a-d7f4a9337195",
    name: "AUGURY",
    tier: 2,
    class: {
      priest: true
    },
    duration: "Instant",
    range: "Self",
    text: "You interpret the meaning of supernatural portents and omens.\n\nAsk the GM one question about a specific course of action. The GM says whether the action will lead to “weal” or “woe.”"
  },
  {
    uuid: "df3f3b08-0abc-4ddd-9b4d-4143c618af63",
    name: "WALL OF FORCE",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Near",
    text: "You lift your hands, conjuring a transparent wall of force.\n\nThe thin wall must be contiguous and can cover a near- sized area in width and length.You choose its shape.\n\nNothing on the same plane can physically pass through the wall."
  },
  {
    uuid: "e2cf5bc6-7173-4169-899c-6bae61b3db8e",
    name: "ILLUSION",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Far",
    text: "You create a convincing visible and audible illusion that fills up to a near-sized cube in range.\n\nThe illusion cannot cause harm, but creatures who believe the illusion is real react to it as though it were.\n\nA creature who inspects the illusion from afar must pass\n\na Wisdom check vs. your last spellcasting check to perceive the false nature of the illusion.\n\nTouching the illusion also reveals its false nature."
  },
  {
    uuid: "e5842495-5000-4952-8696-a1325c616910",
    name: "FLY",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Self",
    text: "Your feet lift from the ground, and you take to the air like a hummingbird. You can fly near for the spell's duration and are able to hover in place."
  },
  {
    uuid: "edc2c2e4-114b-49c9-8edc-28f2292c43e8",
    name: "CREATE UNDEAD",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "1 day",
    range: "Close",
    text: "You conjure a vengeful undead creature to do your bidding.\n\nWhen you cast this spell, you choose to summon either a wight or wraith. It appears next to you and is under your control.\n\nThe undead creature acts on your turn. After 1 day, it melts away into smoke."
  },
  {
    uuid: "eec8e5e8-ea0c-4c07-95c7-59694ffe78fc",
    name: "PRISMATIC ORB",
    tier: 5,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Far",
    text: "You send a strobing orb of energy streaking toward a target within range.\n\nChoose an energy type from fire, cold, or electricity. The orb deals 3d8 damage and delivers a concussive blast of the chosen energy type.\n\nIf the energy type is anathema to the target's existence (for example, cold energy against a fire elemental), the orb deals double damage to it instead."
  },
  {
    uuid: "f1a71062-58e3-4dfd-acef-441638f8ffa4",
    name: "FEATHER FALL",
    tier: 1,
    class: {
      wizard: true
    },
    duration: "Instant",
    range: "Self",
    text: "You may make an attempt to cast this spell when you fall.\n\nYour rate of descent slows so that you land safely on your feet."
  },
  {
    uuid: "f518cf82-bbfc-4f37-98da-f774dfd8c148",
    name: "GASEOUS FORM",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Self",
    text: "You and your gear turn into a cloud of smoke for the spell's duration.\n\nYou can fly and pass through any gap that smoke could. You can sense the terrain and any movement around you out to a near distance.\n\nYou can't cast spells while in this form."
  },
  {
    uuid: "f71f3cf0-2c4d-44fd-afce-79603e964d4f",
    name: "PLANE SHIFT",
    tier: 5,
    class: {
      priest: true,
      wizard: true
    },
    duration: "Instant",
    range: "Close",
    text: "You fold space and time, transporting yourself and all willing creatures within close range to a location on another plane of your choice.\n\nUnless you have been to your intended location before, you appear in a random place on the destination plane."
  },
  {
    uuid: "fa3b2163-6703-4141-9878-d3b18996ceb2",
    name: "RESILIENT SPHERE",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "5 rounds",
    range: "Close",
    text: "You conjure a weightless, glassy sphere around you that extends out to close range.\n\nFor the spell's duration, nothing can pass through or crush the sphere.\n\nYou can roll the sphere a near distance on your turn."
  },
  {
    uuid: "fd81867f-8f90-4daf-83f2-af01249a18e6",
    name: "FABRICATE",
    tier: 3,
    class: {
      wizard: true
    },
    duration: "10 rounds",
    range: "Near",
    text: "This spell can't target creatures.\n\nYou turn a tree-sized collection of raw materials into a finished work. For example, you convert a pile of bricks or rocks into\n\na bridge. The finished work converts back to raw materials when the spell ends."
  },
  {
    uuid: "fef43a46-1fd6-4b6e-8bf9-b5cc3be5c9aa",
    name: "ARCANE EYE",
    tier: 4,
    class: {
      wizard: true
    },
    duration: "Focus",
    range: "Near",
    text: "You conjure an invisible, grape- sized eye within range.\n\nYou can see through the eye. It can see in the dark out to near range, fly near on your turn, and squeeze through openings as narrow as a keyhole."
  }
];
