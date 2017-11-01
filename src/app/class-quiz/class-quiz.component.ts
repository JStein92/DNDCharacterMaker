import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class-quiz',
  templateUrl: './class-quiz.component.html',
  styleUrls: ['./class-quiz.component.css']
})
export class ClassQuizComponent implements OnInit {

  barbarianPoints = {name: "Barbarian", points: 0};
  bardPoints = {name: "Bard", points: 0};
  druidPoints = {name: "Druid", points: 0};
  clericPoints = {name: "Cleric", points: 0};
  fighterPoints= {name: "Fighter", points: 0};
  monkPoints = {name: "Monk", points: 0};
  paladinPoints = {name: "Paladin", points: 0};
  rangerPoints = {name: "Ranger", points: 0};
  roguePoints = {name: "Rogue", points: 0};
  sorcererPoints = {name: "Sorcerer", points: 0};
  warlockPoints = {name: "Warlock", points: 0};
  wizardPoints = {name: "Wizard", points: 0};

  pointsArr = [this.barbarianPoints, this.bardPoints, this.druidPoints,this.clericPoints, this.fighterPoints,this.monkPoints,this.paladinPoints,this.rangerPoints,this.roguePoints,this.sorcererPoints,this.warlockPoints,this.wizardPoints]

  currentQuestionNumber = 0;

  selectedChoice = null;

  quizQuestion1 = {
    title: "You are lounging in a tavern when a skeleton kicks down the door and demands a glass of the barkeep's finest ale. What do you do?",
    choices: [
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Unsheath your blade and fight!", points:[this.barbarianPoints, this.fighterPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Blast it with a nasty spell", points:[this.warlockPoints, this.wizardPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Throw a bottle to distract it and sneak out the window", points:[this.roguePoints,this.roguePoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Call upon your dog companion to bite it's leg", points:[this.rangerPoints, this.druidPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Say a prayer and smite the unholy creature", points:[this.clericPoints, this.paladinPoints]},
      {image:  "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Break out into song to inspire the bar's patrons to fight back", points:[this.bardPoints,this.bardPoints]},
        ]
  }

  quizQuestion2 = {
    title: "While walking through the busy city streets of Wintervale, a large caravan overturns and crashes on top of a halfling, pinning him to the dirt ground. What do you do?",
    choices: [
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Pick the pockets of the distracted pedestrians, then consider helping", points:[this.roguePoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Call upon the power of Cthulu and summon tentacles to lift the cart", points:[this.warlockPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Grab a nearby piece of wood and use your strength pry up the cart", points:[this.fighterPoints,this.barbarianPoints, this.paladinPoints]},
      {image:  "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Play a song for the dying halfling", points:[this.bardPoints,this.bardPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Search for a weak point in the cart, and punch it just right, shattering the cart and freeing the halfling", points:[this.monkPoints, this.monkPoints]},
      {image: "https://highteadreams.files.wordpress.com/2016/03/jason-and-the-argonauts-skeleton-battle.jpg?w=620", caption:"Cast a healing spell to keep the halfling alive while others lift the cart", points:[this.clericPoints]}
        ]
  }

  questions = [this.quizQuestion1, this.quizQuestion2];
  currentQuestion = this.questions[this.currentQuestionNumber];

  showResult = false;
  resultText;
  constructor() { }

  ngOnInit() {

  }

  cardClass(choice){
    if (choice == this.selectedChoice){
      return "card choice-card selected-choice";
    } else {
      return "card choice-card";

    }
  }

  select(choice){
    this.selectedChoice = choice;
  }

  addPoints(){
    console.log(this.selectedChoice);
    for (let i = 0; i < this.selectedChoice.points.length; i++) {
        this.selectedChoice.points[i].points ++;
    }
    this.currentQuestionNumber ++;
    this.currentQuestion = this.questions[this.currentQuestionNumber];
    this.selectedChoice = null;
  }

  findResults(){
    this.showResult= true;
    this.pointsArr.sort(function(a,b){
      return b.points - a.points;
    });
    this.resultText = this.pointsArr[0].name;
  }

}
