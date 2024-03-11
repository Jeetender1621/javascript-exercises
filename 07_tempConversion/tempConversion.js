const convertToCelsius = function(tempFahrenheit) {
  let tempCelsius = +((((tempFahrenheit - 32)* 5/9)*100)/100).toFixed(1);
  return tempCelsius;  
};

const convertToFahrenheit = function(tempCelsius) {
  let tempFahrenheit = +((((9/5 * tempCelsius) + 32)*100)/100).toFixed(1);
  return tempFahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
