# Emulation Station - Allow both users to control emulationstation menus

## Background
The arcade machine uses a bespoke controller for input. The controller hardware uses JoyToKey to remap joypad inputs to a emulated keyboard. Both players have separate physical controls, but the arcade sees this as a single unified keyboard. 

The user interface uses a program called emulationstation, which is in turn integrated into RetroPie. 

This has the effect of only allowing a single user to control the menu outside of games (in emulationstation). An enhancement request has been raised to add functionality where both players can control menus.


### Findings:

- Linux is only able to interact with a single keyboard. It is not possible to have two hardware keyboards, and use both for input.

- The desired functionality **is** possible with two discrete controllers. If the user connects and configures two controllers to the arcade machine, both players will be able to interact with menus independent of each other. This has been tested locally with me using a PlayStation 4 & PlayStation 5 controller connected via USB. 
   - It is also possible to use one keyboard and one controller, and have each device represent input for each player

- RetroPie & EmulationStation handle input differently. 
   - Emulationstation configs do not discriminate between player 1 and player 2 (or any number of players). Rather the config is just a series of buttons mapped to inputs.
      - Config file: `/home/$username/.emulationstation/es_input.cfg`

   - RetroPie **does** discriminate between players. Inputs are named player1_up, player1_down etc.
      - Creating additional lines in the config file for player2 controls does not affect Emulationstation I.E.
         - `player1_button_up="a", player2_button_up="z"`
      - Config file: `/opt/retropie/configs/all/retroarch.cfg`

- Modifying the Retropie config file directly does not change the Emulationstation controls. 
- Modifying the EmulationStation config directly breaks input when the program is next started. 
   - This can be fixed by resetting the config 
   - Running the script declared in this config file does not appear to update the config either
      - Shell script path: `/opt/retropie/supplementary/emulationstation/scripts/inputconfiguration.sh`
   - In order to actually update the config it seems necessary to use the input confg wizard in the GUI.


### Emulationstation input config file: 
Emulationstation holds configuration settings for user input devices in a file located here: `/home/$username/.emulationstation/es_input.cfg`. This is an XML  formatted file. Each device type creates it's own "inputConfig" section. The `id` refers to the decimal [ASCII character code](https://www.ascii-code.com/). E.G lowercase "a" has a decimal value of 97 (0x61). 

An example config file looks like this: 
```
<?xml version="1.0"?>
<inputList>
  <inputAction type="onfinish">
    <command>/opt/retropie/supplementary/emulationstation/scripts/inputconfiguration.sh</command>
  </inputAction>
  <inputConfig type="keyboard" deviceName="Keyboard" deviceGUID="-1">
    <input name="left" type="key" id="97" value="1"/>
    <input name="right" type="key" id="100" value="1"/>
    <input name="down" type="key" id="115" value="1"/>
    <input name="y" type="key" id="152" value="1"/>
    <input name="x" type="key" id="153" value="1"/>
    <input name="b" type="key" id="154" value="1"/>
    <input name="a" type="key" id="155" value="1"/>
    <input name="up" type="key" id="119" value="1"/>
    <input name="select" type="key" id="156" value="1"/>
    <input name="start" type="key" id="13" value="1"/>
  </inputConfig>
</inputList>
```

The section for controller iput looks like this:
```
<inputConfig type="joystick" deviceName="PLAYSTATION(R)3 Controller (00:48:E8:D1:63:25)" deviceGUID="060000004c0500006802000000010000">
   <input name="down" type="button" id="6" value="1" />
   <input name="up" type="button" id="4" value="1" />
</inputConfig>
```

Adding multiple "inputConfig" sections for keyboards does not work. I.E: 
```
<inputConfig type="keyboard" deviceName="Keyboard" deviceGUID="-1">
    <input name="left" type="key" id="97" value="1"/>
<inputConfig>
<inputConfig type="keyboard" deviceName="Keyboard" deviceGUID="-1">
    <input name="left" type="key" id="172" value="1"/>
<inputConfig>
```

### Outcome: 
It does not appear to be possible to implement this functionality given the current state of constituent systems & hardware limitations of the Linux kernel without significantly reworking other aspects of the Arcade Machine's hardware & software configuration. 

#### Main limiting factors are:
   - Inability to address two keyboards concurrently - This is extremely unlikely to change, and very difficult to work around
   - Limitations in ability to modify EmulationStation configs to suit arcade machine needs
   - System configuration is brittle - manually editing many of RetroPie (or constituent) configs will silently break functionality
   - Existing dependence on handling Arcade Machine input as an emulated keyboard

### Recommendations:
I would assess this enhancement as "low priority" in the grander scheme of the project. To be clear, dual user input is currently supported within SplashKit games themselves. This limitation only affects the EmulationStation overlay. Which essentially means that only player 1 has control over this menu. 

If this is deemed to be a requirement then I would recommend removing JoyToKey from the arcade machine and handling input directly as a joypad. This would also require bifurcating the two joypads into two discrete devices. As mentioned above, this would require a rework of several other systems to accommodate this change. In addition many SplashKit games would need to be reworked to handle joypad input, as most currently use Keyboard input only. 

### Links:
[Thoth-Tech doc on Arcade Machine setup](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Setup%20Arcade%20Machine.md)

[RetroPie controller documentation](https://retropie.org.uk/docs/RetroArch-Configuration/#hardcoded-configurations)

[Configuring controls in Retropie](https://retropie.org.uk/docs/Controller-Configuration/)

[Example EmulationStation es_input_cfg file](https://gist.github.com/neolao/e4d5960c4ee1e8ed5291)
