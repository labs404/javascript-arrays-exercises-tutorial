let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map((value) => {
	return (1.8 * value) + 32
	
	//add your code here and return the new value
	
});

console.log(arrayOfFahrenheitValues);