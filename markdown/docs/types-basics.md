# Types Basics

Every declaration is required to be prefixed by a **type**.

```quark
Type variable = /* some value */;
```

Quark comes with some primitive types out of the box which have their C equivalents.

<div style="display: flex; gap: 2em;">
    <table style="flex: 1;">
        <tr><th>Quark Type</th><th>C Equivalent</th></tr>
        <tr><td>`u8`</td><td>`uint8_t`</td></tr>
        <tr><td>`i8`</td><td>`int8_t`</td></tr>
        <tr><td>`u16`</td><td>`uint16_t`</td></tr>
        <tr><td>`i16`</td><td>`int16_t`</td></tr>
        <tr><td>`u32`</td><td>`uint32_t`</td></tr>
        <tr><td>`i32`</td><td>`int32_t`</td></tr>
        <tr><td>`u64`</td><td>`uint64_t`</td></tr>
        <tr><td>`i64`</td><td>`int64_t`</td></tr>
        <tr><td>`f32`</td><td>`float`</td></tr>
        <tr><td>`f64`</td><td>`double`</td></tr>
        <tr><td>`isize`</td><td>`ssize_t`</td></tr>
        <tr><td>`usize`</td><td>`size_t`</td></tr>
    </table>
    <table style="flex: 1;">
        <tr><th>Quark Type</th><th>C Equivalent</th></tr>
        <tr><td>`char`</td><td>`char`</td></tr>
        <tr><td>`ichar`</td><td>`signed char`</td></tr>
        <tr><td>`uchar`</td><td>`unsigned char`</td></tr>
        <tr><td>`Short`</td><td>`short`</td></tr>
        <tr><td>`UShort`</td><td>`unsigned short`</td></tr>
        <tr><td>`Int`</td><td>`int`</td></tr>
        <tr><td>`UInt`</td><td>`unsigned int`</td></tr>
        <tr><td>`Long`</td><td>`long`</td></tr>
        <tr><td>`ULong`</td><td>`unsigned long`</td></tr>
        <tr><td>`bool`</td><td>`bool`</td></tr>
        <tr><td>`File`</td><td>`FILE`</td></tr>
        <tr><td>`void`</td><td>`void`</td></tr>
    </table>
</div>

Most of the types up above are **numeric**, so they can be matched with each-other without any errors,

```quark
u32 unsigned = 15;
i32 signed = unsigned; // no error
```

Quark also allows you to reference **external** C types using the `extern` keyword and either an **identifier** or a **string**.

```quark
extern time_t time_value;
extern "struct sockaddr_in" address;
```

You can also define your own types using the `type` keyword followed by the name of your type and its value:

```quark
type MyType = i32;
\
MyType number = 5; // number is an 'i32'
```

Quark also uses the `auto` and `int` keywords to infer types. `auto` will reference the first type it is matched with, without exception, but `int` will only match with the type if it is a number. For now, I will define a **structure** to show this effect.

```quark
struct NonNumberType {}
```

`auto` variables:

```quark
auto x = 5.(i32);
// '.(Type)' will cast a value to that specific type
// here 'x' will become an 'i32' type
\
auto y = NonNumberType {}
// Here we create a structure which is NOT a number type
// 'y' will become a 'NoneNumberType' type
```

`int` variables:

```quark
int x = 5.(i32);
// Because 'i32' is a numeric type, there will be no errors emitted here

int y = NonNumberType {}
// Because structures are NOT numeric, the compiler will error here
```

You can also specify a type based on a type of another variable using `typeof`

```quark
i32 x = 5;
\
typeof(x) y = 14; // 'y' is an 'i32'
```

<footer>
[Prev: Comments](#comments)
[Next: Compound Types](#compound-types)
</footer>