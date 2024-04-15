**Design Document: OnTrack - Incorporating Multiple Organisations**

Author: Sanah Quazi

Company: Thoth Tech

**Introduction**

This design document outlines the approach for incorporating multiple organisations into the OnTrack
server, enhancing its functionality to accommodate various organisations within a single system
instance. The goal is to provide a comprehensive solution that enables effective organisation
management, user assignment, and access control while maintaining the integrity and security of the
OnTrack system.

**User Story**

As a Site administrator, I want to be able to manage multiple organisations within the OnTrack
system. This will allow me to efficiently organise users and data, ensuring that each organisation
operates independently.

**Acceptance Criteria**

- Site administrators can create new organisations, providing details such as name and description.
- Organisations can be edited to update their details.
- Organisations can be disabled when they are no longer in use.
- Users can be associated with specific organisations.
- Users with access to multiple organisations can smoothly switch between them.
- Data access is restricted based on a user's associated organisation.

**System Architecture -**

**Frontend Architecture:**

The frontend of the system incorporates the following components:

- Organisation Management UI: This component allows administrators to create, edit, and disable
  organisations. It includes a user-friendly interface for managing organisation details.
- User Management UI: Users are associated with organisations through this interface. It provides a
  seamless experience for assigning users to organisations and managing user profiles.
- Organisation Switching UI: Users with access to multiple organisations can easily switch between
  them using this interface. It ensures a smooth transition from one organisation's context to
  another.

**Backend Architecture:**

The backend of the system handles data management and access control:

- Organisation Management: Backend services manage the creation, editing, and disabling of
  organisations. Data is stored securely in the database, and appropriate permissions are enforced.
- User Organisation Assignment: Backend processes allow site administrators to associate users with
  specific organisations. These associations are maintained in the database.
- Access Control: The backend enforces access control rules to ensure that users can only access
  data within their associated organisation. This is achieved through role-based access control
  mechanisms where site administrator is a new role.

**Technical Implementation-**

**Frontend Implementation:**

Organisation Management UI:

- Create user interfaces for creating, editing, and disabling organisations.
- Implement forms for entering organisation details.
- Ensure responsive design using modern frontend technologies.

User Management UI:

- Develop interfaces for assigning users to organisations and managing user profiles.
- Implement user-friendly features for easy association and disassociation of users with
  organisations.

Organisation Switching UI:

- Create an intuitive interface for users to switch between organisations.
- Implement secure mechanisms for handling organisation context switches.

**Backend Implementation:**

Organisation Management:

- Develop API endpoints for creating, editing, and disabling organisations.
- Implement data validation to ensure the integrity of organisation details.
- Ensure data is securely stored and updated in the database.

User Organisation Assignment:

- Create API endpoints for associating and disassociating users with organisations.
- Implement validation checks to prevent unauthorized assignments.
- Update user profiles to reflect organisation associations.

Access Control:

- Enforce access control rules based on user roles and organisation associations.
- Implement middleware to check permissions before granting access to data.
- Securely manage data queries to ensure isolation between organisations.
- The technical implementation aims to provide a seamless user experience while ensuring data
  security and access control across multiple organisations.

**Database Design**

The database design ensures that organisations can be efficiently managed, users can be associated
with organisations, and access control can be enforced based on these associations. The database
design for incorporating multiple organisations includes the following elements:

- Organisations Table: Create a table named ‘organisations’ to store organisation-specific details.

Columns:

- organisation_id: Unique identifier for each organisation (primary key).
- name: Name of the organisation.
- description: Description of the organisation.
- Email: official email id of the organisation.
- is_enabled: Flag indicating whether the organisation is active or disabled.

- Users Table: Update the existing ‘users’ table to include organisation_id as the foreign key.

**Error Handling and Validation**

Robust error handling and validation mechanisms are essential for ensuring data integrity and user
satisfaction. Frontend and backend components should implement validation checks and provide clear
error messages to users.

**Testing Strategy**

Testing is crucial to verify the functionality and security of the system. Both frontend and backend
components should undergo thorough testing to identify and address issues.

**Deployment Plan**

The deployment plan outlines the steps for introducing the multiple organisations feature into the
OnTrack system, ensuring a smooth transition for users.

**Conclusion**

The incorporation of multiple organisations into the OnTrack server is a significant enhancement
that enhances the system's flexibility and scalability. By following the design outlined in this
document and implementing it effectively, OnTrack will provide a powerful solution for managing
multiple organisations while maintaining data security and access control. This design document
serves as a roadmap for achieving these goals and delivering a feature-rich, user-friendly system.
