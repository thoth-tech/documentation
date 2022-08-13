# Physics Epic

## Background / Context

SplashKit is a live product, which can be improved as per valid suggestions and observations. The
addition of realistic physics is one of the recognised areas for improvement.

## Business Value

The addition of realistic physics enhances the quality and capabilities of games and animations that
users can build in SplashKit.

## In Scope

- SplashKit Core SDK (program code for the feature)
- SplashKit.io (articles on usage of the feature)

## Out of Scope

- SplashKit Translator
- SplashKit Manager (SKM)

## What must happen

- Complete the code review from T2 2022 on the existing collisions and gravity functions.
- Refactor the code to remove any external dependencies on the Box2D library
- Create one-line methods to allow elastic sprite and object collisions as well as gravity
- Expand the methods to include inertia and the sinking of objects
- Produce documentation for the usage of the module

## Assumptions / Dependencies

- Previous contribution code is accessible and working

## UX/UI Considerations

N/A

## Analytics Considerations

None Known

## Regulation & Compliance Considerations

N/A

## Operations / Support / Training Considerations

- Team members must become familiar with SplashKit, C++, Ninja and CMake
- Up-skilling may be needed if team members do not have prior knowledge of physics
- Advise teams 2 weeks in advance of planned release
- Current supportive documentation exists explaining creation procedures, etc).

## Acceptance criteria

- Successful addition of realistic physics into SplashKit
- Functional and passing QA
- Straightforward to use (user acceptance testing completed)
- Documentation completed for design decisions and work
- Documentation fits current expectations as set by SplashKit.io and stakeholders
