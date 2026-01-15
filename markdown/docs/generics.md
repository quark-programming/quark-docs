# Generics

Quark supports generics, allowing you to create data structures and functions that can operate on different types. You can define a generic type by using angle brackets `<` and `>` to specify type parameters.

```quark
struct Array<T> {
   T* data;
   usize size;
}
```

```quark
T echo<T>(T value) {
   return value;
}
```

You can create different versions of these types by specifying a type between `<` and `>` after the name of the value with generics:

```quark
Array<i32> numbers = Array<i32> { /* ... */ };
\
i32 value = echo<i32>(5);
```

Generics can also be inferred when types are matched with each-other,

```quark
Array numbers = Array<i32> { /* ... */ };
// numbers will be type 'Array&lt;i32&gt;'
\
i32 value = echo(5);
// 'echo' will be called as 'echo&lt;i32&gt;'
```

<footer>
[Prev: Structures](#structures)
[Next: Type Modifiers](#type-modifiers)
</footer>

<hr />

## Compilation

> This section talks about how the compiler handles generics, knowledge of this is not needed in order to program in Quark, but some may find it helpful to know. Feel free to move to the next section to continue learning.

Quark uses **monomorphization** when compiling generics. Each instance of a generic with a unique type compiles its own version of a declaration. We can start by defining an `echo` function that just returns the value put into it:

```quark
T echo<T>(T value) {
   return value;
}
```

Calling the function with two different types will result in two different `echo` functions being compiled.

```quark
i32 x = echo(5);
u8 y = echo(14); 
```

This compiles roughly to

```c
int32_t echo__int32_t(int32_t value) {
   return value;
}
\
uint8_t echo__uint8_t(uint8_t value) {
   return value;
}
\
int main() {
   int32_t x = echo__int32_t(5);
   uint8_t y = echo__uint8_t(14);
}
```

The same goes for structures and their methods, if we define a `Wrapper` structure we can demonstrate this:

```quark
struct Wrapper<T> {
   T value;
\
   T get_value() {
      return value;
   }
}
\
Wrapper<i32> x = Wrapper { 15 };
```

This compiles roughly to

```c
struct Wrapper__int32_t { int32_t value; };
\
int32_t Wrapper__int32_t__get_value(Wrapper__int32_t self) {
   return self.value;
}
\
int main() {
   Wrapper__int32_t x = (Wrapper__int32_t) { 15 };
}
```

Identifiers are compiled as, and will suffix their name with a number (starting at `1`), if there are any overlapping names. Any [keywords](https://en.cppreference.com/w/c/keyword.html) in identifier names will be suffixed by an `_`.

```none
[Parent Structure Identifier]__[Identifier Value]__[Generics]
```

```quark
// duplicate name
void echo__int32_t() {}
\
// generic that will collide with duplicate name
T echo<T>(T value) { /* ... */ }
\
echo<i32>(5);
```

This compiles roughly to

```c
void echo__int32_t() {}
\
int32_t echo__int32_t1(int32_t value) { /* ... */ }
\
int main() {
   echo__int32_t1(5);
}
```

And for keywords:

```quark
i32 default = 5;
```

This compiles roughly to

```c
int main() {
   int32_t default_ = 5;
}
```

<footer>
[Prev: Structures](#structures)
[Next: Type Modifiers](#type-modifiers)
</footer>