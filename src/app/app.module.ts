import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { ClassSelectComponent } from './class-select/class-select.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClassQuizComponent } from './class-quiz/class-quiz.component';
import { ProficiencySelectComponent } from './proficiency-select/proficiency-select.component';
import { RaceSelectComponent } from './race-select/race-select.component';
import { CharacterSheetComponent } from './character-sheet/character-sheet.component';
import { masterFirebaseConfig } from './api-keys';
import { SpellSelectComponent } from './spell-select/spell-select.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket
};

@NgModule({
  declarations: [
    AppComponent,
    ClassSelectComponent,
    WelcomeComponent,
    ClassQuizComponent,
    ProficiencySelectComponent,
    RaceSelectComponent,
    CharacterSheetComponent,
    SpellSelectComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
