/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    var col1 = {};
    var i;
    var result = [];
    var n;
    for (i = 0; i < nums1.length; ++i) {
        addCount(col1, nums1[i]);
    }
    for (i = 0; i < nums2.length; ++i) {
        n = nums2[i];
        if (col1[n]) {
            result.push(n);
            --col1[n];
        }
    }
    return result;
};

var addCount = function (col, n) {
    return col[n] ? ++col[n] : col[n] = 1;
};

module.exports = intersect;