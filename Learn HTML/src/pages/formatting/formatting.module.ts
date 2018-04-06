import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormattingPage } from './formatting';

@NgModule({
  declarations: [FormattingPage],
  imports: [IonicPageModule.forChild(FormattingPage)],
  exports: [FormattingPage]
})
export class FormattingPageModule {}
