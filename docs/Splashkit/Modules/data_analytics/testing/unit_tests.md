# Unit Test Strategy

## What is Unit Testing

Unit testing focuses on small parts (or units) of a code file and tests its robustness. When we
implement a method or object, we want to ensure that it handles the way it is expected to, and shows
the correct error when an input is invalid.

## How do unit tests work?

Unit tests can be broken down into three components:

1. Test Case
1. Section
1. Require Statement

### Test Case

A test case is a way of testing objects by comparing the expected and obtained outputs from a
specific input. Each file can have multiple test cases, each of which will focus on a specific
object. An example of a test case currently in use for looking at the data validation section is
`Data Validation will correctly validate different data types`.

### Section

Each test case can be broken down into sections. These sections represent the functions that can be
called on each object.

### Require statement

This is the part where we compare an output to an expected value. This is done using a `REQUIRE`
statement. These statements only need one parameter as a minimum, a logic statement. This logic
statement will run a method, then check to see if the answer provided is equal to the methods
output. There are many versions of the require method, which can be found in the catch.hpp file.
