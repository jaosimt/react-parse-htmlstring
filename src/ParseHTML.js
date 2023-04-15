/*
 *   Copyright © 2023 • Jao Solutions, Inc. • All rights reserved.
 */

"use strict";

import { createElement } from 'react';
import classname from 'classnames';

import { parseHTMLString, voidElements } from './processor';

const ParseHTML = props => {
	const { wrapperElement = 'div', string = '', className, style = {} } = props;
	const tag = voidElements.includes(wrapperElement) ? 'div' : wrapperElement;
	
	return createElement(tag, {
		className: classname('parse-htmlstring', className),
		style: { ...style },
		dangerouslySetInnerHTML: { __html: parseHTMLString(string) }
	});
};

export default ParseHTML;