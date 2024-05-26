# Installation Script Documentation

## Purpose

This script automates the installation process for SplashKit, .net, C++ tools, and Visual Studio
Code (VS Code) on Windows systems using MSYS2. It ensures a seamless setup of development tools
required for software development.

## Script Details

The script is divided into several sections, each responsible for a specific task:

1. **Update package databases:** Ensures that package databases are up to date before proceeding
   with installations.
2. **Install required packages:** Installs necessary packages such as git, curl, and unzip.
3. **Install C++ tools:** Installs essential C++ development tools using `pacman`.
4. **Install .net SDK:** Downloads and installs the .net SDK using PowerShell to handle the
   installation process.
5. **Install VS Code:** Downloads and installs VS Code using PowerShell to handle the installation
   process.
6. **Install SplashKit:** Downloads and installs SplashKit using the provided installation script.
7. **Install VS Code extensions:** Installs essential VS Code extensions for C++ and .net
   development.

## Usage

To use the script, follow these steps:

1. Ensure that you have MSYS2 installed on your system.
2. Copy the script to your system or download it. Save it as `install.sh` inside your MSYS2 home
   directory (`C:/msys64/home/{username}/install.sh`).
3. Open a MINGW64 bash terminal window.
4. Go to the directory containing the script:
   ```shell
   cd ~
   ```
5. Run the script using the command:
   ```shell
   bash install.sh
   ```
6. Follow the on-screen prompts and instructions to complete the installation process.
7. After installation, restart your terminal for the changes to take effect.

## Troubleshooting

If you encounter any issues during the installation process, consider the following troubleshooting
steps:

- Check your internet connection to ensure that downloads are not being interrupted.
- Verify that you have the necessary permissions to execute the script.
- Ensure that your system meets the minimum requirements for running the installed tools.
- Refer to the documentation of individual tools for troubleshooting specific issues.
