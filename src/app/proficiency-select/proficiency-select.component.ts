import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-proficiency-select',
  templateUrl: './proficiency-select.component.html',
  styleUrls: ['./proficiency-select.component.css']
})
export class ProficiencySelectComponent implements OnInit {
@Input() classChosen;
@Output() backSender = new EventEmitter();
@Output() chooseRaceSender = new EventEmitter();

proficiencyTypes = [];

selectedProficiencyChoices = [];
secondSelectedProficiencyChoices = [];

selectedChoicesArr = [this.selectedProficiencyChoices, this.secondSelectedProficiencyChoices];

proficiencyChoicesMax;
secondProficiencyChoicesMax;
maxChoicesArr = [];
  constructor() { }

  ngOnInit() {
    this.proficiencyTypes = this.classChosen.proficiency_choices;

    this.proficiencyChoicesMax = this.proficiencyTypes[0].choose;
    if (this.proficiencyTypes[1]){
      this.secondProficiencyChoicesMax = this.proficiencyTypes[1].choose;

    }

    this.maxChoicesArr = [this.proficiencyChoicesMax, this.secondProficiencyChoicesMax];
  }

  back(){
    this.backSender.emit();
  }

  chooseRace(){
    var allSelectedProficiences = this.selectedChoicesArr[0].concat(this.selectedChoicesArr[1]);
    this.chooseRaceSender.emit(allSelectedProficiences);
  }
  proficiencyChoiceStyle(proficiencyChoice, proficiencyTypeIndex){
    if (this.selectedChoicesArr[proficiencyTypeIndex].includes(proficiencyChoice)){
      return "btn btn-info";
    } else {
      return "btn btn-warning";
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
}
