# Tutor Feedback Feature for OnTrack

## Author Information

---

- Author(s): Coskun Kilinc
- Team: OnTrack
- Team (Delivery and/or Product) Lead: Daniel Maddern

## Document Summary

---

- Documentation Title: Tutor Feedback Feature for OnTrack
- Documentation Type: Informative
- Documentation Information Summary: The Tutor Feedback Feature is designed to enhance the
  interaction between tutors and students within the OnTrack Learning Management System.

## Key Terms

---

- OnTrack
- Tutor Feedback
- TOPAM
- Feedback

## Components of the Tutor Feedback Feature

### Stages

- Tasks are divided into "stages", which represent the criteria that students must fulfill to
  complete a task. These criteria can range from specific deliverables to the functionalities
  required in a programming assignment.
- Stages can be organised in a nested structure, allowing for complex task breakdowns.

### Stage `type`

- `id`: A number that uniquely identifies the stage.
- `taskDefinitionId`: A number that uniquely identifies the task definition to which the stage
  belongs.
- `title`: A string representing the title of the stage.
- `preamble`: A string containing the (optional) introductory text for the stage.
- `options`: An array of key-value pairs, where the key is the criterion and the value is an array
  of feedback options.

#### Example Stage

- The following TypeScript code demonstrates how a stage is structured, providing an example that
  includes criteria such as "Use of structs and enumerations", "Code Quality", and "Functionality".

```typescript
export type Stage {
    id: number;
    taskDefinitionId: number;
    title: string;
    preamble: string;
    options: [string, string[]][];
}

const stage: Stage = {
    id: 1;
    taskDefinitionId: 1234;
    title: "Source Code: Revised Fly Catch";
    preamble: "**Source Code: Revised Fly Catch**",
    options: [
        ["Use of structs and enumerations",
            ["Effectively utilises structs and enumerations", "Partially addresses use of structs and enums", "Needs improvement in use of structs and enums (Resubmit)", "Does not address use of structs and enums (Redo)"]],
        ["Code Quality",
            ["Well-organised code structure", "Partially organised code structure", "Appropriately commented code", "Insufficient comments", "Lack of comments", "Room for optimisation or clarification"]],
        ["Functionality",
            ["Functionality aligns completely with task requirements", "Functionality mostly aligns with task requirements", "Needs improvement in functionality (Resubmit)", "Functionality not addressed (Redo)"]],
        ["Resubmit",
            ["Resubmit with the required source code", "Resubmit with code that adheres to coding best practices and concepts"]],
    ],
};
```

## Feature Implementation Tasks

- [x] **Create model for enhanced feedback in front end**

  - _Task Description_: Implement the front-end model for the `Stage` component within the
    task-definition module. This model should include the structure for storing preamble text and
    criteria with associated feedback options.

- [x] **Create Documentation for `Stage` Component**

  - _Task Description_: Create comprehensive developer documentation for the `Stage` component,
    detailing its model structure, integration points, and examples of usage within the OnTrack
    system.

- [ ] **Design UI Adjustments for Unit Chair Admin Page**

  - _Task Description_: Design modifications for the Unit Chair admin page to accommodate the
    inclusion of `Stage` components in tasks. The design should focus on UI elements that enable the
    addition, editing, and removal of stages within task definitions. Create wireframes and mockups
    for proposed UI adjustments.

- [ ] **Implement UI Adjustments for Unit Chair Admin Page**

  - _Task Description_: Implement the designed UI adjustments on the Unit Chair admin page, enabling
    the inclusion of `Stage` components in tasks. This includes developing functionality for adding,
    editing, and removing stages as part of task definitions, based on the approved designs.

- [x] **Adjust Task Def model to include feedback enhancement.**

  - _Task Description_: Update the front-end Task Definition model to incorporate a `Stage`
    property, ensuring it can store and manage the enhanced feedback stages as part of task
    configurations.

- [ ] **Integrate `Stage` into existing comment model**

  - _Task Description_: Extend the existing comment model to include `Stage` information, allowing
    comments to be associated with specific stages and criteria for more detailed feedback.

- [ ] **Design UI for Viewing `Stage`**

  - _Task Description_: Design the user interface for displaying `Stage` details to tutors, ensuring
    clarity in presenting the preamble, criteria, and any associated feedback. This task includes
    creating wireframes and interactive prototypes for review.

- [ ] **Implement UI for Viewing `Stage`**

  - _Task Description_: Based on the approved designs, implement the UI for viewing `Stage` details
    within the OnTrack system. Ensure the interface is intuitive and seamlessly integrates with
    existing UI components.

- [ ] **Design UI for Inserting `Stage` Content**

  - _Task Description_: Create design prototypes for the UI components that allow tutors to insert
    `Stage` content into the comments section. Focus on user interaction models for selecting
    predefined feedback options for each criterion.

- [ ] **Implement UI for Inserting `Stage` Content**

  - _Task Description_: Develop the front-end functionality and interface elements based on the
    finalised designs that enable tutors to easily insert `Stage` content, including feedback,
    directly into the comments section.

- [ ] **Design Interactive Feedback Mechanism**

  - _Task Description_: Prototype a dynamic feedback mechanism that facilitates tutors in selecting
    or inputting feedback for each criterion within a `Stage`. This design task should explore
    various UI elements like dropdowns or autocomplete fields for predefined feedback options, and
    modal dialogs or inline editing options for custom comments.

- [ ] **Design Interactive Feedback Mechanism**

  - _Task Description_: Prototype a dynamic feedback mechanism that facilitates tutors in selecting
    or inputting feedback for each criterion within a `Stage`. This design task should explore
    various UI elements like dropdowns or autocomplete fields for predefined feedback options, and
    modal dialogs or inline editing options for custom comments.

- [ ] **Develop Interactive Feedback Mechanism**
  - _Task Description_: Implement the interactive feedback mechanism as per the approved designs.
    This involves creating responsive and user-friendly UI components that allow tutors to provide
    feedback efficiently and intuitively.

### Documentation Tasks

- [x] **Outline Document Structure**

  - _Description_: Define the structure of the documentation, including sections for introduction,
    component guides, integration instructions, user guides, and developer notes.

- [x] **Document `Stage` Component Model and Structure**

  - _Description_: Detail the model structure, properties, and functionalities of the `Stage`
    component. Include code snippets, diagrams, and examples of use.

- [ ] **Document Integration Points and Processes**

  - _Description_: Explain how the Tutor Feedback Enhancement feature integrates with existing
    OnTrack components such as task and task-definition models, including technical details for
    developers.

- [ ] **Create a User Guide for Unit Chairs**

  - _Description_: Write a user guide for unit chairs on how to create and manage tasks with the
    Tutor Feedback Enhancement feature. Include instructions on adding stages, setting criteria, and
    reviewing feedback.

- [ ] **Create User Guide for Tutors**

  - _Description_: Write a user guide for tutors on how to use the Tutor Feedback Enhancement
    feature, including how to add, edit, and review feedback stages.

- [ ] **Include UI Component Guides**

  - _Description_: Document the UI components related to the Tutor Feedback Enhancement feature,
    such as viewing, editing, and inserting stages, and the interactive feedback mechanism. Include
    screenshots and usage scenarios.

- [ ] **Document API Endpoints and Usage**

  - _Description_: List all the API endpoints associated with the Tutor Feedback Enhancement
    feature, detailing request and response formats, and provide examples of typical API calls.

- [ ] **Add Developer Notes for Future Enhancements**
  - _Description_: Include a section for developers on how the feature can be extended or integrated
    with other systems, highlighting potential areas for future enhancements.
