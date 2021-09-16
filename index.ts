//UC1 - 4 - GENERATE SHIFTS
const fulltime: number = 8
const parttime: number = 4
const absent: number = 0
const hourlyWage: number = 20

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

//UC5 - GENERATE DAILY WAGE
function generateShift():number{
    let shift = Math.floor(Math.random()*10%3)
    console.log(shift)
    switch(shift){
        case 0:
            return (fulltime*hourlyWage)
        case 1:
            return (parttime*hourlyWage)
        default:
            return (absent*hourlyWage)
    }
}

console.log(`Today's wage: ${generateShift()}`)