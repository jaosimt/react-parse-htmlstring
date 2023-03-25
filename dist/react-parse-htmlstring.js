/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["React"], factory);
	else if(typeof exports === 'object')
		exports["ReactParseHTMLString"] = factory(require("React"));
	else
		root["ReactParseHTMLString"] = factory(root["React"]);
})(self, (__WEBPACK_EXTERNAL_MODULE_react__) => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/ParseHTML.js":
/*!**************************!*\
  !*** ./src/ParseHTML.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./processor */ \"./src/processor.js\");\nfunction _typeof(obj) { \"@babel/helpers - typeof\"; return _typeof = \"function\" == typeof Symbol && \"symbol\" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && \"function\" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? \"symbol\" : typeof obj; }, _typeof(obj); }\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }\nfunction _defineProperty(obj, key, value) { key = _toPropertyKey(key); if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\nfunction _toPropertyKey(arg) { var key = _toPrimitive(arg, \"string\"); return _typeof(key) === \"symbol\" ? key : String(key); }\nfunction _toPrimitive(input, hint) { if (_typeof(input) !== \"object\" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || \"default\"); if (_typeof(res) !== \"object\") return res; throw new TypeError(\"@@toPrimitive must return a primitive value.\"); } return (hint === \"string\" ? String : Number)(input); }\n/*\n *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.\n */\n\n\n\n\nvar ParseHTML = function ParseHTML(props) {\n  var _props$wrapperElement = props.wrapperElement,\n    wrapperElement = _props$wrapperElement === void 0 ? 'div' : _props$wrapperElement,\n    _props$string = props.string,\n    string = _props$string === void 0 ? '' : _props$string,\n    className = props.className,\n    _props$style = props.style,\n    style = _props$style === void 0 ? {} : _props$style;\n  var tag = _processor__WEBPACK_IMPORTED_MODULE_2__.voidElements.includes(wrapperElement) ? 'div' : wrapperElement;\n  return /*#__PURE__*/(0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(tag, {\n    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('parse-htmlstring', className),\n    style: _objectSpread({\n      whiteSpace: 'pre'\n    }, style),\n    dangerouslySetInnerHTML: {\n      __html: (0,_processor__WEBPACK_IMPORTED_MODULE_2__.parseHTMLString)(string)\n    }\n  });\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ParseHTML);\n\n//# sourceURL=webpack://ReactParseHTMLString/./src/ParseHTML.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"parseHTMLString\": () => (/* reexport safe */ _processor__WEBPACK_IMPORTED_MODULE_1__.parseHTMLString)\n/* harmony export */ });\n/* harmony import */ var _ParseHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParseHTML */ \"./src/ParseHTML.js\");\n/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ \"./src/processor.js\");\n/*\n *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.\n */\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ParseHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ReactParseHTMLString/./src/index.js?");

/***/ }),

/***/ "./src/processor.js":
/*!**************************!*\
  !*** ./src/processor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isString\": () => (/* binding */ isString),\n/* harmony export */   \"parseHTMLString\": () => (/* binding */ parseHTMLString),\n/* harmony export */   \"voidElements\": () => (/* binding */ voidElements)\n/* harmony export */ });\n/*\n *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.\n */\n\nvar isString = function isString(str) {\n  var validateNotEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';\n};\nvar voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];\nvar parseHTMLString = function parseHTMLString(htmlString) {\n  var _0x22d7db = _0x28ef;\n  (function (_0xc64a65, _0x1a064b) {\n    var _0x255687 = _0x28ef,\n      _0x424078 = _0xc64a65();\n    while (!![]) {\n      try {\n        var _0x5b4152 = parseInt(_0x255687(0x84)) / 0x1 + -parseInt(_0x255687(0x8d)) / 0x2 + -parseInt(_0x255687(0x8c)) / 0x3 + parseInt(_0x255687(0x8b)) / 0x4 + parseInt(_0x255687(0x82)) / 0x5 * (-parseInt(_0x255687(0x80)) / 0x6) + parseInt(_0x255687(0x87)) / 0x7 * (-parseInt(_0x255687(0x86)) / 0x8) + parseInt(_0x255687(0x8f)) / 0x9;\n        if (_0x5b4152 === _0x1a064b) break;else _0x424078['push'](_0x424078['shift']());\n      } catch (_0xe7bad5) {\n        _0x424078['push'](_0x424078['shift']());\n      }\n    }\n  })(_0x47a2, 0xbd5d1);\n  if (!isString(htmlString, !![])) return null;\n  htmlString = htmlString[_0x22d7db(0x8e)]();\n  var div = document['createElement'](_0x22d7db(0x81));\n  div[_0x22d7db(0x89)] = htmlString;\n  function _0x28ef(_0x5b79c7, _0xa42463) {\n    var _0x47a267 = _0x47a2();\n    return _0x28ef = function _0x28ef(_0x28ef0e, _0xdb4f3f) {\n      _0x28ef0e = _0x28ef0e - 0x7e;\n      var _0x596f3c = _0x47a267[_0x28ef0e];\n      return _0x596f3c;\n    }, _0x28ef(_0x5b79c7, _0xa42463);\n  }\n  var arOne = htmlString[_0x22d7db(0x7f)]('\\x20');\n  function _0x47a2() {\n    var _0x964824 = ['29389671YQALic', 'length', 'split', '18xNvldJ', 'div', '1414445enUqxV', 'push', '238668ooIxHK', 'join', '344Cgzlsm', '192003nDeCed', 'replace', 'innerHTML', '&lt;', '4263120ruznIe', '2967726BWNLpA', '1553956TuKjFH', 'trim'];\n    _0x47a2 = function _0x47a2() {\n      return _0x964824;\n    };\n    return _0x47a2();\n  }\n  if (arOne[_0x22d7db(0x7e)] < 0x2) arOne[_0x22d7db(0x83)]('');\n  var arTwo = div[_0x22d7db(0x89)][_0x22d7db(0x7f)]('\\x20');\n  arOne['forEach'](function (_0x22313f, _0x2ea609) {\n    var _0x1c386a = _0x22d7db;\n    _0x22313f !== arTwo[_0x2ea609] && _0x2ea609 > 0x0 && (arTwo[_0x2ea609 - 0x1] = arOne[_0x2ea609 - 0x1][_0x1c386a(0x88)](/</g, _0x1c386a(0x8a)), arTwo[_0x2ea609] = _0x22313f);\n  }), arTwo['splice'](arOne[_0x22d7db(0x7e)]);\n  return arTwo[_0x22d7db(0x85)]('\\x20')[_0x22d7db(0x8e)]();\n};\n\n//# sourceURL=webpack://ReactParseHTMLString/./src/processor.js?");

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/***/ ((module, exports) => {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!\n\tCopyright (c) 2018 Jed Watson.\n\tLicensed under the MIT License (MIT), see\n\thttp://jedwatson.github.io/classnames\n*/\n/* global define */\n\n(function () {\n\t'use strict';\n\n\tvar hasOwn = {}.hasOwnProperty;\n\tvar nativeCodeString = '[native code]';\n\n\tfunction classNames() {\n\t\tvar classes = [];\n\n\t\tfor (var i = 0; i < arguments.length; i++) {\n\t\t\tvar arg = arguments[i];\n\t\t\tif (!arg) continue;\n\n\t\t\tvar argType = typeof arg;\n\n\t\t\tif (argType === 'string' || argType === 'number') {\n\t\t\t\tclasses.push(arg);\n\t\t\t} else if (Array.isArray(arg)) {\n\t\t\t\tif (arg.length) {\n\t\t\t\t\tvar inner = classNames.apply(null, arg);\n\t\t\t\t\tif (inner) {\n\t\t\t\t\t\tclasses.push(inner);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t} else if (argType === 'object') {\n\t\t\t\tif (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {\n\t\t\t\t\tclasses.push(arg.toString());\n\t\t\t\t\tcontinue;\n\t\t\t\t}\n\n\t\t\t\tfor (var key in arg) {\n\t\t\t\t\tif (hasOwn.call(arg, key) && arg[key]) {\n\t\t\t\t\t\tclasses.push(key);\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\n\t\treturn classes.join(' ');\n\t}\n\n\tif ( true && module.exports) {\n\t\tclassNames.default = classNames;\n\t\tmodule.exports = classNames;\n\t} else if (true) {\n\t\t// register as 'classnames', consistent with npm package name\n\t\t!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n\t\t\treturn classNames;\n\t\t}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));\n\t} else {}\n}());\n\n\n//# sourceURL=webpack://ReactParseHTMLString/./node_modules/classnames/index.js?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = __WEBPACK_EXTERNAL_MODULE_react__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});