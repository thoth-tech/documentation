# Installation Script Documentation

## Overview
This script automates the installation process for SplashKit, .NET, C++ tools, and Visual Studio Code (VS Code) on Windows systems. It ensures a seamless setup of development tools required for software development.
Before [script 2](./script2.bash) i worked on the [script1](./script1.bash) which doesnot work with installing with vs code and .net tools.

## Script Details
The script is divided into several sections, each responsible for a specific task:

1. **Update package databases:** Ensures that package databases are up to date before proceeding with installations.
2. **Install required packages:** Installs necessary packages such as git, curl, and unzip.
3. **Install SplashKit:** Downloads and installs SplashKit using the provided installation script.
4. **Install .NET:** Uses the dotnet-install.sh script to download and install .NET SDK.
5. **Install C++ tools:** Installs essential C++ development tools using pacman.
6. **Install VS Code:** Downloads and installs VS Code using the direct download link for the installer executable.
7. **Install VS Code extensions:** Installs essential VS Code extensions for C++ and .NET development.

## Usage
To use the script, follow these steps:
1. Ensure that you have bash installed on your system.
2. Copy the script to your system or download it.
3. Open a terminal window and navigate to the directory containing the script.
4. Run the script using the command: `bash script2.sh`.
5. Follow the on-screen prompts and instructions to complete the installation process.
6. After installation, restart your terminal for the changes to take effect.

## Troubleshooting
If you encounter any issues during the installation process, consider the following troubleshooting steps:
- Check your internet connection to ensure that downloads are not being interrupted.
- Verify that you have the necessary permissions to execute the script.
- Ensure that your system meets the minimum requirements for running the installed tools.
- Refer to the documentation of individual tools for troubleshooting specific issues.

