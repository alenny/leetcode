/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function (s) {
    let ret = [];
    restore(s, 0, ret, []);
    return ret;
};

function restore(s, begin, ret, curr) {
    if (curr.length === 4) {
        ret.push(curr.join('.'));
        return;
    }
    if (begin >= s.length) {
        return;
    }
    let end = curr.length < 3 ? begin + 1 : s.length;
    while (end - begin <= 3 && end <= s.length) {
        if (s[begin] === '0' && end - begin > 1) {
            break;
        }
        let part = Number.parseInt(s.substring(begin, end));
        if (part <= 255) {
            curr.push(part);
            restore(s, end, ret, curr);
            curr.pop();
        }
        ++end;
    }
}

module.exports = restoreIpAddresses;