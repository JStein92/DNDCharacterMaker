import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
  providers: [CharacterService]
})
export class CharacterSheetComponent implements OnInit {
  @Input() chosenClass;
  @Input() chosenProficiencies;
  @Input() chosenCantrips;
  @Input() chosenSpells;
  showCharacterSheet = false;
  constructor(private characterService : CharacterService) { }

  ngOnInit() {

  }

  countInArray(array, what) {
    return array.filter(item => item == what).length;
  }

  toggleCharacterSheet(){
    if (this.showCharacterSheet){
      this.showCharacterSheet = false;
    } else{
      this.showCharacterSheet=true;
    }
  }
}
