basic.forever(function () {
    for (let i = 0; i <= 8; i++) {
        for (let j = 0; j <= i; j++) {
            led.plot(4 - j, 4 - (i - j))
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
