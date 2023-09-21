import React, { useState } from 'react';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

// /* FOR DEBUGGING PURPOSES ONLY */ import ParseHTML, { fixAttributeQuotes, parseHTMLString } from '../../src/index';
/* USE THIS INSTEAD            */ import ParseHTML, { fixAttributeQuotes, parseHTMLString } from 'react-parse-htmlstring';

import './styles.scss';

const { dependencies } = require('../package.json');
import { defaultHtmlString, jaoSolutionSVGString } from './data';

export default function App() {
	const [ htmlString, setHtmlString ] = useState(defaultHtmlString);
	
	const _className = <span style={ { cursor: 'pointer' } } className="token attribute value class-tooltip">demo</span>;
	
	return <div id="react-parse-htmlstring">
		<h1 className="m-0">React Parse HTML String Demo!</h1>
		<h3 className="m-0"><strong>{ dependencies['react-parse-htmlstring'].replace(/\^/, 'v') }</strong></h3>
		<hr className="mt-1 mb-1" />
		<div className="grid-container">
			<div className="grid-item">
				<textarea
					name="ta"
					id="ta"
					value={ htmlString }
					className="w-full"
					onChange={ e => setHtmlString(e.target.value) }
				/>
			</div>
			<div className="grid-item">
				<button onClick={ () => setHtmlString(htmlString === defaultHtmlString ? jaoSolutionSVGString : defaultHtmlString) }>
					{ htmlString === defaultHtmlString ? 'I prepared a svg string, want to try loading it?' : 'Reset' }
				</button>
				<hr className="mt-1 mb-1" style={ { border: '1px solid whitesmoke' } } />
				<div>
					<div className="markdown-wrapper">
						<h3 className="header">
							component&nbsp;
							<span className="token punctuation">&lt;</span>
							<span className="token tag">ParseHTML&nbsp;</span>
							<span className="token punctuation">/&gt;</span>
						</h3>
						<div className="markdown">
							<span className="token punctuation">&lt;</span>
							<span className="token tag">ParseHTML&nbsp;</span>
							<span className="token attribute name">string</span>
							<span className="token punctuation">=&#123;&nbsp;</span>
							<span className="token attribute value">htmlString</span>
							<span className="token punctuation">&nbsp;&#125;</span>
							<span className="token attribute name">&nbsp;className</span>
							<span className="token punctuation">="</span>
							{ _className }
							<span className="token punctuation">&nbsp;/&gt;</span>
						</div>
						<div className="content">
							<ParseHTML string={ fixAttributeQuotes(htmlString) } className="demo" />
						</div>
					</div>
					<br/>
					<div className="markdown-wrapper">
						<h3 className="header">
							function&nbsp;
							<span className="token method">parseHTMLString</span>
							<span className="token punctuation">(</span>
							<span className="token punctuation">)</span>
						</h3>
						<div className="markdown">
							<span className="token punctuation">&lt;</span>
							<span className="token tag">div&nbsp;</span>
							<span className="token attribute name">className</span>
							<span className="token punctuation">=&#123;&nbsp;</span>
							{ _className }
							<span className="token punctuation">&nbsp;&#125;</span>
							<span className="token attribute name">&nbsp;dangerouslySetInnerHTML</span>
							<span className="token punctuation">=&#123;&nbsp;&#123;&nbsp;</span>
							<span className="token attribute value">__html</span>
							<span className="token punctuation">:&nbsp;</span>
							<span className="token method">parseHTMLString</span>
							<span className="token punctuation">(</span>
							<span className="token attribute value">htmlString</span>
							<span className="token punctuation">)</span>
							<span className="token punctuation">&nbsp;&#125;&nbsp;&#125;&nbsp;</span>
							<span className="token punctuation">&nbsp;/&gt;</span>
						</div>
						<div className="content">
							<div className="demo" dangerouslySetInnerHTML={ { __html: parseHTMLString(fixAttributeQuotes(htmlString)) } } />
						</div>
					</div>
				</div>
			</div>
		</div>
		<hr className="mt-1" />
		<Tooltip anchorSelect=".class-tooltip" place="top" className="tooltip-override">
			<pre>
				{
					'.demo {\n' +
					'    background    : var(--bg-white);\n' +
					'    padding       : var(--default-padding);\n' +
					'    border-radius : var(--default-border-radius);\n' +
					'    border        : var(--default-border);\n' +
					'    display       : inline-block;\n' +
					'    white-space   : pre;\n' +
					'}'
				}
			</pre>
		</Tooltip>
	</div>;
}