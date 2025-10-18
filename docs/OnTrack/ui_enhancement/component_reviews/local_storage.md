**Ontrack Component review**

**Student Name: Aryan Bagoria**

**Student ID: 22107150**

First select a component to review from the list below:

[https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5](<https://deakin365.sharepoint.com/:x:/r/sites/ThothTech2/Shared%20Documents/OnTrack%20-%20UI%20Enhancement/T3_2022/Management%20%5BT3_2022%5D/selected_task(revised).xlsx?d=wac02013da5224c958ac60fd96fac7b20&csf=1&web=1&e=UfCmZ5>)

**Component Name**

local-storage.coffee - doubtfire-web/src/app/config/local-storage/local-storage.coffee

Relevant files:

- `local-storage.component.ts`

**Component purpose**

this component local-storage.coffee is used to configures 'localstorage' usage in the application

![local-congig](local-config.png)

**Component outcomes/interactions**

Basically, this component is used to configure the "localstorage" usage, which is used to set up the
prefix on the key-value pair that gets stored in the web browser's local storage. for example: (user
id, email), (login time), and (credentials token).

**Component migration plan -**

As this is a non visual componet which just configures local-storage, so for that i will be creating
a new Typescript file local-storage.component.ts and remove the old local-storage.coffee file.

**Component review checklist** – What is needs to be checked for this component to work once
migrated?

once migrated we need to check whether the code compiles without any errors or warnings.

**Discussion with Client (Andrew Cain)**

See if the component is still needed and present this document so Andrew can review if all the
outcomes and interactions are correct prior to the migration and build of this component.
