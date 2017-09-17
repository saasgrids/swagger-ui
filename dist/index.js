(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["sg-swagger-ui"] = factory();
	else
		root["sg-swagger-ui"] = factory();
})(this, function() {
return webpackJsonpsg_swagger_ui([1],{

/***/ 119:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-code-heading{\n    color: #757575;\n    font: 300 24px/40px Roboto,sans-serif;\n    letter-spacing: -.01em;\n    margin: 40px 0 20px;\n    text-transform: capitalize;\n    border-bottom: #dddddd solid 1px;\n}\n\n.sg-ui-code-container{\n    border: #dddddd solid 1px;\n}\n\n.sg-ui-code-tabs{\n    border-bottom: #dddddd solid 1px;\n    padding: 0px;\n}\n\n.sg-ui-code-tabs-item{\n    font-family: Roboto;\n    \n    margin: 0px;\n    font: 500 14px/43px Roboto,sans-serif;\n    color: #757575;\n    text-transform:uppercase;    \n    padding: 10px;\n    cursor: pointer;\n}\n.sg-ui-code-tabs-item-selected{\n    border-bottom: #03a0e9 solid 4px;    \n}\n\n.sg-ui-code-snippet{\n    font-size: 14px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ 120:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-doc{\n    padding: 50px;\n    max-width: 70%;  \n    display: flex;\n    flex-direction: column;  \n}\n.sg-ui-doc-text{\n    font-family: Roboto;\n}\n.sg-ui-doc-main{\n    padding: 0px !important;\n    display: flex;\n}\n.sg-ui-rest{\n    padding: 0px !important;\n}\n.sg-ui-doc-heading-class{\n    color: #757575;\n    font: 300 34px/40px Roboto,sans-serif;\n    letter-spacing: -.01em;\n    margin: 40px 0 20px;\n    text-transform: capitalize;\n}\n.sg-ui-doc-heading-request{\n    color: #757575;\n    font: 300 24px/40px Roboto,sans-serif;\n    letter-spacing: -.01em;\n    margin: 40px 0 20px;\n    text-transform: capitalize;\n    border-bottom: #dddddd solid 1px;\n}\n.sg-ui-doc-heading-function{\n    color: #757575;\n    font: 300 34px/40px Roboto,sans-serif;\n    letter-spacing: -.01em;\n    margin: 40px 0 20px;\n}\n.sg-ui-doc-auth{\n    color: #0288d1;\n    background-color: #e1f5fe;\n    padding: 10px;\n}\n\n.sg-ui-doc-summary-link{\n    cursor: pointer;\n    color: #039be5;\n}\n\n.sg-ui-doc-summary{\n    line-height: 30px;\n    color: #3a3a3a;    \n}\n\n.sg-ui-doc-endpoint{\n    background-color: #f7f7f7;\n    padding: 15px;\n    color: #757575;\n    font: 14px/20px Roboto Mono,monospace\n    \n}\n.sg-ui-doc-method{\n    border: 1px solid #757575;\n    padding: 5px;\n    text-transform: uppercase;\n    margin: 5px;\n    border-radius: 2px;\n    margin-right: 30px;\n}\n.sg-ui-doc-subtitle{\n    font: 400 20px/32px Roboto,sans-serif\n}\n.row:before, \n.row:after {\n    content:\"\";\n    display: table ;\n    clear:both;\n}\n\n[class*='col-'] {\n    float: left; \n    min-height: 1px; \n    width: 16.66%; \n    /*-- our gutter -- */\n    padding: 12px; \n}\n\n.sg-ui-doc-licence{\n    margin-top: 20px;\n}\n.sg-ui-doc-version{\n    margin: 10px;\n    background: #909090;\n    color: #dddddd;\n    padding: 5px;\n    border-radius: 5px;\n}\n.col-r{ width: 30.32%; padding: 0px; height: 100%;}\n.col-d{ width: 66.65%; }\n\n", ""]);

// exports


/***/ }),

/***/ 121:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-main-content{\n    flex-direction: column;\n    width: 70%;\n    margin-left: 23%;\n}\n", ""]);

// exports


/***/ }),

/***/ 122:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-menu-bar{\n    max-height: 420px;\n    display: flex;\n    flex-direction: column;\n    margin-top: 100px;\n    margin-left: 2%;\n    background-color: #f7f7f7;\n    min-width: 250px;\n    position: fixed;\n    font-family: Roboto;\n    \n}\n\n.sg-ui-menu-container{\n    margin-top:100px;\n}\n.sg-ui-menu-item{\n    padding: 5px;\n    padding-left: 30px;\n    width: 78%;\n    display: block;\n}\n.sg-ui-menu-item-text{\n    font-size: 13px;\n    color: #3a3a3a;\n    text-transform: capitalize;\n    cursor: pointer;\n}\n.sg-ui-submenu{\n    padding: 5px;\n    padding-left: 10px;\n    width: 78%;\n    display: block;\n}\n\n.sg-ui-submenu-item{\n    padding: 5px;\n    display: block;\n    font-size: 13px;\n    color: #3a3a3a;\n    cursor: pointer;\n    text-decoration: none;\n}\n\n.sg-ui-menu-arrow{\n    font-size: 8px;\n}\n\n\n.sg-ui-submenu-item-selected{\n    color: #1EA1ED;\n    font-weight: normal;        \n}", ""]);

// exports


/***/ }),

/***/ 123:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-doc-subtitle{\n    font: 400 20px/32px Roboto,sans-serif\n}\n\n.sg-ui-parameters-title{\n    background-color: #78909c;\n    color: #ffffff;\n}\n.sg-ui-parameter-item{\n    background-color: #F0F3F5;\n    border-bottom: 1px solid #CAD3D6;\n}\n\n.sg-ui-parameter-description{\n    font-size: 14px;\n    color: #5E676A;\n}\n\n.sg-ui-parameter-type{\n    font-size: 13px;\n    background-color: #CAD3D6;\n    \n}\n\n.sg-ui-parameter-text{\n    color: #5E676A;\n    font: 14px/20px Roboto Mono,monospace\n}\n\n.grid-container{\n    width: 100%; \n    max-width: 1200px;      \n}\n\n/*-- our cleafix hack -- */ \n.row:before, \n.row:after {\n    content:\"\";\n      display: table ;\n    clear:both;\n}\n\n[class*='col-'] {\n    float: left; \n    min-height: 1px; \n    width: 16.66%; \n    /*-- our gutter -- */\n    padding: 12px; \n}\n\n.col-1{ width: 16.65%; }\n.col-2{ width: 33.32%; }\n.col-3{ width: 50%;    }\n.col-4{ width: 66.65%; }\n.col-5{ width: 83.32%; }\n.col-6{ width: 100%;   }\n\n.sg-ui-parameter-req{\n    color: #FF3333 \n}\n", ""]);

// exports


/***/ }),

/***/ 124:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports


// module
exports.push([module.i, ".sg-ui-rest-client{\n    background-color: #78909c;\n    display: block;\n    position: fixed;\n    width: 100%;\n    flex-direction: column;  \n    color: #EAEFF2;\n    height: 100vmax;\n    font-family: Roboto;\n    \n}\n\n.sg-ui-rest-client-title{\n    background-color: #3B5E6F;\n    color: #EAEFF2;\n    align-content: center;\n    padding: 7px;\n    padding-left: 15px;\n    font: 300 18px/40px Roboto,sans-serif;\n    letter-spacing: -.01em;\n    text-transform: uppercase;\n}\n\n.sg-ui-rest-client-content{\n}\n.sg-ui-rest-url{\n    display: flex;\n    margin-top:50px;\n    padding: 10px;    \n    font: 14px/20px Roboto Mono,monospace;\n    border-bottom: #dddddd solid 1px;\n    border-top: #dddddd solid 1px;\n    max-width: 400px;\n    position: relative;\n    word-wrap: break-word;\n    \n}\n\n.sg-ui-rest-method{\n    max-height: 20px;\n    border: 1px solid #dddddd;\n    padding: 5px;\n    text-transform: uppercase;\n    margin: 5px;\n    border-radius: 2px;\n    margin-right: 30px;\n}\n\n.sg-ui-url {\n    max-width: 75%;\n}\n\n.sg-ui-params-tab{\n    position: relative;\n    height: 50px;\n    max-width: 26%;\n    background-color: #3b5e6f;\n    margin: 20px;\n    padding: 3px;\n    border-radius: 4px;\n}\n\n.sg-ui-params-tab::before,\n.sg-ui-params-tab::after{\n    content:\"\";\n    display: table ;\n    clear:both;\n}\n.sg-ui-params-tab-item{\n    background-color: #C2CFD5;\n    min-width: 16.4%;\n    height: 33px;\n    margin: 2px;\n    float: left;\n    padding: 6px;\n    font: 14px/32px Roboto Mono,sans-serif;\n    color: #3b5e6f;\n    text-transform: capitalize;\n    padding-left: 22px;\n    cursor: pointer;\n    border-radius: 2px;    \n}\n.sg-ui-params-tab-item:hover{\n    background-color: #B0BCC2;   \n    color: #FFFFFF;\n    font-weight: bolder;\n}\n.sg-ui-params-tab-item-selected{\n    background-color: #3b5e6f !important;  \n    color:  #C2CFD5;\n}\n.sg-ui-pointer{\n    cursor: pointer;\n}\n\n.sg-ui-params{\n    position: relative;\n    height: 50px;\n    max-width: 26%;\n    margin: 20px;\n    padding: 3px;\n    border-radius: 4px;\n}\n.sg-ui-params-item{\n    background-color:  #F8F8F8;\n    color: #3b5e6f;\n    padding: 5px;\n    margin-bottom: 5px;\n    border-radius: 2px;\n    \n}\n.sg-ui-params-item:hover{\n    background-color:  #E8E8E8;\n\n}\n\n.sg-ui-params-item:nth-child(1){\n    border-top-left-radius: 4px;\n    border-top-right-radius: 4px;\n}\n.sg-ui-params-item:nth-last-child(1){\n    border-bottom-left-radius: 4px;\n    border-bottom-right-radius: 4px;\n}\n\ninput[type=text].sg-ui-params-text{\n    width: 42%;\n    margin: 2px;\n    border: none;\n    height: 20px;\n    border-radius: 3px;\n    \n}\n\n.sg-ui-request-body{\n    height: 300px;\n    width: 100%;\n    border-radius: 3px;\n    border: none !important;\n    background-color: #C2CFD5;\n    padding: 4%;\n    width: 94%;\n    line-height: 16px;\n}\n.sg-ui-err{\n    padding: 4%;\n    width: 94%;\n    background-color: #FF5555;\n    color: #ffffff;\n    position: relative;\n    border-radius: 5px; \n}\n\n.sg-ui-request-btn{\n    background-color: #3b5e6f !important;  \n    color:  #C2CFD5;\n    padding-top: 10px;\n    margin: 15px;\n    border-radius: 5px;\n    height: 30px;    \n    box-shadow: #465156 1px 1px 4px 2px;\n    text-align: center;\n    vertical-align: middle;\n    text-transform: uppercase;\n    font-family: Roboto;\n    cursor: pointer;\n}\n.sg-ui-request-btn:active{\n    background-color: #817171 !important;  \n    \n}", ""]);

// exports


/***/ }),

/***/ 125:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(8)(undefined);
// imports
exports.push([module.i, "@import url(http://fonts.googleapis.com/css?family=Roboto:400,100,100italic,300,300ita‌​lic,400italic,500,500italic,700,700italic,900italic,900);", ""]);

// module
exports.push([module.i, "\n", ""]);

// exports


/***/ }),

/***/ 430:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(119);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./CodeSnippet.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./CodeSnippet.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 431:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(120);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Doc.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Doc.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 432:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(121);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Main.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Main.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 433:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(122);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Menu.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Menu.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 434:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(123);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./Parameters.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./Parameters.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 435:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(124);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../../../node_modules/css-loader/index.js!./RestClient.css", function() {
			var newContent = require("!!../../../node_modules/css-loader/index.js!./RestClient.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__menu_Menu__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__doc_Doc__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__doc_Overview__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_router_dom__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Main_css__ = __webpack_require__(432);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Main_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__Main_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }









var Main = function (_React$Component) {
    _inherits(Main, _React$Component);

    function Main() {
        _classCallCheck(this, Main);

        return _possibleConstructorReturn(this, (Main.__proto__ || Object.getPrototypeOf(Main)).apply(this, arguments));
    }

    _createClass(Main, [{
        key: 'getEndpoints',
        value: function getEndpoints(paths) {
            var endpoints = [];
            Object.keys(paths).forEach(function (path) {
                Object.keys(paths[path]).forEach(function (method) {
                    var data = paths[path][method];
                    data.path = path;
                    data.method = method;
                    endpoints.push(data);
                });
            });

            return endpoints;
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'sg-ui' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-menu-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__menu_Menu__["a" /* default */], { items: this.props.spec.tags, endpoints: this.getEndpoints(this.props.spec.paths) })
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-main-content' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        __WEBPACK_IMPORTED_MODULE_4_react_router_dom__["a" /* Switch */],
                        null,
                        this.getEndpoints(this.props.spec.paths).map(function (endpoint, i) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Route */], { path: '/' + endpoint.operationId, render: function render() {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__doc_Doc__["a" /* default */], { endpoint: endpoint,
                                        host: _this2.props.spec.host,
                                        basePath: _this2.props.spec.basePath,
                                        definitions: _this2.props.spec.definitions,
                                        code: _this2.props.code
                                    });
                                }, key: i });
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_router_dom__["b" /* Route */], { path: '/', render: function render() {
                                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__doc_Overview__["a" /* default */], {
                                    info: _this2.props.spec.info,
                                    authentication: _this2.props.spec.securityDefinitions
                                });
                            }
                        })
                    )
                )
            );
        }
    }]);

    return Main;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Main);

/***/ }),

/***/ 62:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(125);
if(typeof content === 'string') content = [[module.i, content, '']];
// add the styles to the DOM
var update = __webpack_require__(10)(content, {});
if(content.locals) module.exports = content.locals;
// Hot Module Replacement
if(false) {
	// When the styles change, update the <style> tags
	if(!content.locals) {
		module.hot.accept("!!../node_modules/css-loader/index.js!./index.css", function() {
			var newContent = require("!!../node_modules/css-loader/index.js!./index.css");
			if(typeof newContent === 'string') newContent = [[module.id, newContent, '']];
			update(newContent);
		});
	}
	// When the module is disposed, remove the <style> tags
	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeSnippet_css__ = __webpack_require__(430);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__CodeSnippet_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__CodeSnippet_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter__ = __webpack_require__(336);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_syntax_highlighter_dist_styles__ = __webpack_require__(383);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react_syntax_highlighter_dist_styles___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react_syntax_highlighter_dist_styles__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var CodeSnippet = function (_React$Component) {
    _inherits(CodeSnippet, _React$Component);

    function CodeSnippet() {
        _classCallCheck(this, CodeSnippet);

        return _possibleConstructorReturn(this, (CodeSnippet.__proto__ || Object.getPrototypeOf(CodeSnippet)).apply(this, arguments));
    }

    _createClass(CodeSnippet, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                selected: this.props.code[0]
            });
        }
    }, {
        key: 'isSelected',
        value: function isSelected(lang) {
            return this.state && this.state.selected.lang == lang.lang;
        }
    }, {
        key: 'select',
        value: function select(lang) {
            this.setState({
                selected: lang
            });
        }
    }, {
        key: 'getCode',
        value: function getCode() {
            if (this.state && this.state.selected) {
                return this.state.selected.snippet.join('\r\n');
            }
            return "";
        }
    }, {
        key: 'getClassName',
        value: function getClassName(lang) {
            if (this.state && this.state.selected.lang == lang.lang) {
                return 'sg-ui-code-tabs-item sg-ui-code-tabs-item-selected';
            }
            return 'sg-ui-code-tabs-item';
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'h1',
                    { className: 'sg-ui-code-heading' },
                    'Examples'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-code-container' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-code-tabs' },
                        this.props.code.map(function (lang, i) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: _this2.getClassName(lang), key: i, onClick: _this2.select.bind(_this2, lang) },
                                lang.lang
                            );
                        })
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-code-snippet' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            __WEBPACK_IMPORTED_MODULE_2_react_syntax_highlighter___default.a,
                            { language: this.state.selected.lang, style: __WEBPACK_IMPORTED_MODULE_3_react_syntax_highlighter_dist_styles__["googlecode"], showLineNumbers: true },
                            this.getCode()
                        )
                    )
                )
            );
        }
    }]);

    return CodeSnippet;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (CodeSnippet);

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__parameters_Parameters__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__code_snippet_CodeSnippet__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rest_client_RestClient__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Doc_css__ = __webpack_require__(431);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Doc_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__Doc_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }







var Doc = function (_React$Component) {
    _inherits(Doc, _React$Component);

    function Doc() {
        _classCallCheck(this, Doc);

        return _possibleConstructorReturn(this, (Doc.__proto__ || Object.getPrototypeOf(Doc)).apply(this, arguments));
    }

    _createClass(Doc, [{
        key: 'isBodyNeeded',
        value: function isBodyNeeded() {
            return this.props.endpoint.parameters.filter(function (param) {
                return param.in == 'body';
            }).length > 0;
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: '.sg-ui-doc-main row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-doc col-d' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-doc-text' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h1',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-heading-class' },
                                this.props.endpoint.tags[0] + ' :: '
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-heading-function' },
                                this.props.endpoint.operationId
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'sg-ui-doc-auth' },
                            '*Requires Authorization'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'sg-ui-doc-summary' },
                            this.props.endpoint.summary,
                            '.',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-summary-link' },
                                ' Try it now '
                            ),
                            'or',
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-summary-link' },
                                ' see an example now'
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'sg-ui-doc-summary' },
                            ' ',
                            this.props.endpoint.description,
                            ' '
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            { className: 'sg-ui-doc-heading-request' },
                            'Request '
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            { className: 'sg-ui-doc-subtitle' },
                            ' HTTP Request'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            { className: 'sg-ui-doc-endpoint' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-method' },
                                this.props.endpoint.method
                            ),
                            'http://' + this.props.host + this.props.basePath + this.props.endpoint.path
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            { className: 'sg-ui-doc-subtitle' },
                            ' Parameters'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__parameters_Parameters__["a" /* default */], {
                            parameters: this.props.endpoint.parameters,
                            definitions: this.props.definitions,
                            types: ['path', 'query']
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            { className: 'sg-ui-doc-subtitle' },
                            ' Request body'
                        ),
                        this.isBodyNeeded() ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__parameters_Parameters__["a" /* default */], {
                            parameters: this.props.endpoint.parameters,
                            definitions: this.props.definitions,
                            types: ['body']
                        }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            null,
                            'Do not supply a request body with this method.'
                        )
                    ),
                    this.props.code && this.props.code[this.props.endpoint.operationId] ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__code_snippet_CodeSnippet__["a" /* default */], { code: this.props.code[this.props.endpoint.operationId] }) : null
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'col-r .sg-ui-rest' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__rest_client_RestClient__["a" /* default */], {
                        endpoint: this.props.endpoint,
                        definitions: this.props.definitions,
                        url: 'http://' + this.props.host + this.props.basePath + this.props.endpoint.path
                    })
                )
            );
        }
    }]);

    return Doc;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Doc);

/***/ }),

/***/ 83:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var OverView = function (_React$Component) {
    _inherits(OverView, _React$Component);

    function OverView() {
        _classCallCheck(this, OverView);

        return _possibleConstructorReturn(this, (OverView.__proto__ || Object.getPrototypeOf(OverView)).apply(this, arguments));
    }

    _createClass(OverView, [{
        key: 'extractLinks',
        value: function extractLinks() {
            var description = this.props.info.description;
            var data = [];
            var links = description.match(/\[.[^\)]*.\)/g);
            links.forEach(function (link) {
                var temp = description.split(link);
                data.push({ text: temp[0], type: 'text' });
                description = temp[1];

                var links = link.split('](');
                data.push({
                    text: links[0].substr(1, links[0].length - 1),
                    link: links[1].substr(0, links[1].length - 2),
                    type: 'link'
                });
            });
            if (!!description) {
                data.push({ text: description, type: 'text' });
            }
            return data;
        }
    }, {
        key: 'getAuthDetails',
        value: function getAuthDetails() {
            var _this2 = this;

            return Object.keys(this.props.authentication).map(function (key) {
                var objAuth = _this2.props.authentication[key];
                objAuth.name = key;
                return objAuth;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: '.sg-ui-doc-main row' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-doc col-d' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-doc-text' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'p',
                            null,
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-heading-class' },
                                ' ',
                                this.props.info.title || "API Documentation"
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-version' },
                                this.props.info.version
                            )
                        ),
                        this.extractLinks().map(function (data, i) {
                            return data.type == 'text' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-summary', key: i },
                                data.text
                            ) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'span',
                                { className: 'sg-ui-doc-summary', key: i },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'sg-ui-doc-summary-link', href: data.link },
                                    data.text
                                )
                            );
                        }),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'sg-ui-doc-licence' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                { className: 'sg-ui-doc-summary' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'sg-ui-doc-summary-link', href: this.props.info.termsOfService },
                                    'Terms of service'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                { className: 'sg-ui-doc-summary' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'sg-ui-doc-summary-link', href: this.props.info.contact.email },
                                    'Contact Developer'
                                )
                            ),
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'p',
                                { className: 'sg-ui-doc-summary' },
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'a',
                                    { className: 'sg-ui-doc-summary-link', href: this.props.info.license.url },
                                    'Licence (',
                                    this.props.info.license.name,
                                    ')'
                                )
                            )
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'h3',
                            { className: 'sg-ui-doc-heading-request' },
                            'Authorization '
                        ),
                        this.getAuthDetails().map(function (auth, i) {
                            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                null,
                                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                    'h3',
                                    { className: 'sg-ui-doc-subtitle', key: i },
                                    ' ',
                                    auth.name
                                )
                            );
                        })
                    )
                )
            );
        }
    }]);

    return OverView;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (OverView);

/***/ }),

/***/ 84:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_router_dom__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_css__ = __webpack_require__(433);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__Menu_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__Menu_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var Menu = function (_React$Component) {
    _inherits(Menu, _React$Component);

    function Menu() {
        _classCallCheck(this, Menu);

        return _possibleConstructorReturn(this, (Menu.__proto__ || Object.getPrototypeOf(Menu)).apply(this, arguments));
    }

    _createClass(Menu, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                selected: ''
            });
        }
    }, {
        key: 'tagSelect',
        value: function tagSelect(tag) {
            if (this.state && this.state.selected == tag.name) {
                this.setState({
                    selected: ''
                });
                return;
            }
            this.setState({
                selected: tag.name
            });
        }
    }, {
        key: 'isSelected',
        value: function isSelected(tag) {
            return this.state && this.state.selected == tag.name;
        }
    }, {
        key: 'getEndpoints',
        value: function getEndpoints(tag) {
            return this.props.endpoints.filter(function (endpoint) {
                return endpoint.tags.indexOf(tag.name) != -1;
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'sg-ui-menu-bar' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-menu-container' },
                    this.props.items.map(function (item, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'sg-ui-menu-item', key: i },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'sg-ui-menu-item-text', onClick: _this2.tagSelect.bind(_this2, item) },
                                item.name
                            ),
                            _this2.isSelected(item) ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'div',
                                { className: 'sg-ui-submenu' },
                                _this2.getEndpoints(item).map(function (endpoint, j) {
                                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                        __WEBPACK_IMPORTED_MODULE_1_react_router_dom__["c" /* NavLink */],
                                        { to: '/' + endpoint.operationId, activeClassName: 'sg-ui-submenu-item-selected', className: 'sg-ui-submenu-item', key: j },
                                        endpoint.operationId
                                    );
                                })
                            ) : null
                        );
                    })
                )
            );
        }
    }]);

    return Menu;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Menu);

/***/ }),

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Parameters_css__ = __webpack_require__(434);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__Parameters_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__Parameters_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }




var getState = function getState(props) {
    var body = props.parameters.filter(function (param) {
        return param.in == 'body';
    });
    var path = props.parameters.filter(function (param) {
        return param.in == 'path';
    });
    var query = props.parameters.filter(function (param) {
        return param.in == 'query';
    });

    if (body && body.length == 1 && body[0].schema && body[0].schema['$ref']) {
        var ref = body[0].schema['$ref'].split('/');
        var strRef = ref[ref.length - 1];
        var data = props.definitions[strRef].properties;
        body = Object.keys(data).map(function (key) {
            var param = data[key];
            param.name = key;
            return param;
        });
    }

    return {
        body: body,
        path: path,
        query: query
    };
};

var Param = function Param(props) {
    return props.params && props.params[props.type] && props.params[props.type].length > 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
        'div',
        null,
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            { className: 'row sg-ui-parameter-type' },
            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'col-5' },
                props.type,
                ' parameters'
            )
        ),
        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
            'div',
            null,
            props.params[props.type].map(function (param, i) {
                return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row sg-ui-parameter-item', key: i },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-1 sg-ui-parameter-text' },
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            null,
                            param.name
                        ),
                        param.required ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'span',
                            { className: 'sg-ui-parameter-req' },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                                'sup',
                                null,
                                '*'
                            )
                        ) : null
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-1 sg-ui-parameter-text' },
                        param.type
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-3 sg-ui-parameter-description' },
                        param.description
                    )
                );
            })
        )
    ) : null;
};

var Parameters = function (_React$Component) {
    _inherits(Parameters, _React$Component);

    function Parameters(props) {
        _classCallCheck(this, Parameters);

        return _possibleConstructorReturn(this, (Parameters.__proto__ || Object.getPrototypeOf(Parameters)).call(this, props));
    }

    _createClass(Parameters, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState(getState(this.props));
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            this.setState(getState(props));
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'row sg-ui-parameters-title' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-1' },
                        'Parameter'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-1 ' },
                        'Type'
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'col-3' },
                        'Description'
                    )
                ),
                this.props.types.map(function (type, i) {
                    return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(Param, { params: _this2.state, type: type, definitions: _this2.props.definitions, key: i });
                })
            );
        }
    }]);

    return Parameters;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Parameters);

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }



var InputGroup = function (_React$Component) {
    _inherits(InputGroup, _React$Component);

    function InputGroup() {
        _classCallCheck(this, InputGroup);

        return _possibleConstructorReturn(this, (InputGroup.__proto__ || Object.getPrototypeOf(InputGroup)).apply(this, arguments));
    }

    _createClass(InputGroup, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            this.setState({
                enabled: this.props.enabled,
                key: this.props.keyVal,
                value: this.props.value,
                disableUncheck: this.props.disableUncheck
            });
        }
    }, {
        key: 'onParamsChange',
        value: function onParamsChange(key, evt) {
            var state = {};
            state[key] = evt.target.value;
            this.setState(state);
            this.props.onParamsChange(key, evt.target.value);
        }
    }, {
        key: 'onChecked',
        value: function onChecked() {

            this.props.onParamsChange('enabled', !this.state.enabled);
            this.setState({
                enabled: !this.state.enabled
            });
        }
    }, {
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'span',
                null,
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'checkbox', disabled: this.state.disableUncheck, checked: this.state.enabled, onChange: this.onChecked.bind(this) }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'sg-ui-params-text', value: this.state.key, onChange: this.onParamsChange.bind(this, 'key') }),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('input', { type: 'text', className: 'sg-ui-params-text', value: this.state.value, onChange: this.onParamsChange.bind(this, 'value') })
            );
        }
    }]);

    return InputGroup;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (InputGroup);

/***/ }),

/***/ 87:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestClient_css__ = __webpack_require__(435);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__RestClient_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__RestClient_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__InputGroup__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_axios__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }






var RestClient = function (_React$Component) {
    _inherits(RestClient, _React$Component);

    function RestClient() {
        _classCallCheck(this, RestClient);

        return _possibleConstructorReturn(this, (RestClient.__proto__ || Object.getPrototypeOf(RestClient)).apply(this, arguments));
    }

    _createClass(RestClient, [{
        key: 'componentWillMount',
        value: function componentWillMount() {
            var state = {
                url: this.props.url,
                query: getParamsValue(this.props.endpoint.parameters, 'query'),
                body: getBody(this.props.endpoint.parameters, this.props.definitions),
                header: [],
                path: getParamsValue(this.props.endpoint.parameters, 'path'),
                selectedTab: 'path',
                bodyErr: null,
                response: null
            };
            this.setState(state);
        }
    }, {
        key: 'makeRequest',
        value: function makeRequest() {
            var self = this;
            __WEBPACK_IMPORTED_MODULE_3_axios___default()(this.getUrl(), {
                method: this.props.endpoint.method,
                url: this.getUrl(),
                data: this.state.body,
                headers: this.getHeaders()
            }).then(function (data) {

                self.setState({
                    response: JSON.stringify(data.data, null, 4)
                });
            }).catch(function (err) {
                self.setState({ bodyErr: err.message });
            });
        }
    }, {
        key: 'getHeaders',
        value: function getHeaders() {
            var headerObj = {};
            this.state.header.forEach(function (header) {
                if (header.enabled) headerObj[header.key] = header.value;
            });
            return headerObj;
        }
    }, {
        key: 'getTabClassName',
        value: function getTabClassName(item) {
            if (item == this.state.selectedTab) {
                return 'sg-ui-params-tab-item sg-ui-params-tab-item-selected';
            }
            return 'sg-ui-params-tab-item';
        }
    }, {
        key: 'selectTab',
        value: function selectTab(item) {

            this.setState({
                selectedTab: item
            });
        }
    }, {
        key: 'bodyChange',
        value: function bodyChange(evt) {
            this.setState({
                body: evt.target.value
            });
        }
    }, {
        key: 'getUrl',
        value: function getUrl() {
            var _this2 = this;

            var url = this.props.url;
            var params = url.match(/\{[^}]*\}/g);
            if (params) {
                params.forEach(function (param) {
                    var key = param.substr(1, param.length - 2);
                    var pathObject = _this2.state.path.find(function (path) {
                        return path.key == key;
                    });
                    if (!!pathObject && !!pathObject.value) {
                        url = url.replace(param, pathObject.value);
                    }
                });
            }
            if (this.state.query.length > 0) {
                url += '?';
                var validQueries = this.state.query.filter(function (query) {
                    return query.enabled == true;
                });
                url += validQueries.map(function (query) {
                    return query.key + '=' + query.value;
                }).join('&');
            }

            return url;
        }
    }, {
        key: 'onParamsChange',
        value: function onParamsChange(type, index, key, newVal, evt) {
            var newObj = this.state[type];
            newObj[index][key] = newVal;
            var newState = {};
            newState[type] = newObj;
            this.setState(newState);
        }
    }, {
        key: 'addField',
        value: function addField() {
            var state = {};
            state[this.state.selectedTab] = [].concat(_toConsumableArray(this.state[this.state.selectedTab]), [{
                key: 'newField',
                value: undefined,
                enabled: true
            }]);
            this.setState(state);
        }
    }, {
        key: 'validateBody',
        value: function validateBody() {
            if (!validateJson(this.state.body)) {
                this.setState({
                    bodyErr: 'Invalid Json'
                });
            } else {
                this.setState({
                    bodyErr: null
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this3 = this;

            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                'div',
                { className: 'sg-ui-rest-client' },
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-rest-client-title' },
                    'Test API Calls'
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-rest-url' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'sg-ui-rest-method' },
                        this.props.endpoint.method
                    ),
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        { className: 'sg-ui-url' },
                        this.getUrl()
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-params-tab' },
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'span',
                        null,
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: this.getTabClassName('path'), onClick: this.selectTab.bind(this, 'path') },
                            'path'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: this.getTabClassName('query'), onClick: this.selectTab.bind(this, 'query') },
                            'query'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: this.getTabClassName('header'), onClick: this.selectTab.bind(this, 'header') },
                            'header'
                        ),
                        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: this.getTabClassName('body'), onClick: this.selectTab.bind(this, 'body') },
                            'body'
                        )
                    )
                ),
                __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                    'div',
                    { className: 'sg-ui-params' },
                    this.state.selectedTab == 'query' ? this.state.query.map(function (query, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'sg-ui-params-item', key: i },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InputGroup__["a" /* default */], { enabled: query.enabled, keyVal: query.key, value: query.value, key: i, onParamsChange: _this3.onParamsChange.bind(_this3, 'query', i) })
                        );
                    }) : null,
                    this.state.selectedTab == 'path' ? this.state.path.length == 0 ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        'Do not supply any path parameters with this method.'
                    ) : this.state.path.map(function (query, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'sg-ui-params-item', key: i },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InputGroup__["a" /* default */], { enabled: query.enabled, keyVal: query.key, value: query.value, key: i, onParamsChange: _this3.onParamsChange.bind(_this3, 'path', i), disableUncheck: true })
                        );
                    }) : null,
                    this.state.selectedTab == 'header' ? this.state.header.map(function (query, i) {
                        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                            'div',
                            { className: 'sg-ui-params-item', key: i },
                            __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__InputGroup__["a" /* default */], { enabled: query.enabled, keyVal: query.key, value: query.value, onParamsChange: _this3.onParamsChange.bind(_this3, 'header', i) })
                        );
                    }) : null,
                    this.state.selectedTab == 'body' ? this.state.body ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
                        defaultValue: this.state.body,
                        className: 'sg-ui-request-body',
                        onChange: this.bodyChange.bind(this),
                        onBlur: this.validateBody.bind(this)
                    }) : __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        null,
                        'Do not supply a request body with this method.'
                    ) : null,
                    this.state.selectedTab != 'path' && this.state.selectedTab != 'body' ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-params-item sg-ui-pointer', onClick: this.addField.bind(this) },
                        'add new row'
                    ) : null,
                    this.state.bodyErr ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-err' },
                        ' ',
                        this.state.bodyErr
                    ) : null,
                    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(
                        'div',
                        { className: 'sg-ui-request-btn', onClick: this.makeRequest.bind(this) },
                        'Make Request'
                    ),
                    this.state.response ? __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement('textarea', {
                        defaultValue: this.state.response,
                        className: 'sg-ui-request-body',
                        onChange: this.bodyChange.bind(this),
                        onBlur: this.validateBody.bind(this)
                    }) : null
                )
            );
        }
    }]);

    return RestClient;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

var getParamsValue = function getParamsValue(params, type) {
    return params.filter(function (param) {
        return param.in == type;
    }).map(function (param) {
        return {
            key: param.name,
            value: null,
            enabled: true
        };
    });
};

var getBody = function getBody(params, definitions) {
    var body = {};
    var bodyParams = params.filter(function (param) {
        return param.in == 'body';
    });

    if (bodyParams && bodyParams.length == 1 && bodyParams[0].schema && bodyParams[0].schema['$ref']) {
        var ref = bodyParams[0].schema['$ref'].split('/');
        var strRef = ref[ref.length - 1];
        var data = definitions[strRef].properties;
        Object.keys(data).forEach(function (key) {
            body[key] = null;
        });
        return JSON.stringify(body, null, 4);
    }
    return null;
};

var validateJson = function validateJson(str) {
    try {
        JSON.parse(str);
        return true;
    } catch (e) {
        return false;
    }
};

/* harmony default export */ __webpack_exports__["a"] = (RestClient);

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_main_Main__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__index_css__);
var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// Demo component
// this is only example component





var SGSwagger = function (_React$Component) {
    _inherits(SGSwagger, _React$Component);

    function SGSwagger() {
        _classCallCheck(this, SGSwagger);

        return _possibleConstructorReturn(this, (SGSwagger.__proto__ || Object.getPrototypeOf(SGSwagger)).apply(this, arguments));
    }

    _createClass(SGSwagger, [{
        key: 'render',
        value: function render() {
            return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_main_Main__["a" /* default */], { spec: this.props.spec, code: this.props.code });
        }
    }]);

    return SGSwagger;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (SGSwagger);

/***/ })

},[88]);
});