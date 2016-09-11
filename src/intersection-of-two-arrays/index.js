/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var col1 = {};
    var i;
    var result = [];
    var n;
    for (i = 0; i < nums1.length; ++i) {
        col1[nums1[i]] = 1;
    }
    for (i = 0; i < nums2.length; ++i) {
        n = nums2[i];
        if (col1[n]) {
            result.push(n);
            col1[n] = 0;
        }
    }
    return result;
};

module.exports = intersection;