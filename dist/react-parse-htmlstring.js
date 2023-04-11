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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"isValidHTMLTag\": () => (/* reexport safe */ _processor__WEBPACK_IMPORTED_MODULE_1__.isValidHTMLTag),\n/* harmony export */   \"parseHTMLString\": () => (/* reexport safe */ _processor__WEBPACK_IMPORTED_MODULE_1__.parseHTMLString)\n/* harmony export */ });\n/* harmony import */ var _ParseHTML__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ParseHTML */ \"./src/ParseHTML.js\");\n/* harmony import */ var _processor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./processor */ \"./src/processor.js\");\n/*\n *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.\n */\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_ParseHTML__WEBPACK_IMPORTED_MODULE_0__[\"default\"]);\n\n\n//# sourceURL=webpack://ReactParseHTMLString/./src/index.js?");

/***/ }),

/***/ "./src/processor.js":
/*!**************************!*\
  !*** ./src/processor.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"isString\": () => (/* binding */ isString),\n/* harmony export */   \"isValidHTMLTag\": () => (/* binding */ isValidHTMLTag),\n/* harmony export */   \"parseHTMLString\": () => (/* binding */ parseHTMLString),\n/* harmony export */   \"voidElements\": () => (/* binding */ voidElements)\n/* harmony export */ });\n/*\n *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.\n */\n\nvar isString = function isString(str) {\n  var validateNotEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;\n  return validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';\n};\nvar isValidHTMLTag = function () {\n  function _0x1352(_0x175326, _0x397237) {\n    var _0x6c8152 = _0x6c81();\n    return _0x1352 = function _0x1352(_0x135293, _0x47fa56) {\n      _0x135293 = _0x135293 - 0x19c;\n      var _0x5d8c27 = _0x6c8152[_0x135293];\n      return _0x5d8c27;\n    }, _0x1352(_0x175326, _0x397237);\n  }\n  var _0x2e041c = _0x1352;\n  (function (_0xe3f62, _0x1b994f) {\n    var _0xccbcca = _0x1352,\n      _0xaea639 = _0xe3f62();\n    while (!![]) {\n      try {\n        var _0x368df2 = -parseInt(_0xccbcca(0x19c)) / 0x1 + -parseInt(_0xccbcca(0x1a0)) / 0x2 * (-parseInt(_0xccbcca(0x1a5)) / 0x3) + -parseInt(_0xccbcca(0x19e)) / 0x4 * (-parseInt(_0xccbcca(0x1a9)) / 0x5) + -parseInt(_0xccbcca(0x1a3)) / 0x6 + -parseInt(_0xccbcca(0x1a6)) / 0x7 * (parseInt(_0xccbcca(0x1ab)) / 0x8) + -parseInt(_0xccbcca(0x1a2)) / 0x9 * (-parseInt(_0xccbcca(0x1a8)) / 0xa) + -parseInt(_0xccbcca(0x19d)) / 0xb;\n        if (_0x368df2 === _0x1b994f) break;else _0xaea639['push'](_0xaea639['shift']());\n      } catch (_0xb39cb6) {\n        _0xaea639['push'](_0xaea639['shift']());\n      }\n    }\n  })(_0x6c81, 0x5eb61);\n  var unknown = _0x2e041c(0x1a1),\n    overrides = {\n      'CANVAS': 0x1,\n      'VIDEO': 0x1,\n      'SVG': 0x1,\n      'DEFS': 0x1,\n      'LINEARGRADIENT': 0x1,\n      'STOP': 0x1,\n      'CLIPPATH': 0x1,\n      'PATH': 0x1,\n      'G': 0x1,\n      'polygon': 0x1,\n      'rect': 0x1\n    };\n  function _0x6c81() {\n    var _0x4a8b5f = ['3530545bvxVtv', 'toString', '16JUWoCL', '29121ybSdeO', '6674107eApknm', '4EKmrDQ', 'hasOwnProperty', '894718nZZVWJ', '[object\\x20HTMLUnknownElement]', '439515KzUFcC', '1309332pXqboJ', 'toUpperCase', '3bcNEfa', '544691JZDkjb', 'createElement', '50rcQCKk'];\n    _0x6c81 = function _0x6c81() {\n      return _0x4a8b5f;\n    };\n    return _0x6c81();\n  }\n  return function (_0x3b1d6f) {\n    var _0x3f72dc = _0x2e041c;\n    return overrides[_0x3b1d6f = _0x3b1d6f[_0x3f72dc(0x1a4)]()] || !overrides[_0x3f72dc(0x19f)](_0x3b1d6f) && (overrides[_0x3b1d6f] = document[_0x3f72dc(0x1a7)](_0x3b1d6f)[_0x3f72dc(0x1aa)]() !== unknown);\n  };\n}();\nvar voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];\nvar parseHTMLString = function parseHTMLString(htmlString) {\n  var _0x1f5248 = _0x31d9;\n  (function (_0x107fc8, _0x2c1882) {\n    var _0x3742e9 = _0x31d9,\n      _0x12e120 = _0x107fc8();\n    while (!![]) {\n      try {\n        var _0x2b4814 = parseInt(_0x3742e9(0x15d)) / 0x1 + parseInt(_0x3742e9(0x15c)) / 0x2 + parseInt(_0x3742e9(0x153)) / 0x3 + parseInt(_0x3742e9(0x159)) / 0x4 * (-parseInt(_0x3742e9(0x14d)) / 0x5) + -parseInt(_0x3742e9(0x158)) / 0x6 + -parseInt(_0x3742e9(0x150)) / 0x7 + -parseInt(_0x3742e9(0x152)) / 0x8 * (parseInt(_0x3742e9(0x14f)) / 0x9);\n        if (_0x2b4814 === _0x2c1882) break;else _0x12e120['push'](_0x12e120['shift']());\n      } catch (_0x1432ab) {\n        _0x12e120['push'](_0x12e120['shift']());\n      }\n    }\n  })(_0x4f9d, 0x40c47);\n  if (!isString(htmlString, !![])) return null;\n  htmlString = htmlString[_0x1f5248(0x156)](/(\\w+ *= *)'( *\\w+ *)'/gm, '$1\\x22$2\\x22')[_0x1f5248(0x156)](/(<)( *\\w+)/gm, function (_0x520a74, _0x481e76, _0x573ead) {\n    return isValidHTMLTag(_0x573ead) ? '' + _0x481e76 + _0x573ead : _0x1f5248(0x155) + _0x573ead;\n  }) + _0x1f5248(0x14c);\n  var div = document[_0x1f5248(0x154)](_0x1f5248(0x14b));\n  function _0x31d9(_0x1e9acc, _0x2fb765) {\n    var _0x4f9d41 = _0x4f9d();\n    return _0x31d9 = function _0x31d9(_0x31d949, _0x464a70) {\n      _0x31d949 = _0x31d949 - 0x14b;\n      var _0x4e2033 = _0x4f9d41[_0x31d949];\n      return _0x4e2033;\n    }, _0x31d9(_0x1e9acc, _0x2fb765);\n  }\n  div[_0x1f5248(0x14e)] = htmlString;\n  var arrHtmlString = htmlString[_0x1f5248(0x157)]('\\x20');\n  if (arrHtmlString[_0x1f5248(0x151)] < 0x2) arrHtmlString['push']('');\n  var arrDivInnerHTML = div[_0x1f5248(0x14e)][_0x1f5248(0x157)]('\\x20');\n  arrHtmlString[_0x1f5248(0x15a)](function (_0x501a05, _0x56b04f) {\n    var _0x142cf0 = _0x1f5248;\n    _0x501a05 !== arrDivInnerHTML[_0x56b04f] && _0x56b04f > 0x0 && (arrDivInnerHTML[_0x56b04f - 0x1] = arrHtmlString[_0x56b04f - 0x1]['replace'](/</g, _0x142cf0(0x155)), arrDivInnerHTML[_0x56b04f] = _0x501a05);\n  }), arrDivInnerHTML[_0x1f5248(0x15e)](arrHtmlString[_0x1f5248(0x151)]);\n  return arrDivInnerHTML[_0x1f5248(0x15f)]('\\x20')[_0x1f5248(0x15b)]()[_0x1f5248(0x156)](/&nbsp;$/, '');\n  function _0x4f9d() {\n    var _0x2176c5 = ['&nbsp;', '1054185BRxQqc', 'innerHTML', '26037arFERB', '1622747oWZxTo', 'length', '72ThYDQt', '1476774nEtlFS', 'createElement', '&lt;', 'replace', 'split', '696576ArgJdU', '8DKdHTx', 'forEach', 'trim', '496330nOQZKB', '320492TGDXxa', 'splice', 'join', 'div'];\n    _0x4f9d = function _0x4f9d() {\n      return _0x2176c5;\n    };\n    return _0x4f9d();\n  }\n};\n\n//# sourceURL=webpack://ReactParseHTMLString/./src/processor.js?");

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