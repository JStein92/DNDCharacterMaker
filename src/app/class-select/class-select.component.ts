import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-select.component.css'],
})
export class ClassSelectComponent implements OnInit {
  @Input() allClasses;
  @Input() classArr = [];
  @Input () classChosen;
  @Input() doneLoading;
  spellsChosenBool = false;
  @Output() chooseClassSender = new EventEmitter();
  @Output () unchooseClassSender = new EventEmitter();
  @Output() showQuizSender = new EventEmitter();
  @Output() proficienciesChosenSender = new EventEmitter();
 @Output() spellsChosenSender = new EventEmitter();
 @Output() classFinishedSender = new EventEmitter();
  attributes;
  classSelected;
  proficienciesChosen = false;

  constructor() { }

  ngOnInit() {
    this.classSelected = this.classArr[0];

    for (let i = 0; i < this.classArr.length; i++) {
        if (this.classArr[i].name == "Barbarian"){
          this.classArr[i].description = "A fierce warrior of a primitive background who can enter a battle rage.";
          this.classArr[i].image = "/assets/img/barbarian.png";

        } else if (this.classArr[i].name == "Bard"){
          this.classArr[i].description = "An inspiring magician whose power echoes the music of creation.";
          this.classArr[i].image = "/assets/img/bard.png";

        }else if (this.classArr[i].name == "Cleric"){
          this.classArr[i].description = "A priestly champion who wields divine magic in service of a higher power.";
          this.classArr[i].image = "/assets/img/cleric.png";

        }else if (this.classArr[i].name == "Druid"){
          this.classArr[i].description = "A priest of the Old Faith, wielding the powers of nature.";
          this.classArr[i].image = "/assets/img/druid.png";

        }else if (this.classArr[i].name == "Fighter"){
          this.classArr[i].description = "A master of martial combat, skilled with a variety of weapons and armored.";
          this.classArr[i].image = "/assets/img/fighter.png";

        }else if (this.classArr[i].name == "Monk"){
          this.classArr[i].description = "A master of martial arts, skilled with fighting hands and martial monk weapons.";
          this.classArr[i].image = "/assets/img/monk.png";

        }else if (this.classArr[i].name == "Paladin"){
          this.classArr[i].description = "A holy warrior bound to a sacred oath.";
          this.classArr[i].image = "/assets/img/paladin.png";

        }else if (this.classArr[i].name == "Ranger"){
          this.classArr[i].description = "A master of ranged combat, one with nature.";
          this.classArr[i].image = "/assets/img/ranger.png";

        }else if (this.classArr[i].name == "Rogue"){
          this.classArr[i].description = "A scoundrel who uses stealth and trickery to overcome obstacles and enemies.";
          this.classArr[i].image = "/assets/img/rogue.png";

        }else if (this.classArr[i].name == "Sorcerer"){
          this.classArr[i].description = "A spellcaster who draws on inherent magic from a gift or bloodline.";
          this.classArr[i].image = "/assets/img/sorcerer.png";

        }else if (this.classArr[i].name == "Warlock"){
          this.classArr[i].description = "A wielder of magic that is derived from a bargain with an extraplanar entity.";
          this.classArr[i].image = "/assets/img/warlock.png";

        }else if (this.classArr[i].name == "Wizard"){
          this.classArr[i].description = "A scholarly magic-user capable of manipulating the structures of reality.";
          this.classArr[i].image = "/assets/img/wizard.png";
        }
    }

    console.log(this.classArr[0]);
  }

  unchooseProficiencies(){
    this.proficienciesChosen = false;
  }

  chooseClass(classChosen){
    this.chooseClassSender.emit(this.classSelected);
  }



  selectClass(classClicked){
    this.classSelected = classClicked;
  }

  showQuiz() {
    this.showQuizSender.emit();
  }

  unchooseCharacter(){
    this.unchooseClassSender.emit();
  }

  chooseSpells(){
    this.proficienciesChosen = true;
  }

  chooseRace(){
    this.classFinishedSender.emit();
  }

  spellsChosen(spells){
    this.spellsChosenBool = true;
    this.spellsChosenSender.emit(spells);
  }

  saveProficienciesSender(chosenProficiencies){
    this.proficienciesChosenSender.emit(chosenProficiencies);
  }

}
