const maxSubArray = function (nums) {
    let sumN = nums[0];
    let minSumNPre = 0;
    let maxSubSum = sumN;
    for (let i = 1; i < nums.length; ++i) {
        minSumNPre = Math.min(minSumNPre, sumN);
        sumN = sumN + nums[i];
        const subSum = sumN - minSumNPre;
        if (subSum > maxSubSum) {
            maxSubSum = subSum;
        }
    }
    return maxSubSum;
};

module.exports = maxSubArray;