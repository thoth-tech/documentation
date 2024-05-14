**SIT374 Week 4 Splashkit .deb packaging report:**

**Overview:**

This report tracks progress and obstacles related to this Trello ticket:
[link](https://trello.com/c/wXo9Dny0/432-create-debian-package-for-splashkit)

This ticket tracks a change which would decouple Splashkit Manager (SKM) from the splashkit
libraries. The resulting change would be A) documentation of the splashkit .deb packaging process
and B) a .deb file which can be distributed to end users.

**Testing environment**

An x86_64 virtual Machine running Debian 12 Stable. The Debian install has non-free software
packages enabled. The testing user account has sudo privileges.

**Approach**

1. Compile splashkit library binaries from source files (C++/C#)

1. Test the .so files against different compilers (G++, Clang++, dotnet, Mono-MCS) with a piece of
   [test code](https://splashkit.io/guides/00-00-reading-text/) that requires the Splashkit library
   in some form.

1. Create a .deb package that contains the library binaries, extracts them to a local folder
   (/$user/.Splashkit) or similar then updates their .bashrc $PATH to look for these libraries.
   Alternatively force a “global” installation through modifying /usr/lib or /usr/local and updating
   ld to link these files.

1. Create a separate VM with the same environment and use dpkg to install the deb file. Try to
   compile the same splashkit test code.

**Testing & Research Outcomes:**

I have only been able to make rudimentary progress on implementing the first two tasks of this
ticket.

**Compiling binaries**

As I have said to the mentoring team Splashkit SDK and SKM are very tightly interlinked and
separating them causes a number of headaches. I have so far been unable to compile the Splashkit
libraries without using SKM to do it because of the inter-dependencies. I have tried different
variations of manually collecting source files and explicitly trying to feed the compiler the
spashkit.cpp file in order to compile the library myself but kept encountering issues. Eventually I
gave up, used SKM to force a “global install” of splashkit and extracted the compiled .so files.

**Compiling C++ files without SKM**

Per the documentation I have seen it is my understanding that once SKM has been installed the user
should be able to execute this command to compile a C++ program without having to use SKM. I have
not been able to do this. Executing: “clang++ program.cpp -l SplashKit -o program” Will result in a
compile error saying that splashkit cannot be found. This happens regardless of whether I run skm
new c++ (to generate the include folder) or not. NB I have also tried variations of the “splashkit”
variable changing case, literal filenames, specifying -L flag and pointing to the location of
compiled and uncompiled splashkit libraries, different compilers (g++, clang++) etc.

**Compiling C++ Directly Linking Compiled Splashkit library**

Giving the compiler the compiled library directly works and seems to compile splashkit programs as
expected. Have tested with a couple of the example programs (reading input and playing sound) and
both seem to work as expected. Note: this is still dependent on there being a libSplashKit.so file
in /usr/local/lib (which skm global install does) regardless of where the .so file being passed at
compile time lives:

**Modifying User Properties to link Static Libraries**

Have tried a couple of different methods of getting the users profile to correctly link to the .so
library file, however I can not get it to associate correctly. Have tried modifying $PATH in
.bashrc, have tried adding LD_LIBRARY_PATH line and pointing to various directories containing the
source and compiled library. Have also tried modifying ld config (opposed to LD_LIBRARY_PATH) and
re-running ldconfig to try to ingest the library. This does not seem to work either.
