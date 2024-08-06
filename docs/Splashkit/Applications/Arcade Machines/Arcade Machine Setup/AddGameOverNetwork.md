# Adding Games To Arcade Machine

## Pre Requisites:
### WiFi Access Point
This guide assumes that there is an existing WiFi Access Point on the Arcade Machine you are trying to copy games to.  You should be able to verify this by looking for nearby WiFi networks called “Arcade`X`” where `X` is the number of the Arcade Machine. 

If you are unable to see the WiFi network, or you need to set it up follow this guide: [link](https://github.com/thoth-tech/documentation/blob/main/docs/Splashkit/Applications/Arcade%20Machines/Arcade%20Machine%20Setup/Setup%20Arcade%20Machine.md#setup-wifi-access-point-optional).

### SSH Utilities
In order transfer the files from your local machine to the Arcade Machine you will need to use either SCP or SFTP. Both applications are part of the SSH suite and come pre-installed on most modern operating systems. In order to test that these are installed open a terminal (If you're running **Windows** make sure you use **PowerShell**!). From the terminal window type `scp`. You should output similar to the below. If you do you're good to go!  (SFTP is part of the SSH suite, so if you have SCP installed then you also have SFTP!)
```
user@host:~$ scp
usage: scp [-c cipher] [-D sftp_server_path] [-F ssh_config]
           [-i identity_file] [-J destination] [-l limit] [-o ssh_option]
           [-P port] [-S program] [-X sftp_option] source ... target
user@host:~$
```
If you have trouble running these commands please consult the relevant documentation on installing ssh **client** software on your operating system.

### Game Files
This guide assumes that you are transferring **compiled** game binaries to the Arcade Machine. The Arcade Machine uses a Raspberry Pi, which has an ARM processor. When compiling your games make sure you **cross compile** for arm32.

### The "authenticity of host" warning message
If this is the first time that you are connecting to the Arcade Machine you might see a prompt similar to the one below saying that authenticity of the host can't be established. **In this specific scenario** it's safe to type "yes" and continue:

```
user@host:~$ ssh user@arcademachine.local

The authenticity of host '<host>' can't be established.
ECDSA key fingerprint is    SHA256:<SomeHash>.
Are you sure you want to continue connecting (yes/no)?
```


## Connecting To Arcade Machine WiFi Access Point
Find the SSID of the WiFi access point corresponding to the Arcade Machine you want to copy games to. When prompted enter the WiFi password. By default this is `GamesAreFun`. 

The Arcade Machine has no [DHCP](https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol) service, so you will need to manually set a static IP address once you have connected to the network. You will need the following network settings:

The Arcade Machine subnet is `10.42.0.1 /24` Your network configuration should therefore look like:
```
IP Address:  10.42.0.2
Subnet Mask: 255.255.255.0 
Gateway:     10.42.0.1
```

**Note:** If another student is concurrently accessing the Arcade Machine you will need to choose another IP Address, or you won't be able to use the network!

Verify connectivity by pinging the Arcade Machine's IP address:
```
user@host:~$ ping 10.42.0.1
PING 10.42.0.1 (10.42.0.1) 56(84) bytes of data.
64 bytes from 10.42.0.1: icmp_seq=1 ttl=58 time=43.0 ms
64 bytes from 10.42.0.1: icmp_seq=2 ttl=58 time=47.0 ms
64 bytes from 10.42.0.1: icmp_seq=3 ttl=58 time=40.8 ms
64 bytes from 10.42.0.1: icmp_seq=4 ttl=58 time=41.1 ms
64 bytes from 10.42.0.1: icmp_seq=5 ttl=58 time=40.6 ms
^C
--- 10.42.0.1 ping statistics ---
5 packets transmitted, 5 received, 0% packet loss, time 4001ms
user@host:~$ 
```

## Secure Copy Protocol (SCP)
The simplest method of transferring files to the Arcade Machine is to use [SCP](https://en.wikipedia.org/wiki/Secure_copy_protocol). The basic syntax of this command is:

`scp [options] [[user@]host1:]source [[user@]host2:]destination`

In this scenario the source is your computer and the destination is the Arcade Machine. SCP requires you to authenticate with the destination host in order to send files over the network. This means that you need to provide authentication credentials for the **Arcade Machine**. By default the SSH username & password credentials are `deakin` and `qwerty` respectively. 

In order to copy files execute the following command from the terminal of your **local machine**, replacing the source directory (`/home/student/myGame/`) with the location of the **folder** you want to copy. If your filepath contains spaces enclose the full file path in quotes E.G. "`/home/student/my game/`".

### GNU/Linux & macOS
`scp -r /home/student/myGame/ deakin@10.42.0.1:/home/deakin/Games/LaunchScripts`

### Windows
`scp -r C:\Users\Student\MyGame\ deakin@10.42.0.1:/home/deakin/Games/LaunchScripts`

The terminal will then show you the progress of the file copy. Once it completes you will need to **reboot the Arcade Machine** before the new game will appear in the list of available games.

## Secure Copy Protocol (SFTP)
Using [SSH File Transfer Protocol](https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol) is conceptually very similar to using SCP.  The main difference is that you issue commands interactively, rather than providing all arguments at once. 

From your local machine open a terminal and type ``sftp deakin@10.42.0.1``, then hit enter. You will then be prompted to enter a password. You need to enter the password of the **deakin** user, **not** the password of your local user! By deafult this is ``qwerty``. The terminal prompt will then change to ``sftp> ``. The whole thing should look like this:

```
user@host:~$ sftp deakin@10.42.0.1
deakin@10.42.0.1's password: 
Connected to 10.42.0.1.
sftp> 
```

From here you will be able to interact with the Arcade Machine's file system. If you are familiar with UNIX file commands, most are applicable here. E.G. you can print your current directory by typing `pwd`: 
```
Remote working directory: /home/deakin
sftp> 
```
Listing files in the current directory can be done with ``ls``, and you can change directories with ``cd <somewhere>`` In order to copy your game across you need to navigate to the Arcade Machine's Games folder. You can do this by typing ``sftp> cd /home/deakin/Games/LaunchScripts/``. 

To copy your game to this directory use the following command, where the filepath is the **local** filepath to your game folder. The ``-r`` flag tells sftp to recursively copy files, i.e. this will copy the entire ``myGame`` folder to the Arcade Machine.
```
sftp> put -r /home/student/myGame
```
Once you hit enter you should see output similar to the below.
```
Uploading /home/student/myGame to /home/deakin/Games/LaunchScripts/test
Entering /home/student/myGame
fileA.sh                                      100%    0     0.0KB/s   00:00    
fileB                                         100%    0     0.0KB/s   00:00    
Assets                                        100%    0     0.0KB/s   00:00    
AssetA                                        100%    0     0.0KB/s   00:00    
sftp> 
```
Once you see the ``sftp>`` prompt it means that the copy is complete! You can then type ``exit`` to end the sftp session.

**Note:** You will need to **reboot the Arcade Machine** before the new game will appear in the list of available games.
