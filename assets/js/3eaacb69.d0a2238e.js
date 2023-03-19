"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7398],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>h});var o=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)r=a[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=o.createContext({}),l=function(e){var t=o.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=l(e.components);return o.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),m=l(r),h=n,f=m["".concat(i,".").concat(h)]||m[h]||p[h]||a;return r?o.createElement(f,s(s({ref:t},u),{},{components:r})):o.createElement(f,s({ref:t},u))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,s=new Array(a);s[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:n,s[1]=c;for(var l=2;l<a;l++)s[l]=r[l];return o.createElement.apply(null,s)}return o.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1882:(e,t,r)=>{r.d(t,{Z:()=>n});var o=r(7294);class n extends o.Component{constructor(e){super(e),this.commentBox=o.createRef()}componentDidMount(){let e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","SAtacker/satacker.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","[utterences]"),e.setAttribute("theme","github-dark"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),this.commentBox.current.appendChild(e)}render(){return o.createElement("div",{style:{width:"100%"},id:"comments"},o.createElement("div",{ref:this.commentBox}))}}},8860:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>u});var o=r(7462),n=(r(7294),r(3905)),a=r(1882);const s={slug:"basic_source_resources",title:"Open Source Resources",authors:["SAtacker"],tags:["GSoC","Open Source"]},c=void 0,i={permalink:"/blog/basic_source_resources",editUrl:"https://github.comSAtacker/satacker.github.io/edit/main/blog/blog/2023-03-19-opensource-resources.mdx",source:"@site/blog/2023-03-19-opensource-resources.mdx",title:"Open Source Resources",description:"Most important",date:"2023-03-19T00:00:00.000Z",formattedDate:"March 19, 2023",tags:[{label:"GSoC",permalink:"/blog/tags/g-so-c"},{label:"Open Source",permalink:"/blog/tags/open-source"}],readingTime:.11,hasTruncateMarker:!1,authors:[{name:"Shreyas Atre",title:"RI at STE||AR Group (Louisiana State University), Maintainer of WasmEdge PySDK & Install Script",url:"https://github.com/SAtacker",imageURL:"https://github.com/SAtacker.png",key:"SAtacker"}],frontMatter:{slug:"basic_source_resources",title:"Open Source Resources",authors:["SAtacker"],tags:["GSoC","Open Source"]},nextItem:{title:"Review of basic CoA",permalink:"/blog/basic-coa"}},l={authorsImageUrls:[void 0]},u=[{value:"Most important",id:"most-important",level:2},{value:"Some links that are good enough",id:"some-links-that-are-good-enough",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"most-important"},"Most important"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://letmegooglethat.com/?q=lmgtfy"},"LMGTFY"))),(0,n.kt)("h2",{id:"some-links-that-are-good-enough"},"Some links that are good enough"),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"https://alexfornuto.com/how-to-ask-for-help-on-irc/"},"https://alexfornuto.com/how-to-ask-for-help-on-irc/")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("a",{parentName:"li",href:"http://www.catb.org/~esr/faqs/smart-questions.html"},"http://www.catb.org/~esr/faqs/smart-questions.html"))),(0,n.kt)(a.Z,{mdxType:"Comments"}))}m.isMDXComponent=!0}}]);