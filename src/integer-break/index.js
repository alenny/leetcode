/**
 * @param {number} n
 * @return {number}
 */
const integerBreak = function (n) {
    if (n === 2) {
        return 1;
    }
    if (n === 3) {
        return 2;
    }
    let countMax = Math.floor(n / 2);
    let countMid = (2 + countMax) >> 1;
    let maxProduct = calProduct(n, countMid);
    let product;
    let count = countMid - 1;
    while (count > 1 && (product = calProduct(n, count)) > maxProduct) {
        maxProduct = product;
        --count;
    }
    count = countMid + 1;
    while (count <= countMax && (product = calProduct(n, count)) > maxProduct) {
        maxProduct = product;
        ++count;
    }
    return maxProduct;
};

function calProduct(n, count) {
    let ave = Math.floor(n / count);
    let extra = n % count;
    let product = 1;
    for (let i = 0; i < extra; ++i) {
        product *= (ave + 1);
    }
    for (let i = extra; i < count; ++i) {
        product *= ave;
    }
    return product;
}

module.exports = integerBreak;