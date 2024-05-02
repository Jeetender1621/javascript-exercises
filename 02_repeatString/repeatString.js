const repeatString = function(string, num) {
    if (num < 0) return 'ERROR'; // Check for negative num before looping
    let reptString = "";
    for (let i = 0; i < num; i++) { // Start loop from i = 0, and condition should be i < num
        reptString += string;
    }
    return reptString;
};

// Do not edit below this line
module.exports = repeatString;
