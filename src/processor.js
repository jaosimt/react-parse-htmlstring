/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

export const isString = (str, validateNotEmpty = false) => validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';

const isNumber = (arg, matchType) => matchType ? typeof arg === 'number' && Number.isFinite(arg) : Number.isFinite(parseFloat(arg));

export const isValidHTMLTag = (function () {
	const unknown = '[object HTMLUnknownElement]', overrides = {
		CANVAS: 1,
		VIDEO: 1,
		SVG: 1,
		DEFS: 1,
		LINEARGRADIENT: 1,
		STOP: 1,
		CLIPPATH: 1,
		PATH: 1,
		G: 1,
		POLYGON: 1,
		RECT: 1,
		CIRCLE: 1
	};
	
	return function (tag) {
		if (isNumber(tag)) return false;
		
		return overrides[tag = tag.toUpperCase()] || (!overrides.hasOwnProperty(tag) && (overrides[tag] = (document.createElement(tag).toString() !== unknown)));
	};
})();

export const voidElements = [
	'area', 'base', 'br', 'col', 'command', 'embed', 'hr',
	'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
	'track', 'wbr'
];

export const parseHTMLString = (htmlString, options = {}) => {
	const _0x29a1b4=_0x4d50;(function(_0x50e702,_0x2d67ce){const _0x25b141=_0x4d50,_0x3b2be2=_0x50e702();while(!![]){try{const _0x1dfc6b=parseInt(_0x25b141(0xb7))/0x1+parseInt(_0x25b141(0xbb))/0x2*(-parseInt(_0x25b141(0xb6))/0x3)+-parseInt(_0x25b141(0xb0))/0x4*(parseInt(_0x25b141(0xb5))/0x5)+parseInt(_0x25b141(0xa6))/0x6*(parseInt(_0x25b141(0xac))/0x7)+parseInt(_0x25b141(0xaf))/0x8+-parseInt(_0x25b141(0xad))/0x9*(-parseInt(_0x25b141(0xa8))/0xa)+parseInt(_0x25b141(0xa3))/0xb*(parseInt(_0x25b141(0xb8))/0xc);if(_0x1dfc6b===_0x2d67ce)break;else _0x3b2be2['push'](_0x3b2be2['shift']());}catch(_0x9d2278){_0x3b2be2['push'](_0x3b2be2['shift']());}}}(_0x5b70,0x41b40));if(!isString(htmlString,!![]))return htmlString;const {_0x5eb8ba:_0x22cfdf}=options,_0x555819=document['createElement'](_0x29a1b4(0xb3));if(_0x22cfdf)return _0x555819[_0x29a1b4(0xa9)]=htmlString,_0x555819['innerHTML'];htmlString=htmlString[_0x29a1b4(0xa7)](/\t/gm,'\x5ct')[_0x29a1b4(0xa7)](/\n/gm,'\x5cn');htmlString['match'](/^( +)|( +)$/gmi)&&(htmlString=htmlString[_0x29a1b4(0xa7)](/^( +)|( +)$/gmi,_0x4d9e4c=>_0x29a1b4(0xb4)[_0x29a1b4(0xb1)](_0x4d9e4c[_0x29a1b4(0xae)])));function _0x5b70(){const _0x2512bd=['forEach','&nbsp;\x20x','78vspUTT','replace','2600UtodcH','innerHTML','splice','split','150073KAZIAN','9189EKdEQY','length','1568744yuhUWw','4GRljdF','repeat','$1\x22$2\x22','div','&nbsp;','2056105TQuuyV','6906kMNmsT','202653msBKip','192yVwEGs','push','&lt;','244suUpLM','join','trim','12562ZSTScD'];_0x5b70=function(){return _0x2512bd;};return _0x5b70();}htmlString=htmlString[_0x29a1b4(0xa7)](/(\w+ *= *)'( *\w+ *)'/gm,_0x29a1b4(0xb2))[_0x29a1b4(0xa7)](/(<)( *\w+)/gm,(_0x306922,_0x51171e,_0x13e3e9)=>isValidHTMLTag(_0x13e3e9[_0x29a1b4(0xbd)]())?''+_0x51171e+_0x13e3e9:_0x29a1b4(0xba)+_0x13e3e9),htmlString=_0x29a1b4(0xa5)+htmlString+_0x29a1b4(0xa5),_0x555819[_0x29a1b4(0xa9)]=htmlString;const _0x193165=htmlString[_0x29a1b4(0xab)]('\x20');if(_0x193165['length']<0x2)_0x193165[_0x29a1b4(0xb9)]('');const _0x4492a2=_0x555819['innerHTML']['split']('\x20');function _0x4d50(_0x12fb95,_0x5d67bc){const _0x5b7026=_0x5b70();return _0x4d50=function(_0x4d5057,_0xc258a){_0x4d5057=_0x4d5057-0xa3;let _0x26b30e=_0x5b7026[_0x4d5057];return _0x26b30e;},_0x4d50(_0x12fb95,_0x5d67bc);}_0x193165[_0x29a1b4(0xa4)]((_0x37aff2,_0x57b6b2)=>{const _0x849c21=_0x29a1b4;_0x37aff2!==_0x4492a2[_0x57b6b2]&&(_0x57b6b2>0x0&&(_0x4492a2[_0x57b6b2-0x1]=_0x193165[_0x57b6b2-0x1][_0x849c21(0xa7)](/</g,_0x849c21(0xba)),_0x4492a2[_0x57b6b2]=_0x37aff2));}),_0x4492a2[_0x29a1b4(0xaa)](_0x193165[_0x29a1b4(0xae)]);return _0x4492a2[_0x29a1b4(0xbc)]('\x20')[_0x29a1b4(0xbd)]()['replace'](/^&nbsp; x/,'')[_0x29a1b4(0xa7)](/&nbsp; x$/,'')[_0x29a1b4(0xa7)](/\\t/gm,'\x09')['replace'](/\\n/gm,'\x0a')[_0x29a1b4(0xa7)](/^(&nbsp;)+|(&nbsp;)+$/gm,_0x173b55=>'\x20'[_0x29a1b4(0xb1)](_0x173b55['split'](';&')[_0x29a1b4(0xae)]));
}