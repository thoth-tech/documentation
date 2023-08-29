---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : MacOS </h1>

## “`zsh: command not found: skm`”:

![](https://i.imgur.com/Qv8RaHc.png)

## Solution:

Add the `.splashkit` folder to your .zshrc file. The `.zshrc` file is located in
“`~/Users/(your username)/`”.

_Replace "(your username)" with your username._ Note: You can get your username using the `whoami`
command in the Terminal as shown below:

![](https://i.imgur.com/Le4nSdA.png)

You might need to show hidden files. Hold down the shift and command keys, and then press the
`. key (period/dot)` to toggle showing hidden files.

Open the `.zshrc` file and add the following line:

```shell
export PATH="$HOME/.splashkit:$PATH"
```

As an added precaution for dotnet, you can also add this line to the same file:

```shell
export PATH="/usr/local/share/dotnet:$PATH"
```

And while you are adding to this file, you can also add the following line, which will allow you to
use the command `code .` to open Visual Studio Code from your terminal:

```shell
export PATH="$PATH:/Applications/Visual Studio Code.app/Contents/Resources/app/bin"
```
