var englishMarks = +prompt("Enter your english marks");
var urduMarks = +prompt("Enter your urdu marks");
var mathsMarks = +prompt("Enter your maths marks");
var scienceMarks = +prompt("Enter your science marks");
var computerMarks = +prompt("Enter your computer marks");


var totalMarks = englishMarks + urduMarks + mathsMarks + scienceMarks + computerMarks;
var fullMarks = 500;
var perccentageMarks = totalMarks / fullMarks * 100;
console.log("totalmarks" +" " + totalMarks);
console.log("fullmarks" + " " + fullMarks);
console.log("percentagemarks" + " " + perccentageMarks);