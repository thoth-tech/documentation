#include "splashkit.h"
#include "all the headers"

using namespace std;

#define SCREEN_HEIGHT 900
#define SCREEN_WIDTH 1600

void load_recourses()
{
    load images/backgrounds and sounds
}

int main()
{
    open_window(insert game file, SCREEN_WIDTH, SCREEN_HEIGHT)
    load_recourses();

    game file = new game;

    while(game is not quit)
    {
        if menu is active
        {
            load game menu
        }
        else
        {
            draw game
            insert game input handle
        }
    }

    return 0;
}

//headers required to load the game, eg image assets...etc
//all headers must be in txt file

//player header
#define the game player
#include "splashkit.h"

using namespace std;

#define any public variables

player
{
    player 1
    player 2
}

struct player data
{
    list all the player data, if sprite is used then
}

void handle_input(inserting player data file)

void draw_player(insert const player data & draw player)

#endif


// player cpp
#include "splashkit.h"
#include "player.h"
#include "game.h"

bitmap player bitmap
{
    draw player 1 & 2
}

defining new player()
{
    load both players bitmap;

    creating sprite for player 1;
    creating sprite for player 2;

    return result;
}

void input handle(plater data & player)
{
    if analogstick is moved then
    {
        cursor moves
    }

    if A button is pressed
    {
        the option is selected
    }
}

void draw player
{
    draw sprite(player sprite)
}


//dice roll header
#define the game player
#include "splashkit.h"

using namespace std;

#define any public variables

dice
{
    dice 1
    dice 2
    dice 3
    dice 4
}

struct dice data
{
    defining sprites
}

void handle_input(inserting input handling file)

void draw_dice(insert const dice data & draw dice)


//dice roll cpp
#include "splashkit.h"
#include "dice.h"
#include "game.h"

using namespace std;

#define any public variables

drawing dice bitmap
{
    list all the dices;
}

void draw_dice(const dice data & dice to draw)
{
    draw sprite(dice to draw main sprite)
}

void dice timer(dice data)
{
    defining/assigning a timer name for the time of the dice roll;
    creating the timer using the above;
}

void update dice(dice data & dice to update)
{
    applying the movement and reset of dice bitmap;
    set sprites location to the updated coordinates;
}

//game header
#define dicey game

#include "splashkit.h"
#include "dice.h"
#include "player.h"

#include <vector>

using namespace std;

struct game data
{
    list all the data;
}

game data new_game();

void draw_game(constant game data & game);

void update game(game data & game);

void input handle(game data & game);


//game cpp
#include "splashkit.h"
#include "game.h"
#include "player.h"

using namespace std;

void add dicey game to game
{
    start new game, clear existing dicey game;
    adding dicey to game dicey vector;
}

creating new game()
{
    list all the variables and settings;
}

void draw all elements on screen(constant game data & game)
{
    clearn screen;
    draw bitmap;
    draw player 1, player 2;
    draw dice roll;
    draw cursor;
    draw indicator;
    refresh screen;
}

update all elements in game()
{
    update players location;
    update indicators;
    update dice roll;
}

void input handle()
{
    button 'A' = deciding/selecting button;
    analog = moving the cursor around
}

//roll and pass header
#include "splashkit.h"
using namespace std;

#define any public variables

button
{
    roll;
    pass;
}

struct button data
{
    defining sprites
}

void handle_input(inserting input handling file)

void draw_button(insert const button data & draw button)

//roll and pass cpp
#include "splashkit.h"
#include "dice.h"
#include "roll.h"

using namespace std;

bitmap player bitmap
{
    draw roll;
    draw pass;
}

void input handle(plater data & player)
{
    if analogstick is moved then pressed on roll button
    {
        draw sprite(dice to draw main sprite)
        call timer parameter;
    }

    elseif analogstick is moved then pressed on pass button 
    {
        update player;
    }
}
