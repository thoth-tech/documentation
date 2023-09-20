---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : Linux </h1>

## “`bash: dotnet command not found`”:

![](https://i.imgur.com/tD5BUgD.png)

## Solution:

Check if .NET Core SDK is installed: Open a terminal and run the following command:

```shell
dotnet --version
```

If you see the version number, it means that .NET Core SDK is already installed. Ifnot, proceed to
the next step.

Install .NET Core SDK: To install the .NET Core SDK on Linux, you can follow the official Microsoft
documentation for your specific Linux distribution. Here's a general guide:

## Ubuntu/Debian:

```shell
wget https://packages.microsoft.com/config/ubuntu/20.04/packages-microsoft-prod.deb -O packages-microsoft-prod.deb
```

```shell
sudo dpkg -i packages-microsoft-prod.deb
```

```shell
sudo apt-get update
```

```shell
sudo apt-get install -y apt-transport-https
```

```shell
sudo apt-get update
```

```shell
sudo apt-get install -y dotnet-sdk-7.0
```

## CentOS/Fedora: Copy

```shell
sudo rpm -Uvh https://packages.microsoft.com/config/rhel/8/packages-microsoft-prod.rpm
```

```shell
sudo dnf update
```

```shell
sudo dnf install dotnet-sdk-7.0
```

Other distributions: Refer to the official Microsoft documentation for instructions specific to your
distribution. Configure the PATH environment variable: After installing the .NET Core SDK, you need
to ensure that the dotnet command is accessible from anywhere on your system. To do this, add the
following line to your shell profile file (e.g., ~/.bashrc, ~/.zshrc):

```shell
export PATH="$PATH:$HOME/.dotnet"
```

Save the file and run the following command to apply the changes:

```shell
   source ~/.bashrc
```

or

```.bash
   source ~/.zshrc
```

After completing these steps, you should be able to use the dotnet command without encountering the
**"dotnet command not found"** error on Linux.

![](https://i.imgur.com/Xz3R5v5.png)
