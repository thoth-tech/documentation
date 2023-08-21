# Gather Requirements: Incorporate content in OnTrack

Author: Devanshi Patel

Company: Thoth Tech

## Introduction

This documentation outlines the requirements for implementing a feature called ‘Incorporate content
in OnTrack.’ This feature will be implemented in the OnTrack application. This feature aims to
provide better flexibility by allowing unit chair to add content in one place where it makes easier
for students to access both the content and the task sheet for the unit in one place.

## User Story

As an OnTrack unit chair I want to be able to host content within Ontrack and as a student I want to
able to access the content within Ontrack.

## Functional Requirements

### Backend

- Adjust the maria DB that are already in place.
- Keep all the record of when the unit chair adds content within Ontrack.

### Frontend

- Under the dashboard an interface should be added to the unit chair Ontrack screen that will allow
  them to add content and hide certain content.
- Under the dashboard an interface should be added in the student end that will allow them to view
  content.
- An interface should be added for searching relevant content.

## Non-Functional Requirements

### Performance

- The feature should run smoothly and provide the best experience for both students and unit chairs.

### Reliability

- The feature should be able to handle failures and should recover quickly.
- ``Additionally, the feature should perform without failure for 95% of use cases.

### Usability

- The user interface should be consistent with its navigation and the overall design.
- The user interface should be user-friendly.
- The feature should require only minimum training for Unit chair.

## Test cases

### Test Case 1: Add content within OnTrack

Description: Making sure that unit chair can add content in the system

Steps:

1. Open Ontrack
1. Go to Dashboard, click on add content.
1. Pick the files which you want to upload.
1. Pick the date you want to upload the content.
1. Click Host.

Expected outcome: Adding content is successful and now students will be able to view the content
within OnTrack.

### Test Case 2: Edit content within OnTrack

Description: Allow unit chair to edit the content within OnTrack.

Steps:

1. Access the content which needs editing.
1. Click on the content and start editing.
1. Click save once done.

Expected Outcome: New version will be uploaded in OnTrack which can be viewed by the student.

### Test case 3: Unauthorized Access

Description: Making sure that only unit chair can host the content within OnTrack.

Steps:

1. If anyone attempts to access the host content functionality without any authentication.

Expected Outcome: A error message will display on the screen.

### Test Case 4: Student can view content

Description: Making sure that students can view the content within OnTrack

Steps:

1. Login to OnTrack
1. Navigate to dashboard and click on content.
1. Start viewing certain content.

Expected Outcome: It will allow students to have access to the content which was added by the unit
chair. Additionally have the task sheet and the content in one place.

## Testing

- Setting up the environment for testing and ensuring that its functional.
- Opening terminal and navigate to the correct directory.
- Run the test.
- If all the tests are successful a message will display.
- If the tests are failed an error message will display, along with a description of why it failed.
- When troubleshooting, if the tests fail, review the error message, and identify what the issue
  might be.
- Rerun the tests to see if it solved the issue.

## Conclusion

To conclude, this new feature ‘Incorporate content in Ontrack’ will allow unit chairs to host
content within OnTrack. Which can be accessible by the students who are enrolled in the unit.
Therefore, this document outlines functional, non-functional requirements along with test cases
which can be used for testing the system amongst various scenarios. This document also outlines what
steps needs to be taken when performing the tests and how to handle issues when running the tests.
