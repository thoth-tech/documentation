# HTML and CSS Codes and Concepts

This markdown file provides an overview of HTML and CSS codes and concepts for
web development.

## HTML (Hypertext Markup Language)

HTML is the standard markup language for creating web pages. It provides the
structure and content of a web page.

### Basic HTML Structure

```html
<!DOCTYPE html>
<html>
<head>
    <title>My Web Page</title>
</head>
<body>
    <h1>Hello, World!</h1>
    <p>This is a paragraph of text.</p>
</body>
</html>

HTML Elements
<html>: The root element that contains all other HTML elements.
<head>: Contains meta-information about the document.
<title>: Sets the title of the web page, displayed in the browser tab.
<body>: Contains the visible content of the web page.
<h1>: Defines a top-level heading.
<p>: Represents a paragraph of text.

CSS (Cascading Style Sheets)
CSS is used to control the presentation and layout of web pages.

Basic CSS Syntax
/* CSS comment */
selector {
    property: value;
}

/* Example */
h1 {
    color: blue;
    font-size: 24px;
}

Internal CSS: Include CSS directly within your HTML document using the <style>
element in the <head>.

<style>
  h1 {
    color: green;
  }
</style>

External CSS: Link an external CSS file to your HTML document using the <link>
element in the <head>.

<link rel="stylesheet" type="text/css" href="styles.css">

CSS Selectors
Element Selector: Selects all elements of a particular type.

p {
    color: red;
}

Class Selector: Selects elements with a specific class attribute.

.highlight {
    background-color: yellow;
}

ID Selector: Selects a single element with a specific ID attribute.

#header {
    font-size: 18px;
}

CSS Properties
color: Sets the text color.
font-size: Defines the font size.
background-color: Sets the background color.

CSS Box Model
The CSS box model consists of content, padding, border, and margin.

.box {
    width: 200px;
    height: 100px;
    padding: 20px;
    border: 2px solid black;
    margin: 10px;
}

Conclusion
This markdown file provides a basic introduction to HTML and CSS codes and concepts. Any new team members can take this docunment as a reference.

```
