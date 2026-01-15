# Slice

[lib::slice](#slice)

```quark
struct Slice<T> {
    T* data;
    usize size;
}
```

The default array-like type, can be created using `[]`.

```quark
Slice<i32> x = [1, 2, 3];
[i32] y = x;
```

Slices can also be created from indexing using [Ranges](#slice-Range),

```quark
[i32] range = malloc(sizeof(i32) * 4).(i32*)[0..3];
```

Here's an example of using a slice to print a countdown:

```quark
[i32] slice = [3, 2, 1];
\
for(int i = 0; i < slice.size; i++) {
    print_i32(slice[i]); // 3, 2, 1
}
```

<hr />

## Overrides

```quark
T Slice::[Operator::index](self, usize index);
```