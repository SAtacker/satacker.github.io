---
slug: dbus-crossc
title: DBus Cross-compilation
author: Shreyas Atre
author_title: Student
author_url: https://github.com/SAtacker
author_image_url: https://avatars1.githubusercontent.com/u/61797109?v=4
tags: [dbus, linux, ipc, beagle]
---

# DBus

I have made a curated content on DBus cross-compilation on Ubuntu 20.04

<!-- truncate -->

## Cross-compilation tools

* Go through the best guide [here](https://www.reddit.com/r/BeagleBone/comments/du4lwb/guide_cross_compiling_for_the_beaglebone_black_on/)

```
gcc-arm-linux-gnueabi:
  Installed: (none)
  Candidate: 4:9.3.0-1ubuntu2
  Version table:
     4:9.3.0-1ubuntu2 500
        500 http://in.archive.ubuntu.com/ubuntu focal/universe amd64 Packages

binutils-arm-linux-gnueabi:
  Installed: 2.34-6ubuntu1.1
  Candidate: 2.34-6ubuntu1.1
  Version table:
 *** 2.34-6ubuntu1.1 500
        500 http://in.archive.ubuntu.com/ubuntu focal-updates/universe amd64 Packages
        500 http://security.ubuntu.com/ubuntu focal-security/universe amd64 Packages
        100 /var/lib/dpkg/status
     2.34-6ubuntu1 500
        500 http://in.archive.ubuntu.com/ubuntu focal/universe amd64 Packages

```


## Installing DBus for `arm-linux-gnueabi`

* Note: The low-level libdbus reference library has no required dependencies; the reference bus daemon's only required dependency is an XML parser (expat).

### 1. Installing `expat`

* Currently `expat 2.4.1` is stable
* Download `expat 2.4.1` and `tar xvfz expat-2.4.1.tar.gz`
* Configure expat

```sh
./configure  --without-tests --without-examples --prefix=/usr/arm-linux-gnueabi/ --host=arm-linux-gnueabi CC=/usr/bin/arm-linux-gnueabi-gcc-8 CXX=/usr/bin/arm-linux-gnueabi-g++-8
make -j8
sudo make install
```

### 2. Installing `libdbus`

* Once completed download `dbus` from [here](https://dbus.freedesktop.org/releases/dbus/)
* Currently `1.12.x` are the stable ones
* `tar xvfz dbus-1.12.20.tar.gz`

```sh
./configure --disable-doxygen-docs --disable-xml-docs --exec-prefix=/usr/arm-linux-gnueabi --host=arm-linux-gnueabi CC=/usr/bin/arm-linux-gnueabi-gcc-8 CXX=/usr/bin/arm-linux-gnueabi-g++-8 CFLAGS=-I/usr/arm-linux-gnueabi/include LDFLAGS=-L/usr/arm-linux-gnueabi/lib/ LIBS=-lexpat
make -j8
sudo make install
```

## Other Useful Links

* DBus with Connman - [Link](https://gist.github.com/tranthamp/2721326)

<!-- GIST -->

```sh
# Connman Technology API examples: (Object Path: /net/connman/technology/<wifi/ethernet>, Interface: net.connman.Technology)
# GetProperties
dbus-send --system --dest=net.connman --print-reply /net/connman/technology/wifi net.connman.Technology.GetProperties

# Scan
dbus-send --system --dest=net.connman --print-reply /net/connman/technology/wifi net.connman.Technology.Scan

# Disable/Enable wifi
dbus-send --system --dest=net.connman --print-reply /net/connman/technology/wifi net.connman.Technology.SetProperty string:Powered variant:boolean:true

# Disable/Enable ethernet
dbus-send --system --dest=net.connman --print-reply /net/connman/technology/ethernet net.connman.Technology.SetProperty string:Powered variant:boolean:true

# Connman Manager API examples: (Object Path: /, Interface: net.connman.Manager)
dbus-send --system --dest=net.connman --print-reply / net.connman.Manager.GetProperties
dbus-send --system --dest=net.connman --print-reply / net.connman.Manager.GetTechnologies
dbus-send --system --dest=net.connman --print-reply / net.connman.Manager.GetServices

# See: http://git.kernel.org/?p=network/connman/connman.git;a=tree;f=doc;hb=HEAD
```

<!-- /GIST -->

:::info
* The best way to get to know dbus is from their own tutorial [here](https://dbus.freedesktop.org/doc/dbus-tutorial.html).
* [This](https://github.com/makercrew/dbus-sample) has done a great job of giving an overview of the API to get yourself quickly started.