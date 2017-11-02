import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ClassSelectComponent } from './class-select/class-select.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ClassQuizComponent } from './class-quiz/class-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    ClassSelectComponent,
    WelcomeComponent,
    ClassQuizComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
