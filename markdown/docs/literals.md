# Literals

Quark has a few types of literals:
<ul>
    <li>Numeric Literals: `0`, `34`, ...</li>
    <li>[Array Literals:](#compound-types) `[1, 2, 3]`</li>
    <li>[Structure Literals:](#structures) `Struct { a, b, c }`</li>
    <li>External C Values: `extern&lt;File*&gt; stdin`</li>
</ul>

## Numeric Literals

Numeric literals, or numbers, are any sequence of digits. They take on the `int` type so they will match with any number type:

```quark
auto x = 54; // x is an 'int'
\
i32 y = 33;
```

You can also get the size of a value or type, in bytes, using the `sizeof` keyword.

```quark
sizeof(y) // 4
sizeof(u8) // 1
sizeof(f64) // 8
```

## External C Values

You can use values that are defined in C using the `extern` keyword and angle brackets to specify the type. We can read from `stdin` using the `stdin` external value and `fread` function:

```quark
usize extern fread<T>(T* ptr, usize size, usize n, File* stream);
const File* file_stdin = extern<File*> stdin;
\
char* buffer = /* ... */;
fread(buffer, sizeof(char), /* buffer size */, file_stdin);
```

<footer>
[Prev: Type Modifiers](#type-modifiers)
[Next: Variables](#variables)
</footer>