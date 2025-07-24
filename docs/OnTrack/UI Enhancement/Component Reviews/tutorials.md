# Ontrack Component review

## Team Member Name

- Jason Mark Vellucci | SID: 221437402

First select a component to review from the list below:
<https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5>

## Component Name

- `tutorials`
    - `tutorials.component.ts`
    - `tutorials.component.tpl.html`
    - `tutorials.component.scss`

## Component purpose
- The purpose of the component is to enable students to `Enrol` or `Withdraw` from tutorials for any particular unit
- This component does not contain any nested components
- Available tutorials are filtered by `campus_id`
- The files that interact with this component are:
    - `doubtfire-angular.module.ts`: Links the component to the main Angular module, making it available in the web app
    - `doubtfire-angularjs.module.ts: Downgrades the component, making it backwards-compatible with `AngularJS`
    - `doubtfire.states.ts`: Configures the `UI Router` (routing library) for the component, making it navigatable from other components that declare the defined route
    - `task-dropdown-component.html`: Triggers the route `onClick` of a button, subsequently rendering the `tutorials.component.tpl.html` template
    - `group-selector.tpl.html`: Triggers the route `onClick` of an `anchor` tag, subsequently rendering the `tutorials.component.tpl.html` template
![after](https://github.com/user-attachments/assets/49255060-9ff9-4cf6-ab5d-acbacb7f3075)

## Component outcomes and interactions
- The expected outcomes of this component are:
    - Show a list of tutorials for the selected unit (filtered by campus)
    - Enroll in a tutorial by clicking the `Enrol` button
    - Withdraw from a tutorial by clicking the `Withdraw` button
    - Sort the table view of tutorials by most `TH` field
- This component interacts with:
    - The files listed above
    - The `doubtfire-states` file (UI-Router library for routing)
- Data:
    - `projectId`: number is passed in as @Input()
    - Fetches the selected `project` model from the cache (if it exists), or the backend, asynchronously on load of the component
    - Extracts the `unit` from the fetched `project`
    - Extracts a list of tutorials from the `unit` object 

## Component migration plan
- Analyse existing functionality:
    - How does the UI behave?
    - How does the UI look?
- Analyse existing code
    - What data does it take in from parent components?
    - Are there any nested components?
    - What object methods are required?
    - What template elements need replacing with Angular Material elements?
    - What SCSS needs replacing?
- Unlink old component
- Link new component
- Define Typescript logic
    - Test iteratively
- Implement template markup
    - Replace Bootstrap Angular tags with Angular Material equivalents
- Debug as needed (logging and devtools)
- Commit small, commit often
- Final manual test

## Component review checklist

Next add a checklist similar to: then create a checklist:

- [x] Can enrol in unit
- [x] Can withdraw from tutorial
- [x] Can sort tutorials by most model keys
- [x] Authorisation fails when selecting tutorial for different project (pre-filtering of tutorials by `campus_id`)

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
