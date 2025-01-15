# Semester 1 2022 Data Analytics Update

## State Of Code Received

There were a few roadblocks that halted progress through the data analytics module. Despite bug
fixes being listed as commits from the 2021 code file, it appeared to have never ran. Poor coding
practices were found throughout, including the following:

- portable_files_dialog.h library not recognised, which could not be resolved
  - It was a very unneccessary addition as it only ran in one method and was not used for similar
    things in other methods
- splashkit.h was called inside SplashKit, which broke the code and is something you definitely
  should not do
- Most imports required for the code were missing
- Data validation code was lengthy and did not work
  - A lot of true/false statements were switched, meaning it would never give a proper result
  - Swapped between using poorly written Regex and making their own methods to do the same thing,
    both did not work properly
- Display function used import that was Windows operating system only
  - Means you could not run the Data Analytics module from Mac or Linux
  - Also was poorly written and we never got it working
- Dataframe code looked impressive but without display function working, was hard to see if it was
  working properly
  - Ran out of time to test each individual method
- Poor coding practices within DataFrame object
  - Methods to scale window for no reason
  - Bad calculations (+1 and -1 in the same line is redundant)

This meant that instead of starting with Instance Selection and Data Visualisation, all our efforts
had to go into code quality assurance.

## Changes Made To Code

The T3 2021 code required a full rewrite. Imports were fixed by removing and adding required ones
Data validation functions have been rewritten to run. They will need to be re-worked into more
robust objects.

Dataframes code is not currently included in
[T1 2022 repository](https://github.com/lawrence0arabia/splashkit-core/tree/develop/coresdk/src/coresdk/data_analytics.cpp)
as it does not compile or run. You can find the dataframes code in the
[T3 2021 repository](https://bitbucket-students.deakin.edu.au/users/zbargiamidis/repos/splashkit2021t3/browse),
data_analytics.cpp from line 369 on.

## Issues To Be Resolved

- Review on whether string recognition is required.
  - If yes, create dynamic objects for each item to be recognised
    - Regex also needs to be improved
    - Actioning this is not urgent, but course of action is
  - If no, remove altogether, along with tests
- Clean up Dataframes code line by line
  - Superfluous code present, needs to be simplified
    - Issues identified include:
      - Reliance on Windows exclusive console functions, display function is littered with them.
        STD_OUTPUT_HANDLE, GetConsoleScreenBufferInfo, hConsole, etc are all exclusive to windows,
        need to make multi-platform. Would recommend trying to get it running on a Windows device
        first just to make sure it does work before removing windows stuff. (It seems to be using
        the windows exclusive functions to check the console window width before printing so it can
        format the dataframe correctly. This feature is a nice-to-have, but Mac and Linux support
        are MUST HAVES)
      - Variable arrays, array size must be known at compile time in C++. This only seems to be an
        issue for a couple of the insert functions in the dataframe code, so it is recommended to
        comment them out for now and try get it working without them.
      - Needs more comments and general simplification -- too hard to understand what the code is
        doing.
      - Code does not compile or run on Mac or Linux.
  - Research Pandas Dataframes and review our current setup
  - Add basic functions required for simple implementation
- Create new display function
  - Needs to work on all systems
- Test Dataframe code
  - As we do not think it has ever compiled or run, we need to determine that all functions and
    objects work properly.
    - If they do not: either refactor or begin to re-write code based on
      [Scope documents](../Scope/Index.md).
  - Tests will have to be created as none currently exist for the dataframes.
