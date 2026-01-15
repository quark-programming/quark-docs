# Multiple File Projects

Quark allows you to import other `.qk` source files using the import keyword. This is useful for organizing your code into separate modules and reusing code across different files.

Let's say we have a `print_message()` function defined in a file named `other/utils.qk` and we want to use it in our main file `main.qk`. Here's how you can do that:

```quark
import other::utils;
\
print_message("Hello World!");
```

In this example, we import the `utils.qk` file located in the `other/` directory. After importing, we can directly use the `print_message()` function defined in that file.

`other::utils` is transformed into the relative path `IMPORT_PATH/other/utils.qk` when searching for the file to import.

By default the `IMPORT_PATH` is set to `./`, but it can be specified using the `-l` flag when running the compiler.

```bash
./qc main.qk -o output.c -l path/to/imports/dir
```

<footer>
[Prev: External C Functions](#external-c-functions)
[Quark Standard Library](lib.html)
</footer>