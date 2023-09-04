---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : MacOS </h1>

## “`ln -s /usr/local/share/dotnet/dotnet /usr/local/bin`” command not working:

![](https://i.imgur.com/MJgfrXW.png)

## Solution:

Run the following command, and then enter your password:

```shell
sudo ln -s /usr/local/share/dotnet/dotnet /usr/local/bin
```

_The `sudo` command temporarily gives you system (root) privileges._

**Note:** If you get a “`zsh: permission denied: dotnet`” error at any point, open Finder and
navigate to the “`/usr/local/bin`” folder. (_You can do this by clicking “Go” at the top of the
screen, then click on “Go to Folder…” and type the folder path here._)

Delete the “`dotnet`” file in that folder, and then run the command shown at the top of this
Solution in a new Terminal window.
