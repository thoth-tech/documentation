# OnTrack Component Review

## Team Member Name
[Fuk Sang Wong] | [224078886]

---

## Component Name
- `group-member-list.component.ts`
- `group-member-list.component.html`
- `group-member-list.component.scss`

---

## Component Purpose
The purpose of `group-member-list` is to display members within a selected group. It supports:
- Sorting members by specific attributes like name, grade, or ID.
- Dynamically updating the list of members when one is removed.
- Displaying appropriate messaging for empty groups or unauthorized actions.

---

## Component Outcomes and Interactions
Users can:
- View the list of group members.
- Sort members by various columns (e.g., name, ID).
- Remove members dynamically (if authorized).
- See a loading spinner during data fetching.

Inputs used in the component:
```typescript
@Input() group: Group; // The group object containing the list of members
@Input() allowRemove: boolean; // Determines if users can remove members
```

Outputs emitted by the component:
```typescript
@Output() memberRemoved: EventEmitter<Member>; // Event triggered when a member is removed
```

---

## Component Migration Plan
I will be following the [Thoth-Tech Migration Guide](https://github.com/thoth-tech/doubtfire-web/blob/main/MIGRATION-GUIDE.md)
and referring to other migrated components to ensure consistency with the project.

Steps to be completed:
1. Refactor CoffeeScript logic to TypeScript using Angular 17.
2. Rewrite the HTML template using Angular 17's syntax and Tailwind CSS for styling.
3. Migrate and modularize the SCSS styling into reusable Tailwind CSS classes.

Visual references:
- Original Design (Before Migration):
  - ![group-member-list-original](Resources/group-member-list-original.jpg)
  - ![group-member-list-original1](Resources/group-member-list-original1.jpg)
- Migrated Design (After Migration):
  - *Placeholder: To be added after migration is completed.*

---

## Component Post-Migration
*This section will be updated after the migration is completed.*

Expected outcomes after migration:
- The component will be refactored to align with Angular's best practices.
- Accessibility improvements:
  - Keyboard navigation support.
  - Screen reader-friendly attributes (e.g., `aria` tags).
- Enhanced error handling:
  - User-friendly messages for server errors or unauthorized access.
- Validated UI responsiveness for different screen sizes.

---