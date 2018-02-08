/**
 * @param {number[]} nums
 * @return {boolean}
 */
const makesquare = function (nums) {
    if (nums.length < 4) {
        return false;
    }
    let sum = 0;
    nums.forEach(a => sum += a);
    if (sum % 4 !== 0) {
        return false;
    }
    let side = sum / 4;
    nums.sort((a, b) => b - a);
    let sides = [side, side, side, side];
    return dfs(nums, sides, 0);
};

function dfs(nums, sides, numIdx) {
    if (numIdx === nums.length) {
        return sides[0] === 0 && sides[1] === 0 && sides[2] === 0;
    }
    for (let sideIdx = 0; sideIdx < 4; ++sideIdx) {
        if (sides[sideIdx] < nums[numIdx]) {
            continue;
        }
        sides[sideIdx] -= nums[numIdx];
        if (dfs(nums, sides, numIdx + 1)) {
            return true;
        }
        sides[sideIdx] += nums[numIdx];
    }
    return false;
}

module.exports = makesquare;