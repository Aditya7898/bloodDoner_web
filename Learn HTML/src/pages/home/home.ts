import { Component,AfterViewInit } from '@angular/core';
import { IonicPage, NavController,MenuController,   } from 'ionic-angular';
import { Tutorial1Page } from '../../pages/tutorial1/tutorial1';
import { Tutorial2Page } from '../tutorial2/tutorial2';
import { Tutorial3Page } from '../tutorial3/tutorial3';
import { Tutorial4Page } from '../tutorial4/tutorial4';
import { Tutorial5Page } from '../tutorial5/tutorial5';
import { DataProvider } from '../../providers/data/data';
// import { Network } from '@ionic-native/network';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage implements AfterViewInit{

  newData$;
  constructor(public navCtrl: NavController, public menuCtrl: MenuController, 
              private data: DataProvider) {
          menuCtrl.enable(true);
console.log("ddd");

  }

 async ngAfterViewInit(){
    this.newData$ = await this.data.getData();
 }

  tutorial(i){
    console.log(i.title);
    if(i.title == "Introduction"){
      this.tutorial1();
      console.log(i.title);
    }
    if(i.title =="Basics"){
      this.tutorial2();
    }
    if(i.title =="tags"){
      this.tutorial3();
    }
    if(i.title =="Attribute"){
      this.tutorial4();
    }
    if(i.title =="forms"){
      this.tutorial5();
    }
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
