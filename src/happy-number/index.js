/**
 * @param {number} n
 * @return {boolean}
 */
const isHappy = function (n) {
    let set = new Set();
    while (n !== 1) {
        let sum = 0;
        while (n > 0) {
            let k = n % 10;
            sum += k * k;
            n = Math.floor(n / 10);
        }
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        n = sum;
    }
    return true;
};

module.exports = isHappy;