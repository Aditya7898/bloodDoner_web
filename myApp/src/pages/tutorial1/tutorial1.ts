import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()

@Component({
  selector: 'page-tutorial1',
  templateUrl: 'tutorial1.html',
})
export class Tutorial1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
 
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Tutorial1Page');
  }

}
