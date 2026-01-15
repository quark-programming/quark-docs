# str

[lib::slice](#slice)

```quark
struct str {
    [char] slice;
}
```

The default string type, can be created using `""`.

```quark
str message = "Hello World";
```

You can create a loop to print the character codes of all characters in a string like this:

```quark
str string = "abc";
\
for(int i = 0; i < string.len(); i++) {
    print_u8(string.slice[i].(u8)); // 97, 98, 99
}
```

<hr />

## str::len()

```quark
usize str::len(self);
```

Returns the length of string `self`.

## str::data()

```quark
char* str::data(self);
```

Returns the raw data pointer of string `self`.

## Overrides

```quark
bool str::[Operator::equals](self, str string);
```