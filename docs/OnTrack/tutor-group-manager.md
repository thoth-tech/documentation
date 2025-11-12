# Component Review - migrate tutor-group-manager.coffee

## Student Name: TengLei Wang

## Student ID: 221230775

## Component Name
tutor-group-manager

\*\*\*\*./src/app/groups/tutor-group-manager/tutor-group-manager.coffee

File Name: tutor-group-manager.coffee

## Component purpose

It use to manage tutor groups.

## Component outcomes/interactions

It allows users to manage tuotrs. detail: It conditionally displays a group set selector if there is more than one group set and always displays a group manager for managing the groups within the selected group set.

Relevant files:

- `tutor-group-manager.coffee` Removed
- `tutor-group-manager.tpl.html` Removed
- `tutor-group-manager.component.ts` Added
- `tutor-group-manager.component.html` Added
- `tutor-group-manager.component.scss` Added


**Component migration Check list** – What is needs to be checked for this component to work once
migrated?

[ ] ability to collect details from the user

[ ] succeeds when data is valid

[ ] handles errors - duplicate unit code in the teaching period, or invalid dates

[ ] created unit is shown on success