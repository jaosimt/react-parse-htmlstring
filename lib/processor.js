"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.voidElements = exports.parseHTMLString = exports.isValidHTMLTag = exports.isString = void 0;
/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

var isString = function isString(str) {
  var validateNotEmpty = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  return validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';
};
exports.isString = isString;
var isValidHTMLTag = function () {
  function _0x1352(_0x175326, _0x397237) {
    var _0x6c8152 = _0x6c81();
    return _0x1352 = function _0x1352(_0x135293, _0x47fa56) {
      _0x135293 = _0x135293 - 0x19c;
      var _0x5d8c27 = _0x6c8152[_0x135293];
      return _0x5d8c27;
    }, _0x1352(_0x175326, _0x397237);
  }
  var _0x2e041c = _0x1352;
  (function (_0xe3f62, _0x1b994f) {
    var _0xccbcca = _0x1352,
      _0xaea639 = _0xe3f62();
    while (!![]) {
      try {
        var _0x368df2 = -parseInt(_0xccbcca(0x19c)) / 0x1 + -parseInt(_0xccbcca(0x1a0)) / 0x2 * (-parseInt(_0xccbcca(0x1a5)) / 0x3) + -parseInt(_0xccbcca(0x19e)) / 0x4 * (-parseInt(_0xccbcca(0x1a9)) / 0x5) + -parseInt(_0xccbcca(0x1a3)) / 0x6 + -parseInt(_0xccbcca(0x1a6)) / 0x7 * (parseInt(_0xccbcca(0x1ab)) / 0x8) + -parseInt(_0xccbcca(0x1a2)) / 0x9 * (-parseInt(_0xccbcca(0x1a8)) / 0xa) + -parseInt(_0xccbcca(0x19d)) / 0xb;
        if (_0x368df2 === _0x1b994f) break;else _0xaea639['push'](_0xaea639['shift']());
      } catch (_0xb39cb6) {
        _0xaea639['push'](_0xaea639['shift']());
      }
    }
  })(_0x6c81, 0x5eb61);
  var unknown = _0x2e041c(0x1a1),
    overrides = {
      'CANVAS': 0x1,
      'VIDEO': 0x1,
      'SVG': 0x1,
      'DEFS': 0x1,
      'LINEARGRADIENT': 0x1,
      'STOP': 0x1,
      'CLIPPATH': 0x1,
      'PATH': 0x1,
      'G': 0x1,
      'polygon': 0x1,
      'rect': 0x1
    };
  function _0x6c81() {
    var _0x4a8b5f = ['3530545bvxVtv', 'toString', '16JUWoCL', '29121ybSdeO', '6674107eApknm', '4EKmrDQ', 'hasOwnProperty', '894718nZZVWJ', '[object\x20HTMLUnknownElement]', '439515KzUFcC', '1309332pXqboJ', 'toUpperCase', '3bcNEfa', '544691JZDkjb', 'createElement', '50rcQCKk'];
    _0x6c81 = function _0x6c81() {
      return _0x4a8b5f;
    };
    return _0x6c81();
  }
  return function (_0x3b1d6f) {
    var _0x3f72dc = _0x2e041c;
    return overrides[_0x3b1d6f = _0x3b1d6f[_0x3f72dc(0x1a4)]()] || !overrides[_0x3f72dc(0x19f)](_0x3b1d6f) && (overrides[_0x3b1d6f] = document[_0x3f72dc(0x1a7)](_0x3b1d6f)[_0x3f72dc(0x1aa)]() !== unknown);
  };
}();
exports.isValidHTMLTag = isValidHTMLTag;
var voidElements = ['area', 'base', 'br', 'col', 'command', 'embed', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source', 'track', 'wbr'];
exports.voidElements = voidElements;
var parseHTMLString = function parseHTMLString(htmlString) {
  var _0x1f5248 = _0x31d9;
  (function (_0x107fc8, _0x2c1882) {
    var _0x3742e9 = _0x31d9,
      _0x12e120 = _0x107fc8();
    while (!![]) {
      try {
        var _0x2b4814 = parseInt(_0x3742e9(0x15d)) / 0x1 + parseInt(_0x3742e9(0x15c)) / 0x2 + parseInt(_0x3742e9(0x153)) / 0x3 + parseInt(_0x3742e9(0x159)) / 0x4 * (-parseInt(_0x3742e9(0x14d)) / 0x5) + -parseInt(_0x3742e9(0x158)) / 0x6 + -parseInt(_0x3742e9(0x150)) / 0x7 + -parseInt(_0x3742e9(0x152)) / 0x8 * (parseInt(_0x3742e9(0x14f)) / 0x9);
        if (_0x2b4814 === _0x2c1882) break;else _0x12e120['push'](_0x12e120['shift']());
      } catch (_0x1432ab) {
        _0x12e120['push'](_0x12e120['shift']());
      }
    }
  })(_0x4f9d, 0x40c47);
  if (!isString(htmlString, !![])) return null;
  htmlString = htmlString[_0x1f5248(0x156)](/(\w+ *= *)'( *\w+ *)'/gm, '$1\x22$2\x22')[_0x1f5248(0x156)](/(<)( *\w+)/gm, function (_0x520a74, _0x481e76, _0x573ead) {
    return isValidHTMLTag(_0x573ead) ? '' + _0x481e76 + _0x573ead : _0x1f5248(0x155) + _0x573ead;
  }) + _0x1f5248(0x14c);
  var div = document[_0x1f5248(0x154)](_0x1f5248(0x14b));
  function _0x31d9(_0x1e9acc, _0x2fb765) {
    var _0x4f9d41 = _0x4f9d();
    return _0x31d9 = function _0x31d9(_0x31d949, _0x464a70) {
      _0x31d949 = _0x31d949 - 0x14b;
      var _0x4e2033 = _0x4f9d41[_0x31d949];
      return _0x4e2033;
    }, _0x31d9(_0x1e9acc, _0x2fb765);
  }
  div[_0x1f5248(0x14e)] = htmlString;
  var arrHtmlString = htmlString[_0x1f5248(0x157)]('\x20');
  if (arrHtmlString[_0x1f5248(0x151)] < 0x2) arrHtmlString['push']('');
  var arrDivInnerHTML = div[_0x1f5248(0x14e)][_0x1f5248(0x157)]('\x20');
  arrHtmlString[_0x1f5248(0x15a)](function (_0x501a05, _0x56b04f) {
    var _0x142cf0 = _0x1f5248;
    _0x501a05 !== arrDivInnerHTML[_0x56b04f] && _0x56b04f > 0x0 && (arrDivInnerHTML[_0x56b04f - 0x1] = arrHtmlString[_0x56b04f - 0x1]['replace'](/</g, _0x142cf0(0x155)), arrDivInnerHTML[_0x56b04f] = _0x501a05);
  }), arrDivInnerHTML[_0x1f5248(0x15e)](arrHtmlString[_0x1f5248(0x151)]);
  return arrDivInnerHTML[_0x1f5248(0x15f)]('\x20')[_0x1f5248(0x15b)]()[_0x1f5248(0x156)](/&nbsp;$/, '');
  function _0x4f9d() {
    var _0x2176c5 = ['&nbsp;', '1054185BRxQqc', 'innerHTML', '26037arFERB', '1622747oWZxTo', 'length', '72ThYDQt', '1476774nEtlFS', 'createElement', '&lt;', 'replace', 'split', '696576ArgJdU', '8DKdHTx', 'forEach', 'trim', '496330nOQZKB', '320492TGDXxa', 'splice', 'join', 'div'];
    _0x4f9d = function _0x4f9d() {
      return _0x2176c5;
    };
    return _0x4f9d();
  }
};
exports.parseHTMLString = parseHTMLString;