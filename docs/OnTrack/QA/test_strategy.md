# **User Interface Test Strategy QA OnTrack**

## **Introduction**

### A high-level summary of the project:

This strategy outlines the Quality Assurance (QA) that is provided to the OnTrack project. The scope
of UI testing as well as how testing is structured. The aim is to ensure quality is also ensured to
the end user when interfacing with OnTrack's UI.

## **References**

Relevant links and helpful information about the project and its tech stack

Git Hub:

- Automation: https://github.com/thoth-tech/OnTrack-UI-Automation
- Quality Assurance Documentation:
  https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/QA

Node.js is the Package manager

- Node.js: https://nodejs.org/en/about/

Test Framework Mocha

- Mocha: https://mochajs.org/

Assertion Library `Chai`

- `Chai`: https://www.chaijs.com/

Testing automation framework

- `WebdriverIO (WDIO)`: https://webdriver.io/
- Selenium with `WebdriverIO`: https://webdriver.io/docs/selenium-standalone-service/

3rd Party driver for execution:

- ChromeDriver: https://webdriver.io/docs/wdio-chromedriver-service

## **QA Resources**

What artifacts does QA provide to the team (E.g Test Strategy, Sample Test Plan, Bug reports)

- Test Strategy (this document)
- Feature Template
- Automation Guide
- Test Case Template
- Use Cases

## **Test Case Template**

These is a template provided in this repository for the creation of test cases. These contain the
following: See the example given below.

1. Test Case ID: Reference that should also be used in Automation
2. Test Case : Title which is the same as in the Test Case
3. Automated (Y/N): Status of if the test case has been automated or is still manually executed
4. Pre-Condition: Anything that would must be set up for this case to pass should be listed here.
5. Test Data: Any data i.e Usernames, Passwords, Subjects, Tasks should be listed here. This allows
   test steps to be reused without having to edit specifics.
6. Steps: Outlined step-by-step the actions the user should take to test a give case.
7. Expected Result: This ties in with the steps and outline what result the user should expect at a
   given step.

### Structure

Test Case ID, Test Case, Automated, Pre-Condition, Test Data, Step 1, and Expected Result 1 should
be on the first line. After this Steps and Expected result are on the new lines until the next case
starts.

### Test Case Example

| Test Case ID  | Test Case                     | Automated (Y/N) | Pre-Condition                  | Test Data                                                             | Steps                              | Expected Result                                |
| ------------- | ----------------------------- | --------------- | ------------------------------ | --------------------------------------------------------------------- | ---------------------------------- | ---------------------------------------------- |
| Test_Case_001 | Test User can log in          | N               | User A must exist in system    | User A Username:test1, User A Password:Password123                    | 1. Open OnTack login Page          | Username and Password field should be present  |
|               |                               |                 |                                |                                                                       | 2.Enter Username for User A        | Username should enter successfully             |
|               |                               |                 |                                |                                                                       | 3.Enter Password for User A        | Password should enter successfully             |
|               |                               |                 |                                |                                                                       | 4. Select Login                    | User A should be successfully logged in        |
| Test_Case_002 | Administrator User can log in | N               | `admin_1` must exist in system | Administrator Username: `admin1`, Administrator Password: Password123 | 1. Open OnTack login Page          | Username and Password field should be present  |
|               |                               |                 |                                |                                                                       | 2.Enter Username for Administrator | Username should enter successfully             |
|               |                               |                 |                                |                                                                       | 3.Enter Password for Administrator | Password should enter successfully             |
|               |                               |                 |                                |                                                                       | 4. Select Login                    | Administrator should be successfully logged in |

## **Test Case List**

There is a Test Case List to show all test cases created and if they are automated or still in
manual execution. An Example and a breakdown of the contents is below:

1. Title: Same as the title in the case itself. It give overall context to the case
2. ID #: Test Case ID that is mirrored in the Test Case (And if automated should be used as
   AutomationID)
3. Reference: Reference to the file that the Test Case is in (Mirrored in TestCase.md and in the
   automation folder)
4. Automated (Y/N): Is the test case automated. Automated = Y, Manual = N

### Test Case List Example

| Title            | ID #                                               | Reference                | Automated (Y/N)    |
| ---------------- | -------------------------------------------------- | ------------------------ | ------------------ |
| (Title of case)  | (Test case ID same as in test case and automation) | (File Test Cases are in) | (Automated or Not) |
| Login as Student | Student-001                                        | StudentLogin             | Y                  |

## **Testing Tools**

What resources are used to carry out testing in terms of tooling, environments, supported platforms
and versions, and test data.

- Selenium Webdriver.io
- ChromeDriver
- Docker is used to set up OnTrack Locally (if required)
- Use Case Template
- Test Case Template
- Test Plan

## **Scope of Testing**

What types of tests exist for this project?

- No current UI or manual testing exists

## **Potential Enhancements**

Git hub actions:

- This seems to be available to use with `WDIO` more information can be found here:
  https://webdriver.io/docs/githubactions/

Test case management systems:

- There is room to move to a complete system for Test Case management and Bug Tracking. This should
  be looked at in the future.

Examples:

`Testiny`: https://www.testiny.io/#pricing (Unlimited users for open-source projects)

`Tarantula`: http://www.tarantula.fi/old/?r=qal-ostmt (open source, but un-needed execution
features,also bulky UI/UX with logins)
