# ReactParseHTMLString
Parse any string and return a React component on a html container of your choice!

[Try the Live Demo](https://jaosimt.github.io/react-parse-htmlstring)


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
- `style`: If you prefer inline styling over above `className`... or use them both!
  - `{ borderRadius: '1px solid gainsboro' }`: For example.
- `wrapperElement`: Any html container element.
  - `div`: As default when none is provided.


### `function parseHTMLString`
Takes any string and returns a parsed and safe HTML string if you really can't avoid using  `dangerouslySetInnerHTML`.

#### Usage
```js
import { parseHTMLString } from 'react-parse-htmlstring';
```
#### argument
- `string`: Any string you need parsing!


### `My story behind this library!`
Once upon a time... 
Of course, I am just kidding!

A very recent work of mine requires some crazy string to be rendered as Html!  Take below for example:

```html
Given that <strong>max</strong>, <strong>x</strong> and <strong>y</strong> 
are declared and initialized, write a solution that if x<y returns max = x!
```
or something like that...

> <div style="border-bottom: 1px solid #777; padding: 0 0 0.5rem 0; margin-bottom: 0.5rem"><i><strong>Note:</strong></i></div>
> For any undesired rendering/result, please do file an issue right here  <a href="https://github.com/jaosimt/react-parse-htmlstring/issues">here!</a>.<br/>
> Surely, I will jump on it as soon as I can!

<div style="display: flex; flex-direction: column; justify-content: center; align-items: center">
<h5>Powered by:</h5>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 20"><g stroke-width=".3"><path d="M455.61 291.3c-83.21 40.027-157.78 60.705-221.48 54.296 69.72 20.102 130.33 13.44 189.4 2.273zM288.4 261.16c83.21-40.03 157.78-60.71 221.47-54.3-69.72-20.1-130.32-13.44-189.4-2.27z" stroke="#535d6c" fill="#ff2a2a" transform="matrix(.06526 0 0 .06065 -9.277 -11.754)"/><path d="M364.98 237.07c18.567 17.421 45.23 33.042 81.975 46.424l-80.441 35.373c-30.31-11.34-55.64-27.66-75.85-49.11l74.313-32.678" stroke="#ff2a2a" fill="#535d6c" transform="matrix(.06526 0 0 .06065 -9.277 -11.754)"/></g><path stroke-linejoin="round" d="M2.021 16.114c-.317-.002-.573-.228-.573-.51v-.264c0-.283.256-.508.573-.51l3.386-.006c.397 0 .718-.287.718-.645s-.32-.645-.718-.645l-3.686.003c-.948 0-1.712.686-1.712 1.538v.794c0 .852.764 1.537 1.712 1.537l3.828.006c.317.002.573.228.573.51v.264c0 .283-.256.508-.573.51l-4.822.006c-.398 0-.718.288-.718.645s.32.645.718.645l5.122-.003c.948 0 1.712-.686 1.712-1.538v-.794c0-.852-.764-1.537-1.712-1.537zm6.195 3.224c0 .358.32.645.718.645s.718-.287.718-.645l.012-5.804H8.227zm1.448-6.09.001-.594c0-.357-.32-.645-.718-.645s-.718.288-.718.645l-.002.593zm10.99 6.738c.398 0 .718-.287.718-.645l.006-3.532c0-1.258-1.128-2.272-2.53-2.272H17.71c-.712 0-1.353.261-1.812.684a2.696 2.696 0 0 0-1.815-.687h-1.14c-1.4 0-2.53 1.014-2.53 2.272l-.006 3.532c0 .358.32.645.719.645s.718-.287.718-.645l.01-3.45c.002-.673.603-1.214 1.352-1.214h.609c.749 0 1.352.541 1.352 1.214l.004 3.45c0 .358.32.645.718.645s.718-.287.718-.645l.013-3.448c.002-.672.603-1.213 1.352-1.213h.61c.748 0 1.352.541 1.352 1.214l.003 3.45c0 .358.32.645.718.645zm3.33-6.452c-1.067 0-1.926.772-1.926 1.73v2.996c0 .958.859 1.729 1.926 1.729h4.081c1.067 0 1.926-.771 1.926-1.729v-2.997c0-.957-.86-1.729-1.926-1.729zm.739 1.137h2.603c.68 0 1.228.492 1.228 1.103v1.976c0 .61-.548 1.103-1.228 1.103h-2.603c-.68 0-1.228-.492-1.228-1.103v-1.976c0-.611.547-1.103 1.228-1.103z" stroke="#535d6c" stroke-linecap="round" stroke-width=".018" fill="#ff2a2a"/></svg>
</div>