"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3583],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var i=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},a=Object.keys(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(i=0;i<a.length;i++)n=a[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},p=i.forwardRef((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),f=r,g=p["".concat(s,".").concat(f)]||p[f]||u[f]||a;return n?i.createElement(g,o(o({ref:t},d),{},{components:n})):i.createElement(g,o({ref:t},d))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<a;c++)o[c]=n[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,n)}p.displayName="MDXCreateElement"},6052:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var i=n(7462),r=(n(7294),n(3905));const a={slug:"pre-coding",title:"Pre-Coding Period",authors:["SAtacker"],tags:["gsoc","beagle-config"]},o=void 0,l={permalink:"/blog/pre-coding",editUrl:"https://github.comSAtacker/satacker.github.io/edit/main/blog/blog/2021-04-21-pre-coding.md",source:"@site/blog/2021-04-21-pre-coding.md",title:"Pre-Coding Period",description:"Points to note",date:"2021-04-21T00:00:00.000Z",formattedDate:"April 21, 2021",tags:[{label:"gsoc",permalink:"/blog/tags/gsoc"},{label:"beagle-config",permalink:"/blog/tags/beagle-config"}],readingTime:2.15,hasTruncateMarker:!0,authors:[{name:"Shreyas Atre",title:"RI at STE||AR Group (Louisiana State University), Maintainer of WasmEdge PySDK & Install Script",url:"https://github.com/SAtacker",imageURL:"https://github.com/SAtacker.png",key:"SAtacker"}],frontMatter:{slug:"pre-coding",title:"Pre-Coding Period",authors:["SAtacker"],tags:["gsoc","beagle-config"]},prevItem:{title:"Hello",permalink:"/blog/hello-world"},nextItem:{title:"Beaglebone & Linux",permalink:"/blog/linux_beagle"}},s={authorsImageUrls:[void 0]},c=[{value:"Points to note",id:"points-to-note",level:3},{value:"Disclaimer",id:"disclaimer",level:3},{value:"The Why Section",id:"the-why-section",level:3},{value:"The How Section",id:"the-how-section",level:3}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,i.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h3",{id:"points-to-note"},"Points to note"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Interface Namings",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"It is of my knowledge that the USB CDC ECM class interfaces are Predictable ",(0,r.kt)("a",{parentName:"li",href:"https://cgit.freedesktop.org/systemd/systemd/tree/src/udev/udev-builtin-net_id.c##n20"},"source 1"),", ",(0,r.kt)("a",{parentName:"li",href:"https://www.freedesktop.org/wiki/Software/systemd/PredictableNetworkInterfaceNames/"},"source 2")),(0,r.kt)("li",{parentName:"ul"},"Windows vs Unix Like ")))),(0,r.kt)("h3",{id:"disclaimer"},"Disclaimer"),(0,r.kt)("p",null,"Currently, it's the review period till May 17th. I have started looking at some basic points I need to make concrete decisions about as I go ahead. Even if my selection does not happen due to misfortune these readings will only benefit next time or whoever carries it on."),(0,r.kt)("h3",{id:"the-why-section"},"The Why Section"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Interface namings are necessary to let the (Host Application) beagle-config know which one is the beagle device. After getting to know the interface name system calls to set rules in iptables can be executed. This would completely eliminate any CLI usage. Basically, users would have to just plugin the beagle device and everything will be taken care of. (Note - This is just the beginning)")),(0,r.kt)("h3",{id:"the-how-section"},"The How Section"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"High-Level overview - Since Udev rules decide the interface name in Linux it would just be of the sort ",(0,r.kt)("inlineCode",{parentName:"li"},"enx78e7d1ea46da")," which is essentially incorporating the MAC address of the beagle device. On windows there's just usual ICS without lowlevel configurations."),(0,r.kt)("li",{parentName:"ul"},"Low-Level Windows - A simple PowerShell script could do it\nA simple PowerShell script from ",(0,r.kt)("a",{parentName:"li",href:"https://superuser.com/questions/470319/how-to-enable-internet-connection-sharing-using-command-line"},"here")," could do it.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},' # Register the HNetCfg library (once)\nregsvr32 hnetcfg.dll\n\n# Create a NetSharingManager object\n$m = New-Object -ComObject HNetCfg.HNetShare\n\n# List connections\n$m.EnumEveryConnection |% { $m.NetConnectionProps.Invoke($_) }\n\n# Find connection\n$c = $m.EnumEveryConnection |? { $m.NetConnectionProps.Invoke($_).Name -eq "Ethernet" }\n\n# Get sharing configuration\n$config = $m.INetSharingConfigurationForINetConnection.Invoke($c)\n\n# See if sharing is enabled\nWrite-Output $config.SharingEnabled\n\n# See the role of connection in sharing\n# 0 - public, 1 - private\n# Only meaningful if SharingEnabled is True\nWrite-Output $config.SharingType\n\n# Enable sharing (0 - public, 1 - private)\n$config.EnableSharing(0)\n\n# Disable sharing\n$config.DisableSharing()\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Low-Level Linux- We would look for the default ip-address of beagle devices. Get the interface name and then use iptables to set packet filter rules for ICS. ")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"// look which interface contains the wanted IP.\n// When found, ifa->ifa_name contains the name of the interface (eth0, eth1, ppp0...)\nfor (ifa = ifaddr; ifa != NULL; ifa = ifa->ifa_next)\n{\n    if (ifa->ifa_addr)\n    {\n        if (AF_INET == ifa->ifa_addr->sa_family)\n        {\n            struct sockaddr_in* inaddr = (struct sockaddr_in*)ifa->ifa_addr;\n\n            if (inaddr->sin_addr.s_addr == addr.sin_addr.s_addr)\n            {\n                if (ifa->ifa_name)\n                {\n                    // Found it\n                }\n            }\n        }\n    }\n}\nfreeifaddrs(ifaddr);\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Further things would be added as the time flows and exams are over till May Mid.")))}u.isMDXComponent=!0}}]);