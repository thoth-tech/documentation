# Npm installation guide: Windows and Mac 
###### (scroll down for Mac instructions) 

### What does npm do? 

Npm is used to check markdown files (md) to match Prettier (plug-in) and needs Node.js to run properly. 

## Windows Guide                  
-----------------------------------------------------
 Open PowerShell and follow this guide: (installs WSL then WSL2)
```
 wsl --install
```

```
dism.exe /online /enable-feature /featurename:Microsoft-Windows-Subsystem-Linux /all /norestart
```

```
dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart
```
*Restart your computer*  
##### (this will take longer than usual as it is installing Linux for the first time)  

download the [WSL2 Kernel update](https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi)

  *Run the installer* (that you just downloaded)

  repond: *yes*

return to PowerShell and set WSL2 as the default
```
 wsl --set-default-version 2
 ```


## Set up Node.js on WSL 2 [follow linked guide](https://docs.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-wsl)                                                
1. Open Ubuntu command line
2. install cURL (used for downloading internet content in the command line)
```
sudo apt-get install curl
```
3. Install nvm 
```
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.1/install.sh | bash
```
###### note version v0.39.1, there may be an update.

4. to verify the installation worked
```
command -v nvm
```
if this does not work close the terminal, and restart from step 1.

5. input nvm ls to see current versions of Node are isntalled
```
nvm ls
```
then 
```
nvm install --lts
```
```
nvm install node
```
now try listing the versions available again
```
nvm ls
```
now you should see the 2 versions you have just installed.

now check Node.js is installed with
```
node --version
```
then verify npm
```
npm --version
```



Continue in Ubuntu terminal following our Thoth Tech guide (Windows section):  
https://github.com/thoth-tech/handbook/blob/main/CONTRIBUTING.md 
  


---- 
# Mac guide
## Install Homebrew 
1. open terminal (The Terminal application is located in the Utilities folder in the Applications folder)
2. install Xcode in the [Apple App Store](http://itunes.apple.com/us/app/xcode/id497799835?ls=1&mt=12)
3. in terminal type:
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```
4. update to latest version of HomeBrew (type in terminal):
```
brew update
```
 
5. Restart your computer (this will take longer than usual) 
## Set up Node.js
6. reopen terminal and type
```
brew install node
```
7. wait for files to download, then when done test that it is there by typing:

```
node -v
```
this should return the version installed

now test npm by typing:
```
npm -v
```

to continue to 'Contributing to GitHub' follow our Thoth Tech guide (macOS section):  

https://github.com/thoth-tech/handbook/blob/main/CONTRIBUTING.md 