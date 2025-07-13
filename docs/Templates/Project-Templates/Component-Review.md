# Ontrack Component review

## Team Member Name : Lovleen Kala

## Component Name

File Uploader

List of Files in this Component:

file-uploader.component.html 

file-uploader.component.scss 

file-uploader.coffee 

## Component purpose

The File Uploader component provides a interface for uploading files within the OnTrack platform. It is designed to handle various file formats, validate file types, and trigger events for successful uploads. This component is crucial for managing group-related files, such as CSV imports for group sets and student data.
This component is being used in severla other componnets.
![image](https://github.com/user-attachments/assets/763cb246-24ef-4273-96ec-a23c7481c084)

Before Migration: 
![image](https://github.com/user-attachments/assets/8667e2f1-bc4b-4dec-bb04-33a7f86d9469)


## Component outcomes and interactions

The File Uploader component interacts with the Group Set Editor and Group Member List components, csv-upload-modal, portfolio-add-extra-files-step,portfolio-learning-summary-report-step, upload-submission-modal, task-ilo-alignment-edior. It takes in file objects and uploads them to a specified endpoint, triggering success and completion events. It can pass the uploaded file data to the parent component for further processing.

Expected Outcomes:

Successful file upload triggers an 'on-success' event.
Completion of the entire upload triggers an 'on-complete' event.
Error handling for unsupported file types or exceeding file size limits.

Data Objects:

File Object: Represents the uploaded file.
Upload Progress: Tracks the progress of the current upload.
Upload Status: Indicates the current state (uploading, completed, failed).


## Component migration plan

I aim on following the migration guide in order to migrate this componnet. After completing the code I plan on testing all the components with the parent components to make sure that everything works.

## Discussion with Client (Andrew Cain)

Finally you will need to take the feedback from Andrew and Discuss any addtional considertions he
may have with this component before writing any code.