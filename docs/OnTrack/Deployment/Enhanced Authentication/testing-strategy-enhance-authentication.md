# Testing Strategy for Enhance Authentication

[Introduction](#introduction)

[Overview of Deliverables to be Tested](#overview-of-deliverables-to-be-tested)

[References](#references)

[Test Management](#test-management)

[Scope of Testing](#scope-of-testing)

---

## Introduction

This testing strategy describes the features and artifacts that the Enhance Authentication team will
be contributing to the OnTrack architecture, particularly focusing on the specifics regarding the
testing of these elements once developed. Conducting testing according to this Testing Strategy is
paramount to ensure that the created elements are functioning as expected before they are added to
the main OnTrack GitHub repository and associated Docker containers for deployment.

## Overview of Deliverables to be Tested

As part of the development of elements conducted by the Enhance Authentication team, the following
features will be created and will require testing:

- Extend the current features within the OnTrack API to allow for user management to be achieved
- Add a feature to allow users and admins to change user passwords, facilitating users being able to
  request admin to change the user’s password due to it being forgotten
- Add a Devise LDAP server option to facilitate in-house authentication of users of the OnTrack
  system

These features, once functioning, will be the deliverables of the Enhance Authentication team.
Additionally, this testing strategy will also be a deliverable, as will any research documentation
conducted in the process of implementing these features.

## References

The following resources are relevant to the work that is to be done by the Enhance Authentication
team.

Links to resources used for as part of development and testing:

- GitHub: https://github.com/
- Visual Studio Code: https://code.visualstudio.com/
- Docker: https://www.docker.com/

Links to the relevant OnTrack repositories which will be accessed and altered by the team to
implement the new authentication features:

- Doubtfire-Web: https://github.com/thoth-tech/doubtfire-web
- Doubtfire-Deploy: https://github.com/thoth-tech/doubtfire-deploy
- Doubtfire-API: https://github.com/thoth-tech/doubtfire-api

Links to resources describing the coding languages used:

- Ruby-on-Rails for updating of the API to add new features: https://rubyonrails.org/
- Angular/Typescript for front-end development: https://angular.io/start

Links to resources relevant to the Devise LDAP server:

- GitHub repo for Devise: https://github.com/heartcombo/devise
- GitHub repo for a Devise LDAP authentication module:
  https://github.com/cschiewek/devise_ldap_authenticatable
- Research documentation regarding how to implement the server solution:
  https://github.com/thoth-tech/documentation/blob/main/docs/OnTrack/Deployment/Enhanced%20Authentication/Research%20%26%20Findings/LDAP-and-devise-research-documentation.md

## QA Deliverables

As part of the processes to provide Quality Assurance within our deliverables, the following
artifacts will be produced in line with our development processes:

- Testing Plan: This is official recording and documentation of the processes undertaken as part of
  the testing phase. Included within the testing plan is details of each specific test undertaken on
  a developed feature, and documents the test number, scenario, inputs, and the expected versus
  actual results. This allows for our team to ensure that the final testing outcomes meet all
  requirements and expectations of the deliverables, and allows the testing processes and outcomes
  to be viewed and understood by others, both within the team and wider company. A template of the
  Thoth Tech Testing Plan can be found here:
  https://github.com/thoth-tech/handbook/blob/main/docs/processes/quality-assurance/templates/test-plan-template.md
- Test Case documentation: This is an official recording of the details regarding a specific testing
  scenario and will be different depending on the feature to be tested (for example, the Test Case
  for the extension of the API management features will be different from that of the LDAP Devise
  Server). The Test Case includes further details regarding the environment which the testing was
  conducted (including details regarding operating systems and versions of software) and the
  sequence of steps which were performed to create the test and implement it. Overall, this
  documentation provides detail into the specifics of each test on the developed features, including
  suffice detail for others to understand the conditions of the testing process and, if applicable,
  to replicate the test themselves. It is closely linked to the information recorded within the
  Testing Plan.

## Test Management

This section outlines the resources that will be used during the testing processes for the API user
management extension and the integration of a Devise LDAP server into the OnTrack architecture:

- GitHub will be used to facilitate version control of the tests developed
- Visual Studio code will be used to create tests relevant to both the user management/API extension
  and the Devise LDAP server integration, ensuring that all components of the expected functionality
  are tested
- Ruby-on-Rails will be used to create tests for functionality of features integrated within the API
- The data used within the testing will be users and data that have been created specifically for
  the testing processes. The functionality of the users and their data simulate the real users and
  data of the OnTrack system to facilitate realistic testing without effecting the actual users
  during the testing phase
- Docker will be used to build the OnTrack environment to allow for testing to be conducted within
  it, and to view the effects of the added features on how the environment runs

## Scope of Testing

This section outlines the type of tests which exist within the OnTrack project.

- There are API test files and processes written in Rails which already exist which are relevant to
  testing other processes within the OnTrack system. While these tests are not able to be used for
  our testing purposes, they do provide examples of how to write the testing processes and provide
  sample user accounts and data which can be utilised within the testing of our features
- New testing processes will be written by the Enhance Authentication developers as part of the
  development and testing phases, based on pre-existing test files within the OnTrack architecture
  and using some of the testing processes that have already been developed
- Regarding the Devise LDAP server, the respective GitHub pages for these technologies (referenced
  above) also include processes for testing their implementation. These guidelines may also be
  consulted within the testing phases, especially in the earlier parts of interacting with these new
  technologies
