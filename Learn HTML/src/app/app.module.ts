import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';


import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

import { AngularFireDatabaseModule } from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { FIREBASE_CREDENTIALS } from './firebase.credentials';


// import { Splash } from '../pages/splash/splash';
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
import { SplashPageModule } from '../pages/splash/splash.module';
import { DataProvider } from '../providers/data/data';
import { HomePageModule } from '../pages/home/home.module';
import { QuestionsPageModule } from '../pages/questions/questions.module';
import { TestPageModule } from '../pages/test/test.module';
import { TestProvider } from '../providers/test/test';
// import { FlashCardComponent } from '../components/flash-card/flash-card';
import { QuizPage } from '../pages/quiz/quiz';
import { Network } from '@ionic-native/network'; // internet connection
import { QuizPageModule } from '../pages/quiz/quiz.module';





@NgModule({
  declarations: [
    MyApp,
    // Splash,
    // FlashCardComponent, 
    // QuizPage,
  ],
  imports: [
    AngularFireDatabaseModule,
    BrowserModule,
    HttpModule,
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
    SplashPageModule,
    HomePageModule,
    TestPageModule,
    QuestionsPageModule,
    QuizPageModule

  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    // Splash,
    QuizPage,
  
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
    TestProvider,
    Network
  ]
})
export class AppModule {}
