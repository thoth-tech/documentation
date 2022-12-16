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

```
- [ ] What needs to be done.
    - What evidence needs to be produced to show this is completed or on-going.
    - (OPTIONAL) Pre-requisites: The pre-requisite deliverable items for this deliverable.
    - (OPTIONAL) Additional information: Any additional information that may inform a reader about the deliverable.
```

These deliverable items should then be decomposed into constituting tasks, mediated by some
collaborative technology (for example, [Trello](https://trello.com/)). All team members should
participate in the decomposition of deliverable items. Team members are also encouraged to
contribute ideas for deliverable items, as informed by their CLOs.

## Deliverable Items

### Documentation Oriented

- [x] Modify the project epic (make it relevant to T3/2022).

  - A modification to a markdown document in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [x] Create a document that outlines the deliverable items of the project.

  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create a T3/2022 hand-over document.
  - A markdown document in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

### Front-end Oriented

- [ ] Create multiple artefacts that explain the smart defaults of the tutor- and student-views.

  - A markdown document and/or image files in
    [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Create frame-by-frame flows of tutors performing current and new features using the primary
      design.

  - Multiple images in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as
    output from [Figma](https://www.figma.com/).

  - Pre-requisite: A single, primary design must be selected for this to be followed through with.

  - Additional information: These flows should determine whether an alteration to the single,
    primary design is required and what specific alteration is required.

- [ ] Create frame-by-frame flows of students performing current and new features using the primary
      design.

  - Multiple images in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as
    output from [Figma](https://www.figma.com/).

  - Pre-requisite: A single, primary design must be selected for this to be followed through with.

  - Additional information: These flows should determine whether an alteration to the single,
    primary design is required and what specific alteration is required.

- [ ] Complete the tutor-view design on [Figma](https://www.figma.com/).

  - An image in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as output
    from [Figma](https://www.figma.com/).

  - Pre-requisite: The creation of all the flows of the single, primary tutor-view design.

  - Additional information: This deliverable item is completed once all changes, as informed by
    usability and smart default problems obtained from the construction of the flows, are fixed.

- [ ] Complete the student-view design on [Figma](https://www.figma.com/).

  - An image in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as output
    from [Figma](https://www.figma.com/).

  - Pre-requisite: The creation of all the flows of the single, primary student-view design.

  - Additional information: This deliverable item is completed once all changes, as informed by
    usability and smart default problems obtained from the construction of the flows, are fixed.

- [ ] Create frame-by-frame flows of students performing current and new features using the primary
      design.

  - Multiple images in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as
    output from [Figma](https://www.figma.com/).

- [ ] Create an administrator-view [Figma](https://www.figma.com/) design.

  - An image in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as output
    from [Figma](https://www.figma.com/).

- [ ] Create a convenor-view [Figma](https://www.figma.com/) design.

  - An image in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as output
    from [Figma](https://www.figma.com/).

- [ ] Create frame-by-frame flows of administrators performing current and new features using the
      new administrator-view design.

  - Multiple images in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as
    output from [Figma](https://www.figma.com/).

  - Pre-requisite: The administrator-view deliverable item from this deliverable document must be
    completed.

- [ ] Create frame-by-frame flows of convenors performing current and new features using the new
      convenor-view design.

  - Multiple images in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/), as
    output from [Figma](https://www.figma.com/).

  - Pre-requisite: The conventor-view deliverable item from this deliverable document must be
    completed.

- [ ] Modify the existing front-end implementation of OnTrack to conform with the completed and
      approved designs.

  - Addition, subtraction, or alteration of the team fork of doubtfire-web.

- [ ] Expand on the front-end of the `ChatHistoryDisplayer` application.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

### Back-end Oriented

- [x] Refactor the implementation of Docker in the back-end of the `ChatHistoryDisplayer`
      application.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [x] Implement a developer environment, via Docker, into the front-end of the
      `ChatHistoryDisplayer` application.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [x] Integrate Docker Compose to configure the front-end container and the back-end container with
      `docker compose up`.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [x] Add the functionality to the `ChatHistoryDisplayer` application to create user directories.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [x] Add the functionality to the `ChatHistoryDisplayer` application to create project directories
      and initialise these directories as git repositories.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

  - Pre-requisite: The create user directories function.

  - Additional information: Project directories are created in user directories, that is why that is
    a pre-requisite.

- [x] Add to the API of the `ChatHistoryDisplayer` application.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [ ] Extend the functionalities of the back-end of the `ChatHistoryDisplayer` application.

  - Addition, subtraction, or alteration of
    [thoth-tech/ChatHistoryDisplayer](https://github.com/thoth-tech/ChatHistoryDisplayer/).

- [x] Create design propositions on how the `ChatHistoryDisplayer` integrates with the OnTrack
      platform.

  - An image file in [thoth-tech/documentation](https://github.com/thoth-tech/documentation/).

- [ ] Modify OnTrack to serve raw files, where appropriate.
  - Addition, subtraction, or alteration of the team fork of doubtfire-api.

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
