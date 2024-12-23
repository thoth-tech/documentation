# Ontrack Component Review

## Team Member Name
Xin Huang | 218161625

## Component Name
StudentsList Component

## Files in this Component
- `unit-dates-selector.coffee`
- `unit-dates-selector.tpl.html`


## Component Purpose

The `students-list` component is responsible for displaying and managing a list of students within a unit. It allows instructors (Convenors, Tutors, Admins, and Auditors) to filter, sort, search, and view student details, manage pagination, export data, and interact with students' records.

**Screenshots:**
Original (PDF): ![students-list](students-list.png)

## Component Functions
The students-list component allows users to:

- View and filter the student list** dynamically based on the role (e.g., Convenor sees all students, Tutors see only theirs).
- Search students** using names, emails, or other properties.
- Paginate and sort** the student list efficiently.
- Export student details** as CSV files.
- View individual student dashboards** for more detailed project insights.
- Open an enrolment modal** to add new students to the unit.

## Interaction with Other Components/Services
- **UnitStudentEnrolmentModal:**  
  Output: Trigger enrolment modal for adding new students.

- **newTaskService:**
  Outputs:
  - `statusClass` and `statusText` to display project/task status.

- **newUserService:**
  Provides the current user (used to filter Tutor-specific students).

- **analyticsService:**
  Outputs: Logs analytics events when specific actions (e.g., enrol student modal) are triggered.

- **Filters:**
  Utilizes AngularJS filters like `showStudents`, `projectFilter`, and `paginateAndSort` for sorting, filtering, and paginating the data.


## Migration Steps
I will be following the
[doubtfire-web's Migration Guide](https://github.com/thoth-tech/doubtfire-web/blob/e70f4c7cd1395eaab942ee389788f75f92e985c9/MIGRATION-GUIDE.md)

1. **Analyze Existing Component:**
   - Review the AngularJS implementation.
   - Identify key functions, filters, and service dependencies.

2. **Setup Angular Environment:**
   - Ensure Angular 17 project setup is ready.
   - Install required dependencies (e.g., Angular Material, ngx-pagination).

3. **Create Angular Component:**
   - Generate a new Angular component `students-list`.
   - Transfer HTML template and styles to Angular.

4. **Rewrite Core Logic:**
   - Migrate key functions (e.g., filtering, pagination, sorting, and CSV export) into TypeScript.
   - Replace AngularJS `$scope` with reactive properties using Angular's `@Input` and `@Output`.

5. **Integrate Services:**
   - Migrate `newTaskService`, `newUserService`, `UnitStudentEnrolmentModal`, and `analyticsService` into Angular.

6. **Replace Filters:**
   - Replace AngularJS filters (e.g., `showStudents`, `projectFilter`) with Angular Pipes and RxJS operators.

7. **Testing:**
   - Validate functionality:
     - Filtering, sorting, pagination.
     - CSV export.
     - Navigation to student dashboard.
   - Fix any bugs or UI inconsistencies.

8. **Downgrade Component (if needed):**
   - Use `UpgradeModule` to allow Angular and AngularJS components to coexist.

## Component Review Checklist

- [ ] Ability to collect details from the user
  - The modal allows users to enter and select grading details.

- [ ] Succeeds when data is valid
  - The modal successfully closes and returns valid data.

- [ ] Handles errors
  - The component gracefully handles errors such as invalid ratings or missing grades.

- [ ] Created unit is shown on success
  - The updated task details are visible in the UI after successful grading.