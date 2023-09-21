/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

'use strict';

export const isString = (str, validateNotEmpty = false) => validateNotEmpty ? typeof str === 'string' && str.trim() !== '' : typeof str === 'string';

const isNumber = (arg, matchType) => matchType ? typeof arg === 'number' && Number.isFinite(arg) : Number.isFinite(parseFloat(arg));

export const voidElements = [
    'area', 'base', 'br', 'col', 'command', 'embed', 'hr',
    'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
    'track', 'wbr'
];

// https://www.w3schools.com/tags/ref_eventattributes.asp
export const eventAttrs = ['onafterprint', 'onbeforeprint', 'onbeforeunload', 'onerror', 'onhashchange', 'onload', 'onmessage', 'onoffline', 'ononline', 'onpagehide', 'onpageshow', 'onpopstate', 'onresize', 'onstorage', 'onunload', 'onblur', 'onchange', 'oncontextmenu', 'onfocus', 'oninput', 'oninvalid', 'onreset', 'onsearch', 'onselect', 'onsubmit', 'onkeydown', 'onkeypress', 'onkeyup', 'onclick', 'ondblclick', 'onmousedown', 'onmousemove', 'onmouseout', 'onmouseover', 'onmouseup', 'onmousewheel', 'onwheel', 'ondrag', 'ondragend', 'ondragenter', 'ondragleave', 'ondragover', 'ondragstart', 'ondrop', 'onscroll', 'oncopy', 'oncut', 'onpaste', 'onabort', 'oncanplay', 'oncanplaythrough', 'oncuechange', 'ondurationchange', 'onemptied', 'onended', 'onerror', 'onloadeddata', 'onloadedmetadata', 'onloadstart', 'onpause', 'onplay', 'onplaying', 'onprogress', 'onratechange', 'onseeked', 'onseeking', 'onstalled', 'onsuspend', 'ontimeupdate', 'onvolumechange', 'onwaiting', 'ontoggle'];

export const isValidHTMLTag = (function () {
    const unknown = '[object HTMLUnknownElement]',
        overrides = {
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
            CIRCLE: 1,
            ANIMATE: 1,
            ANIMATEMOTION: 1,
            ANIMATETRANSFORM: 1,
            DESC: 1,
            DISCARD: 1,
            ELLIPSE: 1,
            FEBLEND: 1,
            FECOLORMATRIX: 1,
            FECOMPONENTTRANSFER: 1,
            FECOMPOSITE: 1,
            FECONVOLVEMATRIX: 1,
            FEDIFFUSELIGHTING: 1,
            FEDISPLACEMENTMAP: 1,
            FEDISTANTLIGHT: 1,
            FEDROPSHADOW: 1,
            FEFLOOD: 1,
            FEFUNCA: 1,
            FEFUNCB: 1,
            FEFUNCG: 1,
            FEFUNCR: 1,
            FEGAUSSIANBLUR: 1,
            FEIMAGE: 1,
            FEMERGE: 1,
            FEMERGENODE: 1,
            FEMORPHOLOGY: 1,
            FEOFFSET: 1,
            FEPOINTLIGHT: 1,
            FESPECULARLIGHTING: 1,
            FESPOTLIGHT: 1,
            FETILE: 1,
            FETURBULENCE: 1,
            FILTER: 1,
            FOREIGNOBJECT: 1,
            HATCH: 1,
            HATCHPATH: 1,
            HKERN: 1,
            LINE: 1,
            MARKER: 1,
            MASK: 1,
            METADATA: 1,
            'MISSING-GLYPH': 1,
            MPATH: 1,
            PATTERN: 1,
            POLYLINE: 1,
            RADIALGRADIENT: 1,
            SCRIPT: 1,
            SET: 1,
            STYLE: 1,
            SWITCH: 1,
            SYMBOL: 1,
            TEXT: 1,
            TEXTPATH: 1,
            TITLE: 1,
            TREF: 1,
            TSPAN: 1,
            USE: 1,
            VIEW: 1,
            VKERN: 1
        };

    return function (tag) {
        if (isNumber(tag)) return false;
        return overrides[tag = tag.toUpperCase()] || (!Object.prototype.hasOwnProperty.call(overrides, tag) && (overrides[tag] = (document.createElement(tag).toString() !== unknown)));
    };
})();

export const fixAttributeQuotes = htmlString => htmlString.replace(/(< *\w+)(( \w+[-\w]* *= *)(\w+[-\w]*))+( *\/*>)?/gm, '$1$3"$4"$5');

export const parseHTMLString = (htmlString, options = {}) => {
    if (!isString(htmlString, true)) return htmlString;

    /* THERE'S NO WAY THAT WE'RE NEEDING EVENTS IN HERE! NOT IN A MILLION YEARS! */
    const re = new RegExp(`( ${eventAttrs.join('| ')})=['"\`].*?['"\`]([ \\/]*>| \\w+[-\\w+]*)`, 'igm');
    htmlString = htmlString.replace(re, '$2');

    /* NO YOU DON'T, SCRIPT!!! */
    htmlString = htmlString.replace(/<[\s]*script([\s]*\w+[-\w\s]*=[\s]*"[\S]*")*?[\s]*?(\/[\s]*>|>.*?<[\s/]*script[\s]*>)/igm, '');

    // LOCATE AND REPLACE < WITH HTML ENTITY ALL NON-CLOSED TAG LIKE EXPRESSION
    htmlString = htmlString.replace(/<(\w+)(?![^<]*>)/gm, '&lt;$1');

    // AS YOU MAY ALREADY KNOW, < IS THE KEY
    // SO THE CHAR|WORD|ANYTHING... THAT FOLLOWS IT MUST BE A VALID HTML TAG!
    // OTHERWISE, LETS REPLACE IT WITH THE EQUIVALENT HTML ENTITY!
    htmlString = htmlString.replace(/(<)( *\w+)/gm, (x, y, z) => {
        return isValidHTMLTag(z.trim()) ? `${y}${z}` : `&lt;${z}`;
    });

    // FINALLY, THERE COULD BE SOME HTML ENTITY REPLACEMENT
    htmlString = htmlString.replace(/&#x27;/gm, '\'')
        .replace(/&amp;/gm, '&')
        .replace(/&quot;/gm, '"')
        .replace(/&#x2F;/gm, '/');


    console.log(htmlString);

    // htmlString = fixAttributeQuotes(htmlString);
    //
    // console.log(htmlString);

    const div = document.createElement('div');
    div.innerHTML = htmlString;

    // OPTIONS
    const {
        plainInsert = false,
        trim = false //, fixMissingAttributeQuotes = true
    } = options;

    htmlString = div.innerHTML;

    if (plainInsert) return htmlString; // WATCH OUT! DEPENDING ON THE ORIGINAL STRING, COULD BE UNRELIABLE!!!

    // if (fixMissingAttributeQuotes)
    //     htmlString = fixAttributeQuotes(htmlString);

    /*
        FOR A PASTED HTML STRING ESPECIALLY A SVG HTML STRING,
        SOME TAG COULD BE WRITTEN "SELF-CLOSING"
        1ST ISSUE: SELF-CLOSING TAGS WITH SPACE BEFORE IT [' />'] HAS UNDESIRED BEHAVIOR
        2ND ISSUE: HTML WILL RENDER IT WITH A "CLOSING TAG" INSTEAD

        LETS SOLVE THE FIRST AND ALLOW BELOW CHECKING FOR THE SECOND, AFTER ALL, IT COULD BE
        HARD TO KNOW WHICH TAG WILL BE RE-WRITTEN WITH A CLOSING TAG!
    */
    htmlString = htmlString.replace(/ \/>/gm, '/>');

    /*
        FOR A CODE BLOCK,
        IT IS NECESSARY TO PRESERVE TABS AND RETURNS
    */
    // htmlString = htmlString
    // 	.replace(/\t/gm, '[ TAB ]')     // preserve tabs
    // 	.replace(/\n/gm, '[ RETURN ]');    // preserve lines

    // LEADING & TRAILING SPACES
    if (trim) htmlString = htmlString.trim();
    // else if (htmlString.match(/^( +)|( +)$/gmi)) {
    // 	htmlString = htmlString
    // 		.replace(/^( +)|( +)$/gmi, x => '[ SPACE ]'.repeat(x.length));
    // }

    // NORMALIZE QUOTATION MARKS
    // htmlString = htmlString.replace(/(\w+ *= *)(\\"|\\'|\\`|"|'|`)(( *\w+ *)*)(\\"|\\'|\\`|"|'|`)/gm, '$1"$3"');

    // LOCATE AND REPLACE < WITH HTML ENTITY ALL NON-CLOSED TAG LIKE EXPRESSION
    // htmlString = htmlString.replace(/<(\w+)(?![^<]*>)/gm, '&lt;$1');

    // AS YOU MAY ALREADY KNOW, < IS THE KEY
    // SO THE CHAR|WORD|ANYTHING... THAT FOLLOWS IT MUST BE A VALID HTML TAG!
    // OTHERWISE, LETS REPLACE IT WITH THE EQUIVALENT HTML ENTITY!
    // htmlString = htmlString.replace(/(<)( *\w+)/gm, (x, y, z) => {
    //     return isValidHTMLTag(z.trim()) ? `${y}${z}` : `&lt;${z}`;
    // });

    // FINALLY, THERE COULD BE SOME HTML ENTITY REPLACEMENT
    // htmlString = htmlString.replace(/&#x27;/gm, '\'')
    //     .replace(/&amp;/gm, '&')
    //     .replace(/&quot;/gm, '"')
    //     .replace(/&#x2F;/gm, '/');

    // 09072023 FAILURE ON RENDERING WITH '<tag1>...</tag1> <tag2>...</tag2>'
    // SPACE BETWEEN tag1 CLOSING AND tag2 OPENING TAGS IS MESSING IT UP!
    htmlString = htmlString.replace(/(<[ /]*\w+ *>)( +)(<[ /]*\w+ *>)/igm, (m, x, y, z) => {
        return `${x}${'&nbsp;'.repeat(y.length)}${z}`
    })

    // IN THE DEMO PAGE, PASTING A SIMPLE BUT VALID HTML STRING SUCH AS: <strong>Strong</strong>
    // ONLY TRANSLATES WHEN A SPACE AND A CHARACTER IS ADDED!
    // JUST FOR GOOD MEASURE, LETS HAVE THAT ON BOTH SIDES
    // htmlString = '[ START ]' + htmlString + '[ END ]';

    div.innerHTML = htmlString;


    // CHECK WHAT WAS RENDERED AND COMPARE TO THE ORIGINAL
    // const arrHtmlString = htmlString.split(' ');
    // const arrDivInnerHTML = div.innerHTML.split(' ');
    // arrHtmlString.forEach((segment, index) => {
    //     if (segment !== arrDivInnerHTML[index]) {
    //         if (index > 0) {
    //             const addedClosingTag = segment.match(/\/>/) && arrDivInnerHTML[index].match(/[^/]><\/\w+>/);
    //             if (!addedClosingTag) {
    // as far as my test shows, if the current segment
    // does not match with the original string, it is likely
    // that the previous string segment has a '<' character
    // and that it's been parsed but is not valid
    // arrDivInnerHTML[index - 1] = arrHtmlString[index - 1].replace(/</g, '&lt;');
    // arrDivInnerHTML[index] = segment;
    // }
    // }
    // }
    // });

    // html will add a closing tag to anything that
    // resembles an opening tag.  And so the length
    // of these two arrays will varray!
    // arrDivInnerHTML.splice(arrHtmlString.length);

    // return arrDivInnerHTML.join(' ').trim()
    //     .replace(/^\[ START ]/, '')
    //     .replace(/\[ END ]$/, '')
    //     .replace(/\[ TAB ]/gm, '\t')
    //     .replace(/\[ RETURN ]/gm, '\n')
    //     .replace(/^(\[ SPACE ])+|(\[ SPACE ])+$/gm, match => ' '.repeat(match.split('][').length));

    return div.innerHTML;
};