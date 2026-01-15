# Structures

Structures in Quark are similar to structs in C, but with added support for generics. You can define a structure using the `struct` keyword followed by the structure name and its fields.

```quark
struct Person {
   str name;
   u8 age;
}
```

You can create new instances of a structure using the following syntax:

```quark
auto john = Person {
   name: "John",
   age: 30,
};
```

Accessing structure fields is done in the same way as in C, and structures can be dereferenced while accessing fields if you have a pointer to a structure.

```quark
str johns_name = john.name;
Person* ptr_to_john = &john;
u8 johns_age = ptr_to_john->age;
```

Structures can also contain functions as both static methods and instance methods. You can define both the same way as regular functions, but instance methods must include a `self` parameter to reference the instance.

```quark
struct Counter {
   u32 count;
\
   u32 get_count(self) {
       return self.count;
   }
\
   Counter new() {
       return Counter { count: 0 };
   }
}
```

With this counter struct, we can create a new instance and call its methods like so:

```quark
Counter counter = Counter::new();
u32 current_count = counter.get_count();
```

Instance methods can also modify the structure's fields through the `&self` parameter.

```quark
struct Counter {
   // ...
   void increment(&self) {
       self->count++;
   }
   // ...
}
```

You can also define methods outside of the structure definition using the `::` operator in the function name. Note that the self keyword will not work here.

```quark
u32 Counter::decrement(Counter* self) {
   self->count--;
   return self->count;
}
```

<footer>
[Prev: Pointer Types](#pointer-types)
[Next: Arrays](#arrays)
</footer>