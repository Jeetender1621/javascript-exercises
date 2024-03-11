const leapYears = function(year) {
   //leap year should be divisible by 4
   if(year%4 === 0){
    //years divisible by 100 are not leap years unless they are divisible by 400
    if(year%100 === 0 && year%400 !== 0){
        return false;
    }
    else if(year%400 === 0){
        return true;
    }
    return true;
   }
   else return false;
};

// Do not edit below this line
module.exports = leapYears;
