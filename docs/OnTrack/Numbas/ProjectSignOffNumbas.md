# Project Name: Numbas Integration

## Delivery Lead: Daniel Maddern

## Student Name: Daniel Maddern

## Clients: Julien, Andrew, Jake

## **Scope**

The purpose of this project is to integrate Numbas testing into Ontrack. With the aim for a test to
be presented to the student on submission of a task, prior to submitting reflections or other
required documents. The aim is to be able to let the Unit Chair import, setup and assign tests to
the tasks. Also for students to be able to complete tests as part of the submission process.

## **Outcomes**

This project will be deliverying:

- A project scope for the clients to sign off on.
- A feasiblity study of the ways this can be implemented.
- A rough design document including:
  - Rough hand drawn design documents for how this intergration will work.
  - A data flow diagram of how different data will be accesssed and encapsualted.
  - Diagrams showing model changes to the core model
  - Backend coding changes to accomodate and store the tests.
  - Front end code to support the changes from the Unit chair and student view.
- Unit tests to ensure features work as expected

## **Delivery**

### Features

- Deliverables
  - Design document - sketches of new UI, model changes, API changes
  - Web and API changes
- Features
  - Unit chairs can upload Numbas tests to a task definition
  - Unit chairs can validate that the test works
  - Unit chairs can set the required pass level for the test
  - Unit chairs can set the number of attempts before test needs to be reset by a tutor
  - Unit chairs can set the delay between attempts to be a set number of minutes, or a built-in
    increasing delay
  - Students are required to pass the test before they can submit work for feedback
  - Students can view their test attempts (can unit chairs disable this?)
  - Tutors can view student test attempts
  - Tutors can reset student tests to enable additional attempts - or require resit on resubmission
  - Test results are included in the portfolio when generated

There will need to be a means to upload the test files that are created locally via Numbas. An
Addtional window after "requesting feedback" on a task that will present the test, this will then
either take you to the next stage if you pass or go back to the task screen if you do not pass.

There will need to be a configuration section within the Unit chair task setup page.

We will provide different options for the test setup such as:

1: Restricted / Unlimited test attempts 2: Delays in test attempts - minutes, or built-in
increamenting delay

We will also need to either enable or disable a test.

**Student View** ![StudentView](StudentView.jpg "Student View Design")

**Unit Chair View** ![UnitChair](UnitChair.jpg "Unit Chair Design")

**Data Flow Design** ![DataFlow](DataFlow.jpg "Data Flow Design")

In terms of the changes we will require, we will need a new table in the DB to store the tests.

We will need to create a new API and model to transfer the test data between the front and the back
end.

We will need to create a new service and model in Angular to accomodate this, we will also need to
adjust the existing services such as Unit/Tasks to include the test objects for a student user.

Then we will need to create a new componente for taking the test, as well as adjust the Unit Chair
Task Setup component to include the new settings as per the design above.

## **Sign Off:**

Delivery Lead Signature:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Team Member Signature:
\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Client Signature: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
