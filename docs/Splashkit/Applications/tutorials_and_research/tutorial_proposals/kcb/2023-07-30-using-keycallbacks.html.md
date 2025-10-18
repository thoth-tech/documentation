---
title: Using Key Callbacks
date: 2023-07-30 06:21 UTC
author: Ro
author_url:
tags: input
summary: |
  Key Callbacks provide a method to indirectly run commands based on detected key events.
  Instead of directly checking the state of a key press, process event will run the callback function
  when it detects the event depending on the type it has been registered for.
related_funcs:
  - register_callback_on_key_down
  - register_callback_on_key_typed
  - register_callback_on_key_up
  - deregister_callback_on_key_down
  - deregister_callback_on_key_typed
  - deregister_callback_on_key_up
---

Key Callbacks are essentially function calls for when process event function detects any of the
three types of events. Using this object, we can avoid directly checking for key states every frame
ourselves.

These are the three event types that are available for callback

| Name  | Trigger        |
| ----- | -------------- |
| Down  | Key is held    |
| Typed | On key press   |
| Up    | On key release |

Note that down has a small pause before continuous calling. Multiple held keys do not increase rate.
Depending on keyboard N-key rollover, it may also stop when a set of keys held, some are released.

## Creating A Callback Function

To start using key callbacks, we need a function that has the structure the object is expecting.

This entails a single integer parameter and a void return type.

```c#

  public void KeyEvent(int code)
  {
      // your code here
  }

```

## Selecting A Key

The function when registered will run regardless of which key initiated the event. So it is
necessary to check what key the callback refers to, if your code is to change its behaviour based on
the key given.

The integer "code" argument represents the key that triggered the event, and can be type casted into
KeyCode for direct comparisons to specific keys.

```c#

  public void KeyEvent(int code)
  {
      if ((KeyCode)code == KeyCode.AKey)
      {
          // your code if A key here
      }
  }

```

Alternatively, you can utilize collection objects to dynamically check if an entry exists for a
given code. In this C# example, a dictionary object is used as it cannot have entries with identical
keys and has try functions, that automatically retrieve the value into a variable while returning a
boolean if it was successful.

```c#

    private Dictionary<int,Color> dict = new Dictionary<int, Color>
    {
        {114, Color.Red},   // 114 = R
        {103, Color.Green}, // 103 = G
        {98, Color.Blue}    // 98 = B
    };
    private Color clr;

    public void KeyEvent(int code)
    {

        if (!dict.TryGetValue(code, out clr))   // clr will receive a default value, if code isn't found
        {
            clr = Color.White;  // instead of default value, we change it to this
        }
    }

```

The KeyCode enumerable can be used instead for the dictionary keys, and can help limit the key value
pairs.

## Declaring And Initialising A KeyCallback object

Once you have a function to be used for callbacks, a KeyCallback object is needed to refer to the
function and be registered for process event to be aware of.

```c#

public KeyCallback kcb;

kcb = new KeyCallback(KeyEvent);  // put the name of your function inside

```

## Registering a Key Callback Object

With an initialised Key Callback object, we need to register it for process event to use it.

```c#

Splashkit.RegisterCallbackOnKeyTyped(kcb);  // call on press

Splashkit.RegisterCallbackOnKeyDown(kcb);   // call on hold

Splashkit.registerCallbackOnKeyUp(kcb);     // call on lift

```

The above example, will start running the function kcb contains. The event typed specifies when any
key is initially pressed down, as shown in the table above.

While you can register the same object for all three events, doing so may be at odds with its
design. As normally you would want different behaviours based on the different events.

## Deregistering a Key Callback object

When you want a callback to stop being called by process event, you need to run the deregister
function to do so.

```c#

Splashkit.DeregisterCallbackOnKeyTyped(kcb);  // stop calling on press

Splashkit.DeregisterCallbackOnKeyDown(kcb);   // stop calling on hold

Splashkit.DeregisterCallbackOnKeyUp(kcb);     // stop calling on lift

```

If you did register it for multiple event types, you need to run it for each type as well to
completely remove it from being called.

Such examples of when this is necessary is if you were to switch between menus that have their own
behaviours.

Deregister is important if you implement Key Callbacks in classes that are disposed of. As process
event will throw an error trying to reach the callback.

## C# Demonstration Program

A Splashkit Demo of Key Callbacks is available here LINK IT

The code showcases the process event running the callback functions by displaying the last key
detected with its related integer code. The Down and Up callbacks are linked to a incrementing
counter based on how many callbacks for Down Event receive before any key is released.

## Storing Key Codes outside of program

If you want to store a keycode in JSON, an integer is recommended. Strings can still be used to
compare, but need extra work to be converted back into Key codes, since there isn't a Splashkit
function to convert string into key code, only from key code into string.

A table to lookup the numeric value of a key can be found here LINK IT
