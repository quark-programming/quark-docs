# Pointer Types

In Quark, pointer types are declared using the `*` symbol after a type or the `&` before a type. For example, to declare a pointer to an integer, you would write:

```quark
i32* ptr_to_int;
// or
&i32 ptr_to_int;
```

Pointers can be referenced and dereferenced using the `&` and `*` operators, similar to C.

```quark
i32 number = 42;
i32* ptr_to_number = &number;
i32 dereferenced_number = *ptr_to_number;
```

Pointers can also be indexed by any integer type

```quark
i32* some_array = /* ... */;
\
i32 first_item = some_array[0];
i32 second_item = some_array[1];
```

<footer>
[Prev: Primitive Types](#primitive-types)
[Next: Structures](#structures)
</footer>