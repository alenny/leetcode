/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
    // Boyer-Moore Algorithm
    // https://gregable.com/2013/10/majority-vote-algorithm-find-majority.html
    let candidate0, candidate1, count0 = 0, count1 = 0;
    let idx = 0;
    while (idx < nums.length) {
        if (nums[idx] === candidate0 && count0 > 0) {
            ++count0;
        } else if (nums[idx] === candidate1 && count1 > 0) {
            ++count1;
        } else if (count0 === 0) {
            candidate0 = nums[idx];
            count0 = 1;
        } else if (count1 === 0) {
            candidate1 = nums[idx];
            count1 = 1;
        } else {
            --count0;
            --count1;
        }
        ++idx;
    }
    count0 = count1 = 0;
    for (let i = 0; i < nums.length; ++i) {
        if (nums[i] === candidate0) {
            ++count0;
        } else if (nums[i] === candidate1) {
            ++count1;
        }
    }
    let ret = [];
    if (count0 > Math.floor(nums.length / 3)) {
        ret.push(candidate0);
    }
    if (count1 > Math.floor(nums.length / 3)) {
        ret.push(candidate1);
    }
    return ret;
};

module.exports = majorityElement;