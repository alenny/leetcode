/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const aCode = 'a'.charCodeAt(0);

const groupAnagrams = function (strs) {
    let map = new Map();
    let chCounts = new Array(26);
    for (let s of strs) {
        chCounts.fill(0);
        let curr = 0;
        while (curr < s.length) {
            let c = s.charCodeAt(curr++);
            ++chCounts[c - aCode];
        }
        let key = makeKey(chCounts);
        let ss = map.get(key);
        if (!ss) {
            map.set(key, [s]);
        } else {
            ss.push(s);
        }
    }
    return Array.from(map.values());
};

function makeKey(chCounts) {
    let key = '';
    for (let idx = 0; idx < chCounts.length; ++idx) {
        if (chCounts[idx] > 0) {
            key += String.fromCharCode(aCode + idx) + chCounts[idx];
        }
    }
    return key;
}

module.exports = groupAnagrams;