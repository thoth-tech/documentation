# Ontrack Component review

## Team Member Name

SICHENG LIU - Thoth Tech - UI Enhancement

## Component Name

dashboard.coffee

Related file: dashboard.tpl.html

## Component Purpose

This is a dashboard interface with three panels. This interface is rendered from the provided HTML template and consists of the following three parts:

Student-task-list panel: displays a list of all tasks in the project and allows users to select one of the tasks to view relevant information.

Progress-dashboard panel: displays an overview of the project's progress and target scores, and allows users to update target scores.

Task-dashboard and task-comments-viewer panels: Display detailed information and comments for a specific task when the user selects it.

## Component outcomes and interactions

Interaction between student-task-list and progress-dashboard: When a user selects a task, the student-task-list component triggers a refresh-tasks event and passes the selected task data as a parameter to the parent component. Then the progress-dashboard component will re render and display an overview of the current project's progress (rather than detailed information about the current task). In addition, when updating the target score in the progress-dashboard component, the on-update-target-grade event is triggered.

The interaction between student-task-list and task-dashboard / task-comments-viewer: When a user clicks on a task in the list, the student-task-list component triggers a refresh-tasks event and passes the selected task data as a parameter to the parent div element. Then, the task-dashboard and task-comments-viewer components re render the interface and display detailed information and comments for the selected task based on the passed task data.

Interaction between task-dashboard and task-comments-viewer: If a user submits any changes in the task-dashboard component, the task-comments-viewer component will reload and display the changed task comments.

## Component migration plan

1. Create four new components named StudentTaskListComponent, ProgressDashboardComponent, TaskDashboardComponent, and TaskCommentsViewerComponent. Store the HTML, CSS, and TypeScript files for each component in the corresponding folder.

2. Copy the original HTML code and paste it into your new component template as needed.

3. Change ng-if to ngIf and delete the bootstrap class definition class (such as "col xs-12").

4. These components may have input and output properties, so use @Input and @Output to set appropriate input and output properties in each component's TypeScript file.

5. Import these components in app. module. ts and add them to the declarations array.

Determine if any services are needed to support these components and provide these services in the application

(Optional) Without using above steps in number5, create a new dashboard.module.ts, import these components, and add them to the declarations array. Directly import the dashboard.module module into other modules

## Component review checklist

1. Check if the code is compiled without any errors or warnings.

2. Check if the content can be displayed or hidden based on the completion of data loading

3. Check if communication between components is normal, such as the interaction between student task list and progress dashboard components

4. Check if the module can be injected correctly into other modules.
