# What is a unit?
Conceptually, the definition of a unit is fuzzy. It could be a single function, a method of a class, or a single behaviour.
More broadly, a unit is the smallest testable piece of code.

For SplashKit we use the [Catch2](https://github.com/catchorg/Catch2) testing framework, which allows for writing tests in C++ with useful macros for test cases and assertions.

# Isolation
As the name suggests, unit tests test a single unit in isolation. We check the behaviour of a unit by making assertions as to how it should behave.
For example, to test a function that converts a hexadecimal string to an integer we might check that its output for a given input matches the expect output:
```cpp
TEST_CASE("convert a hex string to an integer", "[hex_to_dec]")
{
    SECTION("hex string is converted to integer")
    {
        REQUIRE(hex_to_dec("A") == 10);
    }
    SECTION("input uses the invalid symbol G")
    {
        REQUIRE(hex_to_dec("G") == 0);
    }
}
```
Test isolation is desirable because it makes bugs easier to trace. If a unit test fails, we know where it failed and what behaviour it failed to produce (given by the test case). In an integration test, where two or more units are being tested together, the source of the problem is less obvious. In a system or end-to-end test, even less so. Nevertheless, integration and wider scoped tests are also important, to test behaviour in an environment closer to production.

It gets harder to test a unit in isolation with more complex code. We might want to test the behaviour of a function that calls another function, that in turn calls another function, and some of these function calls might be external (e.g. provided by a library). If we simply test such a function as it would be used in production code, we're effectively performing an integration test - testing how multiple units behave together.

As an example, consider the following SplashKit function that returns the screen center:
```cpp
point_2d screen_center()
{
    return point_at(_camera_x + screen_width() / 2.0f, _camera_y + screen_height() / 2.0f);
}
```
At first glance, this seems like a simple enough unit to test: check that the value returned is of an expected value. However, this implementation calls functions `screen_width` and `screen_height`, which in turn call functions that return the width/height of the current window:
```cpp
int screen_width()
{
    return window_width(current_window());
}
```
This implies the presence of a window object to begin with, so we'd not only be testing the logic of computing the screen's center point, but also the behaviours of creating a new window and being able to retrieve the window dimensions of it. This also means using an external dependency, SDL, to draw the window.
```cpp
TEST_CASE_METHOD(CameraTest, "Get screen center in world space", "[camera][graphics][window][integration]")
{
    open_window("Get screen center in world space", 100, 100);
    point_2d center = screen_center();
    REQUIRE_THAT(center.x, WithinRel(50.0));
    REQUIRE_THAT(center.y, WithinRel(50.0));
    close_current_window();
}
```
If we test this without a window, we can't get the dimensions to compute the screen center to begin with.

## Reducing dependencies
To address this, we can use the concept of test doubles. These are functions or objects that we write to satisfy a dependency without using the dependency itself.
For example, we could create a window with specific dimensions and the minimum functionality to allow the `screen_center` function to work, without everything that a real window requires (like drawing the window on screen, handling on close events, and so on).

There are different types of test doubles, including stubs, mocks, fakes, and dummies. Some provide static input or output, or serve as a stand-in for an object. The overall concept of test doubles is what is relevant in this document.

## Mocking frameworks
To make the process of creating test doubles simpler, we can use a framework. The two frameworks investigated for use in SplashKit were:
[FakeIt](https://github.com/eranpeer/FakeIt)
[Trompeloeil](https://github.com/rollbear/trompeloeil)

Given similar feature sets, Trompeloeil was selected, because it's simple to integrate with the Catch2 testing framework and examples are provided for that usage.

# Test doubles and SplashKit
Test doubles generally rely on a degree of abstraction to implement. Often this is done by implementing an interface, so that instead of the production implementation, a double is used with the minimum requirements for a test to run.

However, SplashKit has a lot of free functions, which makes it difficult to do. With Trompeleoil, they cannot be mocked, and need to be wrapped in an [API structure](https://github.com/rollbear/trompeloeil/blob/main/docs/CookBook.md#mocking_free_functions).

Refactoring SplashKit to increase abstraction in this way to accommodate test doubles would be a great effort that is likely beyond a single trimester's worth of work. It would likely result in all sorts of breaking changes. An alternative would be to link the test executable with only the code being tested, and create test doubles for any functions that cause the test in question to not compile. This would require compilation/linking for each individual source file.

It is for this reason that integration tests, which are also capable of being written in C++ with Catch2, will be written where unit tests are currently not able to be written. This will still improve the code coverage and testing quality of SplashKit without being too much of a burden.