# Design Document: OnTrack - Staff Grant Extension Feature

## 1-Introduction

This document outlines the design approach for integrating the "Staff Grant Extension" feature into
OnTrack, our learning management system. This feature empowers staff members to grant extensions to
students, even without formal requests. The purpose is to cater to unique situations that might
require tailored support.

The "Staff Grant Extension" feature enables staff to initiate extension requests, define durations,
and create extension records for students. The system automates notifications to students about
granted extensions, fostering transparent communication.

This design document covers technical implementation, user authentication, UI, error handling,
testing, and deployment aspects. It ensures the feature's smooth integration, responsiveness,
security, and scalability. The goal is to enhance OnTrack's adaptability and communication,
ultimately benefiting both staff and students.

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

## 3-High-level Architecture

The "Staff Grant Extension" feature seamlessly integrates into the existing architecture of the
OnTrack system. This architecture consists of both frontend and backend components, each
contributing to the feature's functionality and user experience.

### 3-1-Frontend Architecture

The frontend of the feature is designed to provide an intuitive and user-friendly interface for
staff members to initiate extension requests. The key components include:

- **Grant Extension Form:** Integrated into the staff dashboard, this form enables staff members to
  select a student, specify the extension duration, add relevant notes, and indicate the reason for
  the extension. A search interface allows easy student selection. This form is built using Angular
  and styled with Tailwind CSS for a consistent and responsive user experience.

- **Notifications**: The frontend also handles the notifications sent to students. Upon a staff
  member's extension grant, notifications are triggered. The frontend ensures these notifications
  are displayed to students, either through email or within the system.

### 3-2 Backend Architecture

The backend architecture focuses on processing extension requests, managing extension records, and
ensuring data security. Backend components include:

- **Extension Record Management:** When a staff member grants an extension, the backend stores
  extension records in the database. These records are associated with the student and staff member
  involved, along with the specified extension duration. Ruby on Rails, the backend framework,
  manages data interactions and database updates.

- **User Authentication and Authorisation:** The backend enforces user authentication to ensure that
  only authorised staff members can access the "Grant Extension" functionality. Access controls are
  implemented to secure data and maintain system integrity.

The collaboration between frontend and backend components ensures a cohesive user experience. Staff
members interact with the intuitive form at the frontend, triggering backend processes that record
extension data securely in the database. Meanwhile, students receive notifications regarding granted
extensions, enhancing communication and transparency.

This architecture underscores the feature's user-centric design, smooth integration with existing
systems, and adherence to best practices for security and usability. The separation of frontend and
backend responsibilities enables efficient development, testing, and maintenance, contributing to
the feature's overall success within the OnTrack system.

## 4-Technical Implementation

The implementation of the "Staff Grant Extension" feature involves both frontend and backend
development, utilizing the existing technology stack of the OnTrack system.

### 4-1 Frontend Implementation

#### _Grant Extension Form:_

The frontend implementation revolves around the creation of the "Grant Extension" form within the
staff dashboard. This involves the following steps:

- **UI Integration:** Integrate the form seamlessly into the staff dashboard using Angular
  components. Ensure its responsive design using Tailwind CSS, providing a user-friendly experience
  across devices.

- **Form Fields:** Implement form fields for selecting students, entering extension duration, adding
  notes, and specifying the reason for the extension. Create an interface for searching and
  selecting students efficiently.

#### _Notifications:_

The frontend is responsible for handling notifications sent to students:

- **Notification Trigger:** Upon extension grant, trigger the notification mechanism. Depending on
  student preferences, notifications are sent either via email or displayed within the system.

### 4-2 Backend Implementation

#### _Extension Record Creation:_

Backend implementation focuses on processing extension requests, managing extension records, and
ensuring secure data handling:

- **API Endpoint:** Create an API endpoint to handle extension grant requests from the frontend.
  Validate inputs, including extension duration.

- **Database Interaction:** Upon successful validation, store extension records in the database.
  Associate each record with the relevant student and staff member. Utilize Ruby on Rails' ORM
  (Object-Relational Mapping) for seamless data management.

#### _User Authentication and Authorisation:_

Implement user authentication and authorisation to secure the feature:

- **Authentication:** Leverage existing authentication mechanisms to ensure only authenticated staff
  members access the "Grant Extension" functionality.

- **Authorisation:** Apply access controls to authorise staff members based on their roles and
  permissions. This guarantees data security and minimizes unauthorised access.

The successful integration of the frontend and backend components ensures the seamless operation of
the feature. Staff members interact with the frontend form, which triggers backend processes to
store extension records and handle notifications. This technical implementation enhances the OnTrack
system's capabilities, enabling staff members to provide individualized support to students and
fostering efficient communication within the platform.

## 5-Database Design

The database design for the "Staff Grant Extension" feature revolves around efficiently storing
extension records and maintaining the associations between students, staff members, and granted
extensions.

### _Extension Records:_

- **Table:** Create a new table named "ExtensionRecords" to store extension-related information.
- **Columns:**
  - **id:** Unique identifier for each extension record.
  - **student_id:** Foreign key referencing the student associated with the extension.
  - **staff_member_id:** Foreign key pointing to the staff member who granted the extension.
  - **duration:** The duration of the extension in days or hours.
  - **reason:** The reason provided for granting the extension.
  - **created_at:** Timestamp indicating when the extension record was created.

### _Associations:_

- **Student and Staff Member Associations:** Establish relationships between extension records,
  students, and staff members using foreign keys.
- **Extensions to Students:** Link extension records to the respective students they apply to.
- **Extensions by Staff Members:** Associate extension records with the staff members who granted
  the extensions.

This database design ensures efficient querying and retrieval of extension data, enabling staff
members to track granted extensions and students to view their extension history.

By adhering to this structured database design, the "Staff Grant Extension" feature effectively
maintains a historical record of granted extensions and establishes clear relationships between
students, staff members, and extension records. This architecture guarantees data integrity,
simplifies reporting and auditing, and contributes to the seamless operation of the feature within
the OnTrack system.

[UML - Staff Grant Extension](https://lucid.app/lucidchart/06237ce4-9cd9-4aad-838f-45bff2249059/edit?invitationId=inv_da8c9660-84a6-46a3-9690-f210fc5ceb8d)

## 6-User Interface Design

[UI - Staff Grant Extension](https://www.figma.com/team_invite/redeem/MRSQ5n3VRvoVqTm4Eu3sGc)

## 7-Error Handling and Validation

Error handling and validation are critical aspects of ensuring the robustness and reliability of the
"Staff Grant Extension" feature. The system must effectively handle user errors and input anomalies
while maintaining data integrity.

### Frontend Validation

- **Form Validation:** Implement client-side form validation to prevent invalid data from being
  submitted. Validate extension duration to ensure it's a positive numeric value.
- **Error Messages:** Display clear error messages next to the relevant form fields in case of
  validation errors. Inform users about the specific issue and guide them towards correcting it.

### Backend Validation

- **API Input Validation:** Validate the input received from the frontend at the backend. Ensure
  that the duration is a valid positive numeric value and that all required fields are provided.
- **Error Responses:** Return appropriate error responses if validation fails. Include relevant
  error codes and messages to guide developers in diagnosing and addressing the issue.

## Database Integrity

- **Foreign Key Integrity:** Ensure the integrity of foreign key relationships between extension
  records, students, and staff members. Reject extension creation if associated entities do not
  exist.
- **Data Consistency:** Maintain consistent data by validating the input against predefined rules
  and constraints. Avoid situations where data conflicts or contradictions arise.

## Exception Handling

- **Server-Side Errors:** Implement exception handling in the backend to catch unexpected errors
  during processing. Log these errors for debugging purposes and provide users with a friendly error
  message.

- **Client-Facing Errors:** Translate backend errors into user-friendly messages on the frontend to
  maintain a positive user experience.

By rigorously implementing error handling and validation mechanisms, the "Staff Grant Extension"
feature ensures that user inputs are accurate, data integrity is maintained, and users are guided
through corrective actions when necessary. This approach contributes to a seamless and
frustration-free experience for both staff members and students, enhancing the overall reliability
of the OnTrack system.

## 8-Testing Strategy

Ensuring the robustness, security, and performance of the "Staff Grant Extension" feature is
paramount. The testing strategy encompasses both backend and frontend components.

### 8-1 Backend Testing

The backend testing strategy involves validating the functionality, security, and data integrity of
the "Staff Grant Extension" feature.

### Test Case 1: Successful Extension Granting

- **Description:** Verify that a staff member can successfully grant an extension to a student.
- **Steps:**
  1. Authenticate as a staff member.
  2. Select a student.
  3. Enter a valid extension duration.
  4. Submit the form.
- **Expected Outcome:** The extension is granted, a new extension record is created in the database,
  and both staff and student receive notifications.

### Test Case 2: Invalid Extension Duration

- **Description:** Test the system's response when a staff member enters an invalid extension
  duration.
- **Steps:**
  1. Authenticate as a staff member.
  2. Access the "Grant Extension" functionality.
  3. Select a student.
  4. Enter an invalid extension duration.
  5. Submit the form.
- **Expected Outcome:** The system displays an error message, no extension record is created, and
  the form remains accessible for correction.

### Test Case 3: Unauthorised Access

- **Description:** Verify that unauthorised users cannot access the "Grant Extension" functionality.
- **Steps:**
  1. Attempt to access the "Grant Extension" functionality without proper authentication.
- **Expected Outcome:** The system denies access and displays an appropriate error message.

### Test Case 4: Notification Sent to Student

- **Description:** Check if the student receives a notification when an extension is granted.
- **Steps:**
  1. Authenticate as a staff member.
  2. Grant an extension to a student.
  3. Verify the student's notifications.
- **Expected Outcome:** The student receives a notification indicating the granted extension and its
  duration.

## 8-2 Frontend Testing

Frontend components will undergo testing to ensure a seamless user experience.

- **Form Validation Testing:** Validate the form's behaviour when inputs are correct and incorrect,
  ensuring error messages display appropriately.
- **Integration Testing:** Test the integration of the "Grant Extension" form into the staff
  dashboard, ensuring proper rendering and interaction.
- **Notification Testing:** Verify that notifications are triggered and displayed correctly for
  students.
- **Responsive Testing:** Test the form's responsiveness across various devices and screen sizes.

By executing comprehensive backend and frontend tests, we ensure the "Staff Grant Extension" feature
functions accurately, is secure from unauthorised access, and provides a seamless experience to
staff and students. Successful testing will lead to a reliable and user-friendly addition to the
OnTrack system.

## 9-Deployment Plan

The deployment plan outlines the steps to smoothly introduce the "Staff Grant Extension" feature
into the OnTrack system, ensuring minimal disruptions and optimal user experience.

### 9-1-Pre-Deployment Preparation

- Conduct thorough testing of both frontend and backend components, addressing any identified
  issues.
- Review and ensure that the codebase adheres to coding standards and best practices.
- Create a backup of the existing system and database to mitigate potential risks during deployment.

### 9-2-Deployment Steps

- **Database Migration:** Apply necessary database migrations to accommodate the new extension
  records.

- **Backend Deployment:** Deploy the backend changes to the production server. Monitor for any
  errors or anomalies during deployment.

- **Frontend Deployment:** Deploy the updated frontend components to the production server. Ensure
  that the new form and notifications are integrated seamlessly.

### 9-3-Post-Deployment Tasks

- **Data Migration:** If needed, migrate existing data to match the new database schema.
- **Testing:** Conduct thorough testing in the production environment to ensure everything works as
  expected.

### 9-4-Rollback Plan

- In case of unforeseen issues during deployment, have a rollback plan in place to revert to the
  previous version of the system.

### 9-5-Communication

- Notify staff members and users about the upcoming feature addition and any potential downtime
  during deployment.
- Communicate the benefits and functionality of the "Staff Grant Extension" feature to encourage
  user adoption.

### 9-6-Monitoring and Support

- Monitor the system closely during the initial days after deployment to detect any unexpected
  behaviors.
- Provide quick response and support to address any user issues or inquiries related to the new
  feature.

### 9-7-Documentation Update

- Update user documentation, guides, and tutorials to reflect the new "Staff Grant Extension"
  feature.
- Include instructions for staff members on how to use the new functionality effectively.

### 9-8-Continuous Improvement

- Gather feedback from staff members and users about their experience with the new feature.
- Use this feedback to make necessary improvements and enhancements to the feature in future
  updates.

By following this deployment plan, the "Staff Grant Extension" feature will be seamlessly integrated
into the OnTrack system, offering enhanced capabilities to staff members and students while
maintaining the stability and reliability of the platform.

## 10-Conclusion

The design document for the "Staff Grant Extension" feature presents a comprehensive blueprint for
integrating this pivotal enhancement into the OnTrack system. By empowering staff members to grant
extensions to students, the feature addresses the evolving needs of educational environments,
ensuring a tailored and adaptable approach to supporting students' unique circumstances.

The "Staff Grant Extension" feature enriches the OnTrack system by seamlessly bridging frontend and
backend components. Through a user-friendly form, staff members can initiate extension requests,
specifying durations and reasons, which are then securely stored in the system's database.
Notifications are triggered, enhancing communication with students. Robust error handling,
validation mechanisms, and stringent security measures ensure data integrity and user confidence.

The envisioned architecture fosters collaboration between students and staff members, enabling
personalized solutions without disrupting established workflows. The design emphasizes usability,
scalability, and performance, thereby elevating the user experience across the platform.

Incorporating the "Staff Grant Extension" feature extends OnTrack's capability to adapt and respond
to students' unique circumstances, fostering a more inclusive and flexible educational experience.
By following the outlined design principles and implementation strategies, the feature promises a
seamless integration, streamlined functionality, and enhanced communication within the OnTrack
system. This design document serves as a roadmap to achieving these goals and advancing the
educational support provided by the platform.
