/**
 * @param {number[]} nums
 * @return {number}
 */
const thirdMax = function (nums) {
    let max = new Array(3); // finally, max[0]>max[1]>max[2]
    max.fill(Number.NEGATIVE_INFINITY);
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === max[0] || nums[i] === max[1] || nums[i] == max[2]) {
            continue;
        }
        if (nums[i] > max[0]) {
            max[2] = max[1];
            max[1] = max[0];
            max[0] = nums[i];
        } else if (nums[i] > max[1]) {
            max[2] = max[1];
            max[1] = nums[i];
        } else if (nums[i] > max[2]) {
            max[2] = nums[i];
        }
    }
    return max[2] !== Number.NEGATIVE_INFINITY ? max[2] : max[0];
};

module.exports = thirdMax;