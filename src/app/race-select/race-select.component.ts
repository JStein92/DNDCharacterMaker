import { Component, OnInit } from '@angular/core';
import {RacesClass} from '../races-class';
@Component({
  selector: 'app-race-select',
  templateUrl: './race-select.component.html',
  styleUrls: ['./race-select.component.css']
})
export class RaceSelectComponent implements OnInit {
  races = new RacesClass().races;
  selectedRace = this.races[0];
  constructor() { }

  ngOnInit() {
    console.log(this.races)
  }

  clickRace(race){
    this.selectedRace = race;
  }

}
