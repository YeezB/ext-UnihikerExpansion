    //% color="#FF8C00" iconWidth=50 iconHeight=40
    namespace mindUser{
        
    //% block="设置引脚[a]输出[b]" blockType="command"
    //% a.shadow="dropdown" a.options="a" 
    //% b.shadow="dropdown" b.options="b" 
    export function myBlock1(parameter: any, block: any) {
        let a= parameter.a.code
        let b= parameter.b.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType, GpioState`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock9367${a}`,`eunihiker.set_mode(IONum.${a}, IOType.GPIO_OUT)`)
        Generator.addCode(`eunihiker.set_gpio_state(IONum.${a}, GpioState.${b})`)
    }


    //% block="读取[c]的模拟值" blockType="reporter"
    //% c.shadow="dropdown" c.options="c" 
    export function myBlock2(parameter: any, block: any) {
        let c= parameter.c.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType`)
        Generator.addInit("myBlock7105",`Board("").begin()
       
eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock9367${c}`,`eunihiker.set_mode(IONum.${c}, IOType.ADC)`)
        Generator.addCode(`eunihiker.get_adc_value(IONum.${c})`)
    }


    //% block="读取[d]的数字值" blockType="reporter"
    //% d.shadow="dropdown" d.options="d" 
    export function myBlock3(parameter: any, block: any) {
        let d= parameter.d.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType, GpioState`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock3526${d}`,`eunihiker.set_mode(IONum.${d}, IOType.GPIO_IN)`)
        Generator.addCode(`eunihiker.get_gpio_state(IONum.${d})`)
    }

    //% block="读取[e]的[f][g]" blockType="reporter"
    //% e.shadow="dropdown" e.options="e" 
    //% f.shadow="dropdown" f.options="f" 
    //% g.shadow="dropdown" g.options="g" 
    export function myBlock4(parameter: any, block: any) {
        let e= parameter.e.code
        let f= parameter.f.code
        let g= parameter.g.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, IONum, IOType`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addInit(`myBlock3527${e}`,`eunihiker.set_mode(IONum.${e}, IOType.${f})`)
        Generator.addCode(`eunihiker.get_dht_value(IONum.${e}).${g}`)
    }


    //% block="红外发射数据[j]" blockType="command"
    //% j.shadow="normal" j.defl=12345678
    export function myBlock5(parameter: any, block: any) {
        let j= parameter.j.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.send_ir(${j})`)
    }

    //% block="读取红外接受的数据" blockType="reporter"
    export function myBlock6(parameter: any, block: any) {
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.get_ir_data()`)
    }

    //% block="读取超声波传感器的数据(cm)" blockType="reporter"
    export function myBlock7(parameter: any, block: any) {
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.get_sr04_distance()`)
    }
    
    //% block="读取电池电量%" blockType="reporter"
    export function myBlock8(parameter: any, block: any) {
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.get_battery()`)
    }

    //% block="设置RGB[k]颜色[l]亮度[m]" blockType="command"
    //% k.shadow="dropdown" k.options="k" 
    //% l.shadow="colorPalette" l.params.column=7
    //% l.params.colorsFunc="getColorsFunc_" 
    //% m.shadow="range" m.params.min=0  m.params.max=10  m.defl=5
    export function myBlock9(parameter: any, block: any) {
        let k= parameter.k.code
        let l= parameter.l.code
        let m= parameter.m.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, RgbNum
`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.set_ws2812(RgbNum.${k}, ${l})
eunihiker.set_bright(${m}*25)`)
    }

    
    //% block="设置引脚[h] 180舵机为[i]度" blockType="command"
    //% h.shadow="dropdown" h.options="h" 
    //% i.shadow="angle" i.defl=1
    export function myBlock10(parameter: any, block: any) {
        let h= parameter.h.code
        let i= parameter.i.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, ServoNum`)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion() `)
        Generator.addCode(`eunihiker.set_servo_angle(ServoNum.${h},${i})`)
    }

    //% block="设置引脚[n] 360°舵机以[o] %的速度[p]" blockType="command"
    //% n.shadow="dropdown" n.options="n" 
    //% o.shadow="range" o.params.min=0  o.params.max=100 o.defl=50
    //% p.shadow="dropdown" p.options="p" 
    export function myBlock11(parameter: any, block: any) {
        let n= parameter.n.code
        let o= parameter.o.code
        let p= parameter.p.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, ServoNum, Servo360Direction  `)
        Generator.addInit("myBlock7105",`Board("").begin()

eunihiker = UnihikerExpansion()`)
        Generator.addCode(`eunihiker.set_servo360(ServoNum.${n}, Servo360Direction.${p}, ${o})`)
    }

    //% block="设置电机[q]以[r]的速度[s]" blockType="command"
    //% q.shadow="dropdown" q.options="q" 
    //% r.shadow="range" r.params.min=0  r.params.max=100 r.defl=200
    //% s.shadow="dropdown" s.options="s" 
    export function myBlock12(parameter: any, block: any) {
        let q= parameter.q.code
        let r= parameter.r.code
        let s= parameter.s.code
        Generator.addImport(`from pinpong.board import Board
from dfrobot_unihiker_expansion import UnihikerExpansion, MPeriod, MotorNum`)
        Generator.addInit("myBlock9134",`Board("").begin()

eunihiker = UnihikerExpansion()
eunihiker.set_motor_period(MPeriod.MOTOR1_2, 255)
eunihiker.set_motor_period(MPeriod.MOTOR3_4, 255)`)

        if(`${s}` === `forward`){
        Generator.addCode(`eunihiker.set_motor_duty(MotorNum.${q}_A, ${r})
eunihiker.set_motor_duty(MotorNum.${q}_B, 0)`)
        }
        else if(`${s}` === `backward`){
        Generator.addCode(`eunihiker.set_motor_duty(MotorNum.${q}_A, 0)
eunihiker.set_motor_duty(MotorNum.${q}_B, ${r})`)     
        }
    }
}