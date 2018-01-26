/**
 * @param {string} A
 * @param {string} B
 * @return {number}
 */
const repeatedStringMatch = function (A, B) {
    if (A.indexOf(B) >= 0) {
        return 1;
    }
    let dupA = A;
    let dupCount = 1;
    do {
        dupA += A;
        ++dupCount;
        if (dupA.indexOf(B) >= 0) {
            return dupCount;
        }
    } while (dupA.length <= B.length + A.length)
    return -1;
};

module.exports = repeatedStringMatch;