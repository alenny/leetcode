/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
const anagramMappings = function (A, B) {
    let mapB = new Map();
    for (let j = 0; j < B.length; ++j) {
        let indices = mapB.get(B[j]);
        if (!indices) {
            mapB.set(B[j], new Set([j]));
        } else {
            indices.add(j);
        }
    }
    let ret = new Array(A.length);
    for (let i = 0; i < A.length; ++i) {
        let indices = mapB.get(A[i]);
        for (let j of indices) {
            ret[i] = j;
            break;
        }
        indices.delete(ret[i]);
    }
    return ret;
};

module.exports = anagramMappings;