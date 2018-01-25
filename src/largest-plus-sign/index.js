/**
 * @param {number} N
 * @param {number[][]} mines
 * @return {number}
 */
const orderOfLargestPlusSign = function (N, mines) {
    let maxPossibleOrder = N + 1 >> 1;
    let rKeyMap = new Map(), cKeyMap = new Map();
    for (let mine of mines) {
        let r = mine[0], c = mine[1];
        let ySet = rKeyMap.get(r);
        if (!ySet) {
            rKeyMap.set(r, [c]);
        } else {
            ySet.push(c);
        }
        let xSet = cKeyMap.get(c);
        if (!xSet) {
            cKeyMap.set(c, [r]);
        } else {
            xSet.push(r);
        }
    }
    for (let order = maxPossibleOrder; order > 0; --order) {
        let rMin = 0 + order - 1;
        let rMax = N - order;
        let cMin = rMin;
        let cMax = rMax;
        for (let r = rMin; r <= rMax; ++r) {
            let mineCSet = rKeyMap.get(r);
            for (let c = cMin; c <= cMax; ++c) {
                let hasResult = true;
                if (mineCSet) {
                    for (let mineC of mineCSet) {
                        if (mineC >= c - order + 1 && mineC <= c + order - 1) {
                            hasResult = false;
                            break;
                        }
                    }
                }
                if (!hasResult) {
                    continue;
                }
                let mineRSet = cKeyMap.get(c);
                if (mineRSet) {
                    for (let mineR of mineRSet) {
                        if (mineR >= r - order + 1 && mineR <= r + order - 1) {
                            hasResult = false;
                            break;
                        }
                    }
                }
                if (hasResult) {
                    return order;
                }
            }
        }
    }
    return 0;
};

module.exports = orderOfLargestPlusSign;