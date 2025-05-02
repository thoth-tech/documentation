# OnTrack Component Review

## Team Member Name
Hasindu Welarathne | 224009927

---

## Component Name
- `students-list.coffee`
- `students-list.tpl.html`
- `students-list.scss`

---

## Component Purpose
The purpose of the `students-list` component is to display and manage a list of students within a unit. It allows instructors (Convenors, Tutors, Admins, and Auditors) to:
- View a dynamically filtered list of students depending on user role.
- Search for students by name, email, or other identifiers.
- Sort and paginate the student list.
- Export student information as a CSV file.
- Access individual student dashboards.
- Open an enrolment modal to add new students to the unit.

---

## Component Outcomes and Interactions
Users can:
- View and filter students depending on their access role (e.g., Convenor sees all students, Tutors see their students only).
- Search the list by student name or email.
- Sort students by properties such as name or status.
- Export the displayed list to a CSV.
- Navigate to an individual student’s dashboard by selecting a student.
- Open an enrolment modal to enrol a new student.

**Services and Dependencies:**
- `UnitStudentEnrolmentModal` — opens the modal to enrol students.
- `newTaskService` — provides `statusClass` and `statusText` for project/task status.
- `newUserService` — provides current user information (used for filtering).
- `analyticsService` — logs analytics events when actions are performed.

**Key AngularJS Filters Used:**
- `showStudents`
- `projectFilter`
- `paginateAndSort`

---

## Component Migration Plan
I will be following the [Thoth-Tech Migration Guide](https://github.com/thoth-tech/doubtfire-web/blob/main/MIGRATION-GUIDE.md)
and referring to previously migrated components to ensure consistency.

Steps to be completed:
1. Refactor CoffeeScript logic into TypeScript using Angular 17.
2. Rewrite the HTML template to Angular syntax and replace styling with Tailwind CSS.
3. Replace AngularJS filters with Angular Pipes and/or RxJS operators.
4. Integrate services into Angular’s dependency injection system.
5. Validate and test filtering, sorting, pagination, and export functionalities.
6. Validate UI alignment with Material UI design standards.

Visual references:
- Original Design (Before Migration):
  - ![students-list-before](Resources/students-list-before.png)
- Migrated Design (After Migration):
  - *Placeholder: To be added after migration is completed.*

---

## Component Post-Migration
*This section will be updated after migration is completed.*

Expected outcomes after migration:
- Component refactored using Angular 17 best practices.
- Styling upgraded to Tailwind CSS for consistency with the rest of the UI.
- Replaced legacy filters with Angular Pipes.
- Improved accessibility and responsive UI.
- Enhanced error handling.

---

## References
- Doubtfire-web Pull Request: *Placeholder: To be added after PR submission*
