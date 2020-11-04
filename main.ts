basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i + 1; j++) {
            led.plot(4 - i + j, 4 - j)
        }
        basic.pause(100)
    }
    for (let i = 0; i <= 3; i++) {
        for (let j = 0; j <= 4 - i; j++) {
            led.plot(0 + j, 3 - i - j)
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
