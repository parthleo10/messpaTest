import {Component} from '@angular/core';
import {Platform, ActionSheet, NavController} from 'ionic-angular';
import {AlertsPage} from '../alerts/alerts';
import {BadgePage} from '../badge/badge';
import {ButtonsPage} from '../buttons/buttons';
import {ButtonComponentPage} from '../button-component/button-component';
import {CardsPage} from '../cards/cards';
import {CheckboxesPage} from '../checkboxes/checkboxes';
import {DatetimePage} from '../datetime/datetime';
import {GesturesPage} from '../gestures/gestures';
import {GridPage} from '../grid/grid';
import {InputsPage} from '../inputs/inputs';
import {ListPage} from "../list/list";



@Component({
  templateUrl: 'build/pages/home/home.html'
})

export class HomePage {
  constructor(public platform: Platform, public nav: NavController) { }

  openMenu() {
    let actionSheet = ActionSheet.create({
      title: 'Albums',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Delete',
          role: 'destructive',
          icon: !this.platform.is('ios') ? 'trash' : null,
          handler: () => {
            console.log('Delete clicked');
          }
        },
        {
          text: 'Share',
          icon: !this.platform.is('ios') ? 'share' : null,
          handler: () => {
            console.log('Share clicked');
          }
        },
        {
          text: 'Play',
          icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
          handler: () => {
            console.log('Play clicked');
          }
        },
        {
          text: 'Favorite',
          icon: !this.platform.is('ios') ? 'heart-outline' : null,
          handler: () => {
            console.log('Favorite clicked');
          }
        },
        {
          text: 'Cancel',
          role: 'cancel', // will always sort to be on the bottom
          icon: !this.platform.is('ios') ? 'close' : null,
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });

    this.nav.present(actionSheet);
  }

  goToAlerts(){
    this.nav.setRoot(AlertsPage);
  }

  goToBadges(){
    this.nav.setRoot(BadgePage);
  }

  goToButtonsPage(){
    this.nav.setRoot(ButtonsPage);
  }

  goToButtonsInComponentPage(){
    this.nav.setRoot(ButtonComponentPage);
  }

  goToCardsPage(){
    this.nav.setRoot(CardsPage);
  }

  goToCheckboxes(){
    this.nav.setRoot(CheckboxesPage);
  }

  goToDateTime(){
    this.nav.setRoot(DatetimePage);
  }

  goToGestures(){
  this.nav.setRoot(GesturesPage);
  }

  goToGrid(){
    this.nav.setRoot(GridPage);
  }

  goToInputs(){
    this.nav.setRoot(InputsPage);
  }

  goToList(){
  this.nav.setRoot(ListPage);
}



}
