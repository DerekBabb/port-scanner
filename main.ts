radio.onReceivedNumber(function (receivedNumber) {
    if (receivedNumber == radio_channel) {
        basic.showIcon(IconNames.Heart)
    }
})
input.onButtonPressed(Button.A, function () {
    radio_channel += 1
    basic.showNumber(radio_channel)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(radio_channel)
})
input.onButtonPressed(Button.B, function () {
    radio_channel += -1
    basic.showNumber(radio_channel)
})
let radio_channel = 0
radio_channel = 0
let passcode = 0
basic.forever(function () {
	
})
