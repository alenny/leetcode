/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
    let ret = [];
    combineHelper(1, n, k, ret, []);
    return ret;
};

function combineHelper(begin, end, k, ret, curr) {
    if (curr.length === k) {
        ret.push(curr.slice());
        return;
    }
    for (let num = begin; num <= end; ++num) {
        curr.push(num);
        combineHelper(num + 1, end, k, ret, curr);
        curr.pop();
    }
}

module.exports = combine;