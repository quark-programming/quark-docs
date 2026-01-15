# Optionals

In Quark, optionals are a way to represent values that may or may not be present. An optional type is defined using the `?` symbol after a type. For example, to define an optional integer, you would write:

```quark
i32? maybe_number;
```

Optional values are created using the `Option` struct from `lib::containers`.

```quark
maybe_number = Option::Some(42);
maybe_number = Option::None();
```

Optionals can also be optionally coalesced using the `?` operator when using any operator with a [precedence of 1](https://en.cppreference.com/w/c/language/operator_precedence.html).

```quark
struct MyStruct {
  i32 value;
}
\
MyStruct? ptr = Option::None();
i32? value = ptr?.value;
```

```quark
i32*? maybe_array = Option::None();
i32? maybe_first = maybe_array?[0];
```

<footer>
[Prev: Generics](#generics)
[Next: Control Statements](#control-statements)
</footer>