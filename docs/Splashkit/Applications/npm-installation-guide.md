# npm installation guide

npm is a node package manager. We use it to install and resolve package dependencies (e.g.
`npm install`) or run arbitrary commands specified in `package.json` (e.g. `npm run format`).

## Windows Guide

### Install Windows Subsystem Linux (WSL)

Open PowerShell and follow this guide:

1. Install WSL.

   ```powershell
   wsl --install
   ```

1. Enable the Windows Subsystem for Linux.

   ```powershell
   dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
   ```

1. Enable Virtual Machine feature.

   ```powershell
   dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
   ```

1. Restart your computer (this will take longer than usual as it is installing Linux for the first
   time).
1. Download the
   [WSL2 Kernel update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi).
1. Run the installer. Respond _yes_.
1. Return to PowerShell and set WSL2 as the default.

   ```powershell
   wsl --set-default-version 2
   ```

1. Follow the official
   [guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm)
   to install node.js and npm on WSL2.

## Mac Guide

### Install Homebrew

1. Open terminal (The Terminal application is located in the Utilities folder in the Applications
   folder)
1. Install Xcode from the
   [Apple App Store](http://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)
1. In the terminal type:

   ```shell
   ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
   ```

1. Update to the latest version of Homebrew (type in terminal):

   ```shell
   brew update
   ```

1. Restart your computer (this will take longer than usual)

### Set up Node.js

1. Open terminal and type

   ```shell
   brew install node
   ```

1. Wait for files to download, then when done test that it is there by typing:

   ```shell
   node -v
   ```

   this should return the version installed

1. Test npm by typing:
   ```shell
   npm -v
   ```
