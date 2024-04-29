// Ethan Lawrence
// April 24 2024
// gen rand numbs in JS

console.log(`First Random number ${Math.random()}`);
console.log(`Second Random number ${Math.random()}`);
console.log(`Third Random number ${Math.random()}`);

console.log(`between 0 and 5 ${Math.random() * 5}`);
console.log(`again between 0 and 5 ${Math.random() * 5}`);

const randNum = Math.random() * 5;
const secRandNum = Math.random() * 5;
const thrdRandNum = Math.random() * 5;

console.log(`First Random number floor mthd ${Math.floor(randNum)}`);
console.log(`Second Random number floor mthd ${Math.floor(secRandNum)}`);
console.log(`Third Random number floor mthd ${Math.floor(thrdRandNum)}`);

const words = ["seven", "teen", "Bricks", "is", "less"];

const randIndex = Math.floor(Math.random() * words.length);
console.log (`Rand Gen index number is ${randIndex}`);
console.log (`Rand Gen array element is ${words[randIndex]}`);
