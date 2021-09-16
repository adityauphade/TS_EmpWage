//UC1 - 4 - GENERATE SHIFTS
const fulltime = 8
const parttime = 4
const hourlyWage = 20

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
function generateShift(){
    let shift = Math.floor(Math.random()*10%3)
    console.log(shift)
    switch(shift){
        case 0:
            return fulltime*hourlyWage
            // console.log("Full Time Shift")
            break
        case 1:
            return parttime*hourlyWage
            // console.log("Part Time Shift")
            break
        case 2:
            return 0
            // console.log("No Shift")
            break
    }
}

console.log(`Today's wage: ${generateShift()}`)