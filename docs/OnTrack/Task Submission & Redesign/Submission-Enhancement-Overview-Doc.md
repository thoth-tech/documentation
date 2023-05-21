# Submission Enhancement Overview Document

## Component Overview

During Week 5 of the trimester, the team was able to secure a meeting with the client Andrew Cain
who suggested a pivoted focus towards enhancement for the Task Submission Component of the Ontrack
platform. The client outlined four features that he believes would benefit both students and
teaching staff. The features include:

- The ability to submit files regardless of the task state.
- The ability to submit individual task files.
- The ability to submit optional additional files outside of the task requirements.
- The ability to observe task file upload differences.

## Feature: The ability to submit files, regardless of the task state

### Feature 1 Current Implementation

Currently, the Ontrack platform only allows students to submit their files when the task state is
changed to ‘Ready for Feedback’.

### Feature 1 Proposal

Presented as a new button within the task card, the enhancement would allow for students to submit
their task files regardless of the task state (‘Not Started’, ‘Working On It’, ‘Need Help’ and
‘Ready for Feedback’). Future iterations of this feature could include automated task state changing
depending on conditional statements. E.g. Task remain as ‘Not Started’ until a file is uploaded
where it is then changed to ‘Working on It’ and then automatically changed to ’Ready for Feedback’
when all files are uploaded.

### Feature 1 Value

In conjunction with the ability to submit individual task files, teaching staff will be able to
observe the progression of a student through the task. The ability to submit files during any stage
would allow for students to request help from the teaching staff for already submitted files so
discussion can be more targeted to the submissions in question.

## Feature: The ability to submit individual task files

### Feature 2 Current Implementation

Currently, the Ontrack platform requires students to submit all the required task files, and in a
specific order, when completing the tasks.

### Feature 2 Proposal

Implemented alongside the ability to submit task files, regardless of the task state, the
enhancement will be present as a new upload dialog in which files can be upload in any order and
won’t require all files to be uploaded at once. Future iterations of this feature could include
individual task states (‘Working On It’, ‘Need Help’, and ‘Completed’) for each uploaded task.

### Feature 2 Value

The ability to submit individual files will benefit students by allowing them to submit portions of
their task. For tasks that require multiple files to be submitted for completion, this means that
students can submit their files a number of times as a form of version control, minimising the
potential for file loss if technical difficulties occur.

## Feature: The ability to submit optional additional outside of the task requirements

### Feature 3 Current Implementation

Currently, the Ontrack platform does not allow for the upload of additional files outside of the
comment section for attachments. Students are only able to submit the required task files.

### Feature 3 Proposal

Implemented within the ability to submit individual files and in conjunction with the added freedom
to upload tasks in any order, the feature will present as a new submission item alongside the
required files, allowing students to submit files that are outside of the task’s requirements.

### Feature 3 Value

The feature will add value to both students and teaching staff as the students will be able to
submit files that they believe to be complementary to the task (e.g. Learning summaries, output
files, etc). Teaching staff will also be able to request additional files (expanded explanations,
output files, additional tasks) from the students during feedback, without having the need to use
the comment section’s attachments.

## Feature: The ability to observe task file upload differences

### Feature 4 Current Implementation

Currently, the Ontrack platform does not support upload file diff-viewing.

### Feature 4 Proposal

The feature will be presented as a new tab or button or button to open a new display where task
submission files can be viewed as a side-by-side view with differences highlighted, akin to GitHub
pull-requests.

### Feature 4 Value

Primarily of value to the teaching staff, tasks that may have been marked as ‘Fix/Resubmit’ will be
able to be compared to their resubmitted task file. This will allow for easier identification of the
changes made, ensuring that appropriate fixes have been made by the student without the need to
review the entire upload.

## Additional Notes

No design choices have been finalised and should be iterated upon with input from the client and the
UI Enhancement team.
