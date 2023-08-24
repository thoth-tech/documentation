**Design a way to improve the group Task submission – UML design**

**Solution 1: Selecting Students Who Can Submit**

In this solution, the system allows the instructor to specify which students are eligible to submit
the group task. Each user (student) is associated with a task through a one-to-one relationship,
indicated by the "1" multiplicity on both sides of the association line. The CanSubmitTask attribute
is a boolean value indicating whether a user can submit the task. The SubmissionStatus attribute in
the Task class reflects whether a task has been submitted or not. When a user submits the task, the
system checks the CanSubmitTask attribute to determine if the submission is allowed. If allowed, the
SubmissionStatus attribute of the task is updated to "Submitted." If not, the submission is
rejected.

![](Solution1.png)

**Solution 2: Adding Password for Certain Students**

In this solution, a password-based approach is used to control task submissions. Each user (student)
is associated with a task through a one-to-one relationship, indicated by the "1" multiplicity on
both sides of the association line. Each user has a unique SubmissionPassword attribute acting as a
password for task submission. Similarly, the Task class also has a SubmissionPassword attribute.
When a user attempts to submit a task, they need to provide their SubmissionPassword. The system
validates this password against the user's stored password. If the passwords match, the task is
considered submitted, and the SubmissionStatus attribute of the task is updated to "Submitted."
Otherwise, the submission is rejected.

![](Solution2.png)
