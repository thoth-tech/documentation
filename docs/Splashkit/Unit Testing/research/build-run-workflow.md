# Current workflow

As can be seen, the current workflow doesn't require a lot of set up but involves using the command
line (including debugging).

## Linux

1. Install prerequisites

   - Update

     ```shell
     sudo apt-get update
     sudo apt-get upgrade -y
     ```

   - Install

     ```shell
     sudo apt-get install -y \
     git build-essential cmake g++ libpng-dev libcurl4-openssl-dev libsdl2-dev \
     libsdl2-mixer-dev libsdl2-gfx-dev libsdl2-image-dev libsdl2-net-dev libsdl2-ttf-dev \
     libmikmod-dev libbz2-dev libflac-dev libvorbis-dev libwebp-dev libfreetype6-dev
     ```

2. Build test project

   ```shell
   cd projects/cmake
   cmake .
   make
   ```

3. Run unit tests

   - Running all tests

     ```shell
     cd ../../bin
     ./skunit_tests
     ```

     Example output:

     ```
     (14/04/2025) ERROR -> Invalid binary string passed to bin_to_oct: 2, returning empty string [raised in basics.cpp:340]
     (14/04/2025) ERROR -> Invalid hexadecimal string passed to hex_to_oct: G, returning empty string [raised in basics.cpp:371]
     (14/04/2025) ERROR -> Invalid octal string passed to hex_to_dec: G, returning 0 [raised in basics.cpp:305]
     (14/04/2025) ERROR -> Invalid octal string passed to oct_to_hex: 8, returning empty string [raised in basics.cpp:383]
     ===============================================================================
     All tests passed (1258 assertions in 74 test cases)
     ```

   - Running a specific test

     ```shell
     ./skunit_tests [test name or tag]
     ```

     Example:

     ```
     ./skunit_tests "[least_common_multiple]"
     Filters: [least_common_multiple]
     ===============================================================================
     All tests passed (7 assertions in 1 test case)
     ```

# New workflow

The details depend on which VS Code extension is used, but this example using the CMake Tools
extension shows that the process can be much smoother. This also offers features like test listing
and debugging in VS Code, albeit with extra setup.

## Linux

1. Install prerequisites

   - Update

     ```shell
     sudo apt-get update
     sudo apt-get upgrade -y
     ```

   - Install packages

     ```shell
     sudo apt-get install -y \
     git build-essential cmake g++ libpng-dev libcurl4-openssl-dev libsdl2-dev \
     libsdl2-mixer-dev libsdl2-gfx-dev libsdl2-image-dev libsdl2-net-dev libsdl2-ttf-dev \
     libmikmod-dev libbz2-dev libflac-dev libvorbis-dev libwebp-dev libfreetype6-dev
     ```

   - Install CMake Tools from VS Code's extension browser or from
     https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools

2. Configure extension

   - Select ${workspaceFolder}/projects/cmake/CMakeLists.txt

   - Select the Linux configure preset

   - On the CMake Tools extension tab set the Build target to skunit_tests

   - Set the Debug and Launch target to skunit_tests

3. Configure VS Code debugging

   - Go to the Run and Debug tab of VS Code and create a launch.json file

     ```json
     {
       "version": "0.2.0",
       "configurations": [
         {
           "name": "(gdb) Launch",
           "type": "cppdbg",
           "request": "launch",
           "program": "${command:cmake.launchTargetPath}",
           "args": [],
           "stopAtEntry": false,
           "cwd": "${workspaceFolder}",
           "environment": [
             {
               "name": "PATH",
               "value": "${env:PATH}:${command:cmake.getLaunchTargetDirectory}"
             }
           ],
           "externalConsole": false,
           "MIMode": "gdb",
           "setupCommands": [
             {
               "description": "Enable pretty-printing for gdb",
               "text": "-enable-pretty-printing",
               "ignoreFailures": true
             },
             {
               "description": "Set Disassembly Flavor to Intel",
               "text": "-gdb-set disassembly-flavor intel",
               "ignoreFailures": true
             }
           ]
         }
       ]
     }
     ```

4. Build test project

   Building can be done from the terminal, as before, or within VS Code in one of the following ways

   - In the CMake Tools extension, select Build

   - On the Testing tab, select Refresh Tests

5. Run unit tests

   In addition to running tests from the terminal, tests will show up on the Testing tab of VS Code.

   - Running all tests

     Select Run Tests, each test will be run and the status of each can be seen in the test list.

   - Running a specific test

     Select Run Test next to any test on the test list to run it

6. Run unit tests with debugging

   Break points can be set in VS Code like in normal programs, by selecting the red next to a line
   in a test or pressing F9. Then, select Debug Tests to run all tests with debugging or Debug Test
   next to the test name to run a specific test with debugging.
