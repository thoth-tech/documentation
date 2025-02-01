## CI/CD Pipeline Integration with GitHub Actions

**Author:** Ayan Masood, [amasood@deakin.edu.au](mailto:amasood@deakin.edu.au)

**Introduction**

Integration of a continuous integration (CI) and deployment (CD) pipeline involves automation of
different processes such as building, testing and deploying of code and/or documentation. This
process ensure that code quality remains consistent and overall collaboration is more polished and
refined due to error and bug identification.

**Creating a Configuration File (Workflow File)**

To define checks related to this process to allow for automation a configuration file containing all
identified checks needed for this project should be defined. This file contains different
preexisting tools the team can use to perform tests on incoming code/documentation when merging data
into the repository through a push request. The configuration file has to be included inside the
main repository in a specific location to allow for automatic integration to the project. This can
also be customized to run on any type of event; pull, push or commit due to it allowing easy
modification of steps and processes.

**Using Templates**

The user can also create CI/CD workflows by using provided template by GitHub Actions. This contains
different tests already coded to perform various activities and can be easily modified to be used
for project purposes. Each template comes with predefined steps for common tasks like building,
deploying, testing, etc. These tests can be used to simplify implementation as well as reduce the
time taken for added new steps in the configuration file.

**Tests required in Pipeline**

- Code and Documentation Style

Ensure consistent layout of code and documentation throughout the project.

- Security Tests

Test for any threats or vulnerabilities in code provided.

- Compatibility Errors

Help to review any issues with compatibility of code being input

- Performance Optimization

Evaluate performance and find areas of optimization.

- Integration Tests

Check to see provided resources are able to interact with integrated parts of the system (API’s,
Databases, etc.)

- Deployment Tests

These relate to all resources which affect deployment of application to ensure every change which
directly affects the application is of standard and no compilation errors occur.

**Conclusion**

Through incorporating CI and CD into the project automation of tests and identification of errors
can be simplified. It minimizes the need for manual testing allowing for less code related errors
and troubleshooting time required. This helps to develop and commit constant changes to the
application.
