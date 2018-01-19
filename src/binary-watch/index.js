/**
 * @param {number} num
 * @return {string[]}
 */
const readBinaryWatch = function (num) {
    if (num > 8) {
        return [];
    }
    let ret = [];
    for (let hourOnes = 0; hourOnes <= Math.min(3, num); ++hourOnes) {
        let minOnes = num - hourOnes;
        if (minOnes > 5) {
            continue;
        }
        let hours = getAllNums(4, hourOnes, 11);
        let mins = getAllNums(6, minOnes, 59);
        for (let h of hours) {
            for (let m of mins) {
                ret.push(h + ':' + minToString(m));
            }
        }
    }
    return ret;
};

function minToString(min) {
    return min < 10 ? '0' + min.toString() : min.toString();
}

function getAllNums(totalBits, ones, max) {
    if (totalBits === 0 || ones > totalBits) {
        return [];
    }
    if (ones === 0) {
        return [0];
    }
    if (totalBits === 1 && ones === 1) {
        return [1];
    }
    let result = [];
    let left = getAllNums(totalBits - 1, ones - 1, max);
    left.forEach(e => {
        let t = (e << 1) | 1;
        if (t <= max) {
            result.push(t);
        }
    });
    left = getAllNums(totalBits - 1, ones, max);
    left.forEach(e => {
        let t = (e << 1);
        if (t <= max) {
            result.push(t);
        }
    });
    return result;
}

module.exports = readBinaryWatch;