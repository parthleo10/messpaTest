import {Page, NavController} from 'ionic-angular';

/*
  Generated class for the DatetimePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/datetime/datetime.html',
})
export class DatetimePage {
  public event = {
    month: '1990-02-19',
    timeStarts: '07:43',
    timeEnds: '1990-02-20'
  }
  constructor(public nav: NavController) {}
}
