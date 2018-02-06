/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
    let map = new Map();
    for (let c of candidates) {
        let count = map.get(c);
        map.set(c, count ? count + 1 : 1);
    }
    let distinctNums = Array.from(map.keys());
    let ret = [];
    helper(distinctNums, 0, map, target, ret, []);
    return ret;
};

function helper(distinctNums, idx, map, target, ret, currComb) {
    if (target === 0) {
        ret.push(currComb.slice());
        return;
    }
    if (target < 0) {
        return;
    }
    for (let i = idx; i < distinctNums.length; ++i) {
        let curr = distinctNums[i];
        let max = map.get(curr);
        let currCount = 0;
        let newTarget = target;
        while (currCount < max) {
            currComb.push(curr);
            ++currCount;
            newTarget -= curr;
            helper(distinctNums, i + 1, map, newTarget, ret, currComb);
        }
        for (let j = 0; j < currCount; ++j) {
            currComb.pop();
        }
    }
}

module.exports = combinationSum2;