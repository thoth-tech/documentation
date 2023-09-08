using SplashKitSDK;

public class Program
{ 
     public static void Main(string[] args)
    {
       
        Window menuWindow;
        menuWindow = new Window("Game Menu", 800, 600);


        Hand st = new Hand(menuWindow)
        {
            X = 115,
            Y = -371,
            //Width = 2,
            //Height = 2
        };

        while (!menuWindow.CloseRequested)
        {
            SplashKit.ProcessEvents();
            menuWindow.Clear(Color.White);
            menuWindow.FillRectangle(Color.Black, 100, 50, 600, 450);
            
            string line, name, authors;
            string[] splitLine;
            int count = 0, errors = 0;

            string fileName = @"C:\Users\loliw\OneDrive\ROMS.csv";

            try 
            {
                using (StreamReader reader = new StreamReader(new FileStream(fileName, FileMode.Open)))
                {
            
                    SplashKit.DrawText($" ************************* ", Color.White, 200, 70);
                    SplashKit.DrawText($"        GAME MENU          ", Color.White, 200, 90);

                    reader.ReadLine();
                    line = reader.ReadLine();
                    while(line != null) {
                        count++;
                        try
                        {
                            splitLine = line.Split(',');
                            name = splitLine[0];
                            authors = splitLine[1];
                            

                            SplashKit.DrawText($" * {count} ", Color.White, 200, 110+20*count);
                            SplashKit.DrawText($" --> {name}", Color.White, 230, 110+20*count);
                            SplashKit.DrawText($"{authors}", Color.White, 450, 110+20*count);
                        }
                        catch (Exception e)
                        {
                            errors++;
                            Console.Write("Error on line " + count + ":");
                            Console.Write(e.Message);
                        }
                        line = reader.ReadLine();
                    }

                    using (MemoryStream ms = new MemoryStream())
                    {
                        reader.BaseStream.CopyTo(ms);
                        byte[] data = ms.ToArray();
                    }
                }
            } catch (Exception e)
            {
                Console.Write(e.Message);
            }

            st.Draw();
            menuWindow.Refresh(60);

            st.HandleInput();
            st.StayOnWindow(menuWindow);
        }
    }
   
}

public class Hand
{
    private Bitmap handBitmap;
    private Window _menuWindow;
    
    const double space = 1.50;

    public double X { get; set; }
    public double Y { get; set; }
    public bool Quit { get; private set; }

    public int Width { get; set; }
    public int Height { get; set; }

    public Hand(Window menuWindow)
    {    
        _menuWindow = menuWindow;
        handBitmap = SplashKit.LoadBitmap("Pointer", "pinting.png");    

        X = (menuWindow.Width - Width)/2;
        Y = (menuWindow.Height - Height)/2;        
        Quit = false;

    }

    public void Draw()
    {
        SplashKit.ProcessEvents();
        SplashKit.DrawBitmap(handBitmap, X, Y);
    }

    public void HandleInput()
    {

        //string[] _data = ....;
        if (SplashKit.KeyDown(KeyCode.KeypadEnter))
        {
            //for(int i = 0; i < data.Count; i++)
            //{
            //   if(data[i].TogglePower() == SplashKit.DrawBitmap(handBitmap, X, Y))
            //   {
                    Console.WriteLine("Enter key has been pressed!!");
            //   };
            //}
        }
        if (SplashKit.KeyDown(KeyCode.DownKey))
        {
            Y = Y + space;
        }
        if (SplashKit.KeyDown(KeyCode.UpKey))
        {
            Y = Y - space;
        }
        
        if (SplashKit.KeyDown(KeyCode.EscapeKey))
        {
            Quit = true;
            Environment.Exit(2);
        }      
    }

    public void StayOnWindow(Window menuWindow)
    {
        const int GAP = -371;

        if (Y < GAP)
        {
            Y = GAP;
        }
        else if (Y > GAP + 306)
        {
            Y = GAP + 306;
        }
    }
    //public event HoverAction OnMover;

}