# Automation Getting started guide

This guide is for setting up the OnTrack User Interface (UI) automation on your local machine. As
well as this it explains how the file structure is set out and how to execute the automation.

### The sections of this guide are as follows:

1. Basic rundown of Automation
1. Cloning the UI-Autoamtion repository
1. Opening the Automation in VS Code
1. Making sure everything is up to date
1. Explaining the File structure
1. How to run automation
1. Helpful resources to jumps start you experience

## Basic Automation Rundown

## Cloning the Repository

The first step that we must take is to get the UI automation onto your local Machine. To do this go
to the following link `https://github.com/thoth-tech/OnTrack-UI-Automation`. You must then Clone the
repository,

## Opening in VS Code

To open the automation folder follow:

1. Select on any file and open it in VS Code
1. Select the file explorer on the left hand side
1. Select Open Folder
1. Make sure we are inside the file we cloned
1. Select `Select Folder`

## Making sure everything is up to date

As explained about we use node as the package manager. To make sure we have all of our node
dependency we can open a terminal and run `npm install`. This downloads all the files that we have
listed in our `package.json` file into the `node_modules` folder.

## Explaining the File Structure

### wdio.conf.js

wdio.conf.js is the main configuration file for automation. This file is where we define what is run
from the specs file during execution. This also has many other used such as define how many
instances can open at the same time, the timeout for cases and log levels.

### test

The test folder holds all the file related to the test that are run. This folder is broken down into
two sub-folders; `specs` and `pageobjects`.

#### Specs

Specs is where our test case .js files are created, each `javaScript` file in this should house
linked cases. for example Login.js has a series of test cases around logins for students, staff and
administrators.

#### Page Objects

The `pageobjects` folder, is where all the page related content is held. All the `xpaths` and
functions that are used for specific pages should be held in their own .js file. For example all
functions and `xpaths` for the LoginPage should be in LoginPage.js and `NOT` in the test cases
themselves. This practise is standard for keeping code clean and editable. It allows for frequently
used functions to be called in different test cases.

### package-lock.json

This file contains the full tree of dependencies that are installed. This can be useful because we
want to make sure we have the same exact files on each system.

### package.json

package.json contains all the meta information about the project. It is also where we can update our
dependencies for example updating ChromDriver to version 106 would be done here.

### `node_modules`

All of the files installed when running `npm_install` are placed in this folder, and this is not
generally manually changed. However if issues occur with packages this can be deleted and
`npm intall` with re-create this folder with the current dependencies

### launch.json

Launch.json is where running from VS Code directly can be configured. This addition can simplify
running tests and debugging .

## How to run automation

Automation can be run by opening the terminal and running `.\node_modules\.bin\wdio` . This executes
automation based on the files in wdio.conf under specs.

### If running scripts is disabled

- [Warning] This relaxes the policy on your local for running scripts, if concerned do further
  external research.

1. Press the windows-button on your keyboard.
1. Type `PowerShell`
1. `Right-click` Windows PowerShell
1. Select Run as Administrator
1. Run the following command and confirm with `Y`

`Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope LocalMachine`

## Helpful Resources
