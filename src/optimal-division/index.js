/**
 * @param {number[]} nums
 * @return {string}
 */
const optimalDivisionDP = function (nums) {
    if (!nums || nums.length === 0) {
        return '';
    }
    let dp = new Array(nums.length);
    for (let i = 0; i < nums.length; ++i) {
        dp[i] = new Array(nums.length);
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

const optimalDivision = function (nums) {
    // very tricky solution since all nums are positive integers
    if (!nums || nums.length === 0) {
        return '';
    }
    if (nums.length === 1) {
        return nums[0].toString();
    }
    if (nums.length === 2) {
        return nums[0] + '/' + nums[1];
    }
    let ret = nums[0] + '/(' + nums[1];
    for (let i = 2; i < nums.length; ++i) {
        ret += '/' + nums[i];
    }
    return ret + ')';
}

module.exports = optimalDivision;