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

<h5 style="text-align: center; margin-top: 2rem;">Powered by:</h5>
![alt text](https://pos.jaosimt.com/sImoLogo-full-red.svg)