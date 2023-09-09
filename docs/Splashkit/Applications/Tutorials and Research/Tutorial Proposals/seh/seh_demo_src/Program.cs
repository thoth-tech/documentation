using System;
using SplashKitSDK;

namespace SEH_test
{
    public class Program
    {
        private static SpriteEventHandler SprEveHand1, SprEveHand2;   // 
        private static List<Sprite> sprs;   // used as total collection of sprites
        private static Sprite selectedSpr;  // used by clicked event to refer to last clicked sprite
        private static SpriteEventContainer sec;    // class to pair a event handler to a sprite without having to compare pointers


        public static void Main()
        {
            Window programWindow = SplashKit.OpenWindow("KeyCallbacks", 640, 480);
            //Font f = new Font("pricedown_bl", "pricedown_bl.otf");
            
            initProgram();

            while (!programWindow.CloseRequested)
            {
                SplashKit.ProcessEvents();

                programWindow.Clear(Color.Black);

                SplashKit.UpdateAllSprites();
                SplashKit.DrawAllSprites();

                if (selectedSpr != null)    // only sprites with event handler 1 on call, last clicked, draw its boundary
                {
                    programWindow.DrawRectangle(Color.Red,selectedSpr.CollisionRectangle);
                }
                // only objects running SprEventHandler function on call will be able to be selected for this
                
                if (SplashKit.KeyTyped(KeyCode.UKey))   // start animation key for anim event test sprite event handler
                {
                    sec.spr.StartAnimation("explode");
                }
                
                programWindow.Refresh(60);
            }

            programWindow.Close();
        }

        private static void initProgram()
        {
            sprs = new List<Sprite>();
            Bitmap b = new Bitmap("circle", 50,50);

            

            b.FillCircle(Color.White, 25,25,24.99);
            sprs.Add(new Sprite(b));
            sprs.Add(new Sprite(b));
            sprs.Add(new Sprite(b));

            sprs[0].X = 100;
            sprs[0].Y = 100;
            
            sprs[1].X = 50;
            sprs[1].Y = 50;
            sprs[1].MoveTo(new Point2D{X=300,Y=50},3);      // test for sprite arrived event, overload without time taken does not call event

            sprs[2].X = 200;
            sprs[2].Y = 200;

            Bitmap ast = new Bitmap("Rock", "RockLarge.png");   // anim test event bitmap
            ast.SetCellDetails(200,200,3,3,9);

            SprEveHand1 = new SpriteEventHandler(SprEventHandler); // initialise, with function we want to call
            SprEveHand2 = new SpriteEventHandler(SprEventHandler2); // will run different function than above

            // the sprite has to be added to the list to called when an specified event happens to it
            // when an event happens, it will call the function in the event handler
            SplashKit.SpriteCallOnEvent(sprs[0],SprEveHand1);
            SplashKit.SpriteCallOnEvent(sprs[1],SprEveHand1);
            SplashKit.SpriteCallOnEvent(sprs[2],SprEveHand2);      // using a different event handler, with different function

            // class holding a sprite and a event handler, called function does not need to match sprite pointers in this way
            sec = new SpriteEventContainer(new Sprite(ast, SplashKit.LoadAnimationScript("Rock","RockLarge.txt")));
            sec.spr.MoveTo(300,300);
            sec.spr.StartAnimation("normal");

        }

        private static void SprEventHandler(IntPtr ptr, int ev)
        {   
            
            Console.Out.WriteLine("SPRITE: " + ptr + " EVENT: " + ev);
            
            if ((SpriteEventKind) ev == SpriteEventKind.SpriteArrivedEvent) // 0
            {
                // Using a move function on the sprite, when it finishes the move, this event will trigger
            }
            else if ((SpriteEventKind) ev == SpriteEventKind.SpriteAnimationEndedEvent) // 1
            {
                // Sprite has ended a animation
                // Triggers when Animation Frame has no NEXT value.
            }
            else if ((SpriteEventKind) ev == SpriteEventKind.SpriteTouchedEvent) // 2
            {
                // THIS EVENT IS CURRENTLY COMMENTED OUT IN THE SOURCE CODE
                // Splashkit and Swingame conditions are Clicked Event but with 17p radius check from mouse instead
            }
            else if ((SpriteEventKind) ev == SpriteEventKind.SpriteClickedEvent) // 3
            {
                // Mouse was clicked within 1p distance of the sprite's bitmap (excluding empty pixels)
                // no setup on the mouse's end is needed, only setting up the sprite event handler
                // could be used for UI buttons using sprites.

                // important for C#, as it is very difficult to convert the pointer back to an object
                for (int i = 0; i < sprs.Count; i++)    // one method of matching pointers, if event handler is implemented at a level where it is used by many
                {
                    if (sprs[i] == ptr) // match pointer value
                    {
                        selectedSpr = sprs[i];  // set this variable to the sprite that matched
                    }
                }
            }
            
        }

        private static void SprEventHandler2(IntPtr ptr, int ev)    // seperate function, to show that different functions can be used for sprites if you want
        {
            Console.Out.WriteLine("SPRITE: " + ptr + " I want you to do something different");
        }

    }
}
