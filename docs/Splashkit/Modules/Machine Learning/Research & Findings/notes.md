# General Notes:

## Future Prospects

**NEAT – Real Time AI Agent?**

Deep auto encoder for feature compression: random board state plus moves available? Encode into a
compressive neural network and decompress for training. Delete decompression stage after training

## Questions

Confirm do we have to work with C++? Other versions of SplashKit?  
Are we allowed to use libraries? Not really.  
how much can we rely on them? Not much, since they may break in the future.

## Initial Design

Board state, possible moves, submit moves  
Simulated board state, possible moves, submit moves (returns next possible moves), reuse this
object.  
Clone board state, default overridable,

Environment Get_board_state(Game)  
Move[] Get_possible_moves(Environment)  
Void submit_move(move move)  
Environment get_virtual()

Virtual:  
(score, move)[] try_move(move moveid)

Use virtual board states to augment the AI  
Depth  
Get the q-value depth moves in and sum the q-values for an augmented value

Possibly use horizontal depth instead? This means that you count the amount of possible moves you’ve
considered rather than possible moves played/submitted. And use average rather than sum due to
differing depths.

## Evaluation

![Evaluation of QLearning and Minimax shows QLearning with 94% (9492) games won and Minimax with 90% (90) of games won](https://i.imgur.com/8caHmdY.png)  
Here is an example of Evaluation of agent performance we can see that QLearning performs optimally.
Since we know Minimax is optimal we can compare it’s performance with QLearning and determine if
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

## perf: Add symmetry reduction to InputFormat::convert_input()

Allow the user (defaults to no symmetries) to indicate what symmetries are present in their game to
be used to reduce possible board states.

Example 1: Player symmetry, What number player you are does not change the rules. In chess no matter
if you are white or black pawns always capture diagonally. So if we were to invert the board colours
the reward values should not change.

Example 2: Rotation symmetry. You can rotate a tic tac toe board in any direction and the same moves
are considered winning.

Ensure the implementation is dynamic, multiple symmetries can be added. Apply symmetries in all
Agents to improve performance.

## refactor: Move functions from header file to cpp file

To fit the more traditional format classes in the header file should be moved into the cpp file with
only function signatures and doc-strings remaining in the header file.
