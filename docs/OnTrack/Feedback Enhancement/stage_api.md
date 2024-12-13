# Feedback API Documentation

## Overview

The Feedback API provides endpoints for managing stages of feedback on tasks for a given task
definition.

## Authorisation

All endpoints require authentication using a username (`Username`) and an authentication token
(`Auth_Token`) provided in the header. The user must be authorised to modify the task definitions
for the unit. For testing purposes you should use the `aconvenor` account with the password
`password`. The `stage.service` will supply these details in the request automatically. If you are
using testing the API you will need to manually supply the relevant auth token.

## Endpoints

### POST /stages

This endpoint allows you to create a new stage for feedback on tasks for a given task definition.

#### Parameters

| **Parameter**        | **Value**    | **Description**                                                 | **Parameter Type** | **Data Type** |
| -------------------- | ------------ | --------------------------------------------------------------- | ------------------ | ------------- |
| `task_definition_id` | _(required)_ | **The task definition to which the stage belongs**              | `path`             | integer       |
| `title`              | _(required)_ | **The title of the new stage**                                  | `formData`         | string        |
| `order`              | _(required)_ | **The order to determine the order in which to display stages** | `formData`         | integer       |
| `Username`           | _(required)_ | **Username**                                                    | `header`           | string        |
| `Auth_Token`         | _(required)_ | **Authentication token**                                        | `header`           | string        |

#### Example

##### Curl

```
curl -X POST --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'Username: aconvenor' --header 'Auth_Token: obTMses3UCQu3cwRv8EL' -d 'task_definition_id=1&title=test&order=1' 'http://localhost:3000/api/stages'
```

##### Request URL

```html
http://localhost:3000/api/stages
```

### GET /stages

This endpoint allows you to get all the stages for a given task definition.

#### Parameters

| **Parameter**        | **Value**    | **Description**                                    | **Parameter Type** | **Data Type** |
| -------------------- | ------------ | -------------------------------------------------- | ------------------ | ------------- |
| `task_definition_id` | _(required)_ | **The task definition to which the stage belongs** | `query`            | integer       |
| `Username`           | _(required)_ | **Username**                                       | `header`           | string        |
| `Auth_Token`         | _(required)_ | **Authentication token**                           | `header`           | string        |

#### Example

##### Curl

```shell
curl -X GET --header 'Accept: application/json' --header 'Username: aconvenor' --header 'Auth_Token: obTMses3UCQu3cwRv8EL' 'http://localhost:3000/api/stages?task_definition_id=1'
```

##### Request URL

```html
http://localhost:3000/api/stages?task_definition_id=1
```

---

### PUT /stages/:id

This endpoint allows you to update the name and order of a stage.

#### Parameters

| **Parameter**        | **Value**    | **Description**                                                 | **Parameter Type** | **Data Type** |
| -------------------- | ------------ | --------------------------------------------------------------- | ------------------ | ------------- |
| `title`              | _(required)_ | **The title of the new stage**                                  | `formData`         | string        |
| `order`              | _(required)_ | **The order to determine the order in which to display stages** | `formData`         | integer       |
| `Username`           | _(required)_ | **Username**                                                    | `header`           | string        |
| `Auth_Token`         | _(required)_ | **Authentication token**                                        | `header`           | string        |
| `task_definition_id` | _(required)_ | **The task definition to which the stage belongs**              | `path`             | integer       |

#### Example

##### Curl

```shell
curl -X PUT --header 'Content-Type: application/x-www-form-urlencoded' --header 'Accept: application/json' --header 'Username: aconvenor' --header 'Auth_Token: obTMses3UCQu3cwRv8EL' -d 'title=Modified%3A%20Test&order=1' 'http://localhost:3000/api/stages/1'
```

##### Request URL

```html
http://localhost:3000/api/stages/1
```

---

### DELETE /stages/:id

This endpoint allows you to delete a stage.

#### Parameters

| **Parameter**        | **Value**    | **Description**                                    | **Parameter Type** | **Data Type** |
| -------------------- | ------------ | -------------------------------------------------- | ------------------ | ------------- |
| `Username`           | _(required)_ | **Username**                                       | `header`           | string        |
| `Auth_Token`         | _(required)_ | **Authentication token**                           | `header`           | string        |
| `task_definition_id` | _(required)_ | **The task definition to which the stage belongs** | `path`             | integer       |

#### Example

##### Curl

```shell
curl -X DELETE --header 'Accept: application/json' --header 'Username: aconvenor' --header 'Auth_Token: obTMses3UCQu3cwRv8EL' 'http://localhost:3000/api/stages/3'
```

##### Request URL

```html
http://localhost:3000/api/stages/3
```

#### Error Handling

If the current user is not authorised to perform the requested action, the API will return a 403
error with the following format:

```json
{
  "error": "Not authorised to perform <action>"
}
```

## Entities

The `StageEntity` is a representation of a stage in the system. It is used to present the data of a
stage in a structured format.

---

### Properties

| Property | Type    | Description                                                                                                                                                                                                      |
| -------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `id`     | integer | The `id` property is a unique identifier for the stage. It is automatically assigned when a new stage is created.                                                                                                |
| `title`  | string  | The `title` property is a string that represents the title of the stage. This is a human-readable name for the stage.                                                                                            |
| `order`  | integer | The `order` property is an integer that represents the order in which the stage should be displayed relative to other stages. Lower numbers represent earlier stages, and higher numbers represent later stages. |

---

### Example

Here is an example of a `StageEntity`:

```json
{
  "id": 1,
  "title": "Summaries and Reflections",
  "order": 1
}
```
