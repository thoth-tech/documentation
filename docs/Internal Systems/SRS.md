# Software Requirements Specification for Documentation & Infrastructure Systems

Table of Contents

Table of Contents
...........................................................................................................................
ii

Revision History
.............................................................................................................................
ii

1. Introduction
   .............................................................................................................................
   1

1.1 Purpose
.................................................................................................................................
1

1.2 Intended Audience and Reading Suggestions
........................................................................... 1

1.3 Project Scope
.........................................................................................................................
2

2. Overall Description
   .................................................................................................................
   2

2.1 Intended Audience
.................................................................................................................
2

2.2 Intended Use Case
..................................................................................................................
3

2.3 Established User Needs
..........................................................................................................
4

2.4 Assumptions and Dependencies
.............................................................................................. 4

3. System Features
   .......................................................................................................................
   5

4. External Interface Requirements
   ........................................................................................... 6

4.1 User Interfaces
.......................................................................................................................
6

4.2 Software Interfaces
.................................................................................................................
7

5. Final Information & Requirements
   .....................................................................................................
   7

5.1 Performance Requirements
.....................................................................................................
7

5.2 Nonfunctional Requirements
...................................................................................................
8

5.3 Security Requirements
............................................................................................................
8

5.4 Definitions & Acronyms
.........................................................................................................
8

### Revision History

| <b>Name</b> | <b>Date</b> | <b>Reason For Changes</b> | <b>Version</b> | | Early Trimester 2 |
8/7/22 | First Instance, Future Iterations to Add Below | 1.0 | | | | | | | | | | |

# 1.Introduction

## 1.1 Purpose

The purpose and direction for the Documentation and Infrastructure systems (DIS) team lies with
developing a website that will include all information, documentation, and reports for capstone
projects completed within Thoth Tech and beyond. Providing an information hub where data and
contributions can be accessed in a centralised area has been identified as a key requirement for the
organization, identified through team meetings, user stories and guidance from the leadership team.

This requirement document will seek to establish an intended audience, use case and scope whilst
providing clarification on technical terminology and acronyms. Dependencies, topologies, interface
requirements and functionality will be covered to provide a clear and efficient path to develop the
centralised website.

## 1.2 Intended Audience and Reading Suggestions

During this stage of research and development, the intended audience for reading is strictly members
of the Thoth Tech organization. More specifically, the document will be shared between members of
the DIS team and members of leadership or management within the organization. It is important that
information pertaining to the creation or development of tools to be used by Thoth Tech remains
accessible only to members or leaders of the company.

The following documents are recommended to be read alongside the SRS document:

### Individual Documents

- 11.1 Internal Systems Report - Ishrat Jahan

- GitHub Hosting - Ishrat Jahan

- Internal Systems Epic - Ishrat Jahan

- Research for the Design Prototype - Ishrat Jahan

### Collections

- CI, CD Research (Folder), All Works - Various Contributors

- Translated to Markdown (Folder), All Works - Various Contributors

## 1.3 Project Scope

The intention of the project for T2, 2022 is to create a comprehensive and organized website where
members of capstone organisations can upload, download, exchange, collaborate and organize various
types of documented works as it pertains to the progression of projects within the Deakin IT
Capstone programs. Throughout the semester, working prototypes will be developed and visualized
using various software.

Cloud hosting, creation of a code base, generation of a testing methodology and establishment of a
structure for the repositories will serve as the project focus and scope. Aligning these efforts
against established user stories and against the feedback of leadership team members is essential to
reduce scope creep and to ensure that the project deliverables are provided in a timely and orderly
fashion.

# 2.Overall Description

## 2.1 Product Perspective

The origin of this project can be traced to research finalized in Trimester One of 2022, where past
senior members of the Thoth Tech team were tasked with establishing projects of interest and
focusing on the needs of future Deakin University students undertaking units as part of the revised
IT Capstone structure. The website as a product will exist as new, there are no previous products to
support its existence as a 'follow-on member', consequently there will be no replacement of an
existing infrastructure. Contextualized using topology, the website will be at the top of Thoth Tech
projects and beyond. Regardless of team, project focus or contribution type, the DIS team will be
creating a website that can host and hold all the data previously mentioned.

The following Architecture Repository diagram created by The Open Group will help the DIS team to
identify different requirements of the prototype and how they interconnect to promote continuity and
support further development from future capstone cohorts:

## 2.2 Product

Features of the website and what users will be able to do can be summarized under the following
categories:

- Upload files of various formats (PNG, JPG, PDF, HTML, PY, XML etc.)

- Provide a way to download files, so information can be accessed at any time.

- Provide a login for students and faculty of Deakin University, to promote privacy and security of
  information.

- Present all Capstone projects visually, so that individual projects and subtasks can be navigated
  to with ease.

- Include a navigation bar to help access all aspects of the website, regardless of whether it is
  accessed on mobile, laptops or desktop computers.

## 2.3 Established User Needs

The methodology and rationale for generating User Needs came from the User stories system, common
with software development and product management practices utilized by Deakin Capstone
organisations. Informal and general explanations of desired software features can be refined and
shaped into more precise functionality requirements which can strengthen the feature set of the
website prototype.

Current and finalized user needs (August 2022) are:

- Archivism Features so current semester works are presented at default, whilst still allowing for
  access of previous trimester contributions.

- Specific storage locations for meeting minutes, which can be secured via secured sign on (SSO) for
  delivery leads.

- A scalable and structured filesystem, which will withstand increased usage in future.

- A universal and straightforward upload/download procedure, so that information can be obtained and
  shared regardless of a device, operating system, or display layout.

- Onboarding material presented at the first login/access to the website, to ensure new students are
  well versed in the expectations and processes for capstone units.

- A system for displaying contributors and editors of various file types, to make tracking
  contributions and efforts of students easier.

## 2.4 Assumptions and Dependencies

It is assumed that users of the working website will be using Windows, MacOS, iOS or Android on
their devices to access the product. Catering to an excessively broad range of Operating System
types would likely slow progress and cause deliverable dates to either be pushed back or not met.

It is assumed that personnel working on the enhancement of the prototype are versed and upskilled in
Gatsby and Markdown methodologies. In the initial stages of the prototype, the file types that are
used for upload and download will be limited to test functionality. JPG, PDF and DOCX are some
examples of common types.

The use of Gatsby as a website generator promotes consideration for plugin support and how
third-party features may integrate or clash with the prototype. Gatsby and Markdown being used for
front-end and back-end development will also shape the testing methodology for performance,
reliability, and usability of the prototype. Testing types and examples must be able to demonstrate
either support for continually using these methodologies or providing a clear direction on what
could be changed to improve the website and enhance the user experience.

## 3. Functional Requirements

There are a multitude of functional requirements for the DIS team to incorporate and demonstrate
within the prototype. Services, features, and functions of the website are all created to support
the documentation sharing experience among Deakin Capstone students and faculty alike. Design
Prototype research conducted by team lead Ishrat provide clear insight into what is required from a
functionality standpoint for the project:

- Large scale, clear and legible typography for key messages about access to services, key headings,
  and navigation support.

- Capstone area division based on project discipline, and internal links to access specific works.

- Contributions within projects clearly listed in grid array,
- in chronological order to promote organized presentation of large amounts of information.

- Forms of contact for support and feedback at the bottom of the website, which will feed inquiries
  into a ticket-based system likely supported by existing Deakin University infrastructure.

- The use of hyperlinks to connect students and faculty to related information about a project. This
  can promote access to a broad range of resources whilst also reducing clutter and information
  overload on any single page of the website.

# 4 External Interface Requirements

## 4.1 User Interfaces

User Interfaces relate to the user experience and how the website will look. This ties into the
usability and efficiency of the website. Previous research resulted sample pages of an earlier
prototype being created, which demonstrate the rationale for colour palettes, typography, and use of
infographics.

## 4.2 Software Interfaces

As with any website, there are multiple software types used which both serve to promote individual
improvements to functionality but must also combine to support a finished product. Through extensive
research conducted in Trimester One identified which tools will be used for front-end/back-end
development, cloud hosting.

GitHub Actions will be used, as existing documentation has been uploaded to GitHub and does not
require the creation of an additional website to harness its capabilities. It will be used to
practice endless numbers of process in the software development. It supports the programming
languages identified as fit for purpose for the project (Java, C++/C#/C).

Gatsby is the open-source front-end development framework chosen for the creation of the website.
Innovative data layers which support integration of service into a single web page was particularly
captivating to the development team. Inbuilt plugins and its fast navigation driven page rendering
technology will allow instant access to multiple pages and files within the website.

Markdown will be used as a text formatter for plaintext through various files. Given it is a markup
language, readability is the primary focus and the option of being able to convert to HTML is
appealing. There is a version of markdown also being utilized in GitHub, which benefits the efforts
of the DIS team as it will be found in more than one place the team is working.

# 5 Final Information & Requirements

## 5.1 Performance Requirements

The performance of the website upon completion will be a key influencer either positive or negative,
for the user (students and faculty) experience. The most important metrics that the team will be
testing and tracking through the lifespan of the product are time to title, interaction times, DNS
lookup time, byte weight (important as the website expands) and the efficiency/reliability of any
third-party domains that may be employed throughout.

## 5.2 Nonfunctional Requirements

Given the website is designed to exist in perpetuity, continually expanding and hosting larger
amounts of data as the Capstone companies continue to innovate, the website capacity to hold growing
volumes of data is important. The initial prototype will need to be deployed with large overhead and
will need to be regularly viewed through the life of the capstone program, to ensure scalability is
upheld.

The maintainability, manageability and usability of the website will need to be regularly reviewed.
Testers will need to take the perspective of a student or faculty member to understand what aspects
of the website work well, work could be done better and to note any changes that need to take effect
immediately.

## 5.3 Security Requirements

The information, documentation and data shared within the website is of a sensitive nature. Academic
integrity must be upheld through the security of the website. Utilising existing Deakin systems such
as SSO and Two Factor Authentication (2FA) through Duo Mobile will ensure that only permitted
members of Deakin University faculty and the student cohort can access the material.

The deployment of web application firewalls to prevent hacks and/or attacks, along with the
existence of HTTPS and SSL certificates will help uphold the security of the nature, promoting its
existence as reliable and trustworthy. This can be deployed through code scripts written from
scratch or through third-party vendors such as GoDaddy or Cisco.

## 5.4 Definitions & Acronyms

### Acronyms

- 2FA: Two Factor Authentication

- DIS: Documentation Infrastructure Systems

- DNS: Domain Name System

- HTML: Hypertext Markup Language

- HTTPS: Hypertext Transfer Protocol

- SSO: Single Sign On

- SSL: Secure Socket Layer

- SQL: Structured Query Language

### Definitions

- DNS The hierarchical and decentralized naming system used to identify computers reachable through
  the Internet or other network protocols.

- HTML The standard markup language for documents designed to be displayed in web browsers.

- HTTPS Extension of HTTP, used for secure communication over computer networks.

- Gatsby A React based open-source framework designed with performance, scalability, and security in
  mind.

- Markdown A lightweight markup language for creating formatted text using a plain-text editor.

- Repository A central location in which data is stored and managed.

- SSL A cryptographic protocol for Providing secure communications over a computer network.

- SSO An authentication scheme that allows a user to login with a single ID to more than one
  software system.

- SQL Domain specific language used for programming and managing data held in relational database
  system or processing data stream.

- Typography The style and appearance of printed matter.

- Website A set of related web pages located under a single domain name, typically produced by a
  single person or organisation.
