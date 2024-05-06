#!/bin/bash

# Define variables
splashkit_url="https://raw.githubusercontent.com/splashkit/skm/master/install-scripts/skm-install.sh"

# Update package databases
echo "Updating package databases..."
pacman -Syy

# Install required packages
echo "Installing required packages..."
pacman -S --needed --noconfirm git curl unzip

# Install SplashKit
echo "Installing SplashKit..."
bash <(curl -s $splashkit_url)
echo 'export PATH=$PATH:~/.splashkit' >> ~/.bashrc
export PATH=$PATH:~/.splashkit
yes | skm windows install
if [ -d ~/.splashkit/global ]; then
    echo "Installing SplashKit global"
    skm global install
fi

# Install .NET
echo "Installing .NET..."
curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin
echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc

# Install C++ tools
echo "Installing C++ tools..."
pacman -S --needed --noconfirm mingw-w64-x86_64-gcc mingw-w64-x86_64-make mingw-w64-x86_64-toolchain

# Install VS Code
echo "Installing VS Code..."
curl -sSL https://code.visualstudio.com/sha/download?build=stable&os=win32-x64-user -o vscode.zip
unzip vscode.zip -d ~/vscode
echo 'export PATH=$PATH:~/vscode/bin' >> ~/.bashrc

# Install VS Code extensions
echo "Installing VS Code extensions..."
code --install-extension ms-vscode.cpptools
code --install-extension ms-dotnettools.csharp

echo "Installation complete. Please restart your terminal for changes to take effect."