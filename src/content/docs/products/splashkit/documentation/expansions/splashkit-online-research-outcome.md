---
title: SplashKit Online Research Spike Outcome
---

==============

**Spike:** NA

**Title:** SplashKit Online Research Spike Plan

**Author:** Sean Boettger, sboettger@deakin.edu.au, sean@whypenguins.com

## Goals / Deliverables

The goal of this spike was to investigate whether Emscripten and Emception could be used to compile
and run SplashKit online via WASM, and in doing so produce this report. In the process, a fork of
SplashKit-Core was made to improve reproducibility. This can be found here:
https://github.com/WhyPenguins/splashkit-core/tree/EmscriptenTest

## Technologies, Tools, and Resources used

- Internet Browser: Firefox
- Programming Languages: C++, Python, Javascript
- Compilers: Emscripten
- Docker
- Emception
- Programming Libraries: SplashKit
- Text Editor: Notepad++
- Terminal

## Tasks undertaken

Here are the key tasks that were performed to produce the main results. The actual path taken took a
bit more research and experimentation.

### Testing Emscripten

- Installed and activated Emscripten using emsdk (see
  https://emscripten.org/docs/getting_started/downloads.html)
- Tried compiling some simple SDL code (such as that found here
  https://blog.conan.io/2023/07/20/introduction-to-game-dev-with-sdl2.html) with the command
  `emcc -sUSE_SDL=2 -sUSE_SDL_IMAGE=2 -sSDL2_IMAGE_FORMATS='["bmp","png","xpm"]' sdl_test.cpp -o sdl_test.html`.
  Emscripten already has ports for many libraries such as SDL, which was found out about here
  (https://emscripten.org/docs/compiling/Building-Projects.html)
- Ran a python web server with `python -m http.server`
- Navigated to localhost:8000 - the program was running in the browser.

### Compiling SplashKit to WASM

- This took a few changes to SplashKit's source code. To make this easier to reproduce, a fork of
  SplashKit-Core has been created that has a branch with the changes required to make SplashKit
  compile a simple example under Emscripten. See here:
  https://github.com/WhyPenguins/splashkit-core/tree/EmscriptenTest

#### The following is a brief list of changes

- Cloned SplashKit-Core
- Modified CMakeLists.txt as follows: - Appended `set(CMAKE_C_COMPILER "emcc") `
  `set(CMAKE_CXX_COMPILER "emcc")` at the top. - Appended `-sUSE_SDL=2` to the make flags. -
  Appended the following to be linked: - `-sUSE_SDL=2` - `-sUSE_SDL_TTF=2` - `-sUSE_SDL_GFX=2` -
  `-sUSE_SDL_NET=2` - `-sUSE_SDL_MIXER=2` - `-sUSE_SDL_IMAGE=2` -
  `-sSDL2_IMAGE_FORMATS='["bmp","png","xpm"]'` and removed any existing duplicates. - Modified a few
  of the files and dependencies to either use Windows or Linux headers depending on what they
  required (perhaps the build environment was unusual). - Commented out tests
- Modified web_driver.cpp and terminal.cpp so they were stubs without includes.
- At this point running `cmake -G "Unix Makefiles" . && make` built.
- To test functionality simply, the code from the starting tutorial
  (https://splashkit.io/articles/guides/tags/starter/get-started-drawing/) was brought across and
  replaced the Tests in the test folder. The test target in the makefile was modified to output this
  test. `set(CMAKE_EXECUTABLE_SUFFIX ".html")` was also important to make it output properly.
- From here, the Python webserver was started in the output directory, and the starting tutorial
  could be ran in the browser.

### Compiling Emception

- First Docker was installed, and WSL2 setup.
- Next, Emception was cloned and built following the instructions
  (https://github.com/jprendes/emception)
- Unfortunately, a number of issues were encountered. Compiling LLVM took approximately 16GB of RAM,
  and so the VM's RAM and swap limits needed to be adjusted; otherwise the compilation process was
  killed. It also took approximately a day.
- Compilation errors were encountered later on. These have been reported already on the repository
  (https://github.com/jprendes/emception/issues/24), and no fix nor work around has been proposed
  yet. In order to not spend too long, Emception was shelved for now to work on interfacing
  SplashKit with Javascript.

### Using SplashKit as a Library in Javascript

- There were three different approaches that could be taken - each one was tested along with
  pros/cons examined.
- First step was to test 'cwrap'ing.
- The Main function was renamed, and wrapped in `extern "C"`
- An additional 'rerender' function was added, to test multiple calls.
- `-sEXPORTED_RUNTIME_METHODS=ccall,cwrap` was added to the makefile
- From here, the file was loaded in the browser, and the following executed on the brower's console:

```
start_main = Module.cwrap('start_main', 'number', [])
start_main()`
different_render = Module.cwrap('different_render', 'number', [])
different_render()
```

- This method worked easily, however wrapping create_window immediately posed issues as it takes a
  C++ string (not a primitive), and also returns something other than a primitive. Methods involving
  manual allocation were investigated, but instead the two binding implementations Embind and WebIDL
  Binder seemed more promising.
- Embind bindings for color and a few functions were created. They look as follows:

```
EMSCRIPTEN_BINDINGS(color) {
  emscripten::value_object<color>("color")
    .field("r", &color::r)
    .field("g", &color::g)
    .field("b", &color::b)
    .field("a", &color::a);
}
EMSCRIPTEN_BINDINGS(my_module) {
  emscripten::function("open_window", (window (*)(std::string, int, int)){&open_window}, emscripten::allow_raw_pointers());
  emscripten::function("clear_screen", (void (*)(void)){&clear_screen});
  emscripten::function("clear_screen_color", (void (*)(color)){&clear_screen});
  emscripten::function("refresh_screen", (void (*)(void)){&refresh_screen_});
}
```

- Unfortunately it seems Embind has issues with raw pointers, which SplashKit uses a lot of.
  Apparently it should only have issues with pointers to primitive types, but the same error was
  encountered even with structures (such as \_window_data\*).
- Finally WebIDL Binder was tried out.
- SplashKitWasm.idl was created and filled out with some simple prototypes.
- The C++ and Javascript glue was created by running
  `python ../../emsdk/upstream/emscripten/tools/webidl_binder.py SplashKitWasm.idl SplashKitWasmGlue`
- It was tested at the console with the following commands:

```
SK = new Module.SplashKitJavascript()
SK.open_window("Testing!", 800, 600)
SK.clear_screen(SK.color(0.7,0,1,1))
SK.refresh_screen()
```

```
SK.clear_screen(SK.color(1,1,1,1));
SK.fill_ellipse(SK.color(0,1,0,1), 0, 400, 800, 400);
SK.fill_rectangle(SK.color(0.4,0.4,0.4,1), 300, 300, 200, 200);
SK.fill_triangle(SK.color(1,0,0,1), 250, 300, 400, 150, 550, 300);
SK.refresh_screen()
```

- It was here that testing was ended and this report was written up. The results can be seen in the
  final commit on the EmscriptenTest branch.

This report took a bit longer to write up than it should have, as initially all the tests with
Emscripten were performed using a personal compilation tool in order to make initial testing quick.
That tool continued to be used to compile SplashKit-Core. Migrating to using SplashKit-Core's own
compilation method took longer, but hopefully by doing so the results can be more easily reproduced
and expanded on in the future.

## What we found out

### Code using SplashKit can be compiled with Emscripten and run in the browser.

#### What worked

During testing, the majority of SplashKit was compiled and linked successfully, and basic
functionality (opening a window, drawing shapes) was confirmed to work. In the SDL test, SDL input
was confirmed to work, making it likely it does in SplashKit as well.

#### What wasn't tested

Any functionality outside of that was not tested, including sound, animation, etc. Twitter,
terminal, serial and JSON functionality was also not tested/replaced with stubs.

#### What didn't work

Web functionality was replaced with stubs due to the usage of cURL which is not currently compilable
under Emscripten. See (https://github.com/emscripten-core/emscripten/issues/3270)

### SplashKit can be compiled as a library and used in Javascript.

Embind seemed promising but due to issues with raw pointers WebIDL Binder was investigated further
and is plausibly the better alternative for this project. It has issues with functions in global
scope unfortunately (https://github.com/emscripten-core/emscripten/issues/8390), requiring the
majority of SplashKit's functions to be wrapped in a class.

### Emception was unable to be compiled.

Until the bug here (https://github.com/jprendes/emception/issues/24) is fixed, it seems like it will
be difficult to compile Emception without really digging into how it works and correcting the
problem ourselves. Whether this is worth it or not is hard to say.

## Open issues/risks

As Emception was unable to be compiled, it is difficult to evaluate whether it would have been a
good solution. There is risk that continuing to try and use it would just consume more time.

Much of SplashKit is also yet to be tested; perhaps there are yet unknown issues regarding sound and
other interactivity. Testing of larger codebases using SplashKit should be conducted.

## Recommendation

One way forward would be to continue developing SplashKit Online as a Javascript based scripting
environment; it has been confirmed SplashKit can be used as a library via Javascript, and this
ensures no load on the server regarding compiling, and also no uncertainty regarding whether it will
be possible to get Emception working.

Another way forward is to use Emscripten as a back-end compiler to the web IDE, similar to the
original SplashKit Online repository. This introduces more complexity on the server side, but would
allow users to develop using C++ just as they would on their own computer.

Finally, it might be worth continuing to investigate Emception and try to get it to compile. Several
unknowns exist - how long will it take to understand and make compile, and if it runs whether it be
able to compile well enough (there are concerns regarding speed). If it is successful however this
would probably give the best result, but there are many unknowns.
