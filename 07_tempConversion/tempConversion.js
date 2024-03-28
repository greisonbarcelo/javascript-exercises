const convertToCelsius = function(fahrenheit) {
  let formulaOne = (fahrenheit - 32) * 5/9;

  if(formulaOne === 0){
    return formulaOne;
  }
  return parseFloat(formulaOne.toFixed(1));
};

const convertToFahrenheit = function(celsius) {
  let formulaTwo = (9/5 * celsius) + 32;
  if(Number.isInteger(formulaTwo)){
    return formulaTwo;
  }
  return parseFloat(formulaTwo.toFixed(1));
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
