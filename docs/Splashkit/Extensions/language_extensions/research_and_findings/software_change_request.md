# Software Change Request Form

**Change Request ID:** Extensions-Python-1

## Project Details

**Project Name:** Language Extensions, Python Compatibility

**Requested By:** Ben Thomas Software Engineer, Allan Farrell Team Lead

**Date of Request:** 10-MAY-2022

**Change Description:** Removal of HeaderDoc dependency within the SplashKit Translator, to be
replaced with Natural Docs or another alternative. **Change Reason:** User guide documentation for
HeaderDoc was last updated in 2013, and was then
[retired in 2016](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/HeaderDoc/revision_history/revision_history.html#//apple_ref/doc/uid/TP40001215-CH362-SW1).
HeaderDoc itself does not appear to have been updated since. Additionally, HeaderDoc does not
support Windows. There are available documentation generators that support a wide array of languages
and platforms that are kept up-to-date.

**Change Impact:** This will expand the scope of the Language Extensions team, requiring work to be
performed on the currently published \*.h HeaderDoc files within the SplashKit core SDK, to make
them compatible with a new documentation generator. Additionally, it will require changes to the
SplashKit Translator&#39;s Ruby code, to implement a new documentation generator and remove the
current dependency on HeaderDoc. This change should not impact further development of the SplashKit
core SDK, nor continued investigation and solutions development of the translator itself, as it can
be conducted under a new team.

**Proposed Actions:** Establishment of a new team under Extensions leadership for future semesters.
Team would create a cloned branch of the current translator, document existing Ruby code functions
and isolate HeaderDoc components. Remove and replace HeaderDoc dependency with alternative
documentation generator. Clone existing SplashKit core SDK and update existing \*.h files to
function with new documentation generator. Test and document functionality.

**Software Change:** Upon investigation of existing documentation generators,
[Doxygen](https://www.doxygen.nl/) is a strong choice. Existing stable release was updated as recent
as May 2022 and it is cross-platform, including Windows. However, Doxygen does not support Ruby and
there may be plans to utilize documentation generator within the translator, coded in Ruby, in the
future. Best alternative is [Natural Docs](https://www.naturaldocs.org/). Supports 21 languages,
including C++ and Ruby. It is free and open source. Latest version release was Feb 2022 and it
supports multiple platforms, including Windows, macOS, and Linux.

**Change Priority:** Extensions team consider the priority to be LOW-MODERATE.

**Change Req. Status:** Proposed.
