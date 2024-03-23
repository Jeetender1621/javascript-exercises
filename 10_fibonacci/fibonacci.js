const fibonacci = function (num) {
    num = parseInt(num);
    if (num === 0) return 0;
    if (num === 1) return 1;
    if (num < 1) return "OOPS";

    let prev = 0;
    let cur = 1;

    for (let i = 2; i <= num; i++) {
        const next = prev +cur;
        prev = cur;
        cur = next;
    }
    return cur;
};

// Do not edit below this line
module.exports = fibonacci;
