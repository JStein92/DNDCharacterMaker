import { Component, OnInit, Input } from '@angular/core';
import { CharacterService } from '../character.service';
@Component({
  selector: 'app-character-sheet',
  templateUrl: './character-sheet.component.html',
  styleUrls: ['./character-sheet.component.css'],
  providers: [CharacterService]
})
export class CharacterSheetComponent implements OnInit {

  constructor(private characterService : CharacterService) { }

  ngOnInit() {


  }

}
