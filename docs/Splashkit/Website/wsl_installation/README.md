![](https://i.imgur.com/pbIntVv.png)

<h1> Splashkit SDK Installation Guide (WSL)</h1>

_This guide provides step-by-step instructions for installing the Splashkit SDK through WSL (Windows
Subsystem for Linux). The Splashkit SDK allows you to develop cross-platform applications using C++,
C#, and more._

## Prerequisite

Before you begin, make sure you have the following:

1. Windows 10+ operating system
2. WSL (Windows Subsystem for Linux)
   [prerequisites](https://learn.microsoft.com/en-us/windows/wsl/install#prerequisites)
3. Internet connection

## Installation

1. **Install WSL**

   _Open the Microsoft Store and search for "WSL"._ _Choose the Linux distribution you prefer (e.g.,
   Ubuntu, Debian, or openSUSE) and install it._ ![](https://i.imgur.com/6jYdhsO.png)
   _Alternatively, open PowerShell (admin) and enter the following script:_

   ```shell
   wsl --install
   ```

2. **Launch WSL:** _Once WSL is installed, launch the WSL distribution you installed. This will open
   a terminal window running a Linux environment._

3. **Update the Linux distribution:**

   _In the WSL terminal, run the following commands to update the package lists and upgrade the
   installed packages:_

   ```shell
   sudo apt update
   sudo apt upgrade
   ```

4. **Install necessary dependencies:**

   _In the WSL terminal, run the following command to install Git and Curl:_

   ```shell
   sudo apt install git curl
   ```

   ![](https://i.imgur.com/ZKXjGyV.png)

   **[OPTIONAL]** _Install additional dependencies required by Splashkit:_

   ```shell
   sudo apt install build-essential libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev libsdl2-mixer-dev

   ```

5. **Download and install Splashkit using SKM (Splashkit Manager):** _In the WSL terminal, run the
   following command to download and install Splashkit using the SKM installation script:_

   ```shell
   bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)

   ```

6. **Verify installation:** _Check if the SKM executable is present in the .splashkit directory by
   running the following command:_

   ```shell
   ls -l .splashkit
   ```

   ![Screenshot](https://i.imgur.com/Rj6RtnH.png) _This will list the contents of the .splashkit
   directory, including the SKM executable._

7. **Add SKM to system's PATH:**
   ```shell
   echo 'export PATH="$HOME/.splashkit:$PATH"' >> ~/.bashrc
   source ~/.bashrc
   ```
   ![](https://i.imgur.com/s0XAzJw.png)
8. Install SKM tools for Linux **[Optional]** _In the WSL terminal, you can install additional SKM
   tools for Linux by running the following command:_

   ```shell
   skm linux install
   ```

   ![](https://i.imgur.com/JtAFvq5.png)

   **Note:** This installation requires approximately 508 MB of disk space. <br><br><br>

## Test SKM

Execute skm to test it was successfully installed.

```shell
    skm
```

You should see the following messages:

```shell
Splashkit is installed successfully!
Missing skm command. For help use 'skm help'
```

SplashKit supports a number of languages. Run `skm help` at the terminal to see the different
commands you can run. <br><br><br>

## Testing a C++ program

To test your Splashkit gcc/clang++ compiler, you can use the following C++ program:

```cpp
  #include <iostream>
int main() {
    std::cout << "Hello, World!" << std::endl;
    return 0;
}
```

Run this by executing the following command in WSL terminal:

```shell
skm clang++ <filename>.cpp -o <outputfile>
./<outputfile>
```

Change the **<filename>** and **<outputfile>** with your file names.

## Acknowledgements

- [WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install)
- [SplashKit SDK](https://splashkit.io/)
