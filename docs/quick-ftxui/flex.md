## FLEX

```
FLEX Program ------> reads through its input --> matches the input against all
                                                of the regexps simultaneously
                                                    |
    |                                               *
    |                                         Translates all regexps
    |                                           (efficient internal form)
    |                                  (deterministic finite automation (DFA))
    |                                   (they’re fast, and the speed is
    |                                     independent of the number or
    |                                          complexity of the patterns)
    *
    actions
    *
    regexps with instructions
    *
    what to do when the input matches any of them
```


### FLEX Program

- Consists of three sections separated by %% lines
    1. declarations and option settings
    2. list of patterns and actions
    3. C code that is copied to the generated scanner

#### Example: Word Count

```C
/* just like Unix wc */
%{
    int chars = 0;
    int words = 0;
    int lines = 0;
%}

%%
[a-zA-Z]+ { words++; chars += strlen(yytext); }
\n { chars++; lines++; }
. { chars++; }
%%

main(int argc, char **argv)
{
    yylex();
    printf("%8d%8d%8d\n", lines, words, chars);
}
```

```sh
satacker@ubuntu:~/quick-ftxui$ flex example1.l 
satacker@ubuntu:~/quick-ftxui$ ls
CMakeLists.txt  docs  example1.l  lex.yy.c  README.md  snap  src
satacker@ubuntu:~/quick-ftxui$ less lex.yy.c 
satacker@ubuntu:~/quick-ftxui$ cc lex.yy.c -lfl
example1.l:14:1: warning: return type defaults to ‘int’ [-Wimplicit-int]
   14 | main(int argc, char **argv)
      | ^~~~
satacker@ubuntu:~/quick-ftxui$ ./a.out 
smssvsmbme
ld;dbm

       3       3      19
```

Note - 
1. In any flex action, the variable yytext is set to point to the input text that the pattern just matched. The final pattern is a dot, which is regex-ese for any character. (It’s similar to a ? in shell scripts.)
2. C code at the end is a main program that calls yylex() , the name that flex gives to the scanner routine
3. In the absence of any other arrangements, the scanner reads from the standard input

##### The Scanner as Coroutine

- Most programs with flex scanners use the scanner to return a stream of tokens that are
handled by a parser. 
- Each time the program needs a token, it calls yylex() , which reads a little input and returns the token. When it needs another token, it calls yylex() again.
- The scanner acts as a coroutine; that is, each time it returns, it remembers where it was, and on the next call it picks up where it left off.

##### Tokens and Values

- When a flex scanner returns a stream of tokens, each token actually has two parts, the
token and the token’s value.
- The token is a small integer. The token numbers are arbitrary, except that token zero always means end-of-file. When bison creates a parser, bison assigns the token numbers automatically starting at 258 (this avoids collisions with literal character tokens) and creates a .h with definitions of the tokens numbers.