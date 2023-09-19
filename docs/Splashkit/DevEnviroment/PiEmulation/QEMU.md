# Guide to Raspberry Pi Emulation on QEMU

This guide will walk you through the process of emulating a Raspberry Pi 3B+ using QEMU, an
open-source emulator capable of running virtual machines on various architectures, including ARM,
the architecture used by Raspberry Pi.

## Install QEMU

Start by installing QEMU on your computer. You can download the latest version of QEMU from the
official website [here](https://www.qemu.org/download/).

![](/images/installqemu.png) _You may need to confugure environment variables for the qemu to
aactually work in any sub directory_ Windows:

![](/images/environment.png)

## Download the Raspberry Pi Image

Obtain a Raspberry Pi image file that you want to emulate. You can find official Raspberry Pi images
on the Raspberry Pi website or from other reliable sources. Visit the official Raspberry Pi website
[here](https://www.raspberrypi.com/software/operating-systems/) for available images.

## Set Up the Image

Extract the necessary files from the Raspberry Pi image, including the kernel and device tree. These
files are essential for the emulation process.

Extract the image, to view two image files. _Here 0.fat has kernels, and hardware configs_ while
1.mg is bootable image.

![](/images/filestructure1.png) Extract the highlighted files from the image. (_You may choose the
raspberry you want to target._)

![](/images/filestructure1.png)

Following should be the final file structure. ![](/images/filestructure1.png)

## Configure QEMU

Use the QEMU command-line interface to configure the emulation settings. Specify the Raspberry Pi
model you want to emulate, allocate the amount of RAM, and set other relevant parameters. Below is
an example command for emulating a Raspberry Pi 3B+:

**Copy code** (_Change the configuration if you wish for other devices than 3B+, otherwise ignore_)

```shell
qemu-system-aarch64 -machine raspi3b -cpu cortex-a72 -dtb bcm2710-rpi-3-b-plus.dtb -m 1G -smp 4 -serial stdio -kernel kernel8.img -sd ./2023-05-03-raspios-bullseye-arm64.img -append "rw earlyprintk loglevel=8 console=ttyAMA0,115200 dwc_otg.lpm_enable=0 root=/dev/mmcblk0p2 rootdelay=1" -device usb-mouse -device usb-kbd -device usb-net,netdev=net0 -netdev user,id=net0,hostfwd=tcp::2222-:22
```

## Start the Emulation

Launch the QEMU emulator with the configured settings and the Raspberry Pi image. You should observe
the output as the kernel boots up. After a couple of seconds, you should see the output from the
kernel bootup. Eventually, you will see the login prompt:

```shell
         Starting Light Display Manager...
[  OK  ] Started OpenBSD Secure Shell server.
[  OK  ] Finished Turn on SSH if /boot/ssh is present.
[  OK  ] Finished Rotate log files.
Debian GNU/Linux 11 raspberrypi ttyAMA0

raspberrypi login:
```

## Access the Emulated Raspberry Pi

Once the emulation is up and running, you can interact with the emulated Raspberry Pi. You have the
option to connect to it using SSH or access it through the QEMU console.

Install the splashkit SDK under linux installation.

![](/images/skm.png)

_Please bear in mind that emulating a Raspberry Pi with QEMU has its limitations, and not all
hardware interactions may function as expected. Nevertheless, it serves as a valuable tool for
testing and debugging software across various Raspberry Pi models without the need for physical
hardware._

## Detailed guides

https://interrupt.memfault.com/blog/emulating-raspberry-pi-in-qemu#Dockerfile
https://raduzaharia.medium.com/system-emulation-using-qemu-raspberry-pi-3-4973260ffb3e
