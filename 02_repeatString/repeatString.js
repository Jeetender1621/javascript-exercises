const repeatString = function(string, num) {
    let reptString = "";
    for(let i= 1; i <= num; i++){
        reptString+= string;
    }
    if(num <0) return 'ERROR';
    return reptString;
};

// Do not edit below this line
module.exports = repeatString;
