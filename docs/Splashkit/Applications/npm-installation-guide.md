# Npm installation guide: Windows and Mac

###### (scroll down for Mac instructions)

### What does npm do?

Npm is used to check markdown files (md) to match Prettier (plug-in) and needs Node.js to run properly.

## Windows Guide

---

Open PowerShell and follow this guide: (installs WSL then WSL2)

```powershell
 wsl --install
```

```powershell
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

```powershell
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

_Restart your computer_

##### (this will take longer than usual as it is installing Linux for the first time)

Reopen PowerShell

download the [WSL2 Kernel update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

_Run the installer_ (that you just downloaded)

repond: _yes_

return to PowerShell and set WSL2 as the default

```powershell
wsl --set-default-version 2
```

## Set up Node.js on WSL 2 [follow linked guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)

1. Open Ubuntu command line
2. install cURL (used for downloading internet content in the command line)

```powershell
sudo apt-get install curl
```

1. Install nvm

```powershell
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

###### note version v0.39.1, there may be an update.

4. to verify the installation worked

```powershell
command -v nvm
```

if this does not work close the terminal, and restart from step 1.

5. input nvm ls to see current versions of Node are isntalled

```powershell
nvm ls
```

then

```powershell
nvm install --lts
```

```powershell
nvm install node
```

now try listing the versions available again

```powershell
nvm ls
```

now you should see the 2 versions you have just installed.

now check Node.js is installed with

```powershell
node --version
```

then verify npm

```powershell
npm --version
```

Continue in Ubuntu terminal following our Thoth Tech guide (Windows section):  
https://github.com/thoth-tech/handbook/blob/main/CONTRIBUTING.md

---

# Mac guide

## Install Homebrew

1. open terminal (The Terminal application is located in the Utilities folder in the Applications folder)
2. install Xcode in the [Apple App Store](http://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)
3. in terminal type:

```sh
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

4. update to latest version of HomeBrew (type in terminal):

```sh
brew update
```

5. Restart your computer (this will take longer than usual)

## Set up Node.js

6. reopen terminal and type

```sh
brew install node
```

7. wait for files to download, then when done test that it is there by typing:

```sh
node -v
```

this should return the version installed

now test npm by typing:

```sh
npm -v
```

to continue to 'Contributing to GitHub' follow our Thoth Tech guide (macOS section):

https://github.com/thoth-tech/handbook/blob/main/CONTRIBUTING.md
