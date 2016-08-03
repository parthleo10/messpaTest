import {Page, NavController} from 'ionic-angular';
import {HomePage} from '../home/home';

@Page({
  templateUrl: 'build/pages/intro/intro.html',
})
export class IntroPage {
  constructor(private nav: NavController) {
  }
  goToHome(){
    this.nav.setRoot(HomePage);
  }
}
