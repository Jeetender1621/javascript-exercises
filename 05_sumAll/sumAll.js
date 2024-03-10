const sumAll = function (num1, num2) {
    let result = 'ERROR';
    //To check if num1,num2 are of type numbers and their value is  greater than 0
    if (typeof num1 === 'number' && typeof num2 === 'number' && (num1 > 0 && num2 > 0)) {
        const resultFunction = (a, b) => (b * (b + a)) / 2;

        if (num1 > num2) {
            result = resultFunction(num2, num1);
        } else if (num1 < num2) {
            result = resultFunction(num1, num2);
        }
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
