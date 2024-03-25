// Import the readline module
const readline = require('readline')

// Create an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Define the speedDetector function
function speedDetector(speed) {
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

// Prompt the user to enter the speed of their car
rl.question("Enter car's speed: ", (speed) => {
    // Convert the input to a number
    speed = parseFloat(speed);

    // Check if the input is a valid number
    if (!isNaN(speed)) {
        speedDetector(speed);
    } else {
        console.log("Invalid input. Speed should be a number.");
    }

    // Close the readline interface
    rl.close();
});