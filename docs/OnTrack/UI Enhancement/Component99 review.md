# *Ontrack Component review*

## *Team Member Name*

SICHENG LIU - Thoth Tech - UI Enhancement

## *Component Name*

99.src/app/projects/states/all/all.coffee

## *Component purpose*

This component only has one module called ‘doubtfire.project.states.all’. It relies on another module called ‘doubtfire.project.states.all.directives’.

In this case, I think doubtfire.projects.states.all’ module is very likely to be used for containing the status (router) and related functions of specific functions or application parts of this project.

```AngularJS
angular.module('doubtfire.projects.states.all', [
  'doubtfire.projects.states.all.directives'
])
```

## *Component outcomes and interactions*

This component does not provide any outcomes. It is just a definition of module based on instructions of ‘doubtfire.projects.states.all.directives’. Nothing more is done.

## *Component migration plan*

**1.** ***Analyze current AngularJS components and create a new one***: Use Angular CLI or manually create a new component.

**2.** ***Update Dependencies and migration*** : Import ‘doubtfire.projects.states.all.directives’ as instruction dependency.

**3.** ***Testing***

The website interface is actually the same as the previous one because there is no code about defining interface components. As a result, the website will be completely blank.

## *Component review checklist*

This component’s code is too simple, I reckon that it does not need a lot of checklists as long as the syntax is correct.

[ ] Successfully define a module called 'doubtfire.projects.states.all'

[ ] Its dependency module is 'doubtfire.projects.states.all.directives’
