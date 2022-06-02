---
sidebar_position: 1
---

# Summary of ADL, CPOs, Taxonomy

- [CppCon 2019: Kostas Kyrimis ADL: introduction in name taxonomy, customization points and use cases](https://www.youtube.com/watch?v=u1iewQYkYGE)

## Why ADL?

```cpp
#include <iostream>

int main(){
    std::operator<<(std::cout,"Hello World\n");
    std::cout<<"Hello World\n";      // Without ADL this is invalid
}
```

- Witout ADL we would not be able to utilize the operator overload
- Non member functions (that are part of the interface of a specific type)
- Templates (2 phase lookup)
- Unconstrained templates are often the source of very weird errors (ADL Bias)

## Name Texonomy

- The process of looking up a "name" is name taxonomy
- Name is either qualified or unqualified and if it's a template, then it can be dependent or non-dependent

