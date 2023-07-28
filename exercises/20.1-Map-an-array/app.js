let arrayOfCelsiusValues = [-2,34,56,-10];

let arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	return value * 1.8 + 32;
	//add your code here and return the new value
	
});

console.log(arrayOfFahrenheitValues);