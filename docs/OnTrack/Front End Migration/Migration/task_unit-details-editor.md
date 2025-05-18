# OnTrack Component Review

## Team Member Name
**Pasindu Fernando**  
**Student ID:** s224263102

## Component Name
**unit-details-editor**

## Files in this Component
- `unit-details-editor.coffee`  
- `unit-details-editor.tpl.html`

## Component Purpose
The unit-details-editor component allows an administrator or convenor to view and update the core details of a unit, such as code, name, description, teaching period, key dates, and system behaviors. It also includes toggles for configuration options like student extensions, tutorial editing rights, D2L integration, and Overseer assessment.

This interface is essential for managing how a unit behaves in OnTrack, setting parameters that influence student interaction, task generation, and system automation.

---

## Component Outcomes and Interactions

### **Expected Outcome**
- Unit details can be viewed and edited in a form layout.
- Dropdowns are available for selecting the teaching period and learning summary task.
- Staff can choose dates using date pickers for start, end, and portfolio auto-generation.
- Toggle options let users enable or disable settings like extension requests and notifications.
- When the "Update" button is clicked, the changes should be saved and success feedback should appear.

---

## Inputs
- Users interact with the form fields to modify this data.

---

## Outputs
- Updates are saved through the API when the "Update" button is pressed.
- Visual feedback is shown on success or error.
