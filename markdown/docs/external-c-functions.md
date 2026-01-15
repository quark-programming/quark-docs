# Calling External C Functions

You can call external C functions by defining functions using the `extern` keyword. These functions will act like any function in Quark, but won't be compiled.

```quark
usize extern printf<A, B>(char* fmt, A a, B b);
```

We can use this function to print all of the values in an array:

```quark
[i32] numbers = [1, 2, 3];
\
for(int i = 0; i < numbers.len(); i++) {
    printf("numbers[%d] = %d\n".data(), i, numbers[i]);
}
```

```none
numbers[0] = 1
numbers[1] = 2
numbers[2] = 3
```

You can specify includes to the compiler using the `-i` flag on `./qc`,

```bash
./qc [...] -i raylib.h
```

This will add the `raylib.h` include to the top of the output file:

```c
#include "raylib.h"
```

<footer>
[Prev: Functions](#functions)
[Next: Multiple Files](#multiple-files)
</footer>