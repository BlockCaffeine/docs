# Jura Coffee Machine

- Model: Jura Impressa XF50 ([Manual](https://www.ac.tuwien.ac.at/files/manuals/jura_impressa_xf50/manual_jura_impressa_xf50relaunch.pdf))
- Protocol: Serial communication with UART and custom obfuscation
- Serial baud rate: 9600
- Protocol Documentation
  - https://protocol-jura.at.ua/
  - https://github.com/Jutta-Proto/protocol-cpp

| Command | Description         |
| ------- | ------------------- |
| AN:01   | Turn machine on     |
| AN:02   | Turn machine off    |
| FA:05   | Turn strenght wheel |
| FA:06   | Turn strenght wheel |
| FA:09   | Single Coffee       |
| FA:0A   | Double Coffee       |
| FA:07   | Single Espresso     |
| FA:08   | Double Espresso     |
