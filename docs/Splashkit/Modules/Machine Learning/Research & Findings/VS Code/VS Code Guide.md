# Guide to debugging SplashKit in Visual Studio Code

*Note that this guide is for* **Windows** *only*

I'm assuming you have [VS Code](https://code.visualstudio.com/) installed and have cloned SplashKit onto your local computer. Otherwise you can follow the [instructions](https://github.com/thoth-tech/handbook/blob/main/docs/products/splashkit/splashkit.md) from the [handbook](https://github.com/thoth-tech/handbook).

1. Open the SplashKit repo in VS Code, this can be done by right-clicking on the root directory and then clicking *Open with Code*.  
	* You should see the the all of the folders on the left side in the Explorer.
	* The main folders of note are: 
		* `/coresdk/src/coresdk` (Which contains the core sdk code), 
		* `/projects/cmake` (Which contains the compiler config), 
		* `/bin/sktest.exe` (Which is the executable we will be debugging).
2. Copy the 2 included files (`launch.json` and `tasks.json`) to the `/.vscode` folder, and create the folder if it doesn't already exist.
	* The `tasks.json` contains tasks for Running cmake, Compiling, and Running the `sktest.exe` file. These can be accessed through Quick Open (`Ctrl+P`) by typing 'task', Space and the command name (`cmake`, `Compile`, `Run`).
	* The `launch.json` contains the configuration for the debugger. This can be accessed through wither using the Run/Debug menu (`Ctrl+Shift+D`) or pressing `F5`.
3. Before we try to run those we need to first locate the msys2 installation, if you changed the install location from the default `C:/msys64/` you will need to manually change all references to `C:/msys64/` to the correct location.
4. Otherwise you are good to go!
	* Run the `cmake` task (`Ctrl+P`, then type `task cmake`), this needs to be run every time you add or remove files from the SplashKit repo.
	* Now you can run the launch config with `F5` and it should automatically compile and run the `sktest.exe` file. Sometimes this will fail especially if you run it in quick succession, if so you can try running it again.
