/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const checkSubarraySum = function (nums, k) {
    if (nums.length < 2) {
        return false;
    }
    k = Math.abs(k);
    if (k === 1) {
        return true;
    }
    let sumMap = new Map(), sum = 0;
    sumMap.set(0, [-1]);
    for (let i = 0; i < nums.length; ++i) {
        sum += nums[i];
        let indices = sumMap.get(sum);
        if (!indices) {
            sumMap.set(sum, [i]);
        } else {
            indices.push(i);
        }
    }
    for (let s of sumMap.keys()) {
        let target = s;
        let idx = sumMap.get(s)[0];
        while (target <= sum) {
            let indices = sumMap.get(target);
            if (indices && indices[indices.length - 1] - idx >= 2) {
                return true;
            }
            if (k === 0) {
                break;
            }
            target += k;
        }
    }
    return false;
};

module.exports = checkSubarraySum;