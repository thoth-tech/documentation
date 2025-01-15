# Getting Started With Mouse Button and Inputs

## Introduction to Mouse Button

### What is `Mouse Button`?

`Mouse Button` is an enumeration used by SplashKit to read inputs from the mouse to be handled on
your program. If you want to have users control your program using the mouse, then you must
understand `Mouse Button`!

### List of `Mouse Button`

| Name            | Description             |
| --------------- | ----------------------- |
| NO_BUTTON       | No mouse button         |
| LEFT_BUTTON     | The left mouse button   |
| MIDDLE_BUTTON   | The middle mouse button |
| RIGHT_BUTTON    | The right mouse button  |
| MOUSE_X1_BUTTON | The x1 mouse button     |
| MOUSE_X2_BUTTON | The x2 mouse button     |

## Mouse Button Inputs

Here are some functions that are used to handle mouse button inputs. These functions takes in the
`Mouse Button` as parameter and checks if the specified button has been clicked, held down, or
released.

### Mouse Clicked

`Mouse Clicked` is a boolean function that checks if the specified `Mouse Button` has been clicked
since the last time `Process Events` was called.

Syntax in C++:

`bool mouse_clicked(mouse_button button)`

### Mouse Down

`Mouse Down` checks if the specified button is being held down.

Syntax in C++:

`bool mouse_down(mouse_button button)`

### Mouse Up

Opposite from the previous function, `Mouse Up` checks if the specified button is being held up (not
pressed).

Syntax in C++:

`bool mouse_up(mouse_button button)`

### Demonstration

Here is an example of all the mouse input functions being used together.

```
int main()
{
    open_window("Game", 800, 600);

    while(!key_down(ESCAPE_KEY))
    {
        process_events(); // check mouse state

        if (mouse_clicked(LEFT_BUTTON)) // check if left mouse button is clicked
        {
            clear_screen(COLOR_RED);
        }
        else if (mouse_down(LEFT_BUTTON)) // check if left mouse button is pressed down
        {
            clear_screen(COLOR_YELLOW);
        }
        else if (mouse_up(LEFT_BUTTON)) // check if left mouse button is released
        {
            clear_screen(COLOR_GREEN);
        }

        refresh_screen(60);
    }

    return 0;
}
```

In this example, the screen will turn red if the left mouse button is clicked, which is checked in
the first if clause. In the next loop, if the mouse has not just been clicked but is still being
held down, the screen will turn yellow. Meanwhile, if the left mouse button is released, the screen
will turn green.

## Read Mouse Movement

Another thing we can do with a mouse other than pressing its buttons is moving it around. So, we
should also understand the functions to handle mouse movement to use it on our program.

### Mouse Movement

`Mouse Movement` is a function that returns the amount of accumulated mouse movement since the last
time `Process Events` was called. It returns the value as a `Vector 2D` data type, which shows the
direction and distance in the x and y scale.

Syntax in C++:

`vector_2d mouse_movement()`

### Mouse Wheel Scroll

`Mouse Wheel Scroll` returns the distance and direction of the mouse scroll since the last time
`Process Events` was called. Like the previous function, this function returns the `Vector 2D` data
type.

Syntax in C++:

`vector_2d mouse_wheel_scroll()`

### Demonstration

```
int main()
{
    vector_2d movement;

    vector_2d scroll;

    open_window("Game", 800, 600);

    while(!key_down(ESCAPE_KEY))
    {
        clear_screen(COLOR_BLACK);

        process_events(); // check mouse state

        movement = mouse_movement(); // This stores the mouse movement direction and distance to the movement variable

        scroll = mouse_whell_scroll(); // This stores the mouse wheel scroll direction and distance to the scroll variable

        draw_text("The mouse has moved: " + vector_to_string(movement), COLOR_WHITE, 100, 300); // Print out mouse movement

        draw_text("The mouse wheel scrolled: " + vector_to_string(scroll), COLOR_WHITE, 100, 400); // Print out mouse wheel scroll

        refresh_screen(60);
    }

    return 0;
}
```

## Mouse Position

Now that we have learned how to handle mouse inputs and movements, we should also learn how to
handle the mouse's position. Getting the mouse position can be used in your program to make the
experience more interactive. Combined with the mouse input functions, it can be used to spawn items
where the player clicked or respond to the player clicking where an item is located. Not only
getting the position, we can also move the mouse to a specified position using the `Move Mouse`
function.

### Mouse Position

`Mouse Position` returns the position of the mouse in the current window as a `Point2d` data type,
which is its x and y coordinates.

Syntax in C++:

`point_2d mouse_position()`

### Mouse Position Vector

`Mouse Position Vector` returns the position of the mouse relative to the window origin as a
`Vector 2D`.

Syntax in C++:

`vector_2d mouse_position_vector()`

### Mouse X

`Mouse X` returns a `float` of the distance of the mouse from the left edge of the window.

Syntax in C++:

`float mouse_x()`

### Mouse Y

`Mouse Y` returns a `float` of the distance of the mouse from the top edge of the window.

Syntax in C++:

`float mouse_y()`

### Move Mouse

`Move Mouse` moves the cursor to the specified location. This function has two versions, one with
the x and y locations as parameters, and one with a `point2d` as its parameter.

Syntax in C++:

`void move_mouse(double x, double y)`

`void move_mouse(point_2d point)`

### Demonstration

This example shows moving the mouse a few pixels from the current position.

```
void move_10_point()
{
    double current_x = mouse_x(); // Get the current x position as a double
    double current_y = mouse_y(); // Get the current y position as a double

    move_mouse(current_x + 10, current_y + 10); // Move the cursor 10 point to the x and y direction
}

int main()
{
    open_window("Game", 800, 600);

    while(!key_down(ESCAPE_KEY))
    {
        process_events(); // check mouse state

        if (mouse_clicked(LEFT_BUTTON))
        {
            move_10_point(); // Performs the move when the left mouse button is clicked
        }

        refresh_screen(60);
    }
    return 0;
}
```

## Mouse Visibility

Finally, we can also alter the mouse visibility on SplashKit. The following functions handles the
mouse visibility. These can be useful to create a more immersive environment for your game.

### Hide Mouse

`Hide Mouse` hides the mouse from the screen.

Syntax in C++:

`void hide_mouse()`

### Show Mouse

There are two versions of the `Show Mouse` function. The first version shows the mouse to the
screen.

Syntax in C++:

`void show_mouse()`

The second version of the function shows or hides the mouse based on its boolean parameter. If true,
it shows the mouse, while if false, it hides the mouse from the screen.

Syntax in C++:

`void show_mouse(bool show)`

### Mouse Shown

`Mouse Shown` is a boolean function that checks if the mouse is currently visible or not.

Syntax in C++:

`bool mouse_shown()`

## Conclusion

From this tutorial, we have learned how to handle the mouse on SplashKit starting from the
`Mouse Button` data type, functions related to mouse inputs, movements, positions, to its
visibility. Now that you have learned these functions, you can handle inputs associated with the
mouse on SplashKit!
