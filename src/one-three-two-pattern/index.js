/**
 * @param {number[]} nums
 * @return {boolean}
 */
const find132pattern = function (nums) {
    let summits = [], i = 0, direction = 0, min = Number.POSITIVE_INFINITY;
    while (i < nums.length - 1) {
        if (nums[i] < nums[i + 1]) {
            direction = 1;
        } else if (nums[i] > nums[i + 1]) {
            if (direction === 1) {
                summits.push({ idx: i, leftMin: min });
            }
            direction = -1;
        }
        min = Math.min(min, nums[i++]);
    }
    if (summits.length === 0) {
        return false;
    }
    for (let summit of summits) {
        if (checkSummit(nums, summit)) {
            return true;
        }
    }
    return false;
};

function checkSummit(nums, summit) {
    for (let i = summit.idx + 1; i < nums.length; ++i) {
        if (nums[i] > summit.leftMin && nums[i] < nums[summit.idx]) {
            return true;
        }
    }
    return false;
}

module.exports = find132pattern;