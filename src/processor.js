/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

export const isString = (str, validateNotEmpty = false) => validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';

export const voidElements = [
	'area', 'base', 'br', 'col', 'command', 'embed', 'hr',
	'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
	'track', 'wbr'
];

export const parseHTMLString = htmlString => {
	const _0x22d7db=_0x28ef;(function(_0xc64a65,_0x1a064b){const _0x255687=_0x28ef,_0x424078=_0xc64a65();while(!![]){try{const _0x5b4152=parseInt(_0x255687(0x84))/0x1+-parseInt(_0x255687(0x8d))/0x2+-parseInt(_0x255687(0x8c))/0x3+parseInt(_0x255687(0x8b))/0x4+parseInt(_0x255687(0x82))/0x5*(-parseInt(_0x255687(0x80))/0x6)+parseInt(_0x255687(0x87))/0x7*(-parseInt(_0x255687(0x86))/0x8)+parseInt(_0x255687(0x8f))/0x9;if(_0x5b4152===_0x1a064b)break;else _0x424078['push'](_0x424078['shift']());}catch(_0xe7bad5){_0x424078['push'](_0x424078['shift']());}}}(_0x47a2,0xbd5d1));if(!isString(htmlString,!![]))return null;htmlString=htmlString[_0x22d7db(0x8e)]();const div=document['createElement'](_0x22d7db(0x81));div[_0x22d7db(0x89)]=htmlString;function _0x28ef(_0x5b79c7,_0xa42463){const _0x47a267=_0x47a2();return _0x28ef=function(_0x28ef0e,_0xdb4f3f){_0x28ef0e=_0x28ef0e-0x7e;let _0x596f3c=_0x47a267[_0x28ef0e];return _0x596f3c;},_0x28ef(_0x5b79c7,_0xa42463);}const arOne=htmlString[_0x22d7db(0x7f)]('\x20');function _0x47a2(){const _0x964824=['29389671YQALic','length','split','18xNvldJ','div','1414445enUqxV','push','238668ooIxHK','join','344Cgzlsm','192003nDeCed','replace','innerHTML','&lt;','4263120ruznIe','2967726BWNLpA','1553956TuKjFH','trim'];_0x47a2=function(){return _0x964824;};return _0x47a2();}if(arOne[_0x22d7db(0x7e)]<0x2)arOne[_0x22d7db(0x83)]('');const arTwo=div[_0x22d7db(0x89)][_0x22d7db(0x7f)]('\x20');arOne['forEach']((_0x22313f,_0x2ea609)=>{const _0x1c386a=_0x22d7db;_0x22313f!==arTwo[_0x2ea609]&&(_0x2ea609>0x0&&(arTwo[_0x2ea609-0x1]=arOne[_0x2ea609-0x1][_0x1c386a(0x88)](/</g,_0x1c386a(0x8a)),arTwo[_0x2ea609]=_0x22313f));}),arTwo['splice'](arOne[_0x22d7db(0x7e)]);return arTwo[_0x22d7db(0x85)]('\x20')[_0x22d7db(0x8e)]();
}