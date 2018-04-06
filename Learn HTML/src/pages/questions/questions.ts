import { Component, AfterViewInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DataProvider } from '../../providers/data/data';

@IonicPage()
@Component({
  selector: 'page-questions',
  templateUrl: 'questions.html',
})
export class QuestionsPage  implements AfterViewInit{

  data$;

    constructor(public navCtrl: NavController, public navParams: NavParams,
              private data: DataProvider) {}
              
    async ngAfterViewInit(){
      this.data$ = await this.data.getData();
    }          


  ionViewDidLoad() {}

}
