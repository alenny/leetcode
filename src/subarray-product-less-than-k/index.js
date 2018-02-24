/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
const numSubarrayProductLessThanK = function (nums, k) {
    let begin = 0, end = 0, total = 0;
    let firstEnd = begin;
    let product = nums[begin];
    while (end < nums.length) {
        if (product >= k) {
            total += (end - firstEnd) * (firstEnd + end - 2 * begin + 1) / 2;
            if (end > begin) {
                product /= nums[begin++];
                firstEnd = end;
            } else {
                if (++begin === nums.length) {
                    break;
                }
                firstEnd = end = begin;
                product = nums[begin];
            }
        } else {
            ++end;
            if (end === nums.length) {
                total += (end - firstEnd) * (firstEnd + end - 2 * begin + 1) / 2;
                break;
            }
            product *= nums[end];
        }
    }
    return total;
};

module.exports = numSubarrayProductLessThanK;