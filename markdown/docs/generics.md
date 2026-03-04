# Generics

Quark supports generics, allowing you to create data structures and functions that can operate on different types. You can define a generic type by using angle brackets `<` and `>` to specify type parameters.

```quark
struct Array<T> {
   T* data;
   usize size;
}
```

```quark
T echo<T>(T value) {
   return value;
}
```

You can create different versions of these types by specifying a type between `<` and `>` after the name of the value with generics:

```quark
Array<i32> numbers = Array<i32> { /* ... */ };
\
i32 value = echo<i32>(5);
```

Generics can also be inferred when types are matched with each-other,

```quark
Array numbers = Array<i32> { /* ... */ };
// numbers will be type 'Array&lt;i32&gt;'
\
i32 value = echo(5);
// 'echo' will be called as 'echo&lt;i32&gt;'
```

<footer>
[Prev: Structures](#structures)
[Next: Type Modifiers](#type-modifiers)
</footer>