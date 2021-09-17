"use strict";
//UC1 - GENERATE SHIFTS
const fulltime = 8;
const parttime = 4;
const absent = 0;
const hourlyWage = 20;
const daysInMonth = 30;
const MaxHours = 160;
let empWageMap = {};
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
            // totalRestrictedMonthWage += dailyWage 
            monthRestrictedWageRecord.push(dailyWage);
            daysWorked++;
        }
        //UC6 ARRAY TASKS
        //FOREACH
        console.log("Monthly Wage using 'forEach' for ", this.name);
        monthRestrictedWageRecord.forEach((e, index) => console.log(`${index + 1} => ${e}`));
        console.log(`${this.name}'s Hours Completed: ${hoursWorked}/${MaxHours}`);
        //MAP
        console.log("Monthly Wage using 'Map' for ", this.name);
        monthRestrictedWageRecord.map((e, index) => console.log(`${index + 1} => ${e}`));
        console.log(`${this.name}'s Hours Completed: ${hoursWorked}/${MaxHours}`);
        //FILTER - FULL DAY ONLY
        console.log("Full Day Wage using 'filter' for ", this.name);
        monthRestrictedWageRecord.filter((e, index) => {
            if (e == 160) {
                console.log(`${index + 1} => ${e}`);
            }
        });
        //FIND - 1st FULL DAY ONLY
        console.log("Full Day Wage using 'find' for ", this.name);
        console.log(`${monthRestrictedWageRecord.findIndex((e) => e == 160) + 1} => ${monthRestrictedWageRecord.find((e) => e == 160)}`);
        //WORKING DAYS
        function totalDays() {
            let days_worked = 0;
            for (let i = 0; i < monthRestrictedWageRecord.length; i++) {
                if (monthRestrictedWageRecord[i] == 0) {
                    continue;
                }
                else if (monthRestrictedWageRecord[i] == 80) {
                    days_worked += 0.5;
                }
                else {
                    days_worked += 1;
                }
            }
            console.log(`Total number of days worked => ${days_worked}`);
        }
        totalDays();
        //HASHMAP
        function storeInMap() {
            let totalWage = 0;
            monthRestrictedWageRecord.forEach((e, index) => {
                totalWage += e;
                empWageMap[`Day ${index + 1}`] = [e, totalWage];
            });
            console.log(empWageMap);
        }
        storeInMap();
        // console.log(`${this.name}'s Monthly Record: ${monthRestrictedWageRecord}`)
        // console.log(`${this.name}'s Monthly Wage is: ${totalRestrictedMonthWage}`)
    }
}
const emp = new Employee('Aditya');
emp.restrictedMonthlyWage();
