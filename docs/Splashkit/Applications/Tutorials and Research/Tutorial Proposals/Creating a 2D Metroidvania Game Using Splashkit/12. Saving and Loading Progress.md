| Title                       | Description                                                      | Author          | Date       | Tags                                                |
| --------------------------- | ---------------------------------------------------------------- | --------------- | ---------- | --------------------------------------------------- |
| Saving and Loading Progress | Learn how to create save files and load using JSON on SplashKit. | Swanny Aurellia | 13/09/2023 | game development, programming, SplashKit, functions |

**Notes**: This tutorial was developed before the prior tutorials of this series have been
completed. Some variables, especially the ones in **game_data**, the **fields included in the save
file**, and the **initial values** may need to be adjusted to fit the rest of the tutorials. The
tutorial was developed with the assumption that there is a game_data struct that stores all the data
associated with the game. If there is no game_data struct the parameters for the save_game and
load_game functions will also need to be updated.

# Tutorial 12: Saving and Loading Progress

## Introduction

Now that we have built a functional game, we want to add saving and loading functionality to let
players continue playing from wherever they left off. There are many ways different games can
implement saving and loading their games, such as opening the menu to save, having just one or more
save files, or having checkpoints scattered across the map where players can save. In this tutorial,
we'll create a simple checkpoint by pressing the save button, and loading the game where the player
left off whenever the game is opened.

## Using JSON

On SplashKit, we can use JSON files to store and access our game data. For our save file, we will
need to store the following:

1. Player position
1. The level the player is currently playing
1. Player health
1. Current score
1. Enemies position

Note that for different games, the information we need may be different. For example, on games where
inventory is a thing, data of the items the player currently has will need to be stored.

### Create a JSON file

First, we will need to create the JSON file inside the `json` folder. We can name the file
`save.json`.

Inside, write down the fields of data and their initial values. For this tutorial, we'll set the
initial value as the initial state when we first start the game on the first level.

```
{
    player_position_x : 100,
    player_position_y: 200,
    current_level : 1,
    current_health : 3,
    current_score : 0,
    enemies_position_x : [400, 600],
    enemies_position_y : [200, 200]
}
```

### Accessing JSON file on SplashKit

1. `json_from_file`

   We can open JSON files on SplashKit using the `json_from_file` function.

   ```
   json save_data = json_from_file("save.json");
   ```

   Here, we are accessing the save file and putting the information to the save_data variable. We
   can put this at the beginning of our main function.

1. `free_json`

   After we are done with the file, we should not forget to free the resource using the `free_json`
   function.

   ```
   free_json(save_data);
   ```

   We can put this line of code at the end of our main function.

## Saving the game

Now that we have learned where we are saving the game to, we can start creating the save files.

### Create the save function

The save function stores the game data we need to save the game into the save.json file. We do this
by using the `json_set` functions to change the values of the json object and `json_to_file`
function to store the values to the file.

1. `json_set_number`

   The `json_set_number` function is used to set numerical values to a JSON object. We can use this
   for the player position, level, health, and score data.

   ```
   json_set_number(save_data, "player_position_x", game_data.player_position_x);
   json_set_number(save_data, "player_position_y", game_data.player_position_y);
   json_set_number(save_data, "current_level", game_data.current_level);
   json_set_number(save_data, "current_health", game_data.current_health);
   json_set_number(save_data, "current_score", game_data.current_score);
   ```

1. `json_set_array`

   The `json_set_array` function is used to set array values to a JSON object. We can use this to
   store the enemies positions.

   ```
   json_set_array(save_data, "enemies_position_x", game_data.enemies_position_x);
   json_set_array(save_data, "enemies_position_y", game_data.enemies_position_y);
   ```

1. Other `json_set` functions

   Other than the two functions we have used, there are also the
   [`json_set_boolean`](https://splashkit.io/api/json/#json-set-boolean) function to store boolean
   values, [`json_set_string`](https://splashkit.io/api/json/#json-set-string) to set string values,
   and [`json_set_object`](https://splashkit.io/api/json/#json-set-object) to store a json object
   inside another json object. You may want to use this in your game if you need to save these data
   types to your save file.

1. `json_to_file`

   Once all the data have been put inside the JSON object, we can write it into our JSON file using
   `json_to_file`.

   ```
   json_to_file(save_data, "save.json");
   ```

Here is how the save function should look like now:

```
void save_game(json save_data)
{
    json_set_number(save_data, "player_position_x", game_data.player_position_x);
    json_set_number(save_data, "player_position_y", game_data.player_position_y);
    json_set_number(save_data, "current_level", game_data.current_level);
    json_set_number(save_data, "current_health", game_data.current_health);
    json_set_number(save_data, "current_score", game_data.current_score);
    json_set_array(save_data, "enemies_position_x", game_data.enemies_position_x);
    json_set_array(save_data, "enemies_position_y", game_data.enemies_position_y);

    json_to_file(save_data, "save.json");
}
```

### Triggering the save function

In this tutorial, we will be triggering the save function by pressing the 'S' key on the keyboard.
This can be done by adding the `key_typed` function inside the loop in our main function.

```
if(key_typed(S_KEY))
{
    save_game(save_data);
}
```

In your own games, you can extend this by calling the function with different triggers, such as
clicking a button on the screen, opening a menu to get the save option, or even interracting with a
save point spread across the map.

## Loading the game

### Create the load function

The load function is used to transfer the data we have read from the JSON file to the variables used
to run the game. Here we will use the `json_read` functions.

1. `json_read_number_as_double`

   This function is used to read a number from the JSON object as a double. This is useful for our
   player position data.

   ```
   game_data.player_position_x = json_read_number_as_double(save_data, "player_position_x");
   game_data.player_position_y = json_read_number_as_double(save_data, "player_position_y");
   ```

1. `json_read_number_as_integer`

   This function is used to read numbers from the JSON object as an integer. This can be used for
   our current level, health, and score data.

   ```
   game_data.current_level = json_read_number_as_integer(save_data, "current_level");
   game_data.current_health = json_read_number_as_integer(save_data, "current_health");
   game_data.current_score = json_read_number_as_integer(save_data, "current_score");
   ```

1. `json_read_array`

   This function is used to read arrays from the JSON object. We will use this for our enemies
   locations.

   ```
   game_data.enemies_position_x = json_read_array(save_data, "enemies_position_x");
   game_data.enemies_position_y = json_read_array(save_data, "enemies_position_y");
   ```

Similar to the `json_set` functions, `json_read` also has functions for booleans, strings, and JSON
objects.

Here is how our function should look like now:

```
void load_game(json save_data)
{
    game_data.player_position_x = json_read_number_as_double(save_data, "player_position_x");
    game_data.player_position_y = json_read_number_as_double(save_data, "player_position_y");
    game_data.current_level = json_read_number_as_integer(save_data, "current_level");
    game_data.current_health = json_read_number_as_integer(save_data, "current_health");
    game_data.current_score = json_read_number_as_integer(save_data, "current_score");
    game_data.enemies_position_x = json_read_array(save_data, "enemies_position_x");
    game_data.enemies_position_y = json_read_array(save_data, "enemies_position_y");
}
```

### Triggering the load function

Since we want to load the game to the last save whenever the game is reopened, we will call the
`load_game` function inside the main function.

Here is what we have in our main function as a result from this tutorial:

```
int main()
{
    json save_data = json_from_file("save.json");

    load_game(save_data);

    while(!key_typed(ESC_KEY))
    {
        if(key_typed(S_KEY))
        {
            save_game(save_data);
        }

        // Insert rest of the game code here

    }

    free_json(save_data);
}
```

Like the save function, you can extend the load function to be triggered by pressing a key, clicking
a button, or choosing which save file to load from with a menu.
