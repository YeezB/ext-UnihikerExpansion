# Unihiker Expansion Board
- [中文版](./README.md)

This is an IO expansion board designed specifically for the Unihiker. It solves three major problems with the Unihiker: insufficient native pins, inconvenient battery charging, and lack of motor drive.
The K10's powerful on-board resources (screen, camera, sensors, etc.) are its charm, but they also bring several core pain points that limit its potential:
- GPIO severely limited: The M10 board has few GPIOs, and other interfaces on the K10 need to be converted via I2C. It only supports basic level input and output, greatly reducing functionality and limiting complex projects.
- Poor power supply experience: The M10 cannot be connected to an external battery, and the PH2.0 battery interface on the K10 makes it easy for the external battery to become loose and damaged, and it cannot be charged, making mobile applications and battery life a challenge.

Now, the Unihiker Expansion Board is here! Designed specifically to address these pain points:
End pin anxiety: While adding a large number of general-purpose IO pins to UNIHIKER, it integrates four DC motor drivers, onboard RGB lights, and infrared transmission/reception functions.
Built-in charging and discharging circuit: Integrated with an 18650 lithium-ion battery compartment and intelligent charging/discharging circuit, it eliminates the need for external battery mounting on the UNIHIKER K10 and the inability to connect an external battery on the M10. This ensures safe power supply, convenient charging, and extended battery life, significantly enhancing project mobility.

Combined with DFRobot's powerful Gravity ecosystem, the Xingkong Board creates even more possibilities.

## Supporting list
|主板型号|实时模式|ArduinoC|MicroPython|python|备注|
|-----|-----|-----|-----|:-----:|-----|
|Unihiker K10||√||||
|Unihiker M10||||√||

## 更新日志
V0.0.1 Basic functions of Unihiker K10 completed<br>
V0.0.4 Basic functions of Unihiker M10 completed<br>
V0.0.5 Add English translate