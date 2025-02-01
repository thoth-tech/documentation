---
title: Using Sprite Event Handlers
date: 2023-08-04 06:43 UTC
author: Ro
tags: sprites
summary: |
  Sprite Event Handlers are callbacks for sprites. Splashkit provides a limited number of
  Events to be listened for.
related_funcs:
  - sprite_call_on_event
  - sprite_stop_calling_on_event
---

# Sprite Event Handlers

Sprite Event Handlers are objects that contain a function to be called when Splashkit detects any of
the following events

| Name       | Trigger                                                        |
| ---------- | -------------------------------------------------------------- |
| Arrived    | Move_To with duration overload finished                        |
| Anim Ended | Frame Animation has reached last cell with no Next frame       |
| Touched    | CURRENTLY COMMENTED OUT IN SOURCE, Clicked + 17 pixels away    |
| Clicked    | Mouse Left clicked, and within 1 pixel radius of sprite pixels |

The more useful events are animation ended and clicked.

#### Arrived Event

Arrived only occurs when a Move_To function is called on the sprite with a duration overload which
tells it how many seconds to reach the new point. The current implementation of it will jump
positions every frame instead of smoothly moving like dX dY/ Velocity based movement.

#### Touched Event

Touched is as noted in the table, has currently been commented out of the source code, so it never
happens. Both it and clicked utilize the same conditions, but touched will use a larger radius
circle to check if it is in contact with a given sprite.

#### Animation Ended Event

Animation Ended is useful, if you want to code behaviour to happen at the end of a specific frame.
Anim scripts have movement vectors and link audio files to a given frame, but if you wish to check
for collisions at a specific frame end, you can set up an event handler to tell you when to do so.
**NOTE if you want this event to occur, the animation script must use frames with an empty NEXT
value, otherwise it won't recognise it ending**, thus self-looping scripted frames don't work with
this, to compensate you require the event to continue the looping.

#### Clicked Event

Clicked is self-explanatory, if the mouse left clicks on the window, Splashkit will check the point
being within 1 pixel radius away from any registered sprite. This could be used to make UI elements
for mouse, but the right click does not trigger this event. So using the input section of mouse
functions may still be better, as they have an expanded range of functions. If multiple sprites are
under the mouse, the event will be triggered for all registered sprites.

## Creating A Sprite Event Handler Fucntion

Sprite Event Handlers require a function for initialisation. This is used for Splashkit to call,
when a sprite has been registered to the event handler object.

The function has two parameters, a Integer Pointer and a Integer

```c#

  public void SpriteEventHandlerFunction(IntPtr pointer, Int event)
  {
      // your code here
  }

```

## Integer Pointer in C# Limitation

Integer Pointer is the pointer of the sprite that is linked to the event called. In C# its
usefulness is diminished As you cannot convert it back to the sprite object, you can only compare it
to the original variable.

```c#

IntPtr pointer;
Sprite spriteObject;

if (pointer == spriteObject) // check sprite has same pointer value as pointer in callback
{
  // run if matching
}

```

**THIS SECTIONS NEEDS VERIFICATION IN C++ CODE, AND MAYBE REWRITTEN**

C++ does not have this limitation and can revert the pointer back to its sprite pointer form

```c++

Sprite* spr = (Sprite*)pointer.ToPointer(); // convert IntPtr back to sprite pointer

```

## Checking the Event type

Splashkit will not limit the callback to any select event, so the function needs to filter the
integer argument to determine which event callback was for.

```c#

  public void SpriteEventHandlerFunction(IntPtr pointer, Int event)
  {
    if ((SpriteEventKind) ev == SpriteEventKind.SpriteArrivedEvent) // 0
    {
      // Move_To function finished
    }
    else if ((SpriteEventKind) ev == SpriteEventKind.SpriteAnimationEndedEvent) // 1
    {
      // Animation frame has no NEXT set
    }
    else if ((SpriteEventKind) ev == SpriteEventKind.SpriteTouchedEvent) // 2
    {
      // SRC COMMENTED OUT, Clicked + 17 pixel range
    }
    else if ((SpriteEventKind) ev == SpriteEventKind.SpriteClickedEvent) // 3
    {
      // Mouse left click, check point for sprite collision.
    }
  }

```

## Declaring and Initialising A Sprite Event Handler Object

A Sprite Event Handler needs to be declared somewhere, then initialised to be ready for registering
for an accompanying Sprite.

Be careful where you declare it, as it needs to avoid being disposed otherwise it will throw errors
by having been disposed of.

```c#

  SpriteEventHandler SEH;   // Declare

  SEH = new SpriteEventHandler(SpriteEventHandlerFunction); // Initialise

```

There shouldn't be a need to have multiple Sprite Event Handlers for a single function. As multiple
sprites can be registered for a single Sprite Event Handler, thus called for the same function.

## Registering A Sprite and Event Handler

With a initialised Sprite Event Handler, we can start registering sprites to call the function, when
a listed event occurs to them.

```c#

  SplashKit.SpriteCallOnEvent(SpriteA,SEH); // Register Sprite for an Event handler

```

Now when the listed event triggers above occur, the given sprite will call the function.

## Registering Multiple Sprite Event Handlers to one Sprite

This is an option if you want to selectively enable different behaviours by making it run a set of
functions for the events.

```c#

  SplashKit.SpriteCallOnEvent(SpriteA,SEH1);
  SplashKit.SpriteCallOnEvent(SpriteA,SEH2);
  SplashKit.SpriteCallOnEvent(SpriteA,SEH3);

```

The multiple event handlers can use different functions to be called. This could help in avoiding
monolithic blocks in a singular event handler.

Alternatively you could register them at different stages of the sprite's state.

## Deregistering Sprite Event Handlers

Splashkit needs to be updated to stop calling a Sprite Event Handler when it no longer exists,
otherwise it will cause errors when a sprite continues have events occur.

```c#

Splashkit.SpriteStopCallingOnEvent(SpriteA,SEH); // Stop sprite from calling Event Handler

```

Classes containing a Sprite Event Handler, should implement a dispose function to do this.

## Sprite and Sprite Event Handler Container

Since in C# we need to find the sprite matching the pointer, this causes some added complexity to
handle it.

As a attempt to bypass the need to match the pointer to its sprite, you can create an class that
holds a Sprite and Sprite Event Handler, then create a function to directly access the sprite in the
class.

```c#

public class SpriteEventHandlerContainer : IDisposable
{
  public Sprite spr;
  private SpriteEventHandler seh;

  public SpriteEventContainer(Sprite spr)
  {
    this.spr = spr;
    seh = new SpriteEventHandler(Callback);   // initialise with function to call
    SplashKit.SpriteCallOnEvent(spr, seh);    // add to splashkit to start checking sprite
  }

  private void Callback(IntPtr ptr, int ev)
  {
    // code specific to the sprite contained in this class.
  }

  // stop calling events on disposal
  public void Dispose()
  {
    SplashKit.SpriteStopCallingOnEvent(spr, seh);
  }

}

```

This is only a suggestion on how to handle selecting the originating sprite for callback functions.

It may also work better as an child class of Sprite.

## Animation Ended Events

As detailed above, the event animation ended, only occurs when the frame has no NEXT set to it. A
self-looping set will never trigger it.

```

f: [0-8], [0-8], 10, 1

```

If you want to trigger it at the end of the frame set, you can remove the NEXT value. But the
program then needs to handle restarting the animation if you still want it to self-loop. This can be
handled by using the animation event ended.

```

f: [0-8], [0-8], 10,

```

Now the animation will trigger it when finished.

```c#
// HANDLE SPRITE ORIGINATOR OF CALLBACK
if ((SpriteEventKind) ev == SpriteEventKind.SpriteAnimationEndedEvent) // 1
  {
    // Check which animation finished
    // Determine what to do based on it
    sprite.StartAnimation(ANIM_NAME);     // line to start next animation
  }

```

The above code is a simple example of starting another animation when the event is triggered.
Doesn't detail origin sprite selection or changing behaviour on which animation finished.

If you want the event to trigger in between the animations, it can be done by splitting the set into
two.

```

f: [0-3], [0-3], 10,
f: [4-8], [4-8], 10, 1  // remove NEXT if you want the event to happen at end too.

```

With this, the event will trigger on finishing the 4th frame of the overall animation. It still
needs code to continue into the 2nd part of the original animation set.

## C# Demonstration Program

A Splashkit Demo of Sprite Event Handler is available here **_LINK IT_**

Most of the information is found in the code commentation and console log of the application

One sprite, demonstrates the move to event with a given duration. The other two circles are static,
and have different callback functions.

All the sprites will console log in their callback function, so all of them can demonstrate the
clicked event. However two specific sprites will outline a red rectangle to directly show them
having been "selected" by being the last clicked sprite, using the first event handler. The other
two won't as their callback function differs.

Animation ended event is utilized by the bottom-most sprite, based on code from a splashkit game. It
runs a exploding animation on pressing U, which starts the animation from the main loop. This
exploding animation is composed of two frame sets, and is coded to start the 2nd part on detecting
the 1st part has finished. If you want to insert functions (i.e collision detection, state changes)
that happen at certain points of an animation you could utilize this example as a possible method.

As this is a C# program, it does not have an example of converting IntPtr into a sprite pointer.
