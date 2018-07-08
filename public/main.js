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

/***/ "./src/app/add/add.component.css":
/*!***************************************!*\
  !*** ./src/app/add/add.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\ninput[type=text]:hover, input[type=password]:hover , input[type=email]:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(20, 90, 53);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    /* position: absolute; */\r\n    max-width: 400px;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}\r\n\r\ndiv{\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    height: 750px;\r\n    /* display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center; */\r\n    padding: 20px;\r\n    background: #267773;\r\n    /* margin: 0 0 0 0; */\r\n    border-radius: 20px;\r\n}\r\n\r\n/*input#Username, input#password, input#email {\r\n    outline: 0;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    margin: 5px;\r\n    min-width: 300px;\r\n}\r\n\r\ninput#submit {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}  */\r\n\r\n/* body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box} */\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password], input[type=email] {\r\n    width: 40%;\r\n    padding: 15px;\r\n    color: black;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n#Condition{\r\n    width: 50%;\r\n    padding: 15px;\r\n    color: white;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f13030;\r\n\r\n}\r\n\r\n/* Add a background color when the inputs get focus */\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=email]:focus, #Condition:focus {\r\n    background-color: rgb(156, 150, 150);\r\n    border: 3px solid #b92929;\r\n    outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\n.signupbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\n\r\n.signupbtn :focus {\r\n    opacity:1;\r\n    outline: none;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: #474e5d;\r\n    padding-top: 50px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* Style the horizontal ruler */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    color: #f1f1f1;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #f44336;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    .signupbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/add/add.component.html":
/*!****************************************!*\
  !*** ./src/app/add/add.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1>\n    Add Product\n</h1>\n  <p>\n    Please fill the following details to add product.\n  </p>\n</div>\n\n<div>\n<form (submit)=\"addproduct($event)\" class=\"container\">\n  <strong>Username:</strong> \n  <input type=\"text\" placeholder=\"Username\" id=\"Username\" required>\n  <strong>Bookname:</strong> \n  <input type=\"text\" placeholder=\"Bookname\" id=\"Bookname\" required>\n  <strong>Author of the book:</strong> \n  <input type=\"text\" placeholder=\"Authorname\" id=\"Authorname\" required>\n  <strong>Url of the book:</strong> \n  <input type=\"text\" placeholder=\"Imageurl\" id=\"Imageurl\" required>\n  <strong>Price:</strong> \n  <input type=\"text\" placeholder=\"Price\" id=\"Price\" required>\n  <strong>Condition:</strong> \n  <select name=\"Condition\" id=\"Condition\" required>\n    <option value=\"New\">New</option>\n    <option value=\"Almost New\">Almost New</option>\n    <option value=\"Slight Damage\">Slight Damage</option>\n    <option value=\"Worn\">Worn</option>\n  </select>\n  <input type=\"submit\" value=\"Add book\" id=\"submit\" class=\"signupbtn\">\n</form>\n</div>"

/***/ }),

/***/ "./src/app/add/add.component.ts":
/*!**************************************!*\
  !*** ./src/app/add/add.component.ts ***!
  \**************************************/
/*! exports provided: AddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddComponent", function() { return AddComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AddComponent = /** @class */ (function () {
    function AddComponent(http) {
        this.http = http;
    }
    AddComponent.prototype.ngOnInit = function () {
    };
    AddComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    AddComponent.prototype.addproduct = function (event) {
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#Username').value;
        var bookname = target.querySelector('#Bookname').value;
        var authorname = target.querySelector('#Authorname').value;
        var imageurl = target.querySelector('#Imageurl').value;
        var price = target.querySelector('#Price').value;
        var condition = target.querySelector('#Condition').value;
        var p = {
            Name: username,
            Bookname: bookname,
            Authorname: authorname,
            Imageurl: imageurl,
            Price: price,
            Condition: condition
        };
        //console.log(p);
        //alert("refresh page");
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/books', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            var tempc = 'You are not login';
            if (data == tempc) {
                alert(data);
            }
            else {
                alert("Product has been added");
            }
            console.log(data);
        });
    };
    AddComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-add',
            template: __webpack_require__(/*! ./add.component.html */ "./src/app/add/add.component.html"),
            styles: [__webpack_require__(/*! ./add.component.css */ "./src/app/add/add.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], AddComponent);
    return AddComponent;
}());



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

module.exports = "<router-outlet></router-outlet> "

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/signup/signup.component.ts");
/* harmony import */ var _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./listings/listings.component */ "./src/app/listings/listings.component.ts");
/* harmony import */ var _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./wishlist/wishlist.component */ "./src/app/wishlist/wishlist.component.ts");
/* harmony import */ var _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./messages/messages.component */ "./src/app/messages/messages.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _add_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./add/add.component */ "./src/app/add/add.component.ts");
/* harmony import */ var _particular_particular_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./particular/particular.component */ "./src/app/particular/particular.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












//import { Observable } from 'rxjs';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"],
                _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"],
                _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__["ListingsComponent"],
                _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"],
                _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"],
                _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"],
                _particular_particular_component__WEBPACK_IMPORTED_MODULE_11__["ParticularComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpClientModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot([
                    {
                        path: '',
                        redirectTo: 'listings',
                        pathMatch: 'full'
                    },
                    {
                        path: 'listings',
                        component: _listings_listings_component__WEBPACK_IMPORTED_MODULE_6__["ListingsComponent"]
                        // children: [
                        //   //{path: 'add', component: AddComponent},
                        //   //{path: 'listings/:id', component: ParticularComponent }
                        // ]
                    },
                    {
                        path: 'listings/add',
                        component: _add_add_component__WEBPACK_IMPORTED_MODULE_10__["AddComponent"]
                    },
                    {
                        path: 'listings/:id',
                        component: _particular_particular_component__WEBPACK_IMPORTED_MODULE_11__["ParticularComponent"]
                    },
                    {
                        path: 'login',
                        component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"]
                    },
                    {
                        path: 'signup',
                        component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_5__["SignupComponent"]
                    },
                    {
                        path: 'messages',
                        component: _messages_messages_component__WEBPACK_IMPORTED_MODULE_8__["MessagesComponent"]
                    },
                    {
                        path: 'wishlist',
                        component: _wishlist_wishlist_component__WEBPACK_IMPORTED_MODULE_7__["WishlistComponent"]
                    }
                ])
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/listings/listings.component.css":
/*!*************************************************!*\
  !*** ./src/app/listings/listings.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(139, 4, 151);\r\n}\r\n\r\n.detail:hover{\r\n    background-color: rgb(250, 135, 3) !important;\r\n}\r\n\r\n.wish:hover{\r\n    background-color: rgb(3, 159, 250) !important;\r\n}\r\n\r\n.fdiv:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\ninput[type=text]:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn {\r\n    background-color: rgb(133, 30, 192);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 2px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    /* width: 100%; */\r\n    opacity: 0.9;\r\n    outline: none;\r\n    \r\n}\r\n\r\ninput[type=text]{\r\n    width: 40%;\r\n    padding: 15px;\r\n    color:black;\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    background-color: rgb(160, 126, 126);\r\n    border: 3px solid #9fb929;\r\n    outline: none;\r\n}\r\n\r\n.selectkey{\r\n    /* width: 40%; */\r\n    padding: 15px;\r\n    /* color: white; */\r\n    /* text-decoration-style: wavy; */\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n.selectkey:focus{\r\n    background-color: rgb(194, 190, 190);\r\n    border: 3px solid #5a97e6;\r\n    outline: none;\r\n}"

/***/ }),

/***/ "./src/app/listings/listings.component.html":
/*!**************************************************!*\
  !*** ./src/app/listings/listings.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = " \n<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1 style=\"margin: 20px 10px;\" ><i class=\"fas fa-book-open\"></i> Welcome To Akshay Bookyard <i class=\"fas fa-book\"></i></h1>\n</div>\n\n<div >\n<div style=\"max-width:100%; margin: 0px auto; padding: 10px;\">\n<form (submit)=\"Filtering($event)\" style=\"max-width:400px; margin: 0px auto;\" >\n  <select name=\"Condition\" id=\"filter_type\" style=\"width:100%;\" class=\"selectkey\">\n    <option value=\"bookname\">Search by Book Name</option>\n    <option value=\"authorname\">Search by Author Name</option>\n    <option value=\"price\">Maximum price</option>\n    <option value=\"condition\">Condition of Book(New, Almost New, Slight Damage, Worn)</option>\n    <!-- <optgroup label=\"Range\">\n      <option value=\"300\">less than 300</option>\n      <option value=\"450\">less than 450</option>\n    </optgroup> -->\n  </select>\n  <input type=\"text\" id=\"entered\" placeholder=\"Your text goes Here\" required >\n  <input type=\"submit\" value=\"Filter\" class=\"signupbtn\">\n</form>\n</div>\n\n\n\n\n<div style=\"max-width:400px; margin: 0px auto; padding: 0px;\">\n<button (click)=\"getbooks()\" style=\"width: 100%;\" class=\"signupbtn\">Remove Filter</button>\n</div>\n\n <div style=\"width:100%; margin: 20px auto;\">\n  <div *ngFor=\"let i of Particularlist\" class=\"fdiv\" style=\"max-width:400px;background: white; margin: 20px 1.5%; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 10px; padding: 4px\">\n    <p>\n        <br>\n    </p>\n    <img src=\"{{i.imageurl}}\" style=\"width:100%; height: 400px; border-radius: 4px;\"><br>\n    <span>Seller     :{{i.name}}</span><br>\n    <span>Bookname   :{{i.bookname}}</span><br>\n    <span>Authorname :{{i.authorname}}</span><br>\n    <span>Price      :{{i.price}} Rs</span><br>\n    <span>Condition  :{{i.condition}}</span> <br>\n    <button (click)= \"particular(i.id)\"  class=\"signupbtn detail\" style=\"width: 99%; background: rgb(224, 228, 19) ;color: black\">Details</button><br>\n    <button (click)= \"addtowishlist(i.id,i.name,i.bookname,i.authorname,i.price,i.condition,i.imageurl)\" class=\"signupbtn wish\" style=\"width: 99%; background: rgb(139, 225, 252);color: black\">Add to wishlist</button><br>\n  </div>\n\n </div>\n\n</div>\n\n  \n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/listings/listings.component.ts":
/*!************************************************!*\
  !*** ./src/app/listings/listings.component.ts ***!
  \************************************************/
/*! exports provided: ListingsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListingsComponent", function() { return ListingsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ListingsComponent = /** @class */ (function () {
    function ListingsComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
    }
    ListingsComponent.prototype.ngOnInit = function () {
        this.getbooks();
    };
    ListingsComponent.prototype.particular = function (id) {
        this.route.navigate([id], { relativeTo: this.router });
    };
    ListingsComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    ListingsComponent.prototype.getbooks = function () {
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/books', {
            headers: headers
        })
            .subscribe(function (data) {
            // alert(data);
            console.log(JSON.stringify(data));
            _this.Particularlist = data;
            console.log(data[0].imageurl);
        });
    };
    ///
    //Particular: Object;
    ListingsComponent.prototype.addtowishlist = function (id, name, bookname, authorname, price, condition, imageurl) {
        // event.preventDefault();
        // const target = event.target;
        // const password = target.querySelector('#password').value;
        var p = {
            Bookid: id,
            Name: name,
            Bookname: bookname,
            Authorname: authorname,
            Price: price,
            Condition: condition,
            Imageurl: imageurl
            //Password : password
        };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/wishlist', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            var tempc = 'You are not login';
            if (data == tempc) {
                alert(data);
            }
            else if (data == "Already added to wishlist") {
                alert("Already added to wishlist");
            }
            else {
                alert("Product has been added to wishlist");
            }
            // alert(data);
            // console.log(JSON.stringify(data));
            //this.Particular = data;
        });
    };
    ListingsComponent.prototype.Filtering = function (event) {
        var _this = this;
        event.preventDefault();
        var target = event.target;
        var entered = target.querySelector('#entered').value;
        var filter_type = target.querySelector('#filter_type').value;
        var p = {
            Entered: entered,
            Filter_type: filter_type
        };
        console.log(p, filter_type);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/Filtering', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            //alert(data);
            //console.log(JSON.stringify(data));
            _this.Particularlist = data;
        });
    };
    ListingsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-listings',
            template: __webpack_require__(/*! ./listings.component.html */ "./src/app/listings/listings.component.html"),
            styles: [__webpack_require__(/*! ./listings.component.css */ "./src/app/listings/listings.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ListingsComponent);
    return ListingsComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\ninput[type=text]:hover, input[type=password]:hover , input[type=email]:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(20, 90, 53);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    /* position: absolute; */\r\n    max-width: 400px;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}\r\n\r\ndiv{\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    height: 500px;\r\n    /* display: flex;\r\n    flex-direction: column; */\r\n    /* justify-content: center; */\r\n    /* align-items:center; */\r\n    padding: 20px;\r\n    background: #267773;\r\n    /* margin: 0 0 0 0; */\r\n    border-radius: 20px;\r\n}\r\n\r\n/*input#Username, input#password, input#email {\r\n    outline: 0;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    margin: 5px;\r\n    min-width: 300px;\r\n}\r\n\r\ninput#submit {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}  */\r\n\r\n/* body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box} */\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password], input[type=email]{\r\n    width: 40%;\r\n    padding: 15px;\r\n    color: black;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n/* Add a background color when the inputs get focus */\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=email]:focus {\r\n    background-color: rgb(156, 150, 150);\r\n    border: 3px solid #b92929;\r\n    outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\n.signupbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n    outline: none;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: #474e5d;\r\n    padding-top: 50px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* Style the horizontal ruler */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    color: #f1f1f1;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #f44336;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    .signupbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1>\n  Login\n</h1>\n<p>\n  Please fill the following details to login account\n</p>\n</div>\n\n<div>\n<form (submit)=\"loginUser($event)\" class=\"container\">\n  <strong>Username:</strong> \n  <input type=\"text\" placeholder=\"Username\" id=\"Username\" required>\n  <strong>Password:</strong>\n  <input type=\"password\" placeholder= \"Password\" id=\"password\" required>\n  <strong>Email:</strong>\n  <input type=\"email\" placeholder= \"Email\" id=\"email\" required>\n  <input type=\"submit\" value=\"Login\" id=\"submit\" class=\"signupbtn\">\n</form>\n</div>"

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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
    function LoginComponent(http) {
        this.http = http;
    }
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    LoginComponent.prototype.loginUser = function (event) {
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#Username').value;
        var password = target.querySelector('#password').value;
        var email = target.querySelector('#email').value;
        var p = {
            Name: username,
            Password: password,
            Email: email
        };
        //console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/login', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/messages/messages.component.css":
/*!*************************************************!*\
  !*** ./src/app/messages/messages.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(139, 4, 151);\r\n}\r\n\r\n.fdiv:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn {\r\n    background-color: rgb(133, 30, 192);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 2px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    /* width: 100%; */\r\n    opacity: 0.9;\r\n    outline: none;\r\n    \r\n}\r\n\r\ninput[type=text]{\r\n    width: 40%;\r\n    padding: 15px;\r\n    color:black;\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    background-color: rgb(160, 126, 126);\r\n    border: 3px solid #9fb929;\r\n    outline: none;\r\n}\r\n\r\n.selectkey{\r\n    /* width: 40%; */\r\n    padding: 15px;\r\n    /* color: white; */\r\n    /* text-decoration-style: wavy; */\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n.selectkey:focus{\r\n    background-color: rgb(194, 190, 190);\r\n    border: 3px solid #5a97e6;\r\n    outline: none;\r\n}"

/***/ }),

/***/ "./src/app/messages/messages.component.html":
/*!**************************************************!*\
  !*** ./src/app/messages/messages.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1 style=\"margin: 20px 10px;\">\n  Queries related to your books:\n</h1>\n</div>\n\n<div style=\"width:100%; margin: 20px auto;\">\n<div *ngFor=\"let i of recievedmessages\" class=\"fdiv\" style=\"max-width:400px;background: white; margin: 20px 1.5%; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);; border-radius: 10px; padding: 4px\">\n  <!-- <img src=\"{{i.imageurl}}\" style=\"width:400px; height: 400px; \"><br> -->\n  <span>Senderemail   :{{i.senderemail}}</span><br>\n  <span>Message     :{{i.message}}</span><br>\n  <span>Bookname   :{{i.bookname}}</span><br>\n  <!-- <span>Authorname :{{i.authorname}}</span><br>\n  <span>Price      :{{i.price}} Rs</span><br>\n  <span>Condition  :{{i.condition}}</span> <br>\n  <button (click)= \"addtowishlist(i.id,i.name,i.bookname,i.authorname,i.price,i.condition,i.imageurl)\">Add to wishlist</button><br> -->\n  <p>\n    <br>\n  </p>\n\n <p>\n   Write your reply below:\n </p>\n\n  <form (submit)=\"sendmessage($event,i.senderemail,i.bookname)\" style=\"width:400px; margin: 0px auto\">\n    <textarea rows=\"4\" cols=\"50\" id=\"message\" required></textarea>    \n  <input type=\"submit\" value=\"Reply\" class=\"signupbtn\">\n  </form>\n\n</div>\n\n</div>\n\n"

/***/ }),

/***/ "./src/app/messages/messages.component.ts":
/*!************************************************!*\
  !*** ./src/app/messages/messages.component.ts ***!
  \************************************************/
/*! exports provided: MessagesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessagesComponent", function() { return MessagesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MessagesComponent = /** @class */ (function () {
    function MessagesComponent(http) {
        this.http = http;
    }
    MessagesComponent.prototype.ngOnInit = function () {
        this.getAllMessages();
    };
    MessagesComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    MessagesComponent.prototype.getAllMessages = function () {
        // var p = {
        //    id : this.param1
        // }
        var _this = this;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/getmessage', {
            headers: headers
        })
            .subscribe(function (data) {
            var tempc = 'login First';
            if (data == tempc) {
                alert('You are not login');
            }
            //alert(data);
            //console.log(JSON.stringify(data));
            _this.recievedmessages = data;
        });
    };
    MessagesComponent.prototype.sendmessage = function (event, receiveremail, bbookname) {
        event.preventDefault();
        var target = event.target;
        var message = target.querySelector('#message').value;
        var p = {
            Receiveremail: receiveremail,
            Bookname: bbookname,
            Message: message
            //Password : password
        };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/message', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            alert("Your message has been send");
            // alert(data);
            // console.log(JSON.stringify(data));
            //this.Particular = data;
        });
    };
    MessagesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-messages',
            template: __webpack_require__(/*! ./messages.component.html */ "./src/app/messages/messages.component.html"),
            styles: [__webpack_require__(/*! ./messages.component.css */ "./src/app/messages/messages.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], MessagesComponent);
    return MessagesComponent;
}());



/***/ }),

/***/ "./src/app/particular/particular.component.css":
/*!*****************************************************!*\
  !*** ./src/app/particular/particular.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(114, 3, 124);\r\n}\r\n\r\n.detail:hover{\r\n    background-color: rgb(250, 135, 3) !important;\r\n}\r\n\r\n.wish:hover{\r\n    background-color: rgb(3, 159, 250) !important;\r\n}\r\n\r\n.fdiv:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn {\r\n    background-color: rgb(133, 30, 192);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 2px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    /* width: 100%; */\r\n    opacity: 0.9;\r\n}\r\n\r\ninput[type=text]{\r\n    width: 40%;\r\n    padding: 15px;\r\n    color: white;\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    background-color: black;\r\n    border: 3px solid #9fb929;\r\n    outline: none;\r\n}\r\n\r\n.selectkey{\r\n    /* width: 40%; */\r\n    padding: 15px;\r\n    /* color: white; */\r\n    /* text-decoration-style: wavy; */\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n.selectkey:focus{\r\n    background-color: rgb(194, 190, 190);\r\n    border: 3px solid #5a97e6;\r\n    outline: none;\r\n}"

/***/ }),

/***/ "./src/app/particular/particular.component.html":
/*!******************************************************!*\
  !*** ./src/app/particular/particular.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n\n<h1>\n  Details and Contact:\n</h1>\n\n\n<div style=\"width:100%; margin: 20px auto;\">\n<div *ngFor=\"let i of Particular\" class=\"fdiv\" style=\"max-width:400px;background: white; margin: 0 auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 10px; padding: 4px\">\n    <p>\n        <br>\n    </p>\n    <img src=\"{{i.imageurl}}\" style=\"width:400px; height: 400px; border-radius: 4px; \"><br>\n    <span>Seller     :{{i.name}}</span><br>\n    <span>Bookname   :{{i.bookname}}</span><br>\n    <span>Authorname :{{i.authorname}}</span><br>\n    <span>Price      :{{i.price}} Rs</span><br>\n    <span>Condition  :{{i.condition}}</span> <br>\n    <button (click)= \"addtowishlist(i.id,i.name,i.bookname,i.authorname,i.price,i.condition,i.imageurl)\" class=\"signupbtn\">Add to wishlist</button><br>\n  </div>\n\n  <form (submit)=\"sendmessage($event)\" class=\"fdiv\" style=\"max-width:400px;background: white; margin: 0 auto; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); border-radius: 10px; padding: 4px\">\n   <p>Write your message here:</p>\n    <textarea rows=\"4\" cols=\"50\" id=\"message\" required ></textarea>    \n  <input type=\"submit\" value=\"Send message\" class=\"signupbtn\" >\n  </form>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/particular/particular.component.ts":
/*!****************************************************!*\
  !*** ./src/app/particular/particular.component.ts ***!
  \****************************************************/
/*! exports provided: ParticularComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ParticularComponent", function() { return ParticularComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ParticularComponent = /** @class */ (function () {
    function ParticularComponent(router, route, http) {
        this.router = router;
        this.route = route;
        this.http = http;
        this.param1 = this.router.snapshot.params.id;
        //alert(this.param1);
    }
    ParticularComponent.prototype.ngOnInit = function () {
        this.getparticularbooks();
    };
    ParticularComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    ParticularComponent.prototype.getparticularbooks = function () {
        var _this = this;
        var p = {
            id: this.param1
        };
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/particularbook', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            // alert(data);
            console.log(JSON.stringify(data));
            _this.Particular = data;
            //console.log(data[0].bookname);
            _this.receiveremail = data[0].selleremail;
            _this.bbookname = data[0].bookname;
        });
    };
    ParticularComponent.prototype.addtowishlist = function (id, name, bookname, authorname, price, condition, imageurl) {
        // event.preventDefault();
        // const target = event.target;
        // const password = target.querySelector('#password').value;
        var p = {
            Bookid: id,
            Name: name,
            Bookname: bookname,
            Authorname: authorname,
            Price: price,
            Condition: condition,
            Imageurl: imageurl
            //Password : password
        };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/wishlist', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            var tempc = 'You are not login';
            if (data == tempc) {
                alert(data);
            }
            else if (data == "Already added to wishlist") {
                alert("Already added to wishlist");
            }
            else {
                alert("Product has been added to wishlist");
            }
            // alert(data);
            // console.log(JSON.stringify(data));
            //this.Particular = data;
        });
    };
    ParticularComponent.prototype.sendmessage = function (event) {
        event.preventDefault();
        var target = event.target;
        var message = target.querySelector('#message').value;
        var p = {
            Receiveremail: this.receiveremail,
            Bookname: this.bbookname,
            Message: message
            //Password : password
        };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/message', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            var tempc = 'login First';
            if (data == tempc) {
                alert('You are not login');
            }
            else {
                alert("Your message has been send");
            }
            //alert(data);
            //console.log(JSON.stringify(data));
            //this.Particular = data;
        });
    };
    ParticularComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-particular',
            template: __webpack_require__(/*! ./particular.component.html */ "./src/app/particular/particular.component.html"),
            styles: [__webpack_require__(/*! ./particular.component.css */ "./src/app/particular/particular.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], ParticularComponent);
    return ParticularComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/*!*********************************************!*\
  !*** ./src/app/signup/signup.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\ninput[type=text]:hover, input[type=password]:hover , input[type=email]:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn:hover{\r\n    background-color: rgb(20, 90, 53);\r\n}\r\n\r\nform {\r\n    display: flex;\r\n    /* position: absolute; */\r\n    max-width: 400px;\r\n    height: 100%;\r\n    justify-content: center;\r\n    align-items: center;\r\n    flex-direction: column;\r\n    margin: 0 auto;\r\n}\r\n\r\ndiv{\r\n    max-width: 700px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.container {\r\n    max-width: 700px;\r\n    height: 750px;\r\n    /* display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items:center; */\r\n    padding: 20px;\r\n    background: #267773;\r\n    /* margin: 0 0 0 0; */\r\n    border-radius: 20px;\r\n}\r\n\r\n/*input#Username, input#password, input#email {\r\n    outline: 0;\r\n    font-size: 20px;\r\n    padding: 5px 10px;\r\n    margin: 5px;\r\n    min-width: 300px;\r\n}\r\n\r\ninput#submit {\r\n    margin: 20px;\r\n    padding: 20px;\r\n    border-radius: 10px;\r\n    font-size: 20px;\r\n    cursor: pointer;\r\n}  */\r\n\r\n/* body {font-family: Arial, Helvetica, sans-serif;}\r\n* {box-sizing: border-box} */\r\n\r\n/* Full-width input fields */\r\n\r\ninput[type=text], input[type=password], input[type=email] {\r\n    width: 40%;\r\n    padding: 15px;\r\n    color:  black;\r\n    margin: 5px 0 22px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n/* Add a background color when the inputs get focus */\r\n\r\ninput[type=text]:focus, input[type=password]:focus, input[type=email]:focus {\r\n    background-color:  rgb(156, 150, 150);\r\n    border: 3px solid #b92929;\r\n    outline: none;\r\n}\r\n\r\n/* Set a style for all buttons */\r\n\r\n.signupbtn {\r\n    background-color: #4CAF50;\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 0;\r\n    border: none;\r\n    cursor: pointer;\r\n    width: 100%;\r\n    opacity: 0.9;\r\n}\r\n\r\n.signupbtn :hover {\r\n    opacity:1;\r\n}\r\n\r\n/* Extra styles for the cancel button */\r\n\r\n/* Float cancel and signup buttons and add an equal width */\r\n\r\n.signupbtn {\r\n  float: left;\r\n  width: 50%;\r\n  border-radius: 10px;\r\n}\r\n\r\n/* Add padding to container elements */\r\n\r\n.container {\r\n    padding: 16px;\r\n}\r\n\r\n/* The Modal (background) */\r\n\r\n.modal {\r\n    display: none; /* Hidden by default */\r\n    position: fixed; /* Stay in place */\r\n    z-index: 1; /* Sit on top */\r\n    left: 0;\r\n    top: 0;\r\n    width: 100%; /* Full width */\r\n    height: 100%; /* Full height */\r\n    overflow: auto; /* Enable scroll if needed */\r\n    background-color: #474e5d;\r\n    padding-top: 50px;\r\n}\r\n\r\n/* Modal Content/Box */\r\n\r\n.modal-content {\r\n    background-color: #fefefe;\r\n    margin: 5% auto 15% auto; /* 5% from the top, 15% from the bottom and centered */\r\n    border: 1px solid #888;\r\n    width: 80%; /* Could be more or less, depending on screen size */\r\n}\r\n\r\n/* Style the horizontal ruler */\r\n\r\nhr {\r\n    border: 1px solid #f1f1f1;\r\n    margin-bottom: 25px;\r\n}\r\n\r\n/* The Close Button (x) */\r\n\r\n.close {\r\n    position: absolute;\r\n    right: 35px;\r\n    top: 15px;\r\n    font-size: 40px;\r\n    font-weight: bold;\r\n    color: #f1f1f1;\r\n}\r\n\r\n.close:hover,\r\n.close:focus {\r\n    color: #f44336;\r\n    cursor: pointer;\r\n}\r\n\r\n/* Clear floats */\r\n\r\n.clearfix::after {\r\n    content: \"\";\r\n    clear: both;\r\n    display: table;\r\n}\r\n\r\n/* Change styles for cancel button and signup button on extra small screens */\r\n\r\n@media screen and (max-width: 300px) {\r\n    .signupbtn {\r\n       width: 100%;\r\n    }\r\n}"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/*!**********************************************!*\
  !*** ./src/app/signup/signup.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1>\n  Sign Up\n</h1>\n<p>\n  Please fill in this form to create an account.  \n</p>\n</div>\n\n\n<div>\n<form (submit)=\"signupUser($event)\" class=\"container\">\n  <strong>Username:</strong>\n  <input type=\"text\" placeholder=\"Username\" id=\"Username\" required>\n  <strong>Password:</strong>\n  <input type=\"password\" placeholder= \"Password\" id=\"password\" required>\n  <strong>Email:</strong>\n  <input type=\"email\" placeholder= \"Email\" id=\"email\" required>\n  <strong>College Name:</strong>\n  <input type=\"text\" placeholder= \"College\" id=\"college\" required>\n  <strong>Address:</strong>\n  <input type=\"text\" placeholder= \"Address\" id=\"address\" required>\n  <strong>Phone Number:</strong>\n  <input type=\"text\" placeholder= \"Phone Number\" id=\"phone_number\" required>\n\n  <input type=\"submit\" value=\"Sign Up\" class=\"signupbtn\">\n</form>\n</div>\n<!-- use this signup designing =>https://www.youtube.com/watch?v=h85_GT62K6A -->\n\n<!-- <button (click)=\"hello()\">Hey there</button> -->"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/*!********************************************!*\
  !*** ./src/app/signup/signup.component.ts ***!
  \********************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import { BypassService } from '../bypass.service';

var SignupComponent = /** @class */ (function () {
    //constructor(private by : BypassService) { }
    function SignupComponent(http) {
        this.http = http;
    }
    SignupComponent.prototype.ngOnInit = function () {
    };
    SignupComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    SignupComponent.prototype.signupUser = function (event) {
        event.preventDefault();
        var target = event.target;
        var username = target.querySelector('#Username').value;
        var password = target.querySelector('#password').value;
        var email = target.querySelector('#email').value;
        var college = target.querySelector('#college').value;
        var address = target.querySelector('#address').value;
        var phone_number = target.querySelector('#phone_number').value;
        var p = {
            Name: username,
            Password: password,
            Email: email,
            College: college,
            Address: address,
            Phone_number: phone_number,
        };
        console.log(p);
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.post('http://localhost:2678/signup', JSON.stringify(p), {
            headers: headers
        })
            .subscribe(function (data) {
            alert("You have successfully registered");
            //console.log(data);
        });
    };
    SignupComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/wishlist/wishlist.component.css":
/*!*************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.css ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "ul {\r\n    list-style-type: none;\r\n    margin: 0;\r\n    padding: 0;\r\n    overflow: hidden;\r\n    background-color: #333;\r\n}\r\n\r\nli {\r\n    float: left;\r\n}\r\n\r\nli a {\r\n    display: block;\r\n    color: white;\r\n    text-align: center;\r\n    padding: 14px 16px;\r\n    text-decoration: none;\r\n}\r\n\r\n/* Change the link color to #111 (black) on hover */\r\n\r\nli a:hover {\r\n    background-color: #111;\r\n}\r\n\r\n.fdiv:hover{\r\n    background-color: rgb(183, 189, 192) !important;\r\n}\r\n\r\n.signupbtn {\r\n    background-color: rgb(133, 30, 192);\r\n    color: white;\r\n    padding: 14px 20px;\r\n    margin: 8px 2px;\r\n    border: none;\r\n    border-radius: 4px;\r\n    cursor: pointer;\r\n    /* width: 100%; */\r\n    opacity: 0.9;\r\n}\r\n\r\ninput[type=text]{\r\n    width: 40%;\r\n    padding: 15px;\r\n    color: white;\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\ninput[type=text]:focus {\r\n    background-color: black;\r\n    border: 3px solid #9fb929;\r\n    outline: none;\r\n}\r\n\r\n.selectkey{\r\n    /* width: 40%; */\r\n    padding: 15px;\r\n    /* color: white; */\r\n    /* text-decoration-style: wavy; */\r\n    margin: 5px 0 5px 0;\r\n    display: inline-block;\r\n    border: none;\r\n    background: #f1f1f1;\r\n}\r\n\r\n.selectkey:focus{\r\n    background-color: rgb(194, 190, 190);\r\n    border: 3px solid #5a97e6;\r\n    outline: none;\r\n}"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.html":
/*!**************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul>\n  <li style=\"float: right\"><a (click)=\"logoutUser()\"><i class=\"fas fa-sign-out-alt\"></i> Logout</a></li>\n  <li style=\"float: right\"><a routerLink = \"/login\"><i class=\"fas fa-sign-in-alt\"></i> Login</a></li>\n  <li style=\"float: left\"><a routerLink = \"/signup\"><i class=\"fas fa-user-plus\"></i> Signup</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings\"><i class=\"fas fa-list\"></i> Listings</a></li>\n  <li style=\"float: left\"><a routerLink = \"/messages\"><i class=\"fas fa-envelope\"></i> Messages</a></li>\n  <li style=\"float: left\"><a routerLink = \"/wishlist\" ><i class=\"fas fa-shopping-cart\"></i> Wishlist</a></li>\n  <li style=\"float: left\"><a routerLink = \"/listings/add\"><i class=\"fas fa-plus\"></i> Add Books</a></li>\n  <!-- <li><button (click)= \"add()\">add</button></li> -->\n</ul>\n\n<div style=\"font-family: 'Roboto', sans-serif;\">\n<h1 style=\"margin: 20px 10px;\">\n  Your wishlist goes here:\n</h1>\n</div>\n\n<div style=\"width:100%; margin: 20px auto;\">\n<div *ngFor=\"let i of obj\" class=\"fdiv\" style=\"max-width:400px;background: white; margin: 20px 1.5%; float: left; box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);; border-radius: 10px; padding: 4px\">\n  <p>\n    <br>\n  </p>\n  <img src=\"{{i.imageurl}}\" style=\"width:100%; height: 400px; border-radius: 4px;\"><br>\n  <span>Seller     :{{i.name}}</span><br>\n  <span>Bookname   :{{i.bookname}}</span><br>\n  <span>Authorname :{{i.authorname}}</span><br>\n  <span>Price      :{{i.price}} Rs</span><br>\n  <span>Condition  :{{i.condition}}</span> <br>\n  <!-- <button (click)= \"addtowishlist()\">Add to wishlist</button><br> -->\n</div>\n</div>\n\n<!-- <table>\n  <tr *ngFor=\"let review of results\"> \n      <td>\n      {{review.coin_id}}\n      </td>\n  </tr>\n</table> -->"

/***/ }),

/***/ "./src/app/wishlist/wishlist.component.ts":
/*!************************************************!*\
  !*** ./src/app/wishlist/wishlist.component.ts ***!
  \************************************************/
/*! exports provided: WishlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WishlistComponent", function() { return WishlistComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var WishlistComponent = /** @class */ (function () {
    function WishlistComponent(http) {
        this.http = http;
    }
    WishlistComponent.prototype.ngOnInit = function () {
        this.getwishlist();
    };
    WishlistComponent.prototype.logoutUser = function () {
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/logout', {
            headers: headers
        })
            .subscribe(function (data) {
            alert(data);
            console.log(data);
        });
    };
    WishlistComponent.prototype.getwishlist = function () {
        var _this = this;
        var l = 0;
        var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]()
            .set('Authorization', 'my-auth-token')
            .set('Content-Type', 'application/json');
        this.http.get('http://localhost:2678/wishlist', {
            headers: headers
        })
            .subscribe(function (data) {
            //alert(JSON.stringify(data));
            var tempc = 'login First';
            if (data == tempc) {
                alert('You are not login');
            }
            _this.obj = data;
            //console.log(JSON.stringify(data));
            //l =Object.keys(data).length
            //this.Particular = data;
            //console.log(data[0].bookid);
            //  for(var i=0;i<l;i++){
            //  // console.log(this.obj[0].bookid)
            //    var p = {
            //       id : data[i].bookid
            //     }
            //    this.http.post('http://localhost:2678/particularbook',JSON.stringify(p),{
            //       headers: headers
            //    })
            //    .subscribe(Data => {
            //      //alert(data);
            //      console.log(JSON.stringify(Data));
            //      this.obj= Data;
            //    });
            //}
            l = 0;
        });
    };
    WishlistComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-wishlist',
            template: __webpack_require__(/*! ./wishlist.component.html */ "./src/app/wishlist/wishlist.component.html"),
            styles: [__webpack_require__(/*! ./wishlist.component.css */ "./src/app/wishlist/wishlist.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], WishlistComponent);
    return WishlistComponent;
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

module.exports = __webpack_require__(/*! C:\Users\Akshay Sharma\Desktop\nagarro\p_f_E_A\Akshay_Bookyard\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map