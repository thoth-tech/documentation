## Overview of existing installation process

First time users of SplashKit currently must pre-configure and pre-install dependencies of SplashKit
before they can proceed with the installation process. These dependencies are different on each
major operating system.

The existing installation behaviour is executed using a
[single monolithic cross-platform bash script](https://github.com/thoth-tech/skm/blob/master/install-scripts/skm-install.sh).
This script detects operating system specific requirements, and configures itself accordingly.

### Microsoft Windows

Users must install the [Msys2 development environment](https://www.msys2.org/) by downloading and
executing a GUI installer, before manually install `git` using the built-in package management
system `pacman` before proceeding to execute the SplashKit installation script.

**Potential issues**:

1. Msys2 has multiple versions supporting both x86 (32 bit) and x86_64 (64 bit) architectures. The
   user must determine the correct version to install, which may not be obvious for a less technical
   user.

1. Automated testing or validation of dependency installation is not present.

1. There are two steps required before the user can begin installing `skm`. If a user incorrectly
   executes either of these first two steps, there's a chance the installation of SplashKit won't
   succeed.

### macOS

Users must manually install Apple's XCode command line tools using the single command
`xcode-select --install` to ensure that `git` is pre-installed before proceeding to execute the
SplashKit installation script.

**Potential issues**:

1. Users are
   [prompted with a terms and conditions dialogue](https://apple.stackexchange.com/questions/337744/installing-xcode-command-line-tools)
   when installing the XCode command line tools. Some users may feel uncomfortable or not understand
   the purpose of it.

### Linux

Users must manually install two dependencies (`curl` and `git`) using the package manager supported
by their distribution before proceeding to execute the SplashKit installation script.

**Potential issues**:

1. Linux distributions don't all use the same package manager. For example, Debian-based
   distributions use `apt`, RedHat-based distribution use `rpm`, and Arch uses `pacman`. This makes
   giving users direct dependency installation instructions harder.

1. There's no automated testing or checking that the dependencies were installed correctly. For
   example, if `curl` installed correctly but `git` did not, the execution of the SplashKit
   installation script may fail in a way that is not obvious to a new user.

## The existing cross-platform bash installer

The existing
[cross-platform installation script](https://github.com/thoth-tech/skm/blob/master/install-scripts/skm-install.sh)
checks that `git` is installed, failing with an error message and suggestion to resolve the issue
when it's not.

The script checks to see if SplashKit is already installed, failing with an error message and a
suggestion on how the user can uninstall if it is already installed.

The script checks to see if the user is running either the `bash` or `zsh` shell, before appending
the SplashKit installation directory to the users `.rc` or `.profile`.

If the installation environment is running Linux, the script recommends the user run a second
post-installation command `skm linux install`. This command manages and installs build and linking
dependencies on Linux, by detecting supported package managers and installing these dependencies
using the appropriate package manger (`pacman`, `apt` or `dnf`).

**Potential issues**:

1. The suggestion provided to the user to uninstall SplashKit involves a forced recursive path
   removal (`rm -rf ~/.splashkit`). If a user mistypes this, they could potentially erase their
   entire home directory (for example, `rm -rf ~/ .splashkit` - observe the accidental space between
   `~/` and `.splashkit`)

1. If a user is executing a shell that is neither `bash` nor `zsh`, the splashkit installation
   directory will not be correctly added to users `PATH` environment variable.

1. Depending on the users `shell`, `skm` may not be available immediately after installation unless
   the user manually sources their profile again (i.e. `source ~/.bash_profile`).

1. Linux users need to run a second post-installation command to complete the SplashKit
   installation. If users don't see this suggestion, `skm` may not work.

1. Users are requested to close and open their terminal.

**Potential improvements**:

1. When `git` is not installed, the installer could attempt to automatically install it by detecting
   which operating system and package manager is available. This would remove the pre-installation
   dependency of `git`, allowing users to launch the SplashKit installer without `git`
   pre-installed.

1. When SplashKit is already installed, the installation script could prompt the user asking if
   they'd like to re-install. Re-installation and removal of the old directory could be handled by
   the script itself, removing the chance of human-error when uninstalling `splashkit` and resolving
   the first potential issue.

1. A post installation "test" could be implemented to test that SplashKit was successfully
   installed, and that `skm` can be access from the current shell environment. This would resolve
   potential issue #3.

1. Given a post installation "test" passes and `skm` is accessible, if the current environment is
   Linux, the installer could execute the post-installation command to complete Linux dependency
   installation (`skm linux install`). This would resolve potential issue #4.
