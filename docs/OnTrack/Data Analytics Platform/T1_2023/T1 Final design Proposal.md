# Design For Ontrack Data Analytics

**Nandini Kaushal**, **Jayant**

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

**Task Completion Analytics**

The proposed visualisation for "Task Completion Stats" will work as follows:

1. **Data Collection**: The existing functionality implements the collection of data through the
   "Task Completion Stats" feature, From ruby app/models/task_status.rb:15:in ... with fields which
   are provided in a downloadable CSV file containing differnet fields such as

|            |                  |              |              |       |           |       |           |
| ---------- | ---------------- | ------------ | ------------ | ----- | --------- | ----- | --------- |
| Student ID | Student Username | Student Name | Target Grade | Email | Portfolio | Grade | Rationale |
|            |                  |              |              |       |           |       |           |

As well as feilds for every subsequent task in the unit. This feature was made for tutors to
download a list of students alongside their grades and completion status which was ultimately used
in our graphs. A few changes we made to this file to make the proposed graphs in this report, the
calculation goes as follows:

| Completed Task                                                        | Number of Tasks Submitted by this Date                              |
| --------------------------------------------------------------------- | ------------------------------------------------------------------- |
| This is the number of task with the completed status in the .csv file | This is the aggregate of all submitted task by a student till date. |

This data was taken in account for over a week during the changes were made to submission statuses.

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

Use Tableau visualization for reference:
https://public.tableau.com/app/profile/nandini5423/viz/ontrack-DAP/Sheet2#1

Video example: https://video.deakin.edu.au/media/t/1**ecdysk5s

**Expected Grade Analytics**

1. **Grade Graph**: The graph will display the progress of students pursuing distinction(or any
   grade) in their units. It will showcase the grades achieved by students and indicate the number
   of days before the deadline that distinction(or said grade) students submit their tasks. Green
   dots will represent early submissions, while red dots will indicate potential difficulties in
   achieving distinction(or targeted grade).

2. **Clickable Functionality**: A key feature of the graph will be the ability to click on a dot,
   representing an individual student's progress. Clicking on a dot will navigate the user to the
   respective student's profile in On Track, facilitating direct communication and personalized
   assistance. This functionality will empower tutors and the teaching team to engage with students,
   provide timely feedback, and address any concerns or difficulties they may be facing.

3. **Additional Graph: 3.1 Completion Distribution Graph**: In addition to the distinction graph, we
   propose including a graph that illustrates the distribution of task completions or the entire
   unit's completion. This graph can be represented using a bell curve, providing an overview of the
   distribution pattern across the student cohort. It will help identify any trends or patterns in
   task completion and highlight areas where additional support or intervention may be required.

4. **Utilizing Three-Year Statistics**: To make the visualization more comprehensive and effective,
   we recommend incorporating three-year statistics. By leveraging historical data, we can identify
   long-term trends and patterns, allowing for informed decision-making and impactful changes to the
   units. This analysis will help improve the curriculum, identify potential bottlenecks, and ensure
   a proactive approach towards supporting student success.

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

In conclusion, the proposed data analytics system will help tutors and instructors monitor student
progress and identify struggling students. The system will provide early intervention mechanisms to
help struggling students get back on track, and it will also help instructors identify areas of the
course that may need improvement. The system will undergo rigorous testing to ensure that it meets
the requirements outlined above, and it will be designed to comply with relevant data protection
regulations.

We welcome the opportunity to discuss this proposal further and address any questions or concerns
you may have. We are confident that implementing this design will be a valuable addition to On
Track, contributing to the success and growth of the platform.
