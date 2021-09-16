//UC1 - 4
const fulltime = 8
const parttime = 4
const hourlyWage = 20

let shift = Math.floor(Math.random()*10%3)
console.log(shift)
switch(shift){
    case 0:
        console.log("Full Time Shift")
        break
    case 1:
        console.log("Part Time Shift")
        break
    case 2:
        console.log("No Shift")
        break
}