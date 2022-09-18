# Testing Strategy

At Thoth Tech, we believe in a testing focused approach to development. Within the Splashkit Module,
there are two types of testing we will undertake. The first is
[building a showcase for our work](https://github.com/lawrence0arabia/splashkit-core/tree/develop/coresdk/src/test/test_data_analytics.cpp)
within the SplashKit core repository. Not only does this show other people our code, but allows us
as developers to dynamically test the code utilising inputs. The second style of testing will come
in the form of
[unit tests](https://github.com/lawrence0arabia/splashkit-core/tree/develop/coresdk/src/test/unit_tests/unit_test_data_analytics.cpp).
These tests are designed to test the robustness of the code, ensuring that there are no bugs when
changes are made.

## SplashKit Modules Testing Guides

---

Testing should be done concurrently with code development. During the analysis stage, all potential
positive and negative assertions should be considered. In the review stage, you should be writing
tests as well as running current tests and reviewing the structure of the code.

Below are the testing strategies for the SplashKit Modules team:

- [Showcase/Testing](Showcase_Tests.md)
- [Unit Tests](Unit_Tests.md)
