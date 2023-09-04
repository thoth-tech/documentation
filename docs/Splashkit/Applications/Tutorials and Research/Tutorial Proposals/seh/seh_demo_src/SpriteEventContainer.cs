using System;
using SplashKitSDK;

// class that bundles a event handler with sprite together
// purpose is to avoid needing to match pointer to a specific object
// so this runs a 1-1 relationship so you can directly access the sprite from the called function
public class SpriteEventContainer : IDisposable
{
    public Sprite spr;      // sprite concerning the event handler
    private SpriteEventHandler seh; // single event handler for sprite

    public SpriteEventContainer(Sprite spr)
    {
        this.spr = spr;
        seh = new SpriteEventHandler(sprCallback);  // initialise with function to call
        SplashKit.SpriteCallOnEvent(spr, seh);      // add to splashkit to start checking sprite
    }

    // in this test code, we're hard coding this behaviour for a rock bitmap from asteroids
    private void sprCallback(IntPtr ptr, int ev)
    {
        Console.Out.WriteLine("SPRITE: " + ptr + " EVENT: " + ev);

        if ((SpriteEventKind) ev == SpriteEventKind.SpriteAnimationEndedEvent) // in the test program, we start an animation by U key
        {
            if (spr.AnimationName() == "explode")           // first explode animation frame is done
            {
                spr.StartAnimation("explode2");             // start 2nd animation frame
                Console.Out.WriteLine("FIRST STAGE OF EXPLODE DONE");
                // write other functions here i.e movement layering etc, In Asteroids 3 rocks are spawned here, inbetween the animation
            }
            else if (spr.AnimationName() == "explode2")     // second explode animation frame is done
            {
                spr.StartAnimation("normal");               // return to normal cell, in Asteroids the object is disposed of here, to finish removing it from game
                Console.Out.WriteLine("SECOND STAGE OF EXPLODE DONE");
                // write other functions i.e dispose of objects, set flags etc.
            }
        }

    }

    public virtual void Dispose()   // event handler needs to be disposed, before this object is disposed
    {
        SplashKit.SpriteStopCallingOnEvent(spr, seh);
        spr.Dispose();  // probably not necessary, since it already extends IDisposable
    }


}