# Machine Learning Module, Feature List

## develop branch

Branch: https://github.com/thoth-tech/splashkit-core/tree/develop  
Changes: https://github.com/thoth-tech/splashkit-core/pull/11

### Basic ML Neural Networking library (`machine_learning.cpp`, `machine_learning.h`)

- can be used to make NN models with variable layers in sequential order
- Each layer can have a unique activation function and node count
  - Currently only fully connected (Dense) layers with 1 dimensional IO supported
  - Currently only Sigmoid and ReLu activation functions supported
- Extra Loss functions can be easily added later on
  - Currently only Mean Squared Error (MSE) implemented
- Testing can be found in `test_machine_learning.cpp`, no unit tests yet

### Game Learning API (`game_learning.cpp` and `game_learning.h`)

- A `Game` class has been added, any Game that inherits from this class and implements its functions
  can use the Game API
- Currently 3 Agents to choose from
  - `RandomAgent`
    - Plays random moves
  - `MinimaxAgent`
    - Uses the minimax algorithm to find the optimal move to make
    - Very Slow only usable on small games with few possible moves and few moves per game
    - Caches results to be faster
  - `QAgent`
    - Uses the QLearning algorithm to converge to the optimal move to make
    - Requires training using the `agent.train()` method before hand
    - Stores a big table mapping every possible game state to every possible action
    - Plays simulated games against itself
      - When it wins it rewards the moves it made so as to increase the probability of choosing
        those moves again
      - When it loses it punishes the moves it made so as to decrease the probability of choosing
        those moves again
- Uses dynamic systems so as to allow any possible game to implement the API while still providing
  the AI with machine readable states
- Tested in `test_machine_learning.cpp` currently only `TicTacToe` and `Pong` games have been tested
  on the system.

## modules/machine_learning branch

Branch: https://github.com/thoth-tech/splashkit-core/tree/modules/machine_learning  
Changes: https://github.com/thoth-tech/splashkit-core/compare/develop...modules/machine_learning

### Basic ML Neural Networking library (`machine_learning.cpp`, `machine_learning.h`)

- Mini-batch support
  - Uses the average delta of a mini-batch during back-propagation
  - Only single-threaded so using this feature does not increase performance
- None Activation Function (skips activation function)
- bias support, updates bias during back-propagation

### Game Learning API (`game_learning.cpp` and `game_learning.h`)

- SelfPlayAgent
  - reduces repeated code for agents that require self-play training
- new DenseAgent
  - uses a dense neural network to make decisions
  - known bug: converges to a single output solution from any output

### Testing/Other

- `matrix_2d.h` and `matrix_2d.cpp` have been modified
  - overload more operators (`>=`, `<=`)
  - overload in-place operators (`+=`, `-=`, `*=`, `/=`)
    - Faster than using the non-in-place operators (`+`, `-`, `*`, `/`) because there is no
      construction overhead
- new testing agent
  - `TicTacToeHumanAgent`
    - implements base `Agent` class to reduce repeated testing code
