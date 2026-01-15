# Arrays

In Quark, you can define stack-allocated fixed-sized arrays using the `[]` syntax for both types and array literals.

```quark
[i32] numbers = [1, 2, 3];
```

Arrays are shorthand for the `Slice` type in the `lib::slice` library.

If you need to create a dynamically-sized or heap-allocated array, you can use the `Vec` type

```quark
Vec<i32> numbers = Vec::from([1, 2, 3]);
```

<footer>
[Prev: Structures](#structures)
[Next: Generics](#generics)
</footer>