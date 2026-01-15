# Vec

[lib::vector](#vector)

```quark
struct Vec<T> {
    T* data;
    usize size;
    usize capacity;
}
```

The `Vec` vector is Quarks implementation of a dynamic array. `Vec` is heap allocated and will resize when new elements are pushed to it.

```quark
Vec<i32> numbers = Vec::from([1, 2, 3]);
numbers.push(4);
\
for(int i = 0; i < numbers.length(); i++) {
    print_i32(numbers[i]); // 1, 2, 3, 4
}
```

<hr />

## Vec::new()

```quark
Vec<T> Vec::new();
```

Creates a new vector with a capacity of `1`.

## Vec::len()

```quark
usize Vec::len(self);
```

Returns the length of a vector.

## Vec::reserve()

```quark
void Vec::reserve(&self, usize n);
```

Reserves `n` items on vector `self`.

## Vec::push()

```quark
void Vec::push(&self, T item);
```

Adds an item `item` to the end of vector `self`.

## Vec::push_many()

```quark
void Vec::push_many(&self, [T] slice);
```

Adds every item in `slice` to the end of vector `self`.

## Vec::from()

```quark
Vec<T> Vec::from([T] slice);
```

Allocates a new vector and adds the items from `slice` to it.

## Vec::pop()

```quark
void pop(&self);
```

Removes the last item from vector `self`.

## Operator Overrides

```quark
T Vec::[Operator::index](self, usize index);
```