# How to setup Arcade Machine

## Existing Image

Download current arcade Image from here (accessible to Thoth-Tech Team Members):
https://deakin365.sharepoint.com/:u:/r/sites/ThothTech2/Shared%20Documents/SplashKit/Arcade%20Machine%20Image/ArcadeMachine.img?csf=1&web=1&e=7cuS7Z

SHA256 Hash `31f0ea11c8492000d003108bf84afbb261ad6ee7c1be989f52a2b4add9d8821e`

Use a program like [etcher](https://etcher.balena.io/) to create a bootable USB or SD card with the
Arcade image.

1. Open etcher
2. Select image
3. select target USB or SD Card
4. Click FLASH
   ![Image of the program etcher](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ScreenShotEtcher.png)
   <!-- <img src="/docs/Splashkit/Applications/Arcade Machines/Arcade Machine Setup/Images/ScreenShotEtcher.png" alt="Image of the program etcher" width="200"/> -->

These are the Credentials setup on the image

1. Local User Name: `deakin` Password: `qwerty`
1. SSH Uses Local user name and password
1. SMB Share uses Name `deakin` password `deakin`
1. WiFi SSID `Arcade1` Password `GamesAreFun`

## Manual Setup

### Load OS

1. Install Raspberry Pi OS

   - Detailed instructions on installing Raspberry Pi OS On a USB available here
     https://pimylifeup.com/raspberry-pi-boot-from-usb/

1. Plug USB into PI or Arcade Machine and follow the setup wizard
   - Current usernmae and password are `deakin` and `qwerty`
1. Update all Software to the latestes version

## Install Software

1. Install Splashkit
   - Follow the instructions here: https://splashkit.io/articles/installation/ubuntu/
   - Primarly perform steps 1 and 2, VS code is optional unless you whish to adjust programming on
     the PI directly.
1. Install Dotnet
   - refere to https://learn.microsoft.com/en-us/dotnet/iot/deployment but these are the core
     commands:
   1. Run this install script
      ```
      curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel STS
      ```
   1. Add the following to the end of the file `~/.bashrc` with these commands
      ```
      echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
      echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
      source ~/.bashrc
      ```
   1. Verify the insalation with this command
      ```
      dotnet --version
      ```
1. Install Git
   - Run the following command
     ```
     sudo apt update
     sudo apt install git
     ```
1. Install Emulation Station (using RetroPi)

   1. git clone retroPI setup
      ```
      git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git
      ```
   1. Run the setup script
      ```
      cd RetroPie-Setup
      sudo ./retropie_setup.sh
      ```
   1. select manage packages
      ![RetorPie setup Main scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ManagePackage.png)
   1. Select core

      ![RetorPie setup Manage Packages scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/CorePackage.png)

   1. Select emulationstation

      ![RetorPie setup Manage Packages scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/EmulationStation.png)

   1. Exit retroPie setup
   1. Create Emulation Station es_systems.cfg file
      ```
      nano ~/.emulationstation/es_systems.cfg
      ```
   1. Add the following to the file or downlaod a copy from
      [here](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Files/es_systems.cfg)

      ```
      <!-- This is the EmulationStation Systems configuration file. All systems must be contained within the <systemList> tag.-->

      <systemList>
          <!-- Here's an example system to get you started. -->
          <system>

              <!-- A short name, used internally. Traditionally lower-case. -->
              <name>pc</name>

              <!-- A "pretty" name, displayed in menus and such. -->
              <fullname>PC</fullname>

              <!-- The path to start searching for ROMs in. '~' will be expanded to $HOME on Linux or %HOMEPATH% on Windows. -->
              <path>/home/deakin/Games/LaunchScripts</path>

              <!-- A list of extensions to search for, delimited by any of the whitespace characters (", \r\n\t").
              You MUST include the period at the start of the extension! It's also case sensitive. -->
              <extension>.exe .sh</extension>

              <!-- The shell command executed when a game is selected. A few special tags are replaced if found in a command:
              %ROM% is replaced by a bash-special-character-escaped absolute path to the ROM.
              %BASENAME% is replaced by the "base" name of the ROM.  For example, "/foo/bar.rom" would have a basename of "bar". Useful for MAME.
              %ROM_RAW% is the raw, unescaped path to the ROM. -->
              <command>%ROM%</command>

              <!-- The platform to use when scraping. You can see the full list of accepted platforms in src/PlatformIds.cpp.
              It's case sensitive, but everything is lowercase. This tag is optional.
              You can use multiple platforms too, delimited with any of the whitespace characters (", \r\n\t"), eg: "genesis, megadrive" -->
              <platform>PC</platform>

              <!-- The theme to load from the current theme set.  See THEMES.md for more information.
              This tag is optional. If not set, it will default to the value of <name>. -->
              <theme>N64</theme>
          </system>
      </systemList>
      ```

   1. Create a folder for the games
      ```
      mkdir ~/Games
      ```
   1. Create a folder for the launch scripts
      ```
      mkdir ~/Games/LaunchScripts
      ```

## Configure Software

### Configure Emulation Station

1. Start Emulation Station enter the following command
   ```
   emulationstation
   ```
1. First time setup you will need to configure the controller

   1. Hold Down any key to start
      ![EmulationStation Configure Input Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ConfigureInput.png)
   1. Press any key to configure input

      - Recommend the Following for the Arcade Machine the rest can be skipped
        - up = up arrow
        - down = down arrow
        - left = left arrow
        - right = right arrow
        - start = escape
        - select = enter
        - A = left control
        - B = left alt

      ![Input Selection Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SetKeys.png)

   1. It will note a hotkey was not selected say yes to accept using select

1. Press Escape to bring up the menu
1. Select UI Settings
1. Scroll down to start on system and set it to PC
   ![UI Settings Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/StartOnSystem.png)
1. Go back and Quit Emulation Station

### Configure Start CLI on Boot and Network Manager

1. Launch Rasberry Pi Configuration
   ```
   sudo raspi-config
   ```
1. Select System Options

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SystemOptions.png)

1. Select Boot / Auto Login

   ![Rasberry Pi system Option Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/BootAutoLogin.png)

1. Select Console Autologin

   ![Rasberry Pi Boot Option Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ConsoleAutoLogin.png)

1. Return to main menu
1. Select Advanced Options

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/AdvancedOptions.png)

1. Select Network Config

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/NetworkConfig.png)

1. Select Network Manager

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/NetworkManager.png)

1. Select OK
1. Select Interface Options

   ![Rasberry Pi Configuration Screen with interface options selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/InterfaceOptions.png)

1. Select SSH

   ![Rasberry Pi Configuration Screen with SSH selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/EnableSSH.png)

1. Select Yes

   ![Rasberry Pi Configuration Screen with Yes selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SSHEnableScreen.png)

1. Select Ok and Finshed to exit Rasberry Pi Configuration
1. You can reboot now or later

### Setup WiFi Access Point (Optional)

This will set the PI up as a WiFi Access Point so you can SSH in when the USB ports are not
accessible Basic Guide Availble Here https://gist.github.com/narate/d3f001c97e1c981a59f94cd76f041140

Enter the following commands, the SSID is set to Arcade1 chagne the number for the macine you are
working on

```
nmcli con add type wifi ifname wlan0 con-name Hostspot autoconnect yes ssid Arcade1
nmcli con modify Hostspot 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared
nmcli con modify Hostspot wifi-sec.key-mgmt wpa-psk
nmcli con modify Hostspot wifi-sec.psk "GamesAreFun"
nmcli con up Hostspot
```

The Pi will now be broadcasting a WiFi network called Arcade1 with the password GamesAreFun

> The IP address of the Pi will be 10.42.0.1/24 this current setup does not allow for DHCP so any
> connecting client will need to manually set an IP address in use the following settings:

    IP Address: 10.42.0.2
    Subnet Mask: 255.255.255.0
    Gateway: 10.42.0.1

### Set Emulation Station as the Default Shell

1.  Change to the Retro Pi Setup Folder
    ```
    cd ~/RetroPie-Setup
    ```
1.  Run the Retro Pi Setup Script
    ```
    sudo ./retropie_setup.sh
    ```
1.  Select Configuration / Tools

    ![RetroPi Config Screen with Configuration / Tools selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigTools.png)

1.  Select Autostart

    ![RetroPi Config Screen with Autostart selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigAutostart.png)

1.  Select Start Emulation Station at boot
    ![RetroPi Config Screen with Start Emulation Station at boot selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigStartEmulationStation.png)
1.  Select Ok
1.  Select Finish
1.  Select Perform Reboot

## Installing The Splahkit Theme

1. Download the Themes folder located at: docs/Splashkit/Applications/Arcade Machines/Arcade Machine Setup/Files

2. Copy the Themes folder into your .emulationstation folder, which can be found at ~/.emulationstation on the Raspberry Pi or at %HOMEPATH%/.emulationstation on windows devices.

3. In the es_systems.cfg file, which is found in the file paths mentioned above in step 2, you will need to change the XML code for the theme to be sk.
