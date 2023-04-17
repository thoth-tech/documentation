[Back to Index](Index.md)

# 2022 T3 Hand-Over Document

## Purpose of Document

The purpose of this document is to explain to future collaborators of this project what has been
accomplished. This document is a guide for future collaborators, on what their next course of action
ought to be.

## State of Project When Received

- Several key stakeholders had been identified.
- Several features had been derived from the stakeholder personas.
- Two designs had been handed to us.
- A so-called "back-end emulator" and "front-end simulator" was handed to us, which was supposed to
  be an educationally assistive technology.

## State of Project at Hand-Over

- The so-called "back-end emulator" and "front-end simulator" were redefined as an API, the
  "`chathistorydisplayer-api`" application, and a web interface geared towards testing the API, the
  "`chathistorydisplayer-web`" application.
  - The `chathistorydisplayer-api` application is located in the directory called `emulator` in the
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer)
    repository.
  - The `chathistorydisplayer-web` application is located in the directory called
    `frontEndSimulator` in the
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer)
    repository.
- The `chathistorydisplayer-api` application had its containerisation refactored.
- The `chathistorydisplayer-web` application was containerised.
- `Docker Compose` was integrated and configured to handle spinning up both the
  `chathistorydisplayer-api` and `chathistorydisplayer-web` applications.
- Quality of life features were integrated into the `chathistorydisplayer-api` application. Namely,
  a static code analyser and linter (`rubocop`) and a testing suite (`RSpec` and `Capybara`).
- 83 offenses in the `chathistorydisplayer-api`, as detected by the newly integrated static code
  analyser, were fixed manually.
- The `chathistorydisplayer-api` application was altered to facilitate the creation of user
  directories, project directories, and write files from JSON payloads. In comparison, it formerly
  only created user directories and initialised those are git repositories. The back-end team deemed
  it appropriate to change this, so that each project is handled as a git repository; this will
  allow each project to have its history queries for integration into a chat interface.
- An API end-point was created in the `chathistorydisplayer-api` application to fetch the most
  recent `git diff` of a file.
- API end-points were created in the `chathistorydisplayer-api` application to handle the deletion
  of user directories, project directories, and files in project directories.
- A diagram, which acts as a proposition, was created on how the
  [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/) may be
  integrated into [thoth-tech/doubtfire-api](https://github.com/thoth-tech/doubtfire-api).
- The `chathistorydisplayer-web` application had a React component library integrated and it was
  then leveraged. This resulted in a visual overhaul of the web application.
- The `chathistorydisplayer-web` application had visual buttons created for the deletion of user
  directories, project directories, and files in project directories.
- The `chathistorydisplayer-web` application had `Javascript` events integrated into the text input
  fields, so that it would be clearer what variables were set to during testing.
- The `chathistorydisplayer-web` application had `Javascript` events integrated into the buttons, so
  that appropriate API end-points were called.

## What Next?

- Read [Project On-boarding](Project-On-Boarding.md)
