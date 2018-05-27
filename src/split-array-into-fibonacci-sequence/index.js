const MAX_INT32 = Math.pow(2, 31) - 1;

/**
 * @param {string} S
 * @return {number[]}
 */
const splitIntoFibonacci = function (S) {
    for (let len0 = 1; len0 <= S.length / 2; ++len0) {
        let num0 = Number.parseInt(S.substr(0, len0));
        for (let len1 = 1; len1 <= (S.length - len0) / 2; ++len1) {
            let num1 = Number.parseInt(S.substr(len0, len1));
            let ret = [num0, num1];
            if (findFibonacci(S, len0 + len1, ret)) {
                return ret;
            }
            if (S[len0] === '0') {
                break;
            }
        }
        if (S[0] === '0') {
            break;
        }
    }
    return [];
};

function findFibonacci(S, idx, ret) {
    if (idx === S.length) {
        return ret.length >= 3;
    }
    let sum = ret[ret.length - 1] + ret[ret.length - 2];
    if (sum > MAX_INT32) {
        return false;
    }
    let str = sum.toString();
    if (S.substr(idx, str.length) !== str) {
        return false;
    }
    ret.push(sum);
    return findFibonacci(S, idx + str.length, ret);
}

module.exports = splitIntoFibonacci;