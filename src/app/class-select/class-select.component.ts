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
  @Output() chooseClassSender = new EventEmitter();
  @Output () unchooseClassSender = new EventEmitter();
  @Output() showQuizSender = new EventEmitter();
  @Output() proficienciesChosenSender = new EventEmitter();

  attributes;
  classSelected;

  constructor() { }

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

  chooseRace(chosenProficiencies){
    this.proficienciesChosenSender.emit(chosenProficiencies);
  }

}
