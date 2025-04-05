# OnTrack Component Review

## Team Member Name

| Name                    | Student ID |
| ----------------------- | ---------- |
| Atharv Sandip Bhandare  | 223650012  |

---

## Component Details

### Component Name

`Pogress Burndown Chart`

### Files included

#### Core Component Files

1. `progress-burndown-chart.component.ts`
2. `progress-burndown-chart.component.html`
3. `progress-burndown-chart.component.scss`

#### Supporting logic

#### Note: Supporting files like `visualisation.service.ts` and `listener.service.ts` has been migrated into their respective `.ts` version by Lachlan so that it can then be used for the migration of `progress-burndown-chart` component.

| File | Description |
| --- | --- |
| `visualisation.service.ts` | Generates NVD3 chart config and visualisation settings used across multiple chart components. |
| `listener.service.ts` | Angular service that replicates `$scope.$watch` by listening to updates and changes in data. Helps in polling and change detection. |
| `project.ts` | Defines the `Project` model that contains `burndownChartData` and `refreshBurndownChartData()` which generates the actual series. |
| `unit.ts` | Defines the `Unit` model, providing `startDate` and `endDate` for chart time range. |

---

## Component purpose

This component visualizes a student's progress across a learning unit using a burndown line chart, displaying series such as Target, Projected, Submitted, and Completed work. It dynamically updates over time to reflect current progress using real-time polling and listens to data changes via injected services

![Progress-burndown-chart-original](Resources/progress-burndown-chart-original.png)

---

## Component outcomes and interactions

### Outcomes:
- Displays a student’s task progress as a burndown chart using NVD3 library.
- Visually updates over time based on live project data.

### Interactions:
- `Project` → supplies `burndownChartData` and the `refreshBurndownChartData()` method.
- `Unit` → provides `startDate` and `endDate` to set the chart timeline.
- `VisualisationService` → generates chart config (`options` and `config`) for rendering.
- `ListenerService` → manages scoped listeners and cleans up on component destroy.

---

## Component migration plan

- I was initially assigned the migration of the `progress-dashboard` component.
- Since it had two nested components — `progress-burndown-chart` and `student-task-status-pie-chart` — Lachlan and I divided the work.
  - I took ownership of migrating `progress-burndown-chart`.

- The old CoffeeScript version of `progress-burndown-chart` used:
  - `VisualisationService`
  - `ListenerService`

- Lachlan first migrated both of these services into their TypeScript versions. Once his service migrations were complete, I tested them to ensure they worked correctly and didn’t introduce new errors.

- After confirming that, I merged his changes and started migrating the `progress-burndown-chart` component to Angular 17 using TypeScript.

### My Migration Plan for `progress-burndown-chart`

1. Create a new branch called `migrate/progress-burndown-chart` to work on the migration separately.

2. Create three new files: `progress-burndown-chart.component.ts`, `progress-burndown-chart.component.html`, and `progress-burndown-chart.component.scss`.

3. Import necessary Angular 17 modules following the migration guide to set up the component properly.

4. Unlink the old directive and update references in doubtfire-angular.module.ts and doubtfire-angularjs.module.ts.

5. Downgrade required services so they remain usable in AngularJS parts of the app.

6. Migrate the old CoffeeScript logic to TypeScript and Angular17.

7. Manually test the component by running the app and using console logs to verify correctness.

---

## Component Post-Migration

- Migration is work in progress...

---

## Component review checklist

[ ] ability to collect details from the user 
[ ] succeeds when data is valid 
[ ] handles errors - duplicate unit code in the teaching period, or invalid dates [ ] created unit is shown on success