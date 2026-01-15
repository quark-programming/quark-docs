# Quick Start

All source code needed to build your first project can be found on the GitHub repository: [quark-programming/quark](https://github.com/quark-programming/quark)

You can download the source code using the [latest release](https://github.com/quark-programming/quark/releases)

After downloading the source code, navigate to its folder and build the project using make. You can specify the output binary name using the out variable. By default, it will create a binary named `qc`.

```bash
make build
make build QC=my_compiler
```

All source code is licensed under the MIT License. See the [LICENSE](https://github.com/quark-programming/quark/blob/main/LICENSE) file for more information.

When writing Quark code, source files should use the `.qk` file extension. You can compile your Quark source files using the compiler like so

```bash
./qc path/to/source_file.qk -o output_code.c
cc output_code.c -o final_executable
```

As of 0.2.1 the compiler requires the lib folder to be present in the imports directory. If needed, you can specify a custom imports directory using the -l flag. (defaults to the current working directory)

```bash
./qc path/to/source_file.qk -o output_code.c -l path/to/imports/dir
```

Use the `-h` flag for help

```bash
./qc -h
```

<footer>
[Next: Hello World](#hello-world)
</footer>