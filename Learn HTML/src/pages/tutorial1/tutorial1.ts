import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()

@Component({
  selector: 'page-tutorial1',
  templateUrl: 'tutorial1.html',
})
export class Tutorial1Page implements AfterViewInit{

  newData$;
  constructor(public navCtrl: NavController, public navParams: NavParams,private data: DataProvider) {
  }

 async ngAfterViewInit(){
    this.newData$ = await this.data.getData();
 }

}
