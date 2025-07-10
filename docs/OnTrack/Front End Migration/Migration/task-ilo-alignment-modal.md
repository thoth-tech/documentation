### Description
This is a Component review of frontend migration on OnTrack.

### **Ontrack Component Review**

### **Team Member Name**
Disuru Rathnayake
Student ID: s223987245

### **Component Name**

Task-ilo-alignment-modal

### **Files in this Component**

task-ilo-alignment-modal.coffee
task-ilo-alignment-modal.tpl.html

### **Component Purpose**
This component is designed to manage the alignment of tasks or activities with specific learning outcomes. Users can select a rating to indicate how strongly a task contributes to a given outcome. Upon selection, a popup allows users to edit the rating, provide a rationale, or delete the alignment if it's no longer relevant.

### **Component Outcomes and Interactions**

### Expected Outcome:

1. When a user clicks a rating cell for a task–outcome combination, the popup component is triggered.

2. The popup displays the current rating and rationale (if available).

3. Users can:

- Edit the rating value.

- Add or update the rationale.

- Delete the outcome alignment entirely.

4. On saving or deleting, the popup closes and the main interface is updated accordingly.


### Interactions:
**Inputs:**

1. Current rating: The numeric value passed to the popup for display and editing.

2. Existing rationale : Pre-filled text for the user to edit or provide a new rationale.

3. Save action: Triggered when a user confirms the rating/rationale.

4. Delete action: Triggered when a user clicked the delete button.

**Outputs:**
Outputs:

1. Updated rating: The modified rating value is returned to the parent component for updating the interface.

2. Updated rationale: The edited or newly added rationale is saved and displayed in the relevant task–outcome cell.

3. Deleted outcome alignment: When the delete button is clicked, the popup triggers the removal of the rating and rationale from the corresponding task–outcome pair in the main interface.

4. Popup closure: After saving or deleting, the popup closes automatically to return the user to the main view.


### **Component Migration Plan**

**Migration Steps:**

1. Analyze the Old Component
- Run the existing modal in Doubtfire to understand its behavior.

2. Disconnect the Old Component
- Remove the reference to task-ilo-alignment-modal.coffee in any directives.coffee or module loader files.

3. Create the New Angular Files

Create new files:

- task-ilo-alignment-modal.component.ts

- task-ilo-alignment-modal.component.html

4. Connect the New Component

- Import and declare the component in doubtfire-angular.module.ts.

- In doubtfire-angularjs.module.ts, downgrade the Angular component so it can be used by AngularJS.

5. Migrate Logic and Template
- Move CoffeeScript logic to TypeScript: handle rating updates, rationale editing, and delete functionality.
- Convert .tpl.html to Angular Material template with proper Angular syntax.
6. Test Everything:
     •	Check that the new setup works just like the old one by running the same tests.
     •	Fix any problems that come up during testing.

### **Component Review Checklist**

1. Modal opens and closes correctly.
2. Rating can be selected and updated.
3. Rationale can be added or edited.
4. Alignment can be deleted.
5. Works correctly with parent components.
6. No impact on other parts of the application.



