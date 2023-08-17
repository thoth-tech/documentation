# Postman Workspace and Collection Guide

Author: Chloe Hulme

## Introduction

Hello Team,

I'm excited to introduce you to the Thoth Tech Postman team space I have set up to streamline API
development and testing processes across all products. Here, you can create a workspace for your
product that is designed to enhance collaboration, simplify testing, and ensure consistency across
API interactions. Below, you will find a brief overview on Postman and instructions on how to create
your own collection in your product's workspace.

## Postman Workspace Overview

Our Postman team space will be organised by workspaces. There will be one workspace per product,
which you will be able to create once joining the team. Each workspace can contain various
collections, requests, and environments, making it easy to manage and test APIs effectively:

### Collections

Collections are groups of API requests related to a specific service, project, or feature. They help
to organise and structure API tests logically.

### Requests

Requests are individual API endpoints that we want to test. Each request contains information about
the HTTP method, URL, headers, parameters, and body.

### Environments

Environments allow us to define variables that can be used across different requests. This is
particularly useful when we need to test the same API with different configurations (e.g.
development and production).

### Automating JavaScript Testing

Postman goes beyond manual testing. We can also automate JS-based tests using the built-in testing
capabilities. In each request, we can include scripts written in JS to perform automated checks on
the response data. This is useful for regression testing, data validation, and more.

For example, we can use Postman's scripting environment to:

- Validate response data structure and content.
- Perform calculations on response data.
- Extract values from responses and use them in subsequent requests.
- Implement conditional logic to handle different scenarios.

The automation scripts can be added to the 'Tests' tab within a request. Postman provides a variety
of example tests that you can model your own testing scripts off of.

### Pre-Request Scripts

You can also create pre-request scripts to alter variables prior to executing the currect request.
This can be useful for PUT requests or other requests where it is possible to encouter a 404 status
code in your API. You can alter the URL parameters prior to executing your request, if you wish to
validate the outcome as a 200/204 status code test, as an example. Please see the Art Gallery
collection as a reference here.

## Creating Your Own Collection

Follow these steps to create your own collection within the Postman workspace:

1. **Sign In or Sign Up**: Sign in to your Postman account and accept the invite to the team's page.
   If you don't have an account, you can sign up for free.

2. **Access the Workspace**: Once you are signed in, access the workspace by clicking on the
   "Workspace" tab in the left-hand sidebar. Alternatively, you can create your product's workspace
   here by selecting 'Create Workspace'.

3. **Create a Collection**:

   - Click the 'New' button within the workspace.
   - Choose 'Collection' as the type.
   - Give your collection a descriptive name and an optional description to explain its purpose.
   - You can also set your authorisation and collection-wide variables here to simplify and
     centralise the storage of these details. Please see the Art Gallery's workspace and collection
     as an example.

4. **Add Requests**:

   - Within your newly created collection, click the 'Add Request' button.
   - Provide a name for your request and specify the HTTP method and URL.
   - Configure any headers, parameters, and request body as needed.

5. **Save and Organise**:

   - Be sure to save each request by clicking 'Save', or `ctrl+s`.
   - You can organise your collection by creating folders within it. This is helpful for grouping
     related requests. Please see the Art Gallery's workspace and collection as an example.

6. **Manual Testing**:

   - Use the 'Send' button within a request to test it against the designated API endpoint.
   - View the response to ensure everything is working as expected.

7. **Automated Testing**:

   - If you have set up automated testing, simply run the collection to initiate these tests.
   - View the responses/test summaries to ensure everything is working as expected.

8. **Environments** (Optional):
   - If your API testing requires different environments (e.g. development or production), you can
     set up additional environments and define variables/tests to use in your requests.

## Collaboration and Best Practices

These workspaces are designed to be collaborative. The best way to ensure this is effective is to
follow these best practices:

- Use meaningful names and descriptions for requests and collections.
- Keep your collections updated as the API evolves.
- Utilise environments to streamline testing across different setups.
- Comment within requests if there are specific test scenarios or considerations.
- **Ensure that environment variables used in production remain private, as the invite to join our
  team is public on this document in GitHub!!!**

Invite to team: <https://app.getpostman.com/join-team?invite_code=9a8aa672abf8164d99d84185f7fab50b>

If you have any questions or need assistance, please refer to the Art Gallery's workspace and
collection as an example. Otherwise, feel free to reach out!

Happy testing!
