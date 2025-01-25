const disneyData = {
	open: "120.54",
	high: "122.56",
	low: "120.54",
	close: "121.09"
};

// Write your code below

// convert a string into a floating-point decimal number

const open = parseFloat(disneyData.open);
const high = parseFloat(disneyData.high);
const low = parseFloat(disneyData.low);
const close = parseFloat(disneyData.close);

// Calculate stock price based on formula
const priceFinal = (open - high + low - close).toFixed(2);

// output
console.log(priceFinal);