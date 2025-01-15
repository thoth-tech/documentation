# Guide to debugging SplashKit in Visual Studio Code

I'm assuming you have [VS Code](https://code.visualstudio.com/) installed and have cloned SplashKit
onto your local computer. Otherwise you can follow the
[instructions](https://github.com/thoth-tech/handbook/blob/main/docs/products/splashkit/splashkit.md)
from the [handbook](https://github.com/thoth-tech/handbook).

1. Open the SplashKit repo in VS Code, this can be done by right-clicking on the root directory and
   then clicking _Open with Code_.
   - You should see the all of the folders on the left side in the Explorer.
   - The main folders of note are:
     - `/coresdk/src/coresdk` (Which contains the core sdk code),
     - `/projects/cmake` (Which contains the compiler config),
     - `/bin/sktest.exe` (Which is the executable we will be debugging).
2. Copy the 2 included files ([`launch.json`](launch.json) and [`tasks.json`](tasks.json)) to the
   `/.vscode` folder, and create the folder if it doesn't already exist.
   - The [`tasks.json`](tasks.json) contains tasks for Running cmake and make/ninja. These can be
     accessed through the Command Palette (`F1`) by typing 'task', Space, and the command name
     (`cmake`, `Compile`, `Full Compile`).
   - The [`launch.json`](launch.json) contains the configuration for the debugger. This can be
     accessed through wither using the Run/Debug menu (`Ctrl+Shift+D`) or pressing `F5`.
3. OS Dependent issues to take care of:
   - **Windows**: If you changed the default install location of MSYS `C:/msys64/` you will need to
     manually change all references of `C:/msys64/` to the correct location.
   - **MacOS**: Install the
     [CodeLLDB](https://marketplace.visualstudio.com/items?itemName=vadimcn.vscode-lldb) extension
     from the VSCode extensions tab.
4. Otherwise you are good to go!
   - Run the `cmake` task (`F1`, then type `task cmake`), this needs to be run every time you add or
     remove files from the SplashKit repo.
   - Now you can run the launch config with `F5` or by opening the Run/Debug menu on the left menu
     bar and it should automatically compile and run the `sktest.exe` file. Very rarely this can
     fail if you try run it in quick succession, if so you can try running it again.
