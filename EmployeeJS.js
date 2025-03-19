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

// UC 7A - Calculate Total Wage using forEach and reduce
let totEmpWage = 0;

function sum(dailyWage) {
    totEmpWage += dailyWage;
}

empDailyWageArr.forEach(sum);
console.log("UC7A - Total Days: " + totalWorkingDays +
    " Total Hrs: " + totalEmpHrs + " Emp Wage: " + totEmpWage);

function totalWages(totalWage, dailyWage) {
    return totalWage + dailyWage;
}

console.log("UC7A - Emp Wage with reduce: " +
    empDailyWageArr.reduce(totalWages, 0));

// UC 7B - Show Day along with Daily Wage using map
let dailyCntr = 0;

function mapDayWithWage(dailyWage) {
    dailyCntr++;
    return dailyCntr + " = " + dailyWage;
}

let mapDayWithWageArr = empDailyWageArr.map(mapDayWithWage);
console.log("UC7B - Daily Wage Map:");
console.log(mapDayWithWageArr);

// UC 7C - Show Days when Full-time wage of 160 was earned using filter
function fullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

let fullDayWageArr = mapDayWithWageArr.filter(fullTimeWage);
console.log("UC7C - Daily Wage Filter When Full-time Wage Earned:");
console.log(fullDayWageArr);

// UC 7D - Find the first occurrence when Full-time Wage was earned using find
function findFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC7D - First time Full-time wage was earned on Day: " +
    mapDayWithWageArr.find(findFullTimeWage));

// UC 7E - Check if every element of Full-time Wage is truly holding Full-time wage
function isAllFullTimeWage(dailyWage) {
    return dailyWage.includes("160");
}

console.log("UC7E - Check All Elements have Full-time Wage: " +
    fullDayWageArr.every(isAllFullTimeWage));

// UC 7F - Check if there is any Part-time Wage
function isAnyPartTimeWage(dailyWage) {
    return dailyWage.includes("80");
}

console.log("UC7F - Check If Any Part-time Wage: " +
    mapDayWithWageArr.some(isAnyPartTimeWage));

// UC 7G - Find the number of days the Employee Worked
function totalDaysWorked(numOfDays, dailyWage) {
    if (dailyWage > 0) return numOfDays + 1;
    return numOfDays;
}

console.log("UC7G - Number of Days Employee Worked: " +
    empDailyWageArr.reduce(totalDaysWorked, 0));
