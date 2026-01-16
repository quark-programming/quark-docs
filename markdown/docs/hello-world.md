# Hello World

Let's write out first program in Quark. Start by creating a new filed with the `.qk` extension. Here I'll use `hello.qk`.

```quark
print("Hello, World!");
```

The Quark compiler automatically imports the standard library, including `lib::io`, which contains the `print()` function used to output text to the console.

Once you have your compiler executable, you can build the project:

```bash
qc hello.qk -o hello.c # -l $QUARK_ROOT
cc hello.c -o hello
```

<footer>
[Prev: Quick Start](#quick-start)
[Next: Comments](#comments)
</footer>