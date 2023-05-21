# Ontrack Component review

## Team Member Name

Ben Thomas

Student ID: 221068915

## Component Name

task-ilo-alignment-editor.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.coffee](https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/tasks/task-ilo-alignment/task-ilo-alignment-editor/task-ilo-alignment-editor.coffee)

Related files:

• task-ilo-alignment-editor.scss

• task-ilo-alignment-editor.tpl.html

## Component purpose

The task-ilo-alignment-editor is responsible for providing UI and logic for editing which tasks will
be showcased in the portfolio and how they align with learning outcomes in OnTrack.

The .tpl.html file is a template file used by Smarty, a template parser, while the .scss is a SASS
CSS file.

Together this creates a reusable component that provides part of the user interface.

## Component outcomes and interactions

This component establishes a configured directive with functions for defining behaviour and logic.
This directive has several dependencies for successful functionality, including $scope, $modal,
$rootScope, $filter, alertService, gradeService, Visualisation, fileDownloaderService,
CsvResultModal, outcomeService, TaskILOAlignmentModal, newTaskService,
newTaskOutcomeAlignmentService.

The module defines various functions and properties used in the management and handling of
displaying task and learning outcome alignments. Additionally, manages CSV import/upload.

## Component migration plan

[https://angular.io/guide/ngmodules](https://angular.io/guide/ngmodules)

[https://angular.io/guide/attribute-directives](https://angular.io/guide/attribute-directives)

Import NgModule. Convert the directive to Angular form. Rewrite original directive logic with
Angular syntax. Replace or update all references to AngularJS services, such as $scope, with Angular
equivalents. Replace or update all other services and dependencies to work with other migrated
modules.

## Component review checklist

• Check that code post-migration follows Angular best practices.

• Ensure code compiles correctly.

• Observe that functionality and behaviour have been preserved.
