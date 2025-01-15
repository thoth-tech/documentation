# **SKM Distribution Channels Test Strategy**

## **Introduction**

The SplashKit Operations team has been undergoing work to improve the installation process of
SplashKit's management tool `skm`. Given the nature of this work (writing installation scripts),
there is no fixed testing strategy that available across all three supported operating systems
(Windows, macOS and Linux). Different tools are available for different operating systems, which is
dictated by both technology availability as well as licensing issues.

### **macOS**

[macOS cannot be legally run in a virtualised environment](https://discussions.apple.com/thread/6135949#:~:text=It%20is%20only%20legal%20to,to%20VMware%20Fusion%20and%20Parallels.)
unless the host system is also running on Apple hardware, making installation tests through
virtualisation impractical.

Whilst [unofficial docker images](https://github.com/sickcodes/Docker-OSX) for macOS exist, they are
not formally supported by Apple, making containerised testing also unviable.

As the
[installation script](https://github.com/thoth-tech/skm/blob/master/install-scripts/mac/skm-install-mac.sh)
for `skm` on macOS operates largely without changing files outside of the user's home directory,
testing the installation script is possible by first uninstalling `skm` (either using the
`skm uninstall` command or simply removing the `~/.splashkit` directory) and then re-executing the
installation script.

Static bash script analysis should be performed using [ShellCheck](https://www.shellcheck.net/) or
other available bash script analysis tool.

**Problems with this approach**

1. If the tester's system already has `git` installed, the pre-installation dependency checking and
   installation code paths will not be executed,

1. If the tester's system has previously had `skm` installed, the environment variables set by the
   installation script may remain dangling in the users shell profile file.

1. This is a manual process and the responsibility is left with the developer or reviewer to fully
   test their code. Reviewers may not have access to macOS hardware to test changes with.

### **Linux**

Linux can easily be both virtualised and containerised, meaning an automated (or semi automated)
testing strategy for the Linux installation process could be developed using virtual or container
images. Approaching Linux testing using containerisation technology such as Docker would also make
continuous integration systems a possiblity.

**Problems with this approach**

1. The complexity of setting up this test environment is arguably higher than the project itself

1. Linux has many different distributions consisting of different package managers that are used to
   install SplashKit dependencies. Docker images would need to be composed for each
   distribution/package manager combination to thoroughly test all code paths.

Since Linux closely shares it's unix file system structure with macOS, most of the macOS manual
testing methods can also be applied to Linux (for example, manually removing `~/.splashkit` and
re-executing the installation script).

Static bash script analysis should be performed using [ShellCheck](https://www.shellcheck.net/) or
other available bash script analysis tool.

**Problems with this approach**

1. If the tester's system already has dependencies of SplashKit installed, the dependency
   installation code paths of the installation script will not be executed.

1. If the tester's system has previously had `skm` installed, the environment variables set by the
   installation script may remain dangling in the users shell profile file..

1. This is a manual process and the responsibility is left with the developer or reviewer to fully
   test their code. Reviewers may have to set up a Linux environment to test changes.

### **Windows**

[ TBA ]

## **References**

1. [Legality of running macOS in virtualised environments](https://discussions.apple.com/thread/6135949#:~:text=It%20is%20only%20legal%20to,to%20VMware%20Fusion%20and%20Parallels.)

1. [Unofficial macOS docker images](https://github.com/sickcodes/Docker-OSX)

1. [ShellCheck - find bugs in your shell scripts](https://www.shellcheck.net/)

1. [Docker - containerisation technology](https://www.docker.com/)

1. [Jenkins - continuous integration technology](https://www.jenkins.io/)

1. [thot-tech/skm - Splash Kit Manager Repository](https://github.com/thoth-tech/skm)

## **QA Deliverables**

- This testing strategy planning document
- Issues reported for bugs, enhancements, usability suggestions and items picked up during code
  review
- Issues reported by `ShellCheck` for macOS and Linux installation scripts

## **Test Management**

- Git is used as the primary source code management tool for the installation of `skm`
- The installation scripts are manually tested on each operating system by the developer
- The installation scripts for macOS and Linux are processed through `ShellCheck`.

## **Scope of Testing**

- macOS and Linux are checked via static analysis with `ShellCheck`
- Testing is largely outcome based (did the installation work?)
