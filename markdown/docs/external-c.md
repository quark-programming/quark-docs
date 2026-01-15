# Using External C Code

Quark allows you to interface with external C code using the extern keyword. This is useful for leveraging existing C libraries or functions within your Quark programs.

```quark
void extern puts(char* data);
T* extern malloc<T>(usize size);
File* extern stdout = extern<File*> stdout;
```

None of these declarations will be compiled to C, but you can use them like regular Quark functions and variables.

<footer>
[Prev: Importing](#importing)
</footer>