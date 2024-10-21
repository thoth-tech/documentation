# Ontrack Component Review

## Team Member Name

AMOS SAJI  
Student ID: 221118434

## Component Name

`group-set-manager`

Files included in this component:
- `group-set-manager.coffee`
- `group-set-manager.tpl.html`
- `group-set-manager.scss`

## Component Purpose

The purpose of the `group-set-manager` component is to manage group memberships within a group set context, primarily for tutors. This component allows the addition and removal of group members and updates to group information. It provides an interface for managing group members, updating group names, and handling toolbar visibility based on user roles.

## Component Outcomes and Interactions

The expected outcomes for the `group-set-manager` component include:
- Tutors can add new members to a group.
- Tutors can update the group's name.
- The component controls the visibility of the member panel toolbar based on the presence of a unit role.

Interactions:
- Accepts and processes the following data objects:
  - `@Input() unit`: The current unit context.
  - `@Input() unitRole`: The role of the user within the unit.
  - `@Input() project`: The project associated with the group.
  - `@Input() selectedGroupSet`: The currently selected group set.
  - `@Input() showGroupSetSelector`: Boolean to show or hide the group set selector.

## Component Migration Plan

### Steps for Migration:
1. **Convert CoffeeScript to TypeScript**:
   - Migrate the logic from `group-set-manager.coffee` to TypeScript, ensuring that all AngularJS components and services are appropriately updated to Angular (Angular 2+). Replace `.coffee` files with `.ts` files to align with modern Angular practices.
2. **Update HTML Template**:
   - Ensure the HTML template (`group-set-manager.tpl.html`) is compatible with Angular's newer version. Replace deprecated AngularJS directives with Angular equivalents, and update the structure for Angular's template binding.
3. **Migrate SCSS Styles**:
   - Ensure SCSS styles are compatible with the migrated TypeScript component. Modify class and id selectors where necessary, considering Angular Material design principles. Migrate Bootstrap elements to Angular Material components.
4. **Update the Service**:
   - Use `downgradeInjectable` to downgrade the Angular service for compatibility with AngularJS in `AngularJS.ts`, as per mentor feedback.
5. **Import the Component**:
   - Import the component into `AngularModule.ts`, adding it to the `declarations` array to ensure proper registration in the Angular framework.
6. **Testing**:
   - Test the migrated component in isolation to verify its functionality.
   - Conduct end-to-end tests within the broader system to ensure seamless integration.

### Comparison:
- **Original (CoffeeScript)**: `group-set-manager.coffee`
- **Migrated (TypeScript)**: `group-set-manager.component.ts`

## Component Review Checklist

- [ ] Ability to collect group details and display them to the user.
- [ ] Succeeds in adding a new member to a group.
- [ ] Correctly updates group names.
- [ ] Handles errors such as missing or invalid group details.
- [ ] Toolbar visibility correctly toggles based on user role.
- [ ] Service downgraded to work with AngularJS (`downgradeInjectable` used).
- [ ] Component imported to `AngularModule.ts`.
- [ ] All functionalities migrated and working correctly in TypeScript.

