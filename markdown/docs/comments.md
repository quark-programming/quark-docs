# Comments

In Quark, you can write anything you want using **comments** and it won't get compiled with by the compiler. You can start a single-line comment using `//`.

```quark
// Hello, this is a comment
// Nothing I write here will give me errors or be compiled by the compiler
\
print("Hello World");
\
// Notice how that print function is highlighted
// These comments only work on lines prefixed by '//'
```

Repeatedly using `//` can be repetitive, and we can't end a comment before the end of a line. You can define multi-line comments using `/*` and `*/`.

```quark
/*
This comment spans until I use the asterisk and slash again
Anything I write in these lines will be commented out
*/
```

You can also use these comments in between pieces of code,

```quark
i32 my_value = /* This is a very cool number */ 5;
```

<footer>
[Prev: Hello World](#hello-world)
[Next: Types Basics](#types-basics)
</footer>