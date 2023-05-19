# Design For Ontrack Data Analytics

## Introduction

The purpose of this report is to outline the design of a data analytics system that is planned to
used to monitor and analyse student performance in a unit. The system is planned to designed to help
tutors and instructors identify students who are struggling and provide them with early intervention
and support. The system will also help instructors identify areas of the course that may need
improvement and make adjustments to improve the learning outcomes for students.

## Problem Statement

The problem that this system aims to solve is the challenge of identifying struggling students early
in the course. Traditional assessment methods are often not timely and can result in students
falling behind without timely intervention. Additionally, the current manual process of tracking
student performance can be time-consuming and error-prone. The proposed system will provide a more
efficient and effective method for tracking student progress and identifying struggling students.

## Requirements

The proposed system will have the following requirements:

1. **Class progress visualization**: The system will provide a class progress visualization with an
   area graph of the submissions done by students vs. dates.

2. **Student grade prediction**: The system will provide a visualization that helps tutors see the
   status of students opting for similar grades and predict whether they will achieve the desired
   grade or not.

3. **Quick feedback**: The system will allow hovering over visualizations to get a list of students
   in that part of the graph and help with quick-links to those student profiles for quick feedback.

## Design

The proposed system will consist of the following components:

1. **Data Collection**: The system will collect data from various sources, including learning
   management systems, student information systems, and other relevant data sources.

2. **Data Storage**: The collected data is planned to stored in a central database that is planned
   to used for analysis and reporting.

3. **Data Analytics**: The system will use data analytics techniques such as machine learning,
   clustering, and regression analysis to identify patterns and trends in student performance.

4. **Visualizations**: The system will provide visualizations that will help tutors and instructors
   monitor student progress and identify struggling students.

## System Overview

The proposed visualisation for "Task Completion Stats" will work as follows:

1. **Data Collection**: The existing functionality implements the collection of data through the
   "Task Completion Stats" feature, From ruby app/models/task_status.rb:15:in ... with fields which
   are provided in a downloadable CSV file containing differnet fields such as | Student ID |
   Username | Student Name | Target Grade | Email | Portfolio | Grade | Rationale | As well as
   feilds for every subsequent task in the unit. This feature was made for tutors to download a list
   of students alongside their grades and completion status which was ultimately used in our graphs.
   A few changes we made to this file to make the proposed graphs in this report, the calculation
   goes as follows: | Completed Task | Number of Tasks Submitted by this Date |
   |----------------|----------------------------------------| | This is the number of task with the
   completed status in the .csv file | This is the aggregate of all submitted task by a student till
   date. |

   This data was taken in account for over a week during the changes were made to submission
   statuses.

The final aim is to procure daily data on students' engagement/completion of tasks in the unit and
produce a subsequent visualization for it

2. **Data Analytics**: The system will use data analytics to identify patterns and trends in student
   performance. This can be achieved by analyzing the data collected from the "Task Completion
   Stats" and generating insights on student engagement and task completion.

3. **Visualization**: The system will provide visualizations based on the analyzed data to help
   tutors and instructors monitor student progress. This will include a class progress visualization
   with an area graph showing submissions by students over time and a student grade prediction
   visualization.

4. **Quick Feedback**: The visualizations will support interactive features such as hovering over
   data points to display a list of students in that part of the graph. This feature will provide
   quick access to student profiles for tutors to provide feedback and intervention.

5. **Early Intervention**: The system will include mechanisms for early intervention to help
   struggling students. Tutors can access individual student profiles to see incomplete and
   in-progress tasks, and use the chat feature to communicate with the student and provide guidance.

## Testing and Maintenance

The proposed system will undergo rigorous testing to ensure that it meets the outlined requirements.
The system is planned to tested for accuracy, scalability, and usability. Once tested and validated,
the system is planned to deployed for use by tutors and instructors. Regular maintenance is planned
to performed to ensure the system functions correctly and to incorporate updates and improvements as
necessary.

## Ethical Concerns

The proposed system raises ethical concerns regarding data privacy and security. To address these
concerns, the system is planned to designed to comply with relevant data protection regulations.
Access controls is planned to implemented to ensure that only authorised personnel have access to
student data, protecting their privacy and maintaining data security.

## Conclusion

In conclusion, the proposed data analytics system can assist tutors and instructors in monitoring
student progress and identifying struggling students. The system can provide early intervention
mechanisms to help struggling students get back on track, and it can help instructors identify areas
of the course that may need improvement. The system is planned to thoroughly tested and designed to
comply with data protection regulations to address ethical concerns.
