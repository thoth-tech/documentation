# Ontrack Component review

## Team Member Name

Name: Ben Thomas

Student ID: 221068915

## Component Name

task-ilo-alignment-viewer.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.coffee](https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/tasks/task-ilo-alignment/task-ilo-alignment-viewer/task-ilo-alignment-viewer.coffee)

Related files:

• task-ilo-alignment-viewer.tpl.html

• task-ilo-alignment-viewer.scss

## Component purpose

The task-ilo-alignment-viewer is used to display the alignment of tasks and intended learning
outcomes in OnTrack.

The .tpl.html file is a template file used by Smarty, a template parser, while the .scss is a SASS
CSS file.

Together this creates a reusable component that provides part of the user interface.

## Component outcomes and interactions

This component includes a directive which implements the HTML template,
task-ilo-alignment-viewer.tpl.html. It has various scoped properties that can be passed in,
including currentProgress, classStats, project, task, unit, alignments, summaryOnly, and
hideVisualization.

The directive also defines a controller function for handling logic which has dependencies,
including $scope, Visualisation, and outcomeService.

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
