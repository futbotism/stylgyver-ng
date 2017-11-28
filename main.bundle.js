webpackJsonp(["main"],{

/***/ "./src/$$_gendir lazy recursive":
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./docs/docs.module": [
		"./src/app/docs/docs.module.ts",
		"docs.module"
	],
	"./home/home.module": [
		"./src/app/home/home.module.ts",
		"home.module"
	],
	"./styleguide/styleguide.module": [
		"./src/app/styleguide/styleguide.module.ts",
		"styleguide.module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_gendir lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("./node_modules/@angular/router/@angular/router.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var routes = [
    // {
    //   path: '',
    //   component: AppComponent,
    //   children: [
    {
        path: '',
        loadChildren: './home/home.module#HomeModule'
    },
    {
        path: 'docs',
        loadChildren: './docs/docs.module#DocsModule'
    },
    {
        path: 'styleguide',
        loadChildren: './styleguide/styleguide.module#StyleguideModule'
    }
    //   ]
    // }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */].forRoot(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["b" /* RouterModule */]]
    })
], AppRoutingModule);

//# sourceMappingURL=app-routing.module.js.map

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"secondary\">\n  <a mat-button routerLink=\"/\">Stylgyver</a>\n  <span class=\"spacer\"></span>\n  <a mat-button routerLink=\"/docs\">Docs</a>\n  <a mat-button routerLink=\"/styleguide\">Styleguide</a>\n</mat-toolbar>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-nav {\n  background: #9068be;\n  width: 200px; }\n  .side-nav mat-list {\n    position: fixed; }\n  .side-nav a {\n    text-decoration: none;\n    color: #e1e8f0; }\n    .side-nav a:hover {\n      color: #6ed3cf; }\n    .side-nav a.sub-item {\n      display: none; }\n      .side-nav a.sub-item.active {\n        display: block; }\n\nmat-sidenav-container {\n  height: 100%; }\n\n.content {\n  padding: 30px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nh1, h2, h3 {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 0 0;\n  margin-bottom: 10px;\n  border-bottom: solid 1px #e62739;\n  color: #55595d; }\n\n.spacer {\n  -webkit-box-flex: 1;\n      -ms-flex: 1 1 auto;\n          flex: 1 1 auto; }\n\n.mat-toolbar {\n  position: fixed;\n  background: #55595d; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'sg';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sg-root',
        template: __webpack_require__("./src/app/app.component.html"),
        styles: [__webpack_require__("./src/app/app.component.scss")]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__("./node_modules/@angular/http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__ = __webpack_require__("./node_modules/@angular/platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_routing_module__ = __webpack_require__("./src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__app_routing_module__["a" /* AppRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_6__shared_shared_module__["a" /* SharedModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */]
        ],
        providers: [],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ "./src/app/shared/components/magyver-list/magyver-list.component.html":
/***/ (function(module, exports) {

module.exports = "<mat-card>\n  <mat-card-title>\n    {{activeMember.name}}\n  </mat-card-title>\n  <img mat-card-image [src]=\"activeMember.image\">\n  <mat-card-content>\n    <p>{{activeMember.description}}</p>\n  </mat-card-content>\n</mat-card>\n\n<button  *ngFor=\"let member of castMembers\" mat-button (click)=\"selectMemmber(member)\">{{member.name}}</button>\n\n"

/***/ }),

/***/ "./src/app/shared/components/magyver-list/magyver-list.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ":host {\n  display: block; }\n\nbutton {\n  width: 24%;\n  margin: 1% 0.5% 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/shared/components/magyver-list/magyver-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagyverListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
 * This component will show cast members from magyver and information about
 * *
 * **Example usage**
 *
 * ```html
 * <sg-magyver-list
 *        (itemClicked)="onItemSelected()"
 *        [castMembers]="list">
 * </sg-magyver-list>
 * ```
 *
 * @export
 * @class MagyverListComponent
 * @Input castMembers
 * @implements {OnInit}
 */
var MagyverListComponent = (function () {
    function MagyverListComponent() {
        this.itemClicked = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["x" /* EventEmitter */]();
    }
    MagyverListComponent.prototype.ngOnInit = function () {
        this.activeMember = this.castMembers[0];
    };
    MagyverListComponent.prototype.selectMemmber = function (chosenMember) {
        this.activeMember = chosenMember;
    };
    return MagyverListComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", Array)
], MagyverListComponent.prototype, "castMembers", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Output */])(),
    __metadata("design:type", Object)
], MagyverListComponent.prototype, "itemClicked", void 0);
MagyverListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sg-magyver-list',
        template: __webpack_require__("./src/app/shared/components/magyver-list/magyver-list.component.html"),
        styles: [__webpack_require__("./src/app/shared/components/magyver-list/magyver-list.component.scss")]
    }),
    __metadata("design:paramtypes", [])
], MagyverListComponent);

//# sourceMappingURL=magyver-list.component.js.map

/***/ }),

/***/ "./src/app/shared/directives/colorify.directive.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ColorifyDirective; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
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
 * This is a directive
 */
var ColorifyDirective = (function () {
    function ColorifyDirective(_element, renderer) {
        this._element = _element;
        this.renderer = renderer;
        renderer.setElementStyle(_element, 'color', 'red');
    }
    return ColorifyDirective;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["F" /* Input */])(),
    __metadata("design:type", String)
], ColorifyDirective.prototype, "color", void 0);
ColorifyDirective = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["u" /* Directive */])({
        selector: '[sgColorify]'
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ElementRef */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["_1" /* Renderer */]) === "function" && _b || Object])
], ColorifyDirective);

var _a, _b;
//# sourceMappingURL=colorify.directive.js.map

/***/ }),

/***/ "./src/app/shared/pipes/magyverfy-string.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MagyverfyString; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * The magyver pipe append 'magyver to given string
 *
 * ```html
 * <p>{{'hello | MagyverfyString}}</p>
 * ```
 *
 * @export
 * @class MagyverfyString
 * @implements {PipeTransform}
 */
var MagyverfyString = (function () {
    function MagyverfyString() {
    }
    MagyverfyString.prototype.transform = function (value, args) {
        return value + '-Magyverfy';
    };
    return MagyverfyString;
}());
MagyverfyString = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({
        name: 'MagyverfyString'
    })
], MagyverfyString);

//# sourceMappingURL=magyverfy-string.pipe.js.map

/***/ }),

/***/ "./src/app/shared/pipes/title-case.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleCasePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/**
 * The title case pipe changes a word to upper case
 *
 * ```html
 * <p>{{'hello | PipeTransform}}</p>
 * ```
 *
 * @export
 * @class MagyverfyString
 * @implements {PipeTransform}
 */
var TitleCasePipe = (function () {
    function TitleCasePipe() {
    }
    TitleCasePipe.prototype.transform = function (input) {
        var words = input.split(' ');
        var casedWords = words.map(function (word) { return word[0].toLocaleUpperCase() + word.slice(1); });
        return casedWords.join(' ');
    };
    return TitleCasePipe;
}());
TitleCasePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["X" /* Pipe */])({ name: 'titlecase' })
], TitleCasePipe);

//# sourceMappingURL=title-case.pipe.js.map

/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_material__ = __webpack_require__("./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__ = __webpack_require__("./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_magyver_list_magyver_list_component__ = __webpack_require__("./src/app/shared/components/magyver-list/magyver-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pipes_magyverfy_string_pipe__ = __webpack_require__("./src/app/shared/pipes/magyverfy-string.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_pipes_title_case_pipe__ = __webpack_require__("./src/app/shared/pipes/title-case.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__directives_colorify_directive__ = __webpack_require__("./src/app/shared/directives/colorify.directive.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var SharedModule = (function () {
    function SharedModule() {
    }
    return SharedModule;
}());
SharedModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__components_magyver_list_magyver_list_component__["a" /* MagyverListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCard */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardContent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardSmImage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardTitle */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatToolbar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarRow */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_magyverfy_string_pipe__["a" /* MagyverfyString */],
            __WEBPACK_IMPORTED_MODULE_6__shared_pipes_title_case_pipe__["a" /* TitleCasePipe */],
            __WEBPACK_IMPORTED_MODULE_7__directives_colorify_directive__["a" /* ColorifyDirective */],
        ],
        exports: [
            __WEBPACK_IMPORTED_MODULE_4__components_magyver_list_magyver_list_component__["a" /* MagyverListComponent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["f" /* MatExpansionModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["a" /* MatButtonModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["b" /* MatCard */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["c" /* MatCardContent */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["d" /* MatCardSmImage */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["e" /* MatCardTitle */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["h" /* MatListModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["i" /* MatSidenavModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["k" /* MatToolbar */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["l" /* MatToolbarRow */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["g" /* MatIconModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_material__["j" /* MatTableModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_flex_layout__["a" /* FlexLayoutModule */],
            __WEBPACK_IMPORTED_MODULE_5__pipes_magyverfy_string_pipe__["a" /* MagyverfyString */],
            __WEBPACK_IMPORTED_MODULE_6__shared_pipes_title_case_pipe__["a" /* TitleCasePipe */]
        ]
    })
], SharedModule);

//# sourceMappingURL=shared.module.js.map

/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_24" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map