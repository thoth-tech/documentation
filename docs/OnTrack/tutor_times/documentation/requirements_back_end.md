# Backend Requirements Document

## Project Overview

## Table of Contents

1. [Introduction](#1-introduction) 1.1 [Purpose](#11-purpose) 1.2 [Scope](#12-scope) 1.3
   [Intended Audience](#13-intended-audience)

2. [Functional Requirements](#2-functional-requirements) 2.1 [Data Storage](#21-data-storage) 2.2
   [API Endpoints](#22-api-endpoints) 2.3
   [Authentication and Authorisation](#23-authentication-and-authorisation) 2.4
   [Background Jobs/Triggers](#24-background-jobstriggers) 2.5 [Data Schema](#25-data-schema)

3. [Non-Functional Requirements](#3-non-functional-requirements) 3.1 [Performance](#31-performance)
   3.2 [Security](#32-security) 3.3 [Compatibility](#33-compatibility)

4. [User Stories](#4-user-stories) 4.1 [As a tutor...](#41-as-a-tutor) 4.2
   [As a unit chair...](#42-as-a-unit-chair) 4.3 [As a unit chair...](#43-as-a-unit-chair)

5. [Database Schema](#5-database-schema) 5.1 [Tables and Fields](#51-tables-and-fields) 5.2
   [Relationships](#52-relationships) 5.3
   [Data Integrity Constraints](#53-data-integrity-constraints)

6. [Testing Requirements](#6-testing-requirements) 6.1 [Unit Testing](#61-unit-testing) 6.2
   [Integration Testing](#62-integration-testing)

## 1. Introduction

### 1.1 Purpose

The purpose of this document is to outline the requirements for the backend development of the
"Tutor Times" feature. This feature will enable the storage and retrieval of marking time data for
tutors and students.

### 1.2 Scope

The scope of this document covers the functional and non-functional requirements for the backend
implementation of the "Tutor Times" feature.

### 1.3 Intended Audience

This document is intended for backend developers and the development team responsible for
implementing the "Tutor Times" feature.

## 2. Functional Requirements

### 2.1 Data Storage

- Create a new database table named `tutor_times` or modify an existing one to store marking time
  data for tutors and students.
- Define fields such as `tutor_id`, `student_id`, `task_id`, `start_time`, and `end_time` to record
  marking session details.

### 2.2 API Endpoints

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

### 2.3 Authentication and Authorisation

- Implement user authentication and authorisation to secure access to marking time data.
- Ensure that only authorised users (tutors and unit chairs) can perform CRUD operations on marking
  session records.

### 2.4 Background Jobs/Triggers

- Develop background jobs or database triggers to calculate and update total marking time for each
  tutor and student.
- The system should automatically update marking time totals when new marking session records are
  added or modified.

### 2.5 Data Schema

- Define a comprehensive data schema that includes relationships between tables to support the
  required functionality.
- Ensure that the schema accommodates storing marking time data at both the student and task levels.

## 3. Non-Functional Requirements

### 3.1 Performance

- Optimize database queries and operations to ensure fast data retrieval, even as the volume of
  marking time records grows.
- Implement caching mechanisms to reduce query load and enhance system performance.

### 3.2 Security

- Implement necessary security measures to protect marking time data and prevent unauthorised
  access.
- Use encryption to secure sensitive data, such as user credentials.

### 3.3 Compatibility

- Ensure compatibility with the frontend and other system components.
- Verify that the API endpoints work seamlessly with modern web browsers and other clients.

## 4. User Stories

### 4.1 As a tutor...

- Tutors should be able to view their marking time data on the frontend interface, which is
  retrieved from the backend via API calls.

### 4.2 As a unit chair...

- Unit chairs should have access to total marking time data for each tutor through the frontend
  interface.

### 4.3 As a unit chair...

- Unit chairs should be able to see marking time data at the task level through the frontend
  interface.

## 5. Database Schema

- Will include a database schema diagram here in future.

### 5.1 Tables and Fields

- Create or modify database tables according to the defined schema.
- Define fields, data types, constraints, and relationships between tables.

### 5.2 Relationships

- Establish relationships between tables to associate marking time data with tutors, students, and
  tasks.

### 5.3 Data Integrity Constraints

- Implement data integrity constraints to ensure the accuracy and consistency of data.

## 6. Testing Requirements

### 6.1 Unit Testing

- Develop comprehensive unit tests for API endpoints, database interactions, and background jobs to
  ensure the correctness and reliability of backend components.

### 6.2 Integration Testing

- Perform integration testing to verify the seamless integration of backend components with the
  frontend and other system modules.
