import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HeadingsPage } from '../headings/headings';
import { ParagraphPage } from '../paragraph/paragraph';
import { FormattingPage } from '../formatting/formatting';
import { ListPage } from '../list/list';
import { TablesPage } from '../tables/tables';
import { ImagesPage } from '../images/images';

@IonicPage()

@Component({
  selector: 'page-tutorial3',
  templateUrl: 'tutorial3.html',
})
export class Tutorial3Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  goToHeading(){
    this.navCtrl.push(HeadingsPage);
  }
  goToPara(){
    this.navCtrl.push(ParagraphPage);
  }
  goToFormatting(){
    this.navCtrl.push(FormattingPage);
  }
  goToList(){
    this.navCtrl.push(ListPage);
  }
  goToTables(){
    this.navCtrl.push(TablesPage);
  }
  goToImages(){
    this.navCtrl.push(ImagesPage);
  }
}
