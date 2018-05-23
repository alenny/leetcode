/**
 * @param {number[]} A
 * @return {number}
 */
const numberOfArithmeticSlices = function (A) {
    let dp = new Array(A.length);
    for (let i = 0; i < A.length - 1; ++i) {
        dp[i] = new Array(A.length);
        let diff = A[i + 1] - A[i];
        dp[i][i + 1] = diff !== 0 ? [diff] : [];
    }
    let total = 0;
    for (let dist = 2; dist < A.length; ++dist) {
        for (let i = 0; i < A.length - dist; ++i) {
            let j = i + dist;
            dp[i][j] = [];
            for (let k = i + 1; k < j; ++k) {
                for (let diff of dp[i][k]) {
                    if (diff === A[j] - A[k]) {
                        dp[i][j].push(diff);
                        ++total;
                    }
                }
            }
            if (A[j] !== A[i]) {
                dp[i][j].push(A[j] - A[i]);
            }
        }
    }
    let map = new Map();
    for (let a of A) {
        let count = map.get(a);
        map.set(a, count ? count + 1 : 1);
    }
    for (let count of map.values()) {
        total += calArithmetic(count);
    }
    return total;
};

function calArithmetic(count) {
    let totalComp = 0;
    for (let k = 3; k <= count; ++k) {
        totalComp += compose(count, k);
    }
    return totalComp;
}

function compose(n, m) {
    return Math.round(factorial(n) / factorial(m) / factorial(n - m));
}

function factorial(n) {
    let ret = 1;
    while (n > 1) {
        ret *= n--;
    }
    return ret;
}

module.exports = numberOfArithmeticSlices;