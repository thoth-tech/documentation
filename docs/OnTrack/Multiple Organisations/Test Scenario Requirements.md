**Gather Requirements:** Test Cases for Incorporating Multiple Organisations on OnTrack Server

**Author:** Sanah Quazi

**Company:** Thoth Tech

**Introduction**

This document outlines test cases for incorporating multiple organisations on the OnTrack server,
enhancing its functionality to accommodate various organizations within a single system instance.

**Backend Functionality -**

**Organisation Management:**

Test Case 1: Creating an Organisation

Description: Verify the system's ability to create a new organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Access the organisation creation feature.

3\. Enter valid details for the new organisation (name, description).

4\. Submit the form.

Expected Outcome: A new organisation is created, and it appears in the list of organisations managed
by the Site Administrator.

Test Case 2: Editing an Organisation

Description: Test the ability to edit an existing organisation's details.

Steps:

1\. Log in as a Site Administrator.

2\. Access the organisation editing feature.

3\. Select an existing organisation.

4\. Modify the organisation's details (e.g., description).

5\. Save the changes.

Expected Outcome: The organisation's details are updated, and the changes are reflected in the
system.

Test Case 3: Disabling an Organisation

Description: Verify the process of disabling an organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Access the organisation management feature.

3\. Select an existing organisation.

4\. Disable the organisation.

Expected Outcome: The organisation is disabled and no longer accessible to users. It is removed from
active use but remains in the system for reference.

**User Organisation Assignment:**

Test Case 4: Associating a User with an Organisation

Description: Test the capability to associate a user with a specific organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Access the user management feature.

3\. Select a user.

4\. Assign the user to an organisation.

Expected Outcome: The user is associated with the chosen organisation, and their profile reflects
the change.

Test Case 5: User Switching Between Organisations

Description: Confirm that users can successfully switch between organisations when they have access
to multiple organizations.

Steps:

1\. Log in as a user associated with multiple organisations.

2\. Access the organisation switch feature.

3\. Select a different organisation to switch to.

Expected Outcome: The user's context changes to the selected organisation, and they can access its
resources and functionalities.

**Access Control:**

**Data Access Based on Organisation**

Test Case 6: User Data Access Control

Description: Ensure that users can access data only within their associated organisation and are
restricted from accessing data from other organisations.

Steps:

1\. Log in as a user from Organisation A.

2\. Attempt to access resources belonging to Organisation B.

Expected Outcome: Access to resources of Organisation B is denied for the user from Organisation A.

Test Case 7: Site Administrator Data Access Control

Description: Verify that Site Administrators can access data only from their organisation while
being restricted from accessing data outside their organisation.

Steps:

1\. Log in as a Site Administrator from Organisation A.

2\. Attempt to access resources belonging to Organisation B.

Expected Outcome: Access to resources of Organisation B is denied for the Site Administrator from
Organisation A.

**Frontend Functionality -**

**Organisation Management:**

Test Case 8: Frontend - Creating an Organisation

Description: Verify the frontend functionality for creating a new organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Navigate to the relevant page for organisation creation.

3\. Enter valid details for the new organisation (name, description).

4\. Submit the form.

Expected Outcome: A new organisation is created, and it is displayed in the list of organisations
managed by the Site Administrator.

Test Case 9: Frontend - Editing an Organisation

Description: Test the frontend capability to edit an existing organisation's details

Steps:

1\. Log in as a Site Administrator.

2\. Navigate to the organisation editing page.

3\. Select an existing organisation.

4\. Modify the organisation's details (e.g., description).

5\. Save the changes.

Expected Outcome: The organisation's details are updated in the frontend, and the changes are
reflected in the system.

Test Case 10: Frontend - Disabling an Organisation

Description: Verify the frontend process for disabling an organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Access the organisation management feature.

3\. Select an existing organisation.

4\. Disable the organisation using the frontend interface.

Expected Outcome: The organisation is visually disabled and no longer accessible to users via the
frontend. It remains in the system for reference.

**User Organisation Assignment:**

Test Case 11: Frontend - Associating a User with an Organisation

Description: Test the frontend functionality to associate a user with a specific organisation.

Steps:

1\. Log in as a Site Administrator.

2\. Access the user management feature from the frontend.

3\. Select a user.

4\. Assign the user to an organisation using the frontend interface.

Expected Outcome: The user's association with the chosen organisation is visually represented in the
frontend, and their profile reflects the change.

Test Case 12: Frontend - User Switching Between Organisations

Description: Confirm that users can successfully switch between organisations via the frontend when
they have access to multiple organisations.

Steps:

1\. Log in as a user associated with multiple organisations.

2\. Use the frontend organisation switch feature.

3\. Select a different organisation to switch to.

Expected Outcome: The user's context visually changes to the selected organisation in the frontend,
and they can access its resources and functionalities.

**Conclusion**

These test cases cover both backend and frontend functionalities comprehensively to ensure that the
multi-organisation feature functions correctly and provides a seamless experience for users.
