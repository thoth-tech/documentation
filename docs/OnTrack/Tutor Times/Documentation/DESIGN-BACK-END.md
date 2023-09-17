# Backend Design Document for "Tutor Times" Feature in OnTrack

## 1. Introduction

### 1.1 Purpose

This document outlines the design of the backend for the "Tutor Times" feature in OnTrack (formerly
known as Doubtfire). The purpose is to establish the architectural and functional aspects of the
backend necessary to support efficient time tracking and management for tutors.

### 1.2 Scope

The scope of this design document covers the following aspects of the backend development for the
"Tutor Times" feature:

- Data Models and Schema
- API Endpoints
- Authentication and Authorisation
- Background Jobs/Triggers
- Data Integrity Constraints
- Performance Optimization
- Security Measures
- Compatibility with Frontend and Other Modules

### 1.3 Intended Audience

This document is intended for backend developers, database administrators, and stakeholders involved
in the implementation of the "Tutor Times" feature.

## 2. Architecture and Data Models

- A link for UML diagrams will be provided here in future to illustrate the architecture and data
  models for the "Tutor Times" feature.

### 2.1 Data Storage

- Create a new database table named `tutor_times` or modify an existing one to store marking time
  data for tutors and students.
- Define fields such as `tutor_id`, `student_id`, `task_id`, `start_time`, and `end_time` to record
  marking session details.

### 2.2 Data Schema

- Define a comprehensive data schema that includes relationships between tables to support the
  required functionality.
- Ensure that the schema accommodates storing marking time data at both the student and task levels.

### 2.3 Database Relationships

- Establish relationships between tables to associate marking time data with tutors, students, and
  tasks.
- Define foreign keys and indices to optimize query performance.

## 3. API Design

### 3.1 API Endpoints

- Develop a set of RESTful API endpoints to interact with marking time data.
- Implement the following endpoints:
  - `POST /api/tutor-times`: Create a new marking session record.
  - `GET /api/tutor-times/:id`: Retrieve a specific marking session record.
  - `GET /api/tutor-times/tutor/:tutor_id`: Retrieve all marking session records for a specific
    tutor.
  - `GET /api/tutor-times/student/:student_id`: Retrieve all marking session records for a specific
    student.
  - `PUT /api/tutor-times/:id`: Update an existing marking session record.
  - `DELETE /api/tutor-times/:id`: Delete a marking session record.

### 3.2 Authentication and Authorisation

- Implement user authentication and authorisation to secure access to marking time data.
- Ensure that only authorised users (tutors and unit chairs) can perform CRUD operations on marking
  session records.

## 4. Background Jobs/Triggers

### 4.1 Calculation of Marking Time Totals

- Develop background jobs or database triggers to calculate and update total marking time for each
  tutor and student.
- The system should automatically update marking time totals when new marking session records are
  added or modified.

## 5. Data Integrity and Validation

### 5.1 Data Integrity Constraints

- Implement data integrity constraints to ensure the accuracy and consistency of data.
- Enforce rules such as referential integrity and data type validation to maintain data quality.

## 6. Non-Functional Requirements

### 6.1 Performance Optimization

- Optimize database queries and operations to ensure fast data retrieval, even as the volume of
  marking time records grows.
- Implement caching mechanisms to reduce query load and enhance system performance.

### 6.2 Security Measures

- Implement necessary security measures to protect marking time data and prevent unauthorized
  access.
- Use encryption to secure sensitive data, such as user credentials.

### 6.3 Compatibility

- Ensure compatibility with the frontend and other system components.
- Verify that the API endpoints work seamlessly with modern web browsers and other clients.

## 7. Testing Strategy

### 7.1 Unit Testing

- Develop comprehensive unit tests for API endpoints, database interactions, and background jobs to
  ensure the correctness and reliability of backend components.

### 7.2 Integration Testing

- Perform integration testing to verify the seamless integration of backend components with the
  frontend and other system modules.

## 8. Deployment Plan

### 8.1 Deployment Environment

- Deploy the backend of the "Tutor Times" feature to the production environment of OnTrack.

### 8.2 Deployment Process

- Follow a systematic deployment process to release backend updates, including version control and
  continuous integration practices.

## 9. Conclusion

This design document provides a detailed plan for the backend implementation of the "Tutor Times"
feature in OnTrack. It covers the architectural aspects, data models, API design, security measures,
testing strategies, and deployment plans. By following this design, we ensure the reliable and
efficient operation of the "Tutor Times" feature, enhancing the user experience for tutors and
students.

## 10. Appendices

- Include any additional information, diagrams, or references that support the design document.
