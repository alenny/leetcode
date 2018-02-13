/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function (J, S) {
    let set = new Set();
    for (let ch of J) {
        set.add(ch);
    }
    let count = 0;
    for (let ch of S) {
        if (set.has(ch)) {
            ++count;
        }
    }
    return count;
};

module.exports = numJewelsInStones;