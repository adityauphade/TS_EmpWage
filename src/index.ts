//UC1 - GENERATE SHIFTS
const fulltime: number = 8
const parttime: number = 4
const absent: number = 0
const hourlyWage: number = 20
const daysInMonth: number = 30
const MaxHours: number = 160


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
// function restrictedMonthlyWage():number{
//     let totalRestrictedMonthWage: number = 0
//     let monthRestrictedWageRecord: number[] = []      //array containing numbers
//     let daysWorked: number = 0  
//     let hoursWorked: number = 0
//     let dailyWage: number = 0

//     while(daysWorked<daysInMonth && hoursWorked<MaxHours){
//         let shift = Math.floor(Math.random()*10%3)
//         switch(shift){
//             case 0:
//                 hoursWorked += fulltime
//                 dailyWage = (fulltime*hourlyWage)
//                 break
//             case 1:
//                 hoursWorked += parttime
//                 dailyWage = (parttime*hourlyWage)
//                 break
//             default:
//                 dailyWage = (absent*hourlyWage)
//                 break
//         }
//         totalRestrictedMonthWage += dailyWage 
//         monthRestrictedWageRecord.push(dailyWage)
//         daysWorked++;
//     }
//     console.log(monthRestrictedWageRecord)
//     console.log(`${hoursWorked}/${MaxHours}`)
//     return totalRestrictedMonthWage
// }
// console.log(`The Monthly Wage: ${restrictedMonthlyWage()}`)


//UC5 - CLASSES
interface EmployeeInterface{

}

class Employee{
    name: string
    constructor(name: string){
        this.name = name
        console.log(`Welcome to Employee Wage: ${this.name}`)
    }

    restrictedMonthlyWage():void{
        let totalRestrictedMonthWage: number = 0
        let monthRestrictedWageRecord: number[] = []      //array containing numbers
        let daysWorked: number = 0  
        let hoursWorked: number = 0
        let dailyWage: number = 0
    
        while(daysWorked<daysInMonth && hoursWorked<MaxHours){
            let shift = Math.floor(Math.random()*10%3)
            switch(shift){
                case 0:
                    hoursWorked += fulltime
                    dailyWage = (fulltime*hourlyWage)
                    break
                case 1:
                    hoursWorked += parttime
                    dailyWage = (parttime*hourlyWage)
                    break
                default:
                    dailyWage = (absent*hourlyWage)
                    break
            }
            // totalRestrictedMonthWage += dailyWage 
            monthRestrictedWageRecord.push(dailyWage)
            daysWorked++;
        }

        //UC6 ARRAY TASKS

        //FOREACH
        console.log("Monthly Wage for ",this.name)
        monthRestrictedWageRecord.forEach((e, index)=> console.log(`${index+1} => ${e}`))
        console.log(`${this.name}'s Hours Completed: ${hoursWorked}/${MaxHours}`)
        
        //MAP
        console.log("Monthly Wage for ",this.name)
        monthRestrictedWageRecord.map((e, index)=> console.log(`${index+1} => ${e}`))
        console.log(`${this.name}'s Hours Completed: ${hoursWorked}/${MaxHours}`)

        // console.log(`${this.name}'s Monthly Record: ${monthRestrictedWageRecord}`)
        // console.log(`${this.name}'s Monthly Wage is: ${totalRestrictedMonthWage}`)
    }

}
const emp = new Employee('Aditya')
emp.restrictedMonthlyWage()
