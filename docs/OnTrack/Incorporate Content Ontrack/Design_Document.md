# Design Documentation: Incorporate Content in OnTrack

Author: Devanshi Patel

Company: Thoth Tech

## Introduction

This document outlines the design approach for the feature called ‘Incorporate Content in OnTrack.’
This feature will be implemented in Ontrack application, which is known as the main source for
course management system for students. This feature aims to provide better flexibility and
performance by allowing unit chair to host content within Ontrack for students to access. This
feature will not only enable unit chair to host content within OnTrack but also organise content,
search content and update content all within OnTrack. This design document will outline error
handling and validations, testing and technical aspects of the application.

## User Story

As a unit chair I want to host content within OnTrack and as a student I want to access the content
within OnTrack.

## Architecture

The feature ‘incorporate content in OnTrack’ will be smoothly added to the existing architecture of
the system. This architecture will have frontend and backend component which will uphold the feature
flexibility.

## Frontend Implementation

In the frontend, an additional button will be added under the dashboard for both unit chair and
students. For unit chair, the button will open the content page within OnTrack, which allow unit
chair to add content, and make any updates to the content which has been hosted. Additionally, unit
chair can set time and date to when the content should go live, which falls under the organise
content. For students, under the dashboard a new button will be added which will allow them to
access the content as well as search any content and lastly download relevant content to their
device.

### UI Integration

When building the application, make sure the design follows the Tailwind CSS, which can provide
better user-friendly experience. Additionally, use Angular component when adding the user interface
element in the application.

## Backend Implementation

Make changes to the API endpoint which validates user inputs, along with those API that allows unit
chair to host content, organise content, update content and also access permission. In terms of
student, make changes to API which allows them to access the content, download content and search
content.

### Database

Should keep a record of when unit chair add content and last made changes to the content. Use Maria
DB for data management.

### User Authentication

Make sure that only authenticate unit chair for certain unit is allowed to host the content.

## Database Design

- **Table:** Create a table called ‘ContentRecord’ which stores all the information about when the
  unit chair hosted content within OnTrack and when last modified.

**Column:**

- **Unit_chair_Id:** The unit chair who hosted the content.
- **time:** What time the content was hosted within OnTrack.
- **date:** The day the content was hosted within OnTrack.
- **Last_modified:** The date and time unit chair made changes to the content.

## Validation

- **Error messages:** Display error messages in its relevant place when unit chair puts irrelevant
  date for when the content should be seen on the OnTrack application.
- **API validation:** Validate that the input from the frontend is appropriate and that it meets the
  requirement.

## Exception handling

Ensure that server-side error is implemented in its place for handling errors that can occur during
the process. Additionally, keep record of the errors that occur during the process for debugging
purposes.

## Testing

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

## Deployment

Deployment plan will outline how steadily the new feature called ‘Incorporate Content in OnTrack’
will be introduced in the current system of OnTrack.

- Have a backup copy of the existing system for any risk that can occur during the deployment stage.
- Run testing for both frontend and backend to identify any issues.
- Ensure that the code follows the standards and its best practices.
- Make announcement to students and unit chairs about the new feature, along with any downtime when
  the deployment process is taking place.
- Include instructions for unit chair on how to use the new feature.
- Record the new feature during the first few days for any problems that can occur.

### Frontend Deployment

Deploy frontend into production server and ensure that the new feature is smoothly integrated into
the existing system.

### Backend Deployment

Deploy backend into production server and keep record of any errors that can occur during the
process of deployment. Additionally ensure that the new feature is smoothly integrated into the
existing system.

## Conclusion

The new feature ‘incorporate content in OnTrack’ will allow unit chairs to host content within
OnTrack, which will be accessible by the students. Additionally, it will allow unit chair to make
changes to the content that is already visible to the students, along with organising when certain
content should be make visible in the OnTrack application. This design documents outlines how the
feature will be integrated into OnTrack system. The design documents shows that performance,
reliability, and usability will be upheld for better user experience.

By incorporating this new feature within the existing OnTrack, allows students to view both the
content and task sheet for that unit in place, which upheld the flexibility aspect of this feature.
