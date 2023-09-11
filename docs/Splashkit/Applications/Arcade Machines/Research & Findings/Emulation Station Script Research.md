# Emulation Station Script Research

## How to Setup A Script

1. In your ~homepath/.emulationstation folder create a new folder named scripts

2. within the scripts folder, using the table from https://retropie.org.uk/docs/EmulationStation/#scripting (Under scripting > 2. Event directories), create a new folder with the name of the event you want the script to run for.

3. Within the event folder, you can place Shell Script files that you want to run on the event.

### Notes

The scripts will need to be tested on either a raspberry pi or a linux pc, as windows does not natively support running shell scripts.

As shown by the table on https://retropie.org.uk/docs/EmulationStation/#scripting, depending on the event, certain bits of data are passed along to the script.

## Ten Minute Idle Timer

For creating the idle timer you will most likely need to have a script running from the game-start event, which passes down the %rom_path%, %rom_name%, and %game_name% arguments. as we are not using emulators testing would need to be done to see which of these arguments can be used to call a close on the opened game.

### Test Hello World Script

Below is a test script that will create a file containing the words HELLO WORLD, the #! /bin/bash line gives the script elevated permissions.
  
  #! /bin/bash

  FILE="YOUR-FILEPATH-HERE"  
  echo before  
  echo HELLO WORLD >> "$FILE"  
  echo "$*" >> "$FILE"  
  echo after  

## Useful Links

https://unix.stackexchange.com/questions/94322/is-it-possible-for-a-daemon-i-e-background-process-to-look-for-key-presses-fr  
This is a stack enchange question looking into detecting inputs on a linux/unix device, the answers talk about the filepaths for devices and gives a sample using C.

https://retropie.org.uk/forum/topic/26927/emulation-game-start-scripts-folder  
A forum post asking about some issues regarding a game-start script.
