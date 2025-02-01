const msftData = [
	[190.15, 196.21, 191.07, 194.44],
	[193.61, 195.89, 190.12, 193.40]
];

// Write your code below

//Question 4: Finding the average closing price in Nested Array

//Loop through msftData for closing price

for(let i = 0; i < msftData.length; i++) {
	console.log("Close: ",       msftData[i][3])
}

//Average closing price = sum of close price / count of close price

// step 1: find sum of close
let sum = 0;
for(let i = 0; i < msftData.length; i++){
	// add each value of prices into result container
	sum += msftData[i][3];

}
console.log(sum);

// step 2: find count of close
const count = msftData.length;
console.log(count);

// step 3: find average closing price
const averageClose = sum / count;

console.log("Average closing price of MSFT is "  + averageClose.toFixed(2));

