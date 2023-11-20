radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == 2) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CCW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CCW, 255)
        basic.pause(100)
        radio.sendNumber(2)
        basic.showString("Backward")
    }
    if (receivedNumber == 1) {
        motor.MotorRun(motor.Motors.M1, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M2, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M3, motor.Dir.CW, 255)
        motor.MotorRun(motor.Motors.M4, motor.Dir.CW, 255)
        basic.pause(100)
        radio.sendNumber(1)
        basic.showString("Forward")
    }
})
basic.forever(function () {
    radio.setGroup(20)
})
