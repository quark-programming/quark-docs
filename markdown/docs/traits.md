# Traits

{!
This is an experimental feature, download [<span class="experimental">Experimental Pre-release</span>](https://github.com/quark-programming/quark/releases/tag/0.5.5pre). Some features may required cloning the [feature/traits](https://github.com/quark-programming/quark/tree/feature/traits) branch on the Github repository.
}

Traits in Quark can be defined using the `trait` keyword and follow mostly the same structure as a `struct`.

```quark
trait Transformable {
    f64 into_float(self);
}
```

You can implement these traits on structures,

```quark
struct FixedPoint : Transformable {
    i64 value;
    u32 offset;

    f64 Transformable::into_float(self) {
        return self.value.(f64) / self.offset;
    }
}
```

You can also specify that `FixedPoint` only implements `Transformable::into_float`

```quark
struct FixedPointer : Transformable::into_float {}
```

> Traits currently are working through development to be usable along side generics.

We can specify trait bound generics and call trait functions using those generic types,

```quark
f64 fmult<T : Transformable::into_float>(f64 a, T b) {
    return a * b.into_float();
}

fmult(5, FixedPoint { 13, 10 }); // 6.5
```

You can also implement traits partially, a common way you would want to do this is for the `Operator` trait.

```quark
import operator::{ Operator };

// notice no ': Operator', and ': Transformable' isn't required
struct FixedPoint {
    // ...
    
    bool Operator::equals(self, FixedPoint other) {
        return self.into_float() == other.into_float();
    }
}
```

If you don't add `: Transformable`, `FixedPoint` will not match with `T : Transformable`, but it will match with `T : Transformable::into_float`. Using the `Operator` trait, we can provide operator overrides,

```quark
FixedPoint a = FixedPoint { 5, 10 };
FixedPoint b = FixedPoint { 50, 100 };

if(a == b) print("a is equal to b"); // a is equal to b
```

> Note that operator overrides do technically work in the latest full release and work in the same way, but you cannot use bounds or extension notation.


<footer>
[Prev: Generics](#generics)
[Next: Type Modifiers](#type-modifiers)
</footer>