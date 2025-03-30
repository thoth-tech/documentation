### Description
This is a service review of frontend migration on OnTrack.

### **Ontrack Service Review**

### **Team Member Name**
Disuru Rathnayake
Student ID: s223987245

### **Service Name**

Routing

### **Files in this Service**

Routing.coffee

### **Service Purpose**
The Routing service helps guide users to the right starting page. If someone tries to access the site without a specific path, or just with an empty path (""), they are taken to the root path ("/"). From there, they are automatically directed to the home page ("/home"). This makes sure everyone starts from the same place, making it easier to use the site.

### **Service Outcomes and Interactions**

### Expected Outcome:

1. Users entering the site with an empty route ("") are automatically redirected to the main page ("/").

2. Users who reach the main page ("/") are further redirected to the home page ("/home").


### Interactions:
**Inputs:**
route: String that indicates the current path or route in the application.

**Outputs:**
The component reacts by redirecting users based on the provided route:

-      If the route is an empty string (""), users are redirected to the main page ("/").
-      If the route is the main page ("/"), users are redirected to the home page ("/home").


### **Service Migration Plan**

**Migration Steps:**

1. Analyze the Old Service:
     •	Run the current program to see how it works and what important parts it has.
2. Disconnect the Old Service:
     •	Remove the line that includes src/app/config/routing/routing from the program files.
     •	Take out the routing settings from the config.coffee file.
4. Add Routing to an Existing File:
     •	Add the routing settings to a TypeScript file that already handles routing. This helps keep everything in one place.
5. Set Up the New Routing:
     •	Update the TypeScript file with the new routes.
     •	Make sure this file is connected properly to work with the rest of the program.
6. Test Everything:
     •	Check that the new setup works just like the old one by running the same tests.
     •	Fix any problems that come up during testing.

### **Component Review Checklist: Routing**

1.	Correct Redirection Handling:

- Ensures that users are redirected to the root page ("/") when accessing with an empty route ("").
Example : User input - http://localhost:4200
- Verifies that users accessing the root page ("/") are redirected to the home page ("/home").
Example : User input - http://localhost:4200/ 

2.	Visibility of Changes:
After redirection, the new page or expected content is visible and functional, confirming that the routing logic is implemented correctly.



