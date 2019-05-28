(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p-sidebar [(visible)]=\"display\" position=\"right\" [baseZIndex]=\"10000\" *ngIf=\"!isLogin\">\n  <ul class=\"categories\">\n    <h5>Menu</h5>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n        routerLink=\"/applicativi\">Applicativi</a></li>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n        routerLink=\"/community\">Area community</a></li>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n        routerLink=\"/richieste\">Richieste</a></li>\n    <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n        routerLink=\"/ferie\">Ferie e Permessi</a></li>\n  </ul>\n</p-sidebar>\n<div class=\"header-top clearfix\" *ngIf=\"!isLogin\">\n  <div class=\"container\">\n    <div class=\"row\">\n      <div class=\"col-sm-2 col-xs-5\">\n        <a class=\"logo pull-left\" routerLink=\"/homepage\"><img src=\"assets/images/logo.png\" class=\"img-responsive\"></a>\n      </div>\n\n\n      <div class=\"col-sm-7 text-center hidden-nav\">\n        <div class=\"top-menu\">\n          <ul>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n                routerLink=\"/applicativi\">Applicativi</a></li>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n                routerLink=\"/community\">Area community</a></li>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n                routerLink=\"/richieste\">Richieste</a></li>\n            <li routerLinkActive=\"active\" [routerLinkActiveOptions]=\"{exact:true}\"><a (click)=\"display = false\"\n                routerLink=\"/ferie\">Ferie e Permessi</a></li>\n          </ul>\n        </div>\n      </div>\n      <div class=\"col-sm-3 col-xs-5\">\n          <div class=\"top-menu\">\n            <ul>\n    <li class=\"user\"> <a routerLink=\"/homepage\"><i class=\"fa fa-user\"></i> Nome Utente</a></li>   \n    <li class=\"logout\"> <a routerLink=\"/homepage\">Logout</a></li>   \n\n      </ul>\n    </div>\n      </div>\n\n    </div>\n  </div>\n</div>\n\n\n\n<div class=\"main\" [ngClass]=\"{'login': isLogin }\">\n  <router-outlet></router-outlet>\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(router) {
        var _this = this;
        this.router = router;
        this.title = 'app';
        this.isLogin = false;
        this.router.events.subscribe(function (event) {
            if (_this.router.url == '/login') {
                _this.isLogin = true;
            }
            else {
                _this.isLogin = false;
            }
        });
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: routing, AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routing", function() { return routing; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! primeng/table */ "./node_modules/primeng/table.js");
/* harmony import */ var primeng_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(primeng_table__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! primeng/paginator */ "./node_modules/primeng/paginator.js");
/* harmony import */ var primeng_paginator__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(primeng_paginator__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! primeng/calendar */ "./node_modules/primeng/calendar.js");
/* harmony import */ var primeng_calendar__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(primeng_calendar__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! primeng/tree */ "./node_modules/primeng/tree.js");
/* harmony import */ var primeng_tree__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(primeng_tree__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! primeng/sidebar */ "./node_modules/primeng/sidebar.js");
/* harmony import */ var primeng_sidebar__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./homepage/homepage.component */ "./src/app/homepage/homepage.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _richieste_richieste_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./richieste/richieste.component */ "./src/app/richieste/richieste.component.ts");
/* harmony import */ var _richiesta_detail_richiesta_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./richiesta-detail/richiesta-detail.component */ "./src/app/richiesta-detail/richiesta-detail.component.ts");
/* harmony import */ var _documentazione_documentazione_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./documentazione/documentazione.component */ "./src/app/documentazione/documentazione.component.ts");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! primeng/dropdown */ "./node_modules/primeng/dropdown.js");
/* harmony import */ var primeng_dropdown__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! primeng/fileupload */ "./node_modules/primeng/fileupload.js");
/* harmony import */ var primeng_fileupload__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! primeng/selectbutton */ "./node_modules/primeng/selectbutton.js");
/* harmony import */ var primeng_selectbutton__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(primeng_selectbutton__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _community_community_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./community/community.component */ "./src/app/community/community.component.ts");
/* harmony import */ var _ferie_ferie_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./ferie/ferie.component */ "./src/app/ferie/ferie.component.ts");
/* harmony import */ var _applicativi_applicativi_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./applicativi/applicativi.component */ "./src/app/applicativi/applicativi.component.ts");
/* harmony import */ var _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./news-detail/news-detail.component */ "./src/app/news-detail/news-detail.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};























var routing = [
    { path: '', redirectTo: 'login', pathMatch: 'full' },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"] },
    { path: 'homepage', component: _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"] },
    { path: 'richieste', component: _richieste_richieste_component__WEBPACK_IMPORTED_MODULE_13__["RichiesteComponent"] },
    { path: 'applicativi', component: _applicativi_applicativi_component__WEBPACK_IMPORTED_MODULE_21__["ApplicativiComponent"] },
    { path: 'community', component: _community_community_component__WEBPACK_IMPORTED_MODULE_19__["CommunityComponent"] },
    { path: 'ferie', component: _ferie_ferie_component__WEBPACK_IMPORTED_MODULE_20__["FerieComponent"] },
    { path: 'richiesta-detail/:id', component: _richiesta_detail_richiesta_detail_component__WEBPACK_IMPORTED_MODULE_14__["RichiestaDetailComponent"] },
    { path: 'documentazione', component: _documentazione_documentazione_component__WEBPACK_IMPORTED_MODULE_15__["DocumentazioneComponent"] }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"],
                _homepage_homepage_component__WEBPACK_IMPORTED_MODULE_10__["HomepageComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_12__["LoginComponent"],
                _richieste_richieste_component__WEBPACK_IMPORTED_MODULE_13__["RichiesteComponent"],
                _richiesta_detail_richiesta_detail_component__WEBPACK_IMPORTED_MODULE_14__["RichiestaDetailComponent"],
                _documentazione_documentazione_component__WEBPACK_IMPORTED_MODULE_15__["DocumentazioneComponent"],
                _community_community_component__WEBPACK_IMPORTED_MODULE_19__["CommunityComponent"],
                _ferie_ferie_component__WEBPACK_IMPORTED_MODULE_20__["FerieComponent"],
                _applicativi_applicativi_component__WEBPACK_IMPORTED_MODULE_21__["ApplicativiComponent"],
                _news_detail_news_detail_component__WEBPACK_IMPORTED_MODULE_22__["NewsDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                primeng_table__WEBPACK_IMPORTED_MODULE_2__["TableModule"],
                primeng_paginator__WEBPACK_IMPORTED_MODULE_3__["PaginatorModule"],
                primeng_calendar__WEBPACK_IMPORTED_MODULE_4__["CalendarModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_7__["BrowserAnimationsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_8__["RouterModule"].forRoot(routing, { useHash: true, preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_8__["PreloadAllModules"] }),
                _angular_common__WEBPACK_IMPORTED_MODULE_11__["CommonModule"],
                primeng_tree__WEBPACK_IMPORTED_MODULE_5__["TreeModule"],
                primeng_sidebar__WEBPACK_IMPORTED_MODULE_6__["SidebarModule"],
                primeng_dropdown__WEBPACK_IMPORTED_MODULE_16__["DropdownModule"],
                primeng_fileupload__WEBPACK_IMPORTED_MODULE_17__["FileUploadModule"],
                primeng_selectbutton__WEBPACK_IMPORTED_MODULE_18__["SelectButtonModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/applicativi/applicativi.component.css":
/*!*******************************************************!*\
  !*** ./src/app/applicativi/applicativi.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/applicativi/applicativi.component.html":
/*!********************************************************!*\
  !*** ./src/app/applicativi/applicativi.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <div class=\"main-image\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xs-12\">\n\n          <h1>Applicativi</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"box-wrapper\">\n \n      <div class=\"other-applications\">\n  \n        <div class=\"container\">\n            <div class=\"row\">\n  \n          <div class=\"col-sm-12 col-xs-12\">\n            <div class=\"sub-title\">\n              <h3 class=\"text-left\">Scegli una applicazione</h3>\n            </div>\n          </div>\n        </div>\n          <div class=\"row\">\n          <div class=\"seven-cols\">\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"content\">\n                        <h3 class=\"title\">DOCUMENTALE</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">PROTOCOLLO</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EGGS AM</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EGGS HR</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper clearfix\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EDV</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">CRM</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">SAP</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/applicativi/applicativi.component.ts":
/*!******************************************************!*\
  !*** ./src/app/applicativi/applicativi.component.ts ***!
  \******************************************************/
/*! exports provided: ApplicativiComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApplicativiComponent", function() { return ApplicativiComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ApplicativiComponent = /** @class */ (function () {
    function ApplicativiComponent() {
    }
    ApplicativiComponent.prototype.ngOnInit = function () {
    };
    ApplicativiComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-applicativi',
            template: __webpack_require__(/*! ./applicativi.component.html */ "./src/app/applicativi/applicativi.component.html"),
            styles: [__webpack_require__(/*! ./applicativi.component.css */ "./src/app/applicativi/applicativi.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ApplicativiComponent);
    return ApplicativiComponent;
}());



/***/ }),

/***/ "./src/app/community/community.component.css":
/*!***************************************************!*\
  !*** ./src/app/community/community.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/community/community.component.html":
/*!****************************************************!*\
  !*** ./src/app/community/community.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"main-image\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-xs-12\">\n  \n            <h1>Area Community</h1>\n            </div>\n          </div>\n      </div>\n    </div>\n  \n    <div class=\"box-wrapper\">\n   \n      <div class=\"communications-area\">\n  \n        <div class=\"container\">\n            <div class=\"row\">\n  \n          <div class=\"col-sm-12 col-xs-12\">\n            <div class=\"sub-title\">\n              <h3 class=\"text-left\">Comunicazioni varie</h3>\n            </div>\n          </div>\n        </div>\n          <div class=\"row\">\n              <div class=\"col-md-6\">\n                <div class=\"communications-item clearfix\">\n                  <div class=\"col-md-3 no-margin\"> \n                      <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                  </div>\n                  <div class=\"col-md-9\"> \n                      <div class=\"content\">\n                      <h3>l’energia di oggi e di domani</h3>\n                      <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende</p>\n                    </div>\n                  </div>\n                  </div>\n              </div>\n\n              <div class=\"col-md-6\">\n                  <div class=\"communications-item clearfix\">\n\n                  <div class=\"col-md-3 no-margin\"> \n                      <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                  </div>\n                  <div class=\"col-md-9\"> \n                    <div class=\"content\">\n                      <h3>l’energia di oggi e di domani</h3>\n                      <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende</p>\n                    </div>\n                  </div>\n              </div>\n              </div>\n\n            \n            <div class=\"clearfix\"></div>\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n  \n        <section class=\"white-section community\">\n          <div class=\"container\">\n            <div class=\"row\">\n              <div class=\"col-md-12\"> \n  \n              <div class=\"sub-title\">\n                  <h3 class=\"text-left\">Ultime News</h3>\n                </div>\n              </div>\n              <div class=\"clearfix\"></div>\n              <div class=\"col-md-6 col-sm-6 col-xs-12 news-item\">\n                <div class=\"big-image\">\n                <img src=\"https://placeimg.com/800/400/tech\" class=\"img-responsive\">\n              </div>\n                <h3>l’energia di oggi e di domani</h3>\n                <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubblici e privati, come partner per una gestione globale dei sistemi energetici. <br><br>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubblici e privati, come partner per una gestione globale dei sistemi energetici.</p>\n              </div>\n          \n  \n              <div class=\"col-md-6 col-sm-6 col-xs-12\"> \n                <div class=\"other-news-list\">\n                    <div class=\"row news-item\">\n                        <div class=\"col-md-3\"> \n                          <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                      </div>\n                      <div class=\"col-md-9\"> \n                          <h3>l’energia di oggi e di domani</h3>\n                          <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                        </div>\n                  </div>\n               \n                  <div class=\"row news-item\">\n                      <div class=\"col-md-3\"> \n                          <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                      </div>\n                      <div class=\"col-md-9\"> \n                          <h3>l’energia di oggi e di domani</h3>\n                          <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                        </div>\n                  </div>\n\n                  <div class=\"row news-item\">\n                      <div class=\"col-md-3\"> \n                          <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                      </div>\n                      <div class=\"col-md-9\"> \n                          <h3>l’energia di oggi e di domani</h3>\n                          <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                        </div>\n                  </div>\n  \n                  <div class=\"row news-item\">\n                      <div class=\"col-md-3\"> \n                          <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                      </div>\n                      <div class=\"col-md-9\"> \n                          <h3>l’energia di oggi e di domani</h3>\n                          <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                        </div>\n                  </div>\n                </div>\n              </div>\n          </div>\n        </div>\n        </section>\n  \n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/community/community.component.ts":
/*!**************************************************!*\
  !*** ./src/app/community/community.component.ts ***!
  \**************************************************/
/*! exports provided: CommunityComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CommunityComponent", function() { return CommunityComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CommunityComponent = /** @class */ (function () {
    function CommunityComponent() {
    }
    CommunityComponent.prototype.ngOnInit = function () {
    };
    CommunityComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-community',
            template: __webpack_require__(/*! ./community.component.html */ "./src/app/community/community.component.html"),
            styles: [__webpack_require__(/*! ./community.component.css */ "./src/app/community/community.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], CommunityComponent);
    return CommunityComponent;
}());



/***/ }),

/***/ "./src/app/documentazione/documentazione.component.css":
/*!*************************************************************!*\
  !*** ./src/app/documentazione/documentazione.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/documentazione/documentazione.component.html":
/*!**************************************************************!*\
  !*** ./src/app/documentazione/documentazione.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-content\">\n    <div class=\"breadcrumbs\">\n      <div class=\"container\">\n        <div class=\"col-sm-4\">\n                    <h1>Repository Documentale</h1>\n         \n        </div>\n        <div class=\"col-sm-8\">\n   <!--    <button type=\"button\" pButton class=\"btn btn-white pull-right\" label=\"Subfolder\"  icon=\"fa fa-sliders\"></button>\n      <button type=\"button\" pButton class=\"btn btn-blue pull-right\" label=\"Documento\" icon=\"fa fa-plus\"></button>\n   --> \n    </div>\n      </div>\n    </div>\n  <div class=\"container\">\n    \n    <div class=\"col-sm-12\">\n      \n      <div class=\"list-wrapper relative\">\n        <div class=\"row\">\n          <div class=\"col-sm-12\">\n              <div class=\"content clearfix\">\n            <div class=\"col-sm-4 no-margin\">\n                <div class=\"content-documents clearfix\">\n                    <p-tree [value]=\"files\" selectionMode=\"multipli\"  draggableNodes=\"true\"></p-tree>\n\n                  </div>\n              </div>\n          \n          <div class=\"col-sm-8 no-margin\">\n          \n                <div class=\"table-wrapper\">\n                    <div class=\"path\">\n                        Schede tecniche articoli offerti a noleggio\n                    </div>\n                <p-table [value]=\"sales\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\"  >\n                    <ng-template pTemplate=\"header\" class=\"search-filter\">\n                      <tr class=\"sort-header\">\n                        <th>\n                        </th>\n                        <th [pSortableColumn]=\"'Age'\">Nome\n                            <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                          </th>\n                        <th [pSortableColumn]=\"'Age'\">Data\n                          <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                        </th>\n                       \n                        <th></th>\n                      </tr>\n                    </ng-template>\n                    <ng-template pTemplate=\"body\" let-sale>\n                      <tr>\n                        <td>{{sale.id}}</td>\n                        <td>{{sale.name}}</td>\n                        <td>{{sale.date}}</td>\n                        \n                        <td>\n                          <button type=\"button\" pButton class=\"btn btn-default pull-right\" label=\"Download\" icon=\"fa fa-chevron-down\"></button>\n                        </td>\n                      </tr>\n                    </ng-template>\n                  </p-table>\n                </div>\n          </div>\n        </div>\n      </div>\n    </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/documentazione/documentazione.component.ts":
/*!************************************************************!*\
  !*** ./src/app/documentazione/documentazione.component.ts ***!
  \************************************************************/
/*! exports provided: DocumentazioneComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentazioneComponent", function() { return DocumentazioneComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DocumentazioneComponent = /** @class */ (function () {
    function DocumentazioneComponent() {
    }
    DocumentazioneComponent.prototype.ngOnInit = function () {
        this.sales = [
            { id: '1', type: 'PDF', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '2', type: 'DOC', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '3', type: 'PDF', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '4', type: 'DOC', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '5', type: 'PDF', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '6', type: 'DOC', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '7', type: 'PDF', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '8', type: 'DOC', name: 'Nome del Documento', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
        ];
        this.files = [
            {
                "label": "Dispositivi medici",
                "data": "Dispositivi medici",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{
                        "label": "Cataloghi e schede tecniche",
                        "data": "Work Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Protocolli",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }, {
                        "label": "Manutenzione",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Fascicolo tecnico",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Registrazione DM - Ministero della salute",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }]
            },
            {
                "label": "Macchine / Attrezzature",
                "data": "Pictures Folder",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{
                        "label": "Cataloghi e schede tecniche",
                        "data": "Work Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Documentazione manutenzione",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }, {
                        "label": "Documentazione protocolli d’utilizzo impianti",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }]
            },
            {
                "label": "Metodologie e controlli prescritti",
                "data": "Dispositivi medici",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{
                        "label": "Piano della qualità",
                        "data": "Work Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Metodologie e pulizie e sanitizzazione",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }, {
                        "label": "Protocolli programmazione interventi",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Documentazione amministrattiva smaltimento rifiuti",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Documentazione controllo ambienti di lavoro",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }]
            },
            {
                "label": "Operatori adetti e servizi",
                "data": "Dispositivi medici",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": [{
                        "label": "Fascicoli del personale",
                        "data": "Work Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    },
                    {
                        "label": "Pianificazione formazione",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }, {
                        "label": "Certificazioni",
                        "data": "Home Folder",
                        "expandedIcon": "fa fa-folder-open",
                        "collapsedIcon": "fa fa-folder"
                    }]
            },
            {
                "label": "Prodotti",
                "data": "Prodotti",
                "expandedIcon": "fa fa-folder-open",
                "collapsedIcon": "fa fa-folder",
                "children": []
            }
        ];
    };
    DocumentazioneComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-documentazione',
            template: __webpack_require__(/*! ./documentazione.component.html */ "./src/app/documentazione/documentazione.component.html"),
            styles: [__webpack_require__(/*! ./documentazione.component.css */ "./src/app/documentazione/documentazione.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DocumentazioneComponent);
    return DocumentazioneComponent;
}());



/***/ }),

/***/ "./src/app/ferie/ferie.component.css":
/*!*******************************************!*\
  !*** ./src/app/ferie/ferie.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/ferie/ferie.component.html":
/*!********************************************!*\
  !*** ./src/app/ferie/ferie.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n    <div class=\"main-image\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"col-sm-12 col-xs-12\">\n  \n            <h1>Richieste Ferie Permessi</h1>\n          </div>\n        </div>\n      </div>\n    </div>\n  \n    <div class=\"box-wrapper\">\n      <div class=\"container\">\n        <div class=\"row\">\n          <div class=\"breadcrumbs clearfix\">\n            <div class=\"col-sm-2\">\n  \n            </div>\n            <div class=\"col-sm-3\">\n              <div class=\"calendar-wrapper\">\n                <p-calendar [(ngModel)]=\"value\" inputStyleClass=\"form-control pull-right\">\n                </p-calendar>\n                <span class=\"calendar-icon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                </span>\n              </div>\n            </div>\n\n            <div class=\"col-sm-3\">\n                <div class=\"calendar-wrapper\">\n                  <p-calendar [(ngModel)]=\"value\" inputStyleClass=\"form-control pull-right\">\n                  </p-calendar>\n                  <span class=\"calendar-icon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                  </span>\n                </div>\n              </div>\n              <div class=\"col-sm-2\">\n                  <button type=\"button\" pButton class=\"btn btn-primary btn-block pull-right\" label=\"Cerca\"></button>\n      \n                </div>\n\n            <div class=\"col-sm-2\">\n              <button type=\"button\" pButton class=\"btn btn-request btn-block pull-right\" label=\"Nuova Richiesta\" data-toggle=\"modal\"\n                data-target=\"#myModal\" icon=\"fa fa-plus\"></button>\n  \n            </div>\n          </div>\n        </div>\n      </div>\n      <div class=\"clearfix\"></div>\n      <div class=\"container\">\n        <div class=\"list-wrapper\">\n          <div class=\"row\">\n  \n  \n            <div class=\"col-sm-12\">\n              <div class=\"content clearfix\">\n  \n                <p-table [value]=\"sales\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\n                  <ng-template pTemplate=\"header\" class=\"search-filter\">\n                    <tr class=\"sort-header\">\n                      <th>\n                      </th>\n                      <th [pSortableColumn]=\"'Age'\">Data\n                        <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                      </th>\n                      <th [pSortableColumn]=\"'Age'\">Priorità\n                        <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                      </th>\n                      <th [pSortableColumn]=\"'Age'\">Tipologia\n                        <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                      </th>\n                      <th [pSortableColumn]=\"'Age'\">Operatore\n                        <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                      </th>\n                      <th [pSortableColumn]=\"'Age'\">Data interessata\n                        <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                      </th>\n                      <th [pSortableColumn]=\"'Height'\">Status\n                        <p-sortIcon [field]=\"'Height'\"></p-sortIcon>\n                      </th>\n                      <th><button type=\"button\" pButton icon=\"fa fa-download\" class=\"btn btn-default pull-right\"\n                          label=\"Esporta\"></button>\n                      </th>\n                    </tr>\n                  </ng-template>\n                  <ng-template pTemplate=\"body\" let-sale>\n                    <tr>\n                      <td>{{sale.id}}</td>\n                      <td>{{sale.date}}</td>\n  \n                      <td><span class=\"{{sale.type}}\">{{sale.type}}</span></td>\n                      <td><a routerLink=\"/richiesta-detail/{{sale.id}}\">{{sale.name}}</a></td>\n                      <td><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                        {{sale.user}}</td>\n                      <td>{{sale.from}} - {{sale.to}}</td>\n                      <td><span class=\"label {{sale.status}}\">{{sale.status}}</span></td>\n  \n                      <td>\n                        <button type=\"button\" pButton routerLink=\"/richiesta-detail/{{sale.id}}\"\n                          class=\"btn btn-default pull-right\" label=\"Visualizza\"></button>\n                      </td>\n                    </tr>\n                  </ng-template>\n                </p-table>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n  \n  \n  <div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n    <div class=\"modal-dialog\" role=\"document\">\n      <div class=\"modal-content\">\n        <div class=\"modal-header\">\n          <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n              aria-hidden=\"true\">&times;</span></button>\n          <h4 class=\"modal-title\" id=\"myModalLabel\">Richiesta Ferie</h4>\n        </div>\n        <div class=\"modal-body clearfix\">\n          <form>\n           \n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <label>Periodo da</label>\n\n                    <div class=\"calendar-wrapper\">\n                        <p-calendar [(ngModel)]=\"value\" placeholder=\"Data interessata\" inputStyleClass=\"form-control pull-right\">\n                        </p-calendar>\n                        <span class=\"calendar-icon-form\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                        </span>\n                      </div>\n                    </div>\n                    <div class=\"col-sm-6\">\n                        <label>Periodo a</label>\n    \n                        <div class=\"calendar-wrapper\">\n                            <p-calendar [(ngModel)]=\"value\" placeholder=\"Data interessata\"  inputStyleClass=\"form-control pull-right\">\n                            </p-calendar>\n                            <span class=\"calendar-icon-form\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n                            </span>\n                          </div>\n                        </div>\n\n            </div>\n            <div class=\"clearfix\"></div>\n            <br>\n            <div class=\"row\">\n              \n              <div class=\"col-sm-12\">\n                <label>Tipo di richiesta</label>\n                <p-dropdown [options]=\"segnalazione\" [ngModelOptions]=\"{standalone: true}\" [style]=\"{'width':'100%'}\"\n                  [(ngModel)]=\"selectedCar\"></p-dropdown>\n  \n                <div class=\"clearfix\"></div><br>\n              </div>\n  \n           \n  \n              <div class=\"form-group clearfix\">\n                <label class=\"col-sm-12\">Messagio</label>\n                <div class=\"col-sm-12\"><textarea type=\"textarea\" class=\"form-control\" id=\"exampleInputEmail1\"\n                    [style]=\"{'height':'300px'}\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"></textarea></div>\n                \n              </div>\n  \n\n              <div class=\"col-sm-12\">\n  \n                <button type=\"button\" class=\"btn btn-new btn-block btn-lg\" data-dismiss=\"modal\">Invia</button>\n              </div>\n            </div>\n          </form>\n        </div>\n  \n      </div>\n    </div>"

/***/ }),

/***/ "./src/app/ferie/ferie.component.ts":
/*!******************************************!*\
  !*** ./src/app/ferie/ferie.component.ts ***!
  \******************************************/
/*! exports provided: FerieComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FerieComponent", function() { return FerieComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FerieComponent = /** @class */ (function () {
    function FerieComponent() {
    }
    FerieComponent.prototype.ngOnInit = function () {
        this.segnalazione = [
            { label: 'Permesso', value: '' },
            { label: 'Ferie', value: '' }
        ];
        this.richiesta = [
            { label: 'Richiesta', value: '' }
        ];
        this.conformita = [
            { label: 'Non Conformità', value: '' }
        ];
        this.reparto = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.countries = [
            { name: 'Normale' },
            { name: 'Urgente' }
        ];
        this.sales = [
            { id: '1', type: 'Urgente', name: 'Permesso', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'chiusa', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' },
            { id: '2', type: 'Normale', name: 'Ferie', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'aperta', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' },
            { id: '3', type: 'Urgente', name: 'Permesso', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'in-lavorazione', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' },
            { id: '4', type: 'Urgente', name: 'Permesso', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'in-lavorazione', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' },
            { id: '5', type: 'Urgente', name: 'Richiesta', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'aperta', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' },
            { id: '6', type: 'Urgente', name: 'Permesso', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'aperta', date: '15/11/2018', from: '15/11/2018', to: '15/11/2018' }
        ];
    };
    FerieComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-ferie',
            template: __webpack_require__(/*! ./ferie.component.html */ "./src/app/ferie/ferie.component.html"),
            styles: [__webpack_require__(/*! ./ferie.component.css */ "./src/app/ferie/ferie.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FerieComponent);
    return FerieComponent;
}());



/***/ }),

/***/ "./src/app/homepage/homepage.component.css":
/*!*************************************************!*\
  !*** ./src/app/homepage/homepage.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/homepage/homepage.component.html":
/*!**************************************************!*\
  !*** ./src/app/homepage/homepage.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <div class=\"main-image\">\n    <div class=\"container\">\n      <div class=\"row\">\n          <div class=\"col-sm-12 col-xs-12\">\n\n          <h1>Dashboard</h1>\n          </div>\n        </div>\n    </div>\n  </div>\n\n  <div class=\"box-wrapper\">\n \n    <div class=\"other-applications\">\n\n      <div class=\"container\">\n          <div class=\"row\">\n\n        <div class=\"col-sm-12 col-xs-12\">\n          <div class=\"sub-title\">\n            <h3 class=\"text-left\">Scegli una applicazione</h3>\n          </div>\n        </div>\n      </div>\n        <div class=\"row\">\n\n            <div class=\"seven-cols\">\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n                      <div class=\"content\">\n                        <h3 class=\"title\">DOCUMENTALE</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">PROTOCOLLO</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EGGS AM</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EGGS HR</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper clearfix\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">EDV</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/applicativi\">\n                <div class=\"white-box clearfix applications\">\n                  <div class=\"item-wrapper\">\n                    <div class=\"item\">\n                      <div class=\"icon-wrapper\">\n                        <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                      </div>\n                      <div class=\"clearfix\"></div>\n\n                      <div class=\"content\">\n                        <h3 class=\"title\">SAP</h3>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </a>\n            </div>\n\n            <div class=\"col-md-2 col-sm-3 col-xs-6\"> <a routerLink=\"/contatti\">\n              <div class=\"white-box clearfix applications\">\n                <div class=\"item-wrapper\">\n                  <div class=\"item\">\n                    <div class=\"icon-wrapper\">\n                      <img src=\"assets/images/app.svg\" class=\"icon img-responsive\">\n                    </div>\n                    <div class=\"clearfix\"></div>\n\n                    <div class=\"content\">\n                      <h3 class=\"title\">CRM</h3>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </a>\n          </div>\n          </div>\n       \n          <div class=\"clearfix\"></div>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n\n      <section class=\"white-section community\">\n        <div class=\"container\">\n          <div class=\"row\">\n            <div class=\"col-md-12\"> \n\n            <div class=\"sub-title\">\n                <h3 class=\"text-left\">Ultime News</h3>\n              </div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <div class=\"col-md-6 col-sm-6 col-xs-12 news-item\">\n              <div class=\"big-image\">\n              <img src=\"https://placeimg.com/800/400/tech\" class=\"img-responsive\">\n            </div>\n              <h3>l’energia di oggi e di domani</h3>\n              <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubblici e privati, come partner per una gestione globale dei sistemi energetici. <br><br>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubblici e privati, come partner per una gestione globale dei sistemi energetici.</p>\n            </div>\n        \n\n            <div class=\"col-md-6 col-sm-6 col-xs-12\"> \n              <div class=\"other-news-list\">\n                  <div class=\"row news-item\">\n                      <div class=\"col-md-3\"> \n                          <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                      </div>\n                      <div class=\"col-md-9\"> \n                          <h3>l’energia di oggi e di domani</h3>\n                          <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                        </div>\n                  </div>\n             \n                <div class=\"row news-item\">\n                    <div class=\"col-md-3\"> \n                        <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-9\"> \n                        <h3>l’energia di oggi e di domani</h3>\n                        <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                      </div>\n                </div>\n                <div class=\"row news-item\">\n                    <div class=\"col-md-3\"> \n                        <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-9\"> \n                        <h3>l’energia di oggi e di domani</h3>\n                        <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                      </div>\n                </div>\n                <div class=\"row news-item\">\n                    <div class=\"col-md-3\"> \n                        <img src=\"https://placeimg.com/800/600/tech\" class=\"img-responsive\">\n                    </div>\n                    <div class=\"col-md-9\"> \n                        <h3>l’energia di oggi e di domani</h3>\n                        <p>Cristoforetti Servizi Energia Spa si propone a tutte le aziende, enti pubbl</p>\n                      </div>\n                </div>\n              </div>\n            </div>\n        </div>\n      </div>\n      </section>\n\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/homepage/homepage.component.ts":
/*!************************************************!*\
  !*** ./src/app/homepage/homepage.component.ts ***!
  \************************************************/
/*! exports provided: HomepageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomepageComponent", function() { return HomepageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HomepageComponent = /** @class */ (function () {
    function HomepageComponent() {
    }
    HomepageComponent.prototype.ngOnInit = function () {
        this.sales = [
            { id: '1', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '2', type: 'Normale', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '3', type: 'Urgente', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '4', type: 'Urgente', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '5', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '6', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '7', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '8', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '9', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '10', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '11', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '12', type: 'Urgente', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '13', type: 'Urgente', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '14', type: 'Urgente', name: 'Richiesta Ospedale Monza', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '15', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '16', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '17', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '18', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '19', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '20', type: 'Urgente', name: 'Richiesta Ospedale San Gimignanoa', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' }
        ];
    };
    HomepageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-homepage',
            template: __webpack_require__(/*! ./homepage.component.html */ "./src/app/homepage/homepage.component.html"),
            styles: [__webpack_require__(/*! ./homepage.component.css */ "./src/app/homepage/homepage.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomepageComponent);
    return HomepageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"vertical-center\">\n  <div class=\"container-fluid no-margin\">\n\n    <div class=\"col-sm-6 no-margin\">\n      <div class=\"image-wrapper\"\n        style=\"background-image: -webkit-linear-gradient(0,0,0,0.2), rgba(0,0,0,0.6),\n      url(assets/images/banner.jpg);background-image: linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.6)),url(assets/images/banner.jpg);background-size:cover;background-position:center right\">\n\n      </div>\n    </div>\n    <div class=\"col-sm-6 no-margin\">\n      <div class=\"login-page\">\n\n        <div class=\"login-content clearfix\">\n          <div class=\"logo-wrapper\">\n          <img src=\"assets/images/logo.png\" class=\"img-responsive\">\n        </div>\n        <br>\n          <div class=\"clearfix\"></div>\n          <form>\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"sizing-addon1\"><i data-icon=\"S\" class=\"icon\"></i></span>\n                <input type=\"email\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"Codice Fiscale\">\n              </div>\n            </div>\n\n            <div class=\"form-group\">\n              <div class=\"input-group\">\n                <span class=\"input-group-addon\" id=\"sizing-addon1\"><i data-icon=\"F\" class=\"icon\"></i></span>\n                <input type=\"password\" class=\"form-control\" id=\"exampleInputEmail1\" placeholder=\"password\">\n              </div>\n            </div>\n\n\n\n\n            <button type=\"submit\" routerLink=\"/homepage\" title=\"Home\" class=\"btn btn-blue btn-block\">Accedi</button>\n            <div class=\"clearfix\"></div><br>\n            <p class=\"forgot-password text-center\">Hai dimenticato la password ?</p>\n          </form>\n\n\n\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LoginComponent = /** @class */ (function () {
    function LoginComponent() {
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/news-detail/news-detail.component.css":
/*!*******************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.css ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/news-detail/news-detail.component.html":
/*!********************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  news-detail works!\n</p>\n"

/***/ }),

/***/ "./src/app/news-detail/news-detail.component.ts":
/*!******************************************************!*\
  !*** ./src/app/news-detail/news-detail.component.ts ***!
  \******************************************************/
/*! exports provided: NewsDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewsDetailComponent", function() { return NewsDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var NewsDetailComponent = /** @class */ (function () {
    function NewsDetailComponent() {
    }
    NewsDetailComponent.prototype.ngOnInit = function () {
    };
    NewsDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-news-detail',
            template: __webpack_require__(/*! ./news-detail.component.html */ "./src/app/news-detail/news-detail.component.html"),
            styles: [__webpack_require__(/*! ./news-detail.component.css */ "./src/app/news-detail/news-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NewsDetailComponent);
    return NewsDetailComponent;
}());



/***/ }),

/***/ "./src/app/richiesta-detail/richiesta-detail.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/richiesta-detail/richiesta-detail.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/richiesta-detail/richiesta-detail.component.html":
/*!******************************************************************!*\
  !*** ./src/app/richiesta-detail/richiesta-detail.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n\n<div class=\"main-content\">\n\n    <div class=\"main-image\">\n      <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-12 col-xs-12\">\n  \n            <h1>Dettaglio Richiesta</h1>\n            </div>\n          </div>\n      </div>\n    </div>\n  \n    <div class=\"box-wrapper\">\n      \n      \n\n  <div class=\"container\">  \n      <div class=\"detail-wrapper\">\n       \n          <div class=\"row\">\n\n          <div class=\"col-sm-12\">\n            <div class=\"content-request\">\n              <span class=\"btn btn-{{sale.type}} pull-right\">{{sale.type}}</span>\n              <h1>{{sale.name}}</h1>\n              <div class=\"date\">{{sale.date}}</div>\n              \n              <p>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies. Nulla commodo justo urna, quis egestas metus iaculis at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies.\n                <br><br>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies. Nulla commodo justo urna, quis egestas metus iaculis at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies.\n                <br><br>\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies. Nulla commodo justo urna, quis egestas metus iaculis at.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse dictum volutpat libero, ac tempus augue mattis quis. Aenean mollis metus a vehicula ultricies.\n                <br><br>\n              </p>\n            </div>\n          </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n"

/***/ }),

/***/ "./src/app/richiesta-detail/richiesta-detail.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/richiesta-detail/richiesta-detail.component.ts ***!
  \****************************************************************/
/*! exports provided: RichiestaDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichiestaDetailComponent", function() { return RichiestaDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RichiestaDetailComponent = /** @class */ (function () {
    function RichiestaDetailComponent(route) {
        this.route = route;
    }
    RichiestaDetailComponent.prototype.ngOnInit = function () {
        var id = this.route.snapshot.paramMap.get('id');
        this.sales = [
            { id: '1', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '2', type: 'Normale', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '3', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '4', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '5', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '6', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '7', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '8', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '9', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '10', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '11', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '12', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '13', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '14', type: 'Urgente', name: 'Richiesta Ferie', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '15', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '16', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '17', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '18', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '19', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '20', type: 'Urgente', name: 'Richiesta Permessi', user: 'Matthias Gutsch', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' }
        ];
        for (var _i = 0, _a = this.sales; _i < _a.length; _i++) {
            var sale = _a[_i];
            if (sale.id === id) {
                this.sale = sale;
            }
        }
    };
    RichiestaDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-richiesta-detail',
            template: __webpack_require__(/*! ./richiesta-detail.component.html */ "./src/app/richiesta-detail/richiesta-detail.component.html"),
            styles: [__webpack_require__(/*! ./richiesta-detail.component.css */ "./src/app/richiesta-detail/richiesta-detail.component.css")]
        }),
        __metadata("design:paramtypes", [_node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"]])
    ], RichiestaDetailComponent);
    return RichiestaDetailComponent;
}());



/***/ }),

/***/ "./src/app/richieste/richieste.component.css":
/*!***************************************************!*\
  !*** ./src/app/richieste/richieste.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/richieste/richieste.component.html":
/*!****************************************************!*\
  !*** ./src/app/richieste/richieste.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-content\">\n\n  <div class=\"main-image\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"col-sm-12 col-xs-12\">\n\n          <h1>Richieste</h1>\n        </div>\n      </div>\n    </div>\n  </div>\n\n  <div class=\"box-wrapper\">\n    <div class=\"container\">\n      <div class=\"row\">\n        <div class=\"breadcrumbs clearfix\">\n          <div class=\"col-sm-7\">\n\n          </div>\n          <div class=\"col-sm-3\">\n            <div class=\"calendar-wrapper\">\n              <p-calendar [(ngModel)]=\"value\" selectionMode=\"range\" inputStyleClass=\"form-control pull-right\">\n              </p-calendar>\n              <span class=\"calendar-icon\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i>\n              </span>\n            </div>\n          </div>\n          <div class=\"col-sm-2\">\n            <button type=\"button\" pButton class=\"btn btn-request btn-block pull-right\" label=\"Nuova Richiesta\" data-toggle=\"modal\"\n              data-target=\"#myModal\" icon=\"fa fa-plus\"></button>\n\n          </div>\n        </div>\n      </div>\n    </div>\n    <div class=\"clearfix\"></div>\n    <div class=\"container\">\n      <div class=\"list-wrapper\">\n        <div class=\"row\">\n\n\n          <div class=\"col-sm-12\">\n            <div class=\"content clearfix\">\n\n              <p-table [value]=\"sales\" [responsive]=\"true\" [paginator]=\"true\" [rows]=\"10\">\n                <ng-template pTemplate=\"header\" class=\"search-filter\">\n                  <tr class=\"sort-header\">\n                    <th>\n                    </th>\n                    <th [pSortableColumn]=\"'Age'\">Data\n                      <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                    </th>\n                    <th [pSortableColumn]=\"'Age'\">Priorità\n                      <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                    </th>\n                    <th [pSortableColumn]=\"'Age'\">Tipologia\n                      <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                    </th>\n                    <th [pSortableColumn]=\"'Age'\">Operatore\n                      <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                    </th>\n                    <th [pSortableColumn]=\"'Age'\">Reparto\n                      <p-sortIcon [field]=\"'Age'\"></p-sortIcon>\n                    </th>\n                    <th [pSortableColumn]=\"'Height'\">Status\n                      <p-sortIcon [field]=\"'Height'\"></p-sortIcon>\n                    </th>\n                    <th><button type=\"button\" pButton icon=\"fa fa-download\" class=\"btn btn-default pull-right\"\n                        label=\"Esporta\"></button>\n                    </th>\n                  </tr>\n                </ng-template>\n                <ng-template pTemplate=\"body\" let-sale>\n                  <tr>\n                    <td>{{sale.id}}</td>\n                    <td>{{sale.date}}</td>\n\n                    <td><span class=\"{{sale.type}}\">{{sale.type}}</span></td>\n                    <td><a routerLink=\"/richiesta-detail/{{sale.id}}\">{{sale.name}}</a></td>\n                    <td><i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n                      {{sale.user}}</td>\n                    <td>{{sale.reparto}}</td>\n                    <td><span class=\"label {{sale.status}}\">{{sale.status}}</span></td>\n\n                    <td>\n                      <button type=\"button\" pButton routerLink=\"/richiesta-detail/{{sale.id}}\"\n                        class=\"btn btn-default pull-right\" label=\"Visualizza\"></button>\n                    </td>\n                  </tr>\n                </ng-template>\n              </p-table>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n\n<div class=\"modal fade\" id=\"myModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"myModalLabel\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span\n            aria-hidden=\"true\">&times;</span></button>\n        <h4 class=\"modal-title\" id=\"myModalLabel\">Aggiungi Richiesta</h4>\n      </div>\n      <div class=\"modal-body clearfix\">\n        <form>\n          <div class=\"row\">\n            <div class=\"col-sm-6\">\n              <div class=\"user\"><i class=\"fa fa-user\" aria-hidden=\"true\"></i> Mario Rossi</div>\n            </div>\n            <div class=\"col-sm-6\">\n              <div class=\"date pull-right\"><i class=\"fa fa-calendar\" aria-hidden=\"true\"></i> 10/10/2019</div>\n            </div>\n            <div class=\"clearfix\"></div>\n            <hr>\n          </div>\n          <div class=\"row\">\n            <div class=\"col-sm-12\">\n              <label>Tipo di richiesta</label>\n              <p-dropdown [options]=\"segnalazione\" [ngModelOptions]=\"{standalone: true}\" [style]=\"{'width':'100%'}\"\n                [(ngModel)]=\"selectedCar\"></p-dropdown>\n\n              <div class=\"clearfix\"></div><br>\n            </div>\n\n\n            <div class=\"col-sm-12\">\n              <label>Reparto</label>\n              <p-dropdown [options]=\"reparto\" [ngModelOptions]=\"{standalone: true}\" filter=\"true\"\n                [style]=\"{'width':'100%'}\" [(ngModel)]=\"selectedCar\"></p-dropdown>\n\n              <div class=\"clearfix\"></div><br>\n            </div>\n\n            <div class=\"form-group clearfix\">\n              <label class=\"col-sm-12\">Messagio</label>\n              <div class=\"col-sm-12\"><textarea type=\"textarea\" class=\"form-control\" id=\"exampleInputEmail1\"\n                  [style]=\"{'height':'300px'}\" aria-describedby=\"emailHelp\" placeholder=\"Enter email\"></textarea></div>\n\n              <div class=\"clearfix\"></div>\n              <div class=\"col-sm-12\">\n                <div class=\"upload-box\">\n                  <p-fileUpload mode=\"basic\" placeholder=\"Aggiungi File\" name=\"demo[]\" url=\"./upload.php\"\n                    accept=\"image/*\" maxFileSize=\"1000000\"></p-fileUpload>\n                </div>\n              </div>\n            </div>\n\n\n\n            <div class=\"form-group clearfix\">\n              <div class=\"col-sm-12 text-center\">\n                <p-selectButton [options]=\"countries\" [ngModelOptions]=\"{standalone: true}\"\n                  [(ngModel)]=\"selectedCountry\">\n                  <ng-template let-item class=\"button-group\">\n                    <button class=\"btn btn-default btn-block\">{{item.name}}</button>\n                  </ng-template>\n                </p-selectButton>\n              </div>\n\n            </div>\n\n\n\n\n            <div class=\"col-sm-12\">\n\n              <button type=\"button\" class=\"btn btn-new btn-block btn-lg\" data-dismiss=\"modal\">Invia</button>\n            </div>\n          </div>\n        </form>\n      </div>\n\n    </div>\n  </div>"

/***/ }),

/***/ "./src/app/richieste/richieste.component.ts":
/*!**************************************************!*\
  !*** ./src/app/richieste/richieste.component.ts ***!
  \**************************************************/
/*! exports provided: RichiesteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RichiesteComponent", function() { return RichiesteComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var RichiesteComponent = /** @class */ (function () {
    function RichiesteComponent() {
    }
    RichiesteComponent.prototype.ngOnInit = function () {
        this.segnalazione = [
            { label: 'Segnalazione', value: '' }
        ];
        this.richiesta = [
            { label: 'Richiesta', value: '' }
        ];
        this.conformita = [
            { label: 'Non Conformità', value: '' }
        ];
        this.reparto = [
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Ford', value: 'Ford' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];
        this.countries = [
            { name: 'Normale' },
            { name: 'Urgente' }
        ];
        this.sales = [
            { id: '1', type: 'Urgente', name: 'Segnalazione', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'chiusa', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '2', type: 'Normale', name: 'Richiesta', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '3', type: 'Urgente', name: 'Richiesta', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'in-lavorazione', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '4', type: 'Urgente', name: 'Non conformità', user: 'Mario Rossi', reparto: 'Amministrazione', status: 'in-lavorazione', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '5', type: 'Urgente', name: 'Richiesta', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '6', type: 'Urgente', name: 'Non conformità', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '7', type: 'Normale', name: 'Richiesta', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '8', type: 'Urgente', name: 'Richiesta', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '9', type: 'Urgente', name: 'Non conformità', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
            { id: '10', type: 'Urgente', name: 'Richiesta', user: 'Federico Rossi', reparto: 'Amministrazione', status: 'aperta', tags: 'società, acquisizione, crescita', date: '15/11/2018', likes: '32', read: '323' },
        ];
    };
    RichiesteComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-richieste',
            template: __webpack_require__(/*! ./richieste.component.html */ "./src/app/richieste/richieste.component.html"),
            styles: [__webpack_require__(/*! ./richieste.component.css */ "./src/app/richieste/richieste.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], RichiesteComponent);
    return RichiesteComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/matthiasgutsch/git/cristoforetti/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map