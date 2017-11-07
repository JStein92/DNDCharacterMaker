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

  unchooseProficiencies(){
    this.proficienciesChosen = false;
  }

  chooseClass(classChosen){
    this.chooseClassSender.emit(this.classSelected);
  }

  ngOnInit() {
    this.classSelected = this.classArr[0];
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
