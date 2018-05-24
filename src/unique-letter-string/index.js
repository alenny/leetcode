/**
 * @param {string} S
 * @return {number}
 */
const uniqueLetterString = function (S) {
    // Consider how a single letter contributes to the total number
    const FACTOR = Math.pow(10, 9) + 7;
    let map = new Map();
    for (let i = 0; i < S.length; ++i) {
        let col = map.get(S[i]);
        if (!col) {
            map.set(S[i], [i]);
        } else {
            col.push(i);
        }
    }
    let total = 0;
    for (let indexes of map.values()) {
        let start = 0, count = 0;
        for (let j = 0; j < indexes.length; ++j) {
            let end = j < indexes.length - 1 ? indexes[j + 1] : S.length;
            count = (count + (indexes[j] - start + 1) * (end - indexes[j])) % FACTOR;
            start = indexes[j] + 1;
        }
        total = (total + count) % FACTOR;
    }
    return total;
};

module.exports = uniqueLetterString;