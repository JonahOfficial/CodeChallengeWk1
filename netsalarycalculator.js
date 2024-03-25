function calculateNetSalary(basicSalary, benefits) {
    // GROSS SALARY (TAXABLE INCOME)
    const grossSalary = basicSalary + benefits

    // PAYE TAX
    let paye;
    if (grossSalary <= 24000) {
        paye = 0.1 * grossSalary
    } else if (grossSalary <= 32333) {
        paye = 0.25 * grossSalary
    } else if (grossSalary <= 500000) {
        paye = 0.3 * grossSalary
    } else if (grossSalary <= 800000) {
        paye = 0.325 * grossSalary
    } else {
        paye = 0.35 * grossSalary
    }

    // NHIF DEDUCTIONS
    let nhifDeductions;
    if (grossSalary <= 5999) {
        nhifDeductions = 150
    } else if (grossSalary <= 7999) {
        nhifDeductions = 300
    } else if (grossSalary < 11999) {
        nhifDeductions = 400
    } else if (grossSalary <= 14999) {
        nhifDeductions = 500
    } else if (grossSalary <= 19999) {
        nhifDeductions = 600
    } else if (grossSalary <= 24999) {
        nhifDeductions = 750
    } else if (grossSalary <= 29999) {
        nhifDeductions = 850
    } else if (grossSalary <= 34999) {
        nhifDeductions = 900
    } else if (grossSalary <= 39999) {
        nhifDeductions = 950
    } else if (grossSalary <= 44999) {
        nhifDeductions = 1000
    } else if (grossSalary <= 49999) {
        nhifDeductions = 1100
    } else if (grossSalary <= 59999) {
        nhifDeductions = 1200
    } else if (grossSalary <= 69999) {
        nhifDeductions = 1300
    } else if (grossSalary <= 79999) {
        nhifDeductions = 1400
    } else if (grossSalary <= 89999) {
        nhifDeductions = 1500
    } else if (grossSalary <= 99999) {
        nhifDeductions = 1600
    } else {
        nhifDeductions = 1700
    }

    // NSSF DEDUCTIONS
    let nssfDeductions = 0.06 * basicSalary;

    // NET SALARY
    const netSalary = grossSalary - (paye - nhifDeductions - nssfDeductions);

    return netSalary;
}

// Import the readline module
const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Prompt the user to enter their basic salary
rl.question("Enter basic salary: ", (basicSalary) => {
    // Prompt the user to enter their benefits
    rl.question("Enter benefits: ", (benefits) => {
        // Convert input to numbers
        basicSalary = parseFloat(basicSalary);
        benefits = parseFloat(benefits);

        // Check if the input is valid
        if (!isNaN(basicSalary) && !isNaN(benefits)) {
            // Calculate net salary
            let netSalary = calculateNetSalary(basicSalary, benefits);
            console.log("Net Salary:", netSalary);
        } else {
            console.log("Invalid input. Salary and benefits should be numbers.");
        }

        // Close the readline interface
        rl.close();
    });
});