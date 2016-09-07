var twoSum = function (nums, target) {
    var dic = {};
    var i;
    for (i = 1; i < nums.length; ++i) {
        dic[nums[i]] = i;
    }
    for (i = 0; i < nums.length - 1; ++i) {
        var second = target - nums[i];
        if (dic[second]) {
            return [i, dic[second]];
        }
    }
    return null;
};

module.exports = twoSum;