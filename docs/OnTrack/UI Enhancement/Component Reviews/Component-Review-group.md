# Ontrack Component review

## Team Member Name

Student Name: Xuetong Zhao

Student ID: 291499588

Term: T1 2023 – SIT 378

## Component Name

Component Name: doubtfire.units.states.groups

Template: groups.tpl.html

Module file: groups.coffee

## Component purpose

The purpose of this component is to display the detailed information of a group, and allows users to edit the group information. The component can display the group name and the allocation of members (such as students and tutors).

The working principle of this component is:

Extract the detailed information and member allocation of the group from the ‘group’ input data object, and display that in the component.
If the edit button is clicked, display an edit form in the component.

When the user submits the edit form, convert the form data into a request to update the group information, and send the request to the server.

If the server responds successfully, update the group information and display the updated information in the component.

The code shows how to dynamically show or hide HTML elements based on data by using the ng-if and ng-hide directives.

The specific implementation is: using the ng-hide and ng-if directives to judge the value of unit.hasGroupwork() to determine the display of element. If its value is true, then the group-set-manager component will be displayed. The unit.hasGroupwork function will check if the unit has group work.

## Component outcomes and interactions

The expected outcome of the component is to display the detailed information and functionality of a group, and allow users to edit the group information. The component interact with other parts of the project, such as components and code that relate to group state.

The component receives the data object 'group' as input, which contains the detailed information of the group, such as the group name, group code, and the allocation of members. After the group information is edited, the component can output the updated group information object.

## Component migration plan

1. Create a new TS file, doubtfire.units.states.groups.ts.
2. Create the necessary child components: group-set-manager.ts and the corresponding HTML template file.
3. Replace the functionality with Angular TypeScript, migrating away from AngularJS.
4. Use @Input and @Output decorators to replace the usage of $scope.
5. Remove the old components.

## Component review checklist

After migration, the page should dynamically display or hide the group-set-manager panel based on the presence of groups. In addition, it should be also possible to correctly modify the name of the currently selected group, add and remove group members. The page should exhibit the same behaviour as the coffee script component.

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
