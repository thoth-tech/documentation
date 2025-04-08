### Description
This is a Component review of frontend migration on OnTrack.

### **Ontrack Component Review**

### **Team Member Name**
Chelaka Yasodhana
Student ID: s224114763

### **Component Name**
unit-dates-selector

### **Files in this Component**
unit-dates-selector.coffee
unit-dates-selector.tpl.html 

### **Component Purpose**
•	The unit-dates-selector component is a date selection tool for editing a unit's key details during the rollover process.  It enables users to configure teaching periods, select start and end dates, and save the updated information for the unit.



### **Component Migration Plan**

**Migration Steps:**

1. Analyze the Old component:
     •	Run the current program to see how it works and what important parts it has.
2. Remove the Old component:
     •	Remove the line that includes src/app/units/states/rollover/directives/unit-dates-selector from the program files.
     •	Remove link to component from the angular module.

3. Add component to an Existing File:
     •	Add the component to a TypeScript file that already handles routing. This helps keep everything in one place.
4. Remove the refernces:
     •	Remove the reference. This will mean that the component is no longer loaded by angular.js.
     •	Make sure this file is connected properly to work with the rest of the program.
5. Setup the new component
    •	Setup the new component in doubtfire-angular.module.ts by importing import { TaskDescriptionCardComponent } from './projects/states/dashboard/directives/task-dashboard/directives/task-description-card/task-description-card.component';
    •	Then add the component name to the list of declarations. Now the component will be available in Angular.
    •	Migrate the HTML, CoffeeScript, and SCSS.
    •	Fix any problems that come up during testing.
6. Test Everything:
     •	Check that the new setup works just like the old one by running the same tests.
     •	Fix any problems that come up during testing.





