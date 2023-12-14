
# Car Race Clipping with Non-Player Cars

## Bug Description

While palying the game, multiple (non- player) cars can spawn in the same
lane, and bnecomes noticeable when the (non-player) cars have different
movement speeds. The faster (non-player) car will then phase through the
slower car.

## Testing Environment

This bug was found while on a windows 10 laptop.

## Reproduction

Play Car Race untile you identify an instance of multiple non player cars
sharing the same lane, with one phasing through the other.

## Expected Results

Non-Player cars do not phase through or collide with eachother.

## Actual Results

Non-Player cars can phase through eachother if multiple cars spawn in the same
lane.
