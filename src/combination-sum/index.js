/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
    let ret = [];
    candidates.sort((a, b) => b - a);
    sumHelper(candidates, 0, target, [], ret);
    return ret;
};

function sumHelper(candidates, start, target, solution, results) {
    if (target < 0) {
        return;
    }
    if (target === 0) {
        results.push(solution.slice()); // copy array
        return;
    }
    while (start < candidates.length && candidates[start] > target) {
        ++start;
    }
    while (start < candidates.length) {
        solution.push(candidates[start]);
        let nextTarget = target - candidates[start];
        sumHelper(candidates, start, nextTarget, solution, results);
        solution.pop();
        ++start;
    }
}

module.exports = combinationSum;