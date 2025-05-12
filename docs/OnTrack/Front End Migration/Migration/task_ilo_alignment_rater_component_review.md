### Description
This is a Component review of frontend migration on OnTrack.

### **Ontrack Component Review**

### **Team Member Name**
Disuru Rathnayake
Student ID: s223987245

### **Component Name**

Task-ilo-alignment-rater

### **Files in this Component**

task-ilo-alignment-rater.coffee
task-ilo-alignment-rater.scss
task-ilo-alignment-rater.tpl.html


### **Component Purpose**
This component is responsible for allowing users to rate how well a task aligns with specific learning outcomes (ILOs). It displays a set of icons representing ratings from 0 to 5. Users can select a rating, view or update a rationale, and optionally delete the alignment entirely.

### **Component Outcomes and Interactions**

### Expected Outcome:

The migrated task-ilo-alignment-rater component should function and look exactly the same as the original. This includes:

- Same UI appearance: colors, icons, layout, and hover effects must match the old version.
- Same rating behavior: click to rate, hover to preview, and toggle rating by clicking again.
- Modal interactions: opens correctly, shows current rating 


### **Component Migration Plan**

**Migration Steps:**

1. Analyze the Old Component
- Observe how the rating bar behaves: icon display, hover effects, click-to-rate, and readonly mode.

2. Disconnect the Old Component
- Delete task-ilo-alignment-rater.coffee, tpl.html and .scss files

3. Create the New Angular Files

Create new files:

- task-ilo-alignment-rater.component.ts

- task-ilo-alignment-rater.component.html

- task-ilo-alignment-rater.component.scss

4. Connect the New Component

- Import and declare the component in doubtfire-angular.module.ts.

- In doubtfire-angularjs.module.ts, downgrade the Angular component so it can be used by AngularJS.

5. Migrate Logic and Template
- Move CoffeeScript logic to TypeScript: handle rating area.
- Convert .tpl.html to Angular Material template with proper Angular syntax.

6. Test Everything:
     •	Check that the new setup works just like the old one by running the same tests.
     •	Fix any problems that come up during testing.

### **Component Review Checklist**

[x] Rating can be selected, updated, and toggled correctly
[x] Rating uses the same color scheme and icon styling as before
[x] readonly mode disables interaction and displays rating statically
[x] All usages of this nested component across the project are verified