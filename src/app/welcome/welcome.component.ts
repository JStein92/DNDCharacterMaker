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
  constructor(private characterService : CharacterService) { }

  ngOnInit() {
  }

  newCharacterBtnClick(){
    this.showCharacterSelect = true;
  }

}
