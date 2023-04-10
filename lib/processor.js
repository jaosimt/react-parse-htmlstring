"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.voidElements = exports.parseHTMLString = exports.isString = void 0;
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
  var _0x4ce655 = _0x2682;
  (function (_0x4a3430, _0x2dcf33) {
    var _0x3e611e = _0x2682,
      _0x2f86ce = _0x4a3430();
    while (!![]) {
      try {
        var _0x13fbf5 = -parseInt(_0x3e611e(0x1a7)) / 0x1 * (parseInt(_0x3e611e(0x1a8)) / 0x2) + -parseInt(_0x3e611e(0x1a2)) / 0x3 + parseInt(_0x3e611e(0x1a5)) / 0x4 * (parseInt(_0x3e611e(0x1b7)) / 0x5) + parseInt(_0x3e611e(0x1b6)) / 0x6 * (-parseInt(_0x3e611e(0x1ac)) / 0x7) + parseInt(_0x3e611e(0x1a3)) / 0x8 * (-parseInt(_0x3e611e(0x1b0)) / 0x9) + -parseInt(_0x3e611e(0x1b1)) / 0xa * (parseInt(_0x3e611e(0x1a6)) / 0xb) + parseInt(_0x3e611e(0x1ad)) / 0xc * (parseInt(_0x3e611e(0x1ab)) / 0xd);
        if (_0x13fbf5 === _0x2dcf33) break;else _0x2f86ce['push'](_0x2f86ce['shift']());
      } catch (_0x4486b3) {
        _0x2f86ce['push'](_0x2f86ce['shift']());
      }
    }
  })(_0x15bc, 0xda777);
  if (!isString(htmlString, !![])) return null;
  htmlString = htmlString['replace'](/(\w+ *= *)('* *)(\w+)( *'*)/gm, _0x4ce655(0x1aa)) + _0x4ce655(0x1b8);
  var div = document[_0x4ce655(0x1ae)](_0x4ce655(0x1a9));
  div[_0x4ce655(0x1b9)] = htmlString;
  var arrHtmlString = htmlString[_0x4ce655(0x1a4)]('\x20');
  if (arrHtmlString[_0x4ce655(0x1b5)] < 0x2) arrHtmlString[_0x4ce655(0x1b2)]('');
  var arrDivInnerHTML = div[_0x4ce655(0x1b9)][_0x4ce655(0x1a4)]('\x20');
  arrHtmlString['forEach'](function (_0x4f0e2e, _0x3e5242) {
    var _0x254b02 = _0x4ce655;
    _0x4f0e2e !== arrDivInnerHTML[_0x3e5242] && _0x3e5242 > 0x0 && (arrDivInnerHTML[_0x3e5242 - 0x1] = arrHtmlString[_0x3e5242 - 0x1]['replace'](/</g, _0x254b02(0x1b3)), arrDivInnerHTML[_0x3e5242] = _0x4f0e2e);
  }), arrDivInnerHTML[_0x4ce655(0x1bb)](arrHtmlString['length']);
  function _0x2682(_0x46efd1, _0x2fe945) {
    var _0x15bcee = _0x15bc();
    return _0x2682 = function _0x2682(_0x268276, _0x257750) {
      _0x268276 = _0x268276 - 0x1a2;
      var _0x2f49db = _0x15bcee[_0x268276];
      return _0x2f49db;
    }, _0x2682(_0x46efd1, _0x2fe945);
  }
  return arrDivInnerHTML[_0x4ce655(0x1b4)]('\x20')[_0x4ce655(0x1af)]()[_0x4ce655(0x1ba)](/&nbsp;$/, '');
  function _0x15bc() {
    var _0x3c0d98 = ['3070929HAlQIe', '3572584icnDEa', 'split', '4bKrQkD', '3014pxlGrW', '1kxRayU', '1323584YjQgOq', 'div', '$1\x22$3\x22', '338myjuou', '7yDYqMk', '1707204TJqbOo', 'createElement', 'trim', '9BIDKOy', '48610LDKWyC', 'push', '&lt;', 'join', 'length', '5943180tIIebS', '8251745kHRAEV', '&nbsp;', 'innerHTML', 'replace', 'splice'];
    _0x15bc = function _0x15bc() {
      return _0x3c0d98;
    };
    return _0x15bc();
  }
};
exports.parseHTMLString = parseHTMLString;