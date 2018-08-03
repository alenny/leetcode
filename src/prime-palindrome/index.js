/**
 * @param {number} N
 * @return {number}
 */
const primePalindrome = function (N) {
    let p = firstPalindrome(N);
    while (true) {
        if (p >= N && isPrime(p)) {
            return p;
        }
        p = nextPalindrome(p);
    }
};

function firstPalindrome(curr) {
    let currStr = curr.toString().split('');
    let halfLen = currStr.length + 1 >> 1;
    for (let i = currStr.length - 1; i >= halfLen; --i) {
        currStr[i] = currStr[currStr.length - 1 - i];
    }
    return Number.parseInt(currStr.join(''));
}

function nextPalindrome(curr) {
    let currStr = curr.toString();
    let halfLen = currStr.length + 1 >> 1;
    let prefix = currStr.substr(0, halfLen).split('');
    let idx = halfLen - 1;
    while (idx >= 0) {
        if (prefix[idx] !== '9') {
            prefix[idx] = prefix[idx] - 0 + 1;
            break;
        }
        prefix[idx] = '0';
        --idx;
    }
    if (idx < 0) {
        let nxt = new Array(currStr.length + 1);
        nxt.fill('0');
        nxt[0] = nxt[currStr.length] = '1';
        return Number.parseInt(nxt.join(''));
    }
    let postfix = prefix.slice(0, currStr.length - halfLen);
    postfix.reverse();
    return Number.parseInt(prefix.join('') + postfix.join(''));
}

function isPrime(n) {
    if (n < 2) {
        return false;
    }
    for (let factor = 2; factor <= Math.sqrt(n); ++factor) {
        if (n % factor === 0) {
            return false;
        }
    }
    return true;
}

module.exports = primePalindrome;