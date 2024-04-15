// Ethan Lawrence
// April 15 2024
// Script For JavaScript Template

document.getElementById("btn-avg").addEventListener("click", average);


function average() {
// Imput
const customerCount1 = prompt("Enter number of customers in hour 1");
const customerCount2 = prompt("Enter number of customers in hour 2");
const customerCount3 = prompt("Enter number of customers in hour 3");
const customerCount4 = prompt("Enter number of customers in hour 4");

// Proccess
let peak = parseInt(customerCount1) + parseInt(customerCount2) + parseInt(customerCount3) + parseInt(customerCount4);
peak /= 4;

// Output
alert(`The average amount of customers in these four hours is ` + peak + ` people!`);
console.log (`The average amount of customers in these four hours is ` + peak + ` people!`);
}
