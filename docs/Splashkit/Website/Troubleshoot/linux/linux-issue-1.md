---
title: FAQs on Splashkit installation
tags: faq,error,troubleshoot
---

<h1> Issue : Linux </h1>

## “`skm: command not found`”:

## Solutions:

**Verify installation:** _Check if the SKM executable is present in the .splashkit directory by
running the following command:_

```shell
ls -l .splashkit
```

![Screenshot](https://i.imgur.com/Rj6RtnH.png) _This will list the contents of the .splashkit
directory, including the SKM executable._

1.  **Solution 1:**

    If the skm executable is present, you can add it to your system's PATH by running the following
    command:

    ```shell
    echo 'export PATH="$HOME/.splashkit:$PATH"' >> ~/.bashrc
    ```

    Refresh the environment variables:

    ```shell
    source ~/.bashrc
    ```

1.  **Solution 2:**

    Open the .bashrc file:

    ```shell
    nano ~/.bashrc
    ```

    Add the following lines at the end of the file:

    ```shell
    export LD_LIBRARY_PATH=/usr/local/lib
    export PKG_CONFIG_PATH=/usr/local/lib/pkgconfig
    ```

    Save the file and exit the editor (`Ctrl+X`, then `Y`, then `Enter`).

    Refresh the environment variables:

    ```shell
    source ~/.bashrc
    ```
