# Functions

Functions in Quark are defined in a similar way to C, starting with the return type, followed by the function name and parameters. Here is an example of a simple function that returns the sum of two integers:

```quark
i32 add(i32 a, i32 b) {
   return a + b;
}
```

Functions can also use generics to operate on different types. Here is an example of a generic function that returns the value it receives:

```quark
T echo<T>(T value) {
   return value;
}
```

Notice that the return type is used before the declaration of the generic type parameter(s).

<footer>
[Prev: Control Statements](#control-statements)
[Next: Importing](#importing)
</footer>