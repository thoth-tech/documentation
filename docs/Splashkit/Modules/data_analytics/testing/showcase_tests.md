# Showcase Tests

## What are they for?

Showcase tests allows us to interact with the module, dynamically testing inputs and outputs as we
change them locally.

## Where are they located?

The showcase for the Data Analytics Module is located within the tests folder for the splashkit core
repository.

## How to implement

By importing the `data_analytics.h` header file, you can begin utilising the code that has been
recently added. This allows you to call methods and objects created within the data analytics module
and interact with them to see if they display and run properly. The coding needs to be re-usable,
therefore we have set it up as a for loop taking the input from the user to access different
methods.

## What is implemented?

Currently we have implemented tests for the data validation work that has been re-structured. These
allow us to see that they are working. These will be removed when we overhaul the data validation
(which is not up to standard).

## What needs to be added?

If the dataframes can be fixed, a section for loading, displaying and manipulating the dataframes
will need to be added. If we have to start the code again, all current showcase code will need to be
removed and replaced with new implementation.

## When to add code to the showcase

As Thoth Tech takes a testing approach to development, all tests should be built simultaneously with
coding. This will ensure that our code is of the highest quality prior to pushing to the main Thoth
Tech repository.
