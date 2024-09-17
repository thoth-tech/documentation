# Ontrack Component Review

## Team Member Name
*Xin Huang*
Student ID: s218161625

## Component Name
group-member-contributor-assigner Component

### Files in this Component:
- `group-member-contribution-assigner.coffee`
- `group-member-contribution-assigner.scss`
- `group-member-contribution-assigner.tpl.html`

## Component Purpose
The primary purpose of the `GradeTaskModalComponent` is to provide a user interface for grading their contribution in this group task within a modal dialog. It includes features such as hovering over ratings, confirming selections, and closing the modal with the selected data.

**Screenshots:**
Original (PDF): ![group-member-contribution-assigner](Resources/group-member-contribution-assigner.jpg)

## Component Outcomes and Interactions

**Expected Outcomes:**
- Users can rate the contribution effort of each team member using icons
- Users can hover over rating human modals to see the effect before selecting.

**Interactions:**
- **Inputs:** 
  - `task`: Object containing task details (e.g., current submission status, contribution ratings, team member information).
  - `data`: Object to store user inputs (selected submission status, contribution ratings, confirmation of actions like submission or cancellation).

- **Outputs:**
  - The component outputs the selected submission status and contribution ratings upon completion.
  - Interaction with ContributionService to fetch available contribution levels and submit the final ratings.

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