
# Spike Outcomes

==================

**Spike:** NA

**Title:** Spike_Title

**Author:** Bryan Taing, staing@deakin.edu.au

## Goals / Deliverables

The goal of this spike is to check whether MicroUI lib can run in Splashkit. The library can be found in here: https://github.com/rxi/microui

## Technologies, Tools, and Resources used

List of information needed by someone trying to reproduce this work

- Programming Languages: C++
- Programming Libraries: MicroUI, Splashkit
- Text Editor: VSCode
- Terminal: MSYS

## Tasks undertaken
Here are ways to integrate MicroUI lib into the Splashkit Library. 
 - Clone up Splashkit-Core 
 - go to `coresdk\external` folder and create a folder name `microui`
 - copy the .c and header file from the src and demo folder in microUI lib to `microui` folder
 -  In Splashkit, in the `projects\cmake` open the Cmake and change as follow:
	 - Add `"${SK_EXT}/microui/*.c"` to the `# SOURCE FILES` area
	 - Add `include_directories("${SK_EXT}/microui")` to the `# DIRECTORY INCLUDES`
	 - Add `opengl32` in the `if (MSYS)` because microUI needs openGL library
-	Now go the `microui` folder, modify the header file:
	-	change the `#include <SDL2/SDL.h>` to `#include <SDL.h>` and `#include <SDL2/SDL_opengl.h>` to `#include <SDL_opengl.h>`
	-	add `#ifdef __cplusplus
extern "C" {
#endif <bunch of code> #ifdef __cplusplus
}
#endif` ` so the Cmake support the C language
-	Now go to the `splashkit-core_old\coresdk\src\test` add a test call `test_microui.cpp`
-	copy the `main.c` code in the microUI library and paste it in the `test_microui.cpp`. Also change modify the code ensure that it follows the C++ standard like 
`mu_layout_row(ctx, 2, (int[]) { 54, -1 }, 0);` to 
`int row[] = { 54, -1 };`
`mu_layout_row(ctx, 2, row, 0);`
-	Modify the `test_main.cpp` and `test_main.h` file to accept `test_microui.cpp` as another choice
-	run it with Cmake and it should look like what it is below
![image](https://github.com/MangoS9/documentation/assets/128771372/50b5da58-1a64-4788-818a-bf6314a6c170)


## What we found out

So far upon testing the demo, there has not been much issue in the function except for the two buttons when click on the pop-up button. More test needed for the investigation


## Recommendations

As it is for now, it uses microUI keyword to create the user interface. For future plans, we wish to incorporate the library using Splashkit style code. If possible, we could replace the code with Splashkit existing code to reduce the redundancy. Overall, it is in-need more investigation to ensure everything is stable for public uses.

