# Ontrack Component review

## Team Member Name

Student Name: Xuetong Zhao

Student ID: 291499588

Term: T1 2023 – SIT 378

## Component Name

Component Name: tutorials.coffee

Related files:

tutorials.component.ts

tutorials.component.html

tutorials.component.scss

## Component purpose

The component implements the tutorial enrolment feature. It presents the information of all tutorials within a particular teaching unit in a tabular format. The tutorials can be sorted based on different fields such as 'Stream,' 'Campus,' 'Code,' and others more. Each row also displays specific information about the tutorial, including the belonging stream, campus, code, specific class schedule and location, tutor's name, and more. After each specific tutorial, users can choose to join the tutorial or withdraw from the currently selected tutorials.

## Component outcomes and interactions

The expected outcome of this component is to display a list of tutorials on the page. When user navigates to the project tutorials page, this component will be loaded and show the relevant tutorial list. It interacts with other project states and functionalities to provide relevant tutorial information and operations.

If $scope.unit.tutorialStreamsCache.size > 0, the tutorials will be sorted by the tutorial name (tutorialStream.name). Otherwise, if $scope.unit.tutorialStreamsCache.size is not greater than 0, the tutorials will be sorted by their abbreviated names (abbreviation).

## Component migration plan

Create a new TypeScript file tutorials.component.ts and delete the old tutorials.coffee file. Move the template code to an HTML file in the same directory as tutorials.component.ts, for example, tutorials.component.html, and update the template code accordingly. All controller properties in the template need to be changed to use instance properties within the class. Replace $scope.sortOrder with this.sortOrder. Determine the value of sortOrder in the ngOnInit lifecycle hook or the constructor function.

## Component review checklist

1. Check that the code compiles without any errors or warnings.
2. Check that if the sorting functionality of this component is correct.

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
