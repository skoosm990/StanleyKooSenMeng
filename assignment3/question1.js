const msftData = [190.15, 194.21, 191.07, 190.44, 200.15];

// Write your code below

// Calculate sum directly
const totalSum = eval(msftData.join("+"));
const totalCount = msftData.length;
const average = totalSum / totalCount

console.log(average);