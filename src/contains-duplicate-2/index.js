/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const containsNearbyDuplicate = function (nums, k) {
    let map = new Map();
    for (let i = 0; i < nums.length; ++i) {
        let index = map.get(nums[i]);
        if (index !== undefined && i - index <= k) {
            return true;
        }
        map.set(nums[i], i);
    }
    return false;
};

module.exports = containsNearbyDuplicate;