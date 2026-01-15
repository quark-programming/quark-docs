# Range

[lib::slice](#slice)

```quark
struct Range {
    usize start;
    usize end;
}
```

`Range` specifies a range of numbers from `start` to `end`. You can create a range using the `..` syntax.

```quark
Range range = 1..5;
```

You can index a pointer with a range to create an [Slice](#slice-Slice)

```quark
[i32] range = malloc(sizeof(i32) * 4).(i32*)[0..3];
```

<hr />

## Range::new()

```quark
Range Range::new(usize start, usize end);
```

Creates a new range from `start` and `end` values.

## Range::len()

```quark
usize Range::len(self);
```

Returns the length of a range.