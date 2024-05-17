# Task Definition Stages Component Documentation

## Overview

The `TaskDefinitionStagesComponent` is an Angular component that manages the stages of a task definition. It provides functionality to add, remove, update, and reorder stages.

## Properties

- `taskDefinition`: An `Input` property that represents the task definition for which the stages are managed.
- `table`: A `ViewChild` that represents the table displaying the stages.
- `columns`: An array of strings that represents the columns in the table.
- `stages`: An array of `Stage` objects that represents the stages of the task definition.
- `successAlertTime`, `dangerAlertTime`, `warningAlertTime`: Time durations for different types of alerts.

## Methods

- `ngOnInit()`: Lifecycle hook that is called after data-bound properties of a directive are initialized.
- `unit()`: Getter method that returns the unit of the task definition.
- `loadStages()`: Fetches the stages for the current task definition from the server.
- `sortStages()`: Sorts the stages based on their order.
- `updateStageOrder()`: Updates the order of the stages and saves the changes to the server.
- `addStage()`: Adds a new stage to the task definition.
- `removeStage(stage: Stage)`: Removes a stage from the task definition.
- `updateStage(stage: Stage, showAlert: boolean = true)`: Updates a stage and optionally shows an alert.
- `moveStageUp(index: number)`: Moves a stage up in the order.
- `moveStageDown(index: number)`: Moves a stage down in the order.

## Usage

The `TaskDefinitionStagesComponent` is used in the template of a parent component as follows:

```html
<f-task-definition-stages [taskDefinition]="taskDefinition"></f-task-definition-stages>
```

Here, `taskDefinition` is a property of the parent component that contains the task definition for which the stages are managed.

## Dependencies

The `TaskDefinitionStagesComponent` depends on the `StageService` to perform operations on stages. It also uses the `alertService` to show alerts to the user.