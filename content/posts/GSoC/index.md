---
title: "Pre-GSoC Blog"
date: 2021-04-21T20:09:17+05:30
description: Blogging for GSoC
menu:
  sidebar:
    name: GSoC
    identifier: gsoc
    weight: 20
---

### Disclaimer

```
Currently, it's the review period till May 17th. I have started looking at some basic points I need to make concrete decisions about as I go ahead. Even if my selection does not happen due to misfortune these readings will only benefit next time or whoever carries it on.
```

### Points to note
- Interface Namings
  - It is of my knowledge that the USB CDC ECM class interfaces are Predictable [source 1](https://cgit.freedesktop.org/systemd/systemd/tree/src/udev/udev-builtin-net_id.c##n20), [source 2](https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/)
  - Windows vs Unix Like 

### The Why Section
1. Interface namings are necessary to let the (Host Application) beagle-config know which one is the beagle device. After getting to know the interface name system calls to set rules in iptables can be executed. This would completely eliminate any CLI usage. Basically, users would have to just plugin the beagle device and everything will be taken care of. (Note - This is just the beginning)

### The How Section
1. 
 * High-Level overview - Since Udev rules decide the interface name in Linux it would just be of the sort `enx78e7d1ea46da` which is essentially incorporating the MAC address of the beagle device. On windows there's just usual ICS without lowlevel configurations.
 * Low-Level Windows - A simple PowerShell script from [here](https://superuser.com/questions/470319/how-to-enable-internet-connection-sharing-using-command-line) could do it.
 ```
 # Register the HNetCfg library (once)
regsvr32 hnetcfg.dll

# Create a NetSharingManager object
$m = New-Object -ComObject HNetCfg.HNetShare

# List connections
$m.EnumEveryConnection |% { $m.NetConnectionProps.Invoke($_) }

# Find connection
$c = $m.EnumEveryConnection |? { $m.NetConnectionProps.Invoke($_).Name -eq "Ethernet" }

# Get sharing configuration
$config = $m.INetSharingConfigurationForINetConnection.Invoke($c)

# See if sharing is enabled
Write-Output $config.SharingEnabled

# See the role of connection in sharing
# 0 - public, 1 - private
# Only meaningful if SharingEnabled is True
Write-Output $config.SharingType

# Enable sharing (0 - public, 1 - private)
$config.EnableSharing(0)

# Disable sharing
$config.DisableSharing()
 ```
 * Low-Level Linux- We would look for the default ip-address of beagle devices. Get the interface name and then use iptables to set packet filter rules for ICS. The below script is from [here](https://stackoverflow.com/questions/848040/how-can-i-get-the-interface-name-index-associated-with-a-tcp-socket)
 ```
// look which interface contains the wanted IP.
// When found, ifa->ifa_name contains the name of the interface (eth0, eth1, ppp0...)
for (ifa = ifaddr; ifa != NULL; ifa = ifa->ifa_next)
{
    if (ifa->ifa_addr)
    {
        if (AF_INET == ifa->ifa_addr->sa_family)
        {
            struct sockaddr_in* inaddr = (struct sockaddr_in*)ifa->ifa_addr;

            if (inaddr->sin_addr.s_addr == addr.sin_addr.s_addr)
            {
                if (ifa->ifa_name)
                {
                    // Found it
                }
            }
        }
    }
}
freeifaddrs(ifaddr);
```

* Further things would be added as the time flows and exams are over till May Mid.