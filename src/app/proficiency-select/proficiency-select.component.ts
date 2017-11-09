import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatTooltipModule} from '@angular/material/tooltip';

@Component({
  selector: 'app-proficiency-select',
  templateUrl: './proficiency-select.component.html',
  styleUrls: ['./proficiency-select.component.css']
})
export class ProficiencySelectComponent implements OnInit {
@Input() classChosen;
@Output() backSender = new EventEmitter();
@Output() chooseRaceSender = new EventEmitter();
@Output() chooseSpellsSender = new EventEmitter();
@Output() saveProficienciesSender = new EventEmitter();
proficiencyTypes = [];

doubledProficiencies = [];
selectedProficiencyChoices = [];
secondSelectedProficiencyChoices = [];
featureArray = [];
terrains = ["Arctic", "Coast", "Desert", "Forest", "Grassland", "Mountain","Swamp"," The Underdark"];
terrainChosen;

fighterSpecialties = [{
    name: "Archery",
    description:"Increase your accuracy with ranged weapons"
  },
  {
    name: "Dueling",
    description:"Weilding a one handed weapon, like a short sword or small axe, will give you bonus damage."
  },
  {
    name: "Defense",
    description:"Wearing armor gives you even greater defense."
  },
  {
    name: "Great Weapons",
    description:"Get a better chance to do high damage when weilding two-handed weapons, like a great sword or a massive battle axe."
  },
  {
    name: "Protection",
    description:"When your allies are attacked, you can help protect them with your shield."
  },
  {
    name: "Two Weapons",
    description:"When you attack with two weapons, you do more damage."
  }];

fighterSpecialtyChosen = null;

selectedChoicesArr = [this.selectedProficiencyChoices, this.secondSelectedProficiencyChoices];

proficiencyChoicesMax;
secondProficiencyChoicesMax;
maxChoicesArr = [];
  constructor() { }

  ngOnInit() {
    this.proficiencyTypes = this.classChosen.proficiency_choices;
    for (let i = 0; i < this.proficiencyTypes[0].from.length; i++) {
        this.proficiencyTypes[0].from[i].name = this.proficiencyTypes[0].from[i].name.replace(/Skill: /, "");
    }

    this.proficiencyChoicesMax = this.proficiencyTypes[0].choose;
    if (this.proficiencyTypes[1]){
      this.secondProficiencyChoicesMax = this.proficiencyTypes[1].choose;

    }

    this.maxChoicesArr = [this.proficiencyChoicesMax, this.secondProficiencyChoicesMax];

    if (this.classChosen.name == "Barbarian"){
      this.featureArray = [{
        name:"Rage",
        description: "In battle, you fight with primal ferocity. On your turn, you can enter a rage as a Bonus Action. This makes you harder to kill, along with lots of other benifits!",
        url: "https://roll20.net/compendium/dnd5e/Barbarian#toc_4"
      },
      {
        name:"Unarmored Defense",
        description: "You do not need to wear armor to be tough in battle! If you choose to not wear armor, you get some nice bonuses.",
        url: "https://roll20.net/compendium/dnd5e/Barbarian#toc_5"
      }]
    } else if (this.classChosen.name =="Bard"){
      this.featureArray = [{
        name:"Bardic Inspiration",
        description: "You can inspire others through stirring words or music as a bonus action on your turn.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Bard#toc_4"
      }]
    } else if (this.classChosen.name =="Cleric"){
      this.featureArray = [{
        name:"Disciple of Life",
        description: "As a Cleric, your healing spells are more effective. Your allies will thank you!",
        url: "https://roll20.net/compendium/dnd5e/Classes:Cleric#toc_13"
      }]
    } else if (this.classChosen.name =="Druid"){
      this.featureArray = [{
        name:"Wild Shape",
        description: "Starting at 2nd level, you can use your action to magically assume the shape of a beast that you have seen before.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Druid#toc_6"
      }]
    } else if (this.classChosen.name =="Fighter"){
      this.featureArray = [{
        name:"Second Wind",
        description: "If you are injured, you can use this ability to regain some health in battle.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Fighter#toc_11"
      }]
    } else if (this.classChosen.name =="Monk"){
      this.featureArray = [{
        name:"Unarmored Defense",
        description: "You do not need to wear armor to be tough in battle! If you choose to not wear armor, you get some nice bonuses.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Monk#toc_4"
      },{
        name:"Martial Arts",
        description: "Your practice of martial arts gives you mastery over combat styles that use unarmed strikes and any simple melee weapons, like swords and staves.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Monk#toc_5"
      }]
    } else if (this.classChosen.name =="Paladin"){
      this.featureArray = [{
        name:"Divine Sense",
        description: "The presence of strong evil registers on your senses like a noxious odor, and powerful good rings like heavenly music in your ears. As an action, you can open your awareness to detect such forces.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Paladin#toc_4"
      },{
        name:"Lay on Hands",
        description: "Your blessed touch can heal wounds. You have a pool of Healing power that replenishes when you take a Long Rest. With that pool, you can restore allies' health.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Paladin#toc_5"
      }]
    }else if (this.classChosen.name =="Rogue"){
      this.featureArray = [{
        name:"Sneak Attack",
        description: "You know how to strike subtly and exploit a foe's distraction and do extra damage.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Rogue#toc_5"
      },{
        name:"Thieves' Cant",
        description: "During your rogue Training you learned thieves' cant, a secret mix of dialect, jargon, and code that allows you to hide messages in seemingly normal conversation. Only another creature that knows thieves' cant understands such messages. It takes four times longer to convey such a Message than it does to speak the same idea plainly.",
        url: "https://roll20.net/compendium/dnd5e/Classes:Rogue#toc_6"
      }]
    }
  }

  back(){
    this.backSender.emit();
  }

  chooseSpells(classChosen){
    this.saveSelectedProficiencies();
    this.chooseSpellsSender.emit();
  }

  saveSelectedProficiencies(){
      var allSelectedProficiences = this.selectedChoicesArr[0].concat(this.selectedChoicesArr[1]);
      if (this.classChosen.name =="Fighter"){
        allSelectedProficiences.push(this.fighterSpecialtyChosen);
      } else if (this.classChosen.name=="Ranger"){
        allSelectedProficiences.push(this.terrainChosen);
      }else if (this.classChosen.name=="Rogue"){
        allSelectedProficiences.push(this.doubledProficiencies[0]);
        allSelectedProficiences.push(this.doubledProficiencies[1]);
      } else {
        //
      }
      console.log(allSelectedProficiences);
  this.saveProficienciesSender.emit(allSelectedProficiences);
  }

  selectFighterSpecialty(specialtySelected){
    this.fighterSpecialtyChosen = specialtySelected;
  }

  selectTerrain(terrainSelected){
    this.terrainChosen = terrainSelected;
  }

  chooseRace(){
    this.saveSelectedProficiencies();
    this.chooseRaceSender.emit();
  }

  proficiencyChoiceStyle(proficiencyChoice, proficiencyTypeIndex){
    if (this.selectedChoicesArr[proficiencyTypeIndex].includes(proficiencyChoice)){
      return "inline-block proficiency-icon selected";
    } else {
      return "inline-block proficiency-icon not-selected";
    }

  }
  clickProficiencyChoice(proficiencyChoice,proficiencyTypeIndex){
    var choiceIsSelected = false;
    for (let i = 0; i < this.selectedChoicesArr[proficiencyTypeIndex].length; i++) {
        if (this.selectedChoicesArr[proficiencyTypeIndex][i]== proficiencyChoice){
          this.selectedChoicesArr[proficiencyTypeIndex].splice(i,1);
          choiceIsSelected = true;
          break;
        }
    }

    if (choiceIsSelected == false && this.selectedChoicesArr[proficiencyTypeIndex].length < this.maxChoicesArr[proficiencyTypeIndex]){
      this.selectedChoicesArr[proficiencyTypeIndex].push(proficiencyChoice);
    }

  }

  doubleProficiencyClick(proficiency){
    if (!this.doubledProficiencies.includes(proficiency) && this.doubledProficiencies.length <2){
        this.doubledProficiencies.push(proficiency);
    } else{
      for (let i = 0; i < this.doubledProficiencies.length; i++) {
          if (proficiency == this.doubledProficiencies[i]){
            this.doubledProficiencies.splice(i,1);
          }
      }
    }
    console.log(this.doubledProficiencies);

  }
  doubledProficienciesStyle(proficiency){
    if(this.doubledProficiencies.includes(proficiency)){
      return ("btn btn-success");
    } else {
      return "btn btn-info";
    }
  }
}
