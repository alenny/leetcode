/**
 * @param {number} num
 * @return {boolean}
 */
const isUglyDirect = function (num) {
    if (num <= 0) {
        return false;
    }
    if (num < 7) {
        return true;
    }
    for (let i = 1; i <= Math.sqrt(num); ++i) {
        let x = num / i;
        if (x !== Math.floor(x)) {
            continue;
        }
        if (i > 5 && isPrime(i) || x > 5 && isPrime(x)) {
            return false;
        }
    }
    return true;
};

function isPrime(x) {
    for (let i = 2; i <= Math.sqrt(x); ++i) {
        let y = x / i;
        if (y === Math.floor(y)) {
            return false;
        }
    }
    return true;
}

const isUgly = function (num) {
    // Note: all integers (>1) can be presented as multiple of prime numbers
    for (let i of [2, 3, 5]) {
        while (num > 1 && num % i === 0) {
            num /= i;
        }
    }
    return num === 1;
}

module.exports = isUgly;