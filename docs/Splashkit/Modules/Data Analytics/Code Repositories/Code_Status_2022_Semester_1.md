# Semester 1 2022 Data Analytics Update
## State Of Code Received

There were a few roadblocks that halted progress through the data analytics module.
Despite bug fixes

## Changes Made To Code

The T3 2021 code required a full refactor.
Data validation functions have been fully rewritten.  

Dataframes code is not currently included in [T1 2022 repository](https://github.com/lawrence0arabia/splashkit-core/tree/develop/coresdk/src/coresdk/data_analytics.cpp) as it does not compile or run. You can find the dataframes code in the [T3 2021 repository](https://bitbucket-students.deakin.edu.au/users/zbargiamidis/repos/splashkit2021t3/browse), data_analytics.cpp from line 369 on.


## Issues To Be Resolved

- Review on whether string recognition is required.
  - If yes, create dynamic objects for each item to be recognised
    - Regex also needs to be improved
    - Actioning this is not urgent, but course of action is
  - If no, remove altogether, along with tests
- Clean up Dataframes code line by line
  - Superfluous code present, needs to be simplified
    - Issues identified include:
      - Reliance on Windows exclusive console functions, display function is littered with them. STD_OUTPUT_HANDLE, GetConsoleScreenBufferInfo, hConsole, etc are all exclusive to windows, need to make multi-platform. Would recommend trying to get it running on a Windows device first just to make sure it does work before removing windows stuff. (It seems to be using the windows exclusive functions to check the console window width before printing so it can format the dataframe correctly. This feature is a nice-to-have, but Mac and Linux support are MUST HAVES)
      - Variable arrays, array size must be known at compile time in C++. This only seems to be an issue for a couple of the insert functions in the dataframe code, so I'd recommend commenting them out for now and trying to get it working without them.
      - Needs more comments and general simplification -- it's too hard to understand what the code is doing.
      - Code does not compile or run on Mac or Linux.
  - Research Pandas Dataframes and review our current setup
  - Add basic functions required for simple implementation
- Create new display function
  - Needs to work on all systems
- Test Dataframe code
  - As we don't think it has ever compiled or run, we need to determine that all functions and objects work properly.
    - If they don't, either refactor or begin to re-write code based on [Scope documents](../Scope/Index.md).
  - Tests will have to be created as none currently exist for the dataframes.
