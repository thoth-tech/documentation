## JavaScript Fundamentals

JavaScript is a versatile and widely-used programming language employed for creating dynamic and interactive web applications. It enables us to add functionality, validate user input, and create responsive web pages. Here are some key concepts in JavaScript that we have covered:

### Variables and Data Types

JavaScript allows us to declare variables with various data types, such as:

- **Strings:** Used to store text.
- **Numbers:** Used for numerical values.
- **Booleans:** Represent true or false values.
- **Objects:** Used to structure data with properties and methods.
- **Arrays:** Ordered lists of data elements.


let name = "John";
const age = 30;
let isTrue = true;
let person = { name: "Alice", age: 25 };
let colors = ["red", "green", "blue"];

Functions
Functions in JavaScript are reusable blocks of code. They can be defined using the function keyword or arrow functions.

function greet(name) {
  return "Hello, " + name + "!";
}

const add = (a, b) => a + b;

Conditional Statements
JavaScript provides conditional statements like if, else if, and else for decision-making in your code.

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

Loops
JavaScript supports various loop types like for, while, and for...of for iterating through data or performing repetitive tasks.

for (let i = 0; i < 5; i++) {
  console.log(i);
}

while (condition) {
  // Code to execute
}

Objects
Objects in JavaScript are used to group related data and functions together.

const person = {
  name: "John",
  age: 30,
  greet: function() {
    console.log("Hello, " + this.name + "!");
  },
};

Vue.js Basics
Vue.js is a progressive JavaScript framework designed for building user interfaces. It offers incremental adoption, allowing you to use as much or as little of its features as needed. Here's an overview of Vue.js:

Vue Instance
To use Vue, you create a Vue instance that represents a portion of your application. You can define data, methods, and options within this instance.


const app = new Vue({
  el: "#app", // Element to mount the app on
  data: {
    message: "Hello, Vue!",
  },
  methods: {
    showMessage: function() {
      alert(this.message);
    },
  },
});


Templates
Vue.js uses templates to define the HTML structure. It supports data binding using double curly braces {{ }} and event handling using v-on.

<div id="app">
  <p>{{ message }}</p>
  <button v-on:click="showMessage">Click me</button>
</div>

Directives
Vue provides built-in directives like v-if and v-for for manipulating the DOM. They are used for conditional rendering and list rendering, respectively.

<ul>
  <li v-for="item in items">{{ item }}</li>
</ul>

Components
Vue allows you to create reusable components that encapsulate both data and UI logic.

Vue.component('todo-item', {
  props: ['item'],
  template: '<li>{{ item.text }}</li>'
});

<todo-item v-for="item in items" :item="item"></todo-item>

Computed Properties
Vue supports computed properties, which derive values from your data but are recalculated and cached when dependent data changes.

computed: {
  reversedMessage: function() {
    return this.message.split('').reverse().join('');
  }
}

