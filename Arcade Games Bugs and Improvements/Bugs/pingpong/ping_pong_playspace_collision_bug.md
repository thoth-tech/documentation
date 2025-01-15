# Pingpong Problematic Paddle and Puck Collisions Bug

## Bug Description

The collision between the player paddles and the puck do not always work as intended and will
sometimes allow the puck to phase through the players paddle. This is most common when the puck
impacts the top or bottom of the players paddle, as the puck will phase/move through the entire
length of the paddle as if it were a pipe. The puck can also phase through the paddles when
impacting the side of the paddle, though i have not been able to identify any trend.

## Testing Environment

This bug was found while on a windows 10 laptop.

## Reproduction

Play a pingpong game and attempt to have the puck impact to top or bottom edge of the paddle. If the
collision is right, the puck should phase through the height of the paddle. It is also possible,
though much less common, for the puck to impact the side of the paddle and still phase through.

## Expected Results

The paddle acts as a wall that will redirect the puck such that the puck will bounce off the paddle
andtravel back in the direction it came from.

## Actual Results

The puck will intermittently phase through the paddle, while playing the collision sound on repeat
while the puck is still inside the paddle.
