# Software Requirements Specifications (SRS) Document

### Machine Learning for SplashKit Modules

## 1. Introduction

### 1.1 Purpose

The purpose of the Machine Learning module for SplashKit is to add the ability for users to easily
build a machine co-op or villain character, so that the player can have real challenges that
increase difficulty throughout playing. Specifically, this it to abstract the complexity behind
building an AI for games so that the user can focus on the task at hand rather than the AI used for
demonstrating the game.

### 1.2 Intended Audience

The intended audience for this project is the users of SplashKit who want to create games; both
users with no experience who just want to make a game, and users with lots of experience in creating
AI but cannot spend lots of time on the project.

### 1.3 Intended Use

The systems intended use is for the creation of AI agents that can be attached to a user's game. A
Game API allows any game to utilise and attach agents to any game.

### 1.4 Scope

The scope of the project is to create usable AI agents for games that users implement, without
adding too much overhead for the user. This requires a deployment to a testing system, as well as
deployment to the SplashKit staging platform for Thoth Tech.

### 1.5 Definitions and Acronyms

- User: a developer using SplashKit that has made a game with this system.
- end-user: an individual who plays a game created with this system.
- Wrapper: A list of functions that allow the AI to communicate with the game. Among other
  functions, it can be used to determine the current game state of a game, check what moves are
  available, and make moves.
- Agent: An AI that can find moves for the game based on the game state.
- AI (Artificial Intelligence): A function that can determine the best output for the given input
  and possible outputs.
- API (Application Programming Interface): A set of functions that allow the user to interact with
  the system
- ANN (Artificial Neural Network): A type of AI that can learn and adapt it's functionality to
  improve the output it produces.

## 2. Overall Description

### 2.1 User Needs

The user requirements of the system are that the system must be usable by game programmers that use
SplashKit. These requirements include:

- Wrapper for the user's game to be implemented by the user
- Adaptability to many different genres of games
- Choice of AI Difficulty
- Ease of use
- Performant in both time, and AI move choice

These requirements are mainly focused on the user experience, and how the user interacts with the
system.

### 2.2 Assumptions and Dependencies

This system has a few assumptions. These include:

- Users implement required functions that allow the AI standardised access to the game.
- The game has consistent inputs and outputs.
- If the game is to be played in real-time it is given to the AI in discrete steps.
- User allow for CPU time before a game starts for training purposes if required.

Each of these assumptions is important for the use and requirements of the system. The system should
be able to deal with multiple move requests in quick succession.

## 3. System Features and Requirements

### 3.1 Functional Requirements

The functional requirements of the system are as follows:

- The system should be able to accept a given Game wrapper for training or initialisation.
- The system should be able to accept a different Game wrapper for playing.
- The system should return readable moves for any given game state to the user whenever requested.

### 3.2 External Interface Requirements

The interface for the system is entirely within the SplashKit platform. The system provides API
functions as its external interface. As such, it has the following requirements:

- The system's interface should be following the same format and design as other sections of the
  SplashKit Platform.
- The system should be accessible from the SplashKit API.
- The system should return results in a readable way.

#### **Communication Interfaces**

Documentation is to be provided so that the user can know how to use the system.

#### **Software Interfaces**

The Machine Learning Module includes the following components:

- Game wrapper: An API for the user to implement so that an Agent can make moves
- Agents: An Agent can be chosen by the user that works best with the given Game.
- ANN API: An API allowing the user to create and train a Neural Network.

### 3.3 System Features

The system mainly focuses on the backend assistance for the user. As such, the features of the
system are as follows:

- The system accepts a game format so that game states can be read and moves can be made by the AI.
- The system can accept new game states and analyses the game state to produce a move.
- The system returns a move vector containing the information about the move it wishes to play so
  that the game state can be updated. This move vector is to be processed by the user.

### 3.4 Nonfunctional Requirements

The non-functional requirements of the system largely revolve around the performance, stability, and
maintainability of the system. These include:

- The system should adapt and work with different games.
- The system can be used by learning developers without extra training.
- The system should be in line with other SplashKit systems.
- Flexibility, Neural Networks may be needed elsewhere the ability to reuse the existing code for
  other purposes should be considered.
- The system should be stable for the user, any new feature added must be tested by the developer
  before reaching end-users and related features should not be negatively affected.
  - Unit tests should be run on affected features to ensure that any changes made do not affect the
    existing components.
- The system should provide a move for any given game state in a reasonable amount of time.
