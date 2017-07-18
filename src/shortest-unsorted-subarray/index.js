/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
    if (nums.length === 0) {
        return 0;
    }

    let left = 0;
    while (left < nums.length - 1 && nums[left] <= nums[left + 1]) {
        ++left;
    }
    if (left === nums.length - 1) {
        return 0;   // all sorted
    }
    let subBegin = left++;
    while (left < nums.length) {
        while (subBegin > 0 && nums[left] < nums[subBegin - 1]) {
            --subBegin;
        }
        ++left;
    }

    let right = nums.length - 1;
    while (right > 0 && nums[right] >= nums[right - 1]) {
        --right;
    }
    // not possible to be all sorted here because left already handled this possibility
    let subEnd = right--;
    while (right >= subBegin) {
        // only loop to subBegin because all pre-subBegin values are smaller
        while (subEnd < nums.length - 1 && nums[right] > nums[subEnd + 1]) {
            ++subEnd;
        }
        --right;
    }
    return subEnd - subBegin + 1;
};

module.exports = findUnsortedSubarray;