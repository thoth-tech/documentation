## Software Requirements Specification 14/04/2022

Anthony George - 220180567  
Riley Dellios - 219191105  
Nick Agiazis - 219166833  
Sarah Gosling - 220094149  
Morgaine Barter - 218342547  
Lily Lan - 220340119  
Bella Chhour - 218620536  
Nguyen Quoc Huy Pham - 219453121

## Introduction

Every Deakin student that has completed unit SIT102 is required to demonstrate their skills and
experience through the development of a game using the Splashkit library. We’ve had the privilege of
seeing screenshots and captures of these awesome projects, but very rarely have we had the
opportunity to play these games.

The main purpose of this project is to provide a platform for these students to showcase their
original Splashkit developments in an eye-catching, easy-to-use application. This application can
then be deployed on different hardware systems, allowing future development to take this to the next
level by creating a physical Arcade machine for Deakin!

This also gives students motivation to continue to develop and refine game projects.

## Intended Audience

The main intention is to allow a wide demographic to contribute to the Arcade machine with their own
Splashkit game developments.

It will be a great showpiece for Deakin open days, where the public and aspiring students can
experience the creation of past students.

Games are an attraction to different age groups, this functionality of providing games and an
article including content to help create similar games would be helpful for interested individuals.

## Intended Use

Ideally, any Deakin student may download and run the application on their respective device, so even
cloud students will get the opportunity to play the game their friend made! The application will
store all eligible student creations and support the selection and launching of games.

We will initially be developing the application specifically for Windows machines, but the intention
is that the application will be compatible across the three major operating systems, Windows, OSX
and Raspbian which will be great to advertise what is possible with SplashKit to future students.

The intended use for the how-to-build-a-game documentation is to help guide beginner programmers in
making 2D games using SplashKit.

We aim to showcase all SplashKit functionality across different games and provide examples/use cases
to use alongside the SplashKit.io documentation for faster upskilling of future students (and will
be uploaded to SplashKit.io in the future if of a high standard).

This will also provide detailed information on the requirements for the application to be deployed
on the Arcade Machine.

## Scope

This trimester we will endeavor to construct a prototype of the application as well as GitHub
repository, with clear instructions for students to upload their game creations. A Windows
application which will automatically fetch new games from the repository and load them into the
Arcade machine menu. This application will also allow users to select a game of their choice, start
and play the game, and allow for audio options and window control.

Next trimester the company intends to construct a physical Arcade Machine to run the software, prior
to this development software changes may be required to port the application from Windows to the
Linux environment. Machine to laptop testing compatibility (key changes for buttons, and joystick)

Next year and beyond (out of current scope) we aim to keep adding different arcade games to the
machine and test on physical machine.

## Definitions and Acronyms

PR = pull request

QA = Quality Assurance

SRS = Software Requirements Specification (document/md file for SplashKit Applications)

2D = Two Dimensional

RPi = Raspberry pi

API = Application Programming Interface

## Overall Description

## User Needs

There are several distinct types of users we need to cater for, the user (student) that is intending
to showcase their Splashkit game creation on the Arcade machine, and the user (anyone) that wishes
to play the games. Then there are software developers and engineers who wish to create their own
Arcade machine.

Students wanting to contribute a game will require documentation to outline the methodology and
requirements to do so.

Students wanting to develop games will require documentation outlining the best methods of utilizing
the SplashKit API

A friendly user interface for the Arcade Machine.

## Assumptions/Dependencies:

We assume that most users interested in running the software application will be using a Windows
machine. As such, for the scope of this project, a dependency will be to have a functioning Windows
environment.

We will need to have at least game ready in order to add it to the arcade/showcase.

We assume most games created will be in 2D and will follow the template provided.

We also assume that the Raspberry Pi will merge with preconfigured controls without too much
complication.

## UI/UX considerations:

• Arcade layout - o Arcade gallery/selection menu UI needs to fit the SplashKit design (palette,
consistent with existing SplashKit style (matches website style, etc) • UI should be user friendly

## System Features and Requirements

## Functional Requirements

There are some requirements.

Students intending to contribute their game to the platform must abide by the guideline requests in
the GitHub repository documentation.

Some of these requirements include:

- Inclusions to the program.cpp file of the student’s game
- ESCAPE_KEY included in quit options,
- Window dimensions to be defined addressing guideline request
- Student must fill out the configuration file to include in PR
- Pull request to the repo
- Arcade machine will have joystick, plus four to six buttons. Games can have the capability to use
  left, right, up, down plus any use of the four buttons (e.g., jump, fire, etc.) -Arcade machine
  will require a button specifically dedicated to opening a ‘menu’ Arcade Machine software
  functionality: • Must contain an interface which permits selection of games? - terrible wording •
  Straightforward process to download games and receive updates • A manually/automatically vetted
  process which imports games into the library
- must be an interactive game/ handles player input (1 or 2 players on one machine)
- no idle games as this does not fit the arcade game requirements

## External Interface Requirements

- Window size set to 1920 x 1080 (16:9) HDMI, this is a standard laptop pixel width and height.
- When creating the window use function toggle_window_border() to remove the minimize, maximize and
  exit options from the game window visually
- Also, centre the placement of the window and give it a name using the function
  window_position_named()

## System Features

- Software to eventually be deployable on Raspberry Pi to create a physical Arcade Machine
- Must demonstrate SplashKit functionality within the code.
- Arcade machine must understand/accept SplashKit resources
- Staying Networked (Network accessed forever)

## Nonfunctional Requirements

How-to-build documentation for games created so that future students can understand the steps
involved in recreating the game themselves with screenshots and/or video explanation to help show
the process/outline clearly. Guides should be at a beginner's level of programming and could be used
to create their own custom games with a step-by-step plan for which order they should do this in.
For this reason, games have been designed in 2D as this is most common for SplashKit but are not
limited to.

References:
https://www.perforce.com/blog/alm/how-write-software-requirements-specification-srs-document
(template found at:
https://github.com/thoth-tech/handbook/blob/main/docs/processes/quality-assurance/templates/srs-template.md
)
