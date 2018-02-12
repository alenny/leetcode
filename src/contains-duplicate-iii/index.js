/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number} t
 * @return {boolean}
 */
const containsNearbyAlmostDuplicateDirect = function (nums, k, t) {
    if (nums.length < 2) {
        return false;
    }
    let left = 0, right = 1;
    while (left < nums.length - 1) {
        while (right < nums.length && right - left <= k) {
            let diff = nums[right] - nums[left];
            if (Math.abs(diff) <= t) {
                return true;
            }
            ++right;
        }
        ++left;
        right = left + 1;
    }
    return false;
};

const containsNearbyAlmostDuplicate = function (nums, k, t) {
    // Using bucket
    // Numbers in the same bucket have a value range of t+1
    // so that the diff of any two numbers will be <=t.
    if (nums.length < 2 || k < 1 || t < 0) {
        return false;
    }
    const MIN_INT = -Math.pow(2, 31);
    let bucketMap = new Map();  // only store the bucket indices of the recent k nums
    for (let i = 0; i < nums.length; ++i) {
        let remappedVal = nums[i] - MIN_INT;
        let bucket = Math.floor(remappedVal / (t + 1));
        if (bucketMap.has(bucket) ||
            bucketMap.has(bucket - 1) && remappedVal - bucketMap.get(bucket - 1) <= t ||
            bucketMap.has(bucket + 1) && bucketMap.get(bucket + 1) - remappedVal <= t) {
            return true;
        }
        // Note the remaining buckets in bucketMap are all unique,
        // otherwise true should have be returned already.
        if (bucketMap.size >= k) {
            let numIdxToRemove = i - k;
            let bucketToRemove = Math.floor((nums[numIdxToRemove] - MIN_INT) / (t + 1));
            bucketMap.delete(bucketToRemove);
        }
        bucketMap.set(bucket, remappedVal);
    }
    return false;
};

module.exports = containsNearbyAlmostDuplicate;