webpackJsonp(["docs.module"],{

/***/ "./node_modules/rxjs/add/observable/of.js":
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var Observable_1 = __webpack_require__("./node_modules/rxjs/Observable.js");
var of_1 = __webpack_require__("./node_modules/rxjs/observable/of.js");
Observable_1.Observable.of = of_1.of;
//# sourceMappingURL=of.js.map

/***/ }),

/***/ "./src/app/docs/docs-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__docs_docs_component__ = __webpack_require__("./src/app/docs/docs/docs.component.ts");
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
        component: __WEBPACK_IMPORTED_MODULE_0__docs_docs_component__["a" /* DocsComponent */]
    }];
var DocsRoutingModule = (function () {
    function DocsRoutingModule() {
    }
    return DocsRoutingModule;
}());
DocsRoutingModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forChild(routes)],
        exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]]
    })
], DocsRoutingModule);

//# sourceMappingURL=docs-routing.module.js.map

/***/ }),

/***/ "./src/app/docs/docs.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocsModule", function() { return DocsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__ = __webpack_require__("./src/app/shared/shared.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common__ = __webpack_require__("./node_modules/@angular/common/@angular/common.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__docs_routing_module__ = __webpack_require__("./src/app/docs/docs-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__docs_docs_component__ = __webpack_require__("./src/app/docs/docs/docs.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var DocsModule = (function () {
    function DocsModule() {
    }
    return DocsModule;
}());
DocsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["M" /* NgModule */])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_2__angular_common__["b" /* CommonModule */],
            __WEBPACK_IMPORTED_MODULE_3__docs_routing_module__["a" /* DocsRoutingModule */],
            __WEBPACK_IMPORTED_MODULE_0__shared_shared_module__["a" /* SharedModule */]
        ],
        declarations: [__WEBPACK_IMPORTED_MODULE_4__docs_docs_component__["a" /* DocsComponent */]]
    })
], DocsModule);

//# sourceMappingURL=docs.module.js.map

/***/ }),

/***/ "./src/app/docs/docs/docs.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"side-nav\">\n  <mat-list>\n    <a mat-list-item href=\"/docs#options\">Options</a>\n    <a mat-list-item href=\"/docs#sourceOption\">sourceOption</a>\n    <a mat-list-item href=\"/docs#metaObject\">metaObject</a>\n    <a mat-list-item href=\"/docs#jsdoc\">jsdoc</a>\n  </mat-list>\n</div>\n\n<div class=\"content\">\n\n  <div class=\"input\">\n\n    <section id=\"options\">\n      <h2 class=\"title\">Options</h2>\n      <p>The initial options passed into the plugin</p>\n\n      <div class=\"table\">\n        <table>\n          <tr>\n            <td>Name</td>\n            <td>Type</td>\n            <td>Description</td>\n          </tr>\n          <tr *ngFor=\"let option of options\">\n            <td>{{option.name}}</td>\n            <td>{{option.type}}</td>\n            <td>{{option.description}}</td>\n          </tr>\n        </table>\n      </div>\n    </section>\n\n    <section id=\"sourceOption\">\n      <h2 class=\"title\">SourceOption</h2>\n      <p>Options for each directory you would like to scan</p>\n\n      <div class=\"table\">\n        <table>\n          <tr>\n            <td>Name</td>\n            <td>Type</td>\n            <td>Description</td>\n          </tr>\n          <tr *ngFor=\"let option of sourceOptions\">\n            <td>{{option.name}}</td>\n            <td>{{option.type}}</td>\n            <td>{{option.description}}</td>\n          </tr>\n        </table>\n      </div>\n    </section>\n\n  </div>\n\n  <div class=\"output\">\n\n    <section id=\"metaObject\">\n      <h2 class=\"title\">metaObject</h2>\n      <p>Options for each directory you would like to scan</p>\n\n      <div class=\"table\">\n        <table>\n          <tr>\n            <td>Name</td>\n            <td>Type</td>\n            <td>Description</td>\n          </tr>\n          <tr *ngFor=\"let option of metaObjects\">\n            <td>{{option.name}}</td>\n            <td>{{option.type}}</td>\n            <td>{{option.description}}</td>\n          </tr>\n        </table>\n      </div>\n    </section>\n\n  </div>\n\n  <div class=\"doc\">\n\n    <section id=\"jsdoc\">\n      <h2 class=\"title\">Source Comments parser</h2>\n      <p>Example of a comment block you can place at the top of your file to parse your own comments into the styleguide</p>\n\n      <pre>\n    {{'...\\r\\n\\r\\n      \\/**\\r\\n      * This component will show cast members from magyver and information about\\r\\n      * *\\r\\n      * **Example usage**\\r\\n      *\\r\\n      * ```html\\r\\n      * <sg-magyver-list\\r\\n      *        (itemClicked)=\\\"onItemSelected()\\\"\\r\\n      *        [castMembers]=\\\"list\\\">\\r\\n      * <\\/sg-magyver-list>\\r\\n      * ```\\r\\n      *\\r\\n      * @export\\r\\n      * @class MagyverListComponent\\r\\n      * @Input castMembers\\r\\n      * @implements {OnInit}\\r\\n      *\\/\\r\\n     @Component({\\r\\n       selector: \\'sg-magyver-list\\',\\r\\n       templateUrl: \\'.\\/magyver-list.component.html\\',\\r\\n       styleUrls: [\\'.\\/magyver-list.component.scss\\']\\r\\n     })\\r\\n     export class MagyverListComponent implements OnInit {\\r\\n\\r\\n      ...\\r\\n\\r\\n     };'}}\n    </pre>\n\n      <p>See the output\n        <a href=\"styleguide/components#magyverList\">here</a>\n      </p>\n    </section>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/docs/docs/docs.component.scss":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".side-nav {\n  background: #9068be;\n  width: 200px; }\n  .side-nav mat-list {\n    position: fixed; }\n  .side-nav a {\n    text-decoration: none;\n    color: #e1e8f0; }\n    .side-nav a:hover {\n      color: #6ed3cf; }\n    .side-nav a.sub-item {\n      display: none; }\n      .side-nav a.sub-item.active {\n        display: block; }\n\nmat-sidenav-container {\n  height: 100%; }\n\n.content {\n  padding: 30px;\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1; }\n\nh1, h2, h3 {\n  display: inline-block;\n  margin: 0;\n  padding: 5px 0 0;\n  margin-bottom: 10px;\n  border-bottom: solid 1px #e62739;\n  color: #55595d; }\n\n.input, .output, .doc {\n  padding: 10px;\n  margin-bottom: 20px; }\n\n.input {\n  background: rgba(230, 39, 57, 0.3); }\n\n.output {\n  background: rgba(110, 211, 207, 0.3); }\n\ntable tr td {\n  padding: 5px;\n  border: solid 1px #55595d;\n  font-size: 12px; }\n\nsection p {\n  margin-top: 0; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "./src/app/docs/docs/docs.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DocsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__ = __webpack_require__("./node_modules/rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DocsComponent = (function () {
    function DocsComponent() {
        this.displayedColumns = ['name', 'type', 'description'];
        this.options = [
            { name: 'outputPath', type: 'String', description: 'path to the output of your styleguide' },
            { name: 'sourceOptions', type: 'SourceOption[]', description: 'An array of Options for each folder source you would like to scan' },
        ];
        this.sourceOptions = [
            { name: 'name', type: 'string', description: 'path to the output of your styleguide' },
            {
                name: 'parseType',
                type: 'parseType',
                description: 'specify the contents of the folder, options are "component", "pipe", "model", "service" or "directive"'
            },
            { name: 'path', type: 'string', description: 'the root path of the folder you would like to scan' },
            {
                name: 'folderToIgnore',
                type: 'string[]',
                description: 'any sub folders or files you would like to ignore and not add to the output'
            },
            {
                name: 'addMetaToArray',
                type: 'boolean',
                description: 'If checked, the meta objects will be output into an array that can be iterated, defaults off'
            },
        ];
        this.metaObjects = [
            { name: 'id', type: 'String', description: 'path to the output of your styleguide' },
            { name: 'title', type: 'string', description: 'An array of Options for each folder source you would like to scan' },
            { name: 'description', type: 'string', description: 'A description taken from the comment block /** ... **/ of your comment' },
            { name: 'properties', type: 'Property[]', description: 'A standard class property, key, type and decorator' },
            { name: 'health', type: 'Health', description: 'An collection of variables that describe the targets health' },
        ];
    }
    return DocsComponent;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["z" /* HostBinding */])('class.page-container'),
    __metadata("design:type", Object)
], DocsComponent.prototype, "true", void 0);
DocsComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["o" /* Component */])({
        selector: 'sg-docs',
        template: __webpack_require__("./src/app/docs/docs/docs.component.html"),
        styles: [__webpack_require__("./src/app/docs/docs/docs.component.scss")]
    })
], DocsComponent);

// name: string;
// parseType: parseType;
// path: string;
// folderToIgnore: string[];
// tagsToSelect: string[];
// addMetaToArray: boolean;
//# sourceMappingURL=docs.component.js.map

/***/ })

});
//# sourceMappingURL=docs.module.chunk.js.map