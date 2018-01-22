/**
 * @param {number[]} nums
 * @return {number}
 */
const singleNonDuplicate = function (nums) {
    return findHelper(nums, 0, nums.length - 1);
};

function findHelper(nums, left, right) {
    if (left > right) {
        return undefined;
    }
    if (left === right) {
        return nums[left];
    }
    let mid = (left + right) >> 1;
    if (mid > left && mid < right) {
        if (nums[mid] !== nums[mid - 1] && nums[mid] !== nums[mid + 1]) {
            return nums[mid];
        }
        if (nums[mid] === nums[mid - 1]) {
            return divideFind(nums, left, mid - 2, mid + 1, right);
        }
        // nums[mid] === nums[mid + 1]
        return divideFind(nums, left, mid - 1, mid + 2, right);
    }
    if (mid === left) {
        return nums[mid] !== nums[mid + 1] ? nums[mid] :
            divideFind(nums, left, mid - 1, mid + 2, right);
    }
    // mid === right
    return nums[mid] !== nums[mid - 1] ? nums[mid] :
        divideFind(nums, left, mid - 2, mid + 1, right);
}

function divideFind(nums, l0, r0, l1, r1) {
    let ret = findHelper(nums, l0, r0);
    return ret === undefined ? findHelper(nums, l1, r1) : ret;
}

module.exports = singleNonDuplicate;