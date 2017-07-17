/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
    const results = [];
    let i = 0, i1 = 1;
    while (i < nums.length) {
        let ni = nums[i];
        if (ni === -1) {
            i = i1++;
            continue;
        }
        let nn;
        do {
            nn = nums[ni - 1];
            nums[ni - 1] = -1;
            ni = nn;
        } while (ni != -1);
        i = i1++;
    }
    for (i = 0; i < nums.length; ++i) {
        if (nums[i] > 0) {
            results.push(i + 1);
        }
    }
    return results;
};

module.exports = findDisappearedNumbers;