#!/bin/bash

GIT_SKM_REPO=https://github.com/splashkit/skm.git

HOME_PATH=/home/vscode
INSTALL_PATH="${HOME_PATH}/.splashkit"


function report_missing_git () {
    if [[ `uname` = Darwin ]]; then
        echo "Developer tools not installed, please run: \"xcode-select --install\" in the terminal and then reinstall."
    elif [[ `uname` = MINGW* ]] || [[ `uname` = MSYS* ]]; then
        echo "Git not found. Please run \"pacman -S git --noconfirm;\" in the terminal and then reinstall"
    elif [[ `uname` = Linux ]]; then
        echo "Please install git using your package manager For example: sudo apt install git"
    fi
    exit 1
}

command -v git >/dev/null 2>&1 || report_missing_git

if [ -d "${INSTALL_PATH}" ]; then
    echo "Looks like you already have splashkit!"
    echo "To uninstall run \"rm -rf ${INSTALL_PATH}\""
    exit 1
fi

git clone --depth 1 --branch master $GIT_SKM_REPO "${INSTALL_PATH}"

# Add SKM app to path without needing sudo

# Add to .bashrc if using bash
if [[ ${SHELL} = "/bin/bash" ]] || [ ${SHELL} = "/usr/bin/bash" -a `uname` = Linux ] ; then
    echo "export PATH=\"$INSTALL_PATH:\$PATH\"" >> ~/.bash_profile
    echo "export PATH=\"$INSTALL_PATH:\$PATH\"" >> ~/.bashrc
fi


export PATH="$INSTALL_PATH:$PATH"

find "${INSTALL_PATH}" -name "*.sh" -exec chmod a+x "{}" \;

sudo apt-get update
sudo apt-get install -y cmake libpng-dev libcurl4-openssl-dev libsdl2-dev libsdl2-mixer-dev libsdl2-gfx-dev libsdl2-image-dev libsdl2-net-dev libsdl2-ttf-dev libmikmod-dev libncurses5-dev libbz2-dev libflac-dev libvorbis-dev libwebp-dev libfreetype6-dev build-essential

echo "Configuring SplashKit"
cd "${INSTALL_PATH}/source"
pwd
cmake .

if [ $? -ne 0 ]; then
  echo "Configuration failed"
  exit $?
fi

echo "Compiling SplashKit..."
make 
if [ $? -ne 0 ]; then
  echo "Compilation failed"
  exit $?
fi

echo "Installing compiled SplashKit library..."
make install
if [ $? -ne 0 ]; then
  echo "Install failed"
  exit $?
fi

echo "SplashKit Installed"

echo Installing pulseaudio
sudo apt-get install -y pulseaudio
echo PulseAudio Installed
