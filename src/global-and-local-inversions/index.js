/**
 * @param {number[]} A
 * @return {boolean}
 */
const isIdealPermutation = function (A) {
    // Note: since a local inversion is also a global inversion, 
    //       there should only be strict local inversions to make the two counts equal.
    for (let i = 0; i < A.length; ++i) {
        if (Math.abs(A[i] - i) > 1) {
            return false;
        }
    }
    return true;
};

module.exports = isIdealPermutation;