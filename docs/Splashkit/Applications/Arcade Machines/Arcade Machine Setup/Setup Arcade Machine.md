# How to setup Arcade Machine

## Existing Image

Download current arcade Image from here (accessible to Thoth-Tech Team Members):
<https://deakin365.sharepoint.com/:u:/r/sites/ThothTech2/Shared%20Documents/SplashKit/Arcade%20Machine%20Image/ArcadeMachine.img?csf=1&web=1&e=7cuS7Z>

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
2. SSH Uses Local user name and password
3. SMB Share uses Name `deakin` password `deakin`
4. WiFi SSID `Arcade1` Password `GamesAreFun`

## Manual Setup

### Load OS

1. Install Raspberry Pi OS
   - Detailed instructions on installing Raspberry Pi OS On a USB available
     [here](https://pimylifeup.com/raspberry-pi-boot-from-usb/).
2. Plug USB into PI or Arcade Machine and follow the setup wizard
   - Current username and password are `deakin` and `qwerty`
3. Update all Software to the latestes version

## Connect to eduroam

Two changes need to be made to allow the Pi to access the eduroam network. One to network interfaces
and one to wpa_supplicant:

1. Modify /etc/network/interfaces to bring the wlan0 interface up automatically, use DHCP and read
   from the wpa_supplicant config

   - From the console open the interfaces file:

     ```shell
     sudo nano /etc/network/interfaces
     ```

   - Copy the following text to the **bottom** of the interfaces file

     ```plaintext
     allow-hotplug wlan0
     iface wlan0 inet manual
         wpa-conf /etc/wpa_supplicant/wpa_supplicant.conf
     iface wlan0 inet dhcp
     ```

   - Press Ctrl+X to exit and press **y** when prompted to save your changes

2. Modify the wpa_supplicant with the custom eduroam config

   - From the console open the wpa_supplicant config file:

     ```shell
     sudo nano /etc/wpa_supplicant/wpa_supplicant.conf
     ```

   - Copy the following text into the wpa_supplicant file

     ```plaintext
     ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
     update_config=1

     network={
         ssid="eduroam"
         priority=1
         proto=RSN
         key_mgmt=WPA-EAP
         pairwise=CCMP
         auth_alg=OPEN
         eap=PEAP
         identity="YOURUSERNAME@deakin.edu.au"
         password="YOURPASSWORD"
         phase1="peaplabel=0"
         phase2="auth=MSCHAPV2"
     }
     ```

   - Replace **YOURUSERNAME** and **YOURPASSWORD** with the arcade machine's eduroam login
     credentials. Ensure you include the domain I.E. "<arcademachine@deakin.edu.au>"
   - Press Ctrl+X to exit and press **y** when prompted to save your changes.

3. Reboot and test network connectivity

   - Reboot the Raspberry Pi by issuing the below command:

     ```shell
     sudo reboot
     ```

   - Test network connectivity by pinging an external site, for example Google's DNS:

     ```shell
     ping 8.8.8.8
     ```

## Install Software

### 1. Install SplashKit

- Follow the instructions [here](https://splashkit.io/articles/installation/ubuntu/).
- Primarly perform steps 1 and 2, VS code is optional unless you whish to adjust programming on the
  PI directly.

### 2. Install .NET (dotnet)

- You can refer to [this page](https://learn.microsoft.com/en-us/dotnet/iot/deployment) but these
  are the core commands:

  1. Run this install script

     ```shell
     curl -sSL https://dot.net/v1/dotnet-install.sh | bash /dev/stdin --channel STS
     ```

  2. Add the following to the end of the file `~/.bashrc` with these commands

     ```shell
     echo 'export DOTNET_ROOT=$HOME/.dotnet' >> ~/.bashrc
     echo 'export PATH=$PATH:$HOME/.dotnet' >> ~/.bashrc
     source ~/.bashrc
     ```

  3. Verify the insalation with this command

     ```shell
     dotnet --version
     ```

### 3. Install Git

- Run the following command

  ```shell
  sudo apt update
  sudo apt install git
  ```

### 4. Install Emulation Station (using RetroPi)

1. git clone retroPI setup

   ```shell
   git clone --depth=1 https://github.com/RetroPie/RetroPie-Setup.git
   ```

2. Run the setup script

   ```shell
   cd RetroPie-Setup
   sudo ./retropie_setup.sh
   ```

3. Select manage packages

   ![RetorPie setup Main scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ManagePackage.png)

4. Select core

   ![RetorPie setup Manage Packages scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/CorePackage.png)

5. Select emulationstation

   ![RetorPie setup Manage Packages scree](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/EmulationStation.png)

6. Exit retroPie setup
7. Create Emulation Station es_systems.cfg file

   ```shell
   nano ~/.emulationstation/es_systems.cfg
   ```

8. Add the following to the file or downlaod a copy from
   [here](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Files/es_systems.cfg)

   ```config
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

9. Create a folder for the games

   ```shell
   mkdir ~/Games
   ```

10. Create a folder for the launch scripts

    ```shell
    mkdir ~/Games/LaunchScripts
    ```

## Configure Software

### Configure Emulation Station

1. Start Emulation Station enter the following command:

   ```shell
   emulationstation
   ```

2. First time setup you will need to configure the controller

   1. Hold Down any key to start

      ![EmulationStation Configure Input Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ConfigureInput.png)

   2. Press any key to configure input

      Recommend the Following for the Arcade Machine the rest can be skipped

      - up = up arrow
      - down = down arrow
      - left = left arrow
      - right = right arrow
      - start = escape
      - select = enter
      - A = left control
      - B = left alt

      ![Input Selection Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SetKeys.png)

   3. It will note a hotkey was not selected say yes to accept using select

3. Press Escape to bring up the menu
4. Select UI Settings
5. Scroll down to start on system and set it to PC

   ![UI Settings Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/StartOnSystem.png)

6. Go back and Quit Emulation Station

### Configure Start CLI on Boot and Network Manager

1. Launch Rasberry Pi Configuration

   ```shell
   sudo raspi-config
   ```

2. Select System Options

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SystemOptions.png)

3. Select Boot / Auto Login

   ![Rasberry Pi system Option Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/BootAutoLogin.png)

4. Select Console Autologin

   ![Rasberry Pi Boot Option Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/ConsoleAutoLogin.png)

5. Return to main menu
6. Select Advanced Options

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/AdvancedOptions.png)

7. Select Network Config

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/NetworkConfig.png)

8. Select Network Manager

   ![Rasberry Pi Configuration Screen](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/NetworkManager.png)

9. Select OK
10. Select Interface Options

    ![Rasberry Pi Configuration Screen with interface options selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/InterfaceOptions.png)

11. Select SSH

    ![Rasberry Pi Configuration Screen with SSH selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/EnableSSH.png)

12. Select Yes

    ![Rasberry Pi Configuration Screen with Yes selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SSHEnableScreen.png)

13. Select Ok and Finshed to exit Rasberry Pi Configuration
14. You can reboot now or later

### Setup WiFi Access Point (Optional)

This will set the PI up as a WiFi Access Point so you can SSH in when the USB ports are not
accessible.

[Basic Guide Availble Here](https://gist.github.com/narate/d3f001c97e1c981a59f94cd76f041140)

Enter the following commands, the SSID is set to Arcade1 - change the number for the machine you are
working on.

```shell
nmcli con add type wifi ifname wlan0 con-name Hostspot autoconnect yes ssid Arcade1
nmcli con modify Hostspot 802-11-wireless.mode ap 802-11-wireless.band bg ipv4.method shared
nmcli con modify Hostspot wifi-sec.key-mgmt wpa-psk
nmcli con modify Hostspot wifi-sec.psk "GamesAreFun"
nmcli con up Hostspot
```

The Pi will now be broadcasting a WiFi network called Arcade1 with the password GamesAreFun

- The IP address of the Pi will be 10.42.0.1/24 this current setup does not allow for DHCP so any
- connecting client will need to manually set an IP address in use the following settings:

  IP Address: 10.42.0.2 Subnet Mask: 255.255.255.0 Gateway: 10.42.0.1

### Set Emulation Station as the Default Shell

1. Change to the Retro Pi Setup Folder

   ```shell
   cd ~/RetroPie-Setup
   ```

2. Run the Retro Pi Setup Script

   ```shell
   sudo ./retropie_setup.sh
   ```

3. Select Configuration / Tools

   ![RetroPi Config Screen with Configuration / Tools selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigTools.png)

4. Select Autostart

   ![RetroPi Config Screen with Autostart selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigAutostart.png)

5. Select Start Emulation Station at boot

   ![RetroPi Config Screen with Start Emulation Station at boot selected](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/RetroPiConfigStartEmulationStation.png)

6. Select Ok
7. Select Finish
8. Select Perform Reboot

## Installing the Splashkit Theme

1. Download the Themes folder located at: docs/Splashkit/Applications/Arcade Machines/Arcade Machine
   Setup/Files

2. Copy the Themes folder into your .emulationstation folder, located at ~/.emulationstation on the
   Raspberry Pi or at %HOMEPATH%/.emulationstation on windows devices.

3. In the es_systems.cfg file, located in the file paths mentioned in step 2, you will need to
   change the XML code for the theme to be "sk."

   ![es_systems.cfg file open showing where to change the theme](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SystemThemeSetup.jpg)

4. Launch EmulationStation, open the start menu, and under UI settings change Theme set to
   "Splashkit."

   ![Theme Set selection in EmulationStation](/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Images/SettingsThemeSelection.png)
