
    //% color="#f08080" iconWidth=50 iconHeight=40
    namespace mindUser{
    //% block="read pin[ec]in[mode]" blockType="reporter"
    //% ec.shadow="dropdown" ec.options="ec" 
    //% mode.shadow="dropdown" mode.options="mode" 
    export function myBlock0(parameter: any, block: any) {
        let ec= parameter.ec.code
        let mode= parameter.mode.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        if(`${mode}` === 'eDHT11_tem' || `${mode}` === 'eDHT11_hum'){
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eDHT11);`)
        }else if(`${mode}` === 'eDHT22_tem' || `${mode}` === 'eDHT22_hum'){
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eDHT22);`)
        }else{
            Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, ${mode});`)
        }
        
        Generator.addCode(`(eunihiker.getvalue(${ec}, ${mode}))`)
    }    

    //% block="set pin[ec]output[v]" blockType="command"
    //% ec.shadow="dropdown" ec.options="ec" 
    //% v.shadow="dropdown" v.options="v" 
    export function myBlock1(parameter: any, block: any) {
        let ec= parameter.ec.code
        let v= parameter.v.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addSetup(`myBlock4219${ec}`,`eunihiker.setMode(${ec}, eWriteGpio);`)
        Generator.addCode(`eunihiker.setGpioState(${ec}, ${v});`)
    }
        

    //% block="Set pin[s] 180° Servo into[dir]degree" blockType="command"
    //% s.shadow="dropdown" s.options="s" 
    //% dir.shadow="angle" dir.defl=90
    export function myBlock2(parameter: any, block: any) {
        let s= parameter.s.code
        let dir= parameter.dir.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.setServoAngle(${s}, ${dir});`)
    }
    
    //% block="Set pin[s] 360° Servo[oriservo]in speed[speedservo]%" blockType="command"
    //% s.shadow="dropdown" s.options="s" 
    //% speedservo.shadow="range" speedservo.params.min=0 speedservo.params.max=100 speedservo.defl=50
    //% oriservo.shadow="dropdown" oriservo.options="oriservo"
    export function myBlock3(parameter: any, block: any) {
        let s= parameter.s.code
        let speedservo= parameter.speedservo.code
        let oriservo= parameter.oriservo.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.setServo360(${s}, ${oriservo}, ${speedservo});`)
    }

    //% block="Set RGB[num]color[color]brightness[brightness]" blockType="command"
    //% num.shadow="dropdown" num.options="num" 
    //% color.shadow="colorPalette" color.params.column=7
    //% color.params.colorsFunc="getColorsFunc_" 
    //% brightness.shadow="range" brightness.params.min=0    brightness.params.max=10    brightness.defl=5
    export function myBlock4(parameter: any, block: any) {
        let num= parameter.num.code
        let color= parameter.color.code
        let brightness= parameter.brightness.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addObject("staticled",`uint32_t led[2] = {0x000000, 0x000000}`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(` 
	led[${num}] = ${color};
	eunihiker.setWS2812((uint32_t*)led, ${brightness}*25);`)
    }
    //% block="Set motor[motor][dir]in speed[speed]" blockType="command"
    //% motor.shadow="dropdown" motor.options="motor" 
    //% speed.shadow="range" speed.defl=200 speed.params.min=0    speed.params.max=255    speed.defl=200
    //% dir.shadow="dropdown" dir.options="dir" 
    export function myBlock5(parameter: any, block: any) {
        let motor= parameter.motor.code
        let speed= parameter.speed.code
        let dir= parameter.dir.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} 
        eunihiker.setMotorPeriod(eMotor1_2, 255);
        eunihiker.setMotorPeriod(eMotor3_4, 255);`)
        Generator.addCode(`eunihiker.motorRun(${motor},${speed},${dir});`)
    }

    //% block="IR Sent data[hex]" blockType="command"
    //% hex.shadow="normal" hex.defl=12345678
    export function myBlock6(parameter: any, block: any) {
        let hex= parameter.hex.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.sendIR(${hex});`)
    }

    //% block="read IR receiver data" blockType="reporter"
    export function myBlock7(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getIRData()`)
    }

    //% block="read ultrasonic sensor distance(cm)" blockType="reporter"
    export function myBlock8(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getSr04Distance()`)
    }
    //% block="Read battery remain capacity(%)" blockType="reporter"
    export function myBlock9(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getBattery()`)
    }

}
    