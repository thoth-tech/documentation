# **Test Strategy QA OnTrack**

## **Introduction**

A high-level summary of the project: This strategy outlines the quality that will be provided to the
Ontrack project, what testing is done as well as how this testing will work and will be structured.
The aim is to ensure quality is also ensured to the end user when interfacing with OnTrack’s UI.

## **References**

Relevant links and helpful information about the project and its tech stack

Git Hub:

- GitHubproject: \<TBD\>

Node.js is the Package manager

- Node.js: https://nodejs.org/en/about/

Test Framework Mocha

- Mocha: https://mochajs.org/

Assertion Library Chai

- Chai: https://www.chaijs.com/

Testing automation framework

- Webdriver IO: https://webdriver.io/
- Selenium Web Driver IO (WDIO): https://webdriver.io/docs/selenium-standalone-service/

3rd Party driver for execution:

- Chreomdriver: https://webdriver.io/docs/wdio-chromedriver-service

## **QA Deliverables**

What artifacts will QA will provide to the team (eg, Test Strategy, Sample Test Plan, Bug reports)

- Test Strategy
- Feature Template
- Automation Guide
- Test Case Template
- Use Cases

## **Test Management**

What resources are used to carry out testing in terms of tooling, environments, supported platforms
and versions, and test data.

- Selenium Webdriver.io (WDIO)
- Chromedriver
- Docker is used to set up Ontrack Locally (if required)
- Test Runs TBD

### **Examples**

- Jenkins is used to build test versions of the application off of master and PRs
- VMs are used to test the applications in Windows
- Test runs are input in Testpad to make it clear what scenarios were tested and if those scenarios
  pass or fail
- Supported operating systems are Windows 7 and 10 and Mac
- Test data will include user accounts

## **Scope of Testing**

What types of tests exist for this project?

- There are existing unit test written in minitest by back end devs
- No current UI or manual testing exists

## **Potential Enhancements**

Git hub actions:

- This seems to be avaliable to use with WDIO more infor can be found here:
  https://webdriver.io/docs/githubactions/

Test case management systems:

- As no current test cases have been created we need to decide on if we implement a manual markdown
  statergy or look to use an external application to help store and manage test runs. Examples:

Testiny: https://www.testiny.io/#pricing (Unlimited users for opensource projects)

Tarantula: http://www.tarantula.fi/old/?r=qal-ostmt (open source, but uneeded execution
features,also bulky UI/UX with logins)
