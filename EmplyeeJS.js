// UC 1 - Check Employee Presence
const IS_ABSENT = 0;

let empCheckPresence = Math.floor(Math.random() * 10) % 2;
if (empCheckPresence === IS_ABSENT) {
    console.log("Employee is Absent");
} else {
    console.log("Employee is PRESENT");
}

// UC 2 - Calculating Employee Wage
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

let empHrs = 0;
let empCheckWork = Math.floor(Math.random() * 10) % 3;

switch (empCheckWork) {
    case IS_PART_TIME:
        empHrs = PART_TIME_HOURS;
        break;
    case IS_FULL_TIME:
        empHrs = FULL_TIME_HOURS;
        break;
    default:
        empHrs = 0;
}

let empWage = empHrs * WAGE_PER_HOUR;
console.log("Emp Wage: " + empWage);
