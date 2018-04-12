/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
    let dp = [[[nums[0]]]], ret = [], retSet = new Set();
    let dupTrack = [];
    for (let idx = 1; idx < nums.length; ++idx) {
        dp[idx] = [[nums[idx]]];
        let startJ = dupTrack[nums[idx]] ? dupTrack[nums[idx]] : 0;
        for (let j = startJ; j < idx; ++j) {
            if (nums[j] > nums[idx]) {
                continue;
            }
            for (let seq of dp[j]) {
                let newSeq = seq.slice();
                newSeq.push(nums[idx]);
                let key = newSeq.join(',');
                if (!retSet.has(key)) {
                    dp[idx].push(newSeq);
                    ret.push(newSeq);
                    retSet.add(key);
                }
            }
        }
        dupTrack[nums[idx]] = idx;
    }
    return ret;
};

module.exports = findSubsequences;