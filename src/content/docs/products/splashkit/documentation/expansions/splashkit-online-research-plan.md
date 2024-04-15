---
title: SplashKit Online Research Spike Plan
---

==============

**Name:** SplashKit Online Research Spike Plan

## Context

It would be useful if SplashKit could be used directly in-browser, in order to make it easier for
people to get started without difficulties setting it up locally on their own machine. Last
trimester the SplashKit Online project was started, however due to its difficulty was placed on
hold.

The purpose of this spike is to investigate technologies that may make running it online more
viable, and explore which ways seem most promising. The main technology to be investigated here is
WebAssembly (or WASM), which was mentioned in the readme for the SplashKit-Online repository
(https://github.com/thoth-tech/SplashkitOnline). The technology itself doesn't appear to have been
used in the project; instead it seems that that project relied on both compiling _and_ executing the
code on a back-end server. This could be considered an extension of that initial research.

**Knowledge Gap:**

- It is currently unknown how well certain technologies like WASM could be used to compile/run code
  using SplashKit in a browser.
- It is unknown if code can be compiled quick enough within the browser.
- It is unknown if and how effectively SplashKit can be compiled as a library to be used within the
  browser.

**Skill Gap:**

- There is a lack of experience with technology like WASM,

**Technology Gap:**

- Ability to compile SplashKit to WASM.

It is unsure whether projects like Emscripten or Emception are able to compile SplashKit and run the
result in a browser interactively; this will need to be investigated. It is also uncertain whether
it would be better to compile within the browser itself, or on a back-end server.

## Goals/Deliverables

- Report on possible ways to continue developing SplashKit Online
  - Confirm whether code using SplashKit can be compiled with Emscripten (C/C++ to WASM compiler)
    and executed in a browser
  - Confirm whether SplashKit can be compiled and used as a library via Javascript in a browser
  - Confirm SplashKit code can be compiled in-browser using Emception (self hosted Emscripten)

**Planned start date:** Week 1 T3 2023

**Deadline:** Week 2 T3 2023

## Planning notes

- Setup Emscripten
- Confirm code using SDL can be compiled with Emscripten and executed in a browser
  - Setup simple SDL example
  - Compile with Emscripten
  - Run in browser and check result
- Confirm code using SplashKit can be compiled with Emscripten and executed in a browser
  - Setup simple SplashKit example
  - Compile with Emscripten
  - Run in browser and check result
- (Optional) Test whether SplashKit can be compiled and used as a library via Javascript in a
  browser
  - Investigate methods of binding
  - Test binding methods
- Build and setup Emception
  - Confirm SDL code can be compiled in-browser using Emception
  - Confirm SplashKit code can be compiled in-browser using Emception
