var basicSalary = +prompt("Enter your basic Salary");

var houseAllowance = basicSalary * 20 / 100;
var medicalAloowance = basicSalary * 10 / 100;
var grossSalary = basicSalary + houseAllowance + medicalAloowance;
var texDeduction = basicSalary * 5 / 100;
var netSalary = grossSalary - texDeduction;

console.log("basic Salary is:" + " " + basicSalary);
console.log("your house Allowence is:" + " " + houseAllowance);
console.log("your medical Allowence is:" + " " + medicalAloowance);
console.log("your gross Salary is:" + " " + grossSalary);
console.log("your text Deduction is:" + " " + texDeduction);
console.log("yuor Net Salary is:" + " " + netSalary);