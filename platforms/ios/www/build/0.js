webpackJsonp([0],{

/***/ 412:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShoppingListPageModule", function() { return ShoppingListPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shopping_list__ = __webpack_require__(415);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ShoppingListPageModule = (function () {
    function ShoppingListPageModule() {
    }
    return ShoppingListPageModule;
}());
ShoppingListPageModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_2__shopping_list__["a" /* ShoppingListPage */],
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__shopping_list__["a" /* ShoppingListPage */]),
        ],
    })
], ShoppingListPageModule);

//# sourceMappingURL=shopping-list.module.js.map

/***/ }),

/***/ 415:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ShoppingListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__add_shopping_item_add_shopping_item__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tabs_tabs__ = __webpack_require__(140);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ShoppingListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
var ShoppingListPage = (function () {
    function ShoppingListPage(navCtrl, navParams, database, actionSheetCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.database = database;
        this.actionSheetCtrl = actionSheetCtrl;
        this.shoppingListRef$ = this.database.list('shopping-list');
    }
    ShoppingListPage.prototype.selectShoppingItem = function (shoppingItem) {
        var _this = this;
        this.actionSheetCtrl.create({
            title: "" + shoppingItem.itemName,
            buttons: [
                {
                    text: 'Edit',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__edit_shopping_item_edit_shopping_item__["a" /* EditShoppingItemPage */], { shoppingItemId: shoppingItem.$key });
                    }
                },
                {
                    text: 'Delete',
                    role: 'destructive',
                    handler: function () {
                        _this.shoppingListRef$.remove(shoppingItem.$key);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log("User selected cancel button");
                    }
                }
            ]
        }).present();
    };
    ShoppingListPage.prototype.navigateToAddShoppingPage = function () {
        //Navigation dans l'ajout des items
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__add_shopping_item_add_shopping_item__["a" /* AddShoppingItemPage */]);
    };
    ShoppingListPage.prototype.returnHome = function () {
        //Retour à l'accueil
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__tabs_tabs__["a" /* TabsPage */]);
    };
    return ShoppingListPage;
}());
ShoppingListPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPage */])(),
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-shopping-list',template:/*ion-inline-start:"/var/www/html/pizzaAppIonicFirebase/src/pages/shopping-list/shopping-list.html"*/'<!--\n  Generated template for the ShoppingListPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-buttons end>\n      <button ion-button (click)="navigateToAddShoppingPage()">\n        Commander\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n\n  <ion-list>\n    <ion-item *ngFor="let item of shoppingListRef$ | async"\n              (click)="selectShoppingItem(item)">\n      <h2>Item name: {{item.itemName}}</h2>\n      <h3>Item number: {{item.itemNumber}}</h3>\n    </ion-item>\n  </ion-list>\n\n  <button ion-button block color="dark" (click)="returnHome()">\n    Retour accueil\n  </button>\n\n</ion-content>\n'/*ion-inline-end:"/var/www/html/pizzaAppIonicFirebase/src/pages/shopping-list/shopping-list.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]])
], ShoppingListPage);

//# sourceMappingURL=shopping-list.js.map

/***/ })

});
//# sourceMappingURL=0.js.map