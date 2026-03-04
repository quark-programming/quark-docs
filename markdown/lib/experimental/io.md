# `io`

> [dev:lib/io.qk](https://github.com/quark-programming/quark/blob/dev/lib/io.qk)

```quark
// imported by default
import io;
```

Interfacing with the command line and files.

```quark
print("Hello World!");
print_file(extern<File*> stderr, "An Error Has Occurred");

print_i32(54);
```

<hr />

## `io::write_file`

```quark
import io::{ write_file };
void write_file(File* file, str message);
```

`write_file` writes the string `message` to `file`, not including a newline.

```quark
File* extern stdout;
str name = "Grant";

write_file(stdout, "Hello, ");
write_file(stdout, name);
write_file(stdout, "\n");       // Hello, Grant
```

<hr />

## `io::print_file`

```quark
import io::{ print_file };
void print_file(File* file, str message);
```

`print_file` writes the string `message` to `file`, including a newline.

```quark
print_file(extern<File*> stdout, "Hello"); // Hello
print_file(extern<File*> stdout, "World"); // World
```

<hr />

## `io::print`

```quark
import io::{ print };
void print(str message);
```

`print` writes the string `message` to the standard output, including a newline.

```quark
str name = "John";

print("Your name is:"); // Your name is:
print(name);            // John
```

<hr />

## `io::panic`

```quark
import io::{ panic };
void panic(str message);
```

`panic` writes an error to standard error, then exits the program with `EXIT_FAILURE`.

```quark
i32 divide(i32 a, i32 b) {
    if(b == 0) panic("Dividing by zero");
    return a / b;
}
```