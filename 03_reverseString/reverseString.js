const reverseString = function (string) {
    let stringReverse = "";
    if (string !== null && string !== undefined) {
        for (let i = string.length - 1; i >= 0; i--) {
            stringReverse += string[i];
        }
    }
    else{
        return 'ERROR'
    }

    return stringReverse;
};
//can also use 
/*
return string.split("").reverse().join("");
*/

// Do not edit below this line
module.exports = reverseString;
