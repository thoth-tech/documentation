# Software Requirements Specifications Document

Deployment OnTrack Delivery

1. **Introduction**

1.1 Product purpose

Currently, there are three different product purposes within the deployment deliverable. The first of which is the google cloud team, and their focus is creating a student-run / student-hosted deployment of Ontrack separate from the Deakin Version. The second team is working on developing a pipeline between the two versions of the OnTrack system, that will streamline development and functionality. Lastly, the Enhance authentication team is working on creating new authentication systems for students to access their OnTrack account.

1.2 &amp; 1.3 Intended audience / use

The intended audience is both system admins and users of OnTrack. Both the google cloud and pipeline team will focus on a product that intended for the use of product owners only, but the enhance authentication team will focus on a product that both system admins and users can use, as system admins will be able to reset students&#39; passwords and Provide password management for LDAP and database implementations. The product users will also have enhanced functionality with authentication, as they will have new features which will allow them to create a new or obtain their old password.

1.4 Scope

The scope of the project is to create an upgraded deployment of the OnTrack system, in which, the system will be student-run/ hosted via google cloud, A pipeline build that will focus on version control, acceptance testing, independent deployment and production deployment. Lastly, the inclusion of a refreshed authentication system that will assist both product users and system admins of the OnTrack system.

1. **Description of overall System**

2.1 User requirements

The requirements below are what is needed for both system admins and product users.

users

- Ability to access and check my passwords, including previously used ones, and change currently using
- Assurance that the authentication solution is secure, so that my passwords and other information is not publicly disclosed.
- An authentication solution to be reliable and respond swiftly, so that I can access my account as needed and on-demand.
- Ability to reset my Ontrack password myself, so I don&#39;t need to contact a system administrator
- up-to-date version of OnTrack hosted on GCP so that I won&#39;t have to wait for the service to be manually updated.

System admin

- Have user&#39;s passwords stored in a secure
- have a database that is easy and low costing to maintenance and easy to be consistent with future add-ons
- in-house authentication solution developed that meets all our authentication needs
- Ability for students to reset their Ontrack password themself, so they don&#39;t need to contact a system administrator
- access the OnTrack via a link to see what different developers have done.
- student hosted version of OnTrack, as it will make it easier to complete more tasks
- pipeline to be as simple and maintainable as possible
- generic deployment pipeline that can be changed in future

2.2 Assumptions and dependencies

Assumptions and dependencies of the product user include:

students will forget their password to OnTrack, students&#39; passwords will be secure, students will need to change their passwords, students will need a copy of their current password, system will be able to deal with multiple password requests at once

Assumptions and dependencies of the system admin include:

Students will have the skillset to maintain a student deployed version of OnTrack, future iterations will be made to the current system, system admins will need acceptance testing, students will have the skillset to develop future iterations, system will handle multiple iteration updates at once

1. **System Requirements**

Google cloud

- Allow dev ops engineer to deploy the docker container on Google cloud Platform.
- Allow access to OnTrack users via URL from anywhere.
- Allow OnTrack developers to package Doubtfire api and Doubtfire Web into the standalone applications.

Pipeline build

- Allow for version control
- Allow for system admins to use acceptance testing
- independent deployment
- production deployment

Enhance Authentication

- Allow users to simply access and reset their passwords
- Allow administrator to send request to reset other users&#39; passwords
- Securely manage user information and passwords
- Securely and accurately authenticate users
- Operates fully in-house and without third-party usage or dependencies
