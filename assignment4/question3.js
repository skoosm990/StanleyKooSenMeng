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

// Create a function for number of data points above a certain number threshold

function getAbove(data){

let result = 0;
for(let price of data){
    if((price > SMA)){
        result += 1;
    }
}
console.log("Number of days AMD was above the 7-day SMA is: " + result)
}

getAbove(amdPrices);

// 