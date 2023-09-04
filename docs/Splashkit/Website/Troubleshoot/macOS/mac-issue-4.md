---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : MacOS </h1>

## “`System.DllNotFoundException unable to load DLL splashkit.dll`” when trying to run program

## Solutions:

1. **Solution 1:** Make sure your macOS is fully updated to the latest software if possible (at
   least version **12.0** or later).

2. **Solution 2:** For older macOS versions (**pre-12.0**), you can use the following commands in
   the terminal to change SplashKit to a previous version (run each line separately):

   ```shell
   cd ~/.splashkit
   ```

   ```shell
   git fetch –unshallow
   ```

   ```shell
   git checkout cbb68dc
   ```

   Note: Using `skm dotnet new` after these commands might change the way that the SplashKit project
   files are created, so you can use this
   [**Template SplashKit project**](https://deakin365-my.sharepoint.com/:u:/g/personal/o_mckeon_deakin_edu_au/EZWAVnpc1QxHqFB7KbZ-j_sBreJCSEJLomdDUKsnT7DykA?e=EKefqK)
   (_zipped folder_) to create new projects instead of using `skm dotnet new`:

   **Note**: Read the “`README.txt`” file for instructions on how to use the template for new
   projects. There is also a comment in `Program.cs` file to help with this, and then you can remove
   these commented lines.
