# Trimester 2 2022 Data Frame Redesign

## Prior state of the Data Frames

A review completed in Trimester 1 2022 found that there were severe issues in the existing Data
Analytics code. This review found that more modifications and research needed to be completed before
it can be included in the Thoth Tech splashkit-core repository.

The following points were requested to be researched further:

1. Review whether or not string recognition is required
2. Review and resolve compatibility issues for Mac and Linux users
3. Determine if the existing Data Frame code works and meets user expectations, otherwise redesign
   the Data Frame

## Research and Findings

### 1. Review whether or not string recognition is required

The string recognition code was implemented but not utilised by the Data Frame methods. This code
contained issues with:

- Hard-coding values, such as requiring 3 decimal places
- Not executing correctly when tested
- Requiring terminal input for issues that could be resolved without the terminal
- Not having a forseeable use case for Data Frames or plotting data

#### Solution

The string recognition code has been excluded due to it not being needed for the module. This code
remains accessible for future inspiration if necessary
([URL](https://bitbucket-students.deakin.edu.au/users/zbargiamidis/repos/splashkit2021t3/browse/coresdk/src/coresdk)).

### 2. Review and resolve compatibility issues for Mac and Linux users

The issues identified by the trimester 1 2022 team were confirmed, including:

- Using variables and constants exclusive to Windows machines
- Hard-coding display output sizing to the terminal

#### Solution

The Windows exclusive coding artefacts have been removed to ensure that all operating systems can
run the method. In the redesign, the columns are separated by a tab only. This can be modified in
the future as needed to ensure that users can set their data frame sizes appropriately. This code
remains accessible for future inspiration if necessary
([URL](https://bitbucket-students.deakin.edu.au/users/zbargiamidis/repos/splashkit2021t3/browse/coresdk/src/coresdk)).

### 3. Determine if the existing Data Frame code works and meets user expectations, otherwise redesign the Data Frame

The existing code was found to have a large number of issues that impact the scalability of the Data
Frame, as well as not meeting many QA criteria. These include:

- Not designed to allow distinct columns to have different data types
- Not designed to scale as more features are implemented
- Not meeting the MATLAB/SplashKit method style (for example: dataframe.getColumn() vs.
  getColumn(dataframe))
- Limited commenting (a lot of the code and variable names are difficult to interpret)
- A lot of duplicated code
- Some functions not performing as expected
- Many methods are incomplete as well as not containing the same number of opening and closing
  parentheses

Due to the above issues, the Data Frame has been redesigned to be able to meet the requirements of
the module. This code remains accessible for future inspiration if necessary
([URL](https://bitbucket-students.deakin.edu.au/users/zbargiamidis/repos/splashkit2021t3/browse/coresdk/src/coresdk)).

#### Solution

The Data Frame has been redesigned with the following considerations:

- Data Frame is a struct, as per the rest of the SplashKit objects
- Data Frame supports resizing when altering rows and columns
  - Using vectors instead of arrays
  - Data stored as a vector of columns (so columns can be added or removed)
  - Columns are also themselves vectors (so rows can be added or removed)
- Data Frame supports various column types by using a 'variant' type
  - C++ is a statically typed language. A number of solutions include:
    - Using pointers and casting (defining a column as: vector\<void\*> object)
    - Using an 'any' type and casting (defining a column as: vector\<any>)
    - Using a 'variant' type to allow a set of data types to be stored in the vector (defining a
      column as: vector\<variant\<int,string,float,char,bool,...>>)
  - All three solutions were coded.
    - The 'variant' type produced the simplest API to use as well as having the most interpretable
      code.
    - The 'any' type led to poor memory efficiency
- Using the SplashKit method naming convention: function(struct) instead of struct.function()
- Unit testing has been created and implemented

## State of the Data Frames after the research

- [Active branch](https://github.com/thoth-tech/splashkit-core/tree/modules/data_analytics) (as of
  10/8/2022)
