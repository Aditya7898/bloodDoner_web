import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Tutorial1Page } from './tutorial1';

@NgModule({
  declarations: [
    Tutorial1Page,
  ],
  imports: [
    IonicPageModule.forChild(Tutorial1Page),
  ],
})
export class Tutorial1PageModule {}
