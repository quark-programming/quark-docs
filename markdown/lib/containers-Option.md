# Option

[lib::containers](#containers)

```quark
struct Option<T> {
    T value;
    bool some;
}
```

The `Option` type is a type that may or may not contain a value. You can create an option type using the `?` syntax.

```quark
Option<i32> x = Option::Some(5.(i32));
i32? y = Option::None();
```

You can use methods like `is_some()` and `unwrap()` to interface with the optional's data,

```quark
if(x.is_some()) {
    print_i32(x.unwrap()); // 5
}
```

Optionals can also be **optionally coalesced** to access methods, index, or call functions conditionally.

```quark
void hello_world() {
    print("Hello World");
}
\
auto maybe_hello_world = Option::Some(hello_world);
\
maybe_hello_world?(); // only calls is 'maybe_hello_world' is 'Some'
```

```quark
struct MyStruct {
    i32 field;
}
\
MyStruct? maybe_struct = Option::None();
\
i32? value = maybe_struct?.field; // None
```