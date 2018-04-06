import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
// import { QuestionsPage } from '../questions/questions';
import { QuizPage } from '../quiz/quiz';

@IonicPage()
@Component({
  selector: 'page-test',
  templateUrl: 'test.html',
})
export class TestPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  gotoQuestioins(){
    this.navCtrl.push(QuizPage);
  }

}
