/**
 * @param {string} num
 * @return {boolean}
 */
const isAdditiveNumber = function (num) {
    if (num.length < 3) {
        return false;
    }
    let bp1 = 1;
    while (bp1 < num.length / 2) {
        let bp2 = bp1 + 1;
        while (bp2 <= Math.min((num.length + bp1) / 2, num.length - bp1)) {
            if (tryIt(num, bp1, bp2)) {
                return true;
            }
            if (num[bp1] === '0') {
                break;
            }
            ++bp2;
        }
        if (num[0] === '0') {
            break;
        }
        ++bp1;
    }
    return false;
};

function tryIt(num, bp1, bp2) {
    let bp0 = 0;
    while (bp0 < num.length && bp1 < num.length && bp2 < num.length) {
        let sumArr = getSum(num, bp0, bp1, bp2);
        let nextIdx = compareSum(num, bp2, sumArr);
        if (nextIdx === -1) {
            return false;
        }
        if (nextIdx === num.length) {
            return true;
        }
        bp0 = bp1;
        bp1 = bp2;
        bp2 = nextIdx;
    }
    return false;
}

function compareSum(num, bp2, sumArr) {
    let p2 = bp2, si = sumArr.length - 1;
    while (si >= 0) {
        if (num[p2] - sumArr[si] !== 0) {
            return -1;
        }
        --si;
        ++p2;
    }
    return p2;
}

function getSum(num, bp0, bp1, bp2) {
    let p0 = bp1 - 1, p1 = bp2 - 1;
    let result = [];
    let extra = 0;
    while (p0 >= bp0 && p1 >= bp1) {
        let sum = extra + (num[p0] - 0) + (num[p1] - 0);
        result.push(sum % 10);
        extra = Math.floor(sum / 10);
        --p0;
        --p1;
    }
    if (p0 < bp0) {
        while (p1 >= bp1) {
            let sum = extra + (num[p1] - 0);
            result.push(sum % 10);
            extra = Math.floor(sum / 10);
            --p1;
        }
    }
    if (p1 < bp1) {
        while (p0 >= bp0) {
            let sum = extra + (num[p0] - 0);
            result.push(sum % 10);
            extra = Math.floor(sum / 10);
            --p0;
        }
    }
    if (extra > 0) {
        result.push(extra);
    }
    return result;
}

module.exports = isAdditiveNumber;