function speedDetector(speed) {
// An if condition that that assigns demerit points if the car's speed is above 70km/h. If the driver has more than 12 demerit points their license is suspended.
    if (speed <= 70) {
        console.log("Ok")
    } else {
        let demeritPoints = Math.floor((speed - 70) / 5)
        if (demeritPoints > 12) {
            console.log("License suspended")
        } else {
            console.log("Points:", demeritPoints)
        }
    }
}
// The program prompts the user to enter the speed of their car and displays the relevant information if the speed entered was within the accepted parameters.
let speed = parseFloat(prompt("Enter car's speed: "))
if (!isNaN(speed)) {
    speedDetector(speed);
} else {
    console.log("Invalid input. Speed should be a number.")
}