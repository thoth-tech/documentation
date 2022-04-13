# Npm installation guide: Windows and Mac

### What does npm do?

npm is a node package manager. We use it to install and resolve package dependencies (e.g. npm install) or run arbitrary commands specified in package.json (e.g. npm run format).

## Windows Guide

Open PowerShell and follow this guide: (installs WSL then WSL2)
type the following into the terminal

```powershell
1. wsl --install
```

```powershell
2. dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

```powershell
3. dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```

4. Restart your computer

##### (this will take longer than usual as it is installing Linux for the first time)

5. Reopen PowerShell

6. download the [WSL2 Kernel update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

7. _Run the installer_ (that you just downloaded)

8. repond: _yes_

return to PowerShell and set WSL2 as the default

```powershell
9. wsl --set-default-version 2
```

## Set up Node.js on WSL 2

either follow the following steps or the official guide at: https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl#install-nvm-nodejs-and-npm

10. Open Ubuntu command line
    install cURL (used for downloading internet content in the command line)

```powershell
11. sudo apt-get install curl
```

Install nvm

```powershell
12. curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```

###### note version v0.39.1, there may be an update.

to verify the installation worked

```powershell
13. command -v nvm
```

if this does not work close the terminal, and restart from step 10.

input nvm ls to see current versions of Node are isntalled

```powershell
14. nvm ls
```

then

```powershell
15. nvm install --lts
```

```powershell
16. nvm install node
```

now try listing the versions available again

```powershell
17. nvm ls
```

now you should see the 2 versions you have just installed.

now check Node.js is installed with

```powershell
18. node --version
```

then verify npm

```powershell
19. npm --version
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
