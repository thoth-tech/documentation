# Design Document for Inclusion of `Stage` Components in Unit Chair Admin Page

![Component for inserting stages into task definition](<images/Screenshot 2024-05-17 at 22-22-56 OnTrack.png>)

## Unit Chair's View

- Unit Chairs can manage stages for tasks via the admin page.
- A new section labelled "Stages" allows Unit Chairs to add, edit, and remove stages for tasks.
- Each stage consists of a title and an order, which can be adjusted to define the sequence of
  stages.

![Stage Component with two example stages added](<images/Screenshot 2024-05-17 at 22-23-39 OnTrack.png>)

## Features and Interactions

- **Add New Stage**:

  - A button labelled "+ Add New Stage" allows Unit Chairs to add a new stage.
  - When clicked, a new row is added with fields to input the stage title and order.

- **Edit Stage**:

  - Existing stages can be edited directly in the input fields for title and order.
  - Changes are saved automatically or by clicking an "Update" button (if implemented).

- **Remove Stage**:

  - A delete icon (trash can) next to each stage allows Unit Chairs to remove the stage.
  - Clicking the delete icon will prompt for confirmation before removal.

- **Reorder Stages**:
  - Up and down arrow icons next to the order field allow Unit Chairs to reorder the stages.
  - Clicking the arrows will move the stage up or down in the list, adjusting the order accordingly.

## Workflow

1. **Add New Stage**:

   - Click the "+ Add New Stage" button.
   - Fill in the title and order for the new stage.
   - The new stage appears in the list with the specified order.

2. **Edit Stage**:

   - Modify the title or order directly in the input fields.
   - Changes are saved automatically on change.

3. **Remove Stage**:

   - Click the delete icon next to the stage.
   - Confirm the removal in the prompt.
   - The stage is removed from the list.

4. **Reorder Stages**:
   - Use the up and down arrow icons to change the stage order.
   - The order of stages is updated accordingly.

## Security and Access Control

- Only Unit Chairs have access to the "Stages" section on the admin page.
- Changes to stages are restricted to authorised Unit Chairs to ensure task integrity.

## Benefits

- Provides a structured way to define and manage stages for tasks.
- Enhances the organisation and clarity of task definitions.
- Facilitates easy updates and modifications to task stages.
