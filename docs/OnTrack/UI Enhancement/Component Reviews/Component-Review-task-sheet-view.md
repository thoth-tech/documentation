# Ontrack Component review

## Team Member Name

Student Name: Xuetong Zhao

Student ID: 291499588

Term: T1 2023 – SIT 378

## Component Name

Component Name: task-sheet-view.coffee

Related files:

task-sheet-view.component.ts

task-sheet-view.component.html

task-sheet-view.component.scss

## Component purpose

This component is used to display detailed information for each task and provides some interactive features, such as clearing the currently selected task. Through data binding and controller logic, the directive can dynamically show different content based on the task's status.

## Component outcomes and interactions

Based on the value of the $scope.hasPdf variable, to control the visibility of certain parts in the panel. If the currently selected task does not have an attached PDF file, display the text "This task has no task sheet". Otherwise, embed a PDF file reader component in the page to display the corresponding PDF file, and show the PDF based on the value of urls.taskPdfUrl.

## Component migration plan

Use the Component of Angular to migrate this code instead of directive, and use decorator to specify the selector and template URL (task-sheet-view.component.html). The @Input decorator is used to declare the input property taskDef of the component, and define corresponding member variables taskPdfUrl and setDetails method in the class.

## Component review checklist

1. Check if there are any errors or warnings during code compilation.
2. Check if the PDF display functionality of the component is working correctly.

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
