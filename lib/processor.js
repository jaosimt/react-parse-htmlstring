"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.voidElements = exports.parseHTMLString = exports.isString = void 0;
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }
/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

var isString = function isString(str) {
  var validateNotEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';
};
exports.isString = isString;
var voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
exports.voidElements = voidElements;
var parseHTMLString = function parseHTMLString(htmlString) {
  var _0x599c69 = _0x16f7;
  (function (_0x5c34eb, _0x48e4b6) {
    var _0x8b1e2b = _0x16f7,
      _0x3ac009 = _0x5c34eb();
    while (!![]) {
      try {
        var _0x589f11 = parseInt(_0x8b1e2b(0xad)) / 0x1 + -parseInt(_0x8b1e2b(0xae)) / 0x2 + parseInt(_0x8b1e2b(0xb3)) / 0x3 * (parseInt(_0x8b1e2b(0xb9)) / 0x4) + parseInt(_0x8b1e2b(0xba)) / 0x5 + -parseInt(_0x8b1e2b(0xb2)) / 0x6 + -parseInt(_0x8b1e2b(0xb8)) / 0x7 + parseInt(_0x8b1e2b(0xb7)) / 0x8 * (parseInt(_0x8b1e2b(0xaf)) / 0x9);
        if (_0x589f11 === _0x48e4b6) break;else _0x3ac009['push'](_0x3ac009['shift']());
      } catch (_0x1ef860) {
        _0x3ac009['push'](_0x3ac009['shift']());
      }
    }
  })(_0x332e, 0xb48ac);
  if (_typeof(htmlString) !== _0x599c69(0xbe) || htmlString[_0x599c69(0xb5)]() === '') return '';
  function _0x332e() {
    var _0xabe62 = ['trim', 'innerHTML', '16quYuOg', '7187299fEVNVb', '3442376gtfGsN', '4760005QSNKOa', 'split', 'div', 'join', 'string', '1223989bqikpG', '2008602NXqUdM', '2818647gnEHOK', 'createElement', 'length', '5354352iCQdkl', '3viyKWR', 'forEach'];
    _0x332e = function _0x332e() {
      return _0xabe62;
    };
    return _0x332e();
  }
  function _0x16f7(_0x576189, _0x52a8ee) {
    var _0x332ee1 = _0x332e();
    return _0x16f7 = function _0x16f7(_0x16f7ac, _0x30233d) {
      _0x16f7ac = _0x16f7ac - 0xad;
      var _0x156201 = _0x332ee1[_0x16f7ac];
      return _0x156201;
    }, _0x16f7(_0x576189, _0x52a8ee);
  }
  var div = document[_0x599c69(0xb0)](_0x599c69(0xbc));
  div[_0x599c69(0xb6)] = htmlString;
  var arrHtmlString = htmlString[_0x599c69(0xbb)]('\x20'),
    arrDivInnerHTML = div[_0x599c69(0xb6)][_0x599c69(0xbb)]('\x20');
  if (arrHtmlString[_0x599c69(0xb1)] < 0x2) arrHtmlString['push']('');
  arrHtmlString[_0x599c69(0xb4)](function (_0x32a723, _0x426e69) {
    _0x32a723 !== arrDivInnerHTML[_0x426e69] && _0x426e69 > 0x0 && (arrDivInnerHTML[_0x426e69 - 0x1] = arrHtmlString[_0x426e69 - 0x1]['replace'](/</g, '&lt;'), arrDivInnerHTML[_0x426e69] = _0x32a723);
  }), arrDivInnerHTML['splice'](arrHtmlString[_0x599c69(0xb1)]);
  return arrDivInnerHTML[_0x599c69(0xbd)]('\x20')[_0x599c69(0xb5)]();
};
exports.parseHTMLString = parseHTMLString;