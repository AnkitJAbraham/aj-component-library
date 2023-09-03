# aj-component-library

A collection of React components with opinionated styling designed to make frontend development easier. This contains shortcuts like easy SVG icons, custom Footer components and more in the future.

(Currently in development, for v1.2.0; expected to bring in more components and updated styling for existing components)

## Installation

Install aj-component-library with npm

```bash
  npm install aj-component-library
```

## Documentation (Will move into separate webpage later)

SVG Components -

```javascript
<GithubSVG href="<insert link here>" width="16" height="16" />
<LinkedinSVG href="<insert link here>" width="16" height="16" />
<ThreadsSVG href="<insert link here>" width="16" height="16" />
<InstagramSVG href="<insert link here>" width="16" height="16" />
```

These components expect the following props to be passed to them -

| Prop Name | Prop Description                         | Prop Type         |
| --------- | ---------------------------------------- | ----------------- |
| href      | Website/link that the icon will point to | String(Hyperlink) |
| width     | Width of the SVG to be displayed         | Integer           |
| height    | Height of the SVG to be displayed        | Integer           |

These SVG components display the SVG icons of the same name, with

```
fill: "currentColor"
```

Footer Component -

```javascript
<CustomFooter
    text="<insert text here>",
    linktext="<insert link text here>",
    link="<insert link here>",
    color="<insert color here>",
    bcolor="<insert background color here>",
    padding="<insert padding value here>"
/>

```

This component expects the following props to be passed on to it -

| Prop Name | Prop Description                                                                 | Prop Type         |
| --------- | -------------------------------------------------------------------------------- | ----------------- |
| text      | First text part; default is "Developed by"                                       | String            |
| linktext  | Text which is shown as hyperlink                                                 | Integer           |
| link      | Website/link that the linktext will point to                                     | String(hyperlink) |
| color     | Background color of the whole Footer component; default is white color (#ffffff) | String(hexcode)   |
| bcolor    | Border color for the Footer component; default is black color (#000000)          | String            |
| padding   | Padding value for all sides for the Footer                                       | String            |

Default behaviour is a Footer component displaying Flexbpx properties as

```javascript
display: "flex",
justifyContent: "flex-start" //and
alignItems: "center", //with
position: "sticky"
```

## Usage/Examples

```javascript
import { GithubSVG } from 'aj-component-library';

function App() {
  return (
      <>
      <GithubSVG href="https://www.google.com" width="16" height="16" />
    </>
}
  );

```
