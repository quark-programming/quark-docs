# `operator`

> [dev:lib/operator.qk](https://github.com/quark-programming/quark/blob/dev/lib/operator.qk)

```quark
import operator;
```

Contains the `Operator` operator override trait.

```quark
import c::string::{ memcmp };
import operator::{ Operator };

bool str::[Operator::equals](self, str other) {
    return self.len() == other.len() && !memcmp(self.slice.data, other.slice.data, self.len());
}

if("hello" == "hello") {
    print("string equality is true"); // string equality is true
}

struct PointerContainer<T> {
    T* data;

    T Operator::index(self, usize index) {
        return self.data[index];
    }
}

PointerContainer<i32> container = PointerContainer { /* ... */ };
i32 num = container[0];
```

<hr />

## `operator::Operator`

```quark
import operator::{ Operator };
trait Operator;
```

Implementing `Operator` trait methods overrides the parent structures functionality on specific operators.

### `operator::Operator::add`

```quark
import operator::{ Operator };
T Operator::add<T, K>(self, K other);
```

The operator override for the `+` (addition) operator.

```quark
struct NumWrapper {
    i64 value;

    NumWrapper Operator::add(self, NumWrapper other) {
        return NumWrapper { self.value + other.value };
    }
}

auto wrapper = NumWrapper { 15 };
auto sum = wrapper + NumWrapper { 24 };
print_i64(sum.value); // 39
```

### `operator::Operator::subtract`

```quark
import operator::{ Operator };
T Operator::subtract<T, K>(self, K other);
```

The operator override for the `-` (subtraction) operator.

```quark
Range Range::[Operator::subtract](self, usize offset) {
    return (self.start - offset)..(self.end - offset);
}

Range range = 3..6 - 2;
print_u64(range.start); // 1
print_u64(range.len()); // 3
```

### `operator::Operator::multiply`

```quark
import operator::{ Operator };
T Operator::multiply<T, K>(self, K other);
```

The operator override for the `*` (multiplication) operator.

```quark

```