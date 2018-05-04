/**
 * @param {string} s
 * @return {string}
 */
const shortestPalindrome1 = function (s) {
    if (s.length === 1) {
        return s;
    }
    let mid = s.length >> 1;
    if ((s.length & 1) === 0) {
        let right = getRightRemain(s, mid - 1, mid);
        if (right > 1) {
            return s;
        }
        --mid;
    }
    let right = 1;
    while (mid > 0) {
        right = getRightRemain(s, mid, mid);
        if (right > 1) {
            break;
        }
        right = getRightRemain(s, mid, mid - 1);
        if (right > 1) {
            break;
        }
        --mid;
    }
    let chars = s.substring(right).split('');
    chars.reverse();
    return chars.join('') + s;
};

function getRightRemain(s, left, right) {
    while (left >= 0) {
        if (s[left] !== s[right]) {
            break;
        }
        --left;
        ++right;
    }
    return left < 0 ? right : 1;
}

const shortestPalindrome = function (s) {
    let sc = s.split('');
    sc.reverse();
    rs = sc.join('');
    let remain = 0;
    while (remain < s.length - 1) {
        let half = s.length - remain >> 1;
        let left = s.substr(0, half);
        let right = rs.substr(remain, half);
        if (left === right) {
            break;
        }
        ++remain;
    }
    return rs.substring(0, remain) + s;
};

module.exports = shortestPalindrome;