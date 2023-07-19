"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8238],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>h});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(n),d=r,h=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return n?a.createElement(h,o(o({ref:t},u),{},{components:n})):a.createElement(h,o({ref:t},u))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var a=n(7462),r=(n(7294),n(3905));const i={},o=void 0,l={unversionedId:"quick-ftxui/flex",id:"quick-ftxui/flex",title:"flex",description:"FLEX",source:"@site/docs/quick-ftxui/flex.md",sourceDirName:"quick-ftxui",slug:"/quick-ftxui/flex",permalink:"/docs/quick-ftxui/flex",draft:!1,editUrl:"https://github.com/SAtacker/satacker.github.io/edit/main/docs/docs/quick-ftxui/flex.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"GSoC @ HPX, STE||AR Group",permalink:"/docs/c++/GSoC-HPX"}},s={},c=[{value:"FLEX",id:"flex",level:2},{value:"FLEX Program",id:"flex-program",level:3},{value:"Example: Word Count",id:"example-word-count",level:4},{value:"The Scanner as Coroutine",id:"the-scanner-as-coroutine",level:5},{value:"Tokens and Values",id:"tokens-and-values",level:5}],u={toc:c};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"flex"},"FLEX"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"FLEX Program ------\x3e reads through its input --\x3e matches the input against all\n                                                of the regexps simultaneously\n                                                    |\n    |                                               *\n    |                                         Translates all regexps\n    |                                           (efficient internal form)\n    |                                  (deterministic finite automation (DFA))\n    |                                   (they\u2019re fast, and the speed is\n    |                                     independent of the number or\n    |                                          complexity of the patterns)\n    *\n    actions\n    *\n    regexps with instructions\n    *\n    what to do when the input matches any of them\n")),(0,r.kt)("h3",{id:"flex-program"},"FLEX Program"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Consists of three sections separated by %% lines",(0,r.kt)("ol",{parentName:"li"},(0,r.kt)("li",{parentName:"ol"},"declarations and option settings"),(0,r.kt)("li",{parentName:"ol"},"list of patterns and actions"),(0,r.kt)("li",{parentName:"ol"},"C code that is copied to the generated scanner")))),(0,r.kt)("h4",{id:"example-word-count"},"Example: Word Count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-C"},'/* just like Unix wc */\n%{\n    int chars = 0;\n    int words = 0;\n    int lines = 0;\n%}\n\n%%\n[a-zA-Z]+ { words++; chars += strlen(yytext); }\n\\n { chars++; lines++; }\n. { chars++; }\n%%\n\nmain(int argc, char **argv)\n{\n    yylex();\n    printf("%8d%8d%8d\\n", lines, words, chars);\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-sh"},"satacker@ubuntu:~/quick-ftxui$ flex example1.l \nsatacker@ubuntu:~/quick-ftxui$ ls\nCMakeLists.txt  docs  example1.l  lex.yy.c  README.md  snap  src\nsatacker@ubuntu:~/quick-ftxui$ less lex.yy.c \nsatacker@ubuntu:~/quick-ftxui$ cc lex.yy.c -lfl\nexample1.l:14:1: warning: return type defaults to \u2018int\u2019 [-Wimplicit-int]\n   14 | main(int argc, char **argv)\n      | ^~~~\nsatacker@ubuntu:~/quick-ftxui$ ./a.out \nsmssvsmbme\nld;dbm\n\n       3       3      19\n")),(0,r.kt)("p",null,"Note - "),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"In any flex action, the variable yytext is set to point to the input text that the pattern just matched. The final pattern is a dot, which is regex-ese for any character. (It\u2019s similar to a ? in shell scripts.)"),(0,r.kt)("li",{parentName:"ol"},"C code at the end is a main program that calls yylex() , the name that flex gives to the scanner routine"),(0,r.kt)("li",{parentName:"ol"},"In the absence of any other arrangements, the scanner reads from the standard input")),(0,r.kt)("h5",{id:"the-scanner-as-coroutine"},"The Scanner as Coroutine"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Most programs with flex scanners use the scanner to return a stream of tokens that are\nhandled by a parser. "),(0,r.kt)("li",{parentName:"ul"},"Each time the program needs a token, it calls yylex() , which reads a little input and returns the token. When it needs another token, it calls yylex() again."),(0,r.kt)("li",{parentName:"ul"},"The scanner acts as a coroutine; that is, each time it returns, it remembers where it was, and on the next call it picks up where it left off.")),(0,r.kt)("h5",{id:"tokens-and-values"},"Tokens and Values"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"When a flex scanner returns a stream of tokens, each token actually has two parts, the\ntoken and the token\u2019s value."),(0,r.kt)("li",{parentName:"ul"},"The token is a small integer. The token numbers are arbitrary, except that token zero always means end-of-file. When bison creates a parser, bison assigns the token numbers automatically starting at 258 (this avoids collisions with literal character tokens) and creates a .h with definitions of the tokens numbers.")))}p.isMDXComponent=!0}}]);