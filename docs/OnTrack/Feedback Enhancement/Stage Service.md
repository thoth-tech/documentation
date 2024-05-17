# StageService Documentation

## Overview

The `StageService` is an Angular service that provides methods for interacting with the stages API.

## Properties

- `stageEndpoint`: The URL of the stages endpoint.

## Methods

| Method                                                | Parameters                                                  | Description                                  | Returns                                                                               |
| ----------------------------------------------------- | ----------------------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------- |
| `createStage(stage: Stage)`                           | `stage` (Stage): The stage to create.                       | Creates a new stage.                         | An `Observable` that emits the response from the server.                              |
| `getStagesByTaskDefinition(taskDefinitionId: number)` | `taskDefinitionId` (number): The ID of the task definition. | Gets all stages for a given task definition. | An `Observable` that emits an array of stages.                                        |
| `updateStage(stage: Stage)`                           | `stage` (Stage): The stage to update.                       | Updates a stage.                             | The method is not complete in the provided code, so the return type is not specified. |

## Usage

The `StageService` is typically injected into components through the constructor, or as needed.

```typescript
constructor(
  @Inject(alertService) private alerts: any,
  private stageService: StageService,
) {}
```

In the following example, the `StageService` is used to fetch data from the API and handle the
response within the component. The service itself is not aware of how the data is used or displayed,
making it reusable across different components.

```typescript
ngOnInit(): void {
  this.loadStages();
}

private loadStages(): void {
  if (this.taskDefinition?.id) {
    this.stageService.getStagesByTaskDefinition(this.taskDefinition.id).subscribe(
      (response) => {
        this.stages = response;
        this.sortStages();
        this.table.renderRows();
      },
      (error) => {
        this.alerts.add(
          'danger',
          `Failed to fetch stages for task definition ${this.taskDefinition.id}. ${error}`,
          this.dangerAlertTime,
        );
      },
    );
  }
}
```

## Dependencies

The `StageService` depends on the `HttpClient` to make HTTP requests. It also uses the `catchError`,
`map`, and `retry` operators from `rxjs` to handle errors and manipulate the response.
