# Visualisation Migration Plan

## Interactions Graph

![Alt text](https://i.imgur.com/geVaVL2.png)

## Unused Visualisations

Five visualisation components do not appear to be referenced elsewhere in the codebase.

-   `Summary-task-status-scatter.coffee`
-   `Target-grade-pie-chart.coffee`
-   `Task-completion-box-plot.coffee`
-   `Task-status-pie-chart.coffee`
-   `Achievement-box-plot.coffee`

## Used Visualisations

### project-outcome-alignment

-   `achievment-custom-bar-chart.coffee`

### task-ilo-alignment-editor

-   `alignment-bar-chart.coffee`

### task-ilo-alignment-viewer

-   `alignment-bullet-chart.coffee`

### progress-dashboard

-   `progress-burndown-chart.coffee`
-   `student-task-status-pie-chart.coffee`

### project-progress-dashboard

-   `progress-burndown-chart.coffee`
-   `student-task-status-pie-chart.coffee`

## Interactions

Each visualisation shares a common html file. The html file renders an `nvd3` graph using parameters passed from the relevant component logic.

Each visualisation component takes a `project` parameter when the component is called in its parent.

Each visualisation component uses logic from the `visualisations.coffee` to create the visualisation.

## Migration Tasks

### 1. Seperate logic:

-   `visualisations.coffee` -> `visualisation.service.ts`

### 2. Migrate template:

-   `Visualisation.tpl.html` should remain for components yet to be migrated.
-   `visualisation.tpl.html` -> `visualisation.component.html`

### 3. Migrate Used Components

-   `achievment-custom-bar-chart.coffee` -> `achievment-custom-bar-chart.component.ts`

-   `alignment-bar-chart.coffee` -> `alignment-bar-chart.component.ts`

-   `alignment-bullet-chart.coffee` -> `alignment-bullet-chart.component.ts`

-   `progress-burndown-chart.coffee` -> `progress-burndown-chart.component.ts`
-   `progress-burndown-chart.scss` -> `progress-burndown-chart.component.scss`

-   `student-task-status-pie-chart.coffee` -> `student-task-status-pie-chart.component.ts`

### 4. Migrate Unused Components

-   `Summary-task-status-scatter.coffee` -> `Summary-task-status-scatter.component.ts`
-   `Target-grade-pie-chart.coffee` ->- `Target-grade-pie-chart.component.ts`
-   `Task-completion-box-plot.coffee` -> `Task-completion-box-plot.component.ts`
-   `Task-status-pie-chart.coffee` -> `Task-status-pie-chart.component.ts`
-   `Achievement-box-plot.coffee` -> `Achievement-box-plot.component.ts`

### 5. Migrate Parent Components

By completing the migration of the visualisations, the parent components should become able to be migrated.
