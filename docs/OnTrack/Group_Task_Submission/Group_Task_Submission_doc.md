**Design a way to improve the group Task submission - Document**

<a name="_hlk143111384"></a>**Solution 1: Selecting Students Who Can Submit**

Solution 1 requires certain changes to be made in the frontend and backend which are described as
follows:

**Frontend Changes:**

- **User Interface Updates:**

The frontend interface needs to be updated to allow instructors to select which students are
eligible to submit a particular task. This could involve adding a checkbox or similar UI element for
each student when creating or configuring a task.

- **Task Submission:**

The task submission process for students should include a check to determine if they are eligible to
submit based on the CanSubmitTask attribute. If they are not eligible, an appropriate error message
should be displayed.

- **Task Status Display:**

The frontend should display the submission status of each task, showing whether it has been
submitted or not.

**Backend Changes:**

- **Database Schema Updates:**

The database schema needs to be updated to include the CanSubmitTask attribute in the User table.

- **Task Submission Logic:**

The backend logic for task submission should check the CanSubmitTask attribute of the user to
determine whether the submission is allowed. If allowed, update the SubmissionStatus attribute of
the associated task to "Submitted."

- **API Endpoints:**

New API endpoints might be needed to manage task submission eligibility, such as updating the
CanSubmitTask attribute for users.

- **Data Validation:**

Backend logic should validate that only eligible students can be associated with tasks when creating
or updating tasks.

- **Error Handling:**

Proper error handling and status codes should be implemented to handle cases where submission is not
allowed.

- **Notifications:**

Instructors may want to be notified when a student submits a task, or when a submission is rejected
due to eligibility.

<a name="_hlk143111371"></a>**Solution 2: Adding Password for Certain Students**

Solution 2 requires certain changes to be made in the frontend and backend which are described as
follows:

**Frontend Changes:**

- **User Interface Updates:**

Modify the user interface to prompt students for their submission password when attempting to submit
a task.

- **Task Submission Form:**

Add a field for students to enter their submission password while submitting a task.

- **Submission Validation:**

Implement frontend logic to validate the submission password before allowing the task submission.
Display appropriate messages if the password is incorrect.

**Backend Changes:**

- **Database Schema Updates:**

Update the database schema to include the SubmissionPassword attribute in the User and Task tables.

- **Task Submission Logic:**

Implement backend logic to compare the user's submitted password with the stored password. If they
match, update the SubmissionStatus attribute of the associated task to "Submitted."

- **API Endpoints:**

Create new API endpoints to handle the password validation during task submission.

- **Data Validation:**

Implement backend data validation to ensure that only eligible users with the correct password can
submit tasks.

- **Error Handling:**

Implement proper error handling for password validation and submission process.

- **Notifications:**

Consider implementing notifications to inform users about successful or unsuccessful task
submissions.

- **Security Measures:**

Implement secure password storage practices (such as hashing and salting) to protect user passwords.

- **Password Management:**

Provide a way for users to reset their submission password if needed, and ensure secure password
reset procedures.
