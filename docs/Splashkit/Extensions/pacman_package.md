# Pacman Package (MSYS2 Mingw64)

## Overview

The creation of the pacman installation package aims to remove the need for Splashkit Manager (SKM)
during the installation of the toolkit. This document outlines the progression taken to complete the
[trello ticket](https://trello.com/c/lpkVBT0K) for creating a pacman package, along with the related
obstacles. All referenced files can be found in the
[splashkit-core](https://github.com/thoth-tech/splashkit-core/tree/t1-2024/tools/scripts/pacman)
repository.

## Approach

1. Research and understand the needed technical abilities to create a `BUILDPKG` that constructs the
   pacman package.

2. Create a `BUILDPKG` file that incorporates the functionality of the current SKM installation
   ([skm-install](https://github.com/thoth-tech/skm/blob/develop/install-scripts/skm-install.sh) &
   [global-install](https://github.com/thoth-tech/skm/blob/develop/global/install/skm_global_install.sh)).
   Build the package with the said functionalities.

3. Test the package by compiling [guide code](https://splashkit.io/guides/00-00-reading-text/) that
   requires the splashkit library using G++ and Clang++ compilers. Then running the compiled
   program.

4. On a separate testing device, install the package and run the above testing method ensuring it
   works when distributed to other devices.

## Creating BUILDPKG

In reference to the [MSYS](https://www.msys2.org/wiki/Creating-Packages/) &
[Arch Linux](https://wiki.archlinux.org/title/PKGBUILD) guides on creating packages, it was
determined that the `build()` portion of the `BUILDPKG` file will be used to clone the needed files
from the Github repository into the packages `/src` folder during creation. The `package()` function
then runs commands located here when the user installs the package on there device. The Splashkit
package needs to create the directories `/include/splashkit` & `/lib` within the `/msys64`
directory. Files from the `/src` file will be copied into their needed locations as per the SKM
installation. Once the files have been moved, all locations need to be added to the systems
`PATH ENVIRONMENT` variable.

## Testing Locally

The following test was done on a device to build and test the package.

`makepkg-mingw --cleanbuild --syncdeps --force --noconfirm` is ran to build the package from the
`PKGBUILD` file within the same directory. Installation of the package is done by running
`pacman -U *.pkg.tar.zst` in the same directory.

Using `clang++ <filename>.cpp -l splashkit -o <filename>` we are able to compile the guide code by
linking the Splashkit library from the `/mingw64/include` directory. Running the program using
`./<filename>.exe` successfully runs the file with full functionality.

## Distributed Testing

The following tests were done on a separate device from the one building the package.

Installation of the package is done by running pacman -U \*.pkg.tar.zst in the same directory of the
distributed package.

Using clang++ <filename>.cpp -l splashkit -o <filename> we are able to compile the guide code by
linking the Splashkit library from the /mingw64/include directory.

Running the program using ./<filename>.exe unsuccessfully runs the file. Giving error messages
related to multiple `.dll` files not being found (see [Troubleshooting](#troubleshooting)).

## Troubleshooting

The package worked different on the local testing compared to the distributed testing due to the
processes that were done on each. Local testing, on top of installing the package, also built it
from the `BUILDPKG` file. It was discovered that when the user builds the pacman package, all the
steps within the `BUILDPKG` file are run with the current users’ privileges (admin) so all commands
that require those privileges worked (commands relating to setting the systems `PATH ENVIRONMENT`
variable).

When the distributed testing is done, it does not matter whether the current environment is run as
administrator, because the pacman package opens a new environment to complete all the commands, that
does not contain admin privileges. Due to this we are unable to set the systems `PATH ENVIRONMENT`
variable within the pacman package, thus the `.dll` files are not known to the system when running
the compiled `.exe` file.

The current solution for this issue is to run
[skm-install](https://github.com/thoth-tech/skm/blob/develop/install-scripts/skm-install.sh) using
`bash curl` alongside the pacman package, as that runs with admin privileges, changing the
`PATH ENVIRONMENT` variable. However, this contradicts the original purpose of the package as it
relies on SKM to function.

In order to overcome these issues, there are a few methods that could be considered:

1. Figuring out how to place the needed `.dll` files in a location that is already part of the
   systems `PATH ENVIRONMENT` variable.
2. Depend on current MSYS2 packages during the build stage for certain .dll files
3. How to install the repo into `/msys64/home/<user>/.splashkit` dir and adding that to the
   `PATH ENVIRONMENT` variable.
