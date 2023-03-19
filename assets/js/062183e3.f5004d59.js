"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3165],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>d});var i=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,i,r=function(e,t){if(null==e)return{};var a,i,r={},n=Object.keys(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(i=0;i<n.length;i++)a=n[i],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=i.createContext({}),c=function(e){var t=i.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return i.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},m=i.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,h=m["".concat(s,".").concat(d)]||m[d]||u[d]||n;return a?i.createElement(h,o(o({ref:t},p),{},{components:a})):i.createElement(h,o({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<n;c++)o[c]=a[c];return i.createElement.apply(null,o)}return i.createElement.apply(null,a)}m.displayName="MDXCreateElement"},1882:(e,t,a)=>{a.d(t,{Z:()=>r});var i=a(7294);class r extends i.Component{constructor(e){super(e),this.commentBox=i.createRef()}componentDidMount(){let e=document.createElement("script");e.setAttribute("src","https://utteranc.es/client.js"),e.setAttribute("repo","SAtacker/satacker.github.io"),e.setAttribute("issue-term","pathname"),e.setAttribute("label","[utterences]"),e.setAttribute("theme","github-dark"),e.setAttribute("crossorigin","anonymous"),e.setAttribute("async",!0),this.commentBox.current.appendChild(e)}render(){return i.createElement("div",{style:{width:"100%"},id:"comments"},i.createElement("div",{ref:this.commentBox}))}}},5725:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var i=a(7462),r=(a(7294),a(3905)),n=a(1882);const o={slug:"basic-coa",title:"Review of basic CoA",authors:["SAtacker"],tags:["COA","GPU"]},l=void 0,s={permalink:"/blog/basic-coa",editUrl:"https://github.comSAtacker/satacker.github.io/edit/main/blog/blog/2023-02-03-review-basic-coa.mdx",source:"@site/blog/2023-02-03-review-basic-coa.mdx",title:"Review of basic CoA",description:"I am planning to study new things every week and writing blogs about these occasionally.",date:"2023-02-03T00:00:00.000Z",formattedDate:"February 3, 2023",tags:[{label:"COA",permalink:"/blog/tags/coa"},{label:"GPU",permalink:"/blog/tags/gpu"}],readingTime:3.385,hasTruncateMarker:!1,authors:[{name:"Shreyas Atre",title:"RI at STE||AR Group (Louisiana State University), Maintainer of WasmEdge PySDK & Install Script",url:"https://github.com/SAtacker",imageURL:"https://github.com/SAtacker.png",key:"SAtacker"}],frontMatter:{slug:"basic-coa",title:"Review of basic CoA",authors:["SAtacker"],tags:["COA","GPU"]},prevItem:{title:"Open Source Resources",permalink:"/blog/basic_source_resources"},nextItem:{title:"GSoC 2022 Report",permalink:"/blog/gsoc-2022-work"}},c={authorsImageUrls:[void 0]},p=[{value:"Week 1",id:"week-1",level:3},{value:"5 stage RISC pipeline",id:"5-stage-risc-pipeline",level:2},{value:"Pipeline Hazards",id:"pipeline-hazards",level:3},{value:"Data path",id:"data-path",level:2},{value:"Locality",id:"locality",level:2},{value:"Cache mapping",id:"cache-mapping",level:2},{value:"Where should we put data in the cache?",id:"where-should-we-put-data-in-the-cache",level:3},{value:"Direct-mapped cache",id:"direct-mapped-cache",level:4},{value:"least-significant bits",id:"least-significant-bits",level:4},{value:"Additional resources",id:"additional-resources",level:2},{value:"<Comments />",id:"comments-",level:2}],u={toc:p};function m(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"I am planning to study new things every week and writing blogs about these occasionally."),(0,r.kt)("h3",{id:"week-1"},"Week 1"),(0,r.kt)("p",null,"Course link - ",(0,r.kt)("a",{parentName:"p",href:"https://onlinecourses.nptel.ac.in/noc23_cs61"},"https://onlinecourses.nptel.ac.in/noc23_cs61")),(0,r.kt)("h2",{id:"5-stage-risc-pipeline"},"5 stage RISC pipeline"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Fetch (IF = Instruction Fetch)"),(0,r.kt)("li",{parentName:"ul"},"Decode (ID = Instruction Decode)"),(0,r.kt)("li",{parentName:"ul"},"Execute (EX = Execute)"),(0,r.kt)("li",{parentName:"ul"},"Memory (MEM = Memory access)"),(0,r.kt)("li",{parentName:"ul"},"Write (WB = Register write back)")),(0,r.kt)("p",null,"CSIC - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"MUL addr1 addr2 addr3;\n")),(0,r.kt)("p",null,"RISC - "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-asm"},"LOAD R2 addr2; \nLOAD R3 addr3; \nMUL R1 R2 R3; \nSTORE addr1 R1;\n")),(0,r.kt)("p",null,"More number of instructions for RISC implies that more instructions are to be kept in memory. On the other hand, less transistors are required\nto build RISC and has more physical space on chip."),(0,r.kt)("p",null,(0,r.kt)("a",{href:"https://commons.wikimedia.org/wiki/File:Fivestagespipeline.png#/media/File:Fivestagespipeline.png"},(0,r.kt)("img",{src:"https://upload.wikimedia.org/wikipedia/commons/2/21/Fivestagespipeline.png",alt:"Fivestagespipeline.png"})),(0,r.kt)("br",null),(0,r.kt)("a",{href:"http://creativecommons.org/licenses/by-sa/3.0/",title:"Creative Commons Attribution-Share Alike 3.0"},"CC BY-SA 3.0"),",",(0,r.kt)("a",{href:"https://commons.wikimedia.org/w/index.php?curid=140179"},"Link")),(0,r.kt)("p",null,"All instructions execute uniform in temporal space (eg. in one clock cycle), these instructions can be pipelined."),(0,r.kt)("h3",{id:"pipeline-hazards"},"Pipeline Hazards"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Structural hazards: multiple instructions compete for the same resource"),(0,r.kt)("li",{parentName:"ul"},"Data hazards: a dependent instruction cannot proceed because it needs a value that hasn\u2019t been produced"),(0,r.kt)("li",{parentName:"ul"},"Control hazards: the next instruction cannot be fetched because the outcome of an earlier branch is unknown")),(0,r.kt)("h2",{id:"data-path"},"Data path"),(0,r.kt)("h2",{id:"locality"},"Locality"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Temporal")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If at one point a particular memory location is referenced, then it is likely that the same location will be referenced again in the near future. There is temporal proximity between adjacent references to the same memory location. In this case it is common to make efforts to store a copy of the referenced data in faster memory storage, to reduce the latency of subsequent references. Temporal locality is a special case of spatial locality (see below), namely when the prospective location is identical to the present location.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Spatial")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If a particular storage location is referenced at a particular time, then it is likely that nearby memory locations will be referenced in the near future. In this case it is common to attempt to guess the size and shape of the area around the current reference for which it is worthwhile to prepare faster access for subsequent reference.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Branch")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"If there are only a few possible alternatives for the prospective part of the path in the spatial-temporal coordinate space. This is the case when an instruction loop has a simple structure, or the possible outcome of a small system of conditional branching instructions is restricted to a small set of possibilities. Branch locality is typically not spatial locality since the few possibilities can be located far away from each other.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Equidistant")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"Halfway between spatial locality and branch locality. Consider a loop accessing locations in an equidistant pattern, i.e., the path in the spatial-temporal coordinate space is a dotted line. In this case, a simple linear function can predict which location will be accessed in the near future.\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Locality_of_reference"},"Source"))),(0,r.kt)("h2",{id:"cache-mapping"},"Cache mapping"),(0,r.kt)("p",null,"Caches are divided into blocks, which may be of various sizes."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The number of blocks in a cache is usually a power of 2.")),(0,r.kt)("h3",{id:"where-should-we-put-data-in-the-cache"},"Where should we put data in the cache?"),(0,r.kt)("h4",{id:"direct-mapped-cache"},"Direct-mapped cache"),(0,r.kt)("p",null,"Each main memory address maps to exactly one cache block.\nIdea - is to use the mod (remainder) operator.\nExample - If the cache contains 2^k blocks, then the data at memory address i would go to cache block index i mod 2^k.\nFor instance, with the four-block cache (assuming 1 byte block size and 16 byte main memory), address 14 would map to cache block 2. // 14 mod 4 = 2"),(0,r.kt)("h4",{id:"least-significant-bits"},"least-significant bits"),(0,r.kt)("p",null,"Idea - look at the least significant k bits of the address\nExample - (assuming 1 byte block size and 16 byte main memory) address 14 (1110 in binary) maps to cache block 2 (10 in binary)."),(0,r.kt)("p",null,"Note - Taking the least k bits of a binary value is the same as computing that value mod 2^k"),(0,r.kt)("h2",{id:"additional-resources"},"Additional resources"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/"},"https://cs.stanford.edu/people/eroberts/courses/soco/projects/risc/risccisc/")),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://www.cise.ufl.edu/~mssz/CompOrg/CDA-proc.html"},"https://www.cise.ufl.edu/~mssz/CompOrg/CDA-proc.html"))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"comments-"},(0,r.kt)(n.Z,{mdxType:"Comments"})))}m.isMDXComponent=!0}}]);