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
/*
  Generated class for the CheckboxesPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
var CheckboxesPage = (function () {
    function CheckboxesPage(nav) {
        this.nav = nav;
    }
    CheckboxesPage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/checkboxes/checkboxes.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], CheckboxesPage);
    return CheckboxesPage;
})();
exports.CheckboxesPage = CheckboxesPage;
