# Requirements Document: OnTrack - Staff Grant Extension Feature

## 1-Introduction

The purpose of this document is to outline the requirements for the implementation of the "Staff
Grant Extension" feature in the OnTrack (also known as Doubtfire). This feature aims to empower
staff members to grant extensions to students, even in cases where there are no formal extension
requests within the system.

## 2-Use Case

### 2-1-User Story

As a staff member, I want to be able to grant extensions to students, even when no formal extension
requests are submitted through the system. This allows me to accommodate special circumstances that
may have been communicated through other means.

### 2-2-Acceptance Criteria

- Staff members can initiate extension requests for specific students.
- Staff members can specify the duration of the extension.
- Extension requests initiated by staff members are recorded in the system for future reference.
- Students receive notifications about granted extensions.

## 3-Functional Requirements

### 3-1-Frontend Functionality

#### _3-1-1-Grant Extension Form_

- A new option should be added to the staff dashboard or relevant pages for granting extensions.
- The form should include fields for selecting the student, entering the extension duration, and
  adding any relevant notes.
- The reason for the extension to be granted.
- The medium the extension was requested (if not formal).
- An interface to search for and select students should be provided.

#### _3-1-2-Notifications_

- Students should receive notifications via email or within the system when a staff member grants an
  extension.
- Notifications should include details about the granted extension and its duration.

### 3-2-Backend Functionality

#### _3-2-1-Extension Record_

- An extension record should be created and associated with the student, the staff member initiating
  the extension, and the specified duration.
- Extension records should be viewable by both staff members and students.

## 4-Technical Requirements

### 4-1-Technology Stack

The "Staff Grant Extension" feature should be implemented using the existing technology stack of the
Doubtfire system.

- Frontend: Angular and Tailwind CSS
- Backend: Ruby on Rails

### 4-2-Data Management

- Extension records should be stored in the system's database, associated with the relevant student
  and staff member.

### 4-3-User Authentication and Authorisation

- Only authorised staff members should have access to the "Grant Extension" functionality.
- Appropriate access controls should be implemented to ensure data security.

## 5-Non-Functional Requirements

### 5-1-Usability

- The user interface for granting extensions should be intuitive and user-friendly, requiring
  minimal training for staff members.

### 5-2-Performance

- The feature should be responsive and provide a seamless experience for staff members, even during
  periods of high system usage.

## 6-Future Considerations

- Integration with existing extension request workflows, if applicable.
- Ability to generate reports on granted extensions for administrative purposes.

## 7-Testing

### 7-1-Test Cases for Backend Extension Granting Endpoint

#### _Test Case 1: Successful Extension Granting_

Description: Verify that a staff member can successfully grant an extension to a student.

Steps:

1. Authenticate as a staff member.
2. Access the "Grant Extension" functionality.
3. Select a student.
4. Enter a valid extension duration.
5. Submit the form.

Expected Outcome: The extension is granted, and a new extension record is created in the database.
The student receives a notification, and the staff member can view the granted extension details.

#### _Test Case 2: Invalid Extension Duration_

Description: Test the system's response when a staff member enters an invalid extension duration.

Steps:

1. Authenticate as a staff member.
2. Access the "Grant Extension" functionality.
3. Select a student.
4. Enter an invalid extension duration (e.g., a negative value or non-numeric input).
5. Submit the form.

Expected Outcome: The system displays an error message indicating that the entered duration is
invalid. No extension record is created.

#### _Test Case 3: Unauthorised Access_

Description: Verify that unauthorised users cannot access the "Grant Extension" functionality.

Steps:

1. Attempt to access the "Grant Extension" functionality without proper authentication as a staff
   member.

Expected Outcome: The system denies access and displays an appropriate error message.

#### _Test Case 4: Notification Sent to Student_

Description: Check if the student receives a notification when an extension is granted.

Steps:

1. Authenticate as a staff member.
2. Grant an extension to a student.
3. Verify the student's notifications.

Expected Outcome: The student receives a notification indicating the granted extension and its
duration.

### 7-2-Running Tests and Interpreting Results

#### _7.2.1. Running Tests_

1. Ensure the backend development environment is set up and functional.
2. Open a terminal/command prompt.
3. Navigate to the project's backend directory.
4. Run the test suite using a testing framework.

#### _7.2.2. Interpreting Results_

1. If all tests pass, you will see a success message(s).
2. If any test fails, you will see a descriptive error message indicating the test that failed and
   the reason for failure.

#### _7.2.3. Troubleshooting_

1. If tests fail, review the error messages and stack traces to identify the issue.
2. Check the backend code related to the failing test to diagnose and fix the problem.
3. Rerun the tests after making changes to verify that the issue has been resolved.

## 8-Conclusion

The "Staff Grant Extension" feature enhances the flexibility and responsiveness of the OnTrack
learning management system by allowing staff members to grant extensions to students based on
individual circumstances. This document outlines the functional, technical, and non-functional
requirements for the successful implementation of this feature. Thorough testing of the backend
extension granting endpoint ensures that the "Staff Grant Extension" feature functions as expected.
The test cases cover various scenarios, including successful extension granting, error handling, and
notifications. Running the tests and interpreting the results helps identify and address issues
before deploying the feature to production.
