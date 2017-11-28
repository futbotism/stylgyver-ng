webpackJsonp(["home.module"],{

/***/ "./src/app/home/home-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var routes = [{
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_0__home_home_component__["a" /* HomeComponent */]
    }];
var HomeRoutingModule = (function () {
    function HomeRoutingModule() {
    }
    return HomeRoutingModule;
}());
HomeRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], HomeRoutingModule);

//# sourceMappingURL=home-routing.module.js.map

/***/ }),

/***/ "./src/app/home/home.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_routing_module__ = __webpack_require__("./src/app/home/home-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("./src/app/home/home/home.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var HomeModule = (function () {
    function HomeModule() {
    }
    return HomeModule;
}());
HomeModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__home_routing_module__["a" /* HomeRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */]]
    })
], HomeModule);

//# sourceMappingURL=home.module.js.map

/***/ }),

/***/ "./src/app/home/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<header>\n  <div>\n    <h1>\n      <span>Styl</span>\n      <span>gyver</span>\n    </h1>\n    <h4>WD40 and a roll of ducktape for your styleguide</h4>\n  </div>\n\n  <span [@heroState]=\"'go-left'\" class=\"left-shade\"></span>\n  <span [@heroState]=\"'go-right'\" class=\"right-shade\"></span>\n</header>\n\n<section>\n    <h2>Install</h2>\n\n    <pre>{{example1}}</pre>\n\n</section>\n\n<section>\n    <h2>Import</h2>\n\n    <pre>{{example2}}</pre>\n\n  </section>\n\n  <section>\n    <h2>Define webpack options</h2>\n\n    <pre>{{example3}}</pre>\n</section>\n\n<section>\n    <h2>Consume your juicy meta</h2>\n\n    <pre>{{example4}}</pre>\n</section>\n\n<section>\n  <p>Generate app meta that lives anywhere in your app</p>\n  <p>Describe your components, directives, pipes, directives, services and models along side your internal styleguide</p>\n</section>\n"

/***/ }),

/***/ "./src/app/home/home/home.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-nav {\n  background: #9068be;\n  width: 200px; }\n  .side-nav mat-list {\n    position: fixed; }\n  .side-nav a {\n    text-decoration: none;\n    color: #e1e8f0; }\n    .side-nav a:hover {\n      color: #6ed3cf; }\n    .side-nav a.sub-item {\n      display: none; }\n      .side-nav a.sub-item.active {\n        display: block; }\n\nmat-sidenav-container {\n  height: 100%; }\n\n.content {\n  padding: 30px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nh1, h2, h3 {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 0 0;\n  margin-bottom: 10px;\n  border-bottom: solid 1px #e62739;\n  color: #55595d; }\n\nheader {\n  width: 100%;\n  display: table;\n  position: relative; }\n  header div {\n    display: block;\n    padding: 40px;\n    text-align: center;\n    width: 260px;\n    margin: 0 auto; }\n  header .left-shade {\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 50%;\n    height: 100%;\n    background: rgba(230, 39, 57, 0.9); }\n  header .right-shade {\n    position: absolute;\n    top: 0;\n    right: 0;\n    width: 50%;\n    height: 100%;\n    background: rgba(144, 104, 190, 0.9); }\n\nsection {\n  padding: 40px;\n  min-height: calc(40vh - 64px);\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  -webkit-box-orient: vertical;\n  -webkit-box-direction: normal;\n      -ms-flex-direction: column;\n          flex-direction: column;\n  -webkit-box-align: center;\n      -ms-flex-align: center;\n          align-items: center;\n  -webkit-box-pack: center;\n      -ms-flex-pack: center;\n          justify-content: center; }\n  section:nth-child(odd) {\n    background: #6ed3cf; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/home/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_animations__ = __webpack_require__("./node_modules/@angular/animations/@angular/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent() {
        this.example1 = 'npm install stylgyver-webpack --save-dev';
        this.example2 = "const StylgyverPlugin = require('../stylgyver-webpack');";
        this.example3 = "new StylgyverPlugin({\n    outputPath: './src/app/styleguide/meta.json',\n    sourceOptions: [{\n        parseType: 'component',\n        name: 'components',\n        path: 'src/app/shared/components'\n      },{\n        name: 'models',\n        parseType: 'model',\n        path: 'src/app/shared/models',\n        addMetaToArray: 'true'\n      },{\n        name: 'pipes',\n        parseType: 'pipe',\n        path: 'src/app/shared/pipes',\n        addMetaToArray: 'true'\n      },{\n        name: 'directives',\n        parseType: 'directive',\n        path: 'src/app/shared/directives',\n        addMetaToArray: 'true'\n      }\n    ]\n  })";
        this.example4 = "this.styleguideMeta = this.http.get('src/app/styleguide/meta.json').map(meta => meta.json());";
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    return HomeComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["z" /* HostBinding */])('class.page-container--column'),
    __metadata("design:type", Object)
], HomeComponent.prototype, "true", void 0);
HomeComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["o" /* Component */])({
        selector: 'sg-home',
        template: __webpack_require__("./src/app/home/home/home.component.html"),
        styles: [__webpack_require__("./src/app/home/home/home.component.scss")],
        animations: [
            Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["k" /* trigger */])('heroState', [
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('go-right', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    // backgroundColor: '#cfd8dc',
                    transform: 'translateX(60%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["h" /* state */])('go-left', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["i" /* style */])({
                    // backgroundColor: '#cfd8dc',
                    transform: 'translateX(-60%)'
                })),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => go-left', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1600ms ease-in-out')),
                Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["j" /* transition */])('* => go-right', Object(__WEBPACK_IMPORTED_MODULE_0__angular_animations__["e" /* animate */])('1600ms ease-in-out')),
            ])
        ]
    }),
    __metadata("design:paramtypes", [])
], HomeComponent);

//# sourceMappingURL=home.component.js.map

/***/ })

});
//# sourceMappingURL=home.module.chunk.js.map