# OnTrack Component Review

## Team Member

Ethan Holley

## Component

`group-set-selector`

Relevant files:

- `group-set-selector.coffee` Removed
- `group-set-selector.tpl.html` Removed
- `group-set-selector.scss` Removed
- `group-set-selector.component.ts` Added
- `group-set-selector.component.html` Added
- `group-set-selector.component.scss` Added
- `doubtfire-angular.module.ts` Updated
- `doubtfire-angularjs.module.ts` Updated

## Component Purpose

The purpose of this component is a dropdown select that allows the user to change which Group Set is selected if multiple Group Sets exist. The dropdown is circled in red in the screenshot below.

![group-set-selector](Resources/group-set-selector.png)

## Component Outcomes and Interactions

When the select is clicked, a dropdown with a list of available Group Sets will display. The Group Set thats selected by the user will be loaded and the Groups within that set will be displayed.

## Component Migration Plan

The plan is to review how other migrations were done. I will be able to model my migration off of those.

I will update the code, and then perform tests locally to make sure that it works the same way it was when
it was in CoffeeScript.

## Component Post-Migration

Make sure nothing breaks in the future. Perform unit tests. Keep the TypeScript updated too. Other Group related files need to be migrated as well.
