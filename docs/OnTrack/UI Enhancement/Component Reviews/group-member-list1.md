# Ontrack Component review

## Team Member Name : Lovleen Kala{22427541}

First select a component to review from the list below:
<https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5>

## Component Name: group-member-list

Files in this component:
group-member-list.coffee

group-member-list.tpl.html

group-member-list.scss

Here you should enter the component name, also list all the files in this component.

## Component purpose

What is the primary purpose of this component and how doesit work? Screenshots are advised.
![image](https://github.com/user-attachments/assets/f35f03b3-adc4-4221-bd4b-ca5c119f3aa0)

The group-member-list component is responsible for displaying and managing the list of students in a selected group. It allows staff to:
View the group members along with their student ID, name, and target grade.
Add a new student to the group via a text input (name or username).
Remove existing students from the group.
Display each student’s target grade visually using a badge.

## Component outcomes and interactions
Expected Outcomes:
Render a list of current members in the group.
Show target grade badges for each member.
Enable the addition of new members using a search field.

Data Involved:
group: the current group object containing group.members.
unit: the academic unit the group belongs to.
groupSet: the parent group set context.
groupSetManager: the controller for higher-level group operations.

Allow members to be removed from the group using a red Remove button.
What are the expected outcomes of the component and what does it interact with, what kind of data
objects is it taking in and passing out?

## Component migration plan

First add your plan for the migration, how will you do this, what steps are needed. Add some
sketches or diagrams, what will the migrated component look like compared to the current one.
The component will be migrated using the AngularJS to Angular migration guide.

Steps:
Create a new Angular component named GroupMemberListComponent.
Convert the .coffee file into a TypeScript class with equivalent bindings and methods.
Translate the .tpl.html file into group-member-list.component.html, replacing any ng-* directives with Angular equivalents.
Move and update the .scss file as group-member-list.component.scss.
Register and downgrade the new component so it's still usable by AngularJS parts.
Test the component within the Group Set Manager page to ensure functional parity.

## Component review checklist

Next add a checklist similar to: then create a checklist:
 []Displays list of group members.

 []Can add a member using name/username.

 []Shows student details: ID, name, target grade.

 []Allows removal of group members.

 []Communicates with parent groupSetManager controller.

 []Uses clean styling and responsive layout.

 []Component is self-contained with clear responsibilities.

[ ] ability to collect details from the user [ ] succeeds when data is valid [ ] handles errors -
duplicate unit code in the teaching period, or invalid dates [ ] created unit is shown on success

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.