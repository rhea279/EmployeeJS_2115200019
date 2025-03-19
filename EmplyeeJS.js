// UC 1 - Check Employee Presence
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

// Function to check employee presence
let empCheckPresence = Math.floor(Math.random() * 10) % 2;
console.log(empCheckPresence === IS_ABSENT ? "Employee is Absent" : "Employee is PRESENT");

// Function to get working hours
function getWorkingHours(empCheck) {
    switch (empCheck) {
        case IS_PART_TIME:
            return PART_TIME_HOURS;
        case IS_FULL_TIME:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}

// UC 2 & UC 3 - Calculate Employee Wage
let empCheckWork = Math.floor(Math.random() * 10) % 3;
let empHrs = getWorkingHours(empCheckWork);
let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);
