/**
 * @param {string} s
 * @return {string[]}
 */
const findRepeatedDnaSequences = function (s) {
    let ret = new Set();
    let set = new Set();
    for (let i = 0; i <= s.length - 10; ++i) {
        let sub = s.substr(i, 10);
        if (set.has(sub)) {
            ret.add(sub);
        } else {
            set.add(sub);
        }
    }
    return Array.from(ret.keys());
};

module.exports = findRepeatedDnaSequences;