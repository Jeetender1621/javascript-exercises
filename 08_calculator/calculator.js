const add = function(num1,num2) {
	return num1+num2;
};

const subtract = function(num1,num2) {
  if(num2 > num1){
	  let temp = num1;
    num1 = num2;
    num2 = temp;
  }
  return num1 - num2;
};

const sum = function(sumArray) {
	return sumArray.reduce( (sum,arrayValue) => sum+arrayValue,0);
};

const multiply = function(mulArray) {
  return mulArray.reduce( (multiply,arrayValue) => multiply*arrayValue,1);
};

const power = function(num1,num2) {
	// return num1**num2;
  return Math.pow(num1,num2);

};

const factorial = function(num) {
  let factorial = 1;
  for(let i = 1; i<= num; i++){
    factorial*=i;
  }
	return factorial
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
