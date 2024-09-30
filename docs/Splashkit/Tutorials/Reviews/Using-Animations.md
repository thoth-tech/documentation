# Title

Date Reviewed: Reviewed by: Sana Noureen

## Description:

This tutorial covers loading resources, setting up animation scripts, and switching between different animations (e.g., walking, dancing) based on keyboard inputs. The tutorial also includes adding sounds to animations and using movement vectors to make sprites move on the screen. Finally, it provides example code in C# and C++ to implement and test these animations in a game loop.

## Confirmation of Passing Quality Checks:

- [ ] The tutorial is free of spelling and grammatical errors.
- [x] The tutorial is easy to follow.
- [x] The tutorial has:
  - [x] C# using top level statements
  - [x] C++
  - [ ] Python
- [x] The code passes all the Quality Checks.

## Links:

Website Link: https://splashkit.io/guides/animations/0-using-animations/#getting-it-working

Pull Request: https://github.com/thoth-tech/documentation/pull/559

## Improvements and suggestions:

If you have any suggestions for improvements or changes, add here:

- Python Program is missing in the page, I think we can add a python code as below:

# Open the window
open_window("Animation Test", 120, 120)

# Load the bitmap and set its cell details
frog = load_bitmap("FrogBmp", "Frog.png")
bitmap_set_cell_details(frog, 73, 105, 4, 4, 16)  # cell width, height, cols, rows, count

# Load the animation script
dance_script = load_animation_script("WalkingScript", "kermit.txt")

# Create the animation
frog_animation = create_animation(dance_script, "WalkFront")

# Basic event loop
while not quit_requested():
    process_events()

    # Clear screen and draw the bitmap using the animation options
    clear_screen(color_white())
    draw_bitmap(frog, 20, 20, option_with_animation(frog_animation))
    draw_text(animation_name(frog_animation), color_black(), 0, 0)
    refresh_screen(60)

    # Update the animation
    update_animation(frog_animation)

    # Switch animations based on key presses
    if key_typed(UP_KEY):
        assign_animation(frog_animation, "WalkBack")
    elif key_typed(DOWN_KEY):
        assign_animation(frog_animation, "WalkFront")
    elif key_typed(LEFT_KEY):
        assign_animation(frog_animation, "WalkLeft")
    elif key_typed(RIGHT_KEY):
        assign_animation(frog_animation, "WalkRight")
    elif key_typed(D_KEY):
        assign_animation(frog_animation, "Dance")

close_all_windows()

And Secondly, in the moonwalk frog section, we can have 'a another example' replaced by 'another example', in animation frames and image cells section, 'These indexes' can be replaced by these indices. In adding sounds section, "When sound is played in an animation it is played as soon as the frame starts playing and only plays once for that frames duration." - there should be a comma after the 'animation'.
In switching animations section, "Once you have an Animation you can use the Assign Animation method" should have a comma after "Animation" to separate clauses.

