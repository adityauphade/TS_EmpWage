"use strict";
//UC1 - GENERATE SHIFTS
const fulltime = 8;
const parttime = 4;
const absent = 0;
const hourlyWage = 20;
const daysInMonth = 30;
const MaxHours = 160;
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
// function generateDailyWage():number{
//     let shift = Math.floor(Math.random()*10%3)
//     switch(shift){
//         case 0:
//             // hoursWorked+=fulltime
//             return (fulltime*hourlyWage)
//         case 1:
//             // hoursWorked+=parttime
//             return (parttime*hourlyWage)
//         default:
//             return (absent*hourlyWage)
//     }
// }
// console.log(`Today's wage: ${generateDailyWage()}`)
//UC3 - GENERATE MONTHLY WAGE
// function generateMonthlyWage():number{
//     let totalMonthWage: number = 0
//     let monthWageRecord: number[] = []      //array containing numbers
//     for(let i=0;i<daysInMonth;i++){
//         let dailyWage = generateDailyWage()
//         monthWageRecord.push(dailyWage)
//         totalMonthWage += dailyWage 
//     }
//     console.log(monthWageRecord)
//     return totalMonthWage
// }
// console.log(`The Monthly Wage: ${generateMonthlyWage()}`)
//UC4 - MONTHLY WAGE WITH RESTRICTED HOURS
function restrictedMonthlyWage() {
    let totalRestrictedMonthWage = 0;
    let monthRestrictedWageRecord = []; //array containing numbers
    let daysWorked = 0;
    let hoursWorked = 0;
    let dailyWage = 0;
    while (daysWorked < daysInMonth && hoursWorked < MaxHours) {
        let shift = Math.floor(Math.random() * 10 % 3);
        switch (shift) {
            case 0:
                hoursWorked += fulltime;
                dailyWage = (fulltime * hourlyWage);
                break;
            case 1:
                hoursWorked += parttime;
                dailyWage = (parttime * hourlyWage);
                break;
            default:
                dailyWage = (absent * hourlyWage);
                break;
        }
        totalRestrictedMonthWage += dailyWage;
        monthRestrictedWageRecord.push(dailyWage);
        daysWorked++;
    }
    console.log(monthRestrictedWageRecord);
    console.log(`${hoursWorked}/${MaxHours}`);
    return totalRestrictedMonthWage;
}
console.log(`The Monthly Wage: ${restrictedMonthlyWage()}`);
