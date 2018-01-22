/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivision = function (nums) {
    if (!nums || nums.length === 0 || nums[0].length === 0) {
        return '';
    }
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length; ++i) {
        dp[i] = new Array(nums[0].length);
        dp[i][i] = { min: nums[i], max: nums[i], minExp: nums[i].toString(), maxExp: nums[i].toString() };
    }
    for (let dist = 1; dist < nums.length; ++dist) {
        for (let i = 0; i < nums.length - dist; ++i) {
            let j = i + dist;
            dp[i][j] = { min: Number.POSITIVE_INFINITY, max: Number.NEGATIVE_INFINITY };
            for (let div = i; div < j; ++div) {
                let min = dp[i][div].min / dp[div + 1][j].max;
                if (min < dp[i][j].min) {
                    dp[i][j].min = min;
                    dp[i][j].minExp = dp[i][div].minExp + '/' + (div + 1 === j ? dp[div + 1][j].maxExp : '(' + dp[div + 1][j].maxExp + ')');
                }
                let max = dp[i][div].max / dp[div + 1][j].min;
                if (max > dp[i][j].max) {
                    dp[i][j].max = max;
                    dp[i][j].maxExp = dp[i][div].maxExp + '/' + (div + 1 === j ? dp[div + 1][j].minExp : '(' + dp[div + 1][j].minExp + ')');
                }
            }
        }
    }
    return dp[0][nums.length - 1].maxExp;
};

module.exports = optimalDivision;