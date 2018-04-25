/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */
const crackSafe = function (n, k) {
    let set = new Set();
    let total = Math.pow(k, n);
    let str = '';
    return helper(n, k, total, set, str);
};

function helper(n, k, total, set, str) {
    if (set.size === total) {
        return str;
    }
    let shortest;
    for (let xk = 0; xk < k; ++xk) {
        let code;
        if (str.length >= n - 1) {
            code = str.substring(str.length - n + 1) + xk;
            if (set.has(code)) {
                continue;
            }
            set.add(code);
        }
        let s = helper(n, k, total, set, str + xk);
        if (s !== undefined && (shortest === undefined || s.length < shortest.length)) {
            shortest = s;
        }
        if (str.length >= n - 1) {
            set.delete(code);
        }
        if (shortest !== undefined && shortest.length === total + n - 1) {
            return shortest;
        }
    }
    return shortest;
}

module.exports = crackSafe;