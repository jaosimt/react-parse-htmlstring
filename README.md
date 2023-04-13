# ReactParseHTMLString

Parse any string and return a React component on a html container of your choice!

<section class="markdown info mt-0 mb-5">
    <strong><i>THE STORY BEHIND THIS LIBRARY!</i></strong>
    <hr class="mt-1 mb-1 separator">
    <p class="m-0">Once upon a time...</p>
    <p class="mt-1 mb-0">
      Nah, Just kidding!&nbsp;&nbsp;It's about a recent work of mine that requires some crazy html string and the likes to be rendered as html!&nbsp;&nbsp;It could be a combination of or one of the following:
    </p>
    <ul class="mt-1 mb-0">
      <li><pre class="pre-wrap m-0">Given that &lt;strong>max&lt;/strong>, &lt;strong>x&lt;/strong> and &lt;strong>y&lt;/strong> are declared and initialized, write a solution that if x&lt;y returns &lt;strong>max=x&lt;/strong>!</pre></li>
      <li><pre class="pre-wrap mt-1 mb-0">if (x&lt;y)<br/>&nbsp;&nbsp;&nbsp;&nbsp;max=x;<br/>else<br/>&nbsp;&nbsp;&nbsp;&nbsp;max=y;</pre></li>
      <li><pre class="pre-wrap mt-1 mb-0">a[1] = 6;<br/>List&lt;Integer&gt; lst = new ArrayList&lt;&gt;();</pre></li>
    </ul>
    <p class="mt-1 mb-0">
      The issue starts with the browser automatically treating any <span class="token tag">character</span> or <span class="token tag">word</span> after "<span class="token punctuation">&lt;</span>" as a html tag!&nbsp;&nbsp;And of course, any non-valid html tag like <strong>&lt;y</strong> or <strong>&lt;Integer&gt;</strong> from above examples will only be omitted!
    </p>
    <p class="mt-1 mb-0">Secondly, we also can not "html encode" these strings or even replace with its corresponding html entity since that would lead to literally rendering a valid html tag instead of the intended output such as the &lt;strong>max&lt;/strong> where max is intended to be rendered <strong>bold</strong>!</p>
    <p class="mt-1 mb-0">And so, if you're still here... introducing <strong>react-parse-htmlstring</strong>!</p>
</section>


[Try the Live Demo!](https://jaosimt.github.io/react-parse-htmlstring)

## Install

```bash
npm install react-parse-htmlstring
# or
yarn add react-parse-htmlstring
```

## Usage

```javascript
import React from 'react';
import ParseHTML, { parseHTMLString } from 'react-parse-htmlstring';

function HtmlComponent() {
	const htmlString = 'Even with x<y <i>I am still <strong>Strong!</strong></i>';
	return <ParseHTML
		string={ htmlString }
		className="demo"
		style={ { padding: '0.5rem', borderRadius: '1px solid gainsboro' } }
	/>;
}
```

## API

### `component <ParseHTML />`

Takes a few props and returns equivalent React element

#### Usage

```js
import ParseHTML from 'react-parse-htmlstring';
```

#### props

- `string`: Any string you need parsing!
- `className`: CSS classname/s you can attach to style the component
- `style`: If you prefer inline styling to above `className`... or use them both!
    - `{ borderRadius: '1px solid gainsboro' }`: For example.
- `wrapperElement`: Any html container element.
    - `div`: As default when none is provided.

### `function parseHTMLString`

Takes any string and returns a parsed and safe HTML string if you're just like me that has some situations where the `dangerouslySetInnerHTML` has to be used .

#### Usage

```js
import { parseHTMLString } from 'react-parse-htmlstring';
```

#### argument

- `string`: Any string you need parsing!

<section class="markdown alert mt-3">
  <strong><i>NOTE:</i></strong>
  <hr class="mt-1 mb-1 separator">
  <p class="m-0">For any undesired rendering/result, please do file an issue right <a href="https://github.com/jaosimt/react-parse-htmlstring/issues"><strong>here</strong>!</a>.</p>
  <p class="m-0">Surely, I will immediately jump on it as soon as I can.&nbsp;&nbsp;Cheers!</p>
  <p class="mt-1 mb-0"><i class="m-0">--sim</i></p>
</section>

<section class="flex-column align-items-center gap-1 mt-3 mb-3">
  <em>Powered by:</em>
  <img class="simo-full" src="https://pos.jaosimt.com/sImoLogo-full-red.svg" alt="sImo" />
</section>

<div>
	<style>
	  :root {
	      --primary-color         : #2b6cb0;
	      --text-color            : rgba(74, 85, 104, 1);
	      --bg-dark               : rgba(45, 55, 72, 1);
	      --bg-gray               : #4D4D4D24;
	      --bg-white              : rgba(255, 255, 255, 1);
	      --primary-info          : #93ddfd;
	      --secondary-info        : #009dff12;
	      --primary-success       : #b5f4a5;
	      --secondary-success     : #8afa6b12;
	      --primary-alert         : #ff2a2a;
	      --secondary-alert       : #ff000012;
	      --default-padding       : 1rem;
	      --default-border        : 1px solid rgba(160, 174, 192, 1);
	      --default-border-radius : 3px;
	      --color-code-green      : #b5f4a5;
	      --color-code-yellow     : #ffe484;
	      --color-code-purple     : #d9a9ff;
	      --color-code-red        : #ff2a2a;
	      --color-code-blue       : #93ddfd;
	      --color-code-white      : #fff;
	      --color-code-gold       : #d4a500;
	      --color-code-gray       : rgba(160, 174, 192, 1);
	  }
	  .text-center { text-align: center; }
	  .m-0 { margin: 0 !important; }
	  .m-1 { margin: 0.5rem !important; }
	  .m-2 { margin: 1rem !important; }
	  .mt-0 { margin-top: 0 !important; }
	  .mt-1 { margin-top: 0.5rem !important; }
	  .mt-2 { margin-top: 1rem !important; }
	  .mt-3 { margin-top: 1.5rem !important; }
	  .mt-4 { margin-top: 2rem !important; }
	  .mt-5 { margin-top: 3rem !important; }
	  .mb-0 { margin-bottom: 0 !important; }
	  .mb-1 { margin-bottom: 0.5rem !important; }
	  .mb-2 { margin-bottom: 1rem !important; }
	  .mb-3 { margin-bottom: 1.5rem !important; }
	  .mb-4 { margin-bottom: 2rem !important; }
	  .mb-5 { margin-bottom: 3rem !important; }
	  img.simo-full { width: 147px; max-width: 98%; }
	  .flex { display: flex; }
	  .flex-column { display: flex; flex-direction: column; }
	  .align-items-center { align-items: center; }
	  .justify-content-center { justify-content: center; }
	  .gap-1 { gap: 0.5rem; } 
	  .markdown {
	    padding       : var(--default-padding);
	    overflow      : hidden;
	    text-align    : left;
	    border-radius : 14px;
	    border-left   : 7px solid var(--color-code-gray);
	    border-top    : 1px solid var(--color-code-gray);
	    border-right  : 1px solid var(--color-code-gray);
	    border-bottom : 1px solid var(--color-code-gray);
	  }
	  .markdown.alert {
	    background    : var(--secondary-alert);
	    border-left   : 7px solid var(--primary-alert);
	    border-top    : 1px solid var(--secondary-alert);
	    border-right  : 1px solid var(--secondary-alert);
	    border-bottom : 1px solid var(--secondary-alert);
	  }
	  .markdown.alert > hr { border-color: var(--primary-alert); }
	  .markdown.info {
	    background   : var(--secondary-info);
	    border-left  : 7px solid var(--primary-info);
	    border-top: 1px solid var(--secondary-info);
	    border-right: 1px solid var(--secondary-info);
	    border-bottom: 1px solid var(--secondary-info);
	  }
	  .markdown.info > hr { border-color: var(--primary-info); }
	  .markdown.success {
	    background   : var(--secondary-success);
	    border-left  : 7px solid var(--primary-success);
	    border-top: 1px solid var(--secondary-success);
	    border-right: 1px solid var(--secondary-success);
	    border-bottom: 1px solid var(--secondary-success);
	  }
	  .markdown.success > hr { border-color: var(--primary-success); }
	  .fg-gray { color: var(--color-code-gray); }
	  .separator { border-top: 1px solid var(--color-code-gray); }
	  .pre-wrap { white-space: pre-wrap; }
	  .token {
		font-weight : 700;
		color       : var(--color-code-white);
	  }
	  .token.rule { color : var(--color-code-purple); }
	  .token.comment { color : var(--color-code-gray); }
	  .token.punctuation { color : var(--color-code-blue); }
	  .token.tag { color : var(--color-code-red); }
	  .token.method { color : var(--color-code-purple); }
	  .token.attribute.name { color : var(--color-code-yellow); }
	  .token.attribute.value { color : var(--color-code-green); }
	</style>
</div>
