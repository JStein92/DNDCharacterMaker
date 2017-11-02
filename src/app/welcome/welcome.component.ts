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
  constructor(private characterService : CharacterService) { }

  ngOnInit() {
  }
  chooseRace(charData){
    this.showRaceSelect = true;
    this.charData = charData;
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
