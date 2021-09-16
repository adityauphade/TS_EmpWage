"use strict";
//UC1 - GENERATE SHIFTS
const fulltime = 8;
const parttime = 4;
const absent = 0;
const hourlyWage = 20;
const daysInMonth = 30;
const MaxHours = 160;
class Employee {
    constructor(name) {
        this.name = name;
        console.log(`Welcome to Employee Wage: ${this.name}`);
    }
    restrictedMonthlyWage() {
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
        console.log(`${this.name}'s Monthly Record: ${monthRestrictedWageRecord}`);
        console.log(`${this.name}'s Hours Completed: ${hoursWorked}/${MaxHours}`);
        console.log(`${this.name}'s Monthly Wage is: ${totalRestrictedMonthWage}`);
    }
}
const emp = new Employee('Aditya');
emp.restrictedMonthlyWage();
