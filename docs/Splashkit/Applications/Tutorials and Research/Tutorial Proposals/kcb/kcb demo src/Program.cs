using System;
using SplashKitSDK;


// demonstration code for KeyCallback object
// 
namespace KCB_test
{
    public class Program
    {
        private static KeyCallback kcb_Typed;       // declare key callback object
        private static KeyCallback kcb_Down;
        private static KeyCallback kcb_Up;  
        private static String kcb_Typed_Keyname;    // string object to hold the string name
        private static int kcb_Typed_Code;
        private static int kcb_Down_Held = 0;
        private static Color textClr;

        // store colors related to keycode in dictionary object
        private static Dictionary<int,Color> kcb_Color = new Dictionary<int, Color>
            {
                {114, Color.Red},   // 114 = R
                {103, Color.Green}, // 103 = G
                {98, Color.Blue}    // 98 = B
            };

        private static Dictionary<int,Action> kcb_Up_Act = new Dictionary<int, Action>
            {
                {100, () => logging("sample text")} // 100 = D
            };


        public static void Main()
        {
            Window programWindow = SplashKit.OpenWindow("KeyCallbacks", 640, 480);
            Font f = new Font("pricedown_bl", "pricedown_bl.otf");


            // key callback initialized with function name
            kcb_Typed = new KeyCallback(KeyEventTyped);         // press
            kcb_Down = new KeyCallback(KeyEventDown);           // held
            kcb_Up = new KeyCallback(KeyEventUp);               // depress


            kcb_Typed_Keyname = "N/A";
            textClr = Color.White;

            SplashKit.RegisterCallbackOnKeyTyped(kcb_Typed);    // key callback is added to list to be called by process events
            SplashKit.RegisterCallbackOnKeyDown(kcb_Down);
            SplashKit.RegisterCallbackOnKeyUp(kcb_Up);
            
            while (!programWindow.CloseRequested)
            {
                SplashKit.ProcessEvents();

                programWindow.Clear(Color.Black);

                programWindow.DrawText(kcb_Typed_Keyname, textClr, f, 40, 200, 200);    // display the text name of the code from callback
                programWindow.DrawText(kcb_Typed_Code.ToString(), textClr, f, 40, 200, 260);    // display the code from callback
                programWindow.DrawText("Held: " + kcb_Down_Held, textClr, f, 40, 200, 320);    // display the callbacks from hold

                programWindow.Refresh(60);
            }

            SplashKit.DeregisterCallbackOnKeyTyped(kcb_Typed); 
            SplashKit.DeregisterCallbackOnKeyDown(kcb_Down); 
            SplashKit.DeregisterCallbackOnKeyUp(kcb_Up);  
            // remove key callback from being called, not important here
            // but if the object is located in an object that is disposed of
            // it can throw an error

            programWindow.Close();
        }

        private static void KeyEventTyped(int code) // key pressed
        {
            kcb_Typed_Keyname = SplashKit.KeyName((KeyCode)code);
            kcb_Typed_Code = code;

            // A dictionary can be used to avoid hardcoded specific code checks
            // instead if the key exists in the dictionary, it will extract the value
            if (!kcb_Color.TryGetValue(code, out textClr))  
            {
                textClr = Color.White;  // if not found, set to white
            }

            if (KeyCode.XKey == (KeyCode)code)  // check if X key was pressed
            {
                // insert your code here
            }
        }

        private static void KeyEventDown(int code)  // key held
        {
            kcb_Down_Held++;
        }

        private static void KeyEventUp(int code)    // key depressed
        {
            kcb_Down_Held = 0;

            Action a;
            if (kcb_Up_Act.TryGetValue(code, out a))  // using an action, to retrieve code to run from dictionary
            {
                a();
            }
        }

        private static void logging(String text)
        {
            Console.Out.WriteLine(text);
        }


    }
}
