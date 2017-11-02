import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CharacterService } from '../character.service';

@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-select.component.css'],
  providers:[CharacterService]
})
export class ClassSelectComponent implements OnInit {
  @Output() showQuizSender = new EventEmitter();
  @Output() raceChosenSender = new EventEmitter();
  allClasses;
  classSelected;
  classChosen;
  attributes;
  doneLoading = false;
  classArr = [];
  constructor(private characterService : CharacterService) { }

  ngOnInit() {

    this.characterService.getClasses().subscribe(
      classes => {
        this.allClasses = classes;
      },
      classes => {
        console.log("ERROR: ",classes);
      },
      () => {
        //    console.log("Completed");
        this.characterService.setClasses(this.allClasses);
        let that = this;
        this.classArr = Object.keys(that.allClasses.results).map(function(key){
          let newClass = {name: that.allClasses.results[key].name, url: that.allClasses.results[key].url};
          return newClass;
        });
        console.log(this.classArr);
        this.classSelected = this.classArr[0];
        this.doneLoading = true;
      }
    );
  }

  selectClass(classClicked){
    this.classSelected = classClicked;
  }
  showQuiz() {
    this.showQuizSender.emit();
  }

  unchooseCharacter(){
    console.log("test");
    this.classChosen = null;
  }

  chooseClass(){
    this.characterService.getSelectedClass(this.classSelected.url).subscribe(
      classChosen => {
        this.classChosen = classChosen;
      },
      classChosen => {
        console.log("ERROR: ",classChosen);
      },
      () => {
        this.characterService.setSelectedClass(this.classChosen);
      }
    );
  }

  chooseRace(charData){
    this.raceChosenSender.emit(charData);
  }

}
