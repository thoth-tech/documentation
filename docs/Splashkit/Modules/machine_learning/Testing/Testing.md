# Testing

When testing the system, first a small scale test is done on the individual components of the newly
implemented features, and the old features that need to be adapted to fit the new functions.

Due to lack of personnel in T1 informal testing is done on a small scale during implementation. This
involves regularly checking if the program compiles, printing intermediate results, and reverting or
double checking any mistakes.

## Function testing

Important features are tested more thoroughly using automated or semi-automated testing as functions
in `test_machine_learning.cpp`  
Examples of such testing are:

- `test_reward_table()`, where we ensure initialisation is correct.
- `test_output_value()`, where we ensure initialisation of `OutputValue` is correct and that updates
  to the reward values are executed as planned.

## Agent Testing

After testing individual components the overall implementation should also be tested. This is again
done in the `test_machine_learning.cpp` file.

First the `Game` API is tested with a `TicTacToe` game implemented using the API. This is manually
checked over to test if the system is easy to use and the API is not hard to understand or hard to
implement.

Ideally more games of different genres should be implemented using the `Game` API. Currently only
`TicTacToe` is implemented.  
Example games could include:

- Pong, as a real-time game it covers a wide range of new features to account for and is still
  simple to implement.
- Battleship, as a imperfect information game it may pose a challenge to some `Agent` types. It also
  has two different phases that could be hard to account for (Choosing locations for battleships,
  and targeting enemy battleships)
- Racing game, a simple 2D racing game where the car must drive around a simple track (such as a
  circle) in the fastest time, This type of game may pose difficulties to the API as it may be hard
  for the user to chose the `InputFormat`, this is because for these types of game the best format
  may use virtual sensors attached to the car giving the AI distances from obstacles.

We use the example games (only `TicTacToe`) to test the Agents to determine whether the Agents are
performing correctly.

Manual testing using the `play_games()` function involves 3 steps (Currently only applies to 2
player games):

1. First we have the Agent verse a random Agent checking for obvious mistakes and checking the
   general logic for random positions.
2. Then we have the Agent verse itself in a round of self-play to check what the Agent thinks is the
   best possible game.
3. Then we verse the Agent to test any positions that the Agent may struggle with.

Automated testing is also used to check against the optimal move set using the
`evaluate_agents_random()` testing function. This is currently only possible for small games or to
test relative performance of the AI. We make the AI verse a random Agent over many games to check
it's win rate against the random Agent. We can then compare this win rate against previous versions
of the Agent or we can compare the results against `MinimaxAgent` since we know that it always
performs optimal moves. This testing also ensures that `MinimaxAgent` is performing as expected, as
if it (`MinimaxAgent`) returns a lower (within a certain threshold) win rate than the Agent being
tested it (`MinimaxAgent`) may be faulty.
