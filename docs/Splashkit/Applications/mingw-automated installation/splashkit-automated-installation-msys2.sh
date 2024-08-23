#!/bin/bash

# Define variables
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"
dotnet_sdk_url="https://download.visualstudio.microsoft.com/download/pr/90486d8a-fb5a-41be-bfe4-ad292c06153f/6673965085e00f5b305bbaa0b931cc96/dotnet-sdk-8.0.300-win-x64.exe"
vscode_installer_url="https://aka.ms/win32-x64-user-stable"

# Update package databases
echo "Updating package databases..."
pacman -Syy

# Install required packages
echo "Installing required packages..."
pacman -S --needed --noconfirm git curl unzip

# Install C++ tools (before SplashKit)
echo "Installing C++ tools..."
pacman -S --needed --noconfirm mingw-w64-x86_64-gcc mingw-w64-x86_64-gdb mingw-w64-x86_64-make mingw-w64-x86_64-toolchain

# Check if .NET SDK is installed
if ! command -v dotnet &> /dev/null
then
    echo "Downloading .NET SDK installer..."
    curl -L $dotnet_sdk_url -o dotnet-sdk-installer.exe

    echo "Installing .NET SDK..."
    powershell.exe -Command "Start-Process dotnet-sdk-installer.exe -ArgumentList '/quiet /norestart' -Wait"
    if [ $? -ne 0 ]; then
        echo ".NET SDK installation failed. Please try installing it manually."
        exit 1
    fi

    if ! command -v dotnet &> /dev/null
    then
        echo ".NET SDK installation failed or .NET SDK is not in the PATH. Please check the installation and try again."
        exit 1
    fi
else
    echo ".NET SDK is already installed."
fi

# Check if VS Code is installed
if ! command -v code &> /dev/null
then
    echo "Downloading Visual Studio Code installer..."
    curl -L $vscode_installer_url -o vscode-installer.exe

    echo "Installing Visual Studio Code..."
    powershell.exe -Command "Start-Process vscode-installer.exe -ArgumentList '/silent /mergetasks=!runcode' -Wait"
    if [ $? -ne 0 ]; then
        echo "Visual Studio Code installation failed. Please try installing it manually."
        exit 1
    fi

    if ! command -v code &> /dev/null
    then
        echo "Visual Studio Code installation failed or VS Code is not in the PATH. Please check the installation and try again."
        exit 1
    fi
else
    echo "Visual Studio Code is already installed."
fi

# Install SplashKit
echo "Installing SplashKit..."
bash <(curl -s $splashkit_url)
echo 'export PATH=$PATH:~/.splashkit' >> ~/.bashrc
export PATH=$PATH:~/.splashkit
if [ -d ~/.splashkit/global ]; then
    echo "Installing SplashKit global"
    skm global install
fi

# Add .NET environment variables
echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc

# Install VS Code extensions
echo "Installing VS Code extensions..."
code --install-extension ms-vscode.cpptools-extension-pack
code --install-extension ms-dotnettools.csharp
code --install-extension ms-dotnettools.csdevkit
code --install-extension ms-dotnettools.vscodeintellicode-csharp

echo "Installation complete. Please restart your terminal for changes to take effect."
