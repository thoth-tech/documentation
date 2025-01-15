# Deliverable Items

## Purpose of this Document

This document outlines the deliverable items the Task View and Submission Redesign project intends
to deliver upon. Each trimester, this document is to be reassessed. All team members are expected to
express their expertise by breaking down deliverable items into smaller, actionable tasks on a
collaborative technology such as Trello.

## Structure of the Deliverable Items Document

All deliverable items are grouped into roles, but team members are allowed (and encouraged) to
operate outside of their selected roles.

All deliverable items have the common form:

- [ ] What needs to be done.
  - What evidence needs to be produced to show this is completed or on-going.
  - (OPTIONAL) Pre-requisites: The pre-requisite deliverable items for this deliverable.
  - (OPTIONAL) Additional information: Any additional information that may inform a reader about the
    deliverable.

These deliverable items should then be decomposed into constituting tasks, mediated by some
collaborative technology (for example, [Trello](https://trello.com/)).

All team members should participate in the decomposition of deliverable items. Team members are also
encouraged to contribute ideas for deliverable items, as informed by their CLOs.

## Deliverable Items

### Purely Documentation Oriented

- [x] Modify the project epic (make it relevant to T1/2023).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [x] Modify/Update a document that outlines the deliverable items of the project.

  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [x] Create a T1/2023 hand-over document.
  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

### Front-end Oriented

#### Design

- [ ] Create frame-by-frame flows of tutors performing current and new features.

  - Multiple images and a video showcase, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as output from
    [Figma](https://www.figma.com/).

  - Pre-requisite: A single, primary design must be selected for this to be followed through with.

- [ ] Create frame-by-frame flows of students performing current and new features.

  - Multiple images, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

  - Pre-requisite: A single, primary design must be selected for this to be followed through with.

  - Additional information: These flows should determine whether an alteration to the single,
    primary design is required and what specific alteration is required. This could be broken down
    into tasks regarding specific flows for showing the use of specific features.

- [ ] Complete the tutor-view design on [Figma](https://www.figma.com/).

  - An image, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

  - Pre-requisite: The creation of all the flows of the single, primary tutor-view design.

  - Additional information: This deliverable item is completed once all changes, as informed by
    usability and smart default problems obtained from the construction of the flows, are fixed.

- [x] Complete the student-view design on [Figma](https://www.figma.com/).

  - An image, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/)

  - Pre-requisite: The creation of all the flows of the single, primary student-view design.

  - Additional information: This deliverable item is completed once all changes, as informed by
    usability and smart default problems obtained from the construction of the flows, are fixed.

- [ ] Create new `TaskSubmissionEnhancement` Features to the student-view
      [Figma](https://www.figma.com/) design.

  - An image and video showcase, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create an administrator-view [Figma](https://www.figma.com/) design.

  - An image, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create a convenor-view [Figma](https://www.figma.com/) design.

  - An image, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create frame-by-frame flows of administrators performing current and new features.

  - Multiple images, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).
  - Pre-requisite: The administrator-view deliverable item from this deliverable document must be
    completed.

  - Additional information: This could be broken down into tasks regarding specific flows for
    showing the use of specific features.

- [ ] Create frame-by-frame flows of convenors performing current and new features.

  - Multiple images, as output from [Figma](https://www.figma.com/), in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

  - Pre-requisite: The conventor-view deliverable item from this deliverable document must be
    completed.

  - Additional information: This could be broken down into tasks regarding specific flows for
    showing the use of specific features.

#### Code

- [ ] Modify the existing front-end implementation of OnTrack to conform with any of the completed
      designs.

- [x] Expand the `chathistorydisplayer-web` web application.

### Back-end Oriented

#### Documentation

- [x] Create design propositions on how the `ChatHistoryDisplayer` integrates with the OnTrack
      platform.

  - An image file in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

#### `ChatHistoryDisplayer`

- [x] Refactor the implementation of Docker at `chathistorydisplayer-api`.

- [x] Implement Docker at `chathistorydisplayer-web`.

- [x] Integrate Docker Compose at the root of the [thoth-tech/ChatHistoryDisplayer] repository.

- [x] Add functionality to `chathistorydisplayer-api`: create user directories.

- [x] Add functionality to `chathistorydisplayer-api`: create project directories in user
      directories.

  - Additional information: Project directories must be initialised as git repositories.

- [x] Add functionality to `chathistorydisplayer-api`: write file from JSON payload.

  - Additional information: Pertains to text files.

- [x] Add functionality to `chathistorydisplayer-api`: API end-point that retrieves the last
      `git diff` of a text file.

- [ ] Add functionality to `chathistorydisplayer-api`: authorisation at API end-points.

- [ ] Add functionality to `chathistorydisplayer-api`: version control of PDF documents using the
      `git gem`.

#### `TaskSubmissionEnhancement`

- [ ] Create a prototype of `TaskSubmissionEnhancement` Component of the Ontrack platform that adds
      the following four features that would benefit both students and teaching staff:
  - The ability to submit files regardless of the task state.
  - The ability to submit individual task files.
  - The ability to submit optional additional files outside of the task requirements.
  - The ability to observe task file upload differences.

#### `Doubtfire`

- [ ] Modify OnTrack to serve raw files, where appropriate.

  - Additional information: This contributes towards the integration of the
    `chathistorydisplayer-api` into the OnTrack platform, as the OnTrack platform needs PDF
    processing removed and separate handling for different classes of files (text files and PDFs
    come to mind).

- [ ] The integration of `chathistorydisplayer-api` into the Docker environment of the OnTrack
      platform.

- [ ] Integrate `TaskSubmissionEnhancement` into the OnTrack platform.

### Cyber-security Oriented

- [ ] Create a document that outlines the cyber-security protocols for project group members.

  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create a document, or documents, that introduce OnTrack administrators to potential
      cyber-security threats or issues.

  - A markdown document (or multiple) in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create a document outlining the security concerns of propositional changes (or current enacted
      changes).

  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create a document that surveys group member compliance with security protocols.

  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).
