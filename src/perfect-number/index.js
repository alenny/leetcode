/**
 * @param {number} num
 * @return {boolean}
 */
const checkPerfectNumber = function (num) {
    let sum = 1;
    let sqrt = Math.sqrt(num);
    if (sqrt === Math.floor(sqrt)) {
        sum += sqrt;
    }
    for (let i = 2; i < Math.sqrt(num); ++i) {
        let j = num / i;
        if (j === Math.floor(j)) {
            sum += i + j;
        }
    }
    return sum === num;
};

module.exports = checkPerfectNumber;