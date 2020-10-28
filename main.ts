basic.forever(function () {
    for (let index = 0; index <= 8; index++) {
        for (let i = 0; i <= 4; i++) {
            for (let j = 0; j <= 4; j++) {
                if (i + j == index) {
                    led.plot(4 - i, 4 - j)
                }
            }
        }
        basic.pause(100)
    }
    basic.clearScreen()
})
