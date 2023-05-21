# Ontrack Component review

## Team Member Name

Name: Ben Thomas

Student ID: 221068915

## Component Name

session.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/sessions.coffee](https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/sessions.coffee)

## Component purpose

This component defines two dependencies, http-auth-injector.coffee and roles.coffee, providing
functionality from both.

## Component outcomes and interactions

Component can function as a container for dependencies. Relies upon functionality from dependencies.

## Component migration plan

Migration should be very straightforward. Import NgModule. Import the two dependencies above,
dependent on migration plan for them. Export the new component.

## Component review checklist

• Check that code post-migration follows Angular best practices.

• Ensure code compiles correctly.

• Observe that functionality and behaviour have been preserved.
