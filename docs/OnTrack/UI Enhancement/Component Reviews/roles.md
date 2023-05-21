# Ontrack Component review

## Team Member Name

Name: Ben Thomas

Student ID: 221068915

## Component Name

roles.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/roles/roles.coffee](https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/roles/roles.coffee)

## Component purpose

This component creates a constant array, authRoles, and populates it with a list of authentication
roles (‘anon, Student, Tutor, Convenor, Admin’). It is dependent on if-role.coffee. Kept separate to
adhere to SOLID principles, presumably.

## Component outcomes and interactions

As explained in ‘Component Purpose’, this component is dependent on if-role.coffee and is used
therein.

## Component migration plan

[https://angular.io/api/core/Injectable](https://angular.io/api/core/Injectable)

This component could be migrated as an injectable class which is exported for use in the migrated
if-role.

## Component review checklist

• Check that code post-migration follows Angular best practices.

• Ensure code compiles correctly.

• Observe that functionality and behaviour have been preserved.
