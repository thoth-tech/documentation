# Code Coverage

Collecting code coverage would help us check whether the codebase is adequately tested by unit
tests. Ideally, coverage would be integrated into the unit testing workflow and able to be done in
Visual Studio Code. Some research into code coverage has been done and so far it seems feasible to
do on Linux and Windows with WSL, but problems were encountered doing so on Windows with MSYS2.
Collecting coverage on Mac hasn't been tried.

## Collecting coverage on Windows

- Coverage collection when using WSL works fine.
- The coverage collection process failed on MSYS2 when using Mingw64, which is recommended by the
  SplashKit installation guide.
- Using other MSYS2 environments, like UCRT64 or MSYS wasn't tried.

## Code coverage on Linux/WSL

Code coverage on Linux involves setting options at compile time to enable coverage generation,
running the unit tests to generate the data, then displaying it (either as a summary of coverage
over the source files, or highlighting lines that have been executed in the IDE).

1. Setting compiler and linker options Can be done as part of the build process with CMake by adding
   the options to CMakeLists.txt Assuming the use of g++:

   ```
   add_compile_options(--coverage)
   add_link_options(--coverage)
   ```

   This can be integrated with CMake configure presets to provide an easy way to switch between
   building with and without coverage:

   ```
   option(USE_COVERAGE "Enable GCOV during the build" OFF)
   if(USE_COVERAGE)
       add_compile_options(--coverage)
       add_link_options(--coverage)
   endif()
   ```

   See more on CMake presets: https://cmake.org/cmake/help/latest/manual/cmake-presets.7.html See
   more on gcc options, including --coverage:
   https://gcc.gnu.org/onlinedocs/gcc/Instrumentation-Options.html

2. Collect coverage Coverage on Linux can be collected with LCOV or gcovr

- https://github.com/linux-test-project/lcov
- https://github.com/gcovr/gcovr

Example of integrating LCOV into the build process:

```
# Coverage collection with LCOV
# Get absolute path to SK_SRC so we can pass it to LCOV
# and collect coverage only for src files
get_filename_component(SRC_ABS ${SK_SRC} ABSOLUTE)
message(SRC_ABS="${SRC_ABS}")

find_program(LCOV lcov REQUIRED)
set(LCOV_BASE lcov-base.info)
set(LCOV_TEST lcov-test.info)
set(LCOV_TOTAL lcov.info)
set(LCOV_LOG lcov.log)
set(LCOV_ERR lcov.err)
add_custom_target(init-coverage
    COMMENT "Collecting initial coverage"
    COMMAND lcov -c -i -d ${CMAKE_CURRENT_BINARY_DIR} --include "'${SRC_ABS}*'"
        -o ${LCOV_BASE} 2>${LCOV_ERR} >${LCOV_LOG})
add_dependencies(init-coverage reset-coverage)

add_custom_target(reset-coverage
    COMMENT "Reset all coverage counters to zero"
    COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
        -o ${LCOV_BASE}
    COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
        -o ${LCOV_TEST}
    COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
        -o ${LCOV_TOTAL})

add_custom_target(capture-coverage
    COMMENT "Capture coverage data"
    DEPENDS ${LCOV_BASE}
    COMMAND lcov -c -d ${CMAKE_CURRENT_BINARY_DIR} -o ${LCOV_TEST} --include "'${SRC_ABS}*'"
        2>${LCOV_ERR} >${LCOV_LOG}
    COMMAND lcov -a ${LCOV_BASE} -a ${LCOV_TEST} -o ${LCOV_TOTAL}
        >>${LCOV_LOG})
```

Breaking it down:

```
COMMAND lcov -c -i -d ${CMAKE_CURRENT_BINARY_DIR} --include "'${SRC_ABS}*'"
    -o ${LCOV_BASE} 2>${LCOV_ERR} >${LCOV_LOG})
```

Collects initial (zero) coverage for files in coresdk/, so we aren't wasting time getting coverage
on external libraries. As the lcov man page states for -i/--initial:

> Run lcov with -c and this option on the directories containing .bb, .bbg or .gcno files before
> running any test case. The result is a "baseline" coverage data file that contains zero coverage
> for every instrumented line. Combine this data file (using lcov -a) with coverage data files
> captured after a test run to ensure that the percentage of total lines covered is correct even
> when not all source code files were loaded during the test. Refer to:
> https://linux.die.net/man/1/lcov

```
COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
    -o ${LCOV_BASE}
COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
    -o ${LCOV_TEST}
COMMAND lcov -q -z -d ${CMAKE_CURRENT_BINARY_DIR}
    -o ${LCOV_TOTAL})
```

Reset execution counts to zero so that successive runs don't influence the count.

```
COMMAND lcov -c -d ${CMAKE_CURRENT_BINARY_DIR} -o ${LCOV_TEST} --include "'${SRC_ABS}*'"
    2>${LCOV_ERR} >${LCOV_LOG}
COMMAND lcov -a ${LCOV_BASE} -a ${LCOV_TEST} -o ${LCOV_TOTAL}
    >>${LCOV_LOG})
```

Combine the baseline and test coverage data.

## Viewing coverage

The Visual Studio Code extension CMake Tools can be configured to show code coverage when tests are
run from the Testing tab. It offers line highlighting for executed lines as well as a summary of
coverage over all source files.

- https://marketplace.visualstudio.com/items?itemName=ms-vscode.cmake-tools
- Setup requires having custom targets in CMakeLists.txt which you can set in the extension options

Alternatively, the Gcov Viewer can highlight executed lines but doesn't appear to offer a summary
view

- https://marketplace.visualstudio.com/items?itemName=JacquesLucke.gcov-viewer

## Concerns

- What about platforms other than Linux/WSL?
- What if someone is using clang and not gcc?
