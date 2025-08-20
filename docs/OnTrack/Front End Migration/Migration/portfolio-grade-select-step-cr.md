# OnTrack Component Review

## Team Member Name

### Pasindu Fernando
### Student ID : 
s224263102

## Component Name
portfolio-grade-select-step

### Files in this Component

portfolio-grade-select-step.coffee
portfolio-grade-select-step.tp.html
portfolio-grade-select-step.scss

### **Component Purpose**
This component is designed to allow users to select a grade that reflects their performance in the portfolio for a specific course unit. After confirming the statement "I have read the Assessment Criteria for this unit," users can choose a grade from the available options (P, C, D, HD). After completing the grade selection, users can navigate to either the previous or the next page.

### **Component Outcomes and Interactions**

### Expected Outcome:

1. When user checks the check box that confirms the reviewing assessment criteria for the grade, grade selection dev will be displayed. Otherwise it will not appear.

2. At the bottom of the page current target grade is shown

3. The user can select the relevant grade from the toggle buttons, based on what has been demonstrated in the portfolio

4. User can click back button despite of completing the selection of the grade. But it requires the checking the checkox of the "read assement criteria" statement to proceed into next page (Next button
)



### Interactions:
**Inputs:**

1. Confirm the reviewing assessment criteria: Check the checkbox

2. Portfolio grade select: Select the relavant grade through toggle selection button.

3. Navigate previous or next page: click the previous or next button.



**Outputs:**
Outputs:

1. Checked check box: 

2. Extends the webpage container to display the grade selection buttons

3. Updated grade : Once the grade is updated, the selected button highlights itself.

4. Refreshed Burndown chart: Burndown chart is refereshed according to the submitted grade.


### **Component Migration Plan**

**Migration Steps:**

1. Analyze the Old Component
- Run with the existing coffee script component  in Doubtfire to understand its behavior.

2. Disconnect the Old Component
- Remove the reference to portfolio-grade-select-step.coffee in any directives.coffee or module loader files.

3. Create the New Angular 17 component including following Files

Create new files:

- portfolio-grade-select-step.component.ts

- portfolio-grade-select-step.component.html

- portfolio-grade-select-step.component.scss

4. Connect the New Component

- Import and declare the component in doubtfire-angular.module.ts.

- In doubtfire-angularjs.module.ts, downgrade the Angular component so it can be used by AngularJS.

5. Migrate Logic and Template
- Move CoffeeScript logic to TypeScript: grade submission, .
- Convert the .tpl.html file to a modern .html template using Angular Material and proper Angular syntax
- Move the .scss code into portfolio-grade-select-step.component.scss
6. Test Everything:
     •	Check that the new setup works just like the old one by running the same tests.
     •	Fix any problems that come up during testing.

### **Component Review Checklist**

1. Display the content of "Step:2 Select grade" tab after clicking the "next" button in the "portfolio preparation" tab.
2. "I have read the Assessment Criteria for this unit" statement check box should be checkable and "grade application" section should appear as soon as the checkbox is checked.
3. Grade selection buttons should appear, be highlighted when clicked, and submit the correct grade index.
4. Page Navigation button should work correctly.