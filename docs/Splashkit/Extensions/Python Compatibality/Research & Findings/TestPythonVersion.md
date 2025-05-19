# \*\*Spike Outcomes

==================

**Title:** Test Python Version

**Author:** Darren Marchiano Sunandar

## Technologies, Tools, and Resources used

- Programming Languages:
- Python
- Programming Libraries:
- Python libraries
- Text Editor: VsCode
- Terminal

## Tasks undertaken

- I've tested all the python function from the Splashkit website guides such as:

1. Using Splashkit
2. Using Animations in Splashkit
3. Get Started with Splashkit Audio
4. Splashkit Camera (Error in Line 49)
5. Graphics
6. Input
7. Networking
8. Utilities

- What I didn't test since it doesn't contain a python

1. Interface
2. Json
3. Raspberry GPIO

## What we found out

From all the guides that I tested, there is 1 error:

- From the Splashkit camera guides. In line 49 fill_rectangle() takes 5 positional arguments but 6
  were given. ![alt text](/Images//PythonFillRectangleError.png)

[Splashkit Camera Guides](https://splashkit.io/guides/camera/0-using-splashkit-camera/)

## Recommendations

- Check the Function Argument: Confirm that fill_rectangle() indeed expects five arguments. Usually,
  the arguments might be `color`, `x`, `y`, `width`, `height`.
- Review the Argument Passed: Ensure that there are only 5 argument.
- Update code if necessary: Might need to implement the additional feature seperately or modify how
  to call fill_rectangle().
