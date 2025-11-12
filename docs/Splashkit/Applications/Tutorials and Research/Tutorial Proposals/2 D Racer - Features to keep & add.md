# 2D Racer - Current Features in code:

- Collision detection
  1. Walls, and other cars
- Loop function (Looping gameplay with no real challenge)
- car images (basic car)

Game currently has minimal features, and is currently written in C#. It generates a game window with
the name "2D Racing" with the following specifications: 800x600 pixels. The 'DrawDemo' object, which
is in charge of drawing and updating game objects, is initialised. It then enters a gameplay loop
where events are processed, player input is verified, the window is cleared, game elements are
updated and drawn, and the window frame is refreshed. The player's request to exit the game window
or the Esc key will end the loop, which will continue until one of the two is made.

Drawing and maintaining game pieces are tasks that the DrawDemo class performs.

In addition to setting up numerous game-related sprites, it saves the game window that is supplied.
By doing this, a Player object is created, which is in charge of managing player input and
interactions. For road boundaries, signs, and other game components, the SetupSprites function sets
up sprites. Positions are calculated, bitmaps are made, and animations are set up. The UpdateAndDraw
function is invoked during game play and manages player input as well as updating sprite locations
and animations and drawing all sprites on the game window.

# 2D Racer - Features to keep & add.

- Collision detection is a must to keep
  - Collision detection used to determine if a game has finished/failed, keeps the player on the
    tracks and not off the screen, and ditto for enemies/competing players
- Loop function useful for time trials or practice laps, but not for challenges and actual levels
- Car images (Basics work fine, but as shared below, could use real cars with real specs (actual
  speedometers, turbo charged, handling, etc)). **_Features to (potentially) add:_**
- Acceleration, and braking for the player's vehicle.
- Steering (For a top down racer, could steer around corners)
- Multiple race tracks with varying difficulty levels (additional cars, jumps, etc)
- AI-controlled opponents for the player to race against. (Kind of like Asphalt series, but 2d and
  simplier.)
- Key binding options. (Intended for PC use)
- Obstacles - Oil spills make the character lose traction for a few seconds, boost pads for
  additional speed for a few seconds, etc.
- https://www.youtube.com/watch?v=pqHXtWoC04o (example of 2d racer)
- each level is different (Multiple lanes, longer or shorter tracks)
  - Varying amounts of lanes (5 lanes for easy, 4 for medium and 3 for hard?)
  - Encourage strategic lane-changing based on the player's goals (e.g., taking the fastest route,
    avoiding obstacles, timing overtakes).
  - Provide rewards for successful lane changes, like speed boosts or points (again, obstacles).
  - Time trials?
  - Drift ability? Cut sharp corners
- UI/UX menu:
  - to pick different cars colours. -Car models could be used to (if was a side scroller, would be
    more benficial) (Race cars maybe? Mitsubishi EVO, RX-7, S14/15, WRX, etc)
  - Start and pause menu (Press [key] to start!)
  - options menu perhaps?
    - key binding perhaps? volume options for audio?
- Music:
  - soundtrack? some sort of energetic, hype you up music (Deja vu like?)
  - maybe a sound or buzz for your disadvantage (slippery sound affect perhaps?)

## Optimisation ideas:

- If choosing to have standard basic cars (Simple sprite images), could be beneficial to use batch
  sprite creation instead (If cars are similar, could use a loop function)
- Lanespacing could be used as a constant or applied via configuration file as opposed to hard
  coding lanespacing.
- If maintaining a loop, could benefit from caching calculations to avoid recalculating the same
  values.
- Reuse already loaded resources, to reduce memory usage (Game wouldn't require a lot of memory
  usage already, however.)
