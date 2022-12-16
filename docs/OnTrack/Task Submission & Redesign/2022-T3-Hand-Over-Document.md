[Back to Index](Index.md)

# 2022 T2 Hand-Over Document

## Purpose of Document

The purpose of this document is to explain to future collaborators of this project what has been
accomplished. This document is a guide for future collaborators, on what their next course of action
ought to be.

## State of Project When Received

- Several key stakeholders had been identified.
- Several features had been derived from the stakeholder personas.
- Two designs had been handed to us.
- A so-called "back-end emulator" and "front-end simulator" was handed to us, which was supposed to be an educationally assistive technology.

## State of Project at Hand-Over

- The so-called "back-end emulator" and "front-end simulator" were redefined as an API and a front-end for test-related purposes.
- The back-end team integrated quality of life features into the [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/) application (containerisation, container orchestration, a static code analyser, linter, and a testing suite).
- The back-end team fixed 83 offenses manually, as determined by the newly implemented static text analyser.
- The back-end team altered the [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/) API to create user directories and project directories, initialise project directories as git repositories, create files from a JSON payload (for text files), collect the git difference of a file created from a JSON payload, and commit files created from JSON payloads to the local git history of a project repository.
- The back-end team created a proposition for how the [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/)'s API (`chathistorydisplayer-api`) may be integrated into OnTrack.

## What Next?

- Read [Project On-boarding](Project-On-Boarding.md)
