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
	if (!isString(htmlString, true)) return htmlString;
	
	const { plainInsert } = options;
	
	const div = document.createElement('div');
	
	if (plainInsert) {
		// watch out! this could be very unreliable!!!
		div.innerHTML = htmlString;
		return div.innerHTML;
	}
	
	htmlString = htmlString
		.replace(/\t/gm, '\\t')     // preserve tab
		.replace(/\n/gm, '\\n');    // preserve line
	
	// if any: preserve leading and trailing spaces
	if (htmlString.match(/^( +)|( +)$/gmi)) {
		htmlString = htmlString
			.replace(/^( +)|( +)$/gmi, x => '&nbsp;'.repeat(x.length));
	}
	
	htmlString = htmlString
		.replace(/(\w+ *= *)'( *\w+ *)'/gm, '$1"$2"')
		.replace(/(<)( *\w+)/gm, (x, y, z) => isValidHTMLTag(z.trim()) ? `${ y }${ z }` : `&lt;${ z }`);
	
	htmlString = '&nbsp; x' + htmlString + '&nbsp; x';
	
	div.innerHTML = htmlString;
	
	const arrHtmlString = htmlString.split(' ');
	
	if (arrHtmlString.length < 2) arrHtmlString.push('');
	
	const arrDivInnerHTML = div.innerHTML.split(' ');
	
	arrHtmlString.forEach((segment, index) => {
		if (segment !== arrDivInnerHTML[index]) {
			if (index > 0) {
				// as far as my test shows, if the current segment
				// does not match with the original string, it is likely
				// that the previous string segment has a '<' character
				// and that it's been parsed and a closing tag was
				// added somewhere!
				arrDivInnerHTML[index - 1] = arrHtmlString[index - 1].replace(/</g, '&lt;');
				arrDivInnerHTML[index] = segment;
			}
		}
	});
	
	// html will add a closing tag to anything that
	// resembles an opening tag.  And so the length
	// of these two arrays will varray!
	arrDivInnerHTML.splice(arrHtmlString.length);
	
	return arrDivInnerHTML.join(' ').trim()
		.replace(/^&nbsp; x/, '')
		.replace(/&nbsp; x$/, '')
		.replace(/\\t/gm, '\t')
		.replace(/\\n/gm, '\n')
		.replace(/^(&nbsp;)+|(&nbsp;)+$/gm, match => ' '.repeat(match.split(';&').length));
}