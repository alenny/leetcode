/**
 * @param {number[]} nums
 * @return {string}
 */
const largestNumber = function (nums) {
    let strs = new Array(nums.length);
    let allZero = true;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) {
            allZero = false;
        }
        strs[i] = nums[i].toString();
    }
    if (allZero) {
        return '0';
    }
    strs.sort((a, b) => {
        let ba = b + a, ab = a + b;
        if (ba === ab) {
            return 0;
        }
        if (ba > ab) {
            return 1;
        }
        return -1;
    });
    return strs.join('');
};

module.exports = largestNumber;