# Pingpong Incorrect Play Area Boundary Bug

## Bug Description

The collision boundary of the play area does not match the visal boundary for
the play area. Player 1 is unable to access the last centimeter or so of their
(visual) play space closest to their goal, while player 2 is able to access the
last centimeter of their play space closest to their goal.

## Testing Environment

This bug was found while on a windows 10 laptop.

## Reproduction

Play a pingpong game and have player 1 move towards their goal, as far as the
game allows. Have player 2 do the same and compare their visual distance to their
goals.

## Expected Results

Both players are able to move within the last centimeter of play space closest
to their goals.

## Actual Results

Only player two is able to move within the last centimeter of play space closest
to their goal.
