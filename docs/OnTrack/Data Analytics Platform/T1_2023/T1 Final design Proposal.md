# Design For Ontrack Data Analytics

## Introduction

The purpose of this report is to outline the design of a data analytics system that will be used to monitor and analyze student performance in a unit. The system will be designed to help tutors and instructors identify students who are struggling and provide them with early intervention and support. The system will also help instructors identify areas of the course that may need improvement and make adjustments to improve the learning outcomes for students.

## Problem Statement

The problem that this system aims to solve is the challenge of identifying struggling students early in the course. Traditional assessment methods are often not timely and can result in students falling behind without timely intervention. Additionally, the current manual process of tracking student performance can be time-consuming and error-prone. The proposed system will provide a more efficient and effective method for tracking student progress and identifying struggling students.

## Requirements

The proposed system will have the following requirements:

1. **Class progress visualization**: The system will provide a class progress visualization with an area graph of the submissions done by students vs. dates.

2. **Student grade prediction**: The system will provide a visualization that helps tutors see the status of students opting for similar grades and predict whether they will achieve the desired grade or not.

3. **Quick feedback**: The system will allow hovering over visualizations to get a list of students in that part of the graph and help with quick-links to those student profiles for quick feedback.

## Design

The proposed system will consist of the following components:

1. **Data Collection**: The system will collect data from various sources, including learning management systems, student information systems, and other relevant data sources.

2. **Data Storage**: The collected data will be stored in a central database that will be used for analysis and reporting.

3. **Data Analytics**: The system will use data analytics techniques such as machine learning, clustering, and regression analysis to identify patterns and trends in student performance.

4. **Visualizations**: The system will provide visualizations that will help tutors and instructors monitor student progress and identify struggling students.

## System Overview

The proposed system will work as follows:

1. **Data Collection**: The existing functionality implements the collection of data through the "Task Completion Stats" feature, which provides a downloadable CSV file containing relevant fields such as Student ID, Username, Student Name, Target Grade, Email, Portfolio, Grade, and Rationale.

2. **Data Analytics**: The system will use data analytics to identify patterns and trends in student performance. This can be achieved by analyzing the data collected from the "Task Completion Stats" and generating insights on student engagement and task completion.

3. **Visualization**: The system will provide visualizations based on the analyzed data to help tutors and instructors monitor student progress. This will include a class progress visualization with an area graph showing submissions by students over time and a student grade prediction visualization.

4. **Quick Feedback**: The visualizations will support interactive features such as hovering over data points to display a list of students in that part of the graph. This feature will provide quick access to student profiles for tutors to provide feedback and intervention.

5. **Early Intervention**: The system will include mechanisms for early intervention to help struggling students. Tutors can access individual student profiles to see incomplete and in-progress tasks, and use the chat feature to communicate with the student and provide guidance.

## Testing and Maintenance

The proposed system will undergo rigorous testing to ensure that it meets the outlined requirements. The system will be tested for accuracy, scalability, and usability. Once tested and validated, the system will be deployed for use by tutors and instructors. Regular maintenance will be performed to ensure the system functions correctly and to incorporate updates and improvements as necessary.

## Ethical Concerns

The proposed system raises ethical concerns regarding data privacy and security. To address these concerns, the system will be designed to comply with relevant data protection regulations. Access controls will be implemented to ensure that only authorized personnel have access to student data, protecting their privacy and maintaining data security.

## Conclusion

In conclusion, the proposed data analytics system will assist tutors and instructors in monitoring student progress and identifying struggling students. The system will provide early intervention mechanisms to help struggling students get back on track, and it will help instructors identify areas of the course that may need improvement. The system will be thoroughly tested and designed to comply with data protection regulations to address ethical concerns.
