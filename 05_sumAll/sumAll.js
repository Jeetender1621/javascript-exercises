const sumAll = function (min, max) {
    let result = 'ERROR';
    //To check if min,max are of type numbers and their value is  greater than 0
    if (Number.isInteger(min) && Number.isInteger(max) && (min > 0 && max > 0)) {

        if (min > max) {
         const temp = min;
         min = max;
         max = temp;
        }
        //No formula
        let sum = 0;
        for(let i = min; i <=max; i++ ){
            sum+=i;
        }
        return result =sum;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
