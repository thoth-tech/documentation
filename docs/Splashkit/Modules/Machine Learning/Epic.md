# Machine Learning Epic

TBA

## Background / Context

TBA

## Business Value

TBA

## In Scope

TBA

## Out of Scope

TBA

## What needs to happen

TBA

## Assumptions / Dependencies

- This module will be in the greater `splashkit_lib` namespace
- System will have time to train a model and space to save that model for a given game before use.
- System will have a clear score to maximise. (Expand on this for less goal oriented AI? e.g. background NPC)
- There is a discrete time step between moves.
- The search space will remain constant for each move.

## UX/UI Considerations

`TODO`: Short paragraph?

- During AI training user needs a general guide of how long the process will take.
- API should follow the conventions of the SplashKit Platform.
- End user should be able to use the system without any training. (i.e. save the model to disk)
- ...

## Analytics Considerations

N/A (remove?)

## Regulation & Compliance Considerations

TBA

## Operations / Support / Training Considerations

`TODO`: short paragraph?

- Guides and Documentation should be written for ease of use.
- ...

## Acceptance criteria

See [Test Strategy](<Test Strategy.md>)

- Test with multiple games with different properties and genres.
- Test ANN components with regular AI training set.
- Test against human opponent.
- System can produce a move for any given game state in a reasonable amount of time.
