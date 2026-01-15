# Compound Types

Quark has 3 forms of **compound types**,
<ul>
    <li>Pointers: either `Type*` or `&Type`</li>
    <li>Arrays: `[Type]`</li>
    <li>Optionals: `Type?`</li>
</ul>

## Pointer Types

Pointer types reference a value and can be created using a reference -- `&`, or dereferenced using `*`.

```quark
i32 number = 5;
i32* number_pointer = &number;
*number_pointer = 32;
\
print_i32(number); // 32
```

Pointer types can also be dereferenced with an offset or **indexed** using `[]`, or indexed by a range of values to create an **array**.

```quark
i32* number_values = /* some value */;
\
i32 first_value = number_values[0];
\
[i32] second_and_third = number_values[1..2];
```

## Array Types

Array types and arrays are defined using square brackets -- `[]`.

```quark
[i32] numbers = [1, 2, 3];
\
for(int i = 0; i < numbers.len(); i++) {
    print_i32(numbers[i]);
}
```

Quark also includes a dynamic array implementation called `Vec`. You can use this struct to add or remove items from an array at run-time.

```quark
Vec<i32> numbers = Vec::from([1, 2, 3]);
numbers.push(4);
\
for(int i = 0; i < numbers.len(); i++) {
    print_i32(numbers[i]); // 1, 2, 3, 4
}
```

## Optional Types

Optionals can be defined using a `?` after a type name. You can interface with the struct `Option` to create new optional values.

```quark
i32? maybe_int = Option::Some(42);
i32? maybe_not_int = Option::None();
\
if(maybe_int.is_some()) {
    print_i32(maybe_int.unwrap()); // 42
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

<footer>
[Prev: Types Basics](#types-basics)
[Next: Structures](#structures)
</footer>