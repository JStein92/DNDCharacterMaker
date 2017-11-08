export class RacesClass {
  races = [{
    name: "Dragonborn",
    description: "Kin to dragons, dragonborn resemble humanoid dragons, without wings or tail and standing erect. They tend to make excellent warriors.",
    img:"/assets/img/Dragonborn.jpg",
    speed: 30,
    abilityScoreIncreases:[
      2,
      0,
      0,
      0,
      0,
      1
    ],
    feats:[{
      name: "Breath Weapon",
      type: "Attack",
      description: "You can use your action to exhale destructive energy. Your draconic ancestry determines the size, shape, and damage type of the exhalation."
    }],
    ancestry:[{
      name:"Black",
      description:"Your breath weapon deals a line of acid damage, and you have resistance to acid damage"
    },
    {
      name:"Blue",
      description:"Your breath weapon deals a line of lightning damage, and you have resistance to lightning damage"
    },
    {
      name:"Brass",
      description:"Your breath weapon deals a line of fire damage, and you have resistance to fire damage"
    },
    {
      name:"Bronze",
      description:"Your breath weapon deals a line of lightning damage, and you have resistance to lightning damage"
    },
    {
      name:"Copper",
      description:"Your breath weapon deals a line of acid damage, and you have resistance to acid damage"
    },
    {
      name:"Gold",
      description:"Your breath weapon deals a cone of fire damage, and you have resistance to fire damage"
    },
    {
      name:"Green",
      description:"Your breath weapon deals a cone of poison damage, and you have resistance to poison damage"
    },
    {
      name:"Red",
      description:"Your breath weapon deals a cone of fire damage, and you have resistance to fire damage"
    },
    {
      name:"Silver",
      description:"Your breath weapon deals a cone of cold damage, and you have resistance to cold damage"
    },
    {
      name:"White",
      description:"Your breath weapon deals a cone of cold damage, and you have resistance to cold damage"
    }],
    languages:[
      "Common",
      "Draconic"
    ]
  },
  {
    name: "Half-Orc",
    description: "Half-orcs are not evil by nature, but evil does lurk within them, whether they embrace it or rebel against it.",
    img:"/assets/img/Half-Orc.jpg",
    speed: 30,
    abilityScoreIncreases:[
      2,
      0,
      1,
      0,
      0,
      0
    ],
    feats:[{
      name: "Relentless Endurance",
      type: "Trait",
      description: "If you are ever reduced to 0 health, you drop to 1 health instead. You can use this ability again after a long rest."
    },
    {
      name: "Savage Attacks",
      type: "Trait",
      description: "On critical hits, roll another damage dice to do extra damage."
    },
    {
      name: "Darkvision",
      type: "Trait",
      description: "See in the dark for up to 60 feet."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Orc"
    ]
  },
  {
    name: "Dwarf",
    description: "Dwarves are solid and enduring like the mountains they love, weathering the passage of centuries with stoic endurance and little change.",
    img:"/assets/img/Dwarf.jpg",
    speed: 25,
    abilityScoreIncreases:[
      0,
      0,
      2,
      0,
      0,
      0
    ],
    feats:[{
      name: "Dwarven Resiliance",
      type: "Trait",
      description: "You have advantage when rolling saving throws against poison, and take half damage from poison."
    },
    {
      name: "Stonecunning",
      type: "Trait",
      description: "Your proficiency bonus is doubled when making stonework related history checks. Basically, you know a lot about the history of stonework."
    },
    {
      name: "Darkvision",
      type: "Trait",
      description: "See in the dark for up to 60 feet."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Dwarvish"
    ]
  },
  {
    name: "Elf",
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it.",
    speed: 30,
    img:"/assets/img/Elf.jpg",
    abilityScoreIncreases:[
      0,
      2,
      0,
      0,
      0,
      0
    ],
    feats:[{
      name: "Fey Ancestry",
      type: "Trait",
      description: "You have advantage when enemies attempt to charm you, and are immune to sleep magic."
    },
    {
      name: "Trance",
      type: "Trait",
      description: "Instead of sleeping for 8 hours to get a full rest, you only need to enter a trance for 4 hours."
    },
    {
      name: "Darkvision",
      type: "Trait",
      description: "See in the dark for up to 60 feet."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Elvish"
    ]
  },
  {
    name: "Gnome",
    description: "Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play.",
    speed: 25,
    img:"/assets/img/Gnome.jpg",
    abilityScoreIncreases:[
      0,
      0,
      0,
      2,
      0,
      0
    ],
    feats:[{
      name: "Gnome Cunning",
      type: "Trait",
      description: "You have advantage on intellegence, wisdom, and charisma saving throws against magic. This generally makes you harder to manipulate with magic."
    },
    {
      name: "Darkvision",
      type: "Trait",
      description: "See in the dark for up to 60 feet."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Gnomish"
    ]
  },
  {
    name: "Half-Elf",
    description: "Half-Elves are charismatic, and bear a resemblance to both their elvish and human parents, and share many traits of each.",
    img:"/assets/img/Half-Elf.jpg",
    speed: 30,
    abilityScoreIncreases:[
      0,
      0,
      0,
      0,
      0,
      2
    ],
    feats:[{
      name: "Fey Ancestry",
      type: "Trait",
      description: "You have advantage when enemies attempt to charm you, and are immune to sleep magic."
    },
    {
      name: "Darkvision",
      type: "Trait",
      description: "See in the dark for up to 60 feet."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Elvish"
    ]
  },
  {
    name: "Halfling",
    description: "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies.",
    speed: 25,
    img:"/assets/img/Halfling.jpg",
    abilityScoreIncreases:[
      0,
      2,
      0,
      0,
      0,
      0
    ],
    feats:[{
      name: "Brave",
      type: "Trait",
      description: "You have advantage on saving throws against being frightened."
    },
    {
      name: "Halfling Nimbleness",
      type: "Trait",
      description: "You can move through the space of any creature that is of a size larger than yours."
    },
    {
      name: "Lucky",
      type: "Trait",
      description: "When you roll a 1 on the d20 for an Attack roll, ability check, or saving throw, you can reroll the die and must use the new roll."
    }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Halfling"
    ]
  },
  {
    name: "Human",
    description: "Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds.",
    speed: 30,
    img:"/assets/img/Human.jpg",
    abilityScoreIncreases:[
      1,
      1,
      1,
      1,
      1,
      1
    ],
    feats:[{

    }],
    ancestry:[{
    }],
    languages:[
      "Common"
    ]
  },
  {
    name: "Tiefling",
    description: "Simultaneously more and less than mortal, tieflings are the offspring of humans and fiends. With otherworldly blood and traits to match, tieflings are often shunned and despised out of reactionary fear.",
    speed: 30,
    img:"/assets/img/Tiefling.jpg",
    abilityScoreIncreases:[
      0,
      0,
      0,
      1,
      0,
      2
    ],
    feats:[{
        name: "Darkvision",
        type: "Trait",
        description: "See in the dark for up to 60 feet."
      },
      {
        name: "Hellish Resistance",
        type: "Trait",
        description: "You have resistance to fire damage."
      },
      {
        name:"Infernal Legacy",
        type: "Attack",
        description: "You know the Thaumaturgy cantrip; you can manifest a minor wonder, a sign of supernatural power, within range. Some examples include a harmless tremor in the ground, or altering the appearance of your eyes for a minute"
      }],
    ancestry:[{
    }],
    languages:[
      "Common",
      "Infernal"
    ]
  }]
}
