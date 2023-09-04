# Trimester 2 2022 Data Frame Redesign

## Prior state of the Data Frames

A prior attempt to review the physics module in Trimester 1 of 2022 found that the existing code did
not function. The review found that much of the code in the module needed refactoring before it can
be included in the Thoth Tech splashkit-core repository. Methods were refactored, but never properly
tested or proven to work.

The following points were required to be researched further:

1. Review the need for the Box2D library dependency in SplashKit
2. Review current testing implementation and design future tests going forward
3. Determine if the existing physics method implementation works and meets user expectations,
   otherwise redesign the module

## Research and Findings

### 1. Review the need for the Box2D library dependancy in SplashKit

The original inherited physics module (which is now inaccessible) was mostly designed around using
the Box2D physics engine. This is an existing external library created by Erin Catto, who works at
Blizzard. Documentation for this can be found at [this link](https://box2d.org/).

The extent of the Box2D implementation has been limited to the
[physics.cpp](https://github.com/someguy8/splashkit-core/blob/develop/coresdk/src/coresdk/physics.cpp)
and its header file in a forked repository. It is not utilised in any other files and no other
methods interact with it.

This code contained issues with:

- Incorrect importing of an external library causing compile issues
- Lack of relevance to the vision of the Physics module
- No compatibility or scope for comaptibility with existing code

#### Solution

All references to Box2D have been removed. As there was no dependencies on this physics engine in
other methods, no refactoring was required with the deletion.

### 2. Determine if the existing Data Frame code works and meets user expectations, otherwise redesign the Data Frame

#### Solution

### 3. Review current testing implementation and design future tests going forward

A solution was implemented in Trimester 1 2022 but as the code could not be compiled, it was never
confirmed to work. Prior to this solution, there was no implementation of testing for any of the
files in the Physics module.

Issues with the implemented solution were:

- Poor implementation of player.h and obstacle.h files in coresdk
- Most test cases designed but never implemented
- test_collisons.cpp does not compile
- Use of "splashkit.h" as an include statement

#### Solution

The inclusion of player.h and obstacle.h in coresdk have been removed. These have been replaced with
basic sprite initialisation methods inside the collisions testing file. As these headers were not
utilised anywhere else, they were able to be deleted immediately.

Current design for test cases has remained the same.

Unit tests for individual methods in physics.cpp and collisions.cpp must be initialised. These are
called unit_test_physics.cpp and unit_test_collisions.cpp which are required to be populated for
each method. These unit tests are to be modelled off the test_cases.md document.

The test_collisions.cpp file to be refactored to import two sprites and allow the developer to run
individual tests on different systems.

The following methods in the existing implementation on the modules/physics branch that must be
actioned are:

- sprite_gravity
  - Simplify
  - Have a value in vector2d add to velocity vector2d every frame refresh
    - Add a scale factor (default being 3 pixels per second) - can be altered
    - Calculate acceleration / scale factor
    - default gravity is 9.807f
    - don't need mass
  - Model it off the Free_Falling method
- sprite_push
  - Methods should only pass sprites
    - Mass should be previously set
    - Run tests to see if this velocity change makes sense
- physical_sprites_collision

  - Can be deleted. Needs to be replaced with elastic and inelastic collision methods

- KINETIC_ENERGY

  - Remove this instance of the overloaded KINETIC_ENERGY function
    - To be implemented in a way that can be used on other objects, not just sprites

- velocity_after_collied

  - Rename to velocity_from_kinetic_transfer
  - Flagged for deletion if not utilised in other methods

- collision_angle

  - Remove. Should be calculated using each sprites attributes and the vector_angle method. If chain
    not required, so method can be deleted

- KINETIC_ENERGY

  - Fix poor function naming conventions as well (if method required)
  - Make universal for all objects, pass mass and velocity vector

- collision

  - Remove
    - Currently no circle-circle collision detection built. Should only be implemented after this is
      completed.
    - Need other components before looking at creating an elastic and inelastic collision function
      for two circles

- rect_collision

  - As above for the circle-circle collisions

- Free_Falling

  - Remove
    - See sprite_gravity above

- density

  - Swap volume for area in metres squared
    - Volume is a 3d physics trait
  - Should not take a sprite, only mass and area
    - This will make it more versatile

- sinking_velocity

  - Needs complete refactor
    - Research best way to calculate sinking velocity. The current method is calculating momentum
      (F) using mass and speed of sprite, then density.
  - Default water buoyancy force should be a declared constant
  - Pass mass and speed (if required) as parameters instead of Sprite so the method is reusable
  -

- sinking

  - Calculate densities of object and liquid
    - Density has to be area x mass as 2d shapes don't have volume
      - Use the density method above
  - The current logic for the if statements is fine (can be refined).
    - Fix the response blocks where sprite velocity is altered
  - Make variable and parameter names more descriptive (not F or F_after_water)

- sprite_momentum_x

  - Rename as momentum
    - Parameters are mass and velocity instead of sprite
      - To make the method reusable for other object types
    - Return mass x velocity

- sprite_momentum_y

  - Remove. To be replaced with above momentum method as outlined in sprite_momentum
    - Velocity is a 2d vector. X and Y values can be extracted and then set

- sprite_inelastic_collision

  - Confirm maths is correct
  - Utilise momentum equation in v_final
  - Keep this method in collisions.cpp

- sprite_elastic_collision

  - Confirm maths is correct
  - Keep this method in collisions.cpp

- sprite_confine_screen

  - Remove. Not relevant to the physics module.

- sprite_impulse_x

  - Maths is wrong. The calculation used states that the impulse (force multiplied by time) is equal
    to the momentum (mass multiplied by velocity). In reality the impulse is equal to mass
    multiplied by the change in momentum.
    - This can be calculated, but is not necessary for the module at this time
    - A card to be created on Trello to investigate where an impulse method could be used.
  - Can be removed

- sprite_impulse_y

  - See sprite_impulse_x

- sprite_set_impulse_x

  - See sprite_impulse_x

- sprite_set_impulse_y
  - See sprite_impulse_x

Ensure all naming conventions for methods, parameters, constants and variables are consistent across
the file.

## State of the Physics module after the research

- Code from
  [forked branch](https://github.com/someguy8/splashkit-core/blob/develop/coresdk/src/coresdk/collisions.cpp)
  has been reviewed
  - Player.h, obstacle.h, test_collisions.cpp, physics.cpp and physics.h not brought across
  - Methods from line 386-765 in forked repository on collisions.cpp have been moved into
    physics.cpp where appropriate. All header references moved as well
- The following methods in the existing implementation on the modules/physics branch that have been
  refactored are:

  - TBA

- The following tests have been implemented:

  - TBA

- [Active branch](https://github.com/thoth-tech/splashkit-core/tree/modules/physics) (as of
  17/9/2022)
