# lib::io

Source: [lib/io.qk](https://github.com/quark-programming/quark/blob/main/lib/io.qk)

## Function Declarations

```quark
void write_file(File* file, str message);
```

Writes `message` to `file`.

```quark
void print_file(File* file, str message);
```

Writes `message` to `file` with a newline.

```quark
void print(str message);
```

Writes `message` to `stdout` with a newline.

```quark
void panic(str message);
```

Prints `message` to `stderr` with newline, then exists with `EXIT_FAILURE`.

## External Declarations

```quark
usize extern fwrite<T>(T* ptr, usize size, usize nitems, File* stream);
```

```quark
File* extern stdout;
```