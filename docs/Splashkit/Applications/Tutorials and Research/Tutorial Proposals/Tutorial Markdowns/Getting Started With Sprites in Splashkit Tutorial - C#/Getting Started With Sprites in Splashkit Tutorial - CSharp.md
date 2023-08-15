# Title: Getting Started With Sprites in Splashkit - C#

## What _is_ a Sprite in Splashkit?

A Sprite is a Bitmap. This is a bad answer to give, because the next question is, _what is a
bitmap?_ A bitmap is - in reductive terms, one of the methods of general image 'makeup' of all of
our digital images today, through which 'images' can be rendered. The other method is vector, but we
don't interact with those.

In order to be able to draw an image to a screen, we first have to provide some information to
Splashkit. We have to have Bitmap images to pass into our
[Create Sprite](https://splashkit.io/api/sprites/#create-sprite) function so that it can create a
workable _Sprite_ file type for us. This looks something like this inside our Main() method:

```c++
Private Bitmap HappySun;
Private Sprite HappySunSprite;
```

Line by line, this can be broken down as:

1. Instantiate a new Object HappySun, of Type [Bitmap](https://splashkit.io/api/types/#bitmap)

   ```c++
   Bitmap(string name, string file);
   Bitmap(string name, int width int height);
   ```

   Relevant overloads are shown above, we pass in a string name, and we can either give a filename
   to assign from a file or URL we have access to, or denote an int for width and height to have a
   workable 'empty' sprite.

1. Instantiate a new Object HappySunSprite, of Type Sprite

1. Assign to Object HappySunSprite the loaded Bitmap HappySun, using one of the overloaded
   [Create Sprite](https://splashkit.io/api/sprites/#create-sprite) methods, specifically
   [the method where we provide a String and a Bitmap object](https://splashkit.io/api/sprites/#create-sprite-named)

   ```c++
            HappySun = new Bitmap("Happy Sun", "sprite01.png");
            HappySunS = SplashKit.CreateSprite("Happy Sun", HappySun);
   ```

After these steps, we now have an instantiated Bitmap and Sprite for us to play with.

## Playing With Sprites in Splashkit

So we have a Sprite, HappySunSprite (or whatever you have named yours.) Let's create a small scene
to show it off. We'll start with creating a Window object for us to draw it onto. This can follow
after the pervious lines in our Main() method.

```c++
Window SpriteWindow;
SpriteWindow = new Window("Learning Sprites!, 800, 800);
```

As above, we create a new Object of type Window (this is important because Splashkit has specific
implementation for multi-window and window-specific method handling), and then we assign that value
with the window title of "Learning Sprites!", and give it x and y size integers, using
[Open Window](https://splashkit.io/api/windows/#open-window).

If we were to run and compile our code now for reference, it should open up an 800x800 window, of
title 'Learning Sprites!', but with nothing on the screen. In order to remedy this, we can make use
of the [Move Sprite To](https://splashkit.io/api/sprites/#move-sprite-to) and
[Draw Sprite](https://splashkit.io/api/sprites/#group-draw-sprite) methods as below:

```c++
SplashKit.MoveSpriteTo(HappySunS, 400, 400);
SplashKit.DrawSprite(HappySunS);
```

You might be wondering why we _move_ our sprite _before_ we draw it. In this instance, this is just
for clarity purposes and to have our image pop up in the middle of our window, but for future
references, if not otherwise moved with appropriate methods, Sprites begin at the origin of a given
SplashKit window (0,0 coordinates.) You can go ahead and remove the MoveSpriteTo method yourself and
see this if at all interested. It's important to note that in cases where you don't want a Sprite to
be seen at Origin point first, to move them and then Draw them to our window.

If you go ahead and compile and run the above command, you'll still see nothing in the window. This
is because we still have to do a basic
[Window Refresh](https://splashkit.io/api/windows/#refresh-window) to 'update' or 'paint' what
Sprites and where we have told SplashKit to put them. After you add these lines to our Main() :

```c++
SpriteWindow.Refresh(60);
SplashKit.Delay(5000);
```

You will see our little Sprite sitting there in the window.

![image7](image7.png)

At this point, our Main() method should look something like this:

```c++
    //Instantiation of Bitmap Object(s)
    Bitmap(string name, string file);
    Bitmap(string name, int width int height);

    //Instantiation of Sprite Object(s)
    HappySun = new Bitmap("Happy Sun", "sprite01.png");
    HappySunS = SplashKit.CreateSprite("Happy Sun", HappySun);

    //Creation of Window
    Window SpriteWindow;
    SpriteWindow = new Window("Learning Sprites!", 800, 800);

    //Set Sprite position, then draw it to the window
    SplashKit.MoveSpriteTo(HappySunS, 400, 400);
    SplashKit.DrawSprite(HappySunS);

    //Update the screen and hold
    SpriteWindow.Refresh(60);
    SplashKit.Delay(5000);

```

## Using Splashkit to move our Sprite around
