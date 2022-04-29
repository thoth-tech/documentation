# Software Requirements Specifications Document

### Voice Verification for OnTrack Delivery

# Product Purpose

The purpose of the Voice Verification System for OnTrack is to add the ability for Voice Samples
that are submitted to OnTrack to undergo a verification process to ensure that the speaker in the
sample is the same as the person taking part in the unit. Specifically, this is to identify when a
student is contract cheating, or if the person in the specific submission is also the person
undertaking the unit.

The intended audience for this project is the users of OnTrack; both students for using the system
to submit and verify their own audio files, as well as Tutors, who would be able to see the results
of the verification and verify that the student has undertaken the task themselves.

The systems intended use is for the verification of Audio files that are submitted as part of Deakin
assessments to OnTrack, to further verify that the student has done the work themselves and is not
taking part in cheating; more specifically, to verify that the student has not hired someone else to
do the task for them, as is the case with Contract Cheating.

The ccope of the project is to verify and validate a Python Container that can compare two voice
samples and give the confidence level that the person speaking is the same in both voice samples.
This requires a deployment to a testing system, as well as deployment to the OnTrack staging
platform for Thoth Tech.

# Description of overall System

## User requirements

The user requirements of the system are that the system needs to be usable by both Students and
Tutors. These requirements include:

- Ability to submit voice files for Enrolment and Verification
- Attainment of results for Students and Tutors to show the validity of the voice file in the
  context of the assessment.
- Ease of use
- Secure system

These requirements are mainly focused on the user experience, and how the user will interact with
the system.

## Assumptions and Dependencies

This system has a few assumptions. These include:

- Users has access to OnTrack and a valid internet connection

- Students do submit an enrolment voice file for later comparison.
- Tutors use the system whenever a voice submission is required.
- The same person is speaking throughout the entirety of the voice files.

Each of these assumptions is important for the use and requirements of the system. The system should
be able to deal with multiple requests in quick succession, be actively deployed to the OnTrack
System, and have strict requirements for the initial voice file.

Furthermore, a few different aspects are relied upon for the project to function. These include:

- OnTrack as a deployment platform
- Deployment of the full connected system (OnTrack, plus API, and the Python Container)

These assumptions are that OnTrack is used as the deployment platform for the voice verification
system, mainly as this is where it is being more properly integrated and developed for.
Additionally, for OnTrack to function correctly, the full system (Frontend and API) needs to be
deployed and using the Python Container effectively.

# System Requirements

## Functional Requirements

The functional requirements of the system are as follows:

- The system should be able to accept an enrolment voice file for later comparison.
- The system should be able to accept a new voice file to validate against the enrolment file.
- The system should return readable results to the users (Both Student and Tutor).

## Interface Requirements

The interface for the system will be entirely within the OnTrack platform. As such, it will have the
following requirements:

- The system&#39;s interface should be following the same format and design as other sections of the
  OnTrack Platform.
- The system should be easy to use for both Tutors and Students.
- The system should return results in a readable way and be clear about the results of the
  verification.

## Hardware Interfaces

This project is completely software based.

## Communication Interfaces

A basic internet connection is required to view the site.

## Software Interfaces

The speaker verification system includes the following components:

- A Python library for audio file validation (Python 3.8)
- Speaker Verification API: contain the backend RESTful API implemented in Django and Python
- Doubtfire and Speaker Verification Integration: Ruby app that integrates the Speaker Verification
  API with OnTrack (Doubtfire LMS) via RabbitMQ queue
- Docker-compose: contain the most likely setup for development setups

## System Features

The system mainly focuses on the verification of voice files. As such, the features of the system
are as follows:

- The system will accept voice files for the enrolment of a student in a Unit.
- The system can accept new voice files to verify that the same student is speaking in both files.
- The system will compare two voice files and produce a confidence rating, outlining how confident
  it is that the speaker is the same in both voice files.
- The system will return the results to the Tutor and Student to ensure that the users are aware of
  the outcome of the verification.

## Non-functional requirements.

The non-functional requirements of the system largely revolve around the data storage and security
of the system. These include:

- The system will only keep track of Enrolment files, for later verification use.
- The system will not store voice files for submission and verification.
- The system will be secure.
- The system should be easy to use.
- The system should be in line with other OnTrack systems.

## Definitions, Acronyms, Abbreviations

- Docker: a simple container that specify a complete package of components needed to run your
  software, or an application build and deployment tool
- RabbitMQ: a message-queueing software also known as a message broker or queue manager. It is
  software where queues are defined, to which applications connect in order to transfer a message or
  messages.
- Python Library: a library is a collection of pre-written code in Python language that provide
  further access to system
- Ruby On Rails: a server-side web application framework written in Ruby.
- Backend: development that happens behind the scenes, it is all the parts of a computer system or
  application that is not directly accessed by the user, it is responsible for storing and
  manipulating data through code (language use: Python, Ruby)
- Frontend: development on what the user can see and/or directly interact with (language uses:
  Angular JS and TypeScript)
- API: Application Programming Interface
