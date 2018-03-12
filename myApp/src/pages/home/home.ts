import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ModalController,MenuController  } from 'ionic-angular';
import { Tutorial1Page } from '../../pages/tutorial1/tutorial1';
import { Tutorial2Page } from '../tutorial2/tutorial2';
import { Tutorial3Page } from '../tutorial3/tutorial3';
import { Tutorial4Page } from '../tutorial4/tutorial4';
import { Tutorial5Page } from '../tutorial5/tutorial5';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private myModal:ModalController,public menuCtrl: MenuController) {
          menuCtrl.enable(true);
  }


  tutorial1(){
    this.navCtrl.push(Tutorial1Page);
  }

  tutorial2(){
    this.navCtrl.push(Tutorial2Page);
  }

  tutorial3(){
    this.navCtrl.push(Tutorial3Page);
  }

  tutorial4(){
    this.navCtrl.push(Tutorial4Page);
  }

  tutorial5(){
    this.navCtrl.push(Tutorial5Page);
  }
}
