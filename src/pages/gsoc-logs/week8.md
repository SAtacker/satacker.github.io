
## Fri, Jul 23
* Upstream commit 09714c7a760d77304fc797d8b75e40e633723ab1

## Sunday, Jul 25

Wireless (#22)

Brings in Wireless feature
* Relies on `connman`
* Connect
* Disconnect
* List networks
* Lists active network

* Possible issues : Connman may take over some additional services causing undefined behaviour.
* Possible Workarounds / Sol : Add extra functionality to backup resolv.conf and others that can be manipulated by Connman

Fixes:
* Fixes #21
* Solves #23
[![asciicast](https://asciinema.org/a/426246.svg)](https://asciinema.org/a/426246)

## Mon, Jul 26
* Better UI for emmc-sd

## Tue, Jul 27 
* Grows Partitions too
* Depends on `/opt/scripts/tools/grow_partitions.sh`
* Removed definitions from `src/utils.hpp` to `src/utils.cpp`
    
* Demo:
  * Before:
[![asciicast](https://asciinema.org/a/427430.svg)](https://asciinema.org/a/427430)
  * After
[![asciicast](https://asciinema.org/a/427432.svg)](https://asciinema.org/a/427432)


## Wed, Jul 28

    Added current status