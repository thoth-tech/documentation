# Ontrack Component review

## Team Member Name

SICHENG LIU - Thoth Tech - UI Enhancement

## Component Name

all-projects-list.coffee

related file: all-projects-list.tpl.html

## Component Purpose

This component is used to display a list of courses that the user has registered and studied, as well as relevant information.

A loading animation will be displayed until the list data is loaded. The project list is sorted by start date, with 15 records displayed on each page. Finally, it defines two auxiliary functions, one to check if there are already registered projects, and the other to return a unique list of project units when given a list of project objects. The table lists course list data, which can be filtered through specified filters, and can also be sorted by course code, name, teaching cycle name, start date, end date, and activation status. In each row, the code, name, and other relevant information of the course are displayed. In addition, a link has been added for each row, clicking on which will navigate to the course's detailed information page.

Finally, a pagination control has been added at the bottom of the page for pagination of a longer course list

## Component outcomes and interactions

Use the ng-hide and ng-show instructions to display or hide content based on whether the data has been loaded completely. The first div will display a loading animation and a text prompt of "Loading unit details..." when the data is not fully loaded. After loading, the second div will display detailed information such as course list. Call the newProjectService.query() method to obtain project list data and display it

## Component migration plan

Create a new Typescript file called all-projects-list component.ts, all-projects-list.component.html, and delete the old all-projects-list buffer, all-projects-list.tpl.html files.

Create a new projectService. service. ts for interacting with the backend.

Create new input and output features as needed, such as @Input() dataLoaded: boolean, define table sorting and pagination related features, and request a project list from newProjectService based on these features.

## Component review checklist

1. Check if the code is compiled without any errors or warnings.

2. Check if the content can be displayed or hidden based on the completion of data loading

3. Check if the newProjectService can request the correct data

4. Check if the paging function is not functioning properly
