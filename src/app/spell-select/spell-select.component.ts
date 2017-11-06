import { Component, OnInit,Input } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {NgbModule,ModalDismissReasons,NgbModal} from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-spell-select',
  templateUrl: './spell-select.component.html',
  styleUrls: ['./spell-select.component.css'],
})
export class SpellSelectComponent implements OnInit {

@Input() classChosen;
spellInfo;

cantripsArr = [];
maxCantrips;
spellsArr = [];
maxSpells;
description;
doneLoading;

selectedCantrips = [];
selectedSpells = [];

closeResult: string;

  constructor(private http: Http, private modalService: NgbModal) { }
  ngOnInit() {
    if (this.classChosen.name == "Bard"){
      this.maxCantrips = 2;
      this.maxSpells = 4;
      this.cantripsArr = ["Dancing Lights", "Light", "Mage Hand", "Mending", "Message", "Minor Illusion", "Prestidigitation", "Thunderclap", "True Strike", "Vicious Mockery"];

      this.spellsArr = ["Bane","Charm Person","Comprehend Languages","Cure Wounds","Detect Magic","Disguise Self","Faerie Fire","Feather Fall","Healing Word","Longstrider","Silent Image","Sleep","Speak with Animals","Thunderwave","Unseen Servant"];

    } else if (this.classChosen.name =="Cleric"){
      this.maxCantrips = 3;
      this.cantripsArr = ["Guidance", "Sacred Flame", "Light", "Mending", "Spare the Dying", "Thaumaturgy", "Mending", "Resistance"];

    } else if (this.classChosen.name == "Druid"){
      this.maxCantrips = 2;
      this.cantripsArr = ["Guidance", "Druidcraft", "Produce Flame", "Mending", "Resistance", "Shillelagh", "Mending", "Poison Spray"];

    } else if (this.classChosen.name == "Sorcerer"){
      this.maxCantrips = 4;
      this.maxSpells = 2;
      this.cantripsArr = ["Acid Splash","Chill Touch","Dancing Lights","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];

      this.spellsArr = ["Burning Hands","Charm Person","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Fog Cloud","Jump","Mage Armor","Magic Missile","Shield","Silent Image","Sleep","Thunderwave"];

    } else if (this.classChosen.name == "Warlock"){
      this.maxSpells = 2;
      this.maxCantrips = 2;
      this.cantripsArr = ["Chill Touch","Eldritch Blast","Mage Hand","Minor Illusion","Poison Spray","Prestidigitation","True Strike"];

      this.spellsArr = ["Charm Person","Comprehend Languages","Expeditious Retreat","Hellish Rebuke","Illusory Script","Protection from Evil and Good","Unseen Servant"];

    } else if(this.classChosen.name =="Wizard"){
      this.maxCantrips = 3;
      this.maxSpells = 6;
      this.cantripsArr=["Acid Splash","Chill Touch","Dancing Lights","Light","Mage Hand","Mending","Message","Minor Illusion","Poison Spray","Prestidigitation","Ray of Frost","Shocking Grasp","True Strike"];

      this.spellsArr = ["Alarm","Burning Hands","Charm Person","Color Spray","Comprehend Languages","Detect Magic","Disguise Self","Expeditious Retreat","False Life","Feather Fall","Floating Disk","Fog Cloud","Grease","Hideous Laughter","Identify","Illusory Script","Jump","Longstrider","Mage Armor","Magic Missile","Protection from Evil and Good","Shield", "Silent Image", "Sleep", "Thunderwave", "Unseen Servant"];
    }
  }
  open(content) {
      this.modalService.open(content).result.then((result) => {
        this.closeResult = `Closed with: ${result}`;
      }, (reason) => {
        this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
      });
    }
    private getDismissReason(reason: any): string {
   if (reason === ModalDismissReasons.ESC) {
     return 'by pressing ESC';
   } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
     return 'by clicking on a backdrop';
   } else {
     return  `with: ${reason}`;
   }
 }
  showDescription(clickedSpell, content){
    this.doneLoading = false;
    this.getDescription(clickedSpell).subscribe(
      description => {
        this.description = description;
      },
      description => {
        console.log("ERROR: ",description);
      },
      () => {
        this.getDetails(this.description.results[0].url).subscribe(
          description => {
            this.description = description;
          },
          description => {
            console.log("ERROR: ",description);
          },
          () => {
            this.doneLoading = true;
            this.open(content);
            //console.log(this.description);
          }
        );
      }
    );
  }

  getDescription(clickedSpell){
  //  console.log('http://www.dnd5eapi.co/api/spells?name=' + clickedSpell);
    return this.http.get('http://www.dnd5eapi.co/api/spells?name=' + clickedSpell)
    .map(this.extractData);
  }

  getDetails(url){
    return this.http.get(url)
    .map(this.extractData);
  }

  private extractData(res: Response){
  return res.json();
  //return body.data || { };
  }

  btnStyle(spell){
    if (this.selectedCantrips.includes(spell) || this.selectedSpells.includes(spell)){
      return "card btn selected";
    } else {
      return "card btn not-selected";
    }
  }


  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }

  selectCantrip(cantrip, index){

    if (!this.selectedCantrips.includes(cantrip) && this.selectedCantrips.length < this.maxCantrips){
        this.selectedCantrips.push(cantrip)
    } else {
      for (let i = 0; i < this.selectedCantrips.length; i++) {
          if (cantrip == this.selectedCantrips[i]){
            this.selectedCantrips.splice(i, 1);
          }
      }

    }
  }
  
  selectSpell(spell){
    if (!this.selectedSpells.includes(spell) && this.selectedSpells.length < this.maxSpells){
        this.selectedSpells.push(spell)
    } else {
      for (let i = 0; i < this.selectedSpells.length; i++) {
          if (spell == this.selectedSpells[i]){
            this.selectedSpells.splice(i, 1);
          }
      }
    }
  }


}
