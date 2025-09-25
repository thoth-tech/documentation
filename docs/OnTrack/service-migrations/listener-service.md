# OnTrack Component Review

## Team Member Name

| Name                    | Student ID |
| ----------------------- | ---------- |
| Lachlan Mackie Robinson | 220325142  |

---

## Component Details

### Name

`listenerService`

### Files

`listener-service.coffee`

---

## Component Purpose

The `listenerService` is designed to manage event listeners within the scope of an AngularJS
application. It helps track and clean up event listeners when a scope is destroyed, preventing
memory leaks and ensuring efficient resource management.

---

## Component Outcomes and Interactions

1. The service allows different parts of an application to register event listeners in a structured
   way.

2. When a scope is destroyed (e.g., navigating away and removing the component from the DOM), the
   service ensures that all associated event listeners are cleaned up to avoid memory leaks.

3. The listeners are primarily used to watch changes in data (such as with the
   `progress-burndown-chart.coffee`) and update the UI accordingly.

### Current Uses

- `group-member-list.coffee`
- `group-selector.coffee`
- `dashboard.coffee`
- `task-dashboard.coffee`
- `tasks.coffee`
- `unit-task-list.coffee`
- `progress-burndown-chart.coffee`

---

## Component Migration Plan

As this is a non visual service, the migration will only require:

1. Create new `listener.service.ts` file.

2. Update imports in `doubtfire-angular.module.ts` and `doubtfire-angularjs.module.ts` files.

3. Downgrade the service so it is usable via angularJs components.

4. Migrate service logic to typescript and angular 17 compatibility.

5. Update call instances from angularJs components to handle lifecyle. (This will not be required
   angular17 components.)

6. Test implementation via manual testing and console logging.

---

## Component Post-Migration

Pending Implementation...

---
