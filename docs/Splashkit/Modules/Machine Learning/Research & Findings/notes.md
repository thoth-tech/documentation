# General Notes:

## Future Prospects

NEAT (NeuroEvolution of Augmenting Topologies) – Real Time AI Agent?

Deep auto encoder for feature compression: random board state plus moves available? Encode into a
compressive neural network and decompress for training. Delete decompression stage after training

## Questions

- Do we have to work with C++?
  - Yes. The main SDK is written in C++ and that is the focus of the SplashKit Modules team for the
    foreseeable future.
- Are we allowed to use libraries?
  - Not recommended. Library usage should be kept to a minimum. Any proposed library needs to be
    accepted by the lead team as it would not only affect the rights/licence of the project but also
    the compile process. (Which could have other unintended consequences)
  - Libraries that are used must be monitored and updated accordingly (to fix security flaws or
    bugs), and also must be compatible with the SplashKit SDK.

## Artificial Neural Network Design

A Tensorflow like library needs to be implemented in C++ for neural networks.

It needs variable layers so that different difficulties can be implemented.  
The game API can be bypassed to directly access this library for other purposes.

## Evaluation

![Evaluation of QLearning and Minimax shows QLearning with 94% (9492) games won and Minimax with 90% (90) of games won](https://i.imgur.com/8caHmdY.png)  
Here is an example of Evaluation of agent performance we can see that QLearning performs optimally.
Since we know Minimax is optimal we can compare it's performance with QLearning and determine if
QLearning is playing at approximately the same level as Minimax.

# T2 notes:

The current implementation probably only works for deterministic games this may be a objective to
investigate and test.

## perf: Improve Minimax with transposition tables

Similar to how QTable works store previous board states so that you don't calculate the same board
state twice

## perf: Normalise game.score()

Ranked score?  
Normalise score so that outliers can't change the results as much.  
Use rank?  
Use [-1, 1] Normalisation? How would a draw work (when 2+ players tie in score)?

## Create Difficulty/Complexity levels for ML agent

Create preset agents.

Easy/Simple/Fast  
Normal/Medium/Average  
Hard/Complex/Slow

Change hidden layers to add extra complexity

Use virtual board states for Hard difficulty that gets the maximum sum of q-values a certain depth
of moves in rather than just the current board state?

## feat: Allow RewardTable to be saved to file

Save RewardTable to a file so it can be used later  
This way users will be able to distribute the saved RewardTable as part of the game and also train
Agents across extended periods of time.

## feat: Add Progress Bar to training

Add a progress bar to the training process

Divide iterations by x%

Each x% of iterations print progress? Every x seconds print progress?

Currently the training process just leaves the user waiting with no indication of progress. This can
be bad when training is taking a long time (hours).

## feat: Create a parent Agent class or method that allows the user to browse and select the correct Agent for their use.

Subclass QTrainer and Minimax into the format

Standardises Agent functions for later features and designs to be easily added/ created  
This will improve expandability of the system.

## feat: Create a benchmarking system for a game to calculate average stats and automatically determine an Agent for the user.

This is a quality of life improvement for the user. So they can easily determine which Agent is best
for their game.

## feat: Add Neural Network capabilities

Source or create functions to allow for neural networks to be added to SplashKit

This can greatly improve performance when the game is very complex.

## refactor: Move functions from header file to cpp file

To fit the more traditional format classes in the header file should be moved into the cpp file with
only function signatures and doc-strings remaining in the header file.
