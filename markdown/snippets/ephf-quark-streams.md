```quark
import lib::streams;

int extern STDIN_FILENO;

Stream input = Stream::from(STDIN_FILENO);
String message = String::new();
```