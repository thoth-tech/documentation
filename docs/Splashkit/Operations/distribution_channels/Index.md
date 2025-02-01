# Overview

SplashKit is a product that been developed to abstract away the complexities of programming
languages for novice programmers. However, the tool-chains and development environments required to
use SplashKit can be difficult and confusing to setup for inexperienced users. Some aspects of these
issues have already been eased through the use of SplashKit’s current install script, but it’s been
observed that the initial installation process for “skm" could be further simplified. The
Distribution Channel Team intends to improve the installation process of SplashKit for new users
across all three major operating systems; Windows, Linux and macOS. The result of these improvements
aims to be a single command or executable installation process that yields a working development
environment for SplashKit on Windows, Linux or macOS ready for the user to start using splashkit as
quickly as possible. Decreasing the friction of the installation process aims to stream-line the
setup process for new users, potentially adding both product value to SplashKit - and confidence to
new users.

## Goals and Objectives

The primary goals for the Distrobution Channels Team during the first trimester were:

- Research the existing installation process, the SplashKit management tool `skm`, and possible
  methods of improved installation on all three major operating systems.
- Research and report on current known issues with respect to the installation of SplashKit on all
  three major operating systems.
- Investigate issues with Mac M1 chip devices (ARM)
- Write and author installation scripts to resolve the known issues for the installation of `skm`
  where possible
- Document the status of the project at the end of the trimester
- Report on future possibilities

## First Trimester's Deliverables

The planned deliverables and their current status for the first trimester were

### Investigate core compilation process on Linux.

[ TBA ]

### Investigate simple one-step executable to install

The team conducted research regarding how we could modify the existing operating system installation
scripts in the `skm` project to be stream-lined and handle dependency installation automatically.
Proof of concepts solutions for the Linux and macOS intallation scripts were authored and merged
into [thot-tech/skm](https://github.com/thoth-tech/skm/).

[A report is available](research-findings/existing-installation.md) describing our research and
findings.

### Investigate existing installation for MAC

The team investigated the existing installation process on Apple devices and discovered that the
`skm` tool works out of the box for newer Apple devices that utilise Apple Silicon processors, using
Apple's
[Rosetta Translation Environment](https://developer.apple.com/documentation/apple-silicon/about-the-rosetta-translation-environment).

The team identified that the upstream project `splashkit-core` could not be compiled using Apple
Silicon devices. A patch was written and submitted to
[thot-tech/splashkit-core](https://github.com/thoth-tech/splashkit-core/pull/1) which enables
compilation under Apple Silicon devices via Rosetta.

### Is it possible for this to be simpler?

The team received additional feedback from stakeholders later in the trimester that further
simplifications should be researched through the use of platform dependent package managers such as
`apt`, `pacman`, `brew`, etc.

### Investigate existing installation for Windows?

The team investigated the current installation process for Windows and conducted research on
possible solutions for automating the installation process under Windows. The team research two
candidate approaches under Windows.

1. Utilising `powershell` as an installation script processor to automatically install `Msys2` and
   launch the existing Windows `skm` installation script, or;
2. Composing a package for the `chocolately` package manager for Windows.

[A report is available](research-findings/existing-installation.md) describing our research and
findings.

## Current status

[ TBA ]
