# Ontrack Component review

## Team Member Name

Student Name: Xuetong Zhao

Student ID: 291499588

Term: T1 2023 – SIT 378

## Component Name

Component Name: task-details-view.coffee

Related files:

taskDetailsView.component.ts

taskDetailsView.component.html

taskDetailsView.component.scss

## Component purpose

This component is used to display the task details view. It implements a panel component with a title and a body section, and internally nests two custom components: task-outcomes-card and task-description-card, which are respectively used to display the task's outcome goals and detailed description information.

## Component outcomes and interactions

There are two internal child components, 'task-outcomes-card' and 'task-description-card', receive data from the parent component through attribute bindings ('[task-def]' and '[unit]'), and handle and display the data in different ways.

- The 'task-outcomes-card' component receives two attributes: 'task-def' and 'unit'.
- This component is used to display the outcome status of the task.

- The 'task-description-card' component receives three attributes: 'task-def', 'unit', and 'task'.
- The 'task-def' and 'unit' attributes are the same as mentioned above.
- However, the 'task' attribute is internally defined within this component and is not passed from the outside. This attribute is used to store the user's inputted task information. At initialization, this attribute is set to empty by default.
- This component is used to display detailed description information about the task.

## Component migration plan

Create a new TypeScript file named taskDetailsView.component.ts and remove the old task-details-view.coffee file. Move the template code to an HTML file located in the same directory as taskDetailsView.component.ts, for example, taskDetailsView.component.html, and update the template code accordingly.

Create two child components: task-outcomes-card.component.ts and task-description-card.component.ts. These components correspond to the task-outcomes-card and task-description-card components in the original code. Use Angular's property binding for data communication between components. As the following:
`<app-task-outcomes-card [taskDef]="taskDef" [unit]="unit"></app-task-outcomes-card>
              <app-task-description-card [taskDef]="taskDef" [unit]="unit" (taskChanged)="onTaskChanged($event)"></app-task-description-card>`

## Component review checklist

1. Check that if there are any errors or warnings of the code compiles.
2. Check that if the data passing between the components is working correctly.

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
