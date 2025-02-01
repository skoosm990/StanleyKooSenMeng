const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below

// create a result container
let sum = 0;

// loop through amdPrices
for(let i = 0; i < amdPrices.length; i++){
    // add each value of prices into result container
    sum += amdPrices[i];
}
console.log(sum);

// Calculate the 7-day Simple Moving Average (SMA)

let SMA = sum / amdPrices.length;

console.log("The 7-day SMA of AMD is " + SMA.toFixed(2));