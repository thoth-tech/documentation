
<h1> Splashkit SDK Installation Guide (WSL)</h1>

*This guide provides step-by-step instructions for installing the Splashkit SDK through WSL (Windows Subsystem for Linux). The Splashkit SDK allows you to develop cross-platform applications using C++, C#, and more.*




## Prerequisite
Before you begin, make sure you have the following:

1. Windows 10+ operating system 
2. WSL (Windows Subsystem for Linux) [prerequisites](https://learn.microsoft.com/en-us/windows/wsl/install#prerequisites)
3. Internet connection

## Installation

1. **Install WSL**
    
    *Open the Microsoft Store and search for "WSL".* 
    *Choose the Linux distribution you prefer (e.g., Ubuntu, Debian, or openSUSE) and install it.*
    ![](https://i.imgur.com/6jYdhsO.png)
    *Alternatively, open PowerShell (admin) and enter the following script:*

    ```bash
    wsl --install
    ```
2. **Launch WSL:**
    *Once WSL is installed, launch the WSL distribution you installed. This will open a terminal window running a Linux environment.*

3. **Update the Linux distribution:**

    *In the WSL terminal, run the following commands to update the package lists and upgrade the installed packages:*
    ```bash
    sudo apt update
    sudo apt upgrade
    ```
4. **Install necessary dependencies:**
    
    *In the WSL terminal, run the following command to install Git and Curl:*
    ```bash
    sudo apt install git curl
    ```
    **[OPTIONAL]** *Install additional dependencies required by Splashkit:*
    ```bash
    sudo apt install build-essential libsdl2-dev libsdl2-image-dev libsdl2-ttf-dev libsdl2-mixer-dev

    ```

5. **Download and install Splashkit using SKM (Splashkit Manager):**
    *In the WSL terminal, run the following command to download and install Splashkit using the SKM installation script:*
    ```bash
    bash <(curl -s https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh)

    ```
6. **Verify installation:**
    *Check if the SKM executable is present in the .splashkit directory by running the following command:*
    ```bash
    ls -l .splashkit
    ```
    ![Screenshot](https://i.imgur.com/Rj6RtnH.png)
    *This will list the contents of the .splashkit directory, including the SKM executable.*

7. **Add SKM to system's PATH:**
    ```bash
    echo 'export PATH="$HOME/.splashkit:$PATH"' >> ~/.bashrc
    source ~/.bashrc
    ```
    ![](https://i.imgur.com/s0XAzJw.png)
8. Install SKM tools for Linux **[Optional]**
    *In the WSL terminal, you can install additional SKM tools for Linux by running the following command:*
    ```bash
    skm linux install
    ```
    **Note:** This installation requires approximately 508 MB of disk space.
    <br>
## Test SKM
Execute skm to test it was successfully installed.
```bash
    skm
```
You should see the following messages:
```bash
Splashkit is installed successfully!
Missing skm command. For help use 'skm help'
```
SplashKit supports a number of languages. Run `skm help` at the terminal to see the different commands you can run.
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
```bash
skm clang++ <filename>.cpp -o <outputfile>
./<outputfile>
```
Change the **<filename>** and **<outputfile>** with your file names.

## Acknowledgements

 - [WSL installation](https://learn.microsoft.com/en-us/windows/wsl/install)
 - [SplashKit SDK](https://splashkit.io/)


## License

Coming soon..