/**
 * @param {string} S
 * @return {string}
 */
const makeLargestSpecial = function (S) {
    let begin = 0;
    while (begin < S.length) {
        let poses = [], pos = begin;
        while ((pos = findSpecialEnd(S, pos)) !== -1) {
            poses.push(pos);
        }
        if (poses.length < 2) {
            ++begin;
            continue;
        }
        let largest = S;
        let prefix = S.substring(0, begin), changed = false;
        for (let e1i = 0; e1i < poses.length - 1; ++e1i) {
            for (let e2i = e1i + 1; e2i < poses.length; ++e2i) {
                let e1 = poses[e1i], e2 = poses[e2i];
                let newStr = prefix + S.substring(e1, e2) + S.substring(begin, e1) + S.substring(e2);
                if (newStr > largest) {
                    largest = newStr;
                    changed = true;
                }
            }
        }
        if (changed) {
            S = largest;
            begin = 0;
        } else {
            ++begin;
        }
    }
    return S;
};

function findSpecialEnd(S, begin) {
    let count0 = 0, count1 = 0;
    let idx = begin;
    while (idx < S.length) {
        if (S[idx++] === '0') {
            ++count0;
        } else {
            ++count1;
        }
        if (count0 > count1) {
            return -1;
        }
        if (count0 === count1) {
            return idx;
        }
    }
    return -1;
}

module.exports = makeLargestSpecial;