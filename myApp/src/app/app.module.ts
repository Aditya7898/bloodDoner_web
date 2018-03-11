import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';
import { HomePage } from '../pages/home/home';
import { Tutorial1Page } from '../pages/tutorial1/tutorial1';
import { Tutorial2Page } from '../pages/tutorial2/tutorial2';
import { Tutorial3Page } from '../pages/tutorial3/tutorial3';
import { Tutorial4Page } from '../pages/tutorial4/tutorial4';
import { Tutorial5Page } from '../pages/tutorial5/tutorial5';
import { SplashPage } from '../pages/splash/splash';
import { HeadingsPage } from '../pages/headings/headings';
import { ParagraphPage } from '../pages/paragraph/paragraph';
import { FormattingPage } from '../pages/formatting/formatting';
import { ListPage } from '../pages/list/list';
import { ImagesPage } from '../pages/images/images';
import { TablesPage } from '../pages/tables/tables';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    SplashPage,
    Tutorial1Page,
    Tutorial2Page,
    Tutorial3Page,
    Tutorial4Page,
    Tutorial5Page,
    HeadingsPage,
    ParagraphPage,
    FormattingPage,
    ListPage,
    ImagesPage,
    TablesPage
  ],
  imports: [
    AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( FIREBASE_CREDENTIALS ),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SplashPage,
    Tutorial1Page,
    Tutorial2Page,
    Tutorial3Page,
    Tutorial4Page,
    Tutorial5Page,
    HeadingsPage,
    ParagraphPage,
    FormattingPage,
    ListPage,
    ImagesPage,
    TablesPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
