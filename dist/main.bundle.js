webpackJsonp([4,8],{

/***/ 232:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/configure/configure.module": [
		368,
		2
	],
	"app/home/home.module": [
		369,
		1
	],
	"app/setting/setting.module": [
		370,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 232;


/***/ }),

/***/ 233:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(247);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 243:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app works!';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(325),
        styles: [__webpack_require__(316)]
    })
], AppComponent);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 244:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(240);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__(243);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_main_layout_main_layout_component__ = __webpack_require__(72);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_routing__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__shared_main_layout_header_header_component__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_socketio_socket_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__shared_data_service__ = __webpack_require__(68);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__shared_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
            __WEBPACK_IMPORTED_MODULE_7__shared_main_layout_header_header_component__["a" /* HeaderComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_6__app_routing__["a" /* routing */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_8__shared_socketio_socket_service__["a" /* SocketService */],
            __WEBPACK_IMPORTED_MODULE_9__shared_data_service__["a" /* DataService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 245:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_main_layout_main_layout_component__ = __webpack_require__(72);
/* unused harmony export routes */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return routing; });


var routes = [
    {
        path: '',
        component: __WEBPACK_IMPORTED_MODULE_1__shared_main_layout_main_layout_component__["a" /* MainLayoutComponent */],
        children: [
            {
                path: '', redirectTo: 'home', pathMatch: 'full',
            },
            { path: 'home', loadChildren: 'app/home/home.module#HomeModule', data: { pageTitle: 'Home' } },
            { path: 'configure', loadChildren: 'app/configure/configure.module#ConfigureModule', data: { pageTitle: 'configure' } },
            { path: 'setting', loadChildren: 'app/setting/setting.module#SettingModule', data: { pageTitle: 'Setting' } }
        ]
    }
];
var routing = __WEBPACK_IMPORTED_MODULE_0__angular_router__["c" /* RouterModule */].forRoot(routes, { useHash: true });
//# sourceMappingURL=app.routing.js.map

/***/ }),

/***/ 246:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_data_service__ = __webpack_require__(68);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_moment__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HeaderComponent = (function () {
    function HeaderComponent(dataService) {
        this.dataService = dataService;
        this.date = __WEBPACK_IMPORTED_MODULE_2_moment__().format('MMM Do');
        this.time = __WEBPACK_IMPORTED_MODULE_2_moment__().format('HH:mm:ss');
    }
    HeaderComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.dtUpdate = this.dataService.sensorUpdate.asObservable().subscribe(function (data) {
            // console.log(data);
            var datetime = data.date + " " + data.time;
            _this.date = __WEBPACK_IMPORTED_MODULE_2_moment__(datetime).format('MMM Do');
            _this.time = __WEBPACK_IMPORTED_MODULE_2_moment__(datetime).format('HH:mm:ss');
        });
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        this.dtUpdate.unsubscribe();
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'app-header',
        template: __webpack_require__(326),
        styles: [__webpack_require__(317)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__shared_data_service__["a" /* DataService */]) === "function" && _a || Object])
], HeaderComponent);

var _a;
//# sourceMappingURL=header.component.js.map

/***/ }),

/***/ 247:
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

/***/ 316:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 317:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, ".datetime-text {\n    color: rgb(53, 122, 76);\n  }", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 318:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(19)(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 321:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 90,
	"./af.js": 90,
	"./ar": 97,
	"./ar-dz": 91,
	"./ar-dz.js": 91,
	"./ar-kw": 92,
	"./ar-kw.js": 92,
	"./ar-ly": 93,
	"./ar-ly.js": 93,
	"./ar-ma": 94,
	"./ar-ma.js": 94,
	"./ar-sa": 95,
	"./ar-sa.js": 95,
	"./ar-tn": 96,
	"./ar-tn.js": 96,
	"./ar.js": 97,
	"./az": 98,
	"./az.js": 98,
	"./be": 99,
	"./be.js": 99,
	"./bg": 100,
	"./bg.js": 100,
	"./bm": 101,
	"./bm.js": 101,
	"./bn": 102,
	"./bn.js": 102,
	"./bo": 103,
	"./bo.js": 103,
	"./br": 104,
	"./br.js": 104,
	"./bs": 105,
	"./bs.js": 105,
	"./ca": 106,
	"./ca.js": 106,
	"./cs": 107,
	"./cs.js": 107,
	"./cv": 108,
	"./cv.js": 108,
	"./cy": 109,
	"./cy.js": 109,
	"./da": 110,
	"./da.js": 110,
	"./de": 113,
	"./de-at": 111,
	"./de-at.js": 111,
	"./de-ch": 112,
	"./de-ch.js": 112,
	"./de.js": 113,
	"./dv": 114,
	"./dv.js": 114,
	"./el": 115,
	"./el.js": 115,
	"./en-au": 116,
	"./en-au.js": 116,
	"./en-ca": 117,
	"./en-ca.js": 117,
	"./en-gb": 118,
	"./en-gb.js": 118,
	"./en-ie": 119,
	"./en-ie.js": 119,
	"./en-il": 120,
	"./en-il.js": 120,
	"./en-nz": 121,
	"./en-nz.js": 121,
	"./eo": 122,
	"./eo.js": 122,
	"./es": 125,
	"./es-do": 123,
	"./es-do.js": 123,
	"./es-us": 124,
	"./es-us.js": 124,
	"./es.js": 125,
	"./et": 126,
	"./et.js": 126,
	"./eu": 127,
	"./eu.js": 127,
	"./fa": 128,
	"./fa.js": 128,
	"./fi": 129,
	"./fi.js": 129,
	"./fo": 130,
	"./fo.js": 130,
	"./fr": 133,
	"./fr-ca": 131,
	"./fr-ca.js": 131,
	"./fr-ch": 132,
	"./fr-ch.js": 132,
	"./fr.js": 133,
	"./fy": 134,
	"./fy.js": 134,
	"./gd": 135,
	"./gd.js": 135,
	"./gl": 136,
	"./gl.js": 136,
	"./gom-latn": 137,
	"./gom-latn.js": 137,
	"./gu": 138,
	"./gu.js": 138,
	"./he": 139,
	"./he.js": 139,
	"./hi": 140,
	"./hi.js": 140,
	"./hr": 141,
	"./hr.js": 141,
	"./hu": 142,
	"./hu.js": 142,
	"./hy-am": 143,
	"./hy-am.js": 143,
	"./id": 144,
	"./id.js": 144,
	"./is": 145,
	"./is.js": 145,
	"./it": 146,
	"./it.js": 146,
	"./ja": 147,
	"./ja.js": 147,
	"./jv": 148,
	"./jv.js": 148,
	"./ka": 149,
	"./ka.js": 149,
	"./kk": 150,
	"./kk.js": 150,
	"./km": 151,
	"./km.js": 151,
	"./kn": 152,
	"./kn.js": 152,
	"./ko": 153,
	"./ko.js": 153,
	"./ky": 154,
	"./ky.js": 154,
	"./lb": 155,
	"./lb.js": 155,
	"./lo": 156,
	"./lo.js": 156,
	"./lt": 157,
	"./lt.js": 157,
	"./lv": 158,
	"./lv.js": 158,
	"./me": 159,
	"./me.js": 159,
	"./mi": 160,
	"./mi.js": 160,
	"./mk": 161,
	"./mk.js": 161,
	"./ml": 162,
	"./ml.js": 162,
	"./mn": 163,
	"./mn.js": 163,
	"./mr": 164,
	"./mr.js": 164,
	"./ms": 166,
	"./ms-my": 165,
	"./ms-my.js": 165,
	"./ms.js": 166,
	"./mt": 167,
	"./mt.js": 167,
	"./my": 168,
	"./my.js": 168,
	"./nb": 169,
	"./nb.js": 169,
	"./ne": 170,
	"./ne.js": 170,
	"./nl": 172,
	"./nl-be": 171,
	"./nl-be.js": 171,
	"./nl.js": 172,
	"./nn": 173,
	"./nn.js": 173,
	"./pa-in": 174,
	"./pa-in.js": 174,
	"./pl": 175,
	"./pl.js": 175,
	"./pt": 177,
	"./pt-br": 176,
	"./pt-br.js": 176,
	"./pt.js": 177,
	"./ro": 178,
	"./ro.js": 178,
	"./ru": 179,
	"./ru.js": 179,
	"./sd": 180,
	"./sd.js": 180,
	"./se": 181,
	"./se.js": 181,
	"./si": 182,
	"./si.js": 182,
	"./sk": 183,
	"./sk.js": 183,
	"./sl": 184,
	"./sl.js": 184,
	"./sq": 185,
	"./sq.js": 185,
	"./sr": 187,
	"./sr-cyrl": 186,
	"./sr-cyrl.js": 186,
	"./sr.js": 187,
	"./ss": 188,
	"./ss.js": 188,
	"./sv": 189,
	"./sv.js": 189,
	"./sw": 190,
	"./sw.js": 190,
	"./ta": 191,
	"./ta.js": 191,
	"./te": 192,
	"./te.js": 192,
	"./tet": 193,
	"./tet.js": 193,
	"./tg": 194,
	"./tg.js": 194,
	"./th": 195,
	"./th.js": 195,
	"./tl-ph": 196,
	"./tl-ph.js": 196,
	"./tlh": 197,
	"./tlh.js": 197,
	"./tr": 198,
	"./tr.js": 198,
	"./tzl": 199,
	"./tzl.js": 199,
	"./tzm": 201,
	"./tzm-latn": 200,
	"./tzm-latn.js": 200,
	"./tzm.js": 201,
	"./ug-cn": 202,
	"./ug-cn.js": 202,
	"./uk": 203,
	"./uk.js": 203,
	"./ur": 204,
	"./ur.js": 204,
	"./uz": 206,
	"./uz-latn": 205,
	"./uz-latn.js": 205,
	"./uz.js": 206,
	"./vi": 207,
	"./vi.js": 207,
	"./x-pseudo": 208,
	"./x-pseudo.js": 208,
	"./yo": 209,
	"./yo.js": 209,
	"./zh-cn": 210,
	"./zh-cn.js": 210,
	"./zh-hk": 211,
	"./zh-hk.js": 211,
	"./zh-tw": 212,
	"./zh-tw.js": 212
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 321;


/***/ }),

/***/ 325:
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>"

/***/ }),

/***/ 326:
/***/ (function(module, exports) {

module.exports = "<div class=\"container\" style=\"margin-bottom: 20px; margin-top: 10px;\">\n    <div class=\"col-xs-2 col-sm-2 col-md-2 col-lg-2\">\n        <img src=\"assets/img/logo.png\" alt=\"\" height=\"52\" width=\"181\">\n    </div>\n    <div class=\"col-xs-12 col-sm-12 col-md-3 col-lg-3\">\n        <h2><b>EC control 1.3</b></h2>\n    </div>\n    <div class=\"col-lg-4\" style=\"margin-top: 20px;\">\n        <a routerLink=\"/home\">\n            <button type=\"button\" class=\"btn btn-round btn-success btn-lg\"><i class=\"fa fa-bar-chart\" aria-hidden=\"true\"></i>Summary </button>\n        </a>\n        <!-- <a routerLink=\"/configure\">\n            <button type=\"button\" class=\"btn btn-round btn-primary  btn-lg\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Configure</button>\n        </a> -->\n        <a routerLink=\"/setting/menu-list\">\n            <button type=\"button\" class=\"btn btn-round btn-default  btn-lg\"><i class=\"fa fa-cogs\" aria-hidden=\"true\"></i> Setting</button>\n        </a>\n    </div>\n\n    <div class=\"pull-right\" style=\"margin-top: 10px;\">\n        <h2 class=\"datetime-text\">{{date}} {{time}} </h2>\n    </div>\n</div>"

/***/ }),

/***/ 327:
/***/ (function(module, exports) {

module.exports = "<app-header>\n</app-header>\n\n<router-outlet>\n</router-outlet>"

/***/ }),

/***/ 363:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ 364:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(233);


/***/ }),

/***/ 68:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__socketio_socket_service__ = __webpack_require__(69);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var DataService = (function () {
    function DataService(io) {
        var _this = this;
        this.io = io;
        this.sensorData = {};
        this.isUpdateClick = false;
        this.focusedSensor = 'ec';
        this.isUpdateSuccess = false;
        this.image = "assets/img/Spinner.svg";
        this.sensorLog = {
            'ec': [],
            'ph': [],
            'o2': [],
            'co2': [],
            'temp': [],
            'humi': []
        };
        this.settingData = {
            'ec-setpoint': 0,
            'ec-working': 0,
            'ec-detecting': 0,
            'ec-mode': 2,
            'ect-working': 0,
            'ect-list': [],
            'timerMode': false,
            'sensorMode': false,
            'timerList': []
        };
        this.sensorUpdate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.ecControlUpdate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.ecTimerControlUpdate = new __WEBPACK_IMPORTED_MODULE_2_rxjs_Subject__["Subject"]();
        this.io.socket.on('SENSOR_DATA', function (data) {
            _this.sensorData = data;
            var dt = data.date + " " + data.time;
            var dateTime = moment(dt);
            _this.sensorLog['ec'].push({
                x: dateTime,
                y: data.ec
            });
            if (_this.sensorLog['ec'].length >= 60)
                _this.sensorLog['ec'].shift();
            _this.sensorLog['ph'].push({
                x: dateTime,
                y: data.ph
            });
            if (_this.sensorLog['ph'].length >= 60)
                _this.sensorLog['ph'].shift();
            _this.sensorLog['co2'].push({
                x: dateTime,
                y: data.co2
            });
            if (_this.sensorLog['co2'].length >= 60)
                _this.sensorLog['co2'].shift();
            _this.sensorLog['temp'].push({
                x: dateTime,
                y: data.temp
            });
            if (_this.sensorLog['temp'].length >= 60)
                _this.sensorLog['temp'].shift();
            _this.sensorLog['o2'].push({
                x: dateTime,
                y: data.o2
            });
            if (_this.sensorLog['o2'].length >= 60)
                _this.sensorLog['o2'].shift();
            _this.sensorLog['humi'].push({
                x: dateTime,
                y: data.humi
            });
            if (_this.sensorLog['humi'].length >= 60)
                _this.sensorLog['humi'].shift();
            _this.sensorUpdate.next(data);
        });
        this.io.socket.on("SHORT_LOGGER_REP", function (data) {
            data.forEach(function (d) {
                var dt = d.date + " " + d.time;
                var dateTime = moment(dt);
                _this.sensorLog['ec'].push({
                    x: dateTime,
                    y: d.ec
                });
                _this.sensorLog['ph'].push({
                    x: dateTime,
                    y: d.ph
                });
                _this.sensorLog['co2'].push({
                    x: dateTime,
                    y: d.co2
                });
                _this.sensorLog['temp'].push({
                    x: dateTime,
                    y: d.temp
                });
                _this.sensorLog['o2'].push({
                    x: dateTime,
                    y: d.o2
                });
                _this.sensorLog['humi'].push({
                    x: dateTime,
                    y: d.humi
                });
            });
        });
        this.io.socket.on('REP_SETTING', function (data) {
            _this.settingData['ec-working'] = data['ec-working'];
            _this.settingData['ec-setpoint'] = data['ec-setpoint'];
            _this.settingData['ec-detecting'] = data['ec-detecting'];
            _this.settingData['ec-mode'] = data['ec-mode'];
            _this.settingData['ect-working'] = data['ect-working'];
            _this.settingData['ect-list'] = data['ect-list'];
            _this.settingData['ec-cal'] = data['ec-cal'];
            _this.settingData['ph-cal'] = data['ph-cal'];
            // console.log('REP', this.settingData);
            if (_this.settingData['ec-mode'] == 0) {
                _this.settingData['sensorMode'] = true;
                _this.settingData['timerMode'] = false;
            }
            if (_this.settingData['ec-mode'] == 1) {
                _this.settingData['sensorMode'] = false;
                _this.settingData['timerMode'] = true;
            }
            _this.refreshECTimerList(data['ect-list']);
            // console.log(this.settingData)
        });
        this.io.socket.on('EC_STATUS', function (data) {
            _this.ecControlUpdate.next(data);
        });
        this.io.socket.on('ECT_STATUS', function (data) {
            _this.ecTimerControlUpdate.next(data);
        });
        this.io.socket.on('SET_SETTING_SUCCESS', function () {
            setTimeout(function () {
                _this.isUpdateSuccess = true;
            }, 2000);
        });
        this.io.socket.emit('REQ_SETTING');
        this.io.socket.emit('SHORT_LOGGER_REQ');
    }
    DataService.prototype.refreshECTimerList = function (list) {
        var _this = this;
        // this.settingData.timerList.clear();
        this.settingData.timerList = [];
        var timerlist = list;
        timerlist.forEach(function (timer) {
            var hour = Math.floor(timer / 60);
            var min = timer % 60;
            var hstr = hour.toString();
            var mstr = min.toString();
            if (hour < 10) {
                hstr = "0" + hstr;
            }
            if (min < 10) {
                mstr = "0" + mstr;
            }
            var t = {
                'hour': hstr,
                'min': mstr
            };
            _this.settingData.timerList.push(t);
        });
    };
    DataService.prototype.updateECTimeList = function (timer) {
        var hour = Math.floor(timer / 60);
        var min = timer % 60;
        var hstr = hour.toString();
        var mstr = min.toString();
        if (hour < 10) {
            hstr = "0" + hstr;
        }
        if (min < 10) {
            mstr = "0" + mstr;
        }
        var t = {
            'hour': hstr,
            'min': mstr
        };
        this.settingData.timerList.push(t);
    };
    return DataService;
}());
DataService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__socketio_socket_service__["a" /* SocketService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__socketio_socket_service__["a" /* SocketService */]) === "function" && _a || Object])
], DataService);

var _a;
//# sourceMappingURL=data.service.js.map

/***/ }),

/***/ 69:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client__ = __webpack_require__(357);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_socket_io_client___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_socket_io_client__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SocketService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SocketService = (function () {
    function SocketService() {
        var _this = this;
        this.hostname = window.location.protocol + "//" + window.location.hostname + ":" + 3000;
        this.isChartInit = false;
        console.log("[Socket.IO] Service initialize..");
        this.socket = __WEBPACK_IMPORTED_MODULE_1_socket_io_client__["connect"](this.hostname);
        this.socket.on("connect", function () { return _this.connect(); });
        this.socket.on("disconnect", function () { return _this.disconnect(); });
        this.socket.on("reconect", function () { return _this.reconnect(); });
    }
    SocketService.prototype.connect = function () {
        console.log("[SocketIO] Connected");
    };
    SocketService.prototype.disconnect = function () {
        console.log("[SocketIO] Disconnected");
    };
    SocketService.prototype.reconnect = function () {
        console.log("[SocketIO] Reconnected");
    };
    return SocketService;
}());
SocketService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [])
], SocketService);

//# sourceMappingURL=socket.service.js.map

/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(6);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainLayoutComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var MainLayoutComponent = (function () {
    function MainLayoutComponent() {
    }
    MainLayoutComponent.prototype.ngOnInit = function () {
    };
    return MainLayoutComponent;
}());
MainLayoutComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["d" /* Component */])({
        selector: 'main-layout',
        template: __webpack_require__(327),
        styles: [__webpack_require__(318)]
    }),
    __metadata("design:paramtypes", [])
], MainLayoutComponent);

//# sourceMappingURL=main-layout.component.js.map

/***/ })

},[364]);
//# sourceMappingURL=main.bundle.js.map