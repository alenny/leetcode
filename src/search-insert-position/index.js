/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = function (nums, target) {
    return searchHelper(nums, target, 0, nums.length - 1);
};

function searchHelper(nums, target, left, right) {
    if (left > right) {
        if (left < nums.length) {
            return nums[left] > target ? left : left + 1;
        }
        return nums[right] > target ? right : right + 1;
    }
    let mid = (left + right) >> 1;
    if (nums[mid] === target) {
        return mid;
    }
    if (nums[mid] > target) {
        return searchHelper(nums, target, left, mid - 1);
    }
    // nums[mid] < target
    return searchHelper(nums, target, mid + 1, right);
}

module.exports = searchInsert;