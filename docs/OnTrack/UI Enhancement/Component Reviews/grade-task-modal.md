# Ontrack Component Review

## Team Member Name
*Bruce Wang*
Student ID: s223140522

## Component Name
GradeTaskModalComponent

### Files in this Component:
- `grade-task-modal.coffee`
- `grade-task-modal.tpl.html`
- `grade-task-modal.scss`

## Component Purpose
The primary purpose of the `GradeTaskModalComponent` is to provide a user interface for grading tasks within a modal dialog. This component allows the user to select a grade and assign quality points to a task. It includes features such as hovering over ratings, confirming selections, and closing the modal with the selected data.

**Screenshots:**
Original (PDF): ![grade-task-modal](Resources/grade-task-modal.png)

## Component Outcomes and Interactions

**Expected Outcomes:**
- Users can select a desired grade for the task.
- Users can rate the quality points of the task.
- Users can hover over rating stars to see the effect before selecting.

**Interactions:**
- **Inputs:** 
  - `task`: Object containing task details (e.g., current grade, quality points, task definition).
  - `data`: Object to store user inputs (desired grade, rating, hover state, confirmation rating).

- **Outputs:**
  - The component outputs the selected grade and quality points upon closure.
  - Interaction with `GradeService` to fetch available grades and their values.

## Component Migration Plan

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
