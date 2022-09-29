# **Software Requirements Specification**

#
**## for**

# **DreamBig**

**Version 1.0 \&lt;unapproved\&gt;**

**Prepared by DreamBig Documentation**

**Thoth Tech**

**Trimester 2 2022**

**Table of Contents**

**Table of Contents ii**

**Revision History ii**

**1. Introduction 1**

1.1 Purpose 1

1.2 Document Conventions 1

1.3 Intended Audience and Reading Suggestions 1

1.4 Project Scope 1

1.5 References 1

**2. Overall Description 2**

2.1 Product Perspective 2

2.2 Product Features 2

2.3 User Classes and Characteristics 2

2.4 Operating Environment 2

2.5 Design and Implementation Constraints 2

2.6 User Documentation 2

2.7 Assumptions and Dependencies 3

**3. System Features 3**

3.1 System Feature 1 3

3.2 System Feature 2 (and so on) 4

**4. External Interface Requirements 4**

4.1 User Interfaces 4

4.2 Hardware Interfaces 4

4.3 Software Interfaces 4

4.4 Communications Interfaces 4

**5. Other Nonfunctional Requirements 5**

5.1 Performance Requirements 5

5.2 Safety Requirements 5

5.3 Security Requirements 5

5.4 Software Quality Attributes 5

**6. Other Requirements 5**

**Appendix A: Glossary 5**

**Appendix B: Analysis Models 6**

**Appendix C: Issues List 6**

**Revision History**

| **Name** | **Date** | **Reason For Changes** | **Version** |
| --- | --- | --- | --- |
|
 |
 |
 |
 |
|
 |
 |
 |
 |

# 1.Introduction

## 1.1Purpose

The purpose of this document is to present a detailed description of the DreamBig application version 1.0. It will explain the purpose and features of the application, the interfaces of the application, what the application will do, the constraints under which it must operate and how it must be operated.

## 1.2Document Conventions

_\&lt;Describe any standards or typographical conventions that were followed when writing this SRS, such as fonts or highlighting that have special significance. For example, state whether priorities for higher-level requirements are assumed to be inherited by detailed requirements, or whether every requirement statement is to have its own priority.\&gt;_

## 1.3Intended Audience and Reading Suggestions

This document is written with a general audience in mind; however, it is intended for individuals directly involved in the development of the DreamBig application. This includes capstone students, teachers, developers, project members and team managers. This document may be read inconsecutively, with selecting the section(s) that is most relevant.

## 1.4Project Scope

In this project, we implement &#39;DreamBig&#39; which is a platform that can help the students in providing the employability skills while they are enrolled in their professional courses. Moreover, it can develop and improves the soft skills that are required in the corporate environment. We tend to use Ontrack application, which can help in tracking the progress of each student. Initially, we collect the user information from the university database. We integrate the data with Ontrack and collect the requirements of each student. We design our project with a login user interface, next we get access to the course details of each student. Depending on each student requirements, employability tasks can be selected according to their level.

The more we collect user data, the more it improves the accuracy of the application. The UI/UX designing makes the application more precise and user friendly. The employability tasks can help the upcoming graduates and bring on more confidence. Our project can lead to new pathway to educate students with their required professional skills. With &#39;DreamBig&#39; we can make it possible.

For the purpose of this project, we are to use the Trello and GitHub. Trello is a great tool for managing and collaborating with team members on work projects and tasks. Visually, Trello&#39;s Kanban board is an organizational bliss. We can cram a lot of detail into each card, and you&#39;ll always know who&#39;s working on what. But Trello isn&#39;t just about work. It can be used to organize almost anything, perhaps your entire life. Also, GitHub allows developers to upload their own code files and collaborate with other developers on open-source projects. GitHub also serves as a social networking site where developers can openly connect, collaborate, and share their work.

In addition to our goal, we can also improvise the application by implementation job search and recruitment option in near future, which can give access to the recruiters and professionals to visit students profile also their skills and achievements.

## 1.5References

- [**https://trello.com/b/KBs1dvqm/dreambig-doc-and-qa**](https://trello.com/b/KBs1dvqm/dreambig-doc-and-qa)
- [**https://github.com/**](https://github.com/)
- Olsen, T. (2018). Characteristics of &quot;Walled Garden&quot;crowdsourcingplatforms for global development.
- Piller, F. (2011). Open innovation with customers: Crowdsourcing andco-creation at threadless. A guide to open innovation andcrowdsourcing: Advice from leading experts. P. Sloane

# 2.Overall Description

## 2.1Product Perspective

_\&lt;Describe the context and origin of the product being specified in this SRS. For example, state whether this product is a follow-on member of a product family, a replacement for certain existing systems, or a new, self-contained product. If the SRS defines a component of a larger system, relate the requirements of the larger system to the functionality of this software and identify interfaces between the two. A simple diagram that shows the major components of the overall system, subsystem interconnections, and external interfaces can be helpful.\&gt;_

## 2.2Product Features

_\&lt;Summarize the major features the product contains or the significant functions that it performs or lets the user perform. Details will be provided in Section 3, so only a high level summary is needed here. Organize the functions to make them understandable to any reader of the SRS. A picture of the major groups of related requirements and how they relate, such as a top level data flow diagram or a class diagram, is often effective.\&gt;_

## 2.3User Classes and Characteristics

_\&lt;Identify the various user classes that you anticipate will use this product. User classes may be differentiated based on frequency of use, subset of product functions used, technical expertise, security or privilege levels, educational level, or experience. Describe the pertinent characteristics of each user class. Certain requirements may pertain only to certain user classes. Distinguish the favored user classes from those who are less important to satisfy.\&gt;_

## 2.4Operating Environment

_\&lt;Describe the environment in which the software will operate, including the hardware platform, operating system and versions, and any other software components or applications with which it must peacefully coexist.\&gt;_

## 2.5Design and Implementation Constraints

_\&lt;Describe any items or issues that will limit the options available to the developers. These might include: corporate or regulatory policies; hardware limitations (timing requirements, memory requirements); interfaces to other applications; specific technologies, tools, and databases to be used; parallel operations; language requirements; communications protocols; security considerations; design conventions or programming standards (for example, if the customer&#39;s organization will be responsible for maintaining the delivered software).\&gt;_

## 2.6User Documentation

_\&lt;List the user documentation components (such as user manuals, on-line help, and tutorials) that will be delivered along with the software. Identify any known user documentation delivery formats or standards.\&gt;_

## 2.7Assumptions and Dependencies

_\&lt;List any assumed factors (as opposed to known facts) that could affect the requirements stated in the SRS. These could include third-party or commercial components that you plan to use, issues around the development or operating environment, or constraints. The project could be affected if these assumptions are incorrect, are not shared, or change. Also identify any dependencies the project has on external factors, such as software components that you intend to reuse from another project, unless they are already documented elsewhere (for example, in the vision and scope document or the project plan).\&gt;_

# 3.System Features

_\&lt;This template illustrates organizing the functional requirements for the product by system features, the major services provided by the product. You may prefer to organize this section by use case, mode of operation, user class, object class, functional hierarchy, or combinations of these, whatever makes the most logical sense for your product.\&gt;_

## 3.1System Feature 1

_\&lt;Don&#39;t really say &quot;System Feature 1.&quot; State the feature name in just a few words.\&gt;_

3.1.1 Description and Priority

_\&lt;Provide a short description of the feature and indicate whether it is of High, Medium, or Low priority. You could also include specific priority component ratings, such as benefit, penalty, cost, and risk (each rated on a relative scale from a low of 1 to a high of 9).\&gt;_

3.1.2 Stimulus/Response Sequences

_\&lt;List the sequences of user actions and system responses that stimulate the behavior defined for this feature. These will correspond to the dialog elements associated with use cases.\&gt;_

3.1.3 Functional Requirements

_\&lt;Itemize the detailed functional requirements associated with this feature. These are the software capabilities that must be present in order for the user to carry out the services provided by the feature, or to execute the use case. Include how the product should respond to anticipated error conditions or invalid inputs. Requirements should be concise, complete, unambiguous, verifiable, and necessary. Use &quot;TBD&quot; as a placeholder to indicate when necessary information is not yet available.\&gt;_

_\&lt;Each requirement should be uniquely identified with a sequence number or a meaningful tag of some kind.\&gt;_

REQ-1:

REQ-2:

## 3.2System Feature 2 (and so on)

# 4.External Interface Requirements

## 4.1User Interfaces

_\&lt;Describe the logical characteristics of each interface between the software product and the users. This may include sample screen images, any GUI standards or product family style guides that are to be followed, screen layout constraints, standard buttons and functions (e.g., help) that will appear on every screen, keyboard shortcuts, error message display standards, and so on. Define the software components for which a user interface is needed. Details of the user interface design should be documented in a separate user interface specification.\&gt;_

## 4.2Hardware Interfaces

_\&lt;Describe the logical and physical characteristics of each interface between the software product and the hardware components of the system. This may include the supported device types, the nature of the data and control interactions between the software and the hardware, and communication protocols to be used.\&gt;_

## 4.3Software Interfaces

_\&lt;Describe the connections between this product and other specific software components (name and version), including databases, operating systems, tools, libraries, and integrated commercial components. Identify the data items or messages coming into the system and going out and describe the purpose of each. Describe the services needed and the nature of communications. Refer to documents that describe detailed application programming interface protocols. Identify data that will be shared across software components. If the data sharing mechanism must be implemented in a specific way (for example, use of a global data area in a multitasking operating system), specify this as an implementation constraint.\&gt;_

## 4.4Communications Interfaces

_\&lt;Describe the requirements associated with any communications functions required by this product, including e-mail, web browser, network server communications protocols, electronic forms, and so on. Define any pertinent message formatting. Identify any communication standards that will be used, such as FTP or HTTP. Specify any communication security or encryption issues, data transfer rates, and synchronization mechanisms.\&gt;_

# 5.Other Nonfunctional Requirements

## 5.1Performance Requirements

_\&lt;If there are performance requirements for the product under various circumstances, state them here and explain their rationale, to help the developers understand the intent and make suitable design choices. Specify the timing relationships for real time systems. Make such requirements as specific as possible. You may need to state performance requirements for individual functional requirements or features.\&gt;_

## 5.2Safety Requirements

_\&lt;Specify those requirements that are concerned with possible loss, damage, or harm that could result from the use of the product. Define any safeguards or actions that must be taken, as well as actions that must be prevented. Refer to any external policies or regulations that state safety issues that affect the product&#39;s design or use. Define any safety certifications that must be satisfied.\&gt;_

## 5.3Security Requirements

_\&lt;Specify any requirements regarding security or privacy issues surrounding use of the product or protection of the data used or created by the product. Define any user identity authentication requirements. Refer to any external policies or regulations containing security issues that affect the product. Define any security or privacy certifications that must be satisfied.\&gt;_

## 5.4Software Quality Attributes

_\&lt;Specify any additional quality characteristics for the product that will be important to either the customers or the developers. Some to consider are: adaptability, availability, correctness, flexibility, interoperability, maintainability, portability, reliability, reusability, robustness, testability, and usability. Write these to be specific, quantitative, and verifiable when possible. At the least, clarify the relative preferences for various attributes, such as ease of use over ease of learning.\&gt;_

# 6.Other Requirements

_\&lt;Define any other requirements not covered elsewhere in the SRS. This might include database requirements, internationalization requirements, legal requirements, reuse objectives for the project, and so on. Add any new sections that are pertinent to the project.\&gt;_

**Appendix A: Glossary**

_\&lt;Define all the terms necessary to properly interpret the SRS, including acronyms and abbreviations. You may wish to build a separate glossary that spans multiple projects or the entire organization, and just include terms specific to a single project in each SRS.\&gt;_

**Appendix B: Analysis Models**

_\&lt;Optionally, include any pertinent analysis models, such as data flow diagrams, class diagrams, state-transition diagrams, or entity-relationship diagrams_.\&gt;

**Appendix C: Issues List**

_\&lt; This is a dynamic list of the open requirements issues that remain to be resolved, including TBDs, pending decisions, information that is needed, conflicts awaiting resolution, and the like.\&gt;_

