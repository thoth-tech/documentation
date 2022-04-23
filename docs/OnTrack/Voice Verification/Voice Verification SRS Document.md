# Voice Verification - Software Requirement Specification (SRS) - V.1.0

## 1. Introduction

### 1.1 Purpose

- The purpose of this system is to ensure the code written thus far by team members sufficiently
  complete the two key functionalities of a Voice Verification on Doubtfire include Enrolment which students can register their voice and Verification that will verify the attached voice file when a task submission is received. The successful implementation will ensure the team is on the right track in terms of both project's goal and their coding work.

### 1.2 Intended Audience

- Students
- Teachers/Tutors/Assessors

### 1.3 Intended Use

- The intended use of this system is to mitigate cheating attempts and plagiarism of the current audio submissions  functionality on the OnTrack product. It will first allow student to enroll their voiceprints and when students submit a task submission by audio, the voice authentication system can verify student and showing the verification results to an assessor, or through flagging the submission.

### 1.4 Scope

The scope of the project continue develope components that the previous teams have worked on for the following functionalities:
 - A Proof-of-Concept integration of Speaker Verification on Doubtfire.
 - Enrolment: Students can register their voice 
 - Verification: When a task submission is received, verify the attached voice file 
 - Deployed to the Thoth Tech OnTrack instance 


### 1.5 Definitions and Acronyms

- Docker - a simple container that let's you specify a complete package of components needed to run your software, or an application build and deployment tool
- RabbitMQ - a message-queueing software also known as a message broker or queue manager. Simply said; it is software where queues are defined, to which applications connect in order to transfer a message or messages.
- Library – A library is a collection of pre-written code that provide further access to system
  functionality such as file I/O that would otherwise be inaccessible. This is done importing the
  library at the beginning of the program.
- RubyOnRails – a server-side web application framework written in Ruby.
- Backend – Is development that happens behind the scenes, it is all the parts of a computer system
  or application that is not directly accessed by the user, it is responsible for storing and
  manipulating data through code (language use: Python)
- Frontend – Is development on what the user can see and/or directly interact with (language uses: Angular JS and TypeScript)

## 2. Overall Description

### 2.1 User Needs

- As a student, I want to be able to enrol my voice on the Ontrack system
- As a assessor, I want to see the verification result on student's audio submissions for confirming their identity.

### 2.2 Assumptions and Dependencies

Assumptions include:
- The user has access to OnTrack.
- Key project member’s availability
- Key project member’s performance
- Key project member’s skills
- Dependencies include:
  - A valid internet connection, to interact with OnTrack environment

## 3. System Features and Requirements

### 3.1 Functional Requirements

- Enrolment: Student Voice Registration
- Verification: Confirming student's identity
- Compatibility with existing code

### 3.2 External Requirements

- Python library 
- RESTful API 
- Ruby app that integrates the Speaker Verification API with OnTrack (Doubtfire LMS) via RabbitMQ queue
- Forked repositories
- User interface (interaction logic between software and user)

### 3.3 System Features

- Basic front-end user interface for user to trigger logic
- Ability to save student's voiceprint
- Ability to verify student's voice

### 3.4 Non-functional Requirements

- Usability – User standards
- Scalability – ability of software to be scaled to encompass project scope in its entirety
- Maintainability – ability of software to be maintained, ensuring consistent and upmost performance
- Reliability – The ability of the system to consistently perform its required functions under
  stated conditions.
- Documentation – Architecture Documentation, Deployment Documentation, User Documentation (step-by-step guide on how to record voice for enrolment and verification), Testing Documentation

### 4. Open Issues
Issues that have been raised and do not yet have a conclusion in previous work. These issues will be addressed 
later in the development process
