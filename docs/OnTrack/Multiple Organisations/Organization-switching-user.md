# Backend Design Document for Organization Management & Switching in OnTrack

## Document Information

---

### Author Information

---

- Author: Amrith Jayadeep
- Team: OnTrack Backend


### Document Summary

---

- Documentation Title: Backend Design Document for Organization Management & Switching in OnTrack
- Documentation Type: Technical Design
- Documentation Information Summary:
  - This document outlines the backend design for the Organization Management and Switching feature in OnTrack, enabling users to view, manage, and switch between multiple organizations securely and efficiently.

### Document Review Information

---

- Date of Original Document Submission to GitHub: [Date]
- Documentation Version: v1.0
- Date of Previous Documentation Review: N/A, first version.
- Date of Next Documentation Review: To Be Determined

### Key Terms

---

- Organization: A distinct entity within OnTrack containing its own users and data.
- UserOrganization: Join model associating users with multiple organizations.
- Organization Switching: The process of changing a user's active organization context.

### Key Links/Resources

---

- [Multiple Organizations Design Doc]- https://thoth-tech.netlify.app/products/ontrack/documentation/multiple-organisations/design-documentation/#_top
- [OnTrack API Documentation]

### Contacts for further information

---

- OnTrack Backend Team

### Related Documents

---

- Multiple Organizations Design Doc  https://thoth-tech.netlify.app/products/ontrack/documentation/multiple-organisations/design-documentation/#_top

---

## Introduction

---

### Purpose

This document outlines the backend design for the Organization Management and Switching feature in OnTrack. The purpose is to provide users with the ability to view, manage, and switch between multiple organizations based on their roles (e.g., Admin, Convenor, Student) in a secure and consistent manner.

### Scope

This feature enables:

- Users to view a list of organizations they belong to
- Users to switch their current active organization
- Backend handling of organization-based access control
- Admin and Convenor capabilities for managing organization members

### Intended Audience

This document is intended for backend developers, testers, technical leads, and stakeholders involved in the implementation and evaluation of organization-level features in OnTrack.

---

## Architecture and Data Models

---

### Data Models

- **User:** Extended with `current_organization_id`
- **Organization:** Stores information about each organization
- **UserOrganization:** Join model to associate users with multiple organizations

### Schema Changes

- Add `current_organization_id` column to the users table
- Ensure foreign key relationships and indexes for performance

---

## API Design

---

### Key API Endpoints

#### List Organizations

- **Endpoint:** `GET /api/organizations`
- **Description:** Returns a list of organizations the user is a member of.

#### Switch Organization

- **Endpoint:** `POST /api/organizations/switch`
- **Payload:**
  ```json
  {
    "organization_id": 123
  }