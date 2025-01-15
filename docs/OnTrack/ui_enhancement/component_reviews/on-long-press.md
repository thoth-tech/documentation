**Ontrack Component review**

**Student Name: Aryan Bagoria**

**Student ID: 221071501**

First select a component to review from the list below:

[https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5](<https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5>)

**Component Name**

on-long-press - doubtfire-web/src/app/common/long-press/on-long-press.coffee

Relevant files:

- `on-long-press.component.ts`
- `on-long-press.coponent.html`
- `on-long-press.coponent.scss`

**Component purpose**

this component on-long-press can detect when a user touches and holds a button for a certain amount
of time (600 milliseconds by default). When this happens it can trigger certain action.this
functionality can be added to any element as an attribute.

**Component outcomes/interactions**

Basically, this component is used to trigger a special action that can be defined for any element
such as a button. This is useful for touch-based interfaces for example on mobile devices, where
holding down on an element can perform a specific action.

**Component migration plan -**

As this is a non visual componet that has a functionality to detect long presses which can be added
to any element as an attribute So I will be converting the old coffee file into .ts file and an html
file to create a button that uses the onLongPress directive to trigger a long press event.

**Component review checklist** – What is needs to be checked for this component to work once
migrated?

once migrated we need to check whether the code compiles without any errors or warnings.

**Discussion with Client (Andrew Cain)**

See if the component is still needed and present this document so Andrew can review if all the
outcomes and interactions are correct prior to the migration and build of this component.
