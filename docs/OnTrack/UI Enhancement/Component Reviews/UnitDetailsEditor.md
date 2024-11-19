# Ontrack Component review

## Team Member Name
Xin Huang | 218161625

## Component Name
UnitDetailsEditor Component

## Files in this Component
- `unit-details-editor.coffee`
- `unit-details-editor.tpl.html`

## Component purpose

The `unit-details-editor` component is responsible for editing the basic details of a unit. This includes attributes such as the unit name, code, start and end dates, associated teaching periods, and Docker images for automated task assessment. The component provides an interface for instructors to configure these details conveniently.

**Screenshots:**
Original (PDF): ![unit-details-editor](unit-details-editor.png)



## Component outcomes and interactions

The unit-details-editor component allows users to:

- Update unit details through a form interface.
- Select teaching periods and task definitions dynamically.
- Manage unit start and end dates using date pickers.
- Fetch and display Docker images available for automated task assessments.
- This is a functional component with moderate interactivity but no subcomponents.


## Interaction with other components
### Input

- Interaction with newUnitService:
  Output: saveUnitEvent event, triggered when the unit is saved.
  
- Interaction with newTeachingPeriodService:
  Output: teachingPeriodSelected event, triggered when the user selects a teaching period.

- Interaction with TaskSubmission:
  Output: dockerImages data, providing a list of available Docker images.

- Interaction with DoubtfireConstants:
  Output: Configuration constants IsOverseerEnabled and ExternalName, used for controlling functionality and displaying the external name.



**Migration Steps:**
I will be following
[doubtfire-web's Migration Guide](https://github.com/thoth-tech/doubtfire-web/blob/e70f4c7cd1395eaab942ee389788f75f92e985c9/MIGRATION-GUIDE.md)

1. **Analyze Existing Component:**
   - Review the current implementation in AngularJS.
   - Identify key functionalities and dependencies.

2. **Setup Angular Environment:**
   - Ensure the Angular project is properly set up.
   - Install necessary dependencies (e.g., Angular Material).

3. **Create Angular Component:**
   - Generate a new Angular component.
   - Transfer the HTML template, styles, and logic from AngularJS to Angular.

4. **Integrate Services:**
   - Migrate and integrate the `GradeService` into the new Angular component.

5. **Downgrade Component:**
   - Use `UpgradeModule` to downgrade the Angular component for use in the AngularJS app.

6. **Testing:**
   - Test the new component to ensure it replicates the behavior of the old one.
   - Fix any issues that arise during testing.


## Component Review Checklist

- [ ] Ability to collect details from the user
  - The modal allows users to enter and select grading details.

- [ ] Succeeds when data is valid
  - The modal successfully closes and returns valid data.

- [ ] Handles errors
  - The component gracefully handles errors such as invalid ratings or missing grades.

- [ ] Created unit is shown on success
  - The updated task details are visible in the UI after successful grading.
