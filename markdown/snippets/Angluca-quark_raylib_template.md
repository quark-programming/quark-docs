```quark
while(is_close != true) {
    ClearBackground(bg_color);
    BeginDrawing();
        DrawText("hello quark".data(), 10, 80, 20, gray);
    EndDrawing();
    is_close = WindowShouldClose();
}
```