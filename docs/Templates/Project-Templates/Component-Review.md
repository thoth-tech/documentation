# Ontrack Component Review

## Team Member Name  
**Ekamjot Singh**  
**Student ID: 224235519**

---

## Component Name  
`group-member-contribution-assigner`

---

### Files in this Component:
- `group-member-contribution-assigner.component.ts`  
- `group-member-contribution-assigner.component.html`  
- `group-member-contribution-assigner.component.scss`

---

## Component Purpose  

The `group-member-contribution-assigner` component is designed to allow students to view, edit, and manage their own and their team members' contributions when submitting a group task within a unit.  

It presents a modal where each row represents a student, displaying attributes like **name**, **target grade**, and **contribution**. Users can click to edit a team member's contribution. 



---

## Component Outcomes and Interactions  

### ✅ Expected Outcomes:
- View a list of group members and their contributions  
- Edit a group member’s contribution  


### 🔁 Interactions:
- **Inputs**: Receives a `team` object that contains member contributions  
- **Outputs**: Emits updated contribution data to the parent component or backend  
- **Services**: Likely interacts with services like `GroupService` for persisting changes  

---

## Component Migration Plan  

### 🎯 Migration Goals:
- Migrate UI from Angular Material + Bootstrap to **Tailwind CSS**  
- Improve accessibility and responsiveness  
- Maintain intuitive inline editing with minimal layout shifts  

### 📋 Migration Steps:
1. Analyze current HTML layout and style dependencies  
2. Replace UI elements (`<button>`, `<input>`, icons) with Tailwind equivalents  
3. Use Tailwind utility classes for consistent spacing, color, and layout  
4. Ensure mobile-friendly design with Tailwind's grid and flex utilities  
5. Update form controls to use `[(ngModel)]` or Reactive Forms  
6. Test thoroughly with mock data to confirm usability and data binding  

---

### 🔄 Before (Legacy UI Example)

![image](https://github.com/user-attachments/assets/bd0b2337-619c-4986-8c13-509e1e869dd5)