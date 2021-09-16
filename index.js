//UC1 - GENERATE SHIFTS
var fulltime = 8;
var parttime = 4;
var absent = 0;
var hourlyWage = 20;
var daysInMonth = 30;
var monthWageRecord = [];
var totalMonthWage = 0;
// function generateShift(){
//     let shift = Math.floor(Math.random()*10%3)
//     console.log(shift)
//     switch(shift){
//         case 0:
//             console.log("Full Time Shift")
//             break
//         case 1:
//             console.log("Part Time Shift")
//             break
//         case 2:
//             console.log("No Shift")
//             break
//     }
// }
// generateShift()
//UC2 - GENERATE DAILY WAGE
function generateDailyWage() {
    var shift = Math.floor(Math.random() * 10 % 3);
    switch (shift) {
        case 0:
            return (fulltime * hourlyWage);
        case 1:
            return (parttime * hourlyWage);
        default:
            return (absent * hourlyWage);
    }
}
console.log("Today's wage: " + generateDailyWage());
//UC3 - GENERATE MONTHLY WAGE
function generateMonthlyWage() {
    for (var i = 0; i < daysInMonth; i++) {
        var dailyWage = generateDailyWage();
        monthWageRecord.push(dailyWage);
        totalMonthWage += dailyWage;
    }
    console.log(monthWageRecord);
    return totalMonthWage;
}
console.log("The Monthly Wage: " + generateMonthlyWage());
