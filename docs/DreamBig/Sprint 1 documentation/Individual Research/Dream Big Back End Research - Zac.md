# Dream Big Back End Research

## Ruby on Rails

Ruby is a web application framework that contains all the required components to create a database
backed web application that conforms to the Model-View-Controller (MVC) software design pattern.

### Model-View-Controller (MVC)

![ Model-View-Controller Diagram ](docs\DreamBig\assests\images\mvc.png)

MVC divides your application into three layers: Model, View, and Controller, each with a specific
responsibility.

#### Model layer

Rails defines it as representing “the domain model (such as Account, Product, Person, Post, etc.)
and encapsulates the business logic specific to your application.”

#### View layer

Made up of templates which are designed to display the applications resources appropriately. Most
view templates are HTML with embedded Rudy code.

#### Controller layer

This layer handles incoming HTTPS/HTTP requests and provides the required responses which can come
in the form of returning HTML, XML, JSON, PDFs, or mobile views. Controllers load and manipulate
models and render view templates in order to generate the appropriate HTTP response.

### Advantages

- Multithreaded
- Code efficiency
- Easy development
- Readability
- Structured/ Opinionated allows for easy change in developers
- Comes with many useful features by default

### Disadvantages

- Speed
- Although probably won’t affect our use case given the number of users
- No static Typing system
- Memory allocation issues
- Less flexible
- Poor third party library documentation
- Less popular
- Highly abstracted, possibly harder to debug

## Node.js

Node.js is a JavaScript runtime environment, it is asynchronous, and event driven. There are many
different frame works that can be employed while using Node.js for example, Express.js or sails.

## Express.js

Minimal and flexible Node.js web application framework that provides a robust set of features for
web and mobile applications.

### Advantages

- Can use JavaScript/TypeScript for entire application
- Static Typing
- More popular/ larger demand
- Go to for REST API development
- Flexible

### Disadvantages

- Speed reduction when performing CPU-intensive tasks, since JS is single threaded
- NPM modules
- Possible poor quality
- Security risks
- Structure
- Is defined by the developers, developers change structure might as well
- Features and functionality must be added by the developer

## Best Solution for Dream Big

I believe the best solution for dream big is Node.js using the Express.js framework because of the
following reasons:

- It will give students further exposure to current and in demand technologies
- Allowing the entire project to be written in one language allows developers from either the front
  end or the back end to understand and contribute to the other

### Disadvantage mitigation

- From my understanding of the product that we are designing, there will not be any CPU intensive
  tasks to complete.
- The issue encountered with structure can be overcome by employing comprehensive, documentation of
  not only the details and functions of the code but its architecture, design patterns and best
  practices that have been chosen.
- When selecting NPM modules care should be taken to ensure that the module is still supported
