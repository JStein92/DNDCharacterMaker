import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css'],
    providers:[CharacterService]
})
export class WelcomeComponent implements OnInit {
  showCharacterSelect = false;
    takingQuiz = false;
    showRaceSelect = false;
    charData = this.charData;
    allClasses;
    classArr = [];
    classChosen;
    doneLoading= false;
    chosenProficiencies = [];
    chosenCantrips;
    chosenSpells;
    charNameValid = false;
    characterName = "";
    charName;
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
        this.doneLoading = true;
      }
    );

  }

  chooseClass(classChosen){
    this.characterService.getSelectedClass(classChosen.url).subscribe(
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
  onKey(event: any){
    if (this.charName.length > 0){
      this.charNameValid = true;
    } else{
      this.charNameValid = false;
    }
    // console.log(this.charName)

  }

  spellsChosen(spells){
    this.chosenCantrips = spells[0];
    if (spells[1]){
      this.chosenSpells = spells[1];
    }
    this.showRaceSelect=true;

  }

  classFinished(){
    this.showRaceSelect = true;
  }

  unchooseClass(){
    this.classChosen = null;
  }

  proficienciesChosen(chosenProficiencies){
    this.chosenProficiencies = chosenProficiencies;
  }

  newCharacterBtnClick(){
    this.showCharacterSelect = true;
  }

  showQuiz(){
    this.takingQuiz = true;
  }

  leaveQuiz(){
    this.takingQuiz = false;
  }

}
