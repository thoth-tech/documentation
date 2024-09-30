# Title

Date Reviewed: Reviewed by: Sana Noureen

## Description: 

This tutorial explains how SplashKit uses resource bundles to simplify loading game assets like images, animations, music, and sounds. By grouping resources into a single bundle, it reduces the complexity of managing each asset individually. The documentation lists supported resource types (e.g., ANIM, BITMAP) and provides an example bundle script with extra details for certain resources, like BITMAP for animations.

## Confirmation of Passing Quality Checks:

- [x] The tutorial is free of spelling and grammatical errors.
- [x] The tutorial is easy to follow.
- [] The tutorial has:
  - [] C# using top level statements
  - [] C++
  - [ ] Python
- [] The code passes all the Quality Checks.

## Links:

Website Link: https://splashkit.io/guides/animations/0-using-animations/#getting-it-working

Pull Request: https://github.com/thoth-tech/documentation/pull/560

## Improvements and suggestions:

If you have any suggestions for improvements or changes, add here:

- I have implemented the following c# code to understand how the loading buundles work

using SplashKitSDK;

// Load the resource bundle
SplashKit.LoadResourceBundle("myResources", "bundle.txt");

// Load images
Bitmap explosionImage = SplashKit.BitmapNamed("explosion_image");
Bitmap frogImage = SplashKit.BitmapNamed("frog_image");
Bitmap lizardImage = SplashKit.BitmapNamed("lizard_image");

// Create window
Window gameWindow = new Window("Image Loader", 800, 600);

// Set initial image to display
Bitmap currentImage = explosionImage;

while (!SplashKit.WindowCloseRequested(gameWindow))
{
    SplashKit.ProcessEvents();
    gameWindow.Clear(Color.White);

    // Draw current image
    if (currentImage != null) gameWindow.DrawBitmap(currentImage, 100, 100);

    // Switch between images using arrow keys
    if (SplashKit.KeyTyped(KeyCode.UpKey)) currentImage = frogImage;
    if (SplashKit.KeyTyped(KeyCode.DownKey)) currentImage = lizardImage;

    gameWindow.Refresh(60);
}

// Free the resource bundle
SplashKit.FreeResourceBundle("myResources");
gameWindow.Close();


This code runs well and satisfies top-level statements only rule.