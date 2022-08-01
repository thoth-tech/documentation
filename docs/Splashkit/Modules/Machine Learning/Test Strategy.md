# **Test Strategy (Sample)**

## **Introduction**

A high-level summary of the project

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
  - A python library for machine learning, we will create library similar to this for SplashKit in
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
  is our main testing file and will be used to test newly implemented features.

## **Scope of Testing**

What types of tests exist for this project?

### **Examples**

- There are unit tests, 80% coverage, written in Jasmine
- Written during development—by developers
- Automated UI tests for high-level workflows

_Based on template from_
[_Programming Foundations: Software Testing/QA_](https://www.linkedin.com/learning/programming-foundations-software-testing-qa/create-a-test-strategy?autoSkip=true&autoplay=true&contextUrn=urn%3Ali%3AlyndaLearningPath%3A57f7e27c3dd559e018dfe994&resume=false&u=2104084)
_with Meaghan Lewis on LinkedIn Learning_
