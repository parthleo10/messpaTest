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
var BadgePage = (function () {
    function BadgePage(nav) {
        this.nav = nav;
    }
    BadgePage = __decorate([
        ionic_angular_1.Page({
            templateUrl: 'build/pages/badge/badge.html',
        }), 
        __metadata('design:paramtypes', [ionic_angular_1.NavController])
    ], BadgePage);
    return BadgePage;
})();
exports.BadgePage = BadgePage;
