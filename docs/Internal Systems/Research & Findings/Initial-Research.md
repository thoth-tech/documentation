# Initial Research for Internal Systems 
_As we are beggining our work on Internal systems we need to generate some ideas for the areas that we can work on and the tools that we might use going forward in our project. This could include different coding language that we are farmiliar with and tools we have used. Different static site generators that exitst and how we can host out site once generated. From here we should also get an idea for the how we might manage Quality Assurance side of the product and mainting its quality._
## Website Technologies

---
<br />



## Gatsby 
Gatsby is an open-source frontend development framework which is also based on React and is the most popular static site generator. 

- Combine data from anywhere – It has an innovative data layer which allows developers to integrate different contents and services into the single webpage. 

- Amazing development experience – Gatsby has inbuilt plugins, themes and starters that helps developer to get a quick start to create the website. 

- High speed and responsiveness – Gatsby help to make the webpage loading and navigation fast which is done by loading the part that only matter with its page rendering. 

<br>

---
## Front-end Technologies
---
<br />

## Next.js 
Next.js is an open-source web development framework built on top of Node.js enabling React based web applications functionalities such as server-side rendering and generating static websites.

Benefits of Next.js

- Can be used to generate static or a dynamic site, which ever we go for
- Removes the hassle of building servers

- Scalable

- Routing, fetching and integrations are all built in.
Can link to a database if required

- Server-Side Rendering (SSR)- The UI components of React are all rendered on the server side which means that once the HTML has been delivered to the user’s web browser there is no action user has to do to read the content of the page which makes the page loading times appear faster for user.  

- TypeScript support – It provides automatic TypeScript configuration and compilation. 

- Hot Module replacement (HMR) – HMR is very beneficial for developers as it allows to see any changes that has been made during the development.  
<br />


## Vue.js

### Pros :

- Even a beginner developer may start a project on the Vue platform, if they have a basic understanding of HTML, CSS, and JavaScript
- Has a small size; a production-ready build project can be as small as 20KB after min+gzip
- Vue's versatility allows it to scale between a library and a full-featured framework, making it simple for developers to create amazing apps
- We get various components and views that can be easily integrated into existing infrastructure or an app
- Easy to learn and develop an application 

### Cons: 

- Less plugins and components which limits to few ones as it does not have some common ones

- Can get some issues with its complicated framework 

- Still evolving, as its framework is built in Chinese which can create a problem for English speakers 

- It is over-flexible which can cause more errors and irregularity in code, hence delaying the project

 <br />


## Bootstrap 
<br />

### Pros : 

- Helps save time as it has an amazing documentation on each component 

- Helps in avoiding cross-browser bugs and code fixes as it is an open-source project 

- Assists in Avoiding jQuery Plugin Soup as Bootstrap includes a number of jQuery components that are known to be reliable in modern browsers and compatible with the current jQuery version

 

### Cons: 

- If we’re not compiling the source SASS files, then we must have to utilise Chrome's DevTools inspect tool to find the default style attributes for which we’d have to create a new CSS to override these styles which creates code redundancy resulting into slower site loading

- When creating a website, the user will have to put in some effort to turn the design into something truly distinctive because then it will typically resemble the basic Bootstrap designs

 
## React 
<br />

### Pros :  
- App is front end heavy, so it gives more flexibility in making ui’s
- Student know javascript, so react will be a good transition
- Can use different react libraries to perform tasks efficiently
- Framework can be used on top of react to genereate static sites easily
- A lot easier to learn and understand as it includes a lot of documentation, tutorials, and training materials. Also, benefits from the open-source JavaScript User Interface(UI) module, which aids in task execution

- Helps in creating dynamic web applications easily by providing less coding and more functionality

- Has reusable components making the code easier to maintain and develop web apps as it uses a virtual DOM-based technique to populate data in the HTML DOM which also improves its performance 

- Has many practical tools which are a Chrome and Firefox developer extension helping us to analyze React component hierarchies in the virtual DOM. Also, certain components can be selected to inspect and update their current props and state. Overall, helping the task of the user easier and understandable 

- Provides a very rich JavaScript library 

- Testing ReactJS applications is simple as it provides a platform for developers to test and debug their programs using native tools 

 

### Cons : 

- Covers only UI layers of the app due to which the user has to pick a few more technologies to complete the development toolkit for the project 

 
<br>

---
## GitHub 

### Pros : 

- Free service

- Quick search is possible in the repository structure 

- Easy to get support in a big community 

- Comes with useful capabilities for collaboration and smooth interaction with Git 

- TFS, HG, and SVN are also supported

### Cons : 

- Doesn’t come with private repositories 

- Has space restrictions, as single files cannot exceed 100MB, and repositories are limited to 1GB in the free edition. 
---

## Testing Frameworks 
---
<br />


## __Unit Testing__


### JEST 
Currently used by other teams for Unit Testing in Vscode. 
<br />

 

## __UI Testing__  <br />

<br />


## Selenium 

__Heavily used through the industry, it has many tools and libraries at its disposal but can be unwieldy to set up and prefect__

### Pros : 

- Versatile, as it can be used with almost any operating system, browser, automation testing framework and programming language 

### Cons : 

- Larger maintenance overhead for maintaining your tests than 

- Building libraries and frameworks requires above-the-average programming skills and takes a lot of time and effort. 

 

## Katalon Studios 

__Katalon Studios is a free tool (Not open source )Allows for an easy non-technical automation testing, but also has ability for scripts to be written in Groovy (Java)’__

### Pros : 

- Easy to set up, Complete package and framework 

- Built on top of Eclipse IDE for ease of scripting and built in autocorrection libraries 

- Can be used with User action recording and also test case creation 

- Built in templates to work with Git, Jira, Jenkins etc. 

- Tests recorded in one browser can be run in any other supported browser 

- East to interpret results with logging and screenshots on failure. 

 

### Cons : 

- Test scripts are Limited to Java and Groovy 

- No distributed testing(Aka Scale out testing with an array of servers) 

- Can’t automate desktop applications 

 

## Cucumber 

__Open-Sourced automation tool based on Behaviour-driven development. Behaviour driven development bases of the frameworks of :__ 

__Given [_initial context_], when [_event occurs_], then [_ensure some outcomes_]__

### Pros : 

- Written in plain English 

- Supports scripting in Groovy, Python, Perl, PHP, .NET, Scala 

- Quick set up 

- Integrates with Git and Jenkins 

### Cons : 

- Organisation can be confusing 

- Report Generation relies on plugins and can create integration issues 

 
## QA Wolf  __NOT FREE__ 

__Open source End -to-end automation testing tool__  

### Pros : 

- Hosted so no downloads 

- Easy to set up 

- Converts browser action into code 

- Tested on Chrome, Firefox and Webkit 

- Integrated with GitHub and Slack 

---
## Web Site Hosting
---
 

## Git 
Git can allow us to create a private static page that can be used to host out site

- We can create a master branch containing our code and deploy in Git Hub 

<br />

---

## References

https://ronakataglowid.medium.com/pros-and-cons-of-the-vue-js-framework-8015dcbc05ef 

https://bootstrapcreative.com/pros-cons-using-bootstrap-web-development/ 

https://www.javatpoint.com/pros-and-cons-of-react 

https://blog.desdelinux.net/en/github-vs-gitlab/ 