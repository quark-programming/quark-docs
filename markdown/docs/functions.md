# Functions

Functions in Quark are defined by their return type, their name, then their arguments. We can write a simple `add` function that adds two numbers together and returns that result,

```quark
i32 add(i32 a, i32 b) {
   return a + b;
}
```

Functions can also use [generics](#generics) to operate on multiple different types. You can specify the generics after the name of the function using `<` and `>`:

```quark
T echo<T>(T value) {
   return value;
}
```

You can specify a return type with a generic before its definition after the function name and the compiler will go back and use the generic type as the return value.

You can call functions using `(` and `)` around the argument values.

```quark
i32 sum = add(1, 2);
// This will call the 'add' function to add the two numbers together
\
print_i32(sum); // 3
```

<footer>
[Prev: Control Statements](#control-statements)
[Next: External C Functions](#external-c-functions)
</footer>