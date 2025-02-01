// Modify the code below:

const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// Step 1: Sort the array in ascending order. By default, JavaScript sorts arrays as strings, hence the need to add condition logic
const sortedPrices = amdPrices.sort((a, b) => a - b);

console.log(sortedPrices);

// Step 2: Get the three lowest prices
const lowestThreePrices = sortedPrices.slice(0, 3);

console.log("The three lowest prices are ", lowestThreePrices);

