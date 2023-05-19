[Back to Index](Index.md)

# 2023 T1 Hand-Over Document

## Purpose of Document

This document aims to inform potential collaborators about the project progress and accomplishments.
It guides collaborators by outlining the next steps and actions they should take. The document
ensures project continuity and coherence by detailing previous work. It helps newcollaborators
understand the project status and build on it. This document also helps future collaborators make
strategic and informed decisions. It helps themidentify gaps, challenges, and opportunities and
suggests next steps. It streamlines projectefforts, and empowers future collaborators to effectively
contribute to project success byleveraging past successes and experiences.

## Project Overview, Goals, and Objectives

The Task Submission and Redesign Project, which is a component of the Ontrack Project, has clear
goals and objectives aimed at enhancing the functionality and efficiency of the existing product.
The primary objective of the project is to modify the current system in a way that allows each
submitted artifact to be easily displayed and interpreted by users.

The project also helps markers inspect these artefacts, who evaluate and provide feedback. The
project aims to speed up marking by helping markers quickly evaluate artefacts, and hence improve
evaluation efficiency. The Task Submission and Redesign Project aims to streamline marking and add a
chatbot. The chatbot will mediate marker-student activities. The chatbot may help, answer questions,
guide, and facilitate communication.

Overall, the Task Submission and Redesign Project optimizes artefact submission and evaluation. The
project aims to improve user experience, efficiency, and collaboration between markers and students
in the Ontrack Project by introducing different submitted artefact display, efficient marking
procedures, and a chatbot.

## Project Deliverables

This sections outlines project deliverables for 2023 T1. For overall project deliverables, please
check the markdown docment in
[thoth-tech/documentation](https://github.com/thoth-tech/documentation/blob/main/docs/OnTrack/Task%20Submission%20%26%20Redesign/Deliverables.md).

### Short-term (2023 T1)

### Documentation Oriented

- [x] Update the project epic (make it relevant to T1/2023).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Update the document that outlines the deliverable items of the project.

  - A markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/blob/main/docs/OnTrack/Task%20Submission%20%26%20Redesign/Deliverables.md).

- [x] Create a T1/2023 hand-over document.

  - A markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Update the project Index (make it relevant to T1/2023).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Update the project Onboarding (make it relevant to T1/2023).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Update the project Scope Sign Off Document (to reflect scope changes relevant to T1/2023).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

### Front-end Oriented

#### Design

- [x] Create frame-by-frame flows of tutors using the primary design.

  - Multiple images and a video showcase, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign/design_images),

  - Additional information: These flows should determine whether an alteration to the single,
    primary design is required and what specific alteration is required. This could be broken down
    into tasks regarding specific flows for showing the use of specific features.

- [x] Create `TaskSubmissionEnhancement` new Features to the student-view design.

  - Multiple images and a video showcase in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign/design_images),
    as output from [Figma](https://www.figma.com/).

  - A markdown document that explains the functions and implementation of the new features in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

#### Code

- [x] Create `Submission enhancement test environment` for the new features on Student View.

  - A source code of the test environment, demonstration video to showcase the new features and how
    it could present in Ontrack with additional documentation in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

### Cyber-security Oriented

- [x] Create a document that outlines the cybersecurity concerns of the current changes.

  - A markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Create a document that introduce administrators to potential cyber security threats or issues.

  - A markdown document (or multiple) in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

- [x] Create a code script of malware-detection software to implement for the new feature.

  - A markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

## State of Project When Received

- Several key stakeholders had been identified and several user stories and features had been
  derived from the stakeholder personas.
- Two designs (Student and Tutor) had been found in Figma.
- The "`chathistorydisplayer-api`" and "`chathistorydisplayer-web`" applications were redefined as
  an API and a web interface geared towards testing the API.
- The "`chathistorydisplayer-api`" application had its containerisation refactored, the
  "`chathistorydisplayer-web`" application was containerised, Docker Compose was integrated, quality
  of life features were integrated, and 83 offenses were fixed manually.
- The "`chathistorydisplayer-api`" application was altered to facilitate the creation of user
  directories, project directories, and write files from JSON payloads. An API end-point was created
  to fetch the most recent git diff of a file, and API end-points were created to handle the
  deletion of user directories, project directories, and files in project directories.
- The `chathistorydisplayer-api` application was located in the directory called `emulator` in the
  [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer) repository.
- The `chathistorydisplayer-web` application is located in the directory called `frontEndSimulator`
  in the [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer)
  repository.
- More information can be found in the 2022 T3 Handover Document: A markdown document in
  [thoth-tech/documentation](https://github.com/thoth-tech/documentation/tree/main/docs/OnTrack/Task%20Submission%20%26%20Redesign).

## State of Project at Hand-Over

- Frame-by-frame flows of tutors performing current and new proposed features using the primary
  design have been created.
- The design enhancements, specifically the `TaskSubmissionEnhancement`, have been incorporated into
  the student-view design.
- A test environment for `TaskSubmissionEnhancement` has been created for the new features on the
  Student View. The source code, a demonstration video showcasing the new features, and additional
  documentation are provided.
- A document outlining the cyber-security concerns related to propositional changes has been
  created.
- Documents introducing potential cyber-security threats or issues to OnTrack administrators have
  been prepared.
- A code script for malware-detection software implementation for the new feature has been provided.
- These completed deliverables demonstrate progress in different aspects of the project, including
  documentation updates, front-end design enhancements, code implementation, and consideration of
  cyber-security concerns. The project is now ready for handover, with comprehensive documentation
  and tangible outcomes that can serve as a foundation for future development and collaboration.

## What Next?

- Finalise Figma design for component student-views with client and UI enhancement team.
- Iterate on component source code and add ROR implementation if necessary.
- Implement submission enhancement features for production.
- Expand scope features such as automated task stage changing; for exxample if task is in Task not
  yet started stage, upload of a file will automatically change it to Working on it.
- Based on the student-views new components progress, work on integrating the new features into
  tutor-views after finalizing the Figma prototype for tutor-views with client to UI enhancement
  team.
- Read 2023 T1 Project Weekly updates, Meeting Minutes and other documents in the project TEAMS
  channel.

- Read [Project On-boarding](Project-On-Boarding.md)
