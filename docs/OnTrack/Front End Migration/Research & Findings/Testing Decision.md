# What is the current state of testing?

In this issue, we will discuss the current state of testing and what tools are we proposing. While
there are some existing unit tests for components written in TypeScript, there are no existing unit
tests for the CoffeeScript components. Existing tests use Karma test runner integrated with Jasmine.
Currently, the ng test command (Runs unit tests in a project) and npm install are not working due to
dependencies issues, which are getting fixed.

## Comparing different alternatives

## Cypress

## Pros

-Selenium involves implementing browser drivers for the script to communicate with the web elements
on the page. -Cypress is used by both developers and QA engineers -In Cypress, there is no
additional IDE overhead. When you launch Cypress, it asks you to select an IDE to modify the test
script. -The Cypress framework produces more accurate results. It’s because Cypress has greater
control over the entire automation process. -Cypress instances respond in real-time to application
events and commands. -Cypress does not utilize WebDriver for testing or doesn't send the command to
the browser using a specific driver. If your language can someway be transpiled to JS, it can use
DOM events to send the click command to the button or such. This results in a much faster execution
of test results

## Cons

-Cypress is a test runner mainly focused on end-to-end tests. For unit testing, there are better,
faster alternatives. -Cypress is currently only supported for the Chrome, Firefox, Edge, Brave, and
Electron browsers. -As a result, Cypress is a less favoured option for cross-browser testing. -For
the building of test cases, it only supports the JavaScript framework. -Cypress doesn’t support
remote execution.

## Selenium

### Pros

-Selenium is an Open Source Software. -Selenium supports various programming languages to write
programs (Test scripts) -Selenium supports various operating systems (MS Windows, Linux, Macintosh
etc...) -Selenium supports various Browsers (Mozilla Firefox, Google Chrome, IE, Opera, Safari
etc...) -Selenium supports Parallel Test Execution. -Selenium uses fewer Hardware resources. -Good
choice for ongoing regression testing and end to end testing.

### Cons

-No reliable Technical Support from anybody. -It supports Web-based applications only. -Difficult to
use, and takes more time to create Test cases. Takes more time to learn. -Difficult to set up Test
Environment when it compares to Vendor Tools like UFT, RFT, SilkTest etc... -Limited support for
Image Testing. -No Built-in Reporting facility. -Slow -Better choice for end-to-end testing than
unit testing.

## Jest

### Pros

-The biggest advantage of using Jest is minimal setup or configuration. -It comes with an assertion
library and mocking support -The tests are written in BDD style -You can put your tests inside of a
directory called tests or name them with a .spec.js or .test.js - extension, then run jest and it
works -Jest also supports snapshot testing

### Cons

-Jest’s biggest weaknesses stem from being newer and less widely used among JavaScript developers.
-It has less tooling and library support available compared to more mature libraries (like Mocha).
-WebStorm didn’t even support running Jest tests. -Due to its young age, it may also be more
difficult to use Jest across the board for larger projects that utilize different types of testing.
-Slower due to auto mocking -Poor documentation

## Karma + Jasmine

### Pros

-When creating Angular projects using the Angular CLI, Jasmine and Karma are used to create and run
unit tests by default. -Karma is a test runner built by the angularJS to make TDD easy in Angular
Project Testing. -Karma is a JavaScript test runner that fits the needs of an AngularJS developer.
-Jasmine is compatible with almost every framework or library of your choice -The Jasmine BDD
library makes it easy to define tests, run them, and integrate them -Jasmine does not rely on any
JavaScript framework, DOM, or browsers. -We can run Jasmine tests in a browser ourselves by setting
up and loading an HTML file, but more commonly we use a command-line tool called Karma. -Karma
handles the process of creating HTML files, opening browsers and running tests and returning the
results of those tests to the command line. -If you use the Angular CLI to manage projects it
automatically creates stub Jasmine spec files for you when generating code. -It also handles the
Karma configuration, transpilation and bundling of your files -It offers clean and polished syntax.
-Jasmine provides a rich set of built-in matchers that can match expectations and add asserts to the
test cases

### Cons

-Asynchronous testing can be a bit of a headache -js is required for running Karma -Expects a
specific suffix to all test files (\*spec.js by default)

## Proposal

Karma handles the process of creating HTML files, opening browsers and running tests and returning
the results of those tests to the command line. When using Angular CLI to manage projects it
automatically creates stub Jasmine spec files for you when generating code. On top of that, it is
already implemented in our code base. It goes well with our TDD approach. It will also be efficient
for unit testing and requires minimal configurations so that we can spend more time on coding and
quality testing itself. Additionally, there is also good online documentation and resources
available for training.
