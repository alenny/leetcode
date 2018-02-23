/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
    let steps = 0, curr = 0;
    let nearest = curr + 1;
    while (curr < nums.length - 1) {
        let currFastest = curr + nums[curr];
        ++steps;
        if (currFastest >= nums.length - 1) {
            break;
        }
        let currJumpTo = currFastest;
        let nextFastest = currFastest + nums[currFastest];
        for (let i = nearest; i < currFastest; ++i) {
            let target = i + nums[i];
            if (target > nextFastest) {
                currJumpTo = i;
                nextFastest = target;
            }
        }
        curr = currJumpTo;
        nearest = currFastest + 1;
    }
    return steps;
};

module.exports = jump;