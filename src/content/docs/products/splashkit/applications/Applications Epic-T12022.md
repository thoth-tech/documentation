---
title: Application Epic T1-2022
---

## Background/Context

SplashKit is widely used to create 2D games. It is proposed to extend this for games to be set up
and added to a physical arcade machine where they can be played and showcased.

## Business value

Games are an attraction to different age groups, this functionality of providing games and an
article including content to help create similar games would be helpful for interested individuals.

## What needs to happen

Creating a method to upload games and store them locally on a system, have them be selected and
played at the user’s leisure. Validation checks on all uploaded games before being playable
(manually, at least initially) for malice/inappropriate content. Create a cool game demonstrating
all functionality of SplashKit. A step-by-step article guide of How to create a Cool game. Guide
should be uploaded to the SplashKit.io website. Document design decisions, process and
how-to-guides.

## In-Scope

The first game of Arcade machine. Article guide.

## Out-Scope

Building the hardware (presently; may be in scope for future trimesters)

## Assumptions/Dependencies

First game needs to be ready, in order to add it to the arcade/showcase. Raspberry Pi will merge
with preconfigured controls without too much complication

## UI/UX considerations

- Arcade layout
- Arcade gallery/selection menu UI needs to fit the SplashKit design palette, consistent with
  existing SplashKit style (matches website style, etc)
- UI should be user friendly

## Analytics considerations

Comparison of different game functionality and time management, upload/download statistics?

## Regulation & Compliance considerations

- Secure channels, hardware safety, adequate encryptions and system protection.
- User and publisher consent

## Operation/Training/Support considerations

Team members will need to become familiar with SplashKit, C++, potentially Clang (compiler). Advise
teams 2 weeks in advance of planned release

## What are the challenges?

- Existing skill gaps (team members needing to learn new languages).
- Creating the physical arcade while remote (for later stages – can't currently implement physical
  arcade aspect)
- Creating a game without knowing physical requirements

## Acceptance criteria

- Successful execution of building arcade (a user should be able to select and play a game to
  completion on a physical arcade machine)
- Functional game (written using SplashKit)
- Step by step guide on how to create game
- Channel exists for users to upload/download validated games
