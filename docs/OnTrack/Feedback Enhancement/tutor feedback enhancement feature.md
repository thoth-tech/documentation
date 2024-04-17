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

## Feature Components

### Models and Definitions

- **TaskDefinition**: This is the core model around which task stages and their corresponding feedback are structured. It contains the stages that include criteria for task completion.
- **Stage**: Represents a specific criterion or set of criteria that students must fulfill to complete a task. These are detailed in the `TaskDefinition` and include:
  - **id**: Unique identifier for the stage.
  - **taskDefinitionId**: Identifier linking the stage to its task definition.
  - **title**: Descriptive title of the stage.
  - **preamble**: Introductory text providing context or instructions for the stage.
  - **options**: Feedback options associated with each criterion of the stage.

### Example Stage Structure

```typescript
export type Option = [string, string[]];

export type Stage = {
    id: number;
    taskDefinitionId: number;
    title: string;
    preamble: string;
	options: Option[];
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

## Key Components and Files

- **task-definition-stages.component.ts**: Manages the logic for adding, editing, and removing stages within a task definition.
- **task-definition-stages.component.html**: Provides the HTML structure for viewing and interacting with stages in the UI.
- **task-definition-stages.component.scss**: Contains style definitions specific to the stage components in the UI.

## Related Files/Components

- `doubtfire-web/src/app/`
	- `api/`
		- `models/`
			- `task-comment/`
				- `task-comment.ts`
				- `discussion-comment.ts`
		- `/services/`
			- `task-definition.service.ts`
		- `task-definition.ts`
	- `units/states/edit/directives/unit-tasks-editor/task-definition-editor/`
		- `task-definition-editor.component.html`
		- `task-definition-editor.component.scss`
		- `task-definition-editor.component.ts`
	- `doubtfire-angular.module.ts`

### `task-definition.service.ts`

```ts
{
        keys: 'stages',
        toJsonFn: (taskDef: TaskDefinition, key: string) => {
          return JSON.stringify(
            taskDef.stages.map((stage) => {
              return {
                id: stage.id,
                taskDefinitionId: stage.taskDefinitionId,
                title: stage.title,
                preamble: stage.preamble,
                options: stage.options,
              };
            }),
          );
        },
        toEntityFn: (data: object, key: string, taskDef: TaskDefinition, params?: any) => {
          return (
            data[key] as Array<{
              id: number;
              taskDefinitionId: number;
              title: string;
              preamble: string;
              options: [string, string[]][];
            }>
          ).map((stage) => {
            return {
              id: stage.id,
              taskDefinitionId: stage.taskDefinitionId,
              title: stage.title,
              preamble: stage.preamble,
              options: stage.options,
            };
          });
        },
      }
```

## Development Tasks

The development of this feature is divided into several key tasks:

- **UI Design and Implementation**: Designing and implementing user interfaces for adding, editing, and viewing stages.
- **Integration**: Integrating the stages model with existing task and comment models to enhance feedback mechanisms.
	- **Migration**: One-time data migration script to update all existing task definitions to include an empty `stages` array.
- **Documentation and Guides**: Creating comprehensive documentation and user guides for both unit chairs and tutors.

## Documentation and User Guides

Documentation is critical for ensuring the effective use of the Tutor Feedback Feature. This includes:

- **Integration Guides**: Detailed explanations of how the Tutor Feedback Feature integrates with existing OnTrack components.
- **User Guides**: Step-by-step instructions for unit chairs and tutors on how to use the feature, including how to add, edit, and remove stages, as well as how to provide feedback using the system.

## Future Enhancements

Potential future enhancements include:

- **Automated Feedback Mechanisms**: Developing algorithms to suggest feedback based on common patterns in student submissions.
- **Analytics and Reporting**: Enhancing the feature to provide analytics on feedback effectiveness and student progress.

This documentation serves as a foundational guide for developing and using the Tutor Feedback Feature within the OnTrack system, ensuring that all participants have the tools they need to

# Feature Implementation Tasks

- [x] **Create model for enhanced feedback in front end**
	- *Task Description*: Implement the front-end model for the `Stage`
	component within the task-definition module. This model should include
	the structure for storing preamble text and criteria with associated
	feedback options.

- [x] **Create Documentation for `Stage` Component**
	- *Task Description*: Create comprehensive developer documentation for
	the `Stage` component, detailing its model structure, integration
	points, and examples of usage within the OnTrack system.

- [ ] **Design UI Adjustments for Unit Chair Admin Page**
	- *Task Description*: Design modifications for the Unit Chair admin page
	to accommodate the inclusion of `Stage` components in tasks. The design
	should focus on UI elements that enable the addition, editing, and
	removal of stages within task definitions. Create wireframes and mockups
	for proposed UI adjustments.

- [ ] **Implement UI Adjustments for Unit Chair Admin Page**
	- *Task Description*: Implement the designed UI adjustments on the Unit
	Chair admin page, enabling the inclusion of `Stage` components in tasks.
	This includes developing functionality for adding, editing, and removing
	stages as part of task definitions, based on the approved designs.

- [x] **Adjust Task Def model to include feedback enhancement.**
	- *Task Description*: Update the front-end Task Definition model to
	incorporate a `Stage` property, ensuring it can store and manage the
	enhanced feedback stages as part of task configurations.

- [ ] **Integrate `Stage` into existing comment model**
	- *Task Description*: Extend the existing comment model to include
	`Stage` information, allowing comments to be associated with specific
	stages and criteria for more detailed feedback.

- [ ] **Design UI for Viewing `Stage`**
	- *Task Description*: Design the user interface for displaying `Stage`
	details to tutors, ensuring clarity in presenting the preamble,
	criteria, and any associated feedback. This task includes creating
	wireframes and interactive prototypes for review.

- [ ] **Implement UI for Viewing `Stage`**
	- *Task Description*: Based on the approved designs, implement the UI
	for viewing `Stage` details within the OnTrack system. Ensure the
	interface is intuitive and seamlessly integrates with existing UI
	components.

- [ ] **Design UI for Inserting `Stage` Content**
	- *Task Description*: Create design prototypes for the UI components
	that allow tutors to insert `Stage` content into the comments section.
	Focus on user interaction models for selecting predefined feedback
	options for each criterion.

- [ ] **Implement UI for Inserting `Stage` Content**
	- *Task Description*: Develop the front-end functionality and interface
	elements based on the finalised designs that enable tutors to easily
	insert `Stage` content, including feedback, directly into the comments
	section.

- [ ] **Design Interactive Feedback Mechanism**
	- *Task Description*: Prototype a dynamic feedback mechanism that
	facilitates tutors in selecting or inputting feedback for each criterion
	within a `Stage`. This design task should explore various UI elements
	like dropdowns or autocomplete fields for predefined feedback options,
	and modal dialogs or inline editing options for custom comments.

- [ ] **Design Interactive Feedback Mechanism**
	- *Task Description*: Prototype a dynamic feedback mechanism that facilitates
	tutors in selecting or inputting feedback for each criterion within a `Stage`.
	This design task should explore various UI elements like dropdowns or
	autocomplete fields for predefined feedback options, and modal dialogs or inline
	editing options for custom comments.

- [ ] **Develop Interactive Feedback Mechanism**
	- *Task Description*: Implement the interactive feedback mechanism as per the
	approved designs. This involves creating responsive and user-friendly UI
	components that allow tutors to provide feedback efficiently and intuitively.

## Documentation Tasks

- [x] **Outline Document Structure**
   - *Description*: Define the structure of the documentation, including
   sections for introduction, component guides, integration instructions, user
   guides, and developer notes.

- [x] **Document `Stage` Component Model and Structure**
   - *Description*: Detail the model structure, properties, and functionalities
   of the `Stage` component. Include code snippets, diagrams, and examples of
   use.

- [ ] **Document Integration Points and Processes**
   - *Description*: Explain how the Tutor Feedback Enhancement feature
   integrates with existing OnTrack components such as task and task-definition
   models, including technical details for developers.

- [ ] **Create a User Guide for Unit Chairs**
   - *Description*: Write a user guide for unit chairs on how to create and
   manage tasks with the Tutor Feedback Enhancement feature. Include
   instructions on adding stages, setting criteria, and reviewing feedback.

- [ ] **Create User Guide for Tutors**
   - *Description*: Write a user guide for tutors on how to use the Tutor
   Feedback Enhancement feature, including how to add, edit, and review feedback
   stages.

- [ ] **Include UI Component Guides**
   - *Description*: Document the UI components related to the Tutor Feedback
   Enhancement feature, such as viewing, editing, and inserting stages, and the
   interactive feedback mechanism. Include screenshots and usage scenarios.

- [ ] **Document API Endpoints and Usage**
   - *Description*: List all the API endpoints associated with the Tutor
   Feedback Enhancement feature, detailing request and response formats, and
   provide examples of typical API calls.

- [ ] **Add Developer Notes for Future Enhancements**
   - *Description*: Include a section for developers on how the feature can be
   extended or integrated with other systems, highlighting potential areas for
   future enhancements.
