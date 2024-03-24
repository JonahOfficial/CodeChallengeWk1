function calculateGrade(mark) {
// An if condition that assigns a grade depending on the student's mark.
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
// A prompt that asks the student to input their grade.
let mark = prompt("Enter student's mark (0-100): ")
// An if condition that displays the student grade if the mark entered was within the accepted parameters.
if (mark >= 0 && mark <= 100) {
    let grade = calculateGrade(mark)
    console.log("Grade: ", grade)
    alert('You got a ' +grade+ '')
} else {
    console.log("Invalid input. Mark should be from 0 to 100.");
    alert('Invalid input. Mark should be from 0 to 100.')
}
