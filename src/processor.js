/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

export const isString = (str, validateNotEmpty = false) => validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';

const isNumber = (arg, matchType) => matchType ? typeof arg === 'number' && Number.isFinite(arg) : Number.isFinite(parseFloat(arg));

export const isValidHTMLTag = (function () {
	const _0x59c747=_0xd2d5;(function(_0x28c75a,_0x21b98b){const _0x3717df=_0xd2d5,_0x2122be=_0x28c75a();while(!![]){try{const _0x5bff19=-parseInt(_0x3717df(0x1bc))/0x1+-parseInt(_0x3717df(0x1b4))/0x2*(-parseInt(_0x3717df(0x1b9))/0x3)+-parseInt(_0x3717df(0x1b7))/0x4+parseInt(_0x3717df(0x1b5))/0x5+parseInt(_0x3717df(0x1bb))/0x6*(parseInt(_0x3717df(0x1c0))/0x7)+-parseInt(_0x3717df(0x1bf))/0x8+parseInt(_0x3717df(0x1be))/0x9*(parseInt(_0x3717df(0x1bd))/0xa);if(_0x5bff19===_0x21b98b)break;else _0x2122be['push'](_0x2122be['shift']());}catch(_0x5a82ed){_0x2122be['push'](_0x2122be['shift']());}}}(_0x5afe,0xde0ef));function _0x5afe(){const _0x18358b=['[object\x20HTMLUnknownElement]','1750479CgxkFP','hasOwnProperty','9510WTEbHw','676395GKcHgv','4390gzhLCD','22527jWhxxj','10467176VFZmgT','2163eoXxYg','toUpperCase','4VwIxhD','3917885FHhQHM','toString','2579208NUhIan'];_0x5afe=function(){return _0x18358b;};return _0x5afe();}const _0x2cd974=_0x59c747(0x1b8),_0x27fff8={'_0xdd14a8':0x1,'_0x2bde41':0x1,'_0x2ffbe6':0x1,'_0x319055':0x1,'_0x4d354c':0x1,'_0x2f6729':0x1,'_0x4e138c':0x1,'_0x5a37d5':0x1,'_0x4d95d9':0x1,'_0x216f73':0x1,'_0x42eb5c':0x1,'_0x2bed19':0x1};function _0xd2d5(_0x5cf09f,_0x362b83){const _0x5afebb=_0x5afe();return _0xd2d5=function(_0xd2d562,_0x5816ff){_0xd2d562=_0xd2d562-0x1b4;let _0x18f4c3=_0x5afebb[_0xd2d562];return _0x18f4c3;},_0xd2d5(_0x5cf09f,_0x362b83);}return function(_0x3e9cc1){const _0x3dca6e=_0x59c747;if(isNumber(_0x3e9cc1))return![];return _0x27fff8[_0x3e9cc1=_0x3e9cc1[_0x3dca6e(0x1c1)]()]||!_0x27fff8[_0x3dca6e(0x1ba)](_0x3e9cc1)&&(_0x27fff8[_0x3e9cc1]=document['createElement'](_0x3e9cc1)[_0x3dca6e(0x1b6)]()!==_0x2cd974);};
})();

export const voidElements = [
	'area', 'base', 'br', 'col', 'command', 'embed', 'hr',
	'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
	'track', 'wbr'
];

export const parseHTMLString = htmlString => {
	const _0x312f50=_0x152b;(function(_0x34a929,_0x3e656a){const _0x1f8611=_0x152b,_0x466ff5=_0x34a929();while(!![]){try{const _0x5a57b0=-parseInt(_0x1f8611(0x9f))/0x1+parseInt(_0x1f8611(0xa5))/0x2+parseInt(_0x1f8611(0x8b))/0x3*(-parseInt(_0x1f8611(0x90))/0x4)+-parseInt(_0x1f8611(0x9d))/0x5*(-parseInt(_0x1f8611(0x8e))/0x6)+parseInt(_0x1f8611(0x9a))/0x7+-parseInt(_0x1f8611(0x9b))/0x8*(-parseInt(_0x1f8611(0x93))/0x9)+-parseInt(_0x1f8611(0x95))/0xa*(parseInt(_0x1f8611(0xa0))/0xb);if(_0x5a57b0===_0x3e656a)break;else _0x466ff5['push'](_0x466ff5['shift']());}catch(_0x430685){_0x466ff5['push'](_0x466ff5['shift']());}}}(_0x4fdd,0x4a502));function _0x152b(_0x4994b5,_0x46d3dd){const _0x4fdd67=_0x4fdd();return _0x152b=function(_0x152b55,_0x3f3c7b){_0x152b55=_0x152b55-0x8b;let _0x39df34=_0x4fdd67[_0x152b55];return _0x39df34;},_0x152b(_0x4994b5,_0x46d3dd);}if(!isString(htmlString,!![]))return htmlString;function _0x4fdd(){const _0x5d3845=['trim','splice','&nbsp;\x20','join','783310fjoyBO','&lt;','31359jaFecr','forEach','&nbsp;','1031742qsfRuE','repeat','4WxtIjV','length','div','401607FNnVuE','\x0a</div>','3680vYNiRC','$1\x22$2\x22','innerHTML','replace','<div\x20style=\x22white-space:\x20pre-wrap;display:inline-block\x22>\x0a\x09','3880205ZcRtOg','88qrvakh','createElement','5cdPhsw','split','85429pATsdY','36124ASKXpk'];_0x4fdd=function(){return _0x5d3845;};return _0x4fdd();}htmlString=htmlString['replace'](/\t/gm,'\x5ct')[_0x312f50(0x98)](/\n/gm,'\x5cn');htmlString['match'](/^( +)|( +)$/gmi)&&(htmlString=htmlString[_0x312f50(0x98)](/^( +)|( +)$/gmi,_0x3194be=>_0x312f50(0x8d)[_0x312f50(0x8f)](_0x3194be[_0x312f50(0x91)])));htmlString=htmlString[_0x312f50(0x98)](/(\w+ *= *)'( *\w+ *)'/gm,_0x312f50(0x96))[_0x312f50(0x98)](/(<)( *\w+)/gm,(_0x4efd53,_0x1a669b,_0x431836)=>isValidHTMLTag(_0x431836[_0x312f50(0xa1)]())?''+_0x1a669b+_0x431836:_0x312f50(0xa6)+_0x431836),htmlString=_0x312f50(0xa3)+htmlString+_0x312f50(0xa3);const _0x3ab7ae=document[_0x312f50(0x9c)](_0x312f50(0x92));_0x3ab7ae[_0x312f50(0x97)]=htmlString;const _0xc41be3=htmlString[_0x312f50(0x9e)]('\x20');if(_0xc41be3[_0x312f50(0x91)]<0x2)_0xc41be3['push']('');const _0x1a7ffb=_0x3ab7ae[_0x312f50(0x97)]['split']('\x20');_0xc41be3[_0x312f50(0x8c)]((_0x5c2b1b,_0x2eea51)=>{const _0x248932=_0x312f50;_0x5c2b1b!==_0x1a7ffb[_0x2eea51]&&(_0x2eea51>0x0&&(_0x1a7ffb[_0x2eea51-0x1]=_0xc41be3[_0x2eea51-0x1][_0x248932(0x98)](/</g,'&lt;'),_0x1a7ffb[_0x2eea51]=_0x5c2b1b));}),_0x1a7ffb[_0x312f50(0xa2)](_0xc41be3['length']);return _0x312f50(0x99)+_0x1a7ffb[_0x312f50(0xa4)]('\x20')[_0x312f50(0xa1)]()[_0x312f50(0x98)](/^&nbsp; /,'')['replace'](/&nbsp; $/,'')[_0x312f50(0x98)](/\\t/gm,'\x09')[_0x312f50(0x98)](/\\n/gm,'\x0a')[_0x312f50(0x98)](/^(&nbsp;)+|(&nbsp;)+$/gm,_0x2388dc=>'\x20'[_0x312f50(0x8f)](_0x2388dc[_0x312f50(0x9e)](';&')[_0x312f50(0x91)]))+_0x312f50(0x94);
}