# Ontrack Component review

## Team Member Name

Name: Ben Thomas

Student ID: 221068915

## Component Name

http-auth-injector.coffee

[https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/http-auth-injector.coffee](https://github.com/doubtfire-lms/doubtfire-web/blob/development/src/app/sessions/auth/http-auth-injector.coffee)

## Component purpose

The http-auth-injector.coffee component handles authentication-related functionality for HTTP
requests. It performs this responsibility through the function, .config(), which configures the
interceptor, $httpProvider. An interceptor is used to modify HTTP requests and responses.

## Component outcomes and interactions

Handles injection of authentication credentials into HTTP requests. Provides the functions,
injectAuthForRequest and injectAuthForResponseWithError, which inject authentication headers into
requests and handles response errors. Intercepts unauthorized API responses and responds with an
event, specifically 419, token timeout, and 401, unauthorized.

Interactions include configuring the interceptor, $httpProvider. Functionality dependencies include
$q, $rootScope, DoubtfireConstants, and newUserService. These are part of the interceptor functions
injected during .config().

## Component migration plan

Migration will require using Angular’s HttpInterceptor and HttpClientModule:
[https://angular.io/api/common/http/HttpInterceptor](https://angular.io/api/common/http/HttpInterceptor)

[https://angular.io/api/common/http/HttpClientModule](https://angular.io/api/common/http/HttpClientModule)

Wrap the old interceptor logic in a class that implements HttpInterceptor. Use NgModule to import
the HttpClientModule and provide the interceptor.

## Component review checklist

• Check that code post-migration follows Angular best practices.

• Ensure code compiles correctly.

• Observe that functionality and behaviour have been preserved, that it handles API responses for
419 and 401 appropriately.
