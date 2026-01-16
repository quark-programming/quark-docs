```quark
sockaddr_in address = sockaddr_in {
    sin_family: AF_INET,
    sin_port: htons(PORT),
};
failed |= bind(server, (&address).(void*), sizeof(address));
```