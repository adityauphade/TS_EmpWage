//UC1 - GENERATE SHIFTS
const fulltime: number = 8
const parttime: number = 4
const absent: number = 0
const hourlyWage: number = 20
const daysInMonth: number = 30
let monthWageRecord: any = []
let totalMonthWage: number = 0

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
function generateDailyWage():number{
    let shift = Math.floor(Math.random()*10%3)
    switch(shift){
        case 0:
            return (fulltime*hourlyWage)
        case 1:
            return (parttime*hourlyWage)
        default:
            return (absent*hourlyWage)
    }
}

console.log(`Today's wage: ${generateDailyWage()}`)

//UC3 - GENERATE MONTHLY WAGE
function generateMonthlyWage():number{
    for(let i=0;i<daysInMonth;i++){
        let dailyWage = generateDailyWage()
        monthWageRecord.push(dailyWage)
        totalMonthWage += dailyWage 
    }
    console.log(monthWageRecord)
    return totalMonthWage
}
console.log(`The Monthly Wage: ${generateMonthlyWage()}`)
