// Import the readline module
const readline = require('readline')

// Create an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user for input
rl.question("Enter student's mark (0-100): ", (mark) => {
    // Convert mark to a number
    mark = parseInt(mark)

    // Call calculateGrade function
    let grade = calculateGrade(mark)

    // Output the grade
    console.log(`Grade: ${grade}`)

    // Close the readline interface
    rl.close()
});

// Function to calculate the grade
function calculateGrade(mark) {
    if (mark > 79) {
        return "A"
    } else if (mark >= 60 && mark <= 79) {
        return "B"
    } else if (mark >= 50 && mark <= 59) {
        return "C"
    } else if (mark >= 40 && mark <= 49) {
        return "D"
    } else {
        return "E"
    }
}