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

The Quark compiler will generate an implementation of the generic type or function for each unique type it is used with. For example, if you create an `Array&lt;i32&gt;` and an `Array&lt;char&gt;`, the compiler will generate two separate structures:

```quark
struct Array__int32_t { int32_t* data; size_t size; };
struct Array__char { char* data; size_t size; };
```

<footer>
[Prev: Arrays](#arrays)
[Next: Optionals](#optionals)
</footer>