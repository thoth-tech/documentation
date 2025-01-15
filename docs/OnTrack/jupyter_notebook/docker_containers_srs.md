# Jupyter Notebook/Word Document Docker Containers Software Requirement Specification (SRS) Document

## 1. Introduction

### 1.1 Purpose

Currently, when an end user wishes to upload a Jupyter Notebook file to OnTrack, they must first
manually convert the file to a PDF. The purpose of the Jupyter Notebook conversion feature is to
automatically perform the conversion of Jupyter Notebook files to PDF during the submission process.
During research for this feature it was determined that converting Word documents to PDF was an
extensible feature of the Jupyter Notebook conversion feature. Depending on the type of file that an
end user submits - if it is a Word document or a Jupyter Notebook file - one container will provide
the conversion function for the Jupyter Notebook, and the other container will provide the
conversion function for the Word document. Both containers will output a PDF file.

### 1.2 Intended Audience

The intended audience of this feature is all users of the OnTrack system (students and teachers).
This feature will allow all users to submit Jupyter Notebook and Word Document files to OnTrack
directly, instead of having to first manually convert the file to PDF and then submit that to
OnTrack. The feature will also allow users to view their converted file for review or marking.

### 1.3 Intended Use

The intended use of this feature is to provide the functionality for the mentioned conversions. The
user will submit either a Jupyter Notebook or a Word document file to OnTrack, and each container
will be used, depending on the file type, to make the necessary conversion of the submitted file to
PDF format.

### 1.4 Scope

This feature will be developed in steps: firstly we aim to develop standalone containers which
provide the feature, secondly they will be integrated into OnTrack thus completing the feature. The
scope during this trimester will be to create standalone Docker containers which can provide the
function of converting Jupyter Notebook or Word Document files to PDF format. Also within scope is
testing the containers and ensuring they conform to a testing strategy.

### 1.5 Definitions and Acronyms

- OnTrack – an online learning management system that provides task work to users and allows them to
  submit work for feedback and assessment purposes.
- DOCX/DOC - a DOCX/DOC file is a document created by Microsoft Word, a word processor. DOCX/DOC
  files typically contain text.
- IPYNB – an IPYNB (IPython notebook) file is a document created by Jupyter Notebook, an interactive
  computational environment. IPYNB files can contain code input and output, formatted text,
  mathematical functions, and images.
- PDF – a PDF (portable document format) file is a multi-platform document commonly used for saving
  documents to be viewed on multiple platforms.
- Docker Container Image – a Docker Container Image is a lightweight, stand-alone, executable
  package of software that includes everything needed to run an application: code, runtime, system
  tools, system libraries and settings.

## 2. Overall Description

### 2.1 User Needs

Users will need to be able to directly submit Jupyter Notebook and Word document files to OnTrack.
Both of these functionalities will be provided by the proposed containers.

### 2.2 Assumptions and Dependencies

- It is assumed that:
  - The user submits a valid Jupyter Notebook/Word Document file to the OnTrack system.
  - The user has a valid internet connection
  - The user is aware of how to submit files to OnTrack
- The following dependencies are relied upon:
  - The code of the OnTrack system
  - Interface

## 3. System Features and Requirements

### 3.1 Functional Requirements

- The successful conversion of Jupyter Notebook files to PDF format
- The successful conversion of Word document files to PDF format
- Redownloading submitted Jupyter Notebook files as a PDF
- Redownloading submitted Word document files as a PDF
- Viewing converted Jupyter Notebook file in Ontrack as a PDF
- Viewing converted Word document file in Ontrack as a PDF

### 3.2 External Interface Requirements

- nbconvert library
- Apache library
- Existing OnTrack libraries

### 3.3 System Features

- The ability to submit Jupyter Notebook files to OnTrack directly
- The ability to submit Word document files to OnTrack directly
- The ability to download/export converted files from OnTrack

### 3.4 Nonfunctional Requirements

- Reliability – The ability of the system to consistently perform its required functions under
  stated conditions.
- Scalability – ability of software to be scaled to encompass project scope in its entirety
- Maintainability – ability of software to be maintained, ensuring consistent and upmost performance
- Usability – User standards
