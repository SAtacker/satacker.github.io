"use strict";(self.webpackChunkgsoc_blog=self.webpackChunkgsoc_blog||[]).push([[8238],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),d=o,m=f["".concat(l,".").concat(d)]||f[d]||p[d]||i;return n?r.createElement(m,a(a({ref:t},s),{},{components:n})):r.createElement(m,a({ref:t},s))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,a[1]=c;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},78985:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(87462),o=n(63366),i=(n(67294),n(3905)),a=["components"],c={},l=void 0,u={unversionedId:"quick-ftxui/flex",id:"quick-ftxui/flex",isDocsHomePage:!1,title:"flex",description:"FLEX",source:"@site/docs/quick-ftxui/flex.md",sourceDirName:"quick-ftxui",slug:"/quick-ftxui/flex",permalink:"/docs/quick-ftxui/flex",editUrl:"https://github.com/SAtacker/satacker.github.io/edit/main/docs/docs/quick-ftxui/flex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Summary of ADL, CPOs, Taxonomy",permalink:"/docs/c++/CPOs and tag_invokes"}},s=[{value:"FLEX",id:"flex",children:[{value:"FLEX Program",id:"flex-program",children:[]}]}],p={toc:s};function f(e){var t=e.components,n=(0,o.Z)(e,a);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"flex"},"FLEX"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"FLEX Program ------\x3e reads through its input --\x3e matches the input against all\n                                                of the regexps simultaneously\n                                                    |\n    |                                               *\n    |                                         Translates all regexps\n    |                                           (efficient internal form)\n    |                                  (deterministic finite automation (DFA))\n    |                                   (they\u2019re fast, and the speed is\n    |                                     independent of the number or\n    |                                          complexity of the patterns)\n    *\n    actions\n    *\n    regexps with instructions\n    *\n    what to do when the input matches any of them\n")),(0,i.kt)("h3",{id:"flex-program"},"FLEX Program"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Consists of three sections separated by %% lines",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"declarations and option settings"),(0,i.kt)("li",{parentName:"ol"},"list of patterns and actions"),(0,i.kt)("li",{parentName:"ol"},"C code that is copied to the generated scanner")))),(0,i.kt)("h4",{id:"example-word-count"},"Example: Word Count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-C"},'/* just like Unix wc */\n%{\n    int chars = 0;\n    int words = 0;\n    int lines = 0;\n%}\n\n%%\n[a-zA-Z]+ { words++; chars += strlen(yytext); }\n\\n { chars++; lines++; }\n. { chars++; }\n%%\n\nmain(int argc, char **argv)\n{\n    yylex();\n    printf("%8d%8d%8d\\n", lines, words, chars);\n}\n')))}f.isMDXComponent=!0}}]);