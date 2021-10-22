[![Build Status](https://travis-ci.com/TheSpicyMeatball/react-create-styled-component.svg?branch=main)](https://travis-ci.com/TheSpicyMeatball/react-create-styled-component)

# react-create-styled-component

> Util to create styled components with CSS-in-JS



<h2>styledComponent</h2>
<p>Creates a styled React component</p>
<p>Since v0.0.1</p>
<table>
      <thead>
      <tr>
        <th>Param</th>
        <th>Type</th></tr>
      </thead>
      <tbody><tr><td><p><b>styles</b></p>Javascript style object that gets applied to component</td><td>object</td></tr><tr><td><p><b>element</b></p>Type of dom element that component uses</td><td>string | JSX.Element</td></tr><tr><td><p><b>config <span>(optional)</span></b></p>Object shaped like {classNames = [], combinators = {}}. 'classNames' are additional classes that get assigned to the component. 'combinators' are additional styles that get applied as a separate class to the component.</td><td>object</td></tr></tbody>
    </table><p><b>Returns:</b> {component}</p><h4>Supporting Types</h4>

```
// The config type for the util:
//   classNames?: Array<string>; - Any additional CSS classNames to append
//   combinators?: Record<string, unknown> - Any combinator CSS-in-JS styles

export type ConfigType = { classNames?: Array<string>, combinators?: Record<string, unknown> };
```
  <h4>Import</h4>

```
import { styledComponent } from 'react-create-styled-component';
```

  <h4>Examples</h4>





```    
// basic
const MyComponent = styledComponent({ padding: 4 }, 'div');

  //=> In your render:
  <MyComponent>This is a div with padding</MyComponent>


// combinators
const combinators = {
  '& + &': {
    marginLeft: 16,
  }
}
const MyButton = styledComponent({ color: 'green' }, 'button', { combinators });

  //=> In your render:
  <>
    <MyButton>This is a green button</MyButton>
    <MyButton>This is another green button with margin-left</MyButton>
  </>
```

    

<a href="#package-contents"></a>
<h2>Package Contents</h2>

Within the module you'll find the following directories and files:

```html
package.json
CHANGELOG.md -- history of changes to the module
README.md -- this file
/lib
  └───/es5
      └───index.d.ts - 111 Bytes
      └───index.js - 307 Bytes
    └───/styledComponent
      └───index.d.ts - 1.59 KB
      └───index.js - 3.87 KB
      └───types.d.ts - 306 Bytes
      └───types.js - 79 Bytes
  └───/es6
      └───index.d.ts - 111 Bytes
      └───index.js - 54 Bytes
    └───/styledComponent
      └───index.d.ts - 1.59 KB
      └───index.js - 3.69 KB
      └───types.d.ts - 306 Bytes
      └───types.js - 12 Bytes
````