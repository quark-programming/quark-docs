# Type Modifiers

You can modify types using type modifiers. Currently Quark only supports `const` to create immutable types:

```quark
const i32 number = 5;
\
number = 12; // error because 'number' is constant
```

`const` in Quark has a different [operator precedence](https://en.cppreference.com/w/c/language/operator_precedence.html) compared to `const` in a language like C. In C, `const` is attached to the next type:

```c
const char* // Pointer to constant value
```

In Quark:

```quark
const char* // Constant pointer to char
```

Types can use parenthesis to change order of operations, unlike C,

```quark
(const char)* // Pointer to constant value
```

The main reason for this is to make it easier to create `const` variables:

```quark
const char* c_string = "Hello World".data();
\
c_string = "Hello, John".data(); // error because 'c_string' is a constant
```

<footer>
[Prev: Generics](#generics)
[Next: Literals](#literals)
</footer>