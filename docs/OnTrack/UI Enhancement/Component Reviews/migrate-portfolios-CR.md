# Portfolios Component Review

## Team Member Name  
**Zara Danziger**  
**Student ID:** s223468285

---

## Component Name  
**Portfolios**

---

## Files in this Component  
- `Portfolios.coffee` → `Portfolio.component.ts`  
- `Portfolio.tpl.html` → `Portfolio.component.html`  
- `Portfolio.scss` → `Portfolio.component.css`

---

## Component Purpose  
The portfolio component allows staff to interact with student portfolios, providing functionality for viewing progress, assessing portfolios, and downloading related files such as grades and portfolios. It ensures that only users who have provided consent are tracked for analytics. This component helps to organize and manage the workflow of grading and portfolio assessment tasks efficiently.

---

## Screenshots 
![Portfolio Screenshot 1](portfolio1.png)

![Portfolio Screenshot 2](portfolio2.png)

![Portfolio Screenshot 3](portfolio3.png)

---

## Component Outcome and Interactions

### Expected Outcomes:
- Displays the portfolio details, progress, and grades when the user switches tabs or filters.  
- Logs user interactions with portfolio views.  
- Shows error messages.  
- Only valid data is tracked and sent for analytics. Any invalid data should be filtered out.  
- Ensures the student’s portfolio loads correctly when a student is selected.

### Interactions:

**Inputs:**
- The user selects a student from the list, changing the view to their portfolio.  
- User filters by grades or student status.  
- The component updates when the `selectedStudent` scope variable changes.  
- The active tab is updated based on user interaction.

**Outputs:**
- Logs actions like tab switching and student selection.  
- Displays portfolio details for the selected student, including grades and progress.  
- If an error occurs while loading student data, shows a message with error details.

---

## Component Migration Plan

### Migration Steps:
1. **Review Existing Component**  
   - Go over the current component.  
   - Identify the functionalities.

2. **Set Up Environment**  
   - Ensure the environment is properly set up and working within the correct branch (9.x).

3. **Create Component**  
   - Create a new component in Angular 17 TypeScript.  
   - Create a new HTML file.  
   - Create a new CSS file.  

4. **Migrate and Downgrade Component**  
   - Follow the migration guide steps 3 and 4 to downgrade and migrate the component.

5. **Testing**  
   - Test the application with the new component on multiple platforms (e.g., Google Chrome, Safari).  
   - Fix any issues before committing changes.

---

## Component Check List

- [ ] **User Permissions**  
  Ensure only authorised users (Tutors and Admins) can interact with portfolio-related features.

- [ ] **UI Behaviour Tracking**  
  Logs interactions when the user selects tabs, changes filters, or clicks buttons related to student portfolios.

- [] **Scope Updates**  
  Logs changes to scope variables.

- [] **Data Validation**  
  Ensure only valid student data is tracked.

- [] **Error Handling**  
  Show error messages if a student portfolio or grades can’t be loaded.