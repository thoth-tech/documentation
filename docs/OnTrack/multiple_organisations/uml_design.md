**Requirements to incorporate multiple organisations on a single OnTrack server – UML Design**

Author: Sanah Quazi

Company: Thoth tech

![](UML.png)

The UML diagram presented above focuses on achieving efficient organisation management, user
association with organisations, and robust access control. It outlines the database structure for
accommodating multiple organisations, which consists of two main elements:

Organisations Table: This table, labelled 'organisations,' is responsible for storing
organisation-specific information. It includes the following key columns:

- organisation_id: This column serves as a unique identifier for each organisation and acts as the
  primary key for this table.
- name: The 'name' column holds the organisation's name.
- description: In the 'description' column, you can find detailed descriptions of each organisation.
- email: This column stores the official email address associated with the organisation.
- is_enabled: The 'is_enabled' column is a flag that indicates whether the organisation is currently
  active or disabled.

Users Table: In addition to the 'organisations' table, the diagram illustrates an update to the
existing 'users' table. This update includes the addition of an organisation_id column, which serves
as a foreign key. This column establishes a link between users and their associated organisations,
allowing for efficient organisation assignment and access control enforcement.

This database design is crucial for the successful implementation of the feature that enables
multiple organisations within the OnTrack system. It ensures data integrity and provides the
necessary structure for managing and securing organisational data.

**The relationships between these classes are as follows:**

- organisations to users: This association indicates a multiplicity of one-to-many (1..\*). It means
  that each organisation in the 'organisations' table can be associated with zero to multiple users
  from the 'users' table.
- users to organisations: This association specifies a multiplicity of one-to-one (1..1). It
  signifies that each user in the 'users' table is uniquely associated with one organisation in the
  'organisations' table.
