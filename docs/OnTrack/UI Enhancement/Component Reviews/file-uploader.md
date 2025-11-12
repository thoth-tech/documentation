# Ontrack Component review

## Team Member Name

Anirudh Nellippilli Joshi

## Component Name

Component Name : csv-result modal Files in the component : csv-result-modal.coffee,
csv-result-modal.scss, csv-result-modal.tpl.html, csv-upload-modal.tpl.html

## Component purpose

The component helps the users to download as well as to upload csv files onto ontrack.

## Component outcomes and interactions

For the component you need to log in with the convenor credentials then go to the manage units in
the top right corner next to the profile. And in that you will need to select a unit and then select
tasks, underneath you will see the defenitions csv download and upload. In this component the users
are able to download the recent csv files that has been uploded and also they can upload new csv
files onto it.

## Component migration plan

Now for the migration of the componet, we started the migration by creating the replacement files
that are : - csv-result-modal.componet.ts

- csv-result-modal.componet.html
- csv-result-modal.component.scss
- csv-result-modal.service.ts
- csv-upload-modal.componet.ts
- csv-upload-modal.componet.html
- csv-upload-modal.component.scss
- csv-upload-modal.service.ts After creating all the replacement files we will start to migrate the
  code which was in angular.js to angular by following all the essential guidlines provided as well
  as external resources. Since we don't have to change the layout of the component we can go with
  the migration of the existing code.
