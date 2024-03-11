const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = parseFloat(((tempFahrenheit - 32) * 5 / 9).toFixed(1));
  return tempCelsius;  
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = parseFloat(((tempCelsius * 9 / 5) + 32).toFixed(1));
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
