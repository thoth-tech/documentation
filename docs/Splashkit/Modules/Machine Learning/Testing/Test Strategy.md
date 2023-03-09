# **Test Strategy (Sample)**

## **Introduction**

The purpose of the Machine Learning module for SplashKit is to add the ability for users to easily
build a machine co-op or villain character, so that the player can have real challenges that
increase difficulty throughout playing. Specifically, this it to abstract the complexity behind
building an AI for games so that the user can focus on the task at hand rather than the AI used for
demonstrating the game.

### **Example**

This strategy outlines what quality provides to the project, what type of testing is done, and how
testing is carried out. The aim is to ensure quality in all phases of the development lifecycle to
deliver a great experience for our users.

## **References**

Relevant links and helpful information about the project and its tech stack

- [SplashKit GitHub](https://github.com/thoth-tech/splashkit-core/tree/modules/machine_learning)
  - [test_machine_learning.cpp](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/test/test_machine_learning.cpp)
  - [game_learning.cpp](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/coresdk/game_learning.cpp)
  - [game_learning.h](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/coresdk/game_learning.h)
  - [machine_learning.cpp](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/coresdk/machine_learning.cpp)
  - [machine_learning.h](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/coresdk/machine_learning.h)
- [Tensorflow Keras](https://www.tensorflow.org/api_docs/python/tf/keras)
  - A python library for machine learning, we will create a library similar to this for SplashKit in
    C++, simplified and designed to be used by learning developers.

## **QA Deliverables**

- See [Test Cases.md](<Testing/Test Cases.md>) for a list of unit tests to be used.
- See [Testing.md](Testing/Testing.md) for a list of test strategies to be used.

## **Test Management**

What resources are used to carry out testing in terms of tooling, environments, supported platforms
and versions, and test data.

- VS Code configuration files are [available](<Research & Findings/VS Code/VS Code Guide.md>) for
  debugging purposes.
- [test_machine_learning.cpp](https://github.com/thoth-tech/splashkit-core/blob/modules/machine_learning/coresdk/src/test/test_machine_learning.cpp)
  is our main testing file and is used to test newly implemented features.

## **Scope of Testing**

What types of tests exist for this project?

- [Test Cases.md](<Testing/Test Cases.md>) contains unit tests to be written for the system.
- Regular less automated tests are also to be created as required
  ([Testing.md](Testing/Testing.md)).
  - Some of these are already available from last trimester.

_Based on template from_
[_Programming Foundations: Software Testing/QA_](https://www.linkedin.com/learning/programming-foundations-software-testing-qa/create-a-test-strategy?autoSkip=true&autoplay=true&contextUrn=urn%3Ali%3AlyndaLearningPath%3A57f7e27c3dd559e018dfe994&resume=false&u=2104084)
_with Meaghan Lewis on LinkedIn Learning_
