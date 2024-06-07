import type { Item } from "./type";

export const core: Item[] = [
  {
    name: "ALABASTER DESTRIER",
    flavourText: "A smooth, pearly statuette of a running horse",
    benefit:
      "Once per day, the wielder can speak the command word to turn the statuette into a pegasus that accepts neutral or lawful riders. The statuette remains in this form for 1 hour.",
  },
  {
    name: "AMULET OF SECRECY",
    flavourText: "A heavy, flat pendant carved with a lidded eye.",
    benefit:
      "You can't be detected by divination magic such as the scrying spell or a Crystal Ball while wearing this amulet.",
    curse: "You constantly have the sensation of being watched.",
  },
  {
    name: "AMULET OF VITALITY",
    flavourText: "A gold amulet with a red ruby teardrop at its center.",
    benefit:
      "Your Constitution stat becomes 18 (+4) while wearing this amulet.",
  },
  {
    name: "ARMOR OF SAINT TERRAGNIS",
    flavourText:
      "Golden plate mail carved from head to toe with warrior angels.",
    bonus:
      "+3 plate mail. Only a lawful worshipper of Saint Terragnis can wear this armor.",
    benefit:
      "Hostile spells that target you are DC 18 to cast. Once per month, you can summon an Avatar of Saint Terragnis (treat as an archangel) to fight by your side for 10 rounds.",
  },
  {
    name: "ARMOR OF THE ONI",
    flavourText:
      "Black plate mail of lacquered, ironwood panels. The helm's visor is the face of a snarling oni.",
    bonus: "+1 plate mail.",
    benefit:
      "You can speak and understand Diabolic. Your melee weapon attacks deal +1 damage.",
    curse:
      "You have disadvantage on attacks and spellcasting checks against demons.",
  },
  {
    name: "BAG OF BADGERS",
    flavourText: "A gray, fraying sack matted with white, bristly hair.",
    benefit:
      "Once per day, you can reach inside the bag and pull out an angry badger. You can throw the badger up to a near distance. The badger attacks the nearest creature for 3 rounds before waddling away.",
  },
  {
    name: "BAG OF DEVOURING",
    flavourText: "A worn, leather pouch with tight drawstrings.",
    curse:
      "This bag devours and destroys anything placed inside it in 1d6 rounds.",
  },
  {
    name: "BAG OF HOLDING",
    flavourText: "A worn, leather pouch with tight drawstrings.",
    benefit:
      "This bag has an interdimensional space inside that can hold up to 10 gear slots.",
    curse:
      "Placing this item inside another Bag of Holding or a Portable Hole destroys both items and all held inside them.",
  },
  {
    name: "BEAD OF FORCE",
    flavourText: "A marble with a blue ring of light glowing softly inside it.",
    benefit:
      "You can throw this bead at one target up to a near distance. If you hit, the target becomes caught in a resilient sphere spell (pg. 69).",
  },
  {
    name: "BLADE OF VENGEANCE",
    flavourText:
      "A gray blade with a diamond- cut ruby in the pommel. It whistles sharply with each slice.",
    bonus: "+2 bastard sword. Cannot be wielded by undead.",
    benefit:
      "You have advantage on attacks against undead creatures with this sword. You can use the sword to cast turn undead once per day (+4 bonus).",
    personality:
      "Lawful. Grim, suspicious. Forged as a failsafe against the Witch-Kings if they should fall to darkness, which they did. Demands they be slain.",
  },
  {
    name: "BOOTS OF DANCING",
    flavourText: "Fine, supple boots of sheepskin.",
    curse:
      "As soon as you don these boots, you begin cavorting and dancing uncontrollably. You move randomly each turn and must pass a DC 15 Dexterity check to remove the boots.",
  },
  {
    name: "BOOTS OF HOVERING",
    flavourText:
      "Brown, sturdy boots polished to a sheen. Small, silver wings adorn the heels.",
    benefit:
      "You can walk on an insubstantial surface for 1 turn at a time. You fall through the surface if you end your turn on it.",
  },
  {
    name: "BOOTS OF THE CAT",
    flavourText: "Gray, doeskin boots as thin and soft as slippers.",
    benefit:
      "You can jump up to a near distance from a standstill. Your checks to move silently are always easy (DC 9).",
  },
  {
    name: "BRACERS OF ARCHERY",
    flavourText: "Leather bracers embossed with soaring hawks.",
    benefit: "You deal +1 damage with ranged weapons.",
  },
  {
    name: "BRACERS OF DEFENSE",
    flavourText: "Steel bracers traced with dwarvish runes of protection.",
    benefit: "You get a +1 bonus to your armor class.",
  },
  {
    name: "BRAK'S BOOK OF MISSPELLS",
    flavourText: "A tome bound in ratskin that bears a jagged, glowing rune.",
    curse:
      "This spellbook contains one scroll each of acid arrow (pg. 54), fireball (pg. 60), and sleep (pg. 71). When a wizard tries to cast or learn a spell from these scrolls, the spell targets the caster on a success.",
  },
  {
    name: "BRAK'S CUBE OF PERFECTION",
    flavourText:
      "A tiny cube with paintings of goblins on each face, each one depicting transcendence in a physical or mental trait.",
    benefit:
      "Roll the cube by rolling a d6. Your corresponding stat permanently increases to 18 (+4). 1. Strength. 2. Dexterity. 3. Constitution. 4. Intelligence. 5. Wisdom. 6. Charisma.\n\nAfter being rolled, Brak's Cube of Perfection teleports to a random location in the multiverse.",
  },
  {
    name: "CIRCLET OF WISDOM",
    flavourText: "A thin, silver circlet set with a shimmering, blue pearl.",
    benefit: "Your Wisdom stat becomes 18 (+4) while wearing this circlet.",
  },
  {
    name: "CLOAK OF ELVENKIND",
    flavourText:
      "A hooded, billowing cloak that shifts colors to match its surroundings.",
    benefit:
      "Your checks to hide are always easy (DC 9). Once per day, you can become invisible for 5 rounds. The invisibility ends if you attack or cast a spell.",
  },
  {
    name: "CLOAK OF THE BAT",
    flavourText:
      "A leathery, black cloak that has a ragged hem and a hood with pointed ears.",
    benefit:
      "You can fly a near distance as your movement while in a shadowy area.",
    curse:
      "Each time you use the cloak to fly, roll a d20. On a result of 1, you and your gear turn into a small bat for 3 rounds.",
  },
  {
    name: "CRYSTAL BALL",
    flavourText: "A flawless glass orb with roiling images swirling inside it.",
    benefit:
      "Only wizards can use a Crystal Ball. You can use it to cast the scrying spell (pg. 70). If you fail the spellcasting check to cast scrying, the Crystal Ball ceases to function for a day.",
  },
  {
    name: "DAGGER OF THE GOBLIN HERO",
    flavourText: "A curved dagger with a half- moon notch at the blade's base.",
    bonus: "+1 dagger",
    benefit:
      "You can speak Goblin. All goblinoid creatures react to you with a friendly attitude.",
  },
  {
    name: "EGG OF THE COCKATRICE",
    flavourText: "A blue, hard egg as big as a coconut and heavy as a stone.",
    benefit:
      "Once per week, you can speak a command word that causes a cockatrice to hatch and follow your commands for 5 rounds before flying away. The egg repairs itself over one week.",
  },
  {
    name: "FLYING CARPET",
    flavourText: "A richly woven, red carpet with gold tassels.",
    benefit:
      "The carpet fits two riders (one is the driver). It can fly double near on the driver's turn.",
    personality:
      "Neutral. Playful, mischievous. Enjoys visiting new places and gets restless without a frequent change in location.",
  },
  {
    name: "GAUNTLETS OF MIGHT",
    flavourText: "Heavy, bronze gauntlets with engravings of Herculean giants.",
    benefit:
      "Your Strength stat becomes 18 (+4) while wearing these gauntlets.",
  },
  {
    name: "GENIE LAMP",
    flavourText: "A tarnished, brass oil lamp.",
    benefit:
      "Rubbing the lamp causes its resident djinni (50% chance) or efreeti (50% chance) to emerge. A djinni grants its summoner one wish spell (pg. 73) before disappearing. An efreeti does the same, but only after being defeated in combat.",
  },
  {
    name: "GLOVES OF AGILITY",
    flavourText:
      "Thin, leather gloves that seem to meld with the wearer's hands.",
    benefit: "Your Dexterity stat becomes 18 (+4) while wearing these gloves.",
  },
  {
    name: "GOBLIN BOMB",
    flavourText: "A preserved rat stuffed with an explosive charge and a fuse.",
    benefit:
      "You can light the bomb's fuse and throw it a near distance. It explodes in 1d4 rounds, dealing 2d8 damage to everything in near range.",
  },
  {
    name: "GREATAXE OF THE HORDE",
    flavourText: "A jagged greataxe carved from a weighty dragon bone.",
    bonus: "+2 greataxe",
    benefit:
      "Once per day, you can turn a regular hit with this weapon into a critical hit",
    curse:
      "Each time you go below half your hit points, make a DC 12 Charisma check. On a failure, you enter a battle rage for 1d4 rounds and must attack the nearest creature.",
  },
  {
    name: "HAT OF INTELLECT",
    flavourText: "A floppy, pointed hat with a wide brim.",
    benefit: "Your Intelligence stat becomes 18 (+4) while wearing this hat.",
  },
  {
    name: "HAT OF THE HOUND",
    flavourText: "A rounded, jaunty bowler hat.",
    benefit:
      "You can transform into a mastiff each day for up to 10 rounds total. Your clothing and possessions transform with you.",
  },
  {
    name: "HELM OF MIND READING",
    flavourText:
      "A helm carved with brain ridges, a spinal neck-guard, and octopus-like tentacles.",
    benefit:
      "You can cast the detect thoughts spell (pg. 58) three times per day (+4 bonus).",
  },
  {
    name: "HORNED HELM OF RAMLAAT",
    flavourText: "A bloodstained helm made of a ram's skull.",
    benefit:
      "This helm grants you a +1 bonus to your armor class. You have advantage on any check you make to knock down creatures or objects.",
    curse: "You feel compelled to headbutt delicate objects.",
  },
  {
    name: "HOURGLASS OF THE BLACK SANDS",
    flavourText: "An ancient hourglass running with obsidian sand.",
    benefit:
      "Once per day, you can turn the hourglass when you cast a spell. The spell's effects last 1d4 rounds longer.",
  },
  {
    name: "IMMOVABLE ROD",
    flavourText: "A short, iron rod with a button on one end.",
    benefit:
      "When you click the button, the rod becomes fixed in space (holds 5,000 lbs). Clicking the button again ends the effect.",
  },
  {
    name: "JEWEL OF BARBALT",
    flavourText: "A coconut-sized ruby cut with a thousand facets.",
    benefit: "You roll a critical success on an 18-20.",
    curse: "You roll a critical failure on a 1-3.",
  },
  {
    name: "KYTHERIAN COG",
    flavourText: "A coin-sized, toothed wheel buffed to a silvery shine.",
    benefit: "You start every session with a luck token.",
  },
  {
    name: "LONGBOW OF THE ELVEN KINGS",
    flavourText: "A deeply curved longbow with deer antler reinforcements.",
    benefit:
      "You have advantage on attacks with this bow against unnatural creatures and outsiders.",
    personality:
      "Neutral. Proud, timeless. Believes protecting the natural order is the highest calling. Demands all unnatural creatures be found and slain.",
  },
  {
    name: "MAGIC INK",
    flavourText: "A pot of glossy, black ink that disappears as it dries.",
    benefit:
      "The ink's writing is invisible when cool and can only be seen when warmed up by a nearby source of strong heat. There's enough for 1d4 uses.",
  },
  {
    name: "MEMNON'S BLAZING JAVELIN",
    flavourText:
      "This golden javelin occasionally blinks and wavers, briefly turning into a bolt of lightning.",
    bonus:
      "+1 javelin. Can only be wielded by a chaotic being. If you also wield Memnon's Discordant Blade and Memnon's Entropic Armor, it becomes a +3 javelin.",
    benefit:
      "The javelin always returns to your hand after being thrown. Once per day, when you throw this javelin, you can turn it into lightning as per the lightning bolt spell (no spellcasting check).",
  },
  {
    name: "MEMNON'S DISCORDANT BLADE",
    flavourText:
      "This barbed greatsword's red blade trails a shower of sparks when swung to strike.",
    bonus:
      "+1 greatsword. Can only be wielded by a chaotic being. If you also wield Memnon's Entropic Armor and Memnon's Blazing Javelin, it becomes a +3 greatsword.",
    benefit:
      "Once per day, you can utterly annihilate one creature of level 9 or less that you damage with this blade. The creature can pass a DC 18 Constitution check to take 3d8 damage instead.",
    curse:
      "You cannot relinquish ownership of this blade unless it is taken from you by a creature that defeats you in combat.\n\nFor each day you do not slay a LV 2 or greater creature with this sword, you lose 1d6 hit points. These are restored only when you kill a LV 2 or greater creature with the sword.",
  },
  {
    name: "MEMNON'S ENTROPIC ARMOR",
    flavourText:
      "Deep blue plate mail traced with gold lightning motifs and red gems arrayed into the shape of flames.",
    bonus:
      "+1 plate mail. Can only be worn by a chaotic being. If you also wield Memnon's Discordant Blade and Memnon's Blazing Javelin, it becomes +3 plate mail.",
    benefit:
      "Once per day, you can speak the armor's command word. Until your next turn, all non-magical weapons that strike you are instantly unmade, shattering into dust. You take no damage from them.",
  },
  {
    name: "MIRROR OF MISCHIEF",
    flavourText:
      "A full-length mirror polished to a gleaming shine. Grinning, silver demons grasp the mirror, their claws forming its frame.",
    curse:
      "The first time a humanoid creature looks into this mirror, the mirror creates an evil and malicious duplicate of them.\n\nThe duplicate can step from the mirror and is an exact copy of the subject (except for magical gear, which looks identical but is mundane in nature).\n\nThe evil duplicate can live indefinitely outside the mirror. It attempts to sow chaos in the life of the creature it duplicated.",
  },
  {
    name: "MOONWROUGHT CHAINMAIL",
    flavourText:
      "A luminous jacket of chainmail as lightweight as a silk shirt.",
    bonus: "+1 mithral chainmail.",
    benefit:
      "Once per day, you can speak the armor's command word. You gain a +1 bonus to your next spellcasting check or ranged attack.",
  },
  {
    name: "NECKLACE OF CHARM",
    flavourText: "A gold, fishbone chain that shimmers with subtle beauty.",
    benefit: "Your Charisma stat becomes 18 (+4) while wearing this necklace.",
  },
  {
    name: "NECROTIC MACE OF WITHERING",
    flavourText:
      "A wrought iron mace tipped with a heavy, screaming skull. Black ichor runs from the skull's eyes when the mace is used to channel necrotic energy.",
    bonus: "+1 mace. Can only be wielded by a chaotic priest.",
    benefit:
      "While holding the mace, you can turn cure wounds spells you cast into harmful magic that instead inflicts the same amount of damage it would heal.",
    curse:
      "If you use the mace to cast an inverted cure wounds spell, you are haunted by nightmares that night. You must pass a DC 12 Wisdom check during your next rest or gain no benefit from resting.",
  },
  {
    name: "NIGHTCLOAK ARMOR",
    flavourText: "Matte black leathers enchanted to deepen and darken shadows.",
    bonus: "+1 leather armor.",
    benefit:
      "Once per day, you may choose to automatically pass a Dexterity check to hide.",
  },
  {
    name: "OBSIDIAN WITCHKNIFE",
    flavourText:
      "A glinting, obsidian blade that trails black smoke in thin curls.",
    bonus: "+2 dagger. Cannot be wielded by a lawful being.",
    benefit:
      "When you cast a spell while holding this dagger, you may wound yourself with it. Add the amount of damage you take to your spellcasting check.",
  },
  {
    name: "ONYX DESTRIER",
    flavourText: "A polished, ebony statuette of a running horse.",
    benefit:
      "Once per day, the wielder can speak the command word to turn the statuette into a nightmare that accepts neutral or chaotic riders. The statuette remains in this form for 1 hour.",
  },
  {
    name: "OPHIDIAN ARMOR",
    flavourText: "Glistening, smooth leather of dappled emerald scales.",
    bonus: "+1 leather armor.",
    benefit: "You have advantage on checks to avoid the effects of poison.",
  },
  {
    name: "PEARL OF POWER",
    flavourText: "A fat, opalescent pearl glowing with an inner radiance.",
    benefit:
      "Once per day, you may regain the ability to cast a spell you have lost. This cannot restore a spell lost due to a critical spellcasting failure.",
  },
  {
    name: "PIPE OF THE ROLLING HILLS",
    flavourText: "A long, curved pipe that smells of cloves and resin.",
    benefit:
      "Up to three times per day, regain 1d4 hit points when you smoke this pipe.",
  },
  {
    name: "PIPES OF THE SEWERS",
    flavourText: "A set of tarnished, brass pan pipes with seven cylinders.",
    benefit:
      "Once per day, you can play these pipes to summon 2d6 giant rats. The rats obey you for d6 rounds, and then they scatter and flee.",
    curse:
      "If you stop playing while the rats are present, they turn on you and attack.",
  },
  {
    name: "PORTABLE HOLE",
    flavourText:
      "A black, velvet square of cloth that unfolds into a wide circle.",
    benefit:
      "The Portable Hole folds open on a flat surface into a 6-foot wide, 6-foot deep hole. It has 20 gear slots of storage. The hole closes when you fold the cloth into a small square.",
    curse:
      "Placing this item inside a Bag of Holding or another Portable Hole destroys both items and all held inside them.",
  },
  {
    name: "POTION OF EXTIRPATION",
    flavourText:
      "An acrid, tarry substance in an iron flask with a lead stopper.",
    benefit:
      "You can pour the potion on one object or creature filling up to a close area. The target is utterly removed from reality and cannot be returned by anything short of a wish spell.",
    personality:
      "Chaotic. Protests loudly while being used and never agrees that the target is the right choice for extirpation.",
  },
  {
    name: "POTION OF FLYING",
    flavourText:
      "A sunny liquid with bubbles that flash and pop like tiny stars.",
    benefit:
      "You can fly a near distance for 10 rounds when you drink this potion.",
  },
  {
    name: "POTION OF FORGETFULNESS",
    flavourText: "A pink draught that swirls with a counter-clockwise current.",
    benefit:
      "If you serve this potion to an intelligent being and that being drinks it, the imbiber permanently forgets one memory of your choosing.",
  },
  {
    name: "POTION OF GIANT STRENGTH",
    flavourText: "A clay jar holding a stew of green, leafy sludge.",
    benefit:
      "Your Strength becomes 18 (+4) and you deal x2 damage on melee attacks for 10 rounds.",
  },
  {
    name: "POTION OF HEALING",
    flavourText: "A glass bottle with a fizzy, lemon-vanilla liquid inside.",
    benefit:
      "The imbiber of this potion regains hit points based on their level.\n\nLV 0-3: 1d6 hit points. \nLV 4-6: 2d8 hit points. \nLV 7-9: 3d10 hit points. \nLV 10+: 4d12 hit points.",
  },
  {
    name: "POTION OF INVISIBILITY",
    flavourText:
      "This glass vial appears to be empty, but a liquid audibly splashes around inside it.",
    benefit:
      "When you drink this potion, you become invisible for 10 rounds or until you attack or cast a spell.",
  },
  {
    name: "POTION OF LEGENDARY DEEDS",
    flavourText: "A golden elixir that resonates with a faint, angelic chord.",
    benefit:
      "When you drink this potion, you gain one level and your XP total resets to zero.",
  },
  {
    name: "POTION OF POLYMORPH",
    flavourText:
      "A pickled newt floats in this lavender flask of clear liquid.",
    benefit:
      "When you drink this potion, it casts the polymorph spell (pg. 67) on you with a duration of 1 hour instead of 10 rounds.",
  },
  {
    name: "POTION OF VITALITY",
    flavourText: "A crimson elixir that gently thumps with a heartbeat.",
    benefit:
      "When you drink this potion, roll your class's hit points die. You permanently gain that many HP.",
    curse:
      "If you drink more than one Potion of Vitality in your lifetime, you must pass a DC 18 Constitution check each time or die instantly.",
  },
  {
    name: "RING OF FEATHER FALLING",
    flavourText: "A pearly ring carved in the likeness of an owl feather.",
    benefit:
      "Once per day, the ring can cast feather fall (pg. 60) on you when you fall.",
    personality:
      "Neutral. Fearful of heights. Mentally hoots in an owl-like voice to stay away from the edge of cliffs and pits.",
  },
  {
    name: "RING OF FIREBALLS",
    flavourText:
      "A bronze loop with claws holding a red marble. A fiery miasma swirls inside the glass.",
    benefit:
      "You can pluck the glass marble from the ring and throw it up to a far distance, causing a fireball spell (pg. 60) to bloom at the site of impact.\n\nThe glass marble regrows after you successfully complete a rest.",
  },
  {
    name: "RING OF INVISIBILITY",
    flavourText: "A simple, gold band polished to a warm shine.",
    benefit:
      "Once per day, the ring can cast the invisibility spell (pg. 63) on you.",
    curse:
      "There is a cumulative 1% chance each time you rest that your sleep is ruined by apocalyptic nightmares, and you gain no benefit from resting. This resets to a 1% chance each time it triggers.",
  },
  {
    name: "RING OF RAMLAAT",
    flavourText:
      "A bone-carved ring with a ram skull. Its horns twist forward and red lights glow in its eye sockets.",
    benefit:
      "Once per day, you can enter a rage where you deal double damage for 5 rounds. During the rage, you can't cast spells and enemies have advantage on melee attacks against you.",
    personality:
      "Chaotic. Aggressive, overconfident. Seeks to provoke you and your enemies into battle.",
  },
  {
    name: "ROBE OF THE ARCHMAGE",
    flavourText:
      "A red silk robe with a wide, gold- hemmed mantle. Golden eyes and moons dust its sleeves.",
    benefit:
      "Only a wizard with the Archmage title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nChoose three spells you know. Their spellcasting DC is always 11.\n\nYou have advantage on casting the disintegrate spell.",
  },
  {
    name: "ROBE OF THE DRUID",
    flavourText:
      "A green velvet robe with a deep hood and hems embroidered with silver leaves and vines.",
    benefit:
      "Only a wizard with the Druid title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nTwice per day, you can regain the ability to cast one lost spell.\n\nYou have advantage on casting the shapechange spell. When you cast it, its duration is 1 hour instead of focus.",
  },
  {
    name: "ROBE OF THE SORCERER",
    flavourText:
      "A black leather robe with a shadowed cowl and clawed clasps on thin, mithral chains.",
    benefit:
      "Only a wizard with the Sorcerer title can wear this robe.\n\nYour unarmored AC becomes 15 plus your Dexterity modifier.\n\nWhen you cast a spell that deals damage, add your Intelligence modifier to the total.\n\nYou have advantage on casting the power word kill spell.",
  },
  {
    name: "SCARAB OF PROTECTION",
    flavourText: "A brooch made from a horned scarab beetle dipped in gold.",
    benefit:
      "If you die, make a DC 18 Constitution check. If you succeed, you are unconscious instead of dead.",
  },
  {
    name: "SCIMITAR OF THE ASH MOON",
    flavourText:
      "This wide, curved blade has a snarling efreeti head on the bronze pommel.",
    bonus: "+3 greatsword.",
    benefit:
      "If you roll a critical hit with this weapon, the target is beheaded. It dies instantly if decapitation would kill it.",
  },
  {
    name: "SHIELD OF THE CRUSADER",
    flavourText: "A weighty kite shield painted with a faded, crimson cross.",
    bonus: "+1 shield. Can only be wielded by a lawful being.",
    benefit:
      "Once per day, you can speak a prayer to wreathe the shield in holy flames, granting +2 to your AC for 3 rounds.",
  },
  {
    name: "SHIELD OF THE LION",
    flavourText:
      "This shield is carved as a roaring lion's face with a flowing mane.",
    bonus: "+1 shield.",
    benefit:
      "Once per day, you can command the lion to animate and bellow a ferocious roar. All hostile creatures within near range must immediately make a morale check.",
  },
  {
    name: "SHIELD OF THE WITCH-KING",
    flavourText: "A jagged triangle of black steel with spiny, armored plates.",
    bonus: "+2 shield. Can only be wielded by a chaotic being.",
    benefit: "You take half damage from undead creatures.",
    curse:
      "If you go to 0 HP, the spirit of Ix-Natheer tries to steal your body. He blocks healing magic from affecting you. If you die, Ix-Natheer possesses you.",
    personality:
      "Chaotic. The spirit of the witch-king Ix-Natheer animates this shield. He pounces on opportunities to betray his wielder so he can try to take over their body and return to unlife.",
  },
  {
    name: "SHORTSWORD OF THE THIEF",
    flavourText: "A stubby, gray blade riddled with notches and scars.",
    bonus: "+1 shortsword. +2 if wielded by a halfling or thief.",
    benefit: "Once per day, regain a luck token you just spent.",
  },
  {
    name: "SILVER MACE OF WRATH",
    flavourText:
      "A tarnished, silver mace with seven flanges in the shape of crescent moons.",
    bonus: "+1 mace.",
    benefit:
      "This weapon deals double damage against creatures with lycanthropy.",
  },
  {
    name: "SPHERE OF ANNIHILATION",
    flavourText:
      "A three-foot, spherical void of pure darkness that hovers above the ground.",
    benefit:
      "This sphere utterly destroys all matter it touches.\n\nIntelligent beings can move the flying sphere a near distance by passing a DC 18 Intelligence check. If multiple creatures vie for control of the sphere, it is a contested Intelligence check instead. Wizards have advantage on this check. The winner moves the sphere a near distance.\n\nIf the sphere moves into a space occupied by a creature, the being controlling the sphere makes an attack roll against that creature with a +7 bonus. On a hit, the creature is obliterated.",
  },
  {
    name: "SPYGLASS OF TRUE SIGHT",
    flavourText: "A brass, telescoping lens with magical runes carved on it.",
    benefit:
      "When you look through the spyglass, you can see invisible creatures and objects.",
    curse:
      "The wielder feels a compulsion to look at everything through the spyglass.",
  },
  {
    name: "STAFF OF HEALING",
    flavourText: "A knotted, oak stave with a heavy knurl on one end.",
    bonus: "+1 staff.",
    benefit:
      "Once per day, you can touch a creature with the staff to heal it for 1d6 hit points.",
  },
  {
    name: "STAFF OF ORD",
    flavourText:
      "A tapered, mithral staff that resonates with arcane power. The tip features an upward- looking eye in a circle of runes.",
    bonus: "+3 staff. Can only be wielded by a wizard.",
    benefit:
      "Functions as a wand of dimension door (pg. 59), fireball (pg. 60), sending (pg. 70), and telekinesis (pg. 72).\n\nUnlike a wand, the staff remains intact if you roll a 1 on your spellcasting checks.\n\nHostile spells targeting you are DC 18 to cast.",
  },
  {
    name: "STAFF OF THE COBRA",
    flavourText:
      "A curved scepter tipped with a ruby-eyed, flaring cobra head.",
    bonus: "+1 staff.",
    benefit:
      "All snakes regard you with a friendly attitude unless you do something to upset them.\n\nOnce per day, you can throw the staff to the ground. It becomes a giant snake for 5 rounds that obeys your mental commands. If the giant snake goes to 0 HP, it reverts into a staff.",
    curse:
      "You have disadvantage on attacks and casting hostile spells targeting snakes.",
  },
  {
    name: "SWORD OF THE ANCIENTS",
    flavourText: "A chipped and rusting blade with an oiled leather grip.",
    bonus: "+2 longsword.",
    benefit:
      "The sword is unbreakable and can carve through any material.\n\nThe owner can summon the sword to their hand if it's on the same plane.",
  },
  {
    name: "THE KYTHERIAN MECHANISM",
    flavourText:
      "A towering, brass platform mounted with countless cogs and gears speckled in blue- green rust.",
    benefit:
      "A handle turns The Kytherian Mechanism's mighty wheels, but it doesn't function until its seven missing Kytherian Cogs are replaced.\n\nOnce functional, activating the mechanism allows the operator to undo one event of their choosing from history. Then, the seven Kytherian Cogs magically scatter to far-flung locations.",
  },
  {
    name: "THE MALEDICTION INFERNAL",
    flavourText:
      "A black, leatherbound tome with a grinning demon face embossed on the cover.",
    benefit:
      "A chaotic being who reads this tome gains a level and learns the Diabolic language.\n\nA non-chaotic being who reads this book must pass a DC 18 Wisdom check or lose one level.\n\nAfter being read, the tome teleports to a far-flung location.",
  },
  {
    name: "THRICE-BLESSED SWORD",
    flavourText:
      "A lustrous, golden-handled blade anointed with blessed tears, incense, and prayers.",
    bonus:
      "+3 longsword. Only a lawful priest who has achieved the Templar title or higher can wield this sword.",
    benefit: "You deal double damage against demons, devils, and undead.",
    personality:
      "Lawful. Virtuous, naive. Refuses to be wielded against worshippers of lawful gods, especially self-proclaimed converts. Demands each foe be given the chance to convert before being slain.",
  },
  {
    name: "TOME MORDANTICUS",
    flavourText:
      "A hand-drawn bestiary of the multiverse's most notable creatures and people.",
    benefit:
      "When you read the tome, you learn three True Names (pg. 319) of three beings you choose.\n\nYour True Name also appears in the book after reading it.",
    personality:
      "Neutral. Pedantic, fussy. The book constantly tries to escape its owner and can telepathically reach out a near distance to any creature.",
  },
  {
    name: "TOME OF GEHEMNA",
    flavourText:
      "A sturdy, russet volume held by metal clasps. A golden eye in a circle adorns the cover.",
    benefit:
      "Each day, a random wizard spell scroll appears inside the tome, replacing the spell scroll from the prior day.",
    personality:
      "Neutral. Instructive, technical. Drones on about the obscure points of spellcasting and has an opinion on every wizard's technique.",
  },
  {
    name: "TOME OF HADEBE",
    flavourText: "A brass-plated book with pages of etched copper leaf.",
    benefit:
      "The tome contains one each of the following scrolls: burning hands (pg. 56), fireball (pg. 60), and prismatic orb (pg. 67).",
  },
  {
    name: "TRIDENT OF THE SEAS",
    flavourText: "A three-pronged, mithral harpoon studded with pearls.",
    bonus: "+2 spear.",
    benefit:
      "You can breathe underwater, as well as speak to and understand wild sea creatures.\n\nOnce per day, you can cast control water (pg. 57) with a +4 bonus.",
  },
  {
    name: "TRUE NAME",
    flavourText:
      "The secret, unique name borne by a creature and documented in The Covenant. Few creatures know their own True Names.",
    benefit:
      " You have advantage on attack rolls and spellcasting checks targeting a creature whose True Name you utter.",
  },
  {
    name: "WAND OF UNLIFE",
    flavourText:
      "The knobby finger-bone of a swamp troll steeped in acrid embalming fluid.",
    benefit:
      "This wand contains the spells animate dead (pg. 54) and create undead (pg. 58).",
    curse:
      "Each time you use the wand to cast a spell, you take 1d4 points of Constitution damage. If you reach 0 Constitution from this effect, you die and turn into a zombie.",
  },
  {
    name: "WAND OF WARDING",
    flavourText:
      "A thin, weighty rod of dark iron inscribed with spiraling runes.",
    benefit:
      "This wand contains the spells dispel magic (pg. 59) and protection from energy (pg. 68).",
    curse:
      "Each time you fail a spellcasting check with this wand, you also lose the ability to cast a random spell you know until you complete a rest.",
  },
  {
    name: "WAR HORN OF THE ANGELS",
    flavourText: "An opalescent ox horn capped with a golden mouthpiece.",
    benefit:
      "Only a lawful being can wield the horn. Once per day, you can blow the horn to cast rebuke unholy (pg. 69) with an +4 bonus.\n\nA demon or devil who hears the horn has disadvantage on its Charisma check vs. your rebuke unholy spellcasting check.",
  },
  {
    name: "WARHAMMER OF THE DWARF LORDS",
    flavourText:
      "A boxy hammer with a stout handle and leather throwing strap. It hums with a baritone resonance when spun.",
    bonus: "+1 warhammer. +2 if wielded by a dwarf.",
    benefit:
      "This weapon has the thrown property (pg. 37) to a near distance. It always returns to your hand after being thrown.\n\nYour attacks with this weapon deal double damage against giants.",
  },
  {
    name: "WELL OF MANY WORLDS",
    flavourText:
      "A dark circle of cloth that seems to create a tunnel through the surface it lies upon.",
    benefit:
      "The Well of Many Worlds folds open on a flat surface into a 6-foot wide hole. Creatures can jump into the hole once per day each to be transported to a random plane of existence.",
  },
  {
    name: "WRAITH CHAIN",
    flavourText:
      "A chainmail shirt of black, mithral links that trails a long cloak of writhing shadows.",
    bonus: "+1 mithral chainmail.",
    benefit:
      "Once per day, you may cause an attack that hits you to miss instead.",
  },
];
