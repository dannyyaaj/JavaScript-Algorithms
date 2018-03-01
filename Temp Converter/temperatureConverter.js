// Converts Celsius to Fahrenheit
function celsiusToF(celsius) {
const fTemp = (celsius *(9/5)) + 32;
return fTemp + " \xB0";
};

console.log(celsiusToF(0));

// Converts Fahrenheit to Celsius
function fahrenheitToC(fTemp) {
const cTemp = (fTemp - 32) * 5/9;;
return cTemp + " \xB0";
}

console.log(fahrenheitToC(32));