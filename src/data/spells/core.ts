import type { Spell } from "./type";

export const spells: Spell[] = [
  {
    name: "ACID ARROW",
    tier: 2,
    class: ["wizard"],
    duration: "Focus",
    range: "Far",
    text: "You conjure a corrosive bolt that hits one foe, dealing 1d6 damage a round. The bolt remains in the target for as long as you focus.",
  },
  {
    name: "ALARM",
    tier: 1,
    class: ["wizard"],
    duration: "1 day",
    range: "Close",
    text: "You touch one object, such as a door threshold, setting a magical alarm on it. If any creature you do not designate while casting the spell touches or crosses past the object, a magical bell sounds in your head.",
  },
  {
    name: "ALTER SELF",
    tier: 2,
    class: ["wizard"],
    duration: "5 rounds",
    range: "Self",
    text: "You magically change your physical form, gaining one feature that modifies your existing anatomy.\n\nFor example, you can grow functional gills on your neck or bear claws on your fingers. This spell can’t grow wings or limbs.",
  },
  {
    name: "ANIMATE DEAD",
    tier: 3,
    class: ["wizard"],
    duration: "1 day",
    range: "Close",
    text: "You touch one humanoid’s remains, and it rises as a zombie or skeleton under your control. The remains must have at least three limbs and its head intact.\n\nThe undead creature acts on your turn. After 1 day, the creature collapses into grave dust.",
  },
  {
    name: "ANTIMAGIC SHELL",
    tier: 5,
    class: ['wizard'],
    duration: 'Focus',
    range: 'Self',
    text: "An invisible, near-sized cube of null-magic appears centered on you.\n\nWithin the cube, no spells can be cast. Magic items and spells have no effect in the zone, and no magic can enter.\n\nThe cube moves with you. Spells such as dispel magic have no effect on it.\n\nAnother antimagic shell does not affect this one."
  },

  {
    name: "ARCANE EYE",
    tier: 4,
    class: ['wizard'],
    duration: 'Focus',
    range: 'Near',
    text: "You conjure an invisible, grape- sized eye within range.\n\nYou can see through the eye. It can see in the dark out to near range, fly near on your turn, and squeeze through openings as narrow as a keyhole."
  },
  {
    name: "AUGURY",
    tier: 2,
    class: ['priest'],
    duration: 'Instant',
    range: 'Self',
    text: "You interpret the meaning of supernatural portents and omens.\n\nAsk the GM one question about a specific course of action. The GM says whether the action will lead to “weal” or “woe.”"
  },
  {
    name: "BLESS",
    tier: 2,
    class: ['priest'],
    duration: 'Instant',
    range: 'Close',
    text: "One creature you touch gains a luck token."
  },
  {
    name: "BLIND/DEAFEN",
    tier: 2,
    class: ['priest'],
    duration: 'Focus',
    range: 'Near',
    text: "You utter a divine censure, blinding or deafening one creature you can see in range.\n\nThe creature has disadvantage on tasks requiring the lost sense."
  },
  {
    name: "BURNING HANDS",
    tier: 1,
    class: ['wizard'],
    duration: 'Instant', range: 'Close',
    text: "You spread your fingers with thumbs touching, unleashing a circle of flame that roars out to a close area around where you stand.\n\nCreatures within the area of effect take 1d6 damage, and flammable objects catch fire."
  },
  {
    name: "CHARM PERSON",
    tier: 1,
    class: ['wizard'],
    duration: '1d8 days',
    range: 'Near',
    text: "You magically beguile one humanoid of level 2 or less within near range, who regards you as a friend for the duration.\n\nThe spell ends if you or your allies do anything to hurt it that it notices.\n\nThe target knows you magically enchanted it after the spell ends."
  },
  {
    name: "CLEANSING WEAPON",
    tier: 2,
    class: ['priest'],
    duration: '5 rounds',
    range: 'Close',
    text: "One weapon you touch is wreathed in purifying flames. It deals an additional 1d4 damage (1d6 vs. undead) for the duration."
  },

  {
    name: "CLOUDKILL",
    tier: 4,
    class: ['wizard'],
    duration: '5 rounds',
    range: 'Far',
    text: "A putrid cloud of yellow poison fills a near-sized cube within range. It spreads around corners.\n\nCreatures inside the cloud are blinded and take 2d6 damage at the beginning of their turns.\n\nA creature of LV 9 or less that ends its turn fully inside the cloud dies."
  },
  {
    name: "  COMMAND",
    tier: 3,
    class: ['priest'],
    duration: 'Focus',
    range: 'Far',
    text: 'You issue a verbal command to one creature in range who can understand you. The command must be one word, such as “kneel.” The target obeys the command for as long as you focus.\n\nIf your command is ever directly harmful to the creature, it may make a Charisma check vs. your last spellcasting check. On a success, the spell ends.'
  },
  {
    name: "COMMUNE",
    tier: 4,
    class: ['priest'],
    duration: 'Instant',
    range: 'Self',
    text: "You seek your god's counsel. Ask the GM up to three yes or no questions. The GM truthfully answers \"yes\" or \"no\" to each.\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    name: "CONFUSION",
    tier: 4,
    class: ['wizard'],
    duration: 'Focus',
    range: 'Near',
    text: "You mesmerize one creature you can see in range. The target can't take actions, and it moves in a random direction on its turn. If the target is LV 9+, it may make a WIS check vs. your last spellcasting check at the start of its turn to end the spell."
  },
  {
    name: "CONTROL WATER",
    tier: 4,
    class: ['priest', 'wizard'],
    duration: 'Focus',
    range: 'Far',
    text: "You move and shape water.You can cause a section of water up to 100 feet in width and depth to change shape, defy gravity, or flow in a different direction."
  },
  {
    name: "CREATE UNDEAD",
    tier: 5,
    class: ['wizard'],
    duration: '1 day',
    range: 'Close',
    text: "You conjure a vengeful undead creature to do your bidding.\n\nWhen you cast this spell, you choose to summon either a wight or wraith. It appears next to you and is under your control.\n\nThe undead creature acts on your turn. After 1 day, it melts away into smoke."
  },

  {
    name: "CURE WOUNDS",
    tier: 1,
    class: ['priest'],
    duration: 'Instant',
    range: 'Close',
    text: "Your touch restores ebbing life.\n\nRoll a number of d6s equal to 1 + half your level (rounded down). One target you touch regains that many hit points."
  },
  {
    name: "DETECT MAGIC",
    tier: 1,
    class: ['wizard'],
    duration: 'Focus',
    range: 'Near',
    text: "You can sense the presence of magic within near range for the spell's duration. If you focus for two rounds, you discern its general properties. Full barriers block this spell."
  },
  {
    name: "DETECT THOUGHTS",
    tier: 2,
    class: ['wizard'],
    duration: 'Focus',
    range: 'Near',
    text: "You peer into the mind of one creature you can see within range. Each round, you learn the target’s immediate thoughts.\n\nOn its turn, the target makes\n\na Wisdom check vs. your last spellcasting check. If the target succeeds, it notices your presence in its mind and the spell ends."
  },
  {
    name: "DIMENSION DOOR",
    tier: 4,
    class: ['wizard'],
    duration: 'Instant',
    range: 'Self',
    text: "You teleport yourself and up to one other willing creature within close to any point you can see."
  },
  {
    name: "DISINTEGRATE",
    tier: 5,
    class: ['wizard'],
    duration: 'Instant',
    range: 'Far',
    text: "A green ray shoots from your finger and turns a creature or object into ash.\n\nA target creature of LV 5 or less instantly dies. If it is LV 6+, it takes 3d8 damage instead.\n\nA non-magical object up to the size of a large tree is destroyed."
  },
  {
    name: "DISPEL MAGIC",
    tier: 3,
    class: ['wizard'],
    duration: 'Instant',
    range: 'Near',
    text: "End one spell that affects one target you can see in range."
  },
  {
    name: "DIVINATION",
    tier: 4,
    class: ['wizard'],
    duration: 'Instant',
    range: 'Self',
    text: "You throw the divining bones or peer into the blackness between the stars, seeking a portent.\n\nYou can ask the GM one yes or no question. The GM truthfully answers \"yes\" or \"no.\"\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    name: "DIVINE VENGEANCE",
    tier: 5,
    class: ['priest'],
    duration: '10 rounds',
    range: 'Self',
    text: "You become the divine avatar of your god's wrath, wreathed in holy flames or a black aura of smoldering corruption.\n\nFor the spell's duration, you\n\ncan fly a near distance, your weapons are magical, and you have a +4 bonus to your weapon attacks and damage."
  },
  {
    name: "DOMINION",
    tier: 5,
    class: ['priest'],
    duration: "10 rounds",
    range: 'Near',
    text: "Mighty beings come to your aid.\n\nThe beings must have a combined total of 16 levels or less. Chaotic PCs summon demons/devils, and lawful or neutral PCs summon angels.\n\nThe beings act of free will to aid you on your turn. After 10 rounds, they return to their realms.\n\nYou cannot cast this spell again until you complete penance."
  },
  {
    name: "FABRICATE",
    tier: 3,
    class: ['wizard'],
    duration: "10 rounds",
    range: 'Near',
    text: "This spell can't target creatures.\n\nYou turn a tree-sized collection of raw materials into a finished work. For example, you convert a pile of bricks or rocks into\n\na bridge. The finished work converts back to raw materials when the spell ends."
  },
  {
    name: "FEATHER FALL",
    tier: 1,
    class: ['wizard'],
    duration: "Instant",
    range: 'Self',
    text: "You may make an attempt to cast this spell when you fall.\n\nYour rate of descent slows so that you land safely on your feet."
  },
  {
    name: "FIREBALL",
    tier: 3,
    class: ['wizard'],
    duration: "Instant",
    range: 'Far',
    text: "You hurl a small flame that erupts into a fiery blast. All creatures in a near-sized cube around where the flame lands take 4d6 damage."
  },
  {
    name: "FIXED OBJECT",
    tier: 2,
    class: ['wizard'],
    duration: "5 rounds",
    range: 'Close',
    text: "An object you touch that weighs no more than 5 pounds becomes fixed in its current location. It can support up to 5,000 pounds of weight for the duration of the spell."
  },
  {
    name: "FLAME STRIKE",
    tier: 4,
    class: ['priest'],
    duration: 'Instant',
    range: 'Far',
    text: "You call down a holy pillar of fire, immolating one creature you can see within range. The target takes 2d6 damage."
  },
  {
    name: "FLOATING DISK",
    tier: 1,
    class: ['wizard'],
    duration: '10 rounds',
    range: 'Near',
    text: "You create a floating, circular disk of force with a concave center. It can carry up to 20 gear slots. It hovers at waist level and automatically stays within near of you. It can’t cross over drop- offs or pits taller than a human."
  },
  {
    name: "GASEOUS FORM",
    tier: 3,
    class: ['wizard'],
    duration: "10 rounds",
    range: 'Self',
    text: "You and your gear turn into a cloud of smoke for the spell's duration.\n\nYou can fly and pass through any gap that smoke could. You can sense the terrain and any movement around you out to a near distance.\n\nYou can't cast spells while in this form."
  },
  {
    name: "FLY",
    tier: 3,
    class: ['wizard'],
    duration: '5 rounds',
    range: 'Self',
    text: "Your feet lift from the ground, and you take to the air like a hummingbird. You can fly near for the spell's duration and are able to hover in place."
  },
  {
    name: "HEAL",
    tier: 5,
    class: ['priest'],
    duration: 'Instant',
    range: 'Close',
    text: "One creature you touch is healed to full hit points.\n\nYou cannot cast this spell again until you complete a rest."
  },
  {
    name: "HOLD MONSTER",
    tier: 5,
    class: ['wizard'],
    duration: "Focus",
    range: 'Near',
    text: "You paralyze one creature\n\nyou can see within range.\n\nIf the target is LV 9+, it may make a STR check vs. your last spellcasting check at the start of its turn to end the spell."
  },
  {
    name: "HOLD PERSON",
    tier: 2,
    class: ['wizard'],
    duration: "Focus",
    range: 'Near',
    text: "You magically paralyze one humanoid creature of LV 4 or less you can see within range."
  },
  {
    name: "HOLD PORTAL",
    tier: 1,
    class: ['wizard'],
    duration: "10 rounds",
    range: 'Near',
    text: "You magically hold a portal closed for the duration. A creature must make a successful STR check vs. your spellcasting check to open the portal. The knock spell ends this spell."
  },
  {
    name: "HOLY WEAPON",
    tier: 1,
    class: ['priest'],
    duration: "5 rounds",
    range: 'Close',
    text: "One weapon you touch is imbued with a sacred blessing. The weapon becomes magical and has +1 to attack and damage rolls for the duration."
  },
  {
    name: "ILLUSION",
    tier: 3,
    class: ['wizard'],
    duration: "Focus",
    range: 'Far',
    text: "You create a convincing visible and audible illusion that fills up to a near-sized cube in range.\n\nThe illusion cannot cause harm, but creatures who believe the illusion is real react to it as though it were.\n\nA creature who inspects the illusion from afar must pass\n\na Wisdom check vs. your last spellcasting check to perceive the false nature of the illusion.\n\nTouching the illusion also reveals its false nature."
  },
  {
    name: "INVISIBILITY",
    tier: 2,
    class: ['wizard'],
    duration: "10 rounds",
    range: "Close",
    text: "A creature you touch becomes invisible for the spell’s duration.\n\nThe spell ends if the target attacks or casts a spell."
  },
  {
    name: "JUDGMENT",
    tier: 5,
    class: ['priest'],
    duration: "5 rounds",
    range: "Close",
    text: "You instantly banish a creature you touch, sending it and all possessions it carries to face the judgment of your god.\n\nYou can banish an intelligent creature of LV 10 or less.\n\nWhen the creature returns in 5 rounds, it has been healed to full hit points if its deeds pleased your god. It has been reduced to 1 hit point if its deeds angered your god. If your god can't judge its actions, it is unchanged."
  },
  {
    name: "KNOCK",
    tier: 2,
    class: ['wizard'],
    duration: "Instant",
    range: "Near",
    text: "A door, window, gate, chest, or portal you can see within range instantly opens, defeating all mundane locks and barriers.\n\nThis spell creates a loud knock audible to all within earshot."
  },
  {
    name: "LAY TO REST",
    tier: 3,
    class: ['priest'],
    duration: "Instant",
    range: "Close",
    text: "You instantly send an undead creature you touch to its final afterlife, destroying it utterly.\n\nYou can target an undead creature of LV 9 or less."
  },
  {
    name: "LEVITATE",
    tier: 2,
    class: ['wizard'],
    duration: "Focus",
    range: "Self",
    text: "You can float a near distance vertically per round on your turn. You can also push against solid objects to move horizontally."
  },
  {
    name: "LIGHT",
    tier: 1,
    class: ['priest, wizard'],
    duration: "1 hour real time",
    range: "Close",
    text: "One object you touch glows with bright, heatless light, illuminating out to a near distance for 1 hour of real time."
  },
  {
    name: "LIGHTNING BOLT",
    tier: 3,
    class: ['wizard'],
    duration: "Instant",
    range: "Far",
    text: "You shoot a blue-white ray of lightning from your hands, hitting all creatures in a straight line out to a far distance.\n\nCreatures struck by the lightning take 3d6 damage."
  },
  {
    name: "MAGE ARMOR",
    tier: 1,
    class: ['wizard'],
    duration: "10 rounds",
    range: "Self",
    text: "An invisible layer of magical force protects your vitals. Your armor class becomes 14 (18 on a critical spellcasting check) for the spell’s duration."
  },
  {
    name: "MAGIC CIRCLE",
    tier: 3,
    class: ['wizard'],
    duration: "Focus",
    range: "Near",
    text: "You conjure a circle of runes out to near-sized cube centered on yourself and name a type of creature (for example, demons).\n\nFor the spell’s duration, creatures of the chosen type cannot attack or cast a hostile spell on anyone inside the circle. The chosen creatures also can’t possess, compel, or beguile anyone inside the circle."
  },
  {
    name: "MAGIC MISSILE",
    tier: 1,
    class: ['wizard'],
    duration: "Instant",
    range: "Far",
    text: "You have advantage on your check to cast this spell.\n\nA glowing bolt of force streaks from your open hand, dealing 1d4 damage to one target."
  },
  {
    name: "MASS CURE",
    tier: 3,
    class: ['priest'],
    duration: "Instant",
    range: "Near",
    text: "All allies within near range of you regain 2d6 hit points."
  },
  {
    name: "MIRROR IMAGE",
    tier: 2,
    class: ['wizard'],
    duration: "5 rounds",
    range: "Self",
    text: "You create a number of illusory duplicates of yourself equal to half your level rounded down (minimum 1). The duplicates surround you and mimic you.\n\nEach time a creature attacks you, the attack misses and causes one of the duplicates to evaporate. If all of the illusions have disappeared, the spell ends."
  },
  {
    name: "MISTY STEP",
    tier: 2,
    class: ['wizard'],
    duration: "Instant",
    range: "Self",
    text: "In a puff of smoke, you teleport a near distance to an area you can see."
  },
  {
    name: "PASSWALL",
    tier: 4,
    class: ['wizard'],
    duration: "5 rounds",
    range: "Close",
    text: "A tunnel of your height opens in a barrier you touch and lasts for the duration.\n\nThe passage can be up to near distance in length and must be in a straight line."
  },
  {
    name: "PILLAR OF SALT",
    tier: 4,
    class: ['priest'],
    duration: "Focus",
    range: "Near",
    text: "A creature you target turns into a statue made of hardened salt.\n\nYou can target a creature you can see of LV 5 or less.\n\nIf you successfully focus on this spell for 3 rounds in a row, the transformation becomes permanent."
  },
  {
    name: "PLANE SHIFT",
    tier: 5,
    class: ['priest, wizard'],
    duration: "Instant",
    range: "Close",
    text: "You fold space and time, transporting yourself and all willing creatures within close range to a location on another plane of your choice.\n\nUnless you have been to your intended location before, you appear in a random place on the destination plane."
  },
  {
    name: "POLYMORPH",
    tier: 4,
    class: ['wizard'],
    duration: "10 rounds",
    range: "Close",
    text: "You transform a creature you touch into another natural creature you choose of equal or smaller size. Any gear the target carries melds into its new form.\n\nThe target gains the creature's physical stats and features, but it retains its non-physical stats and features.\n\nIf the target goes to 0 hit points, it reverts to its true form at half its prior hit points.\n\nYou can target any willing creature with this spell, or an unwilling creature whose level is less than or equal to half your level rounded down (min. 1)."
  },
  {
    name: "POWER WORD KILL",
    tier: 5,
    class: ['wizard'],
    duration: "Instant",
    range: "Near",
    text: "You utter the Word of Doom. One creature you target of LV 9 or less dies if it hears you.\n\nTreat a failed spellcasting check for this spell as a critical failure, and roll the mishap with disadvantage."
  },
  {
    name: "PRISMATIC ORB",
    tier: 5,
    class: ['wizard'],
    duration: "Instant",
    range: "Far",
    text: "You send a strobing orb of energy streaking toward a target within range.\n\nChoose an energy type from fire, cold, or electricity. The orb deals 3d8 damage and delivers a concussive blast of the chosen energy type.\n\nIf the energy type is anathema to the target's existence (for example, cold energy against a fire elemental), the orb deals double damage to it instead."
  },
  {
    name: "PROPHECY",
    tier: 5,
    class: ['priest'],
    duration: "Instant",
    range: "Self",
    text: "You commune directly with your god for guidance.\n\nAsk the GM one question.\n\nThe GM answers the question truthfully using the knowledge your god possesses. Deities are mighty, but not omniscient.\n\nYou cannot cast this spell again until you complete penance."
  },
  {
    name: "PROTECTION FROM ENERGY",
    tier: 3,
    class: ['wizard'],
    duration: "Focus",
    range: "Close",
    text: "One creature you touch becomes impervious to the wild fury of the elements.\n\nChoose fire, cold, or electricity. For the spell's duration, the target is immune to harm from energy of the chosen type."
  },
  {
    name: "PROTECTION FROM EVIL",
    tier: 1,
    class: ['priest, wizard'],
    duration: "Focus",
    range: "Close",
    text: "For the spell’s duration, chaotic beings have disadvantage on attack rolls and hostile spellcasting checks against the target. These beings also can’t possess, compel, or beguile it.\n\nWhen cast on an already- possessed target, the possessing entity makes a CHA check vs. the last spellcasting check. On a failure, the entity is expelled."
  },
  {
    name: "REBUKE UNHOLY",
    tier: 3,
    class: ['priest'],
    duration: "Instant",
    range: "Near",
    text: "You rebuke creatures who oppose your alignment, forcing them to flee. You must present a holy symbol to cast this spell.\n\nIf you are lawful or neutral, this spell affects demons, devils, and outsiders. If you are chaotic, this spell affects angels and natural creatures of the wild.\n\nAffected creatures within near of you must make a CHA check vs. your spellcasting check. If a creature fails by 10+ points and is equal to or less than your level, it is destroyed. Otherwise, on a fail, it flees from you for 5 rounds."
  },
  {
    name: "REGENERATE",
    tier: 4,
    class: ['priest'],
    duration: "Focus",
    range: "Close",
    text: "A creature you touch regains 1d4 hit points on your turn for the duration. This spell also regrows lost body parts."
  },
  {
    name: "RESILIENT SPHERE",
    tier: 4,
    class: ['wizard'],
    duration: "5 rounds",
    range: "Close",
    text: "You conjure a weightless, glassy sphere around you that extends out to close range.\n\nFor the spell's duration, nothing can pass through or crush the sphere.\n\nYou can roll the sphere a near distance on your turn."
  },
  {
    name: "RESTORATION",
    tier: 3,
    class: ['priest'],
    duration: "Instant",
    range: "Close",
    text: "With the touch of your hands, you expunge curses and illnesses. One curse, illness, or affliction of your choice affecting the target creature ends."
  },
  {
    name: "SCRYING",
    tier: 5,
    class: ['wizard'],
    duration: "Focus",
    range: "Self",
    text: "You look into a crystal ball or reflecting pool, calling up images of a distant place.\n\nFor the spell's duration, you can see and hear a creature or location you choose that is on the same plane.\n\nThis spell is DC 18 to cast if you try to scry on a creature or location that is unfamiliar to you.\n\nEach round, creatures you view may make a Wisdom check vs. your last spellcasting check. On a success, they become aware of your magical observation."
  },
  {
    name: "SENDING",
    tier: 3,
    class: ['wizard'],
    duration: "Instant",
    range: "Unlimited",
    text: "You send a brief, mental message to any creature with whom you are familiar who is on the same plane."
  },
  {
    name: "SHAPECHANGE",
    tier: 5,
    class: ['wizard'],
    duration: "Focus",
    range: "Self",
    text: "You transform yourself and any gear you carry into another natural creature you've seen of level 10 or less. You assume the creature's physical stats and features, but you retain your non-physical stats and features (including INT, WIS, and CHA).\n\nIf you go to 0 HP while under the effects of this spell, you revert to your true form at 1 HP."
  },
  {
    name: "SHIELD OF FAITH",
    tier: 1,
    class: ['priest'],
    duration: "5 rounds",
    range: "Self",
    text: "A protective force wrought of your holy conviction surrounds you. You gain a +2 bonus to your armor class for the duration."
  },
  {
    name: "SILENCE",
    tier: 2,
    class: ['wizard'],
    duration: "Focus",
    range: "Far",
    text: "You magically mute sound in a near cube within the spell’s range.Creatures inside the area are deafened, and any sounds they create cannot be heard."
  },
  {
    name: "SLEEP",
    tier: 1,
    class: ['wizard'],
    duration: "Instant",
    range: "Near",
    text: "You weave a lulling spell that fills a near-sized cube extending from you. Living creatures in the area of effect fall into a deep sleep if they are LV 2 or less.\n\nVigorous shaking or being injured wakes them."
  },
  {
    name: "SMITE",
    tier: 2,
    class: ['priest'],
    duration: "Instant",
    range: "Near",
    text: "You call down punishing flames on a creature you can see within range. It takes 1d6 damage."
  },
  {
    name: "SPEAK WITH DEAD",
    tier: 3,
    class: ['priest, wizard'],
    duration: "Instant",
    range: "Close",
    text: "A dead body you touch answers your questions in a distant, wheezing voice.\n\nYou can ask the dead body up to three yes or no questions(one at a time).The GM truthfully answers \"yes\" or \"no\" to each.\n\nIf you cast this spell more than once in 24 hours, treat a failed spellcasting check for it as a critical failure instead."
  },
  {
    name: "STONESKIN",
    tier: 4,
    class: ['wizard'],
    duration: "10 rounds",
    range: "Self",
    text: "Your skin becomes like granite. For the spell's duration, your armor class becomes 17 (20 on a critical spellcasting check)."
  },
  {
    name: "SUMMON EXTRAPLANAR",
    tier: 5,
    class: ['wizard'],
    duration: "Focus",
    range: "Near",
    text: "You reach into the outer planes, summoning forth a creature.\n\nYou summon an elemental or outsider of LV 7 or less.The creature is under your control and acts on your turn.\n\nIf you lose focus on this spell, you lose control of the creature and it becomes hostile toward you and your allies.\n\nYou must pass a spellcasting check on your turn to return the creature to the outer planes."
  },
  {
    name: "TELEKINESIS",
    tier: 4,
    class: ['wizard'],
    duration: "Focus",
    range: "Far",
    text: "You lift a creature or object with your mind. Choose a target that weighs 1,000 pounds or less. You can move it a near distance in any direction and hold it in place."
  },
  {
    name: "TELEPORT",
    tier: 5,
    class: ['wizard'],
    duration: "Instant",
    range: "Close",
    text: "You and any willing creatures you choose within close range teleport to a location you specify on your same plane.\n\nYou can travel to a known teleportation sigil or to a location you've been before. Otherwise, you have a 50% chance of arriving off-target."
  },
  {
    name: "TURN UNDEAD",
    tier: 1,
    class: ['priest'],
    duration: "Instant",
    range: "Near",
    text: "You rebuke undead creatures, forcing them to flee. You must present a holy symbol to cast this spell.\n\nUndead creatures within near of you must make a CHA check vs.your spellcasting check.If a creature fails by 10+ points and is equal to or less than your level, it is destroyed.Otherwise, on a fail, it flees from you for 5 rounds."
  },
  {
    name: "WALL OF FORCE",
    tier: 4,
    class: ['wizard'],
    duration: "5 rounds",
    range: "Near",
    text: "You lift your hands, conjuring a transparent wall of force.\n\nThe thin wall must be contiguous and can cover a near- sized area in width and length.You choose its shape.\n\nNothing on the same plane can physically pass through the wall."
  },
  {
    name: "WEB",
    tier: 2,
    class: ['wizard'],
    duration: "5 rounds",
    range: "Far",
    text: "You create a near-sized cube of sticky, dense spider web within the spell’s range. A creature stuck in the web can’t move and must succeed on a Strength check vs. your spellcasting check to free itself."
  },
  {
    name: "WISH",
    tier: 5,
    class: ['wizard'],
    duration: "Instant",
    range: "Self",
    text: "This mighty spell alters reality.\n\nMake a single wish, stating it as exactly as possible.Your wish occurs, as interpreted by the GM.\n\nTreat a failed spellcasting check for this spell as a critical failure, and roll the mishap with disadvantage."
  },
  {
    name: "WRATH",
    tier: 4,
    class: ['priest'],
    duration: "10 rounds",
    range: "Self",
    text: "Your weapons become magical +2 and deal an additional d8 damage for the spell's duration."
  },
  {
    name: "ZONE OF TRUTH",
    tier: 2,
    class: ['priest'],
    duration: "Focus",
    range: "Near",
    text: "You compel a creature you can see to speak truth. It can’t utter a deliberate lie while within range."
  }
];
