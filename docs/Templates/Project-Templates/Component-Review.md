<img width="1511" alt="Screenshot 2025-05-16 at 6 19 06 PM" src="https://github.com/user-attachments/assets/5a5cc093-08d9-4dd8-8792-33d9cb3500a6" /># Ontrack Component review

## Team Member Name
Lovleen Kala

## Component Name

Group-Set-Editor

Files Included:
group-set-editor.component.ts
group-set-editor.component.html
group-set-editor.component.scss


## Component purpose

The Group Set Editor component is a parent component that contains nested components, including the group-member-list and group-selector. These nested components handle more specific tasks, such as managing individual group members and selecting groups within a group set, while the Group Set Editor serves as the overall manager for group set interactions within a unit context.

![Copy of Blank diagram-2](https://github.com/user-attachments/assets/6bedc863-3a6d-4e3c-82c6-f3f2179afa62)


The primary purpose of the Group Set Editor component is to manage group sets within a unit context. It allows tutors and convenors to add, remove, lock, and update groups within a selected group set. It also supports features like group filtering, sorting, and pagination, and integrates with services like newGroupService, alertService, and groupService.

Before Migration:

<img width="1511" alt="Screenshot 2025-05-16 at 6 19 06 PM" src="https://github.com/user-attachments/assets/2b144781-26dc-4a8d-9aa4-526ea3cfed88" />

<img width="1509" alt="Screenshot 2025-05-16 at 6 19 16 PM" src="https://github.com/user-attachments/assets/22871500-b902-4f74-9338-232b49266c58" />


## Component outcomes and interactions

Expected outcomes:

Allows users to create, edit, lock, and delete groups within a group set context.

Provides real-time feedback for group updates using alertService.

Supports filtering and sorting of group lists based on group names and tutorial assignments.

Interacts with Group, Unit, Project, GroupSet, and UnitRole models for data handling.

## Component migration plan

Migrate the TypeScript file to Angular 17, preserving the original logic for group management.

I plan to manually include the code for group-member-list and group-selector directly within the group-set-editor component rather than pulling from two separate branches. This approach aims to minimize the risk of merge conflicts that could arise from integrating separate branches.

Test the component against common scenarios, including group creation, deletion, and data export.


