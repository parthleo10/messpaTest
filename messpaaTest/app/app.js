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
var ionic_native_1 = require('ionic-native');
var intro_1 = require('./pages/intro/intro');
var local_storage_1 = require("../node_modules/ionic-angular/platform/storage/local-storage");
var MyApp = (function () {
    function MyApp(platform) {
        var _this = this;
        this.platform = platform;
        this.local = new ionic_angular_1.Storage(local_storage_1.LocalStorage);
        this.local.get('introShown').then(function (result) {
            if (result) {
                _this.rootPage = intro_1.IntroPage;
            }
            else {
                _this.local.set('introShown', true);
                _this.rootPage = intro_1.IntroPage;
            }
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            ionic_native_1.StatusBar.styleDefault();
        });
    }
    MyApp = __decorate([
        ionic_angular_1.App({
            template: '<ion-nav [root]="rootPage"></ion-nav>',
            config: {} // http://ionicframework.com/docs/v2/api/config/Config/
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.Platform])
    ], MyApp);
    return MyApp;
})();
exports.MyApp = MyApp;
