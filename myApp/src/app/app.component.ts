import { Component } from '@angular/core';
import { Platform, ModalController, LoadingController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { HomePage } from '../pages/home/home';
import { SplashPage } from '../pages/splash/splash';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = HomePage;

  constructor(platform: Platform, statusBar: StatusBar, 
              splashScreen: SplashScreen,private modalCtrl:ModalController, 
              public loadingCtrl: LoadingController) {
    platform.ready().then(() => {

// loader start
        // let loader = this.loadingCtrl.create({
        //   content: "Please wait...",
        //   duration: 3000
        // });
        // loader.present();
// loader end

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();

      // let splash = modalCtrl.create(SplashPage);
      // splash.present();
    });
  }
}

