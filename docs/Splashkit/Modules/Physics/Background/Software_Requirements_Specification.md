# Software Requirement Specification (SRS) Document Template

## 1. Introduction

### 1.1 Purpose

Developers using SplashKit for 2D games have to create their own methods when wanting to add
realistic physics in their game. A dedicated Physics module would allow developers to integrate real
world physics attributes to sprites and objects in their projects.

### 1.2 Intended Audience

The intended audience for this project is users of SplashKit who want to create games. Users can
fall on a spectrum between two levels of experience:

- Users with no experience who just want to make a game
- Users with lots of experience in creating different physics mechanics in games but do not have the
  time to create their own methods for their project.

### 1.3 Intended Use

The modules intended use is for the addition of realistic physics actions and reactions to 2D games
created with SplashKit. A variety of methods allows physics attributes to be added to any object or
sprite created in a SplashKit project.

### 1.4 Scope

The scope of the project is to update current physics attributes that exist in SplashKit and begin
building a core range of methods. These methods include:

- Gravity
- Sinking
- Projectile motion
- Collisions
- Momentum
- Push
- Velocity
- Acceleration
- Free Falling
- Density
- Impulse

### 1.5 Definitions and Acronyms

#### Definitions

- Gravity: Acceleration force exerted on an object by another body mass (acceleration of ball
  falling to earth)
- Sinking: Process of a body being immersed in a liquid and reaching the bottom of the liquid
  container. Happens if the density of the body is greater than the density of the liquid, otherwise
  the body remains buoyant.
- Projectile Motion: Path of an object that is launched with an angular trajectory and is only
  affected by gravity. Path resembles an arc.
- Collisions: Sudden, forceful coming together in direct contact of two bodies
- Elastic collision: Collision where there is no net loss of kinetic energy in the system.
- Inelastic collision: Collision where part of the kinetic energy in the system is changed to some
  other form of energy.
- Kinetic energy: Energy of motion (observable as movement of an object).
- Sprite: An image on screen that can move.
- Momentum: A property of a moving body that determines the length of time required to bring it to
  rest under the act of a constant force
- Force: A push or pull on an object with mass that causes it to change velocity.
- Push: A force that changes the direction of an object away from you.
- Pull: A force that changes the direction of an object towards you.
- Speed: The rate of change of position of an object in any direction. Measured as a ratio of
  distance covered to the time it took to cover that distance.
- Velocity: The rate of change of position of an object in a specific direction. Measured as the
  ratio of the vector distance from origin to the time it took to get to the current location.
- Acceleration: The rate of change of velocity of an object. Measured as a ratio of the final
  velocity minus the starting velocity to the time elapsed.
- Free Falling: An object that is falling under the sole influence of gravity.
- Terminal Velocity: When the speed of a moving object is no longer increasing or decreasing. In
  other words the objects acceleration is 0.
- Density: How compact or concentrated an object is. Measured as mass per unit volume. If two
  objects are the same size but have different densities, the higher density object is heavier.
- Impulse: Overall effect of a force acting over time. Also known as change in momentum. Measured as
  the ratio of the change in force to the change in time.

#### Acronyms/Symbols

- m: metres. Distance measurement.
- km: kilometres. Distance measurement. Equal to 1000 metres.
- g: grams. Mass measurement.
- kg: kilograms. Mass measurement. Equal to 1000 grams.
- m/s or ms^-1: metres per second. Units for speed and velocity
- m/s^2 or ms^-2: metres per second squared. Units for acceleration

## Overall Description

### 2.1 User Needs

The user requirements for this module are that the module must be usable by game programmers that
use Splashkit. These requirements include:

- Wrapper for the user's game to be implemented by the user
- Each physics attribute can be implemented using a single method call
- Methods must be compatible with existing sprite, bitmap and physics structures.
  - Where appropriate attributes can be added, but should be avoided if basic alternative is
    available.
- Default values for gravity and liquid density constants are set to earth and water respectively.
- Use of physics methods on individual shapes, bitmaps and sprites only.
- Length scale is settable by the user

### 2.2 Assumptions and Dependencies

This module has a few assumptions. These include:

- Default gravity is standardised to Earths value (9.8 m/s/s/).
- Separate physics methods should be able to coexist without breaking.
- Surface area to be used instead of volume

## System Features and Requirements

### 3.1 Functional Requirements

- Each physics method to be activated with a single method call
- Functional tests created for each method
- Unit tests created for each method
  - Logging created where possible
  -

### 3.2 External Interface Requirements

N/A

### 3.3 Nonfunctional Requirements

- Methods for physics attribute calculations should be as reusable as possible
  - Not passing through specific objects (for example sprites)
- Module should be compatible with each operating system
- Methods do not slow performance of program.
- Module and methods are scalable for future complexity increases
- Code is readable and commented thoroughly to make it easier to maintain
