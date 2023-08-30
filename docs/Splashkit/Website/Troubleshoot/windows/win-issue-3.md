---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1>Issue : Windows </h1>

## `-bash: skm: command not found`:

![](https://i.imgur.com/PMDiueq.png?1)

## Solution:

Firstly, go through Steps 1 – 3 shown in the “Update your system “Path” variable” section
[here](update-system-path.md)

Then come back here for the Next Step. Disable any antivirus software on your computer.

**Next Step:** In the “Edit environment variable” window, you should have these two paths shown in
the image below (Green Box):

![](https://i.imgur.com/H9sF33y.png)

If you are missing one of the paths in the Green box, click "New" (Red box), then add the path you
are missing. It will be similar to what is shown in the Green box - just using your own username.

Once it is added, click “OK” on all the windows, open a **new** MINGW64 terminal and tryrunning the
program again.
