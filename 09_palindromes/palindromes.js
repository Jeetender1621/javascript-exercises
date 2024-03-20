const palindromes = function (str) {
    // Since we only consider letters and numbers, create a variable containing all valid characters
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';
    
    const cleanedStr = str
    .toLowerCase()
    .split('')
    .filter((character) => alphanumerical.includes(character))
    .join('');

    const reversedStr = cleanedStr.split('').reverse().join(''); // Reverse the string
    return cleanedStr === reversedStr; 
};

// Do not edit below this line
module.exports = palindromes;
