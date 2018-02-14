/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const canPartitionKSubsets = function (nums, k) {
    let sum = 0;
    nums.forEach(a => sum += a);
    if (sum % k !== 0) {
        return false;
    }
    let each = sum / k;
    let used = new Array(nums.length);
    used.fill(false);
    nums.sort((a, b) => b - a);
    return canBuild(nums, each, each, k, used, 0);
};

function canBuild(nums, each, sumToGo, groupsLeft, used, idx) {
    if (groupsLeft === 0) {
        return true;
    }
    if (sumToGo === 0) {
        return canBuild(nums, each, each, groupsLeft - 1, used, 0);
    }
    while (idx < nums.length) {
        while (idx < nums.length && used[idx]) {
            ++idx;
        }
        if (idx === nums.length) {
            break;
        }
        if (nums[idx] > sumToGo) {
            ++idx;
            continue;
        }
        used[idx] = true;
        if (canBuild(nums, each, sumToGo - nums[idx], groupsLeft, used, idx + 1)) {
            return true;
        }
        used[idx] = false;
        ++idx;
    }
    return false;
}

module.exports = canPartitionKSubsets;