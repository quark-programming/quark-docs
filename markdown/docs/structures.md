# Structures

Structures are how Quark implements **Object Oriented Programming**. You can define a structure with different fields that hold multiple types of data, and define **instance** and **static** methods to transform that data.

You can define a structure using the `struct` keyword followed by the structure name and its fields:

```quark
struct Person {
   str name;
   u8 age;
}
```

You can create instances of the structure using its name as the type, followed by the data inside of the structure. The fields can be named, or nameless (in the order of their definition):

```quark
Person john = Person { "John", 32 };
\
// or
\
Person dave = Person {
   name: "Dave",
   age: 27,
};
```

You can access and modify these fields using the `.` syntax, or dereference and access using the `->` operator.

```quark
print(john.name); // John
print_i32(dave.age); // 27
\
Person* john_ref = &john;
\
print_i32(john->age); // 32
```

Structures can also be defined with **static** and **instance** methods. You can access the instance object using the `self` keyword as the first argument in a function.

```quark
struct Counter {
   i32 value;
\
   void print(self) {
      print_i32(self.value);
   }
}
```

You can also modify the instance object if the `self` argument is a reference:

```quark
struct Counter {
   i32 value;
   // ...
   void increment(&self) {
      self->value += 1;
   }
}
```

You can then call these methods like they are fields on the instance object,

```quark
Counter counter = Counter { 0 };
\
counter.increment(); // First argument is replaced with '&counter'
\
counter.print(); // 1
```

You can also create **static** methods and call any method as a static method using the `::` syntax on the structure name:

```quark
struct Counter {
   // ...
   Counter new() {
      return Counter { 0 };
   }
}
\
Counter counter = Counter::new();
\
Counter::increment(&counter);
\
counter.print(); // 1
```

You can also define methods outside of the structure definition using the `::` operator in the function name. Note that the self keyword will not work here.

```quark
void Counter::decrement(Counter* self) {
   self->count--;
}
\
Counter counter = Counter::new();
\
counter.decrement();
\
counter.print(); // -1
```

<footer>
[Prev: Compound Types](#compound-types)
[Next: Generics](#generics)
</footer>