
    //% color="#f08080" iconWidth=50 iconHeight=40
    namespace mindUser{
    //% block="读取引脚[ec]的[mode]" blockType="reporter"
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

    //% block="设置引脚[ec]输出[v]" blockType="command"
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
        

    //% block="设置引脚[s] 180度舵机为[dir]度" blockType="command"
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
    
    //% block="设置引脚[s] 360度舵机以[speedservo]%的速度[oriservo]" blockType="command"
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

    //% block="设置RGB[num]颜色[color]亮度[brightness]" blockType="command"
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
    //% block="设置电机[motor]以[speed]的速度[dir]" blockType="command"
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

    //% block="红外发射数据[hex]" blockType="command"
    //% hex.shadow="normal" hex.defl=12345678
    export function myBlock6(parameter: any, block: any) {
        let hex= parameter.hex.code
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.sendIR(${hex});`)
    }

    //% block="读取红外接收的数据" blockType="reporter"
    export function myBlock7(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getIRData()`)
    }

    //% block="读取超声波传感器距离(cm)" blockType="reporter"
    export function myBlock8(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getSr04Distance()`)
    }
    //% block="读取电池电量(%)" blockType="reporter"
    export function myBlock9(parameter: any, block: any) {
        Generator.addInclude("myBlock4248",`#include "DFRobot_UnihikerExpansion.h"`)
        Generator.addObject("myBlock2068",`DFRobot_UnihikerExpansion_I2C eunihiker(&Wire)`,"")
        Generator.addSetup("myBlock8780",`while(!eunihiker.begin()){delay(1000);} `)
        Generator.addCode(`eunihiker.getBattery()`)
    }

}
    