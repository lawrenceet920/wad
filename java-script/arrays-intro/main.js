// Ethan Lawrence
// April 22 2024
// Array intro
document.getElementById("btn").addEventListener("click", fruity);

// Imput
const fruits = ["Apple", "Cherry", "Orange"]; 
console.log(`Initial 'fruits' array = ${fruits}`);
fruits.push("Banana");
fruits.push("Peach", "Pear");
console.log(fruits);

function fruity() {
// Process
// Create a variable - Round down - random number - between 0 and the length of array fruits 
const randomIndex =  Math.floor((Math.random() * fruits.length));

// Output
console.log(randomIndex);
console.log(fruits[randomIndex]);
document.getElementById("output").innerHTML = fruits[randomIndex];

// Modern method for future use!
// document.querySelector("#output").innerHTML = fruits[randomIndex];
}