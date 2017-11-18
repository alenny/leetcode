/**
 * @param {string} s
 * @return {string}
 */
class DecodeResult {
    constructor(val, idx) {
        this.val = val;
        this.idx = idx;
    }
}

const decodeString = function (s) {
    return decodeHelper(s, 0).val;
};

function decodeHelper(s, idx) {
    let ret = '';
    while (true) {
        while (idx < s.length && (s[idx] < '0' || s[idx] > '9') && s[idx] !== ']') {
            ret += s[idx];
            ++idx;
        }
        if (idx >= s.length || s[idx] === ']') {
            break;
        }
        let rep = 0;
        while (s[idx] != '[') {
            rep = rep * 10 + Number.parseInt(s[idx]);
            ++idx;
        }
        ++idx;  // skip '['
        let subResult = decodeHelper(s, idx);
        idx = subResult.idx;
        for (let i = 0; i < rep; ++i) {
            ret += subResult.val;
        }
        ++idx;  // skip ']'
    }
    return new DecodeResult(ret, idx);
}

module.exports = decodeString;