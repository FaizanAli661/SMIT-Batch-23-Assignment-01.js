var product1 = +prompt("Enter your first product")
var product2 = +prompt("Enter your second product")
var product3 = +prompt("Enter your third product")


var totalBill = product1 + product2 + product3;
var Discount = totalBill * 10 / 100;
var FinalBill = totalBill - Discount;


console.log(totalBill);
console.log(Discount);
console.log(FinalBill);