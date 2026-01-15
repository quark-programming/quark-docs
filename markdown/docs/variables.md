# Variables

You can define a variable in Quark with a type followed by a variable name. Variable declarations are **inline**, so you can use them inside different statements.

```quark
i32 x = 6;
print_i32(x); // 6
\
if(i32 y = x) {
    print_i32(y); // prints 'y' if 'x' is not zero
}
```

You can modify the types of variables using `=`,

```quark
i32 x = 5;
print_i32(x); // 5
\
x = 12;
print_i32(x); // 12
```

You can also reference variables to create pointers that can be modified from different parts of your code:

```quark
i32 x = 5;
i32* x_ptr = &x;
\
*x_ptr = 12;
print_i32(x); // 12
```

Inlining can be useful here if we have a function that changes an input variable,

```quark
void fetch_secret(str* ptr) {
    *ptr = "My Secret";
}
\
fetch_secret(&(str secret));
print(secret); // My Secret
```

<footer>
[Prev: Literals](#literals)
[Next: Constants](#constants)
</footer>