/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const MOD_FACTOR = 1337;

const superPowByPow2 = function (a, b) {
    let bits = numberToBinary(b);
    if (bits.length === 0) {
        return 1;
    }
    // cache[i] = pow(a,pow(2,i)) % MOD_FACTOR
    let cache = [a % MOD_FACTOR];
    let ret = bits[0] ? cache[0] : 1;
    for (let i = 1; i < bits.length; ++i) {
        cache[i] = cache[i - 1] * cache[i - 1] % MOD_FACTOR;
        if (bits[i]) {
            ret = ret * cache[i] % MOD_FACTOR;
        }
    }
    return ret;
};

function numberToBinary(b) {
    let bits = [];
    while (b.length > 1 || b[0] > 0) {
        bits.push(b[b.length - 1] & 1);
        b = div2(b);
    }
    return bits;
}

function div2(b) {
    let ret = [];
    let extra = 0;
    for (let i = 0; i < b.length; ++i) {
        let tmp = extra * 10 + b[i] >> 1;
        extra = b[i] & 1;
        if (tmp === 0 && ret.length === 0) {
            continue;
        }
        ret.push(tmp);
    }
    return ret;
}

const superPow = function (a, b) {
    if (b.length === 1 && b[0] === 0) {
        return 1;
    }
    if (a % MOD_FACTOR === 0) {
        return 0;
    }
    if (a > MOD_FACTOR) {
        a = a % MOD_FACTOR;
    }
    // find the repeated pattern of pow(a,i+1) % MOD_FACTOR, i>=0
    let remainders = [];
    let remainder = a % MOD_FACTOR;
    do {
        remainders.push(remainder);
        remainder = remainder * a % MOD_FACTOR;
    } while (remainder !== remainders[0]);
    // get the result of b % remainders.length
    let pos = modBigNumber(b, remainders.length);
    return remainders[pos];
};

function modBigNumber(b, factor) {
    let currNumber = 0;
    for (let i = 0; i < b.length; ++i) {
        currNumber = currNumber * 10 + b[i];
        if (currNumber >= factor) {
            currNumber = currNumber % factor;
        }
    }
    currNumber %= factor;
    return currNumber === 0 ? factor - 1 : currNumber - 1;
}

module.exports = superPow;