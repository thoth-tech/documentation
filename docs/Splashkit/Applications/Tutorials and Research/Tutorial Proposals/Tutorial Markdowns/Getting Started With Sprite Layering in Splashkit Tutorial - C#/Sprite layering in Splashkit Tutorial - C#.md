# Getting Started With Sprite layering in Splashkit - C#

## Understanding Sprite Layers

If you're reading this, you probably have some idea as to the general make up of `Bitmap` and
`Sprite` instantiation in SplashKit. You might have wondered on how to functionally have `Sprites`
show and disappear as a whole, or wondered if having multiple visual elements meant `Sprite` data
management protocols for each element, rather than packs or layers. Funnily enough, SplashKit has
`Sprite Layer` functionality.

Initially, we can start our code off as is probably expected, assumption being you have at least two
bitmap objects to reference and have appear "on top" of each other, and have it make some sense. For
us, it's going to be a man, a cowboy hat, and a sherrif's badge. We can start off with simple
initialization of our bitmaps, and even our `Sprite` that we will assign our layers to.

```csharp
//Creation of Window Object to showcase sprites and layers
Window spriteLayers = new Window("Layering with Sprites!", 800, 800);

//Instantiation of each bitmap used for CreateSprite() and SpriteAddLayer()
Bitmap bodyBit = new Bitmap("base body", "sprite01.png");
Bitmap hatBit = new Bitmap("base hat", "sprite02.png");
Bitmap starBit = new Bitmap("base star", "sprite03.png");

Sprite bodySprite = SplashKit.CreateSprite("body", bodyBit);                // layer idx 0, name body
```

It isn't explicitly said anywhere, but SplashKit creates Sprite objects with a 0th indexing layer.
Since SpriteKit also has functionality for either index or layer name referencing, we can assign a
name for easier understanding, but we're going to be explicitly referencing the indexes of our
bitmap layers from now on.

With our code at this stage, we basically just have a single-layered `Sprite`. Useful for some
cases, but let's say we want to have user input, or specific functionality of the game "show" layers
of a singular `Sprite`? Well, using our already-defined bitmaps, it's relatively simple.

```csharp
SplashKit.SpriteAddLayer(bodySprite, hatBit, "hat");                        // layer 1
SplashKit.SpriteAddLayer(bodySprite, starBit, "star");                      // layer 2
```

Using `SplashKit.SpriteAddLayer(Sprite, Bitmap, name)`, with our according parameters, we can add
layers to our first `Sprite` object for later use. For reference, if you'd like to confirm that the
layer indexes are correct, or see for yourself for debugging / testing purposes, the function
`SpriteAddLayer()` has a return type of an integer, which corresponds to the assigned layer index
value, which can be wrapped as:

```csharp
SplashKit.WriteLine(SplashKit.SpriteLayerCount(bodySprite));
```

## Showing and manipulating layers

So now we have our created `Sprite`, our layers, and we can get to drawing our content to the
screen, simple enough, right?

```csharp
SplashKit.DrawSprite(bodySprite);
spriteLayers.Refresh();
SplashKit.Delay(2000);
```

And, our layers aren't showing. It's important to know that layers aren't shown by default, so in
order to show our added layers to our initial `Sprite` object, we call a function called
`SplashKit.SpriteShowLayer(Sprite, idx);` with our parameters. For us, this looks something like:

```csharp
SplashKit.SpriteShowLayer(bodySprite, 1);
SplashKit.DrawSprite(bodySprite);
spriteLayers.Refresh();
SplashKit.Delay(2000);
```

Referencing the 1st layer (remember, 0th based indexing from initialization of a `Sprite` object),
and then re-drawing and refreshing our screen will have the second layer show up as well. Copying
this code for our third, our Man slowly puts on his cowboy hat and earns his sheriff badge.

But what if you want to hide a layer afterwards? Maybe our Sheriff loses his hat, or his badge? It's
simple enough, we can just call a `SplashKit.SpriteHideLayer(Sprite, idx)` function as follows:

```csharp
SplashKit.SpriteHideLayer(bodySprite, 2);
SplashKit.DrawSprite(bodySprite);
spriteLayers.Refresh();
SplashKit.Delay(2000);
```

Running and compiling this you'll notice an error, we're not clearing our screen, so when we hide a
layer and redraw, the older drawn `Sprite` that had the layer shown is still visible, causing some
visual discrepencies. This is easily fixed by just adding a `SplashKit.ClearScreen(Color.White)`
line before we draw our sprite with `DrawSprite()`. And the final output is as such (your sprites
will be different, but the functionality should be the same):

![gif of final output](spritelayerfinal.gif)

Final code snippet is as follows:

```csharp

using System;
using SplashKitSDK;

namespace spritelayering
{
    public class Program
    {
        public static void Main()
        {

            //Creation of Window Object to showcase sprites and layers
            Window spriteLayers = new Window("Layering with Sprites!", 800, 800);

            //Instantiation of each bitmap used for CreateSprite() and SpriteAddLayer()
            Bitmap bodyBit = new Bitmap("base body", "sprite01.png");
            Bitmap hatBit = new Bitmap("base hat", "sprite02.png");
            Bitmap starBit = new Bitmap("base star", "sprite03.png");

            //Creating initial Sprite and adding Layers
            Sprite bodySprite = SplashKit.CreateSprite("body", bodyBit);                // layer 0
            SplashKit.SpriteAddLayer(bodySprite, hatBit, "hat");                        // layer 1
            SplashKit.SpriteAddLayer(bodySprite, starBit, "star");                      // layer 2

            //Initial draw: one (base) layer shown
            SplashKit.DrawSprite(bodySprite);
            spriteLayers.Refresh();
            SplashKit.Delay(2000);

            //First re-draw, two layers shown
            SplashKit.SpriteShowLayer(bodySprite, 1);
            SplashKit.ClearScreen(Color.White);
            SplashKit.DrawSprite(bodySprite);
            spriteLayers.Refresh();
            SplashKit.Delay(2000);

            //Second re-draw, three layers shown
            SplashKit.SpriteShowLayer(bodySprite, 2);
            SplashKit.ClearScreen(Color.White);
            SplashKit.DrawSprite(bodySprite);
            spriteLayers.Refresh();
            SplashKit.Delay(2000);

            //Third re-draw, two layers shown, one removed
            SplashKit.SpriteHideLayer(bodySprite, 2);
            SplashKit.ClearScreen(Color.White);
            SplashKit.DrawSprite(bodySprite);
            spriteLayers.Refresh();
            SplashKit.Delay(2000);
        }
    }
}
```
