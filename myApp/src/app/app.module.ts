import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';

import { Splash } from '../pages/splash/splash';
import { FormattingPageModule } from '../pages/formatting/formatting.module';
import { Tutorial1PageModule } from '../pages/tutorial1/tutorial1.module';
import { Tutorial2PageModule } from '../pages/tutorial2/tutorial2.module';
import { Tutorial3PageModule } from '../pages/tutorial3/tutorial3.module';
import { Tutorial4PageModule } from '../pages/tutorial4/tutorial4.module';
import { Tutorial5PageModule } from '../pages/tutorial5/tutorial5.module';
import { HeadingsPageModule } from '../pages/headings/headings.module';
import { ImagesPageModule } from '../pages/images/images.module';
import { ListPageModule } from '../pages/list/list.module';
import { ParagraphPageModule } from '../pages/paragraph/paragraph.module';
import { TablesPageModule } from '../pages/tables/tables.module';



@NgModule({
  declarations: [
    MyApp,
    Splash,

  ],
  imports: [
    AngularFireDatabaseModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp( FIREBASE_CREDENTIALS ),
    
    Tutorial1PageModule,
    Tutorial2PageModule,
    Tutorial3PageModule,
    Tutorial4PageModule,
    Tutorial5PageModule,
    FormattingPageModule,
    HeadingsPageModule,
    ImagesPageModule,
    ListPageModule,
    ParagraphPageModule,
    TablesPageModule,

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Splash,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
