(self.webpackChunkgsoc_blog=self.webpackChunkgsoc_blog||[]).push([[583],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return p}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=s(n),p=i,h=f["".concat(c,".").concat(p)]||f[p]||d[p]||o;return n?r.createElement(h,a(a({ref:t},u),{},{components:n})):r.createElement(h,a({ref:t},u))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var s=2;s<o;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},9660:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var r=n(2122),i=n(9756),o=(n(7294),n(3905)),a=["components"],l={slug:"pre-coding",title:"Pre-Coding Period",author:"Shreyas Atre",author_title:"Student",author_url:"https://github.com/SAtacker",author_image_url:"https://avatars1.githubusercontent.com/u/61797109?v=4",tags:["gsoc","beagle-config"]},c={permalink:"/blog/pre-coding",editUrl:"https://github.comSAtacker/satacker.github.io/edit/main/blog/blog/2021-04-21-pre-coding.md",source:"@site/blog/2021-04-21-pre-coding.md",title:"Pre-Coding Period",description:"Points to note",date:"2021-04-21T00:00:00.000Z",formattedDate:"April 21, 2021",tags:[{label:"gsoc",permalink:"/blog/tags/gsoc"},{label:"beagle-config",permalink:"/blog/tags/beagle-config"}],readingTime:2.15,truncated:!0,prevItem:{title:"Hello",permalink:"/blog/hello-world"},nextItem:{title:"Beaglebone & Linux",permalink:"/blog/linux_beagle"}},s=[{value:"Points to note",id:"points-to-note",children:[]},{value:"Disclaimer",id:"disclaimer",children:[]},{value:"The Why Section",id:"the-why-section",children:[]},{value:"The How Section",id:"the-how-section",children:[]}],u={toc:s};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"points-to-note"},"Points to note"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Interface Namings",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"It is of my knowledge that the USB CDC ECM class interfaces are Predictable ",(0,o.kt)("a",{parentName:"li",href:"https://cgit.freedesktop.org/systemd/systemd/tree/src/udev/udev-builtin-net_id.c##n20"},"source 1"),", ",(0,o.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/"},"source 2")),(0,o.kt)("li",{parentName:"ul"},"Windows vs Unix Like ")))),(0,o.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,o.kt)("p",null,"Currently, it's the review period till May 17th. I have started looking at some basic points I need to make concrete decisions about as I go ahead. Even if my selection does not happen due to misfortune these readings will only benefit next time or whoever carries it on."),(0,o.kt)("h3",{id:"the-why-section"},"The Why Section"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Interface namings are necessary to let the (Host Application) beagle-config know which one is the beagle device. After getting to know the interface name system calls to set rules in iptables can be executed. This would completely eliminate any CLI usage. Basically, users would have to just plugin the beagle device and everything will be taken care of. (Note - This is just the beginning)")),(0,o.kt)("h3",{id:"the-how-section"},"The How Section"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"})),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"High-Level overview - Since Udev rules decide the interface name in Linux it would just be of the sort ",(0,o.kt)("inlineCode",{parentName:"li"},"enx78e7d1ea46da")," which is essentially incorporating the MAC address of the beagle device. On windows there's just usual ICS without lowlevel configurations."),(0,o.kt)("li",{parentName:"ul"},"Low-Level Windows - A simple PowerShell script could do it\nA simple PowerShell script from ",(0,o.kt)("a",{parentName:"li",href:"https://superuser.com/questions/470319/how-to-enable-internet-connection-sharing-using-command-line"},"here")," could do it.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},' # Register the HNetCfg library (once)\nregsvr32 hnetcfg.dll\n\n# Create a NetSharingManager object\n$m = New-Object -ComObject HNetCfg.HNetShare\n\n# List connections\n$m.EnumEveryConnection |% { $m.NetConnectionProps.Invoke($_) }\n\n# Find connection\n$c = $m.EnumEveryConnection |? { $m.NetConnectionProps.Invoke($_).Name -eq "Ethernet" }\n\n# Get sharing configuration\n$config = $m.INetSharingConfigurationForINetConnection.Invoke($c)\n\n# See if sharing is enabled\nWrite-Output $config.SharingEnabled\n\n# See the role of connection in sharing\n# 0 - public, 1 - private\n# Only meaningful if SharingEnabled is True\nWrite-Output $config.SharingType\n\n# Enable sharing (0 - public, 1 - private)\n$config.EnableSharing(0)\n\n# Disable sharing\n$config.DisableSharing()\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Low-Level Linux- We would look for the default ip-address of beagle devices. Get the interface name and then use iptables to set packet filter rules for ICS. ")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"// look which interface contains the wanted IP.\n// When found, ifa->ifa_name contains the name of the interface (eth0, eth1, ppp0...)\nfor (ifa = ifaddr; ifa != NULL; ifa = ifa->ifa_next)\n{\n    if (ifa->ifa_addr)\n    {\n        if (AF_INET == ifa->ifa_addr->sa_family)\n        {\n            struct sockaddr_in* inaddr = (struct sockaddr_in*)ifa->ifa_addr;\n\n            if (inaddr->sin_addr.s_addr == addr.sin_addr.s_addr)\n            {\n                if (ifa->ifa_name)\n                {\n                    // Found it\n                }\n            }\n        }\n    }\n}\nfreeifaddrs(ifaddr);\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Further things would be added as the time flows and exams are over till May Mid.")))}d.isMDXComponent=!0}}]);