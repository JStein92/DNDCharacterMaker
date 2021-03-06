import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class CharacterService {
  allClasses;
  selectedClass;
  selectedProficiencies = [];

  constructor(private http: Http) {}

  getClasses(){
    return this.http.get('http://www.dnd5eapi.co/api/classes')
    .map(this.extractData);
  }

  getSelectedClass(url){
    return this.http.get(url)
    .map(this.extractData);
  }

  setSelectedClass(chosenClass){
    this.selectedClass = chosenClass;
  }

  setClasses(classes){
    this.allClasses = classes;
  }

  getChosenClass(){
    return this.selectedClass;
  }


  private extractData(res: Response) {

  return res.json();
  //return body.data || { };
  }

  private handleError (error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }


}
