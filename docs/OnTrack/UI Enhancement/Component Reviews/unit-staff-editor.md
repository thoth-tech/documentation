# Ontrack Component review

## Team Member Name
Jason Mark Vellucci | SID: 221437402

First select a component to review from the list below:
<https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5>

## Component Name

- Component name: `unit-staff-editor.coffee` to convert to `unit-staff-editor.component.ts`
- Additional files: `unit-staff-editor.tpl.html`

## Component purpose

The purpose of this component is to:
- Assign staff members to units
- Assign staff members the roles of `Convenors` (if authorised) or `Tutor`
- Assign a staff member as the `Main Convenor` of a unit
- Remove staff members from a unit

## Screenshots

Before Migration
![unit_staff_selector_before](https://github.com/user-attachments/assets/5c1bd8ce-d36d-41c7-947b-3934f5badd2d)
![unit_staff_selector_before_2](https://github.com/user-attachments/assets/f98a575e-4db8-4ca3-ade7-042ce3c28952)

After Migration
![after_1](https://github.com/user-attachments/assets/659b0f71-56cc-48b5-bbd9-fcae42b75063)
![after_2](https://github.com/user-attachments/assets/782b8a73-f832-4cc2-b75f-f1f247201c85)

## Component outcomes and interactions

- This component mainly takes `Unit`, `UnitRole`, and `UnitRole[]` data types.
- Interactivity:
    - The table view lists all staff members assigned to the chosen unit.
    - The user can search for staff members in the autocomplete input field. The list is filtered based on the current search term, and filters out staff members already assigned to the unit.
    - Upon clicking a staff member from the drop-down list, the staff member is added to the unit.
    - The user can assign the `Tutor` and `Convenor` roles to staff members at the click of a button. Note: `Convenor` roles are for authorised staff members only.
    - The user can `remove` staff from a unit by clicking the `bin` icon.
    - The user can assign an authorised staff member as the `Main Convenor` of a unit by clicking the `Main Convenor` button.

## Component migration plan

- Initially, in the UI, I navigate to the original implementation of the feature.
- I use the feature in its current state and take notes of its behavior.
- I check devtools for any existing errors and make notes of these so that I can be sure I'm not introducing any new errors during my migration.
- I create a branch off the base branch instructed in the MSPlanner ticket.
- I create skeleton files for the migration.
- I take note of the existing template file, and note the `Bootstrap` components that need to be swapped with `Angular Material` components.
- I unlink the old component from the app.
- I link the new component to the app and test.
- I generally start with the TS logic, and then move onto the template. The other way around also suffices.
- Once the migration is complete, I step through each TS method in devtools and ensure it functions as expected. I debug as needed.
- I adjust template layout and styling as needed.
- I delete the old, redundant files.

## Component review checklist

Next add a checklist similar to: then create a checklist:

- [x] ability to collect details from the user 
- [x] succeeds when data is valid
- [x] handles errors (uses type checking instead of exception handlers)

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.
