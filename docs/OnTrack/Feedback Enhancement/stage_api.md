# Feedback API Documentation

## Overview

The Feedback API provides endpoints for managing stages of feedback on tasks for a given task
definition.

## Endpoints

### POST /stages

Creates a new stage for feedback on tasks for a given task definition.

#### Parameters

- `task_definition_id` (required, integer): The task definition to which the stage belongs.
- `title` (required, string): The title of the new stage.
- `order` (required, integer): The order to determine the order in which to display stages.

#### Example Request

```shell
POST /stages
Content-Type: application/json

{
  "task_definition_id": 1,
  "title": "New Stage",
  "order": 2
}
```

### GET /stages

Gets all the stages for a given task definition.

#### Parameters

- `task_definition_id` (required, integer): The task definition to which the stage belongs.

#### Example Request

```shell
GET /stages?task_definition_id=1
```

### PUT /stages/:id

Updates the name and order of a stage.

#### Parameters

- `id` (required, integer): The ID of the stage to update.
- `title` (optional, string): The new title for the stage.
- `order` (optional, integer): The new order value for the stage.

#### Example Request

```shell
PUT /stages/1
Content-Type: application/json

{
  "title": "Updated Stage",
  "order": 3
}
```

### DELETE /stages/:id

Deletes a stage.

#### Parameters

- `id` (required, integer): The ID of the stage to delete.

#### Example Request

```shell
DELETE /stages/1
```

## Error Handling

If the current user is not authorised to perform the requested action, the API will return a 403
error with the following format:

```json
{
  "error": "Not authorised to perform this action"
}
```

## Entities

The `StageEntity` is a representation of a stage in the system. It is used to present the data of a
stage in a structured format.

### Properties

| Property | Type    | Description                                                                                                                                                                                                      |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| id       | Integer | The `id` property is a unique identifier for the stage. It is automatically assigned when a new stage is created.                                                                                                |
| title    | String  | The `title` property is a string that represents the title of the stage. This is a human-readable name for the stage.                                                                                            |
| order    | Integer | The `order` property is an integer that represents the order in which the stage should be displayed relative to other stages. Lower numbers represent earlier stages, and higher numbers represent later stages. |

### Example

Here is an example of a `StageEntity`:

```json
{
  "id": 1,
  "title": "Summaries and Reflections",
  "order": 1
}
```
