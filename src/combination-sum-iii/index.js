/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
    if (k <= 0 || n <= 0) {
        return [];
    }
    let ret = [];
    helper(k, n, [], ret);
    return ret;
};

function helper(k, n, solution, ret) {
    if (k === 0 && n === 0) {
        ret.push(solution.slice());
        return;
    }
    if (k === 0 && n > 0 || k > 0 && n === 0) {
        return;
    }
    let begin = solution.length > 0 ? solution[solution.length - 1] + 1 : 1;
    for (let i = begin; i <= Math.min(9, n); ++i) {
        solution.push(i);
        helper(k - 1, n - i, solution, ret);
        solution.pop();
    }
}

module.exports = combinationSum3;