const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(arr) {
  let summation = 0;
	arr.forEach(index => {
    summation += index;
  }); return summation;
};

const multiply = function(arr) {
  let mults = 1;
	arr.forEach(index => {
    mults *= index;
  }); return mults;
};

const power = function(num, pow) {
  let numPowed = 1;
	for(let i = 1; i <= pow; i++){
    numPowed *= num;
  } return numPowed;
};

const factorial = function(num) {
  let numFac = 1;
  for(let i = num; i > 0; i--){
    numFac *= i;
  } 
  if(numFac === 0){
    numFac = 1;
  }
  return numFac;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
