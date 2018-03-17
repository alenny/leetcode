/**
 * @param {number} n
 * @return {number}
 */
const nthUglyNumberByDivide = function (n) {
    let num = 1;
    let uglySet = new Set([1]);
    while (n > 1) {
        ++num;
        while (!isUgly(num, uglySet)) {
            ++num;
        }
        uglySet.add(num);
        --n;
    }
    return num;
};

function isUgly(num, uglySet) {
    for (let factor of [2, 3, 5]) {
        if (num % factor === 0) {
            let tmp = num / factor;
            if (uglySet.has(tmp)) {
                return true;
            }
        }
    }
    return false;
}

const nthUglyNumber = function (n) {
    let firstN = [1];
    let factor2 = 2, factor3 = 3, factor5 = 5;
    let i2 = 0, i3 = 0, i5 = 0;
    while (firstN.length < n) {
        let min = Math.min(factor2, factor3, factor5);
        firstN.push(min);
        if (min === factor2) {
            factor2 = firstN[++i2] * 2;
        }
        if (min === factor3) {
            factor3 = firstN[++i3] * 3;
        }
        if (min === factor5) {
            factor5 = firstN[++i5] * 5;
        }
    }
    return firstN[n - 1];
};

module.exports = nthUglyNumber;