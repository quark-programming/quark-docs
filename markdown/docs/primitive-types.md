# Primitive Types

Quark has several built-in primitive types for representing data. Here are the default types and their C equivalents as of as seen in `lib::types`

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

You can reuse any other C type by using the extern keyword. For example, to use the C `long long` type, you can declare it like so:

```quark
type LongLong = extern "long long";
```

Quark also comes with helper types like `auto` and `int`. These types conform to whatever type they are matched with. For example, this is how you can use the `auto` type:

```quark
i32 number = 10;
auto another_number = number;
```

Here, the `another_number` variable will be of type `i32` since it is being assigned the value of the number variable. `int` will do the same thing, but will only match number types.

<footer>
[Prev: Hello World](#hello-world)
[Next: Pointer Types](#pointer-types)
</footer>