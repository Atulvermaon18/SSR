/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-config");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _LandingPage = __webpack_require__(8);

var _LandingPage2 = _interopRequireDefault(_LandingPage);

var _VoucherPage = __webpack_require__(9);

var _VoucherPage2 = _interopRequireDefault(_VoucherPage);

var _EmiPage = __webpack_require__(10);

var _EmiPage2 = _interopRequireDefault(_EmiPage);

var _App = __webpack_require__(11);

var _App2 = _interopRequireDefault(_App);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_extends({}, _App2.default, {
    routes: [_extends({
        path: '/'
    }, _LandingPage2.default, {
        exact: true
    }), _extends({
        path: '/Voucher'
    }, _VoucherPage2.default), _extends({
        path: '/Select-EMI'
    }, _EmiPage2.default)]
})];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(4);

var _express2 = _interopRequireDefault(_express);

var _renderer = __webpack_require__(5);

var _renderer2 = _interopRequireDefault(_renderer);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.use(_express2.default.static('public')); //allowing only public folder to be accessed by browser

app.get('*', function (req, res) {
    (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);
    res.send((0, _renderer2.default)(req));
});

app.listen(3000, function () {
    console.log('Listining on port 3000');
});

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(6);

var _reactRouterDom = __webpack_require__(7);

var _reactRouterConfig = __webpack_require__(1);

var _Routes = __webpack_require__(2);

var _Routes2 = _interopRequireDefault(_Routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = function (req) {
    var content = (0, _server.renderToString)(_react2.default.createElement(
        _reactRouterDom.StaticRouter,
        { location: req.path, context: {} },
        _react2.default.createElement(
            'div',
            null,
            (0, _reactRouterConfig.renderRoutes)(_Routes2.default)
        )
    )); //boot-up location

    return '\n    <html>\n    <head>\n    <style>\n        body{margin:0px !important;}\n    </style>\n    </head>\n        <body>\n            <div id="root">' + content + '</div>\n            <script src="bundle.js"></script>\n        </body>\n    </html>\n    ';
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Landingpage = function Landingpage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'MMT Landing Screen'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This is using Isomorphic, which means same kind of coding standard used both for Server and Client, In this case use are using React, which is using ES6 features, so all Node require will be changed to import.'
        )
    );
};

exports.default = {
    component: Landingpage
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Voucherpage = function Voucherpage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Voucher Screen'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This is using Isomorphic, which means same kind of coding standard used both for Server and Client,'
        )
    );
};

exports.default = {
    component: Voucherpage
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Emipage = function Emipage() {
    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'h3',
            null,
            'Select Screen'
        ),
        _react2.default.createElement(
            'p',
            null,
            'This is using Isomorphic, which means same kind of coding standard used both for Server and Client,'
        )
    );
};

exports.default = {
    component: Emipage
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterConfig = __webpack_require__(1);

var _Header = __webpack_require__(12);

var _Header2 = _interopRequireDefault(_Header);

var _Button = __webpack_require__(20);

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App(_ref) {
    var route = _ref.route;

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_Header2.default, null),
        (0, _reactRouterConfig.renderRoutes)(route.routes)
    );
};

exports.default = {
    component: App
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(13);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _styles = __webpack_require__(14);

var _AppBar = __webpack_require__(15);

var _AppBar2 = _interopRequireDefault(_AppBar);

var _Toolbar = __webpack_require__(16);

var _Toolbar2 = _interopRequireDefault(_Toolbar);

var _Typography = __webpack_require__(17);

var _Typography2 = _interopRequireDefault(_Typography);

var _Link = __webpack_require__(18);

var _Link2 = _interopRequireDefault(_Link);

var _IconButton = __webpack_require__(19);

var _IconButton2 = _interopRequireDefault(_IconButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var styles = {
    root: {
        flexGrow: 1
    },
    grow: {
        flexGrow: 1
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20
    },
    link: {
        marginLeft: 10,
        marginRight: 10,
        color: '#fff'
    },
    a: {
        textDecoration: 'none'
    }
};

function ButtonAppBar(props) {
    var classes = props.classes;

    return _react2.default.createElement(
        'div',
        { className: classes.root },
        _react2.default.createElement(
            _AppBar2.default,
            { position: 'static' },
            _react2.default.createElement(
                _Toolbar2.default,
                null,
                _react2.default.createElement(_IconButton2.default, { className: classes.menuButton, color: 'inherit', 'aria-label': 'Menu' }),
                _react2.default.createElement(
                    _Typography2.default,
                    { variant: 'h6', color: 'inherit', className: classes.grow },
                    'Zest Money'
                ),
                _react2.default.createElement(
                    _Link2.default,
                    { className: classes.link },
                    'How it works?'
                ),
                ' |',
                _react2.default.createElement(
                    _Link2.default,
                    { className: classes.link },
                    'FAQs'
                )
            )
        )
    );
}

ButtonAppBar.propTypes = {
    classes: _propTypes2.default.object.isRequired
};

exports.default = (0, _styles.withStyles)(styles)(ButtonAppBar);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("prop-types");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/styles");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/AppBar");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Toolbar");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Typography");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Link");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/IconButton");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@material-ui/core/Button");

/***/ })
/******/ ]);