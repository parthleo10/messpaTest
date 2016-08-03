var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") return Reflect.decorate(decorators, target, key, desc);
    switch (arguments.length) {
        case 2: return decorators.reduceRight(function(o, d) { return (d && d(o)) || o; }, target);
        case 3: return decorators.reduceRight(function(o, d) { return (d && d(target, key)), void 0; }, void 0);
        case 4: return decorators.reduceRight(function(o, d) { return (d && d(target, key, o)) || o; }, desc);
    }
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var ionic_angular_1 = require('ionic-angular');
var alerts_1 = require('../alerts/alerts');
var badge_1 = require('../badge/badge');
var buttons_1 = require('../buttons/buttons');
var button_component_1 = require('../button-component/button-component');
var cards_1 = require('../cards/cards');
var checkboxes_1 = require('../checkboxes/checkboxes');
var datetime_1 = require('../datetime/datetime');
var gestures_1 = require('../gestures/gestures');
var grid_1 = require('../grid/grid');
var inputs_1 = require('../inputs/inputs');
var list_1 = require("../list/list");
var HomePage = (function () {
    function HomePage(platform, nav) {
        this.platform = platform;
        this.nav = nav;
    }
    HomePage.prototype.openMenu = function () {
        var actionSheet = ionic_angular_1.ActionSheet.create({
            title: 'Albums',
            cssClass: 'action-sheets-basic-page',
            buttons: [
                {
                    text: 'Delete',
                    role: 'destructive',
                    icon: !this.platform.is('ios') ? 'trash' : null,
                    handler: function () {
                        console.log('Delete clicked');
                    }
                },
                {
                    text: 'Share',
                    icon: !this.platform.is('ios') ? 'share' : null,
                    handler: function () {
                        console.log('Share clicked');
                    }
                },
                {
                    text: 'Play',
                    icon: !this.platform.is('ios') ? 'arrow-dropright-circle' : null,
                    handler: function () {
                        console.log('Play clicked');
                    }
                },
                {
                    text: 'Favorite',
                    icon: !this.platform.is('ios') ? 'heart-outline' : null,
                    handler: function () {
                        console.log('Favorite clicked');
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    icon: !this.platform.is('ios') ? 'close' : null,
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    };
    HomePage.prototype.goToAlerts = function () {
        this.nav.setRoot(alerts_1.AlertsPage);
    };
    HomePage.prototype.goToBadges = function () {
        this.nav.setRoot(badge_1.BadgePage);
    };
    HomePage.prototype.goToButtonsPage = function () {
        this.nav.setRoot(buttons_1.ButtonsPage);
    };
    HomePage.prototype.goToButtonsInComponentPage = function () {
        this.nav.setRoot(button_component_1.ButtonComponentPage);
    };
    HomePage.prototype.goToCardsPage = function () {
        this.nav.setRoot(cards_1.CardsPage);
    };
    HomePage.prototype.goToCheckboxes = function () {
        this.nav.setRoot(checkboxes_1.CheckboxesPage);
    };
    HomePage.prototype.goToDateTime = function () {
        this.nav.setRoot(datetime_1.DatetimePage);
    };
    HomePage.prototype.goToGestures = function () {
        this.nav.setRoot(gestures_1.GesturesPage);
    };
    HomePage.prototype.goToGrid = function () {
        this.nav.setRoot(grid_1.GridPage);
    };
    HomePage.prototype.goToInputs = function () {
        this.nav.setRoot(inputs_1.InputsPage);
    };
    HomePage.prototype.goToList = function () {
        this.nav.setRoot(list_1.ListPage);
    };
    HomePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/home/home.html'
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform, ionic_angular_1.NavController])
    ], HomePage);
    return HomePage;
})();
exports.HomePage = HomePage;
