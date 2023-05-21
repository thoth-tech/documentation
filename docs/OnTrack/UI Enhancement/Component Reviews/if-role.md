# Ontrack Component review

## Team Member Name

Name: Ben Thomas

Student ID: 221068915

## Component Name

if-role.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/roles/if-role.coffee](<https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/roles/if-role.coffee>)

## Component purpose

Uses a directive to remove DOM elements if the user’s authenticated role is not included in the
whitelist. The directive is restricted to being used as an attribute, implements a linked function
which is used once the element has been linked, and requires a whitelist.

## Component outcomes and interactions

If a user’s role is not included in the whitelist, the element is removed from the DOM. This is a
conditional removal. Interactions include the authenticationService, which the directive relies upon
to determine what role the user is authorized to.

## Component migration plan

[https://angular.io/guide/attribute-directives](<https://angular.io/guide/attribute-directives>)

Rewrite the component declaration, import the
Directive, and implement it using @Directive and providing the ifRole as a selector.

[https://angular.io/api/core/AfterViewInit](<https://angular.io/api/core/AfterViewInit>)

Replace the link function for modifying the DOM with
AfterViewInit.

## Component review checklist

• Check that code post-migration follows Angular best practices.

• Ensure code compiles correctly.

• Observe that functionality and behaviour have been preserved.
