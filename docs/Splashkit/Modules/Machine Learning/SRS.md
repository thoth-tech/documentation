# Software Requirements Specifications Document

### Machine Learning for Splashkit Modules

## Product Purpose

The purpose of the Machine Learning module for Splashkit is to add the ability for users to easily
build a machine co-op or villain character, so that the player can have real challenges that
increase difficulty throughout playing. Specifically, this it to abstract the complexity behind
building an AI for games so that the user can focus on the task at hand rather than the AI used for
demonstrating the game.

The intended audience for this project is the users of Splashkit who want to create games; both
users with no experience who just want to make a game, and users with lots of experience in creating
AI but cannot spend lots of time on the project.

The systems intended use is for the creation of AI agents that can be attached to a user's game. A
variety of features will allow any game to be created and used by this system.

The scope of the project is to create usable AI agents for games that users implement, without
adding too much overhead for the user. This requires a deployment to a testing system, as well as
deployment to the Splashkit staging platform for Thoth Tech.

## Description of overall System

## User requirements

The user requirements of the system are that the system needs to be usable by game programmers that
use Splashkit. These requirements include:

- Wrapper for the user's game to be implemented by the user
- Adaptability to many different genres of games
- Choice of AI Difficulty
- Ease of use
- Performant in both time, and AI move choice

These requirements are mainly focused on the user experience, and how the user will interact with
the system.

## Assumptions and Dependencies

This system has a few assumptions. These include:

- Users will implement required functions that allow the AI standardised access to the game.
- The game has consistent inputs and outputs.
- If the game is to be played in real-time it is given to the AI in discretised steps.
- User will give CPU time before a game starts for training purposes if required.

Each of these assumptions is important for the use and requirements of the system. The system should
be able to deal with multiple move requests in quick succession.

## System Requirements

## Functional Requirements

The functional requirements of the system are as follows:

- The system should be able to accept a given Game wrapper for training or initialisation.
- The system should be able to accept a different Game wrapper for playing.
- The system should return readable moves for any given game state to the user whenever requested.

## Interface Requirements

The interface for the system will be entirely within the Splashkit platform. As such, it will have
the following requirements:

- The system's interface should be following the same format and design as other sections of the
  Splashkit Platform.
- The system should be easy to use.
- The system should return results in a readable way.

## Hardware Interfaces

This project is completely software based.

## Communication Interfaces

Documentation is to be provided so that the user can know how to use the system.

## Software Interfaces

The Machine Learning Module includes the following components:

- Game wrapper: An API for the user to implement so that an Agent can make moves
- Agents: An Agent will be chosen by the user that works best with the given Game.

## System Features

The system mainly focuses on the backend assistance for the user. As such, the features of the
system are as follows:

- The system will accept a game format to so that game states can be read and moves can be made by
  the AI.
- The system can accept new game states and analyses the game state to produce a move.
- The system will return a move vector containing the information about the move it 
wishes to play so that the game state can be updated. This move vector is to be processed 
by the user.

## Non-functional requirements.

The non-functional requirements of the system largely revolve around the data storage and security
of the system. These include:

- The system will adapt and work with different games.
- The system should be easy to use.
- The system should be in line with other Splashkit systems.
- Flexibility, Neural Networks may be needed elsewhere the ability to reuse the existing 
code for other purposes should be considered.

## Definitions, Acronyms, Abbreviations

- User: a user of splashkit that has made a game with this system.
- Wrapper: A list of functions that allow the AI to communicate with the game. Among other
  functions, it can be used to determine the current game state of a game, check what moves are
  available, and make moves.
- Agent: An AI that can find moves for the game based on the game state.
- AI: A function that can determine the best output for the given input and possible outputs.
