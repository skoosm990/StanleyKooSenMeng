const disneyData = [
	{
		open: "120.54",
		high: "122.56",
		low: "120.54",
		close: "121.09"
	},
	{
		open: "123.15",
		high: "127.76",
		low: "123.02",
		close: "124.92"
	}
];

// Write your code below


//Question 5: Finding the average closing price in a Nested Object

//Loop through disneyData for closing price

for(let i = 0; i < disneyData.length; i++) {
	console.log("Close: ",       		(disneyData[i]["close"]))
}

//Average closing price = sum of close price / count of close price

// step 1: find sum of close
let sum = 0;
for(let i = 0; i < disneyData.length; i++){
	// add each value of prices into result container
	sum += parseFloat(disneyData[i]["close"]);

}
console.log(sum);


// step 2: find count of close
const count = disneyData.length;
console.log(count);

// step 3: find average closing price
const averageClose = sum / count;

console.log("Average closing price of Disney is "  + averageClose.toFixed(2));