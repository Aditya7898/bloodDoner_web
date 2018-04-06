import { Component, ViewChild } from '@angular/core';
import { NavController, ToastController, LoadingController } from 'ionic-angular';
// import { DataProvider } from '../../providers/data/data';
import { TestProvider } from '../../providers/test/test';

import { Network } from '@ionic-native/network'; // internet connection

@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {


  //  Corret Answer Toast
  presentToast(answer: any) {
    let toast = this.toastController.create({
      message: "Correct Answer : " + answer,
      duration: 3000
    });
    toast.present();
  }

  
  @ViewChild('slides') slides: any;
  
  hasAnswered: boolean = false;
  score: number = 0;

  // / / / / / correct or false / / / / / //
  isTrue: boolean = false; 
  clicked: boolean = false;

  questions: any;
  data: any;

  slideOptions: any;
  flashCardFlipped: boolean = false;

  constructor(public navCtrl: NavController, public toastController: ToastController, 
               public dataService: TestProvider, private network: Network,
               public loadingCtrl: LoadingController) {

  }

  // check for internet 
  onTestStart(){
    let connectSubscription =  this.network.onConnect().subscribe(() => {
       console.log('network detected');
       this.toastController.create({
         message: 'Network Connected',
         duration: 2000
       }).present();
     });
     connectSubscription.unsubscribe();
 
     let disconnectSubscription =  this.network.onDisconnect().subscribe(() => {
       this.toastController.create({
         message: 'network disconnected',
         duration: 2000
       }).present();
     });
     disconnectSubscription.unsubscribe();
   }
 
  //
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');

    this.slides.lockSwipes(true);
    this.dataService.load().subscribe(data => {
        this.data = data.questions;
        this.questions = this.data;
    });
  }

  nextSlide(){
    this.slides.lockSwipes(false);
    this.slides.slideNext();
    this.slides.lockSwipes(true);

    // / / / / / correct or false / / / / / //
    this.isTrue = false;     
    this.clicked = false;
  }

  selectAnswer(answer, question){

    this.hasAnswered = true;
    answer.selected = true;
    question.flashCardFlipped = true;

    // / / / / / correct or false / / / / / /
    this.clicked = true; 
    if(answer.correct){
      this.score+=10;
      this.isTrue =  true;  
    }

    setTimeout(() => {
        this.hasAnswered = false;
        this.nextSlide();
        answer.selected = false;
        question.flashCardFlipped = false;
    }, 3000);
  }

  restartQuiz(){
    this.score = 0;
    this.slides.lockSwipes(false);
    this.slides.slideTo(1,1000);
    this.slides.lockSwipes(true);
  }

  quit(){
    this.navCtrl.pop();
  }

    // loader

    // presentLoadingDefault() {
    //   let loading = this.loadingCtrl.create({
    //     spinner: 'bubbles',
    //     content: 'Please wait..',
    //     enableBackdropDismiss: true
    //   });
    //   loading.present();
  
    //   console.log(this.questions);
  
    //   setTimeout(() => {
    //      loading.dismiss();
    //   }, 4000);
    // }

}
