# Machine Learning Epic

## Background / Context

SplashKit is a live product, which can be improved as per valid suggestions and observations. The
addition of machine learning is one of the recognised areas for improvement.

## Business Value

The addition of machine learning enables game developers to develop more interactive and enjoyable
games, where a game player can then co-operate or compete against an AI character.

## In Scope

- SplashKit Core SDK (program code for the feature)
- SplashKit.io (articles on usage of the feature)

## Out of Scope

- SplashKit Translator
- SplashKit Manager (SKM)

## What needs to happen

- Extend the existing code so that the reinforcement learning agent can be applied to a variety of
  user games
- Create artificial neural networks in SplashKit so that a wider variety of reinforcement learning
  techniques can be implemented
- Produce documentation for the usage of the module
- Assess the potential for integration with the data analytics module

## Assumptions / Dependencies

- This module is in the greater `splashkit_lib` namespace
- System has time to train a model and space to save that model for a given game before use.
- System has a clear score to maximise. (Expand on this for less goal oriented AI? e.g. background
  NPC)
- There is a discrete time step between moves.
- The search space remains constant for each move.

## UX/UI Considerations

- During AI training user needs a general guide of how long the process will take.
- API should follow the conventions of the SplashKit Platform.
- End user should be able to use the system without any training. (i.e. save the model to disk)

## Analytics Considerations

N/A

## Regulation & Compliance Considerations

N/A

## Operations / Support / Training Considerations

- Guides and Documentation should be written for ease of use.
- Team members must become familiar with SplashKit, C++, Ninja and CMake
- Upskilling may be needed if team members do not have prior knowledge of reinforcement learning and
  artificial neural networks
- Advise teams 2 weeks in advance of planned release

## Acceptance criteria

See [Test Strategy](<Test Strategy.md>)

- Test with multiple games with different properties and genres.
- Test ANN components with regular AI training set.
- Test against human opponent.
- System can produce a move for any given game state in a reasonable amount of time.
- Documentation fits current expectations as set by SplashKit.io and stakeholders
