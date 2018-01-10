/**
 * @param {number[]} nums
 * @return {boolean}
 */
const increasingTriplet = function (nums) {
    if (!nums || nums.length < 3) {
        return false;
    }
    let currIdx = 1, i0 = 0, j0 = -1, i1 = -1;
    while (currIdx < nums.length) {
        let curr = nums[currIdx];
        if (j0 === -1) {
            if (curr > nums[i0]) {
                j0 = currIdx;
            } else {
                i0 = currIdx;
            }
        } else {
            // then j0 !== -1
            if (curr > nums[j0]) {
                return true;
            }
            // then curr <= nums[j0]
            if (curr > nums[i0]) {
                j0 = currIdx;
                if (i1 !== -1) {
                    i0 = i1;
                    i1 = -1;
                }
            } else {
                // then curr <= nums[i0]
                if (i1 === -1 || curr < nums[i1]) {
                    i1 = currIdx;
                } else if (curr > nums[i1]) {
                    i0 = i1;
                    j0 = currIdx;
                    i1 = -1;
                }
            }
        }
        ++currIdx;
    }
    return false;
};

module.exports = increasingTriplet;