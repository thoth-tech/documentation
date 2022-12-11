[Back to index](Index.md)

## Author Information

---

- Authors: [Ricky Dodd](https://github.com/rickydodd), [Grady Ramsay](https://github.com/Gradox9),
  [Mat Perkins](https://github.com/mperkins808).
- Team: OnTrack - Task view and submission redesign
- Team (Delivery and/or Product) Lead: Grady Ramsay

## Document Summary

---

- Documentation Title: Epic Document
- Documentation Type: Technical
- Documentation Information Summary: Epic Project document detailing implementation of the task view
  and submission redesign project.

## Document Review Information

---

- Date of Original Document Submission to GitHub: 22/09/2022
- Documentation Version: 1.0
- Date of Previous Documentation Review: 22/09/2022
- Date of Next Documentation Review: To be decided

## Key Terms

---

Trello: A web-based list-making application designed with a focus on teams that implement a Kanban
or scrum style of organisation. Figma: A web-based application for user interface and user
experience design. UI: User Interface; the means by which a human interacts with a machine, these
are typically graphical interfaces that accept input from an end-user. UX: User Experience; all
aspects of the end-user's interactions with an application or device.

## Key Links/Resources

---

- [OnTrack Overseer Repository](https://github.com/thoth-tech/doubtfire-overseer)
- [OnTrack Web Repository](https://github.com/thoth-tech/doubtfire-web)
- [OnTrack API Repository](https://github.com/thoth-tech/doubtfire-api)

## Contacts for further information

---

see [Thoth Tech Handbook](https://github.com/thoth-tech/handbook/blob/main/README.md)

## Related Documents

---

- [Task Submission redesign requirements and specifications document](Requirements.md)

# View Task and Submission Epic Document

## Background / Context

OnTrack is employed by multiple institutions as a learning management system. The View Task and
Submission project intends to create modern, user-centric modifications to the OnTrack platform.
OnTrack requires the modification of existing features, addition of new features, and an overhaul of
the UI/UX.

## Business Value

By further modernising OnTrack, institutions can deploy the OnTrack platform to satisfy the needs of
their students, markers, assessors, and auditors. The platform can support all stakeholders to
fulfil their obligations and, in the case of the student, support the learning of essential
concepts.

## In Scope

- Design planning and documentation
- Removal of redundant features
- Modification of existing features
- Addition of new features
- Task view for students
- Task submission for students
- Task view for markers
- Front-end
- Back-end
- Security
- Database

## Out of Scope

- Visual flavour
- Logo

## What Must Happen

- Organise a meeting with a managing director, the OnTrack area lead, and project team to ensure
  requirements are communicated first-hand.
- Create user stories derived from several stakeholder personas.
- Four high-fidelity wire-frames must be created using [Figma](https://www.figma.com/).
  - Of these, two must be selected by a managing director and the OnTrack area lead.
- Two high-fidelity wire-frames must be further refined, working on interation-based feedback and
  incorporating OnTrack's visual style.
  - Of these, one must be selected by the managing director and the OnTrack area lead.
- A prototype must be created using [Figma](https://www.figma.com/).
  - The prototype must have model the design.
- A document must be created that contains the current interface the back-end provides the
  front-end.
- A proof of concept must be created for the back-end.

## Assumptions / Dependencies

- All additional functions and features can work when implemented to the student and assessor views.
- Deployment can't create any additional security risks.

## UI/UX Considerations

- Navigability
  - Can all features be navigated to?
    - New features?
    - Previous features that were retained?
    - A prototype must be created that models the design.
- Accessibility

## Regulation & Compliance Considerations

- Storage and privacy of user's data.
- Security
- Retention policy.

## Operations / Support / Training Considerations

Team members may require training/up-skilling in applications, technologies, and languages, such as:

- [GitHub](https://github.com/),
- [Figma](https://figma.com/),
- [Docker](https://www.docker.com/),
- [C#](https://docs.microsoft.com/en-us/dotnet/csharp/),
- [Ruby on Rails](https://rubyonrails.org/),
- [Python](https://www.python.org/),
- [TypeScript](https://www.typescriptlang.org/),
- [Bootstrap](https://getbootstrap.com/),
- [Angular](https://angular.io/),
- etc.

Team members must express testing skills by use of various testing tools to ensure functionalities
work as intended. They also must be able to fix and/or document and report on issues or bugs as they
arise.

## Acceptance Criteria

- Managing director must approve of the design that is followed through with.
- Implementation must follow design.
  - If a change is required, then an alteration to the design (with approval from the managing
    director) must be completed first.
- All code must be tested.
