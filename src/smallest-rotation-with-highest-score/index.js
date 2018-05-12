/**
 * @param {number[]} A
 * @return {number}
 */
const bestRotationN2 = function (A) {
    if (A.length === 0) {
        return 0;
    }
    let points = new Array(A.length);
    points.fill(0);
    for (let i = 0; i < A.length; ++i) {
        for (let j = A[i]; j <= i; ++j) {
            ++points[i - j];
        }
        for (let j = Math.max(i + 1, A[i]); j < A.length; ++j) {
            ++points[A.length - (j - i)];
        }
    }
    let maxPoint = points[0], k = 0;
    for (let i = 1; i < A.length; ++i) {
        if (points[i] > maxPoint) {
            maxPoint = points[i];
            k = i;
        }
    }
    return k;
};

const bestRotation = function (A) {
    let pointChanges = new Array(A.length); // Change from the initial state after the kth rotation 
    pointChanges.fill(0);
    for (let i = 0; i < A.length; ++i) {
        // At the rot move, the point reduces 1 because of A[i] moves from A[i] to A[i]-1
        // Note: if A[0]===0, let pointChanges[1] reduce 1 because we will add 1 later to make the final change as 0
        let rot = (i - A[i] + A.length + 1) % A.length;
        --pointChanges[rot];
    }
    let maxChange = pointChanges[0], maxChangeRotation = 0;
    for (let i = 1; i < A.length; ++i) {
        // +1 because the first value moves to the last position
        pointChanges[i] += pointChanges[i - 1] + 1;
        if (pointChanges[i] > maxChange) {
            maxChange = pointChanges[i];
            maxChangeRotation = i;
        }
    }
    return maxChangeRotation;
};

module.exports = bestRotation;