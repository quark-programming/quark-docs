# Control Statements

**Control Statements** are a way to run code conditionally depending on the state of the program. We can use a basic `if` condition print something only if our password is correct:

```quark
str password = "MyPassw0rd!";
str correct_password = "MyPassword!";
\
if(password == correct_password) {
   print("Logged in!");
   // This will not print because the 'password' and 'correct_password' strings
   // are not equivalent!
}
```

We can also repeat code until a condition is `false` using the `while` loop. We can create a countdown like this:

```quark
int counter = 10;
\
// This condition checks if the counter is greater than zero
while(counter > 0) {
   print_i32(counter); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
   counter -= 1;
}
```

A simpler way to do this is the `for` loop. You can declare a variable, condition, and an expression to run after every loop,

```quark
for(int counter = 10; counter > 0; counter--) {
   print_i32(counter); // 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
}
```

<footer>
[Prev: Operators](#operators)
[Next: Functions](#functions)
</footer>