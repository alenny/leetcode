/**
 * @param {number[]} nums
 * @return {boolean}
 */
const PredictTheWinner = function (nums) {
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length; ++i) {
        dp[i] = new Array(nums.length);
        dp[i][i] = { p1: nums[i], p2: 0 };
    }
    for (let dist = 1; dist < nums.length; ++dist) {
        for (let i = 0; i < nums.length - dist; ++i) {
            j = i + dist;
            let t1 = dp[i][j - 1].p2 + nums[j];
            let t2 = dp[i + 1][j].p2 + nums[i];
            dp[i][j] = t1 > t2 ?
                { p1: t1, p2: dp[i][j - 1].p1 } :
                { p1: t2, p2: dp[i + 1][j].p1 };
        }
    }
    return dp[0][nums.length - 1].p1 >= dp[0][nums.length - 1].p2;
};

module.exports = PredictTheWinner;