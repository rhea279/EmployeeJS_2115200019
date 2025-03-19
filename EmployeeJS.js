// UC 1 - Check Employee Presence
const IS_ABSENT = 0;
const IS_PART_TIME = 1;
const IS_FULL_TIME = 2;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const MAX_HRS_IN_MONTH = 160;

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

// UC 2 & 3 - Calculate Employee Wage
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

// UC 5 - Calculate Wages till Max Hours or Max Days is Reached
let totalEmpHrs = 0;
let totalWorkingDays = 0;
while (totalEmpHrs < MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    totalEmpHrs += getWorkingHours(empCheck);
}
empWage = totalEmpHrs * WAGE_PER_HOUR;
console.log("UC5 - Total Days: " + totalWorkingDays + " | Total Hrs: " + totalEmpHrs + " | Emp Wage: " + empWage);

// UC 6 - Store Daily Wage in an Array
function calcDailyWage(empHrs) {
    return empHrs * WAGE_PER_HOUR;
}

totalEmpHrs = 0;
totalWorkingDays = 0;
let empDailyHrsMap = new Map();
let empDailyWageArr = [];
let empDailyWageMap = new Map();

while (totalEmpHrs <= MAX_HRS_IN_MONTH && totalWorkingDays < NUM_OF_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 10) % 3;
    let empHrs = getWorkingHours(empCheck);
    totalEmpHrs += empHrs;
    let dailyWage = calcDailyWage(empHrs);
    empDailyWageArr.push(dailyWage);
    empDailyWageMap.set(totalWorkingDays, dailyWage);
    
    empDailyHrsMap.set(totalWorkingDays, empHrs); 

}
empWage = calcDailyWage(totalEmpHrs);
console.log("UC6 - Total Days: " + totalWorkingDays + " Total Hrs: " + totalEmpHrs + " Emp Wage: " + empWage);
console.log(empDailyWageMap);

// UC 7A - Calculate Total Wage using forEach and reduce
let totEmpWage = 0;
empDailyWageArr.forEach(dailyWage => totEmpWage += dailyWage);
console.log("UC7A - Total Emp Wage: " + totEmpWage);

console.log("UC7A - Emp Wage with reduce: " + empDailyWageArr.reduce((total, wage) => total + wage, 0));

// UC 7B - Store Day-wise Wage using map
let mapDayWithWageArr = Array.from(empDailyWageMap, ([day, wage]) => `Day ${day} = ${wage}`);
console.log("UC7B - Daily Wage Map:", mapDayWithWageArr);

// UC 7C - Filter Full-time Wage Days
let fullDayWageArr = mapDayWithWageArr.filter(wageEntry => wageEntry.includes("160"));
console.log("UC7C - Full-time Wage Days:", fullDayWageArr);

// UC 7D - Find First Full-time Wage Day
console.log("UC7D - First Full-time Wage Day:", mapDayWithWageArr.find(wageEntry => wageEntry.includes("160")));

// UC 7E - Check if Every Element has Full-time Wage
console.log("UC7E - All Full-time Wage:", fullDayWageArr.every(wageEntry => wageEntry.includes("160")));

// UC 7F - Check if There is Any Part-time Wage
console.log("UC7F - Any Part-time Wage:", mapDayWithWageArr.some(wageEntry => wageEntry.includes("80")));

// UC 7G - Compute Number of Days Employee Worked
console.log("UC7G - Total Days Worked:", empDailyWageArr.reduce((days, wage) => wage > 0 ? days + 1 : days, 0));

// UC 9 Arrow Functions
const findTotal = (totalVal, dailyVal) => {
    return totalVal + dailyVal;
}

let count = 0;
let totalHours = Array.from(empDailyHrsMap.values()).reduce(findTotal, 0);
let totalSalary = empDailyWageArr.filter(dailyWage => dailyWage > 0)
                                 .reduce(findTotal, 0);

console.log("UC9A - Emp Wage with Arrow: " + 
            " Total Hours: " + totalHours + 
            " Total Wages: " + totalSalary);

let nonWorkingDays = new Array();
let partWorkingDays = new Array();
let fullWorkingDays = new Array();

empDailyHrsMap.forEach((value, key, map) => {
    if (value == 8) 
        fullWorkingDays.push(key);
    else if (value == 4) 
        partWorkingDays.push(key);
    else 
        nonWorkingDays.push(key);
});

console.log("Full Working Days: " + fullWorkingDays);
console.log("Part Working Days: " + partWorkingDays);
console.log("Non Working Days: " + nonWorkingDays);
