# Front-end Development with JavaScript and Vue.js

In this document, I will summarize what I've learned about JavaScript and the Vue.js framework for front-end development.

## JavaScript Basics

The primary usage of the flexible and popular programming language JavaScript is to create dynamic and interactive online applications. We can add functionality, check user input, and make responsive web pages thanks to it. Here are some key ideas from JavaScript that we learned:

### Variables and Data Types

JavaScript allows us to declare variables and supports various data types, including:

```javascript
let name = "John";
const age = 30;


Data Types: JavaScript has several data types, including numbers, strings, booleans, objects, arrays, and more.

javascript
let num = 42;
let text = "Hello, World!";
let isTrue = true;
let person = { name: "Alice", age: 25 };
let colors = ["red", "green", "blue"];


Functions: Functions are blocks of reusable code. You can define functions using the function keyword or using arrow functions.

javascript
function greet(name) {
  return "Hello, " + name + "!";
}

const add = (a, b) => a + b;

Conditional Statements: You can use if, else if, and else to make decisions in your code.

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}


Loops: JavaScript provides various types of loops, like for, while, and for...of, to iterate through data or perform repetitive tasks.

javascript
for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // Code to execute
}

Objects: Objects are used to group related data and functions together.

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name + "!");
  },
};


## Vue.js Basics

Vue.js is a progressive JavaScript framework used for building user interfaces. It's designed to be incrementally adoptable, meaning you can use as much or as little of it as needed. Here's a brief overview of Vue.js:

### Vue Instance

To use Vue, you create a Vue instance that represents a part of your application. You define data, methods, and options within this instance.

javascript
const app = new Vue({
  el: "#app", // The element to mount the app on
  data: {
    message: "Hello, Vue!",
  },
  methods: {
    showMessage: function() {
      alert(this.message);
    },
  },
});


### Template

Vue.js uses templates to define the structure of your HTML. You can use directives like {{ }} for data binding and v-on for event handling.

html
<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="showMessage">Click me</button>
</div>


### Directives

Vue provides built-in directives for manipulating the DOM. For example, v-if and v-for are commonly used for conditional rendering and list rendering, respectively.

html
<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>


Components
Vue allows you to create reusable components, which encapsulate both data and UI logic.

Vue.component('todo-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});

<todo-item v-for="item in items" :item="item"></todo-item>


### Computed Properties

Vue supports computed properties that are derived from your data but are calculated and cached until the dependent data changes.

javascript
computed: {
  reversedMessage: function() {
    return this.message.split('').reverse().join('');
  }
}

