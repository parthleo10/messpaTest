//import {App, Platform,Storage} from 'ionic-angular';
import {Component} from '@angular/core';
import {ionicBootstrap, Platform,Storage} from 'ionic-angular';
import {StatusBar} from 'ionic-native';
import {HomePage} from './pages/home/home';
import {IntroPage} from './pages/intro/intro';
import {LocalStorage} from "../node_modules/ionic-angular/platform/storage/local-storage";

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>',
  //templateUrl: "build/pages/intro/intro.html"
  //config: {} // http://ionicframework.com/docs/v2/api/config/Config/
})
export class MyApp {
  public rootPage;
  public local;

  constructor(private platform: Platform) {

  this.local = new Storage(LocalStorage);
    this.local.get('introShown').then((result)=>{
      if (result){
        this.rootPage = IntroPage;
      }else{
        this.local.set('introShown',true);
        this.rootPage = IntroPage;
      }
    });
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
    });
  }
}
ionicBootstrap(MyApp,[], {
  tabbarPlacement: 'bottom'
});