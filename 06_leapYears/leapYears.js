const leapYears = function(year) {
   //Simplied logic for leapyear check
   return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
};

// Do not edit below this line
module.exports = leapYears;
