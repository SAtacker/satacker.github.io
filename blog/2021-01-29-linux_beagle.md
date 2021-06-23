---
slug: linux_beagle
title: Beaglebone & Linux
author: Shreyas Atre
author_title: Student
author_url: https://github.com/SAtacker
author_image_url: https://avatars1.githubusercontent.com/u/61797109?v=4
tags: [beagle, linux]
---

# Beagle_Notes

I have made a curated content on linux and beaglebone

<!-- truncate -->

## Boot

Power On

1. (First Stage bootloader) TI Boot ROM performs minimal congfig, finds boot image and loads x-loader

   - This bootloader initializes a minimal amount of CPU and board hardware, then accesses the first partition of the SD card (which must be in FAT format), and loads a file called "MLO", and executes it.

2. (Second Stage bootloader) MLO "Mmc LOader" on the FAT partition is the second stage bootloader

   - Sets up pin muxing initializes clocks and memory and loads U boot

3. (Third Stage ) U-Boot is Das-Universal Boot , u-boot.img on FAT

   - Specifies root file system and uses uEnv.txt config , performs additional inits, loads Linux Kernel and passes control
   - The uenvcmd from uEnv.txt file is executed.
   - The file /dtbs/am335x‐bone*device_name*.dtb is read in. This file contains the BBB’s compiled device tree description, which is discussed shortly. After this description is read in, the flattened device tree blob is placed in memory at the address 0x815f0000

4. Linux Kernel (EXT4 partition on SD card)
   - Decompresses kernel into memory and sets up I2C , USB, etc. and mounts file system containing linux applications i.e mounts the root file system ( mmcroot and mmcrootfstype are defined in uEnv.txt )
   - Calls userspace process init

## Kernel Space and User Space

- Kernel space is the area of system memory where Linux kernel runs and is separated from user space to provide better security and helps to avoid crashing due to badly written user code.

```
    ---------------------------------------------
    |               User space                  |
    |  /sbin/init UserCode LinuxConsole         |
    |            GNU C lib (glib)               |
    ---------------------------------------------
                        ||
                        \/
                    Kernel space
                        ||
                        \/
                    Hardware & Devices
```

- A kernel module is an object file that contains code, which can be loaded and unloaded from the kernel on demand. In many cases the kernel can even load and unload modules while it is executing, without needing to reboot the BBB.
- Example : When we add wifi module it uses LKM (loadable kernel module)
- Further kernel services are made available through system calls
- System V init or systemd manages these systems and services, can be used to start and stop them

### Init process

- Begins by reading config from /etc/inittab which defines runlevel
- Runlevel defines the state of device and controls which process and services are started by init
- In debian there are several runlevels from 0-6 

```
satacker@ubuntu:~/Desktop/beagle_notes$ who -r
         run-level 5  2021-01-14 22:00
satacker@ubuntu:~/Desktop/beagle_notes$ runlevel
N 5
satacker@ubuntu:/etc$ ls -d rc*
rc0.d  rc1.d  rc2.d  rc3.d  rc4.d  rc5.d  rc6.d  rcS.d
```

## Linux System Management

Here we see the full administrative control.

### Super user

- The root account or superuser has access to all the commands and files
- `sudo` stands for superuser-do
- For ex. Not using `sudo` prevents from accedentally deleting files

### File System

- File system is a hierarchy of directories
- Uses `inodes` to represent the file system objects such as files and directories themselves
- For ex. when an extended file system is created (ext3/ext4) on a physical disk an inode table is created. The table links to an inode data structure for each file and directory on that disk

```
debian@beaglebone:~/ws$ ls -ail
total 268
   26 drwxr-xr-x 2 debian debian   4096 Jan 29 01:12 .
44132 drwxr-xr-x 6 debian debian   4096 Jan 28 23:53 ..
 2434 -rwxr-xr-x 1 debian debian   3732 Jan 29 01:04 a.pru0
  827 -rwxr-xr-x 1 debian debian    504 Nov 13 03:32 init_script.sh
 1244 -rw-r--r-- 1 debian debian    512 Jan 29 00:59 pru_ex_calculator.sim
  958 -rw-r--r-- 1 debian debian    100 Jan 29 00:57 pru_ex_counter.sim
 1020 -rw-r--r-- 1 debian debian    119 Jan 29 01:04 pru_ex.sim
  916 -rw-r--r-- 1 debian debian 245510 Aug 25 01:55 simppru-1.3-armhf.deb
```

- `drwxr-xr-x` where `d` represents directory , could have been `l` for symlink and `-` for regualar file, `c` for character special, `b` for block special, `p` for fifo and `s` for socket. The rest `rwxr-xr-x` represents file system permissions namely `r`ead, `w`rite and e`x`ecute.
- Weightings - r = 4 , w = 2 , x = 1 i.e. `rwxrwxrwx` corresponds to 777

### Linking to files and dirs

- A soft link refers to location of another file/directory
- ex. 
```debian@beaglebone:/usr/local/bin$ ls
pyctrl_start_server  simppru      simppru-console
pyctrl_stop_server   simppru-1.3  simppru-console-1.3
``` 
all the simppru refer to the same binary 
- This can be verified as follows

```
debian@beaglebone:/usr/local/bin$ ls -l
total 792
-rwxr-xr-x 1 root root    190 Apr  6  2020 pyctrl_start_server
-rwxr-xr-x 1 root root    188 Apr  6  2020 pyctrl_stop_server
lrwxrwxrwx 1 root root     11 Aug 25 01:55 simppru -> simppru-1.3
-rwxr-xr-x 1 root root 118996 Aug 25 01:53 simppru-1.3
lrwxrwxrwx 1 root root     19 Aug 25 01:55 simppru-console -> simppru-console-1.3
-rwxr-xr-x 1 root root 677248 Aug 25 01:54 simppru-console-1.3
```

- Hardlinks refer to the inode of the file , always refer to the source even if the file is removed

```
satacker@ubuntu:~/Desktop$ cat test.test 
Hello!
satacker@ubuntu:~/Desktop$ cat temp_hard_link 
Hello!
satacker@ubuntu:~/Desktop$ 
```

```
satacker@ubuntu:~/Desktop$ ls -ail | grep "test\|temp_" 
4202899 -rw-rw-r--  2 satacker satacker    0 Jan 29 10:38 temp_hard_link
4202899 -rw-rw-r--  2 satacker satacker    0 Jan 29 10:38 test.test
```
After removing
```
satacker@ubuntu:~/Desktop$ rm test.test 
satacker@ubuntu:~/Desktop$ ls -ail | grep "test\|temp_" 
4202899 -rw-rw-r--  1 satacker satacker    0 Jan 29 10:38 temp_hard_link
satacker@ubuntu:~/Desktop$ cat temp_hard_link 
Hello!
satacker@ubuntu:~/Desktop$
```
From [wikipedia](https://en.wikipedia.org/wiki/Hard_link)
![Wikipedia](https://upload.wikimedia.org/wikipedia/commons/3/32/Hard_Link_Illustration.svg)

### Users and Groups

TODO

### Commands

TOD

### Processes

- `ps` lists the processes that are currently running

```
satacker@ubuntu:~/Desktop$ ps ax | grep bash
   2331 pts/0    Ss+    0:00 bash
   5458 pts/2    Ss     0:00 bash
  23896 pts/2    S+     0:00 grep --color=auto bash
```

- We can kill the process using `kill` and then the PID from above. `pkill` allows to kill the process by name.
- Processes can be made background , ex. `command &` the & followed by command makes it a background process.
- If a foreground process is taking too much time, stop it by pressing Ctrl+Z. A stopped job still exists, but its execution is suspended. To resume the job, but in the background, type `bg` to send the stopped job to background execution. 
- Linux from the shell supports just one active foreground process per virtual terminal. However, from the practical perspective of the user, a windowed environment (e.g., Linux with a desktop, not from a text-based shell) supports several active windows that effectively serve as multiple simultaneous foreground processes. In practice, Linux behind-the-scenes adjusts the priority of processes in a GUI to promote system stability and support end-user processing. [Source](https://www.lifewire.com/multitasking-background-foreground-process-2180219)


