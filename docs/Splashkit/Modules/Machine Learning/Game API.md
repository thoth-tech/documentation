```cpp
/**
 * @brief The Game API to be implemented by the user so that their Game can utilise the Agents
 *
 */
class Game
{
public:
	/**
	 * @brief Get the current player's index. Each player has a unique index from `[0, max_players)`
	 *
	 * @return int player index
	 */
	virtual int get_current_player();

	/**
	 * @brief Get the score of the game for each player. Negative scores for losing players, positive scores for winning. Draws are 0.
	 *
	 * @return vector<float> the score of each player retrieved by their player index
	 */
	virtual vector<float> score();

	/**
	 * @brief Returns an InputFormat that can be used by an agent to understand the current state of the game
	 *
	 * @see InputFormat
	 * @return InputFormat the format of information given to the AI to play its next move
	 */
	virtual InputFormat get_input_format();

	/**
	 * @brief Returns an OutputFormat that can represent any possible move
	 *
	 * @see OutputFormat
	 * @return OutputFormat the format of information produced by the AI to play its next move
	 */
	virtual OutputFormat get_output_format();

	/**
	 * @brief Gets the list possible moves that can be played in the current state of the game
	 *
	 * @return vector<int> list of possible move indexes
	 */
	virtual vector<int> get_possible_moves();

	/**
	 * @brief Plays a move on the board.
	 *
	 * Moves should always be retrieved from `get_possible_moves()` before calling this function.
	 *
	 * @param move the move index to play
	 */
	virtual void make_move(int move);

	/**
	 * @brief Checks if the game is finished
	 *
	 * @return true if the game is over
	 * @return false if moves can still be played
	 */
	virtual bool is_finished();

	/**
	 * @brief Resets the game state to the initial state. Used during AI self-play, must be robust to many calls.
	 *
	 */
	virtual void reset();

	/**
	 * @brief Creates a new Game object of the super type. The new object should be a deep copy of the current game with the same board state, current players, and random seed (if used).
	 *
	 * Object is deleted after use, use `new SuperTypeGame()` to create the pointer.
	 * Used with Minimax Agent to check future possible moves, override not required for other agents.
	 *
	 * @return Game*
	 */
	virtual Game *clone();

	/**
	 * @brief Function used to convert AI move data into move index.
	 * Must utilise OutputFormat functions to decode OutputValue into int.
	 *
	 * Used by QAgent, override not required for other agents.
	 *
	 * @see OutputFormat
	 * @param output to be passed into OutputFormat functions contains the move data
	 * @param random to be passed into OutputFormat functions determines if the move is random (during learning to explore possible options)
	 * @return int the move value to be played, must return a value of get_possible_moves()
	 */
	virtual int convert_output(OutputValue *output, bool random);

	/**
	 * @brief Get the current game state based on InputFormat.
	 *
	 * Will be later converted to a machine readable format using InputFormat.
	 *
	 * @see InputFormat
	 * @return vector<int> the current game state
	 */
	virtual vector<int> get_input();
};
```