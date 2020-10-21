basic.forever(function () {
    for (let i = 0; i <= 4; i++) {
        for (let j = 0; j <= i; j++) {
            if (4 - i == 4 - j) {
                led.plot(4 - i, 4 - j)
            } else {
            	
            }
            basic.pause(100)
        }
    }
})
