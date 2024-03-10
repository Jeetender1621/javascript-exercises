const removeFromArray = function (arr, ...args) {
    const newArr = [];
    arr.map(el => {
        if (!args.includes(el)) newArr.push(el)
    })
    return newArr;
};

// Do not edit below this line
module.exports = removeFromArray;
