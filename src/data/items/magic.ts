import type { WithUUID } from "@/services/db";
import type { Item } from "./type";

export const core: WithUUID<Item>[] = [
  {
    uuid: "005a7b96-d672-4b81-8313-c97069256e7d",
    name: "RING OF FEATHER FALLING",
    flavourText: "A pearly ring carved in the likeness of an owl feather.",
    benefit: "Once per day, the ring can cast feather fall (pg. 60) on you when you fall.",
    personality: "Neutral. Fearful of heights. Mentally hoots in an owl-like voice to stay away from the edge of cliffs and pits."
  },
  {
    uuid: "01d4863c-2b98-4846-993c-91da5003ec9e",
    name: "MAGIC INK",
    flavourText: "A pot of glossy, black ink that disappears as it dries.",
    benefit: "The ink's writing is invisible when cool and can only be seen when warmed up by a nearby source of strong heat. There's enough for 1d4 uses."
  }, {
    uuid: "0272d882-1d32-49d3-b1df-793ad32c5df8",
    name: "POTION OF POLYMORPH",
    flavourText: "A pickled newt floats in this lavender flask of clear liquid.",
    benefit: "When you drink this potion, it casts the polymorph spell (pg. 67) on you with a duration of 1 hour instead of 10 rounds."
  }, {
    uuid: "084581cb-8609-46c2-9eac-de30a8135f5f",
    name: "STAFF OF THE COBRA",
    flavourText: "A curved scepter tipped with a ruby-eyed, flaring cobra head.",
    bonus: "+1 staff.",
    benefit: "All snakes regard you with a friendly attitude unless you do something to upset them.\n\nOnce per day, you can throw the staff to the ground. It becomes a giant snake for 5 rounds that obeys your mental commands. If the giant snake goes to 0 HP, it reverts into a staff.",
    "curse": "You have disadvantage on attacks and casting hostile spells targeting snakes."
  },
  {
    uuid: "08af0202-ee71-4fd6-ad1d-cafc180252c9",
    name: "GAUNTLETS OF MIGHT",
    flavourText: "Heavy, bronze gauntlets with engravings of Herculean giants.",
    benefit: "Your Strength stat becomes 18 (+4) while wearing these gauntlets."
  }, {
    uuid: "08b4e22f-6631-49eb-b97f-47d29ca0e9db",
    name: "SCIMITAR OF THE ASH MOON",
    flavourText: "This wide, curved blade has a snarling efreeti head on the bronze pommel.",
    bonus: "+3 greatsword.",
    benefit: "If you roll a critical hit with this weapon, the target is beheaded. It dies instantly if decapitation would kill it."
  },
  {
    uuid: "0a9744f9-01f2-4ef2-9e11-ef39c8940679",
    name: "CIRCLET OF WISDOM",
    flavourText: "A thin, silver circlet set with a shimmering, blue pearl.",
    benefit: "Your Wisdom stat becomes 18 (+4) while wearing this circlet."
  }, {
    uuid: "0bd4455b-5b25-486e-bf06-d01751554d22",
    name: "FLYING CARPET",
    flavourText: "A richly woven, red carpet with gold tassels.",
    benefit: "The carpet fits two riders (one is the driver). It can fly double near on the driver's turn.",
    personality: "Neutral. Playful, mischievous. Enjoys visiting new places and gets restless without a frequent change in location."
  },
  {
    uuid: "12db9a2a-74c6-40a4-baf0-58d3c21ebfa4",
    name: "MIRROR OF MISCHIEF",
    flavourText: "A full-length mirror polished to a gleaming shine. Grinning, silver demons grasp the mirror, their claws forming its frame.",
    curse: "The first time a humanoid creature looks into this mirror, the mirror creates an evil and malicious duplicate of them.\n\nThe duplicate can step from the mirror and is an exact copy of the subject (except for magical gear, which looks identical but is mundane in nature).\n\nThe evil duplicate can live indefinitely outside the mirror. It attempts to sow chaos in the life of the creature it duplicated."
  }, {
    uuid: "13176175-d197-4344-bc7f-e261fac96738",
    name: "MEMNON'S DISCORDANT BLADE",
    flavourText: "This barbed greatsword's red blade trails a shower of sparks when swung to strike.",
    bonus: "+1 greatsword. Can only be wielded by a chaotic being. If you also wield Memnon's Entropic Armor and Memnon's Blazing Javelin, it becomes a +3 greatsword.",
    benefit: "Once per day, you can utterly annihilate one creature of level 9 or less that you damage with this blade. The creature can pass a DC 18 Constitution check to take 3d8 damage instead.",
    "curse": "You cannot relinquish ownership of this blade unless it is taken from you by a creature that defeats you in combat.\n\nFor each day you do not slay a LV 2 or greater creature with this sword, you lose 1d6 hit points. These are restored only when you kill a LV 2 or greater creature with the sword."
  },
  {
    uuid: "1bb9000e-3297-42d5-89f5-a8cc6237a286",
    name: "BAG OF DEVOURING",
    flavourText: "A worn, leather pouch with tight drawstrings.",
    curse: "This bag devours and destroys anything placed inside it in 1d6 rounds."
  }, {
    uuid: "1d2539af-76d0-4c8a-9229-806593f7af0a",
    name: "SPHERE OF ANNIHILATION",
    flavourText: "A three-foot, spherical void of pure darkness that hovers above the ground.",
    benefit: "This sphere utterly destroys all matter it touches.\n\nIntelligent beings can move the flying sphere a near distance by passing a DC 18 Intelligence check. If multiple creatures vie for control of the sphere, it is a contested Intelligence check instead. Wizards have advantage on this check. The winner moves the sphere a near distance.\n\nIf the sphere moves into a space occupied by a creature, the being controlling the sphere makes an attack roll against that creature with a +7 bonus. On a hit, the creature is obliterated."
  }, {
    uuid: "1f1dad1f-218c-4f20-af3b-c6287718823d",
    name: "CLOAK OF ELVENKIND",
    flavourText: "A hooded, billowing cloak that shifts colors to match its surroundings.",
    benefit: "Your checks to hide are always easy (DC 9). Once per day, you can become invisible for 5 rounds. The invisibility ends if you attack or cast a spell."
  }, {
    uuid: "206411a4-1ddc-47b0-bc35-8cc87f8a06d3",
    name: "BOOTS OF DANCING",
    flavourText: "Fine, supple boots of sheepskin.",
    curse: "As soon as you don these boots, you begin cavorting and dancing uncontrollably. You move randomly each turn and must pass a DC 15 Dexterity check to remove the boots."
  }, {
    uuid: "20b577c9-ff97-4878-bafd-5c68c0fe8379",
    name: "DAGGER OF THE GOBLIN HERO",
    flavourText: "A curved dagger with a half- moon notch at the blade's base.",
    bonus: "+1 dagger",
    benefit: "You can speak Goblin. All goblinoid creatures react to you with a friendly attitude."
  },
  {
    uuid: "237be988-2b5d-429d-b739-58c3941d638f",
    name: "RING OF FIREBALLS",
    flavourText: "A bronze loop with claws holding a red marble. A fiery miasma swirls inside the glass.",
    benefit: "You can pluck the glass marble from the ring and throw it up to a far distance, causing a fireball spell (pg. 60) to bloom at the site of impact.\n\nThe glass marble regrows after you successfully complete a rest."
  }, {
    uuid: "2480f8cd-a820-49dc-9e36-e4fc23c0b383",
    name: "SHIELD OF THE LION",
    flavourText: "This shield is carved as a roaring lion's face with a flowing mane.",
    bonus: "+1 shield.",
    benefit: "Once per day, you can command the lion to animate and bellow a ferocious roar. All hostile creatures within near range must immediately make a morale check."
  },
  {
    uuid: "26ee6d03-fc99-4a94-bcb5-de29f4958e4d",
    name: "POTION OF VITALITY",
    flavourText: "A crimson elixir that gently thumps with a heartbeat.",
    benefit: "When you drink this potion, roll your class's hit points die. You permanently gain that many HP.",
    curse: "If you drink more than one Potion of Vitality in your lifetime, you must pass a DC 18 Constitution check each time or die instantly."
  },
  {
    uuid: "29d0ce78-94e4-4ed0-a758-32dbe7743c46",
    name: "WAND OF UNLIFE",
    flavourText: "The knobby finger-bone of a swamp troll steeped in acrid embalming fluid.",
    benefit: "This wand contains the spells animate dead (pg. 54) and create undead (pg. 58).",
    curse: "Each time you use the wand to cast a spell, you take 1d4 points of Constitution damage. If you reach 0 Constitution from this effect, you die and turn into a zombie."
  },
  {
    uuid: "2b37616c-3c4d-4d05-8183-da4e91cad1be",
    name: "POTION OF GIANT STRENGTH",
    flavourText: "A clay jar holding a stew of green, leafy sludge.",
    benefit: "Your Strength becomes 18 (+4) and you deal x2 damage on melee attacks for 10 rounds."
  }, {
    uuid: "2c29a719-8623-4d1b-8e10-bfac8bf5e49e",
    name: "POTION OF EXTIRPATION",
    flavourText: "An acrid, tarry substance in an iron flask with a lead stopper.",
    benefit: "You can pour the potion on one object or creature filling up to a close area. The target is utterly removed from reality and cannot be returned by anything short of a wish spell.",
    personality: "Chaotic. Protests loudly while being used and never agrees that the target is the right choice for extirpation."
  },
  {
    uuid: "2d2dae34-452d-4eb0-ad1d-3e9c65dae7ea",
    name: "GREATAXE OF THE HORDE",
    flavourText: "A jagged greataxe carved from a weighty dragon bone.",
    bonus: "+2 greataxe",
    benefit: "Once per day, you can turn a regular hit with this weapon into a critical hit",
    "curse": "Each time you go below half your hit points, make a DC 12 Charisma check. On a failure, you enter a battle rage for 1d4 rounds and must attack the nearest creature."
  },
  {
    uuid: "336c2bd2-679c-430a-b320-8b8a22ed501c",
    name: "TOME MORDANTICUS",
    flavourText: "A hand-drawn bestiary of the multiverse's most notable creatures and people.",
    benefit: "When you read the tome, you learn three True Names (pg. 319) of three beings you choose.\n\nYour True Name also appears in the book after reading it.",
    personality: "Neutral. Pedantic, fussy. The book constantly tries to escape its owner and can telepathically reach out a near distance to any creature."
  },
  {
    uuid: "3387195f-d849-4e1a-ae1e-778f9a71ed54",
    name: "POTION OF FORGETFULNESS",
    flavourText: "A pink draught that swirls with a counter-clockwise current.",
    benefit: "If you serve this potion to an intelligent being and that being drinks it, the imbiber permanently forgets one memory of your choosing."
  }, {
    uuid: "3612fdaf-5a55-4c14-be9c-e164cdd9fbab",
    name: "KYTHERIAN COG",
    flavourText: "A coin-sized, toothed wheel buffed to a silvery shine.",
    benefit: "You start every session with a luck token."
  }, {
    uuid: "36fe9e27-445a-4e00-bc27-2c5413ea8f24",
    name: "WELL OF MANY WORLDS",
    flavourText: "A dark circle of cloth that seems to create a tunnel through the surface it lies upon.",
    benefit: "The Well of Many Worlds folds open on a flat surface into a 6-foot wide hole. Creatures can jump into the hole once per day each to be transported to a random plane of existence."
  }, {
    uuid: "3cb7992e-4f5d-4128-8b0b-b5b50a7cb7b1",
    name: "GOBLIN BOMB",
    flavourText: "A preserved rat stuffed with an explosive charge and a fuse.",
    benefit: "You can light the bomb's fuse and throw it a near distance. It explodes in 1d4 rounds, dealing 2d8 damage to everything in near range."
  }, {
    uuid: "3dbcc465-85eb-4063-a844-7b30dbb9ba6c",
    name: "EGG OF THE COCKATRICE",
    flavourText: "A blue, hard egg as big as a coconut and heavy as a stone.",
    benefit: "Once per week, you can speak a command word that causes a cockatrice to hatch and follow your commands for 5 rounds before flying away. The egg repairs itself over one week."
  }, {
    uuid: "3e50400e-83d3-4ccf-b530-c4d0a5243142",
    name: "SHORTSWORD OF THE THIEF",
    flavourText: "A stubby, gray blade riddled with notches and scars.",
    bonus: "+1 shortsword. +2 if wielded by a halfling or thief.",
    benefit: "Once per day, regain a luck token you just spent."
  },
  {
    uuid: "413a09db-13a5-407a-9642-b3530bd938dd",
    name: "ARMOR OF THE ONI",
    flavourText: "Black plate mail of lacquered, ironwood panels. The helm's visor is the face of a snarling oni.",
    bonus: "+1 plate mail.",
    benefit: "You can speak and understand Diabolic. Your melee weapon attacks deal +1 damage.",
    "curse": "You have disadvantage on attacks and spellcasting checks against demons."
  },
  {
    uuid: "42cf7ae5-d4ff-4004-9b84-c871d20b2e89",
    name: "WARHAMMER OF THE DWARF LORDS",
    flavourText: "A boxy hammer with a stout handle and leather throwing strap. It hums with a baritone resonance when spun.",
    bonus: "+1 warhammer. +2 if wielded by a dwarf.",
    benefit: "This weapon has the thrown property (pg. 37) to a near distance. It always returns to your hand after being thrown.\n\nYour attacks with this weapon deal double damage against giants."
  },
  {
    uuid: "4443497b-8bff-4faa-8aa7-8d74f86d8a66",
    name: "ALABASTER DESTRIER",
    flavourText: "A smooth, pearly statuette of a running horse",
    benefit: "Once per day, the wielder can speak the command word to turn the statuette into a pegasus that accepts neutral or lawful riders. The statuette remains in this form for 1 hour."
  }, {
    uuid: "45c92b1b-5e2f-420b-856c-0e0634a81612",
    name: "SCARAB OF PROTECTION",
    flavourText: "A brooch made from a horned scarab beetle dipped in gold.",
    benefit: "If you die, make a DC 18 Constitution check. If you succeed, you are unconscious instead of dead."
  }, {
    uuid: "46794f5a-85fb-4823-a1f6-20dcce744741",
    name: "BOOTS OF THE CAT",
    flavourText: "Gray, doeskin boots as thin and soft as slippers.",
    benefit: "You can jump up to a near distance from a standstill. Your checks to move silently are always easy (DC 9)."
  }, {
    uuid: "4d6763cb-693d-47c9-b61a-f2dbfa39460e",
    name: "BEAD OF FORCE",
    flavourText: "A marble with a blue ring of light glowing softly inside it.",
    benefit: "You can throw this bead at one target up to a near distance. If you hit, the target becomes caught in a resilient sphere spell (pg. 69)."
  }, {
    uuid: "5111599b-ad50-4dc7-a93e-d8ee1bdd98df",
    name: "HAT OF THE HOUND",
    flavourText: "A rounded, jaunty bowler hat.",
    benefit: "You can transform into a mastiff each day for up to 10 rounds total. Your clothing and possessions transform with you."
  }, {
    uuid: "5c05603c-891f-49f7-97e0-950ccde31040",
    name: "WAND OF WARDING",
    flavourText: "A thin, weighty rod of dark iron inscribed with spiraling runes.",
    benefit: "This wand contains the spells dispel magic (pg. 59) and protection from energy (pg. 68).",
    curse: "Each time you fail a spellcasting check with this wand, you also lose the ability to cast a random spell you know until you complete a rest."
  },
  {
    uuid: "62dfb4b3-22e8-42fc-966c-5bfcdaac9b6c",
    name: "TRIDENT OF THE SEAS",
    flavourText: "A three-pronged, mithral harpoon studded with pearls.",
    bonus: "+2 spear.",
    benefit: "You can breathe underwater, as well as speak to and understand wild sea creatures.\n\nOnce per day, you can cast control water (pg. 57) with a +4 bonus."
  },
  {
    uuid: "6427ee65-4f78-4d8b-b856-3fdc8a3f0cfa",
    name: "TOME OF GEHEMNA",
    flavourText: "A sturdy, russet volume held by metal clasps. A golden eye in a circle adorns the cover.",
    benefit: "Each day, a random wizard spell scroll appears inside the tome, replacing the spell scroll from the prior day.",
    personality: "Neutral. Instructive, technical. Drones on about the obscure points of spellcasting and has an opinion on every wizard's technique."
  },
  {
    uuid: "681ab3a7-844f-4283-bd70-dd3c4afce763",
    name: "ROBE OF THE SORCERER",
    flavourText: "A black leather robe with a shadowed cowl and clawed clasps on thin, mithral chains.",
    benefit: "Only a wizard with the Sorcerer title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nWhen you cast a spell that deals damage, add your Intelligence modifier to the total.\n\nYou have advantage on casting the power word kill spell."
  }, {
    uuid: "69ed9127-0595-4d53-a577-eda5a16e4560",
    name: "PIPES OF THE SEWERS",
    flavourText: "A set of tarnished, brass pan pipes with seven cylinders.",
    benefit: "Once per day, you can play these pipes to summon 2d6 giant rats. The rats obey you for d6 rounds, and then they scatter and flee.",
    curse: "If you stop playing while the rats are present, they turn on you and attack."
  },
  {
    uuid: "6a2864a8-58fc-4a79-806a-a434e95e2a28",
    name: "GENIE LAMP",
    flavourText: "A tarnished, brass oil lamp.",
    benefit: "Rubbing the lamp causes its resident djinni (50% chance) or efreeti (50% chance) to emerge. A djinni grants its summoner one wish spell (pg. 73) before disappearing. An efreeti does the same, but only after being defeated in combat."
  }, {
    uuid: "6bb7870a-c6fa-4441-af7d-055851c81fca",
    name: "WRAITH CHAIN",
    flavourText: "A chainmail shirt of black, mithral links that trails a long cloak of writhing shadows.",
    bonus: "+1 mithral chainmail.",
    benefit: "Once per day, you may cause an attack that hits you to miss instead."
  },
  {
    uuid: "6f616379-ec62-41fd-8101-83ab0561b5f4",
    name: "MEMNON'S ENTROPIC ARMOR",
    flavourText: "Deep blue plate mail traced with gold lightning motifs and red gems arrayed into the shape of flames.",
    bonus: "+1 plate mail. Can only be worn by a chaotic being. If you also wield Memnon's Discordant Blade and Memnon's Blazing Javelin, it becomes +3 plate mail.",
    benefit: "Once per day, you can speak the armor's command word. Until your next turn, all non-magical weapons that strike you are instantly unmade, shattering into dust. You take no damage from them."
  },
  {
    uuid: "7001d965-92dd-453a-9992-adfc023ccfee",
    name: "NECROTIC MACE OF WITHERING",
    flavourText: "A wrought iron mace tipped with a heavy, screaming skull. Black ichor runs from the skull's eyes when the mace is used to channel necrotic energy.",
    bonus: "+1 mace. Can only be wielded by a chaotic priest.",
    benefit: "While holding the mace, you can turn cure wounds spells you cast into harmful magic that instead inflicts the same amount of damage it would heal.",
    "curse": "If you use the mace to cast an inverted cure wounds spell, you are haunted by nightmares that night. You must pass a DC 12 Wisdom check during your next rest or gain no benefit from resting."
  },
  {
    uuid: "704c5698-043d-4f95-a7a7-90ca72c79659",
    name: "PEARL OF POWER",
    flavourText: "A fat, opalescent pearl glowing with an inner radiance.",
    benefit: "Once per day, you may regain the ability to cast a spell you have lost. This cannot restore a spell lost due to a critical spellcasting failure."
  }, {
    uuid: "7073ed04-7834-4520-ac11-77f2fb9bb612",
    name: "MEMNON'S BLAZING JAVELIN",
    flavourText: "This golden javelin occasionally blinks and wavers, briefly turning into a bolt of lightning.",
    bonus: "+1 javelin. Can only be wielded by a chaotic being. If you also wield Memnon's Discordant Blade and Memnon's Entropic Armor, it becomes a +3 javelin.",
    benefit: "The javelin always returns to your hand after being thrown. Once per day, when you throw this javelin, you can turn it into lightning as per the lightning bolt spell (no spellcasting check)."
  },
  {
    uuid: "7083a5b1-9148-4a3e-ad6c-af7ed0ba4d02",
    name: "THE MALEDICTION INFERNAL",
    flavourText: "A black, leatherbound tome with a grinning demon face embossed on the cover.",
    benefit: "A chaotic being who reads this tome gains a level and learns the Diabolic language.\n\nA non-chaotic being who reads this book must pass a DC 18 Wisdom check or lose one level.\n\nAfter being read, the tome teleports to a far-flung location."
  }, {
    uuid: "71309802-9e25-4f42-9a9a-39ea8b94bcb6",
    name: "PIPE OF THE ROLLING HILLS",
    flavourText: "A long, curved pipe that smells of cloves and resin.",
    benefit: "Up to three times per day, regain 1d4 hit points when you smoke this pipe."
  }, {
    uuid: "74596587-f073-4c41-ab40-cd6e35758e16",
    name: "SILVER MACE OF WRATH",
    flavourText: "A tarnished, silver mace with seven flanges in the shape of crescent moons.",
    bonus: "+1 mace.",
    benefit: "This weapon deals double damage against creatures with lycanthropy."
  },
  {
    uuid: "76d29891-5401-41ab-939a-199e8290803e",
    name: "SWORD OF THE ANCIENTS",
    flavourText: "A chipped and rusting blade with an oiled leather grip.",
    bonus: "+2 longsword.",
    benefit: "The sword is unbreakable and can carve through any material.\n\nThe owner can summon the sword to their hand if it's on the same plane."
  },
  {
    uuid: "7a8b6c71-8dcc-48f1-858e-f2a2a178a575",
    name: "SHIELD OF THE WITCH-KING",
    flavourText: "A jagged triangle of black steel with spiny, armored plates.",
    bonus: "+2 shield. Can only be wielded by a chaotic being.",
    benefit: "You take half damage from undead creatures.",
    "curse": "If you go to 0 HP, the spirit of Ix-Natheer tries to steal your body. He blocks healing magic from affecting you. If you die, Ix-Natheer possesses you.",
    "personality": "Chaotic. The spirit of the witch-king Ix-Natheer animates this shield. He pounces on opportunities to betray his wielder so he can try to take over their body and return to unlife."
  },
  {
    uuid: "7b5381e3-1b56-4b1c-a3d9-f887ea2057a4",
    name: "ROBE OF THE ARCHMAGE",
    flavourText: "A red silk robe with a wide, gold- hemmed mantle. Golden eyes and moons dust its sleeves.",
    benefit: "Only a wizard with the Archmage title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nChoose three spells you know. Their spellcasting DC is always 11.\n\nYou have advantage on casting the disintegrate spell."
  }, {
    uuid: "828036f3-650f-4b29-83ea-2bc20d9925dd",
    name: "ROBE OF THE DRUID",
    flavourText: "A green velvet robe with a deep hood and hems embroidered with silver leaves and vines.",
    benefit: "Only a wizard with the Druid title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nTwice per day, you can regain the ability to cast one lost spell.\n\nYou have advantage on casting the shapechange spell. When you cast it, its duration is 1 hour instead of focus."
  }, {
    uuid: "83dd626e-ef01-4c1a-9e80-c8de68ae4d32",
    name: "CRYSTAL BALL",
    flavourText: "A flawless glass orb with roiling images swirling inside it.",
    benefit: "Only wizards can use a Crystal Ball. You can use it to cast the scrying spell (pg. 70). If you fail the spellcasting check to cast scrying, the Crystal Ball ceases to function for a day."
  }, {
    uuid: "84505f9f-51cc-4e67-8349-8f95d02e888d",
    name: "BOOTS OF HOVERING",
    flavourText: "Brown, sturdy boots polished to a sheen. Small, silver wings adorn the heels.",
    benefit: "You can walk on an insubstantial surface for 1 turn at a time. You fall through the surface if you end your turn on it."
  }, {
    uuid: "874d85f2-3471-44b0-b0e7-c96309c83217",
    name: "ONYX DESTRIER",
    flavourText: "A polished, ebony statuette of a running horse.",
    benefit: "Once per day, the wielder can speak the command word to turn the statuette into a nightmare that accepts neutral or chaotic riders. The statuette remains in this form for 1 hour."
  }, {
    uuid: "89429fa8-5bab-4a7d-9630-6e301ea75e4b",
    name: "BRAK'S CUBE OF PERFECTION",
    flavourText: "A tiny cube with paintings of goblins on each face, each one depicting transcendence in a physical or mental trait.",
    benefit: "Roll the cube by rolling a d6. Your corresponding stat permanently increases to 18 (+4). 1. Strength. 2. Dexterity. 3. Constitution. 4. Intelligence. 5. Wisdom. 6. Charisma.\n\nAfter being rolled, Brak's Cube of Perfection teleports to a random location in the multiverse."
  }, {
    uuid: "8caab455-30e0-4be5-ab2f-bbe9bf072f64",
    name: "HOURGLASS OF THE BLACK SANDS",
    flavourText: "An ancient hourglass running with obsidian sand.",
    benefit: "Once per day, you can turn the hourglass when you cast a spell. The spell's effects last 1d4 rounds longer."
  }, {
    uuid: "90c7711f-4af0-4685-9656-7b5dc72896fc",
    name: "HELM OF MIND READING",
    flavourText: "A helm carved with brain ridges, a spinal neck-guard, and octopus-like tentacles.",
    benefit: "You can cast the detect thoughts spell (pg. 58) three times per day (+4 bonus)."
  }, {
    uuid: "9101e244-9803-4ef1-ac85-fbb59e5663de",
    name: "CLOAK OF THE BAT",
    flavourText: "A leathery, black cloak that has a ragged hem and a hood with pointed ears.",
    benefit: "You can fly a near distance as your movement while in a shadowy area.",
    curse: "Each time you use the cloak to fly, roll a d20. On a result of 1, you and your gear turn into a small bat for 3 rounds."
  },
  {
    uuid: "9687026b-2a58-4dca-b30d-80f62be3385d",
    name: "TRUE NAME",
    flavourText: "The secret, unique name borne by a creature and documented in The Covenant. Few creatures know their own True Names.",
    benefit: " You have advantage on attack rolls and spellcasting checks targeting a creature whose True Name you utter."
  }, {
    uuid: "9eda9b8c-b996-42e7-9008-826d6f623fc3",
    name: "LONGBOW OF THE ELVEN KINGS",
    flavourText: "A deeply curved longbow with deer antler reinforcements.",
    benefit: "You have advantage on attacks with this bow against unnatural creatures and outsiders.",
    personality: "Neutral. Proud, timeless. Believes protecting the natural order is the highest calling. Demands all unnatural creatures be found and slain."
  },
  {
    uuid: "a20dca22-2aed-4d3c-8e88-354dc21a876b",
    name: "AMULET OF VITALITY",
    flavourText: "A gold amulet with a red ruby teardrop at its center.",
    benefit: "Your Constitution stat becomes 18 (+4) while wearing this amulet."
  }, {
    uuid: "a61e0123-2948-41cb-9c84-7a3312ae47c1",
    name: "BLADE OF VENGEANCE",
    flavourText: "A gray blade with a diamond- cut ruby in the pommel. It whistles sharply with each slice.",
    bonus: "+2 bastard sword. Cannot be wielded by undead.",
    benefit: "You have advantage on attacks against undead creatures with this sword. You can use the sword to cast turn undead once per day (+4 bonus).",
    "personality": "Lawful. Grim, suspicious. Forged as a failsafe against the Witch-Kings if they should fall to darkness, which they did. Demands they be slain."
  },
  {
    uuid: "ac28804f-90e4-47d4-bc4e-59a0f8b1101e",
    name: "NECKLACE OF CHARM",
    flavourText: "A gold, fishbone chain that shimmers with subtle beauty.",
    benefit: "Your Charisma stat becomes 18 (+4) while wearing this necklace."
  }, {
    uuid: "af8b4b82-2a9c-4f7c-98b6-fe5fd23b55b8",
    name: "IMMOVABLE ROD",
    flavourText: "A short, iron rod with a button on one end.",
    benefit: "When you click the button, the rod becomes fixed in space (holds 5,000 lbs). Clicking the button again ends the effect."
  }, {
    uuid: "b3262ede-153d-4eaf-adc1-0846c2d3efc0",
    name: "NIGHTCLOAK ARMOR",
    flavourText: "Matte black leathers enchanted to deepen and darken shadows.",
    bonus: "+1 leather armor.",
    benefit: "Once per day, you may choose to automatically pass a Dexterity check to hide."
  },
  {
    uuid: "b94d7ef6-58e9-4a7a-ba34-ca7d94797466",
    name: "POTION OF FLYING",
    flavourText: "A sunny liquid with bubbles that flash and pop like tiny stars.",
    benefit: "You can fly a near distance for 10 rounds when you drink this potion."
  }, {
    uuid: "babde3ae-f2c3-41eb-9989-b36e4c325df2",
    name: "BRAK'S BOOK OF MISSPELLS",
    flavourText: "A tome bound in ratskin that bears a jagged, glowing rune.",
    curse: "This spellbook contains one scroll each of acid arrow (pg. 54), fireball (pg. 60), and sleep (pg. 71). When a wizard tries to cast or learn a spell from these scrolls, the spell targets the caster on a success."
  }, {
    uuid: "bd68fad7-5aa4-4e8d-8f03-655d9a8c9865",
    name: "POTION OF HEALING",
    flavourText: "A glass bottle with a fizzy, lemon-vanilla liquid inside.",
    benefit: "The imbiber of this potion regains hit points based on their level.\n\nLV 0-3: 1d6 hit points. \nLV 4-6: 2d8 hit points. \nLV 7-9: 3d10 hit points. \nLV 10+: 4d12 hit points."
  }, {
    uuid: "bf6f6658-750b-4339-8150-be4ca492a59a",
    name: "BAG OF BADGERS",
    flavourText: "A gray, fraying sack matted with white, bristly hair.",
    benefit: "Once per day, you can reach inside the bag and pull out an angry badger. You can throw the badger up to a near distance. The badger attacks the nearest creature for 3 rounds before waddling away."
  }, {
    uuid: "bff64c09-32a1-4aae-97a7-259bc2d86594",
    name: "SPYGLASS OF TRUE SIGHT",
    flavourText: "A brass, telescoping lens with magical runes carved on it.",
    benefit: "When you look through the spyglass, you can see invisible creatures and objects.",
    curse: "The wielder feels a compulsion to look at everything through the spyglass."
  },
  {
    uuid: "c002e781-5892-4f3b-a87e-1fa91b232f5c",
    name: "MOONWROUGHT CHAINMAIL",
    flavourText: "A luminous jacket of chainmail as lightweight as a silk shirt.",
    bonus: "+1 mithral chainmail.",
    benefit: "Once per day, you can speak the armor's command word. You gain a +1 bonus to your next spellcasting check or ranged attack."
  },
  {
    uuid: "c345dfbb-f1bb-4009-a9dc-9f8b9939d881",
    name: "HAT OF INTELLECT",
    flavourText: "A floppy, pointed hat with a wide brim.",
    benefit: "Your Intelligence stat becomes 18 (+4) while wearing this hat."
  }, {
    uuid: "ca7b61f7-a86f-4205-9807-b98b106beff9",
    name: "BRACERS OF DEFENSE",
    flavourText: "Steel bracers traced with dwarvish runes of protection.",
    benefit: "You get a +1 bonus to your armor class."
  }, {
    uuid: "cdc49a23-6a8e-4c3b-9be5-188cd512bec8",
    name: "THE KYTHERIAN MECHANISM",
    flavourText: "A towering, brass platform mounted with countless cogs and gears speckled in blue- green rust.",
    benefit: "A handle turns The Kytherian Mechanism's mighty wheels, but it doesn't function until its seven missing Kytherian Cogs are replaced.\n\nOnce functional, activating the mechanism allows the operator to undo one event of their choosing from history. Then, the seven Kytherian Cogs magically scatter to far-flung locations."
  }, {
    uuid: "d0960180-cf1a-45e6-9e29-782d8b95af8d",
    name: "BAG OF HOLDING",
    flavourText: "A worn, leather pouch with tight drawstrings.",
    benefit: "This bag has an interdimensional space inside that can hold up to 10 gear slots.",
    curse: "Placing this item inside another Bag of Holding or a Portable Hole destroys both items and all held inside them."
  },
  {
    uuid: "d12c1bcf-78a8-4048-b545-cc20ece5ea80",
    name: "TOME OF HADEBE",
    flavourText: "A brass-plated book with pages of etched copper leaf.",
    benefit: "The tome contains one each of the following scrolls: burning hands (pg. 56), fireball (pg. 60), and prismatic orb (pg. 67)."
  }, {
    uuid: "d3429baa-b43a-4e3a-8dc1-2946dc28f6dd",
    name: "OPHIDIAN ARMOR",
    flavourText: "Glistening, smooth leather of dappled emerald scales.",
    bonus: "+1 leather armor.",
    benefit: "You have advantage on checks to avoid the effects of poison."
  },
  {
    uuid: "db82a5f0-9832-4f9e-b3eb-810e1ea00708",
    name: "AMULET OF SECRECY",
    flavourText: "A heavy, flat pendant carved with a lidded eye.",
    benefit: "You can't be detected by divination magic such as the scrying spell or a Crystal Ball while wearing this amulet.",
    curse: "You constantly have the sensation of being watched."
  },
  {
    uuid: "dc3cffca-ef36-4df9-8a4b-cd2003cb8c1b",
    name: "POTION OF INVISIBILITY",
    flavourText: "This glass vial appears to be empty, but a liquid audibly splashes around inside it.",
    benefit: "When you drink this potion, you become invisible for 10 rounds or until you attack or cast a spell."
  }, {
    uuid: "e0d6207b-2ae5-45e6-8cab-6c20ae284cbb",
    name: "WAR HORN OF THE ANGELS",
    flavourText: "An opalescent ox horn capped with a golden mouthpiece.",
    benefit: "Only a lawful being can wield the horn. Once per day, you can blow the horn to cast rebuke unholy (pg. 69) with an +4 bonus.\n\nA demon or devil who hears the horn has disadvantage on its Charisma check vs. your rebuke unholy spellcasting check."
  }, {
    uuid: "e1586118-4fbc-480a-83c8-854dee73306c",
    name: "JEWEL OF BARBALT",
    flavourText: "A coconut-sized ruby cut with a thousand facets.",
    benefit: "You roll a critical success on an 18-20.",
    curse: "You roll a critical failure on a 1-3."
  },
  {
    uuid: "e3c90343-17f2-4364-bd7d-3e0355227946",
    name: "SHIELD OF THE CRUSADER",
    flavourText: "A weighty kite shield painted with a faded, crimson cross.",
    bonus: "+1 shield. Can only be wielded by a lawful being.",
    benefit: "Once per day, you can speak a prayer to wreathe the shield in holy flames, granting +2 to your AC for 3 rounds."
  },
  {
    uuid: "e461ee64-7786-4eb6-afc6-39c14664e6d7",
    name: "THRICE-BLESSED SWORD",
    flavourText: "A lustrous, golden-handled blade anointed with blessed tears, incense, and prayers.",
    bonus: "+3 longsword. Only a lawful priest who has achieved the Templar title or higher can wield this sword.",
    benefit: "You deal double damage against demons, devils, and undead.",
    "personality": "Lawful. Virtuous, naive. Refuses to be wielded against worshippers of lawful gods, especially self-proclaimed converts. Demands each foe be given the chance to convert before being slain."
  },
  {
    uuid: "e5ca4c52-d5eb-47ed-ab71-1a1eeb89cf2e",
    name: "ARMOR OF SAINT TERRAGNIS",
    flavourText: "Golden plate mail carved from head to toe with warrior angels.",
    bonus: "+3 plate mail. Only a lawful worshipper of Saint Terragnis can wear this armor.",
    benefit: "Hostile spells that target you are DC 18 to cast. Once per month, you can summon an Avatar of Saint Terragnis (treat as an archangel) to fight by your side for 10 rounds."
  },
  {
    uuid: "ec1ec95f-ef82-43d4-8cbe-5e28bdd54841",
    name: "BRACERS OF ARCHERY",
    flavourText: "Leather bracers embossed with soaring hawks.",
    benefit: "You deal +1 damage with ranged weapons."
  }, {
    uuid: "ed379220-822a-4185-833b-5b57e2a24447",
    name: "PORTABLE HOLE",
    flavourText: "A black, velvet square of cloth that unfolds into a wide circle.",
    benefit: "The Portable Hole folds open on a flat surface into a 6-foot wide, 6-foot deep hole. It has 20 gear slots of storage. The hole closes when you fold the cloth into a small square.",
    curse: "Placing this item inside a Bag of Holding or another Portable Hole destroys both items and all held inside them."
  },
  {
    uuid: "f1e1a972-1d69-4739-bf6e-6b4651273ea6",
    name: "STAFF OF ORD",
    flavourText: "A tapered, mithral staff that resonates with arcane power. The tip features an upward- looking eye in a circle of runes.",
    bonus: "+3 staff. Can only be wielded by a wizard.",
    benefit: "Functions as a wand of dimension door (pg. 59), fireball (pg. 60), sending (pg. 70), and telekinesis (pg. 72).\n\nUnlike a wand, the staff remains intact if you roll a 1 on your spellcasting checks.\n\nHostile spells targeting you are DC 18 to cast."
  },
  {
    uuid: "f34b484f-2e39-4cb8-bc4d-ea352fcd3b57",
    name: "HORNED HELM OF RAMLAAT",
    flavourText: "A bloodstained helm made of a ram's skull.",
    benefit: "This helm grants you a +1 bonus to your armor class. You have advantage on any check you make to knock down creatures or objects.",
    curse: "You feel compelled to headbutt delicate objects."
  },
  {
    uuid: "f3b7b9b3-d28c-4141-b94e-ce8cf7f57cbb",
    name: "GLOVES OF AGILITY",
    flavourText: "Thin, leather gloves that seem to meld with the wearer's hands.",
    benefit: "Your Dexterity stat becomes 18 (+4) while wearing these gloves."
  }, {
    uuid: "f629d0c0-5cae-4435-a352-8bca3b1156fa",
    name: "OBSIDIAN WITCHKNIFE",
    flavourText: "A glinting, obsidian blade that trails black smoke in thin curls.",
    bonus: "+2 dagger. Cannot be wielded by a lawful being.",
    benefit: "When you cast a spell while holding this dagger, you may wound yourself with it. Add the amount of damage you take to your spellcasting check."
  },
  {
    uuid: "f82ae6e8-337f-455c-8f85-a5b234f1fa75",
    name: "POTION OF LEGENDARY DEEDS",
    flavourText: "A golden elixir that resonates with a faint, angelic chord.",
    benefit: "When you drink this potion, you gain one level and your XP total resets to zero."
  }, {
    uuid: "fa00e186-1981-496b-9ca3-6cab9fb111ce",
    name: "STAFF OF HEALING",
    flavourText: "A knotted, oak stave with a heavy knurl on one end.",
    bonus: "+1 staff.",
    benefit: "Once per day, you can touch a creature with the staff to heal it for 1d6 hit points."
  },
  {
    uuid: "fd122de6-c4b0-4235-96b0-5c851bbbcc86",
    name: "RING OF RAMLAAT",
    flavourText: "A bone-carved ring with a ram skull. Its horns twist forward and red lights glow in its eye sockets.",
    benefit: "Once per day, you can enter a rage where you deal double damage for 5 rounds. During the rage, you can't cast spells and enemies have advantage on melee attacks against you.",
    personality: "Chaotic. Aggressive, overconfident. Seeks to provoke you and your enemies into battle."
  },
  {
    uuid: "fe5a661a-31e8-4e16-939d-1ec912d4494a",
    name: "RING OF INVISIBILITY",
    flavourText: "A simple, gold band polished to a warm shine.",
    benefit: "Once per day, the ring can cast the invisibility spell (pg. 63) on you.",
    curse: "There is a cumulative 1% chance each time you rest that your sleep is ruined by apocalyptic nightmares, and you gain no benefit from resting. This resets to a 1% chance each time it triggers."
  }
];