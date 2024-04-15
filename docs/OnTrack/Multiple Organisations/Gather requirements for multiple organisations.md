**Gather Requirements:** Incorporate Multiple Organisations on a Single OnTrack Server

**Author:** Sanah Quazi

**Company:** Thoth Tech

**Introduction:**

This documentation outlines the requirements for implementing a feature that enables the
incorporation of multiple organisations within a single OnTrack server. This feature aims to enhance
the administrative capabilities of the OnTrack application by allowing server operators to manage
and segregate multiple organisations efficiently.

**User Story:**

As an OnTrack server operator, I want to be able to host multiple organisations within my server.

**Functional Requirements:**

**Backend:**

- Design a flexible organisational structure to accommodate multiple organisations.
- Develop functionality to create, edit, and disable organisations, including providing a unique
  identifier for each organisation.
- Implement a new user role named "Site Administrator" with permissions to manage organisations,
  including the ability to add, disable, and edit them.
- Enhance the user profile system to associate users with specific organisations and allow users to
  switch between organisations.

**Frontend:**

- Design intuitive user interfaces for organisation creation, modification, and disabling.
- Create a dedicated dashboard for Site Administrators to manage organisations, including options to
  add, disable, and edit organisations.
- Update user profile pages to display and allow modification of the associated organisation.

**Non-Functional Requirements:**

**Performance:**

- Ensure that the system can handle a significant number of organisations and users without
  compromising performance.
- Optimize database queries and access patterns to maintain responsive user experience even with
  increased organisational complexity.

**Reliability:**

- Implement data isolation mechanisms to prevent cross-organisation data leaks or unauthorized
  access.
- Apply robust error handling to prevent disruptions due to organisational changes.

**Test Cases:**

**Test Case 1:** **Organisation Creation**

Description: Verify the system allows the creation of a new organisation with a unique name and
identifier.

**Steps:**

- Log in as a Site Administrator.
- Navigate to the organisation creation page.
- Enter a unique organisation name and identifier.
- Submit the form.

**Expected Outcome:** The organisation is created, and its details are stored in the database.

**Test Case 2: Organisation Management**

**Description:** Verify the Site Administrator can edit organisation details.

**Steps:**

- Log in as a Site Administrator.
- Access the organisation management dashboard.
- Select an organisation to edit.
- Modify organisation details and save changes.

**Expected Outcome:** Organisation details are updated and reflected in the system.

**Test Case 3:** User Organisation Assignment

**Description:** Verify users can be associated with specific organisations.

**Steps:**

- Log in as a user.
- Access the user profile page.
- Choose an organisation to associate with.
- Save changes.

**Expected Outcome:** The user is now associated with the selected organisation.

**Test Case 4: Access Control**

Description: Verify users can access only the resources within their organisation.

**Steps:**

- Log in as a user from Organisation A.
- Attempt to access resources belonging to Organisation B.

**Expected Outcome:** Access is denied, and the user can only access resources within their own
organisation.

**Testing:**

- Perform unit testing on each component, ensuring that organisation-related functionalities work as
  expected.
- Conduct integration testing to ensure smooth interaction between different parts of the system.
- Implement user acceptance testing involving Site Administrators and regular users to validate the
  feature's usability and correctness.

**Conclusion:**

In conclusion, the incorporation of multiple organisations within a single OnTrack server brings a
significant enhancement to the application's administrative capabilities. By following the outlined
requirements and test cases, this feature will enable server operators to effectively manage and
segregate various organisations, ensuring a more streamlined and organised user experience.
