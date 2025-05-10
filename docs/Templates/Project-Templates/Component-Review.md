# Ontrack Component Review

## Team Member Name  
Ekamjot Singh
224235519

## Component Name  
`group-selector`  

### Files in this component:
- `group-selector.component.ts`  
- `group-selector.component.html`  
- `group-selector.component.scss`  


## Component Purpose  

The `group-selector` component is designed to allow users (typically staff) to view, edit, and manage student tutorial groups within a unit. It presents a table where each row represents a group, displaying attributes like name, tutorial association, capacity, and lock status.  
Users can click to edit the group’s details inline using input fields or dropdowns. The interface supports toggling lock status, saving or canceling edits, and deleting groups.  

> **Screenshot Example**:  
> - **View mode**: Rows display group info with action buttons (Edit, Lock/Unlock, Delete).  
> - **Edit mode**: Input fields appear in-place with Save/Cancel options.  

## Component Outcomes and Interactions  

### Expected Outcomes:
- View a list of groups in a unit  
- Edit group name, tutorial association, and capacity  
- Save or cancel group edits  
- Lock/unlock a group  
- Delete a group  

### Interactions:
- **Input**: Accepts a `unit` object that includes groups and tutorials  
- **Output**: Emits updated group data back to parent or backend service  
- **Services**: May use `UnitService`, `GroupService`, and related observables for saving and deleting  

## Component Migration Plan  

### Migration Goals:
- Migrate from Angular Material + Bootstrap to Tailwind CSS  
- Improve accessibility and responsiveness  
- Ensure smooth inline editing without layout shifts  

### Steps:
1. Analyze current HTML and styling   
2. Replace UI elements with Tailwind CSS equivalents (`input`, `select`, `button`)  
3. Use Tailwind spacing and transition utilities for stable layout  
4. Ensure responsive design using Tailwind’s flex/grid utilities  
5. Update Angular bindings (`[(ngModel)]` or ReactiveForms)  
6. Validate UI and UX with mock data  


###Before 
![image](https://github.com/user-attachments/assets/c65f60db-ef86-4f5c-9b53-2087a791911d)