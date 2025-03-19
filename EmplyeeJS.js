// UC 1 - Check Employee Presence
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20; 
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


// UC 4 - Calculate Employee Wages for a Month
empHrs = 0; 
for (let day = 0; day < NUM_OF_WORKING_DAYS; day++) {
    let empCheck = Math.floor(Math.random() * 10) % 3;
    empHrs += getWorkingHours(empCheck);
}

empWage = empHrs * WAGE_PER_HOUR;
console.log("Total Hrs: " + empHrs + " Emp Wage: " + empWage);
// UC 5 - Calculate Wages till Max Hours (160) or Max Days (20) is Reached
const MAX_HRS_IN_MONTH = 160; // Fixed condition to 160 hours

let totalEmpHrs = 0;
let totalWorkingDays = 0;

while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}

// Calculate final wage
empWage = totalEmpHrs * WAGE_PER_HOUR;

// Display final output
console.log(
    "UC5 - Total Days: " + totalWorkingDays +
    " | Total Hrs: " + totalEmpHrs +
    " | Emp Wage: " + empWage
);

// UC 6 - Store Daily Wage in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyWageArr = []; // Array to store daily wages

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage); // Store each day's wage
}

empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + 
            " Total Hrs: " + totalEmpHrs + 
            " Emp Wage: " + empWage);
console.log("Daily Wages: " + empDailyWageArr);
