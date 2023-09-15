---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : Windows </h1>

## `System.DllNotFoundException unable to load DLL splashkit.dll` when trying to run program:

![](https://i.imgur.com/uEz1nxT.png)

## Solutions:

1.  **Solution 1:**

    Disable any antivirus software on your computer.

1.  **Solution 2:**

    Make sure your project isn't called "SplashKit".

1.  **Solution 3:**

        Make sure you are creating your project using the MINGW64 terminal (rather than the MSYS

    terminal) and create the project files in its own directory/folder.

1.  **Solution 4:** Add the folder containing splashkit.dll file to your path environment variable
    manually. Firstly, go through Steps 1 – 3 shown in the “Update your system “Path” variable”
    section [here](update-system-path.md).

    Then come back here for the Next Step.

    **Next Step:** In the “Edit environment variable” window, you should have these two paths shown
    in the image below (Green Box) – on the next page

    ![](https://i.imgur.com/lTzyRSo.png)

    If you are missing one of the paths in the Green box, click "New" (Red box), then add the path
    you are missing. It will be similar to what is shown in the Green box - just using your own
    username.

    Once it is added, click “OK” on all the windows, open a **new** MINGW64 terminal and try running
    the program again.

1.  **Solution 5 (if all else fails):** Get it working by copying the SplashKit binaries to the
    build output: The SplashKit binaries are in

        `C:\msys64\home\(your username)\.splashkit\lib\win64`
        *Replace "(your username)" with your username. (See Note about “whoami” above to get

    your username.)\*

        The contents of the folder should look something like this:

        ![](https://i.imgur.com/XRha19P.png)

        Copy all of these into the build output of your SplashKit project.
        This will usually be:

        `<Project folder name>\bin\Debug\net7.0`

        *eg, if the folder name is MyProject, and you are using .NET 7.0, it would be:*

        `MyProject\bin\Debug\net7.0`
