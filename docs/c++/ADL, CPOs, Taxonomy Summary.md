---
sidebar_position: 1
---

# Summary of ADL, CPOs, Taxonomy

- [CppCon 2019: Kostas Kyrimis ADL: introduction in name taxonomy, customization points and use cases](https://www.youtube.com/watch?v=u1iewQYkYGE)

### Why ADL?

```cpp
#include <iostream>

int main(){
    std::operator<<(std::cout,"Hello World\n");
    std::cout<<"Hello World\n";      // Without ADL this is invalid
}
```

